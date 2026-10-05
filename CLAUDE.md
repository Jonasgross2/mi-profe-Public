# Mi profe – Spanisch-Lern-App von Jonas

Persönliche Lern-App (Deutsch-Oberfläche), Kurs von A1 bis B1:
- A1 + A2 Teil 1: Unidad 0–10 nach dem Kursbuch „Meta profesional Plus A1–A2“, plus Übungsblätter aus Jonas' DHBW-Kurs.
- A2 Teil 2: Unidad 11–12 (`c_gaps.js`, ids g1/g2: Grammatik-Lücken aus der „Systematischen Grammatik“ des Kursbuchs, S. 121) und Unidad 13–17 (ids u11–u15); B1: Unidad 18–20 (ids u16–u18). Anzeige-Nummer `n` ≠ id!
- A2/B1 (B1 Teil 1: Unidad 18–21, ids u16–u19; B1 Teil 2: Unidad 22–25, ids u20–u23, `c_b1b.js`), B2 (Teil 1: Unidad 26–29, ids u24–u27, `c_b2.js`; Teil 2: Unidad 30–33, ids u28–u31, `c_b2b.js`), C1 (Teil 1: Unidad 34–36, ids u32–u34, `c_c1.js`; Teil 2: Unidad 37–39, ids u35–u37, `c_c1b.js`) und weitere Stufen: eigene Inhalte nach dem Plan Curricular des Instituto Cervantes (Grammatik-/Themen-Inventare je Stufe). Keine Inhalte aus Büchern von Schattenbibliotheken (Anna's Archive o. Ä.) übernehmen.
Live: https://jonasgross2.github.io/mi-profe-Public/Spanisch-App-Web/ (GitHub Pages, Branch main, Root).

## Aufbau
- Stufen-Reiter (`levelTabs` in engine.js): oben die GER-Stufen (`LEVELS[].label`: A1 … C2), darunter „Teil 1 | Teil 2“, wenn mehrere `LEVELS`-Einträge dasselbe `label` haben. Neue Teilstufe = neuer Eintrag in `levels.js` (id z. B. 'B2b', label 'B2') + Titel/Untertitel in `ui_tr.js`.
- `quellcode/src/` – Quelltext: `engine.js` (App-Logik), `app.css`, Inhalte `c_*.js` (`c_a2b.js` = A2 Teil 2, `c_b1.js` = B1), `placement.js` (Einstufungsfragen U0–10), `levels.js` (Stufen `LEVELS`, Zuordnung `LEVEL_OF`, Emoji-Bilder `EMOJI`)
- Neue Unidades: `level:'A2b'|'B1'` setzen, Einstufungsfragen als `placement:[…]` direkt in der Unidad (mind. 3, besser 6). Vokabeln können als 3. Element ein Emoji haben: `['la manzana','der Apfel','🍎']`. Neue Content-Dateien in `build.py` (beide Listen) vor `placement.js` eintragen.
- Jede Lektion hat 3 Runden (`S.lessons[k].r`): 1 Lernen (die Lektion selbst), 2 Üben (`#round/u/l/2`, gemischt + generierte Vokabelaufgaben, Ref `W|unit|modus|wort`), 3 Festigen (`#round/u/l/3`, nur Produktion, frühestens am Tag nach Runde 2, `d2`). Adaptiv: Lernen ≥ 90 % überspringt Üben; Festigen braucht 80 %, 60–80 % → morgen noch mal, < 60 % → zurück zu Üben; Lektionen mit wenig Übungsmaterial (`shortLesson`) sind nach Lernen fertig. Danach Abschlusstest der Unidad (`#check/<id>`, ab 80 % = gemeistert, `S.checks`). Alte Stände ohne `r`: done → Runde 1, check → Runde 3.
- Einstufungstest läuft in Etappen (eine pro Eintrag in `LEVELS`, 3 Fragen pro Unidad, Abbruch unter 60 %). Unidades mit „sitzt“ bekommen einen kurzen Check (`#check/<id>`, Ergebnis in `S.checks`).
- `quellcode/build.py` – baut alles zu EINER Datei:
  - `Spanisch-App-Web/index.html` + `sw.js` + `manifest.webmanifest` (die Web-App, die live ist)
  - `quellcode/dist/Spanisch-Lehrer.html` (Offline-Einzeldatei für den Mac)
- `index.html` im Root leitet nur auf `Spanisch-App-Web/` weiter.

## Änderungen machen
1. Dateien in `quellcode/src/` ändern.
2. `python3 quellcode/build.py` ausführen (keine Abhängigkeiten außer Python 3).
3. `Spanisch-App-Web/index.html` und `Spanisch-App-Web/sw.js` committen und auf `main` pushen. `sw.js` bekommt bei jedem Build eine neue Version → Geräte laden das Update beim nächsten Öffnen.

## Wichtig
- Fortschritt liegt im Browser (localStorage, Key `espanol-lehrer-v1`) und wird optional per GitHub-Gist synchronisiert – Datenformat abwärtskompatibel halten.
- KI: optionaler Gemini-Free-Tier-Key des Nutzers, nur im Browser gespeichert. Keine Keys ins Repo.
- Sprache der Oberfläche: Deutsch; Erklärungen auf A1/A2-Niveau.

## Weitere Bereiche
- Leiste (Mac & Handy gleich, 6 Punkte): Start, Kurs, Vokabeln, Bibliothek, Fehler, Mehr. Einstufungstest über die Kurs-Seite/Einstellungen.
- Bibliothek `#ref/s`: Geschichten-Serie „Nuevo en Barcelona“ (`c_stories.js`, `STORIES`, `after` = ab welcher Unidad, Fortschritt in `S.stories`, Fehler-Ref `S|id|i`), `#story/<id>`.
- `#ref/w` Wörterbuch (Suche über alle Vokabeln), `#ref/g` Grammatik-Übersicht (alle Resumen), `#verbs` Verben-Trainer (alle conj-Schritte angefangener Unidades).
- Desktop-Seitenleiste einklappbar (`S.settings.side='mini'`).
- Achtung in `shell()`: lokale Variable `route` überschattet die Funktion `route()` – dort `go(curRoute())` benutzen.
- Navigation nach dem Prinzip „kein Scrollen am Handy“: Mehr (`#settings`, Unterseiten `#settings/stimme|ki|sync|backup`), Vokabeln (`#vocab`, `#vocab/units`) und Bibliothek (`#ref`) sind Kachel-Menüs (`mtile`/`tiles`). Kurs (`#units/<Stufe>`), Geschichten und Grammatik haben Stufen-Reiter (`seg`/`levelSeg`). Unidad-Seite: Reiter Lektionen | Extras (`#unit/<id>/x`), Übungsblätter `#unit/<id>/ab`.
- Startseite: Tagesplan mit „x von y erledigt · noch ca. N Min.“, erste offene Aufgabe groß, Rest als Chips.
- Name: beim ersten Öffnen abgefragt (`S.name`, synchronisiert; ändern über Mehr → Dein Name, `#name`). Inhalte sind für „Jonas“ geschrieben; `personalize()` ersetzt „Jonas“ beim Laden in COURSE/PLACEMENT/STORIES, `gemini()` in Prompts. Neue Inhalte also weiter mit „Jonas“ schreiben.
- Ansprache `S.gender` ('m'|'f'): bei 'f' setzt `femCourse()` Sätze über die lernende Person (estoy/soy …, ¡Encantado! in Dialog-Antworten & speak) in die weibliche Form; `compare()` akzeptiert dann zusätzlich weibliche Formen; Vokabeln bleiben unverändert (SRS-Schlüssel). Inhalte, in denen das Geschlecht der lernenden Person fest vorkommt, lieber mit Nebenfigur (Pablo) schreiben.

## Mehrsprachigkeit (Technik)
- `lang.js`: Register `LANGS`, `defineLang(code,{…})`, Paket `es` (Spanisch), `LANG_PLANNED` (in der Auswahl „kommt bald“). `selectLang()` wird als Erstes in `engine.js` aufgerufen und setzt `LANG` sowie `COURSE/PLACEMENT/STORIES/LEVELS/LEVEL_OF/EMOJI` auf das aktive Paket.
- Fortschritt pro Sprache in eigenem localStorage-Key (`LANG.key`, Spanisch bleibt `espanol-lehrer-v1`) und eigener Gist-Datei (`LANG.gist`) im selben Gist. Gemeinsam für alle Sprachen: `mi-profe-shared` = {lang, name, gender, settings}.
- Sprachwechsel: Mehr → Sprache (`#lang`), lädt die Seite neu.
- **Neue Sprache hinzufügen:** Datei(en) `c_<code>_*.js` mit `defineLang('<code>',{name,flag,into:'ins Italienische',onLang:'auf Italienisch',adj:'italienisch',voice:'it-IT',keys:[…],pron:/^(io|tu|…)\s+/,persons:[…],conjTip,unit:'Unità',units:'Unità',genderEx:['Sono stanco','Sono stanca'] (oder weglassen),greet:[morgens,nachmittags,abends],teacher:'…',sampleSay:[…],voiceHint,storySeries,storyIntro,articles:/^(il|lo|la|…)\s*/,levels:[{id,label,title,sub}],levelOf:{},emoji:{wort:'🐱'},stories:[…]})` und `LANGS.<code>.course.units.push({...,level:'A1',placement:[…]})` (gleiches Format wie Spanisch). In `build.py` (beide Listen) NACH `lang.js` und VOR `engine.js` eintragen. Männlich/weiblich-Umformung (`femCourse`) gibt es bisher nur für Spanisch.

## Oberflächensprache
- Alle Oberflächentexte in `engine.js` stehen in `T('deutscher Text')`; Übersetzungen in `ui_tr.js` (`UI_TR.en/es/pt`, Schlüssel = deutscher Text). Fehlt ein Eintrag, erscheint Deutsch. Platzhalter über `fmt()`: `{L}` Sprachname, `{INTO}` „ins Spanische“, `{ON}` „auf Spanisch“.
- Neue UI-Texte immer mit `T('…')` schreiben und in `ui_tr.js` für en/es/pt ergänzen.
- Auswahl: Mehr → Sprache → „Sprache der App“ und Flaggen auf der Willkommensseite (`setUI`, gespeichert als `ui` in `mi-profe-shared`). Neue Nutzer: automatisch nach Gerätesprache; bestehende ohne `ui`: Deutsch.
- Kursinhalte folgen NICHT der App-Sprache, sondern der **Erklärsprache** `EX` (Mehr → Sprache → „Spanisch lernen mit“, gespeichert als `ex` in `mi-profe-shared`, nur wenn bewusst gewählt). Auswahl = Deutsch + alle `COURSE_TR[Lernsprache]`-Sprachen, nie die Lernsprache selbst (also z. B. App auf Spanisch, Erklärungen auf Deutsch). Ohne Wahl: = App-Sprache, falls verfügbar; sonst neue Nutzer Englisch, bestehende Deutsch. Flaggen auf der Willkommensseite setzen die Wahl zurück. Gemini erklärt in der Erklärsprache. Platzhalter `{EX}` in `fmt()` = Name der Erklärsprache.

## Kursinhalte übersetzen (z. B. Spanischkurs mit englischen Erklärungen)
- `quellcode/i18n/course_de.json`: alle deutschen Texte der Kursinhalte, gruppiert nach Abschnitt (`u0`…`u20` = Anzeige-Nummer, `stories`, `test`). Neu erzeugen mit `jsc i18n/extract.js -- src > i18n/course_de.json` (jsc: /System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc).
- Übersetzungen: `i18n/<lern>_<ui>/<abschnitt>.py` mit `EN=[…]` in derselben Reihenfolge. `python3 i18n/gen.py` erzeugt `src/tr_<lern>_<ui>.js` (`COURSE_TR`), `build.py` bindet alle `src/tr_*.js` automatisch ein.
- Die Engine übersetzt beim Laden (`trContent`), wenn die Erklärsprache ≠ Deutsch ist (Titel „Lesen: …“ bekommen automatisch „Reading: …“ usw.); fehlende Texte bleiben Deutsch. `role` (KI-Anweisung) bleibt immer Deutsch.
- Stand: es→en komplett (alle Unidades, Geschichten, Einstufungstest, `x_all` = Texte aus `course_de_extra.json`). es→pt noch nicht begonnen.
- Zweiter Suchlauf: `jsc i18n/extract_extra.js -- src i18n/course_de.json > i18n/course_de_extra.json` findet Texte, die der erste übersieht (Titel ohne Füllwörter). Einträge `""` in einer Übersetzungsliste = unverändert lassen.
