"""Neuen Kurs (Lernsprache) anlegen: Ordner src/<code>/ mit Steckbrief, Stufen und einer Beispiel-Unidad + Eintrag in PACKS (build.py).
Danach erscheint der Kurs sofort in der Sprachauswahl („Was möchtest du lernen?“ bzw. Mehr → Sprache & Profil).

  python3 neuer_kurs.py <code> <Name auf Deutsch> <Flagge> [--stimme it-IT] [--basis de]
  z. B.  python3 neuer_kurs.py it Italienisch 🇮🇹 --stimme it-IT

<code> = Sprachcode der Lernsprache (it, fr, pt, en, de …), --basis = Sprache, in der die Erklärungen geschrieben werden (Standard de).
Danach: Inhalte in src/<code>/c_*.js schreiben (Format wie src/es/, Felder siehe CLAUDE.md „Sprachpaket-Schnittstelle“),
neue Dateien in build.py bei PACKS['<code>']['files'] eintragen (Steckbrief lang_<code>.js bleibt vorn), python3 build.py.
'stufen' in PACKS = von–bis für die Sprachauswahl (z. B. ['A1','B1']), mitziehen, wenn der Kurs wächst.
Läuft im Ordner quellcode/. Ändert nichts, wenn es den Ordner schon gibt."""
import ast, pathlib, re, sys

Q = pathlib.Path(__file__).resolve().parent
args = sys.argv[1:]
def opt(name, default):
    if name in args:
        i = args.index(name); v = args[i + 1]; del args[i:i + 2]; return v
    return default
voice = opt('--stimme', ''); basis = opt('--basis', 'de')
if len(args) != 3: sys.exit(__doc__)
code, name, flag = args
if not re.fullmatch(r'[a-z]{2,3}', code): sys.exit('Sprachcode bitte als 2–3 Kleinbuchstaben, z. B. it')
voice = voice or f'{code}-{code.upper()}'
D = Q / 'src' / code
if D.exists(): sys.exit(f'src/{code}/ gibt es schon – nichts geändert.')

bp = Q / 'build.py'; src = bp.read_text(encoding='utf-8')
line = next(l for l in src.splitlines() if l.startswith('PACKS='))
packs = ast.literal_eval(line[len('PACKS='):])
if code in packs: sys.exit(f'{code} steht schon in PACKS (build.py).')
adj = name[0].lower() + name[1:]
lang_js = f"""/* {name}-Kurs: Steckbrief (wird zuerst geladen, danach die Inhalte). Alle Felder: CLAUDE.md → „Sprachpaket-Schnittstelle“.
   Texte hier sind in der Ausgangssprache der Erklärungen ({basis}); die Oberfläche übersetzt sie selbst. */
defineLang('{code}',{{name:'{name}',flag:'{flag}',into:'ins {name + "e" if name.endswith("isch") else name}',onLang:'auf {name}',adj:'{adj}',voice:'{voice}',
  keys:[],                       /* Sonderzeichen-Tasten über dem Eingabefeld, z. B. ['à','è','ì','ò','ù'] */
  unit:'Lektion',units:'Lektionen',  /* wie eine Kurseinheit heißt (Spanisch: Unidad) */
  greet:['Guten Morgen','Guten Tag','Guten Abend'],  /* ERSETZEN: Begrüßung auf der Startseite IN DER LERNSPRACHE (morgens, tags, abends) */
  teacher:'Du bist ein geduldiger, motivierender {name}lehrer für Jonas. Erklärungen kurz und konkret, auf dem Niveau der jeweiligen Lektion. Korrigiere nur echte Fehler. Triff keine Annahmen über Alter, Herkunft, Muttersprache, Beruf oder Lebenssituation von Jonas.',
  sampleSay:['Hallo!'],          /* ERSETZEN: Probesätze für die Stimmauswahl, IN DER LERNSPRACHE */
  voiceHint:'',                  /* Tipp, welche Systemstimme gut klingt */
  baseEx:'{basis}',
  persona:{{name:'Jonas',surname:'Gross',country:'DE',city:'Mannheim'}},  /* für wen die Inhalte geschrieben sind (wird durch Name/Herkunft der lernenden Person ersetzt) */
  /* ERSETZEN: Lob-Wendungen der Oberfläche (dort auf Spanisch) in der neuen Lernsprache – rechts stehen nur Platzhalter: */
  praise:{{'¡Muy bien!':'Sehr gut!','¡Hola!':'Hallo!','¡Excelente!':'Ausgezeichnet!','¡Sigue así!':'Weiter so!','¡Correcto!':'Richtig!','¡Perfecto!':'Perfekt!','¡Eso es!':'Genau!','¡Hecho!':'Geschafft!','¡Bien hecho!':'Gut gemacht!','¡Genial!':'Super!','¡OJO!':'ACHTUNG!'}},
  /* optional (weglassen = Funktion aus): articles:/^(…)\\s+/i  mark:/…/  sampleWords:[…]  accentNote:'…'  pron:/…/  persons:[…]  roleNote:'…'  storySeries:'…' */
  key:'mi-profe-{code}-v1',gist:'mi-profe-fortschritt-{code}.json',
  levels:[{{id:'A1',label:'A1',title:'Einstieg',sub:'Erste Schritte'}}],  /* Stufen; Teilstufen: mehrere Einträge mit demselben label */
  levelOf:{{}},emoji:{{}}           /* Stufe jeder Lektion steht dort als level:'A1'; emoji: {{'Wort':'🍎'}} für Bilder */
}});
"""
unit_js = f"""/* {name}-Kurs A1 – Beispiel-Lektion (ersetzen). Aufgabentypen und Felder wie im Spanischkurs (src/es/c_u0u1.js):
   info, vocab, mc, gap, tr, order, match, listen, speak, dialog, read, free. Feld „es“ = Text in der Lernsprache, „de“ = Ausgangssprache. */
LANGS.{code}.course.units.push({{id:'{code}1',n:1,title:'Erste Schritte',level:'A1',goals:['begrüßen','sich vorstellen'],
 resumen:'<p>Hier steht die Zusammenfassung der Lektion.</p>',
 placement:[ /* Einstufungsfragen (mind. 3) */
  {{t:'mc',q:'„Hallo“ = ?',opts:['Hallo','Tschüss'],a:0}},{{t:'mc',q:'„Danke“ = ?',opts:['Danke','Bitte'],a:0}},{{t:'mc',q:'„Ja“ = ?',opts:['Ja','Nein'],a:0}}],
 lessons:[{{id:'l1',title:'Begrüßen',desc:'Hallo!',steps:[
  {{t:'info',title:'Hallo sagen',html:'<p>Erklärung mit Beispiel: <span class="es-t">Hallo</span>.</p>'}},
  {{t:'vocab',items:[['Hallo','hallo'],['Danke','danke']]}},
  {{t:'mc',q:'Was heißt „danke“?',opts:['Danke','Hallo'],a:0}},
  {{t:'tr',de:'Hallo!',a:['Hallo!']}}]}}]}});
"""
D.mkdir(parents=True)
(D / f'lang_{code}.js').write_text(lang_js, encoding='utf-8')
(D / 'c_a1.js').write_text(unit_js, encoding='utf-8')
packs[code] = {'name': name, 'flag': flag, 'files': [f'{code}/lang_{code}.js', f'{code}/c_a1.js'], 'base': basis, 'stufen': ['A1', 'A1']}
bp.write_text(src.replace(line, 'PACKS=' + repr(packs)), encoding='utf-8')
print(f'Angelegt: src/{code}/lang_{code}.js, src/{code}/c_a1.js · PACKS[{code!r}] in build.py · jetzt: python3 build.py')
