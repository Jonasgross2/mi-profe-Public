"""Neue Oberflächentexte in ui_tr.js eintragen: python3 i18n/add_ui.py datei.json
datei.json = {"deutscher Text": ["English", "Español", "Português"], …} – vorhandene Schlüssel werden ersetzt."""
import json, re, sys, pathlib
p = pathlib.Path(__file__).resolve().parent.parent / 'src' / 'core' / 'ui_tr.js'
new = json.load(open(sys.argv[1], encoding='utf-8'))
out, k = [], 0
for ln in p.read_text(encoding='utf-8').split('\n'):
    m = re.match(r'^"(.*?)": ', ln)
    if m and json.loads('"' + m.group(1) + '"') in new: continue
    out.append(ln)
    if ln.startswith('"Sprache der App":'):
        for de, v in new.items(): out.append(json.dumps(de, ensure_ascii=False) + ': ' + json.dumps(v[k], ensure_ascii=False) + ',')
        k += 1
assert k == 3, 'Ankerzeile nicht gefunden'
p.write_text('\n'.join(out), encoding='utf-8'); print('ok', len(new))
