/* Mi profe – kleiner Server (Cloudflare Worker) für Freunde & Familie.
   Aufgaben: Sync per Code (ohne Konto, gleichzeitig Sicherung) und KI über einen gemeinsamen Gemini-Schlüssel.
   Schutz: alles Neue braucht einen Einladungscode (INVITES); KI mit Tageslimit pro Einladung.

   Einstellungen (Cloudflare → Worker → Settings → Variables / `wrangler secret put …`):
     GEMINI_KEY  – Gemini-API-Schlüssel (Geheimnis, nie ins Repo)
     INVITES     – Einladungen „Name:CODE,Name:CODE“, z. B. „Oma:SOL-4821,Ben:LUNA-7733“ (Geheimnis)
     AI_LIMIT    – KI-Anfragen pro Einladung und Tag (Standard 60)
     ORIGINS     – erlaubte Webseiten, Komma-getrennt (Standard: GitHub Pages + localhost)
   Speicher: KV-Namespace mit dem Namen DATA.
     code:<SYNC>          → {invite, created}      (Sync-Code existiert)
     data:<SYNC>:<datei>  → Fortschritt (JSON-Text) pro Lernsprache (Dateiname = LANG.gist)
     ai:<INVITE>:<datum>  → Anzahl KI-Anfragen an diesem Tag

   API (alles JSON):
     POST /api/check           {invite}                 → {ok, name, limit}
     POST /api/sync/new        {invite}                 → {code}
     GET  /api/sync/<code>/<datei>                      → gespeicherter Fortschritt oder {} (404 = Code unbekannt)
     PUT  /api/sync/<code>/<datei>   Body = Fortschritt → {ok, t}
     POST /api/ai              {invite, model, body}    → Antwort von Gemini (Header X-AI-Left = verbleibende Anfragen heute)
*/
const DEFAULT_ORIGINS = ['https://jonasgross2.github.io', 'http://localhost:8765', 'http://localhost:8767'];
const MAX_DATA = 4 * 1024 * 1024;               // 4 MB pro Datei (KV erlaubt 25 MB)
const WORDS = ['SOL', 'LUNA', 'MAR', 'RIO', 'MONTE', 'FLOR', 'NUBE', 'LAGO', 'ROCA', 'PINO', 'TIGRE', 'LOBO', 'OSO', 'GATO', 'BUHO', 'PEZ',
  'AVE', 'ROSA', 'LIMA', 'MANGO', 'COCO', 'TORO', 'PUMA', 'FARO', 'ISLA', 'VIENTO', 'FUEGO', 'NIEVE', 'TRIGO', 'OLIVO'];
const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';      // ohne I und O (Verwechslung mit 1 und 0)

function invites(env) {
  const m = {};
  String(env.INVITES || '').split(',').map(s => s.trim()).filter(Boolean).forEach(e => {
    const i = e.lastIndexOf(':'); const name = i > 0 ? e.slice(0, i).trim() : e; const code = (i > 0 ? e.slice(i + 1) : e).trim().toUpperCase();
    if (code) m[code] = name;
  });
  return m;
}
const normCode = c => String(c || '').trim().toUpperCase().replace(/\s+/g, '');
const today = () => new Date().toISOString().slice(0, 10);
function rnd(n) { const a = new Uint32Array(n); crypto.getRandomValues(a); return Array.from(a); }
function newSyncCode() {
  const [w, d1, d2, d3, d4, l1, l2, l3, l4] = rnd(9);
  return WORDS[w % WORDS.length] + '-' + [d1, d2, d3, d4].map(x => x % 10).join('') + '-' + [l1, l2, l3, l4].map(x => LETTERS[x % LETTERS.length]).join('');
}

function cors(req, env) {
  const origin = req.headers.get('Origin') || '';
  const allowed = (env.ORIGINS ? String(env.ORIGINS).split(',').map(s => s.trim()) : DEFAULT_ORIGINS);
  const h = { 'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Expose-Headers': 'X-AI-Left', 'Access-Control-Max-Age': '86400', 'Vary': 'Origin' };
  if (allowed.includes(origin)) h['Access-Control-Allow-Origin'] = origin;
  return h;
}
const json = (data, status, headers) => new Response(JSON.stringify(data), { status: status || 200, headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, headers || {}) });

async function handle(req, env) {
  const url = new URL(req.url);
  const p = url.pathname.replace(/\/+$/, '').split('/').filter(Boolean); // ['api', …]
  if (p[0] !== 'api') return json({ error: 'nicht gefunden' }, 404);
  const INV = invites(env);
  const body = async () => { try { return await req.json(); } catch (e) { return {}; } };

  if (p[1] === 'check' && req.method === 'POST') {
    const b = await body(); const name = INV[normCode(b.invite)];
    return name ? json({ ok: true, name, limit: +(env.AI_LIMIT || 60) }) : json({ ok: false, error: 'Einladungscode unbekannt' }, 403);
  }

  if (p[1] === 'sync') {
    if (p[2] === 'new' && req.method === 'POST') {
      const b = await body(); const inv = normCode(b.invite);
      if (!INV[inv]) return json({ error: 'Einladungscode unbekannt' }, 403);
      let code = newSyncCode();
      for (let k = 0; k < 5 && await env.DATA.get('code:' + code); k++) code = newSyncCode();
      await env.DATA.put('code:' + code, JSON.stringify({ invite: inv, created: Date.now() }));
      return json({ code });
    }
    const code = normCode(p[2]), file = String(p[3] || '');
    if (!/^[A-Z]+-\d{4}-[A-Z]{4}$/.test(code) || !/^[\w.-]{1,80}$/.test(file)) return json({ error: 'ungültig' }, 400);
    if (!await env.DATA.get('code:' + code)) return json({ error: 'Sync-Code unbekannt' }, 404);
    const key = 'data:' + code + ':' + file;
    if (req.method === 'GET') { const d = await env.DATA.get(key); return new Response(d || '{}', { headers: { 'Content-Type': 'application/json; charset=utf-8' } }); }
    if (req.method === 'PUT') {
      const txt = await req.text();
      if (txt.length > MAX_DATA) return json({ error: 'zu groß' }, 413);
      try { JSON.parse(txt); } catch (e) { return json({ error: 'kein JSON' }, 400); }
      await env.DATA.put(key, txt); return json({ ok: true, t: Date.now() });
    }
  }

  if (p[1] === 'ai' && req.method === 'POST') {
    const b = await body(); const inv = normCode(b.invite);
    if (!INV[inv]) return json({ error: { message: 'Einladungscode unbekannt' } }, 403);
    if (!env.GEMINI_KEY) return json({ error: { message: 'Auf dem Server ist kein Gemini-Schlüssel hinterlegt' } }, 500);
    const limit = +(env.AI_LIMIT || 60), ck = 'ai:' + inv + ':' + today();
    const used = +(await env.DATA.get(ck) || 0);
    if (used >= limit) return json({ error: { message: 'Tageslimit für die KI erreicht – morgen geht es weiter' } }, 429, { 'X-AI-Left': '0' });
    const model = /^[\w.-]{1,60}$/.test(b.model || '') ? b.model : 'gemini-flash-latest';
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_KEY }, body: JSON.stringify(b.body || {})
    });
    if (r.ok) await env.DATA.put(ck, String(used + 1), { expirationTtl: 3 * 86400 });
    return new Response(await r.text(), { status: r.status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'X-AI-Left': String(Math.max(0, limit - used - (r.ok ? 1 : 0))) } });
  }
  return json({ error: 'nicht gefunden' }, 404);
}

export default {
  async fetch(req, env) {
    const c = cors(req, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: c });
    let res;
    try { res = await handle(req, env); } catch (e) { res = json({ error: 'Serverfehler: ' + e.message }, 500); }
    const h = new Headers(res.headers); for (const k in c) h.set(k, c[k]);
    return new Response(res.body, { status: res.status, headers: h });
  }
};
