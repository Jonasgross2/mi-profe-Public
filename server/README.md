# Mi-profe-Server (Cloudflare Worker)

Kleiner Server für Freunde & Familie: **Sync per Code** (ohne Konto, zugleich Sicherung) und **KI über deinen Gemini-Schlüssel**
(mit Einladungscode und Tageslimit). Kostenlos im Cloudflare-Gratisplan (Grenzen: 100 000 Anfragen und 1 000 Speichervorgänge pro Tag –
die App speichert höchstens alle 30 Sekunden, das reicht für eine Familie).

Code: `worker.js` (alles in einer Datei), Einstellungen: `wrangler.toml`.

## Einrichten – Weg A: im Browser (ohne Installation)
1. Kostenloses Konto auf <https://dash.cloudflare.com> anlegen.
2. **Storage & Databases → KV → Create** – Name `mi-profe-data`.
3. **Workers & Pages → Create → Worker** – Name `mi-profe` → Deploy → **Edit code** → Inhalt von `worker.js` komplett einfügen → Deploy.
4. Im Worker **Settings → Bindings → Add → KV namespace**: Variable name `DATA`, Namespace `mi-profe-data`.
5. **Settings → Variables and Secrets → Add**:
   - `GEMINI_KEY` (Typ *Secret*): dein Schlüssel von <https://aistudio.google.com/apikey>
   - `INVITES` (Typ *Secret*): Einladungen, z. B. `Oma:SOL-4821,Ben:LUNA-7733,Jonas:MAR-1111`
   - `AI_LIMIT` (Typ *Text*): z. B. `60` (KI-Anfragen pro Einladung und Tag)
6. Die Adresse des Workers (z. B. `https://mi-profe.DEINNAME.workers.dev`) in `quellcode/build.py` bei `SERVER_URL` eintragen, bauen, hochladen.

## Einrichten – Weg B: im Terminal (wrangler)
```
brew install node
cd server
npx wrangler login                      # öffnet den Browser, dort anmelden
npx wrangler kv namespace create DATA   # ausgegebene id in wrangler.toml eintragen
npx wrangler secret put GEMINI_KEY      # Schlüssel eintippen (erscheint nicht im Chat/Repo)
npx wrangler secret put INVITES         # z. B. Oma:SOL-4821,Ben:LUNA-7733
npx wrangler deploy                     # zeigt die Adresse
```

## Einladungen verteilen
Link schicken: `https://jonasgross2.github.io/mi-profe-Public/Spanisch-App-Web/?einladung=SOL-4821`
– wer ihn öffnet, ist freigeschaltet (KI + neue Sicherung). Einladungen ändern/entfernen: `INVITES` neu setzen.
Ein Code pro Person ist sinnvoll: dann hat jede Person ihr eigenes Tageslimit.

## Datenschutz
- Gespeichert wird nur der Lernfortschritt (wie im Browser), unter einem zufälligen Sync-Code (z. B. `SOL-4821-KXPA`). Wer den Code kennt, kann den Stand lesen.
- KI-Anfragen gehen über den Server an Google Gemini. Im kostenlosen Gemini-Tarif darf Google sie zur Verbesserung nutzen.
- Der Gemini-Schlüssel liegt nur als Geheimnis bei Cloudflare – nie in der App oder im Repo.

## Testen ohne Cloudflare
Der Code nutzt nur Web-Standards (`fetch`, `Request`, `Response`). Im Browser lässt er sich mit einem nachgebauten Speicher prüfen:
`const W=(await import('./worker.js')).default; const KV={}; const ENV={DATA:{get:k=>Promise.resolve(KV[k]??null),put:(k,v)=>{KV[k]=v}},INVITES:'Test:SOL-1234'}; await W.fetch(new Request('https://x/api/check',{method:'POST',body:'{"invite":"SOL-1234"}'}),ENV)`
