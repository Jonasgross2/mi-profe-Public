"""Baut src/<kurs>/tr_<ziel>.js (COURSE_TR) aus den Übersetzungslisten i18n/kurse/<kurs>/<ziel>/<abschnitt>.py – für alle Kurse und Zielsprachen.
Jede Datei enthält EN=[…] (bzw. TR=[…]) in derselben Reihenfolge wie i18n/kurse/<kurs>/course.json[<abschnitt>]
(Texte in der Ausgangssprache der Erklärungen). Nach Inhaltsänderungen erst remap.py (extract → todo → put → fill), dann gen.py."""
import json, pathlib, runpy, sys
base = pathlib.Path(__file__).resolve().parent
for K in sorted(p for p in (base / 'kurse').iterdir() if p.is_dir()):
    kurs = K.name
    src = json.load(open(K / 'course.json'))
    # zweiter Suchlauf (extract_extra.js): fehlende Texte, zusammen als Abschnitt 'x_all' übersetzbar
    if (K / 'course_extra.json').exists():
        ex = json.load(open(K / 'course_extra.json')); src.update(ex)
        src['x_all'] = [s for k in ex for s in ex[k]]
    for d in sorted(p for p in K.iterdir() if p.is_dir() and p.name != 'todo'):
        ziel = d.name; out = {}; n = 0
        for f in sorted(d.glob('*.py')):
            key = f.stem; g = runpy.run_path(str(f)); tr = g.get('EN') or g.get('TR')
            texts = src[key]
            if len(tr) != len(texts): sys.exit(f'{kurs}/{ziel}/{f.name}: {len(tr)} Übersetzungen, aber {len(texts)} Texte')
            for a, b in zip(texts, tr):
                if b and b != a: out[a] = b; n += 1
        js = '/* automatisch erzeugt von i18n/gen.py – nicht von Hand ändern */\nwindow.COURSE_TR=window.COURSE_TR||{};COURSE_TR.%s=COURSE_TR.%s||{};COURSE_TR.%s.%s=' % (kurs, kurs, kurs, ziel) + json.dumps(out, ensure_ascii=False) + ';\n'
        (base.parent / 'src' / kurs / f'tr_{ziel}.js').write_text(js); print(kurs, '→', ziel, n, 'Übersetzungen')
