# Mi profe – Spanisch-Lern-App von Jonas

Persönliche Lern-App (Deutsch-Oberfläche), Kurs von A1 bis B1:
- A1 + A2 Teil 1: Unidad 0–10 nach dem Kursbuch „Meta profesional Plus A1–A2“, plus Übungsblätter aus Jonas' DHBW-Kurs.
- A2 Teil 2: Unidad 11–12 (`c_gaps.js`, ids g1/g2: Grammatik-Lücken aus der „Systematischen Grammatik“ des Kursbuchs, S. 121) und Unidad 13–17 (ids u11–u15); B1: Unidad 18–20 (ids u16–u18). Anzeige-Nummer `n` ≠ id!
- A2/B1: eigene Inhalte nach dem Plan Curricular des Instituto Cervantes. Keine Inhalte aus Büchern von Schattenbibliotheken (Anna's Archive o. Ä.) übernehmen.
Live: https://jonasgross2.github.io/mi-profe-Public/Spanisch-App-Web/ (GitHub Pages, Branch main, Root).

## Aufbau
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
