# Tests für den gemeinsamen Teil (src/core)

Zwei Prüfungen, die nach jedem Umbau der Engine laufen sollten (im Browser, kein Werkzeug nötig außer Python 3):

## 1. Alt/Neu-Vergleich (der Kurs darf sich nicht verändern)
1. Vor dem Umbau: Kopie von `Spanisch-App-Web/` als `serve/old/` ablegen, `serve/new` = Verweis auf `Spanisch-App-Web/`, in `serve/` `python3 -m http.server 8767` starten.
2. `http://localhost:8767/` öffnen, `snap.js` (dieser Ordner) in der Konsole ausführen: `RES.old=await SNAP('old')`.
3. Umbauen, `python3 quellcode/build.py`, dann `await CMP()` → Liste der Abweichungen (muss leer sein); `DIFF(profil,'U3')` zeigt die erste Stelle.
Verglichen werden pro Profil (männlich/weiblich/keine Angabe, Herkunft DE/AT mit Stadt/LB/freies Land/AR/PH, mit/ohne Nachname, Erklärsprache de/en, Oberfläche en)
jede Unidad, Einstufungstest, Geschichten, 80 Zahlenaufgaben (feste Zufallszahlen), Antwortprüfung, Verben und der Text mehrerer Seiten.

## 2. Test-Kurs „Testisch“ (läuft die Engine ohne Spanisch?)
`xx.js` ist ein Mini-Kurs mit allen Aufgabentypen und nur den Pflichtangaben. Testaufbau: Kopie von `Spanisch-App-Web/` als `serve/xx/`,
`xx.js` nach `serve/xx/p/`, in `serve/xx/index.html` bei `window.PACKS.learn` `{"code":"xx","name":"Testisch","flag":"🏳️"}` ergänzen,
dann `await XXTEST('f','de')` aus `snap.js` → keine Fehler auf allen Seiten und in allen Schritten.
