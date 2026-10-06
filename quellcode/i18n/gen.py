"""Baut src/<lern>/tr_<ui>.js aus den Übersetzungslisten in i18n/<lern>_<ui>/<abschnitt>.py.
Jede Datei enthält EN=[…] (bzw. TR=[…]) in derselben Reihenfolge wie course_de.json[<abschnitt>].
course_de.json neu erzeugen (nach Inhaltsänderungen):
  /System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc i18n/extract.js -- src > i18n/course_de.json
Achtung: Dann verschieben sich ggf. Indizes – neue/geänderte Texte erscheinen einfach auf Deutsch, bis sie übersetzt sind."""
import json,pathlib,runpy,sys
base=pathlib.Path(__file__).resolve().parent
de=json.load(open(base/'course_de.json'))
# zweiter Suchlauf (extract_extra.js): fehlende Texte, zusammen als Abschnitt 'x_all' übersetzbar
if (base/'course_de_extra.json').exists():
    ex=json.load(open(base/'course_de_extra.json'));de.update(ex)
    de['x_all']=[s for k in ex for s in ex[k]]
for d in sorted(p for p in base.iterdir() if p.is_dir() and '_' in p.name):
    lern,ui=d.name.split('_');out={};n=0
    for f in sorted(d.glob('*.py')):
        key=f.stem;g=runpy.run_path(str(f));tr=g.get('EN') or g.get('TR')
        src=de[key]
        if len(tr)!=len(src):sys.exit(f'{d.name}/{f.name}: {len(tr)} Übersetzungen, aber {len(src)} Texte')
        for a,b in zip(src,tr):
            if b and b!=a:out[a]=b;n+=1
    js='/* automatisch erzeugt von i18n/gen.py – nicht von Hand ändern */\nwindow.COURSE_TR=window.COURSE_TR||{};COURSE_TR.%s=COURSE_TR.%s||{};COURSE_TR.%s.%s='%(lern,lern,lern,ui)+json.dumps(out,ensure_ascii=False)+';\n'
    (base.parent/'src'/lern/f'tr_{ui}.js').write_text(js);print(d.name,n,'Übersetzungen')
