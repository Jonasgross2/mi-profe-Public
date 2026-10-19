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

## 3. Rundum-Test der echten Kurse (vor einer Veröffentlichung)
`smoke.js` öffnet für mehrere Profile (Kurs, Erklärsprache, App-Sprache, Ansprache) alle Seiten, alle Unidades/Lektionen/Runden/Tests/Geschichten/Lesetexte und zeichnet jeden Übungsschritt; meldet Fehler und Texte mit „undefined/NaN/[object Object]“.
Ablauf: `smoke.js` vorübergehend nach `Spanisch-App-Web/zz-smoke.js` kopieren (nicht committen), Server „app“ starten, im Browser `http://localhost:8765/` per `<script src="/zz-smoke.js">` laden, `await SMOKE()` → alle Fehlerzahlen 0 (Details in `SMOKE_RES`). Dauert einige Minuten (Browserfenster sichtbar lassen, sonst wird es gedrosselt). Stand 19.10.2026: 5 Profile, je 1315 (es) bzw. 1072 (de) Seiten und 2317/1851 Schritte, 0 Fehler.
