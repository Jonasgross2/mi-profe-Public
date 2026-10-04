# Mi profe – Spanisch-Lern-App von Jonas

Persönliche Lern-App (Deutsch-Oberfläche) nach dem Kursbuch „Meta profesional Plus A1–A2“, Unidad 0–10, plus Übungsblätter aus Jonas' DHBW-Kurs.
Live: https://jonasgross2.github.io/mi-profe-Public/Spanisch-App-Web/ (GitHub Pages, Branch main, Root).

## Aufbau
- `quellcode/src/` – Quelltext: `engine.js` (App-Logik), `app.css`, Inhalte `c_*.js`, `placement.js` (Einstufungstest)
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
