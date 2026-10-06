"""Übersetzungen nach Inhaltsänderungen neu zuordnen – über den DEUTSCHEN TEXT, nicht über die Position.
  1) python3 i18n/remap.py extract   → course_de.json + course_de_extra.json neu erzeugen (jsc), alte Zuordnung de→en sichern
  2) python3 i18n/remap.py todo      → i18n/es_en/<abschnitt>.py neu schreiben (vorhandene Übersetzungen übernommen,
                                        fehlende = None) und i18n/todo/<abschnitt>.json mit den fehlenden deutschen Texten
  3) Übersetzungen als i18n/todo/<abschnitt>.en.json (Liste, gleiche Reihenfolge wie <abschnitt>.json) ablegen
  4) python3 i18n/remap.py fill      → trägt sie ein; None bleibt Deutsch ("" = absichtlich unverändert)
  5) python3 i18n/gen.py              → src/es/tr_en.js
Läuft im Ordner quellcode/."""
import json, pathlib, runpy, subprocess, sys
B = pathlib.Path(__file__).resolve().parent
JSC = '/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
LANG = 'es_en'
D = B / LANG
TODO = B / 'todo'
OLDMAP = B / 'todo' / '_oldmap.json'

def sections():
    de = json.load(open(B / 'course_de.json'))
    if (B / 'course_de_extra.json').exists():
        ex = json.load(open(B / 'course_de_extra.json'))
        de['x_all'] = [s for k in ex for s in ex[k]]
    return de

def oldmap():
    """de → en aus den bisherigen Listen (inkl. "" = absichtlich unverändert)."""
    de = sections(); m = {}
    for f in sorted(D.glob('*.py')):
        tr = runpy.run_path(str(f)).get('EN') or []
        for a, b in zip(de.get(f.stem, []), tr):
            if b is not None: m[a] = b
    return m

def write_py(sec, lst):
    body = ',\n'.join(json.dumps(x, ensure_ascii=False) if x is not None else 'None' for x in lst)
    (D / f'{sec}.py').write_text('EN = [\n' + body + '\n]\n', encoding='utf-8')

cmd = sys.argv[1] if len(sys.argv) > 1 else ''
if cmd == 'extract':
    TODO.mkdir(exist_ok=True)
    m = oldmap(); OLDMAP.write_text(json.dumps(m, ensure_ascii=False), encoding='utf-8')
    src = str(B.parent / 'src' / 'es')
    out = subprocess.run([JSC, str(B / 'extract.js'), '--', src], capture_output=True, text=True, check=True).stdout
    (B / 'course_de.json').write_text(out, encoding='utf-8')
    out = subprocess.run([JSC, str(B / 'extract_extra.js'), '--', src, str(B / 'course_de.json')], capture_output=True, text=True, check=True).stdout
    (B / 'course_de_extra.json').write_text(out, encoding='utf-8')
    print('alte Zuordnungen gesichert:', len(m))
elif cmd == 'todo':
    m = json.loads(OLDMAP.read_text(encoding='utf-8')); de = sections(); total = 0
    for sec, texts in de.items():
        lst = [m.get(t) for t in texts]
        missing = [t for t, x in zip(texts, lst) if x is None]
        write_py(sec, lst)
        f = TODO / f'{sec}.json'
        if missing: f.write_text(json.dumps(missing, ensure_ascii=False, indent=0), encoding='utf-8'); total += len(missing)
        elif f.exists(): f.unlink()
    print('fehlende Übersetzungen:', total)
elif cmd == 'fill':
    de = sections(); n = 0
    for f in sorted(TODO.glob('*.en.json')):
        sec = f.name[:-len('.en.json')]
        missing = json.load(open(TODO / f'{sec}.json')); en = json.load(open(f))
        if len(missing) != len(en): sys.exit(f'{sec}: {len(en)} Übersetzungen für {len(missing)} Texte')
        tr = dict(zip(missing, en))
        lst = runpy.run_path(str(D / f'{sec}.py'))['EN']
        lst = [tr.get(t, x) if x is None else x for t, x in zip(de[sec], lst)]
        write_py(sec, lst); n += len(en)
    print('eingetragen:', n)
elif cmd == 'put':
    # python3 i18n/remap.py put <abschnitt> <datei.py mit EN=[…]> – prüft Anzahl, HTML-Tags und {Wort|…}-Glossen
    import re
    sec, f = sys.argv[2], sys.argv[3]
    missing = json.load(open(TODO / f'{sec}.json')); en = runpy.run_path(f)['EN']
    if len(missing) != len(en): sys.exit(f'{sec}: {len(en)} Übersetzungen für {len(missing)} Texte')
    tags = lambda t: re.findall(r'<(/?[a-z0-9]+)', t); gl = lambda t: re.findall(r'\{([^|}]+)\|', t)
    bad = [(i, m[:60]) for i, (m, e) in enumerate(zip(missing, en)) if tags(m) != tags(e) or gl(m) != gl(e)]
    for b in bad: print('  !! Tags/Glossen weichen ab:', b)
    if bad: sys.exit(1)
    (TODO / f'{sec}.en.json').write_text(json.dumps(en, ensure_ascii=False), encoding='utf-8'); print(sec, 'ok', len(en))
else:
    print(__doc__)
