"""Übersetzungs-Automat: übersetzt die Kurstexte per Gemini in eine weitere Erklärsprache.

Ergebnis: i18n/<lern>_<ziel>/<abschnitt>.py mit TR=[…] im gleichen Format wie es_en (danach `python3 i18n/gen.py`).
Als Vorlage dient der deutsche Text + die fertige englische Fassung (es_en): Was in beiden gleich ist, ist Spanisch
und wird gar nicht erst geschickt. Geschützt (vor dem Senden durch Marker ersetzt und danach wieder eingesetzt):
HTML-Tags, Elemente mit class="es-t" (spanische Beispiele) und die linke Seite der Glossen {wort|übersetzung}.
Jede Antwort wird geprüft (alle Marker genau einmal da); fehlerhafte Einträge bleiben "" = Deutsch.

Schlüssel: Umgebungsvariable GEMINI_API_KEY oder Datei ~/.mi-profe-gemini-key (NIE ins Repo).
Aufruf (im Ordner quellcode):
  python3 i18n/auto_tr.py --only u0          # nur einen Abschnitt
  python3 i18n/auto_tr.py                    # alle fehlenden Abschnitte (fertige werden übersprungen)
  python3 i18n/auto_tr.py --dry --only u0    # nur zeigen, was geschickt würde (ohne Gemini)
Optionen: --to pt (Ziel, Standard pt), --force (vorhandene Abschnitte neu), --batch 40, --model gemini-flash-latest
"""
import argparse, json, os, pathlib, re, runpy, sys, time, urllib.request, urllib.error

BASE = pathlib.Path(__file__).resolve().parent
TARGETS = {'pt': 'Brazilian Portuguese (português do Brasil)', 'it': 'Italian', 'fr': 'French'}

ES_EL = re.compile(r'<(\w+)\b[^>]*\bclass="[^"]*\bes-t\b[^"]*"[^>]*>.*?</\1>', re.S)
TAG = re.compile(r'<[^>]+>')
GLOSS = re.compile(r'\{([^{}|]+)\|([^{}]*)\}')


def mask(s):
    """Ersetzt geschützte Teile durch ⟦n⟧ bzw. Glossen durch {Gn|rechts}. Gibt (Text, Marker-Liste, Glossen-Liste) zurück."""
    keep, gl = [], []

    def k(m):
        keep.append(m.group(0)); return '⟦%d⟧' % (len(keep) - 1)

    def g(m):
        gl.append(m.group(1)); return '{G%d|%s}' % (len(gl) - 1, m.group(2))

    s = ES_EL.sub(k, s)
    s = GLOSS.sub(g, s)
    s = TAG.sub(k, s)
    return s, keep, gl


def unmask(t, keep, gl):
    """Setzt die Marker wieder ein; None, wenn etwas fehlt, doppelt ist oder dazuerfunden wurde."""
    for i in range(len(keep)):
        if t.count('⟦%d⟧' % i) != 1: return None
    if len(re.findall(r'⟦\d+⟧', t)) != len(keep): return None
    found = re.findall(r'\{G(\d+)\|', t)
    if sorted(map(int, found)) != list(range(len(gl))): return None
    t = re.sub(r'\{G(\d+)\|', lambda m: '{' + gl[int(m.group(1))] + '|', t)
    return re.sub(r'⟦(\d+)⟧', lambda m: keep[int(m.group(1))], t)


PROMPT = """You translate the explanation texts of a Spanish course (Spain Spanish, vosotros) for learners.
Target language: {lang}. Translate from the German source; the English version is given as a reference for meaning
and shows what must stay unchanged.

Rules:
- Spanish words, phrases and sentences (everything the German and English versions have in common, e.g. "¿Qué tal?") stay EXACTLY as they are.
- Markers like ⟦3⟧ must appear exactly once each, unchanged, at the matching position. Never add new markers.
- In glosses {{G2|Deutscher}} keep "{{G2|" as is and only translate the meaning after the bar into {lang}.
- Keep line breaks, punctuation style, emojis, arrows, numbers and the name "Jonas" / other names.
- Keep the same short, simple level as the source. Address the learner informally (você).
- Grammar terms: use the usual terms in {lang} school grammar.

Return ONLY a JSON object mapping each id to its translation, e.g. {{"0": "…", "1": "…"}}.

Texts:
{items}"""


def key():
    k = os.environ.get('GEMINI_API_KEY')
    f = pathlib.Path.home() / '.mi-profe-gemini-key'
    if not k and f.exists(): k = f.read_text().strip()
    if not k: sys.exit('Kein Schlüssel: GEMINI_API_KEY setzen oder ~/.mi-profe-gemini-key anlegen.')
    return k


def gemini(prompt, model, apikey):
    url = 'https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent' % model
    body = json.dumps({'contents': [{'role': 'user', 'parts': [{'text': prompt}]}],
                       'generationConfig': {'responseMimeType': 'application/json', 'temperature': 0.2}}).encode()
    for attempt in range(6):
        req = urllib.request.Request(url, body, {'Content-Type': 'application/json', 'x-goog-api-key': apikey})
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                d = json.load(r)
            txt = ''.join(p.get('text', '') for p in d['candidates'][0]['content']['parts'])
            return json.loads(txt)
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors='replace')[:300]
            if e.code in (429, 500, 503):
                wait = 30 * (attempt + 1); print(f'  … Gemini {e.code}, warte {wait}s', flush=True); time.sleep(wait); continue
            sys.exit(f'Gemini-Fehler {e.code}: {msg}')
        except (KeyError, IndexError, json.JSONDecodeError, TimeoutError, urllib.error.URLError) as e:
            print(f'  … unbrauchbare Antwort ({type(e).__name__}), neuer Versuch', flush=True); time.sleep(10)
    return {}


def sections():
    de = json.load(open(BASE / 'course_de.json'))
    ex = BASE / 'course_de_extra.json'
    if ex.exists(): de['x_all'] = [s for v in json.load(open(ex)).values() for s in v]
    return de


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--to', default='pt'); ap.add_argument('--learn', default='es')
    ap.add_argument('--only', nargs='*'); ap.add_argument('--force', action='store_true')
    ap.add_argument('--dry', action='store_true'); ap.add_argument('--batch', type=int, default=40)
    ap.add_argument('--model', default='gemini-flash-latest'); ap.add_argument('--pause', type=float, default=7)
    a = ap.parse_args()
    lang = TARGETS.get(a.to) or sys.exit('Unbekannte Zielsprache ' + a.to)
    out_dir = BASE / f'{a.learn}_{a.to}'; ref_dir = BASE / f'{a.learn}_en'
    de = sections(); apikey = None if a.dry else key()
    names = a.only or list(de)
    for name in names:
        dst = out_dir / f'{name}.py'
        if dst.exists() and not a.force: print(f'{name}: schon da, übersprungen'); continue
        src = de[name]; en = runpy.run_path(str(ref_dir / f'{name}.py'))['EN']
        todo = [i for i, (s, e) in enumerate(zip(src, en)) if e and e != s]
        res = [''] * len(src); bad = []
        print(f'{name}: {len(todo)} von {len(src)} Texten zu übersetzen', flush=True)
        for b in range(0, len(todo), a.batch):
            chunk = todo[b:b + a.batch]; masks = {}; items = {}
            for i in chunk:
                ms, keep, gl = mask(src[i]); me, _, _ = mask(en[i])
                masks[i] = (keep, gl); items[str(i)] = {'de': ms, 'en': me}
            prompt = PROMPT.format(lang=lang, items=json.dumps(items, ensure_ascii=False, indent=1))
            if a.dry:
                print(prompt[:3000] + ('\n…' if len(prompt) > 3000 else '')); print(f'({len(prompt)} Zeichen)'); break
            ans = gemini(prompt, a.model, apikey)
            for i in chunk:
                t = ans.get(str(i)); r = unmask(t, *masks[i]) if isinstance(t, str) else None
                if r is None: bad.append(i)
                else: res[i] = r
            print(f'  {min(b + a.batch, len(todo))}/{len(todo)}', flush=True); time.sleep(a.pause)
        if a.dry: continue
        # Einzelne Fehlversuche noch einmal einzeln probieren
        for i in list(bad):
            keep, gl = mask(src[i])[1:]; ms = mask(src[i])[0]; me = mask(en[i])[0]
            ans = gemini(PROMPT.format(lang=lang, items=json.dumps({str(i): {'de': ms, 'en': me}}, ensure_ascii=False)), a.model, apikey)
            t = ans.get(str(i)); r = unmask(t, keep, gl) if isinstance(t, str) else None
            if r is not None: res[i] = r; bad.remove(i)
            time.sleep(a.pause)
        out_dir.mkdir(exist_ok=True)
        dst.write_text('TR = [\n' + ''.join(json.dumps(x, ensure_ascii=False) + ',\n' for x in res) + ']\n', encoding='utf-8')
        print(f'{name}: fertig' + (f', {len(bad)} bleiben Deutsch (Index {bad})' if bad else ''), flush=True)


if __name__ == '__main__':
    main()
