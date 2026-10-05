window.COURSE={units:[]};
/* ================= UNIDAD 0 · EL PRIMER DÍA ================= */
COURSE.units.push({id:'u0',n:'0',title:'El primer día',sub:'Begrüßen · sich vorstellen · nach dem Befinden fragen · Aussprache',
goals:['Hola, buenos días …','¿Cómo te llamas? / ¿Cómo se llama usted?','¿Qué tal? – Bien, ¿y tú?','tú vs. usted','Verabschiedungen','Aussprache: c, ch, g, h, j, ll, ñ, qu, r/rr, v, y, z'],
situacion:{title:'Erster Tag an der FIB',npc:'Laia',scene:'Erster Tag im MIRI an der FIB (Campus Nord, UPC). Vor dem Hörsaal A5 spricht dich eine Kommilitonin an.',role:'Du bist Laia, 24, Masterstudentin aus Girona, freundlich und neugierig. Du duzt Jonas.',goal:'Begrüße Laia, stell dich vor (Name), frag, wie es ihr geht, und verabschiede dich passend.'},
lessons:[
{id:'l1',title:'Begrüßen & vorstellen',desc:'Hola, buenos días, ¿cómo te llamas?',steps:[
 {t:'info',title:'Begrüßung nach Tageszeit',html:`<p>Im Spanischen hängt die Begrüßung von der Uhrzeit ab – und Spanier essen spät, deshalb verschieben sich die Grenzen:</p>
 <table><tr><th>Begrüßung</th><th>Wann?</th><th>Deutsch</th></tr>
 <tr><td class="es-t">Buenos días</td><td>ca. 6:00 – 14:00</td><td>Guten Morgen / Tag</td></tr>
 <tr><td class="es-t">Buenas tardes</td><td>ca. 14:00 – 20:00</td><td>Guten Tag / Abend</td></tr>
 <tr><td class="es-t">Buenas noches</td><td>ab ca. 20:00</td><td>Guten Abend / Gute Nacht</td></tr>
 <tr><td class="es-t">Hola</td><td>immer</td><td>Hallo</td></tr></table>
 <div class="ex">Sehr typisch: <span class="es-t">¡Hola, buenos días!</span> – beides kombiniert.</div>
 <div class="ojo">„Buenas tardes“ sagt man in Spanien bis ca. 20–21 Uhr – also auch um 19 Uhr, wo wir „Guten Abend“ sagen würden.</div>`},
 {t:'vocab',title:'Begrüßen & vorstellen',items:[['hola','hallo'],['buenos días','guten Morgen / guten Tag'],['buenas tardes','guten Tag (nachmittags)'],['buenas noches','guten Abend / gute Nacht'],['¿Cómo te llamas?','Wie heißt du?'],['¿Cómo se llama usted?','Wie heißen Sie?'],['me llamo …','ich heiße …'],['soy …','ich bin …'],['¿y tú?','und du?'],['¿y usted?','und Sie?']]},
 {t:'info',title:'Sich vorstellen: tú oder usted?',html:`<table><tr><th></th><th>informell (tú)</th><th>formell (usted)</th></tr>
 <tr><td>Name erfragen</td><td class="es-t">¿Cómo te llamas?</td><td class="es-t">¿Cómo se llama usted?</td></tr>
 <tr><td>Antwort</td><td class="es-t">Me llamo Jonas. ¿Y tú?</td><td class="es-t">Soy Jonas Gross. ¿Y usted?</td></tr></table>
 <p><b>tú</b> = du, <b>usted</b> = Sie. Spanier duzen sehr schnell – unter Studierenden, Kollegen und oft sogar mit Chefs. <b>usted</b> benutzt du bei älteren Menschen, in Behörden oder sehr formellen Situationen.</p>
 <div class="ojo"><span class="es-t">usted</span> verwendet die Verbform der 3. Person (wie „er/sie“): <span class="es-t">¿Cómo se llama usted?</span></div>`},
 {t:'mc',q:'Es ist 16:00 Uhr. Wie begrüßt du deine neue Kollegin?',opts:['Buenas tardes','Buenos días','Buenas noches'],a:0,why:'Zwischen ca. 14:00 und 20:00 Uhr sagt man <i>buenas tardes</i>.'},
 {t:'mc',q:'Wie fragst du deinen Kommilitonen nach seinem Namen?',opts:['¿Cómo te llamas?','¿Cómo se llama usted?','¿Cómo me llamo?'],a:0,why:'Unter Studierenden duzt man sich: <i>¿Cómo te llamas?</i>'},
 {t:'gap',q:'Hola, me ___ Jonas. ¿Y tú?',a:['llamo'],hint:'llamarse = heißen'},
 {t:'gap',q:'Buenos días, ¿cómo se ___ usted?',a:['llama'],why:'Bei <i>usted</i> nimmt man die 3. Person: <i>se llama</i>.'},
 {t:'order',es:'¿Cómo te llamas?',de:'Wie heißt du?'},
 {t:'dialog',place:'FIB, Campus Nord',title:'Der erste Kurstag',scene:'Du kommst in den Seminarraum. Ein Student setzt sich neben dich.',lines:[
  {n:'Marc',es:'¡Hola! Soy Marc. ¿Y tú? ¿Cómo te llamas?',de:'Hallo! Ich bin Marc. Und du? Wie heißt du?'},
  {you:true,opts:[{es:'Hola, me llamo Jonas.',ok:true},{es:'Buenas noches, me llamo Jonas.',ok:false,why:'Es ist morgens im Seminar – <i>buenas noches</i> passt erst ab ca. 20 Uhr.'},{es:'¿Cómo se llama usted?',ok:false,why:'Marc hat nach <b>deinem</b> Namen gefragt – und unter Studierenden duzt man sich.'}]},
  {n:'Marc',es:'Encantado, Jonas.',de:'Freut mich, Jonas.'}]},
 {t:'tr',de:'Hallo, ich heiße Jonas. Und du?',a:['Hola, me llamo Jonas. ¿Y tú?','Hola, soy Jonas. ¿Y tú?'],hint:'¿Y tú?'},
 {t:'tr',de:'Guten Tag (morgens), wie heißen Sie?',a:['Buenos días, ¿cómo se llama usted?','Buenos días, ¿cómo se llama?'],why:'Formell: <i>¿Cómo se llama usted?</i> – morgens <i>buenos días</i>.'},
 {t:'speak',es:'Hola, buenos días. Me llamo Jonas.',de:'Hallo, guten Morgen. Ich heiße Jonas.',tip:'Das <b>ll</b> in <i>llamo</i> spricht man wie ein deutsches <b>j</b> („jamo“).'}
]},
{id:'l2',title:'Wie geht’s? & Verabschieden',desc:'¿Qué tal? · Adiós · Hasta luego',steps:[
 {t:'vocab',title:'Nach dem Befinden fragen',items:[['¿Qué tal?','Wie geht’s?'],['¿Cómo estás?','Wie geht es dir?'],['¿Cómo está usted?','Wie geht es Ihnen?'],['bien','gut'],['muy bien','sehr gut'],['regular','so lala'],['mal','schlecht'],['gracias','danke'],['encantado / encantada','freut mich (m / w)'],['mucho gusto','sehr erfreut']]},
 {t:'info',title:'¿Qué tal? – Bien, ¿y tú?',html:`<table><tr><th>Frage</th><th>Antwort</th></tr>
 <tr><td class="es-t">¿Qué tal?</td><td class="es-t">Bien, ¿y tú?</td></tr>
 <tr><td class="es-t">¿Cómo estás? <span class="muted">(tú)</span></td><td class="es-t">Muy bien, gracias. ¿Y tú?</td></tr>
 <tr><td class="es-t">¿Cómo está usted? <span class="muted">(usted)</span></td><td class="es-t">Bien, gracias. ¿Y usted?</td></tr></table>
 <div class="ex"><b>¿Qué tal?</b> passt immer – formell und informell. Oft ist es nur ein Gruß, keine echte Frage: <span class="es-t">¡Hola! ¿Qué tal?</span></div>
 <div class="ojo">Wenn du dich freust, jemanden kennenzulernen: Männer sagen <span class="es-t">encantado</span>, Frauen <span class="es-t">encantada</span> – es richtet sich nach dem/der <b>Sprechenden</b>.</div>`},
 {t:'vocab',title:'Verabschieden',items:[['adiós','tschüss / auf Wiedersehen'],['hasta luego','bis später / tschüss'],['hasta pronto','bis bald'],['hasta mañana','bis morgen'],['hasta la próxima','bis zum nächsten Mal'],['hasta la vista','auf Wiedersehen'],['chao','ciao (umgangssprachlich)']]},
 {t:'match',q:'Begrüßung oder Verabschiedung? Ordne die Bedeutung zu.',pairs:[['Hasta luego','bis später'],['¿Qué tal?','wie geht’s?'],['Hasta mañana','bis morgen'],['Encantada','freut mich (w)'],['Buenas noches','guten Abend']]},
 {t:'mc',q:'Pablo trifft Laia. Er sagt: „Encantado“. Laia antwortet:',opts:['Encantada.','Encantado.','Encantados.'],a:0,why:'Laia ist eine Frau → <i>encantada</i>. Die Form richtet sich nach der Person, die spricht.'},
 {t:'gap',q:'– ¿Qué tal? – Muy ___, gracias. ¿Y ___?',a:['bien','tú|tu'],why:'<i>bien</i> = gut; <i>¿y tú?</i> = und du?'},
 {t:'mc',q:'Du gehst um 18 Uhr aus der Uni und siehst deine Kommilitonen morgen wieder. Was sagst du?',opts:['¡Hasta mañana!','¡Buenos días!','¡Mucho gusto!'],a:0},
 {t:'dialog',place:'Secretaría de la FIB',title:'Im Studierendensekretariat',scene:'Du gehst zur Secretaría, um deine Unterlagen abzugeben. Eine ältere Mitarbeiterin begrüßt dich. Hier ist <b>usted</b> angebracht.',lines:[
  {n:'Sra. Pujol',es:'Buenos días. ¿Cómo se llama usted?',de:'Guten Morgen. Wie heißen Sie?'},
  {you:true,opts:[{es:'Buenos días. Me llamo Jonas Gross.',ok:true},{es:'Buenas noches. Me llamo Jonas Gross.',ok:false,why:'Sie hat <i>buenos días</i> gesagt – es ist Vormittag.'},{es:'Bien, ¿y tú?',ok:false,why:'Das ist eine Antwort auf <i>¿Qué tal?</i>, nicht auf die Frage nach dem Namen.'}]},
  {n:'Sra. Pujol',es:'Muy bien, señor Gross. ¿Cómo está usted?',de:'Sehr gut, Herr Gross. Wie geht es Ihnen?'},
  {you:true,opts:[{es:'Muy bien, gracias. ¿Y usted?',ok:true},{es:'Muy bien, gracias. ¿Y tú?',ok:false,why:'Sie siezt dich – also antwortest du mit <i>¿y usted?</i>'},{es:'Hasta luego.',ok:false,why:'Du willst dich noch nicht verabschieden 😉'}]},
  {n:'Sra. Pujol',es:'Bien, gracias. Un momento, por favor.',de:'Gut, danke. Einen Moment, bitte.'},
  {n:'Sra. Pujol',es:'Ya está. ¡Hasta luego!',de:'Fertig. Auf Wiedersehen!'},
  {you:true,opts:[{es:'¡Gracias! ¡Adiós!',ok:true},{es:'¡Encantado! ¿Qué tal?',ok:false,why:'Sie verabschiedet sich – du auch: <i>Adiós / Hasta luego</i>.'}]}]},
 {t:'tr',de:'Wie geht es Ihnen?',a:['¿Cómo está usted?','¿Cómo está?','¿Qué tal?'],why:'formell: <i>¿Cómo está usted?</i>'},
 {t:'tr',de:'Gut, danke. Und dir?',a:['Bien, gracias. ¿Y tú?','Bien, gracias, ¿y tú?'],hint:'„und dir?“ = ¿y tú?'},
 {t:'listen',es:'Hasta luego',de:'bis später'},
 {t:'listen',es:'Muy bien, gracias',de:'sehr gut, danke'}
]},
{id:'l3',title:'Aussprache',desc:'Die Buchstaben, die anders klingen als im Deutschen',steps:[
 {t:'info',title:'So klingt Spanisch',html:`<table><tr><th>Buchstabe</th><th>Beispiel</th><th>Aussprache</th></tr>
 <tr><td><b>c</b> + a, o, u</td><td class="es-t">Cataluña</td><td>wie <b>k</b></td></tr>
 <tr><td><b>c</b> + e, i / <b>z</b></td><td class="es-t">cinco, Zara</td><td>gelispelt wie engl. <i>th</i> (in Lateinamerika wie <b>s</b>)</td></tr>
 <tr><td><b>ch</b></td><td class="es-t">Chupa Chups</td><td>wie <b>tsch</b></td></tr>
 <tr><td><b>g</b> + a, o, u</td><td class="es-t">gracias, gol</td><td>wie <b>g</b> – bei <b>gue, gui</b> ist das u stumm: <span class="es-t">Miguel</span></td></tr>
 <tr><td><b>g</b> + e, i / <b>j</b></td><td class="es-t">Argentina, jamón</td><td>wie <b>ch</b> in „Sache“</td></tr>
 <tr><td><b>h</b></td><td class="es-t">hotel, hola</td><td>stumm!</td></tr>
 <tr><td><b>ll</b> / <b>y</b></td><td class="es-t">llamo, playa</td><td>wie <b>j</b> in „Junge“ – <b>y</b> am Wortende wie <b>i</b>: <span class="es-t">Uruguay</span></td></tr>
 <tr><td><b>ñ</b></td><td class="es-t">España</td><td>wie <b>gn</b> in „Champagner“</td></tr>
 <tr><td><b>qu</b></td><td class="es-t">queso</td><td>wie <b>k</b>, das u ist stumm</td></tr>
 <tr><td><b>r</b> / <b>rr</b></td><td class="es-t">Barcelona / Renfe, perro</td><td>einfach gerollt / am Wortanfang & <b>rr</b> stark gerollt</td></tr>
 <tr><td><b>v</b></td><td class="es-t">Valencia</td><td>wie <b>b</b> – kein Unterschied zu b</td></tr></table>
 <div class="ojo">In Barcelona hörst du auch Katalanisch – das klingt anders (z. B. <i>Bon dia</i>). Hier lernen wir castellano.</div>`},
 {t:'mc',q:'Wie spricht man das <b>h</b> in <span class="es-t">hotel</span>?',say:'hotel',opts:['gar nicht','wie deutsches h','wie ch in Sache'],a:0},
 {t:'mc',q:'Welches Wort hat den „ch“-Laut wie in <i>Sache</i>?',opts:['jamón','chico','queso','gracias'],a:0,why:'<b>j</b> (und g vor e/i) klingt wie ch in „Sache“. <b>ch</b> in <i>chico</i> klingt wie „tsch“.'},
 {t:'mc',q:'Bei welchem Wort wird das <b>u</b> NICHT gesprochen?',opts:['Miguel','Uruguay','ciudad'],a:0,why:'In <b>gue/gui</b> und <b>que/qui</b> ist das u stumm.'},
 {t:'listen',es:'Barcelona',task:'Hör zu und schreib den Städtenamen.'},
 {t:'listen',es:'España',why:'Das <b>ñ</b> – auf dem Mac: <span class="kbd">⌥ n</span>, dann <span class="kbd">n</span>. Oder die Taste unter dem Eingabefeld.'},
 {t:'listen',es:'gracias'},
 {t:'listen',es:'Valencia',why:'v klingt wie b, c vor e/i gelispelt.'},
 {t:'speak',es:'Erre que erre ruedan las ruedas de Renfe.',de:'Zungenbrecher mit rr (Renfe = spanische Bahn)',tip:'r am Wortanfang und rr stark rollen!'},
 {t:'speak',es:'Jamás comerás un jamón como el jamón de Jabugo.',de:'Zungenbrecher mit j',tip:'j = ch wie in „Sache“.'},
 {t:'speak',es:'Zapatos Zapata para el cine, la cena y la plaza.',de:'Zungenbrecher mit z/c',tip:'z und c vor e/i: Zungenspitze zwischen die Zähne (wie engl. th).'}
]}],
resumen:`<h3>Begrüßen</h3><table><tr><td class="es-t">Hola</td><td>Hallo</td></tr><tr><td class="es-t">Buenos días</td><td>bis ca. 14 Uhr</td></tr><tr><td class="es-t">Buenas tardes</td><td>14–20 Uhr</td></tr><tr><td class="es-t">Buenas noches</td><td>ab 20 Uhr</td></tr></table>
<h3>Sich vorstellen</h3><table><tr><th>informell (tú)</th><th>formell (usted)</th></tr><tr><td class="es-t">¿Cómo te llamas?</td><td class="es-t">¿Cómo se llama usted?</td></tr><tr><td class="es-t">Soy … / Me llamo … ¿Y tú?</td><td class="es-t">Soy … / Me llamo … ¿Y usted?</td></tr></table>
<h3>Nach dem Befinden fragen</h3><table><tr><td class="es-t">¿Qué tal? / ¿Cómo estás?</td><td class="es-t">Bien / Muy bien / Regular, ¿y tú?</td></tr><tr><td class="es-t">¿Cómo está usted?</td><td class="es-t">Muy bien, gracias. ¿Y usted?</td></tr></table>
<h3>Verabschieden</h3><p class="es-t">Adiós · Hasta luego · Hasta pronto · Hasta mañana · Hasta la próxima</p>
<h3>Aussprache</h3><p>h stumm · j / ge, gi = ch (Sache) · ll, y = j · ñ = gn · qu = k · c (e, i), z = th · v = b · rr gerollt</p>`});

/* ================= UNIDAD 1 · MIS METAS ================= */
COURSE.units.push({id:'u1',n:'1',title:'Mis metas',sub:'Nach der Bedeutung fragen · Zahlen bis 10 · Herkunft · Fragen stellen · warum man Spanisch lernt · Zustimmung & Widerspruch',
goals:['Substantive: Genus & Plural','el/la/los/las · un/una','Zahlen 0–10','¿Qué significa …?','ser + Subjektpronomen','¿De dónde eres?','Verben auf -ar','Fragewörter','no · también · tampoco'],
situacion:{title:'Intercambio de idiomas in Gràcia',npc:'Pau',scene:'Ein Sprach-Tandem-Abend in einer Bar in Gràcia. Ein Spanier setzt sich zu dir an den Tisch.',role:'Du bist Pau, 27, aus Barcelona, arbeitest in einer Tech-Firma und lernst Deutsch. Du duzt Jonas.',goal:'Stell dich vor, sag, woher du kommst, welche Sprachen du sprichst und warum du Spanisch lernst. Frag Pau dasselbe.'},
lessons:[
{id:'l1',title:'Substantive & Artikel',desc:'el producto, la empresa, los hoteles',steps:[
 {t:'info',title:'Männlich oder weiblich?',html:`<p>Im Spanischen gibt es nur <b>zwei</b> Geschlechter – kein „das“.</p>
 <table><tr><th>Endung</th><th>meist …</th><th>Beispiele</th></tr>
 <tr><td><b>-o</b></td><td>männlich (el)</td><td class="es-t">el producto, el equipo</td></tr>
 <tr><td><b>-a, -dad, -ción</b></td><td>weiblich (la)</td><td class="es-t">la empresa, la ciudad, la exposición</td></tr>
 <tr><td><b>-e</b> / Konsonant</td><td>beides möglich → mit Artikel lernen!</td><td class="es-t">el hotel, la imagen, el arte</td></tr></table>
 <div class="ojo">Ausnahmen: <span class="es-t">el día</span>, <span class="es-t">el programa</span>, <span class="es-t">la foto</span>, <span class="es-t">la mano</span>.</div>`},
 {t:'info',title:'Artikel & Plural',html:`<table><tr><th></th><th>männlich</th><th>weiblich</th></tr>
 <tr><td>bestimmt Sg.</td><td class="es-t">el producto</td><td class="es-t">la página</td></tr>
 <tr><td>bestimmt Pl.</td><td class="es-t">los productos</td><td class="es-t">las páginas</td></tr>
 <tr><td>unbestimmt Sg.</td><td class="es-t">un producto</td><td class="es-t">una página</td></tr>
 <tr><td>unbestimmt Pl.</td><td class="es-t">unos productos</td><td class="es-t">unas páginas</td></tr></table>
 <p><b>Plural:</b> Vokal + <b>-s</b> (<span class="es-t">equipo → equipos</span>), Konsonant + <b>-es</b> (<span class="es-t">hotel → hoteles</span>, <span class="es-t">ciudad → ciudades</span>).</p>
 <div class="ojo">Akzent auf der letzten Silbe fällt im Plural weg: <span class="es-t">exposición → exposiciones</span>, <span class="es-t">jamón → jamones</span>.</div>
 <p><span class="es-t">unos / unas</span> heißt „einige“.</p>`},
 {t:'vocab',title:'Wichtige Wörter',items:[['la empresa','das Unternehmen'],['el producto','das Produkt'],['el hotel','das Hotel'],['la ciudad','die Stadt'],['el país','das Land'],['la comida','das Essen'],['el deporte','der Sport'],['la tecnología','die Technologie'],['la red social','das soziale Netzwerk'],['la publicidad','die Werbung'],['el éxito','der Erfolg'],['la feria','die Messe'],['el turismo','der Tourismus'],['la fiesta','das Fest / die Party']]},
 {t:'mc',q:'Welcher Artikel? ___ ciudad',opts:['la','el'],a:0,keep:true,why:'Wörter auf <b>-dad</b> sind weiblich.'},
 {t:'mc',q:'Welcher Artikel? ___ problema',opts:['el','la'],a:0,keep:true,why:'Ausnahme! Viele Wörter auf <b>-ma</b> aus dem Griechischen sind männlich: <i>el problema, el programa, el sistema</i>.'},
 {t:'mc',q:'Welcher Artikel? ___ información',opts:['la','el'],a:0,keep:true,why:'Wörter auf <b>-ción</b> sind weiblich.'},
 {t:'gap',task:'Setz den Plural ein.',q:'el hotel → los ___',a:['hoteles'],why:'Konsonant + -es.'},
 {t:'gap',task:'Setz den Plural ein.',q:'la exposición → las ___',a:['exposiciones'],why:'Konsonant + -es, und der Akzent fällt weg.'},
 {t:'gap',task:'Ergänze den unbestimmten Artikel (un / una).',q:'Zara es ___ empresa y la paella es ___ comida.',a:['una','una']},
 {t:'match',q:'Singular und Plural',pairs:[['el equipo','los equipos'],['la ciudad','las ciudades'],['el jamón','los jamones'],['la red','las redes'],['el país','los países']]},
 {t:'tr',de:'die Unternehmen (Plural)',a:['las empresas']},
 {t:'tr',de:'ein Hotel',a:['un hotel']}
]},
{id:'l2',title:'Zahlen 0–10 & ¿Qué significa?',desc:'Im Unterricht nach Wörtern fragen',steps:[
 {t:'vocab',title:'Zahlen 0–10',items:[['cero','0'],['uno','1'],['dos','2'],['tres','3'],['cuatro','4'],['cinco','5'],['seis','6'],['siete','7'],['ocho','8'],['nueve','9'],['diez','10']]},
 {t:'listen',es:'siete',task:'Welche Zahl hörst du? Schreib sie als Wort.'},
 {t:'listen',es:'cuatro',task:'Welche Zahl hörst du? Schreib sie als Wort.'},
 {t:'listen',es:'nueve',task:'Welche Zahl hörst du? Schreib sie als Wort.'},
 {t:'gap',q:'tres + cinco = ___',a:['ocho']},
 {t:'gap',q:'diez – cuatro = ___',a:['seis']},
 {t:'info',title:'Im Unterricht nachfragen',html:`<table><tr><th>Frage</th><th>Antwort</th></tr>
 <tr><td class="es-t">¿Qué significa «red social»?</td><td class="es-t">Creo que significa …</td></tr>
 <tr><td class="es-t">¿«Red» significa «Netz»?</td><td class="es-t">Sí. / No. / No sé.</td></tr>
 <tr><td class="es-t">¿Cómo se dice «Messe» en español?</td><td class="es-t">Se dice «feria».</td></tr>
 <tr><td class="es-t">¿Puedes repetir, por favor?</td><td>Kannst du das wiederholen?</td></tr>
 <tr><td class="es-t">Más despacio, por favor.</td><td>Langsamer, bitte.</td></tr></table>`},
 {t:'vocab',title:'Sätze für den Unterricht',items:[['¿Qué significa …?','Was bedeutet …?'],['creo que significa …','ich glaube, es bedeutet …'],['no sé','ich weiß nicht'],['¿Cómo se dice … en español?','Wie sagt man … auf Spanisch?'],['¿Puedes repetir, por favor?','Kannst du das wiederholen, bitte?'],['más despacio, por favor','langsamer, bitte']]},
 {t:'mc',q:'Du verstehst das Wort „sostenibilidad“ nicht. Was fragst du?',opts:['¿Qué significa «sostenibilidad»?','¿Cómo te llamas «sostenibilidad»?','¿Qué tal «sostenibilidad»?'],a:0},
 {t:'tr',de:'Wie sagt man „Werbung“ auf Spanisch?',a:['¿Cómo se dice «Werbung» en español?','¿Cómo se dice Werbung en español?']},
 {t:'tr',de:'Ich weiß nicht.',a:['No sé','Yo no sé']}
]},
{id:'l3',title:'ser & Herkunft',desc:'¿De dónde eres? – Soy de Alemania.',steps:[
 {t:'info',title:'Das Verb ser (sein)',html:`<table><tr><th>Pronomen</th><th>ser</th></tr>
 <tr><td>yo</td><td class="es-t">soy</td></tr><tr><td>tú</td><td class="es-t">eres</td></tr><tr><td>él / ella / usted</td><td class="es-t">es</td></tr>
 <tr><td>nosotros / nosotras</td><td class="es-t">somos</td></tr><tr><td>vosotros / vosotras</td><td class="es-t">sois</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">son</td></tr></table>
 <div class="ex"><b>Subjektpronomen</b> (yo, tú …) lässt man normalerweise weg – die Verbform zeigt schon, wer gemeint ist: <span class="es-t">Soy de Alemania.</span><br>Man benutzt sie nur zur Betonung oder Unterscheidung: <span class="es-t">Yo soy de Mannheim y ella es de Girona.</span></div>
 <div class="ojo">In Lateinamerika sagt man <span class="es-t">ustedes</span> statt <span class="es-t">vosotros</span> – auch beim Duzen.</div>`},
 {t:'conj',verb:'ser',de:'sein',forms:['soy','eres','es','somos','sois','son']},
 {t:'info',title:'Woher kommst du?',html:`<table><tr><th>Frage</th><th>Antwort</th></tr>
 <tr><td class="es-t">¿De dónde eres?</td><td class="es-t">Soy de Alemania.</td></tr>
 <tr><td class="es-t">¿De dónde es usted?</td><td class="es-t">Soy de Holanda.</td></tr>
 <tr><td class="es-t">¿Eres de España?</td><td class="es-t">No, soy de Chile.</td></tr>
 <tr><td class="es-t">¿Sois de Colombia?</td><td class="es-t">Sí, de Bogotá.</td></tr>
 <tr><td class="es-t">¿Son ustedes de Madrid?</td><td class="es-t">No, somos de Vigo.</td></tr></table>
 <p><b>Verneinung:</b> <span class="es-t">no</span> steht immer <b>vor dem Verb</b>: <span class="es-t">Messi no es de Barcelona.</span> In der Antwort oft doppelt: <span class="es-t">No, no soy de Madrid.</span></p>`},
 {t:'vocab',title:'Länder',items:[['Alemania','Deutschland'],['España','Spanien'],['Austria','Österreich'],['Suiza','die Schweiz'],['Holanda','die Niederlande'],['Francia','Frankreich'],['Italia','Italien'],['Inglaterra','England'],['Estados Unidos','die USA'],['México','Mexiko'],['Argentina','Argentinien'],['Colombia','Kolumbien'],['Perú','Peru'],['Chile','Chile']]},
 {t:'gap',q:'– ¿De dónde ___? – ___ de Alemania, de Mannheim.',a:['eres','soy'],why:'tú → <i>eres</i>, yo → <i>soy</i>.'},
 {t:'gap',q:'Laia y Marc ___ de Cataluña.',a:['son']},
 {t:'gap',q:'Nosotros ___ estudiantes de la UPC.',a:['somos']},
 {t:'mc',q:'Wähle den richtigen Satz:',opts:['Messi no es de Barcelona, es de Argentina.','Messi es no de Barcelona, es de Argentina.','No Messi es de Barcelona.'],a:0,why:'<b>no</b> steht direkt vor dem Verb.'},
 {t:'order',es:'¿De dónde es usted?',de:'Woher kommen Sie?'},
 {t:'tr',de:'Ich bin aus Deutschland, aus Mannheim.',a:['Soy de Alemania, de Mannheim.']},
 {t:'tr',de:'Seid ihr aus Spanien?',a:['¿Sois de España?','¿Vosotros sois de España?']},
 {t:'tr',de:'Nein, ich bin nicht aus Madrid.',a:['No, no soy de Madrid.','No, yo no soy de Madrid.','No soy de Madrid.']}
]},
{id:'l4',title:'Verben auf -ar & Fragewörter',desc:'hablar, estudiar, trabajar · ¿Quién? ¿Dónde? ¿Para qué?',steps:[
 {t:'info',title:'Regelmäßige Verben auf -ar',html:`<p>Man streicht <b>-ar</b> und hängt die Endungen an:</p>
 <table><tr><th></th><th>hablar (sprechen)</th><th>Endung</th></tr>
 <tr><td>yo</td><td class="es-t">hablo</td><td>-o</td></tr><tr><td>tú</td><td class="es-t">hablas</td><td>-as</td></tr><tr><td>él / ella / usted</td><td class="es-t">habla</td><td>-a</td></tr>
 <tr><td>nosotros/-as</td><td class="es-t">hablamos</td><td>-amos</td></tr><tr><td>vosotros/-as</td><td class="es-t">habláis</td><td>-áis</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">hablan</td><td>-an</td></tr></table>
 <p>Genauso: <span class="es-t">estudiar, trabajar, buscar, necesitar, usar, practicar, viajar, escuchar, tocar</span>.</p>
 <div class="ex">Betonung auf dem Stamm (<b>ha</b>blo, <b>ha</b>blan) – außer bei nosotros / vosotros (habl<b>a</b>mos, habl<b>áis</b>).</div>`},
 {t:'vocab',title:'Verben auf -ar',items:[['hablar','sprechen'],['estudiar','studieren / lernen'],['trabajar','arbeiten'],['buscar','suchen'],['necesitar','brauchen'],['usar','benutzen'],['practicar','üben / betreiben (Sport)'],['viajar','reisen'],['escuchar','hören / zuhören'],['tocar un instrumento','ein Instrument spielen']]},
 {t:'conj',verb:'trabajar',de:'arbeiten',forms:['trabajo','trabajas','trabaja','trabajamos','trabajáis','trabajan']},
 {t:'conj',verb:'estudiar',de:'studieren',forms:['estudio','estudias','estudia','estudiamos','estudiáis','estudian']},
 {t:'vocab',title:'Sprachen',items:[['el español / el castellano','Spanisch'],['el alemán','Deutsch'],['el inglés','Englisch'],['el francés','Französisch'],['el catalán','Katalanisch'],['el italiano','Italienisch'],['el chino','Chinesisch']]},
 {t:'info',title:'Fragewörter',html:`<table><tr><td class="es-t">¿Qué?</td><td>Was? / Welche?</td><td class="es-t">¿Qué idiomas hablas?</td></tr>
 <tr><td class="es-t">¿Quién? / ¿Quiénes?</td><td>Wer? (Sg. / Pl.)</td><td class="es-t">¿Quiénes estudian chino?</td></tr>
 <tr><td class="es-t">¿Dónde?</td><td>Wo?</td><td class="es-t">¿Dónde trabajas?</td></tr>
 <tr><td class="es-t">¿De dónde?</td><td>Woher?</td><td class="es-t">¿De dónde es Marco?</td></tr>
 <tr><td class="es-t">¿Para qué?</td><td>Wozu?</td><td class="es-t">¿Para qué estudias español?</td></tr>
 <tr><td class="es-t">¿Cómo?</td><td>Wie?</td><td class="es-t">¿Cómo te llamas?</td></tr></table>
 <div class="ojo">Fragewörter tragen <b>immer</b> einen Akzent. Und Fragen beginnen mit <b>¿</b> (Mac: <span class="kbd">⌥ ⇧ ß</span>).</div>`},
 {t:'gap',q:'Yo ___ (hablar) inglés y alemán.',a:['hablo']},
 {t:'gap',q:'¿Tú ___ (trabajar) en una empresa?',a:['trabajas']},
 {t:'gap',q:'Mis compañeros ___ (estudiar) en la FIB.',a:['estudian']},
 {t:'gap',q:'¿Vosotros ___ (buscar) unas prácticas?',a:['buscáis'],why:'vosotros → <b>-áis</b> (mit Akzent).'},
 {t:'mc',q:'___ estudias español? – Para trabajar en España.',opts:['¿Para qué','¿Dónde','¿Quién'],a:0},
 {t:'mc',q:'___ trabajas? – En un banco.',opts:['¿Dónde','¿De dónde','¿Qué'],a:0},
 {t:'order',es:'¿Qué idiomas hablas?',de:'Welche Sprachen sprichst du?'},
 {t:'tr',de:'Ich lerne Spanisch, um in Barcelona zu arbeiten.',a:['Estudio español para trabajar en Barcelona.','Aprendo español para trabajar en Barcelona.'],hint:'„um … zu“ = para + Infinitiv'},
 {t:'tr',de:'Wo arbeitest du?',a:['¿Dónde trabajas?']},
 {t:'listen',es:'Necesito español para hablar con mis colegas.',de:'Ich brauche Spanisch, um mit meinen Kollegen zu sprechen.'}
]},
{id:'l5',title:'Zustimmen & widersprechen',desc:'Yo también · Yo tampoco · Yo sí · Yo no',steps:[
 {t:'info',title:'también, tampoco, sí, no',html:`<table><tr><th>Aussage</th><th>gleiche Meinung</th><th>andere Meinung</th></tr>
 <tr><td class="es-t">Hablo español.</td><td class="es-t">Yo también. <span class="muted">(ich auch)</span></td><td class="es-t">Yo no. <span class="muted">(ich nicht)</span></td></tr>
 <tr><td class="es-t">No hablo francés.</td><td class="es-t">Yo tampoco. <span class="muted">(ich auch nicht)</span></td><td class="es-t">Yo sí. <span class="muted">(ich schon)</span></td></tr></table>
 <div class="ex">Trick: Bei einer <b>positiven</b> Aussage → <i>también / no</i>. Bei einer <b>negativen</b> Aussage → <i>tampoco / sí</i>.</div>
 <p>Im Satz: <span class="es-t">Lucas y Sarah no practican deporte, pero yo sí.</span></p>`},
 {t:'mc',q:'– Trabajo en una empresa. – (Du arbeitest auch.)',opts:['Yo también.','Yo tampoco.','Yo sí.'],a:0},
 {t:'mc',q:'– No hablo chino. – (Du sprichst auch kein Chinesisch.)',opts:['Yo tampoco.','Yo también.','Yo no.'],a:0,why:'Negative Aussage + gleiche Meinung → <i>tampoco</i>.'},
 {t:'mc',q:'– No practico deporte. – (Du schon!)',opts:['Yo sí.','Yo también.','Yo no.'],a:0},
 {t:'mc',q:'– Escucho música en español. – (Du nicht.)',opts:['Yo no.','Yo tampoco.','Yo sí.'],a:0},
 {t:'dialog',place:'Bar en Gràcia',title:'Intercambio de idiomas',scene:'Sprach-Tandem in einer Bar in Gràcia. Du sitzt mit Carla an einem Tisch.',lines:[
  {n:'Carla',es:'¡Hola! ¿Qué tal? Soy Carla. ¿De dónde eres?',de:'Hallo! Wie geht’s? Ich bin Carla. Woher kommst du?'},
  {you:true,opts:[{es:'Bien. Soy Jonas, de Alemania.',ok:true},{es:'Bien. Estoy de Alemania.',ok:false,why:'Herkunft immer mit <b>ser</b>: <i>soy de …</i>'},{es:'Bien. Soy Jonas, en Alemania.',ok:false,why:'Herkunft: <b>de</b> (aus), nicht <i>en</i> (in).'}]},
  {n:'Carla',es:'¡Qué bien! Yo soy de aquí, de Barcelona. ¿Qué idiomas hablas?',de:'Wie schön! Ich bin von hier, aus Barcelona. Welche Sprachen sprichst du?'},
  {you:true,opts:[{es:'Hablo alemán, inglés y un poco de español.',ok:true},{es:'Hablas alemán, inglés y un poco de español.',ok:false,why:'Du sprichst über dich: <i>yo hablo</i>.'},{es:'Hablo Alemania e Inglaterra.',ok:false,why:'Das sind Länder – die Sprachen heißen <i>alemán, inglés</i>.'}]},
  {n:'Carla',es:'Yo hablo catalán, castellano e inglés. No hablo alemán.',de:'Ich spreche Katalanisch, Spanisch und Englisch. Ich spreche kein Deutsch.'},
  {you:true,prompt:'Du sprichst kein Katalanisch. Reagiere auf etwas, das ihr gemeinsam habt …',opts:[{es:'¡Yo tampoco hablo catalán!',ok:true},{es:'Yo también hablo catalán.',ok:false,why:'Du sprichst ja kein Katalanisch 😉'},{es:'Yo sí.',ok:false,why:'„Yo sí“ hieße: Ich spreche schon Deutsch – stimmt zwar, aber du willst über Katalanisch sprechen.'}]},
  {n:'Carla',es:'¡Ja, ja! ¿Y para qué estudias español?',de:'Haha! Und wozu lernst du Spanisch?'},
  {you:true,opts:[{es:'Para estudiar un máster en la UPC.',ok:true},{es:'Porque estudiar un máster.',ok:false,why:'„Um zu“ = <b>para</b> + Infinitiv.'},{es:'Para estudio un máster.',ok:false,why:'Nach <b>para</b> kommt der Infinitiv: <i>para estudiar</i>.'}]},
  {n:'Carla',es:'¡Genial! Bienvenido a Barcelona.',de:'Super! Willkommen in Barcelona.'}]},
 {t:'tr',de:'Ich spreche kein Französisch. – Ich auch nicht.',a:['No hablo francés. – Yo tampoco.','No hablo francés. Yo tampoco.','Yo no hablo francés. Yo tampoco.']},
 {t:'tr',de:'Sie arbeiten, aber ich nicht.',a:['Ellos trabajan, pero yo no.','Trabajan, pero yo no.','Ellas trabajan, pero yo no.']},
 {t:'free',task:'Stell dich in 4–6 Sätzen vor: Name, Herkunft, Wohnort, Sprachen, wozu du Spanisch lernst, was du (nicht) machst.',hint:'Me llamo … Soy de … Hablo … Estudio español para … No practico … pero …',focus:'ser, Verben auf -ar, para + Infinitiv, no/también/tampoco',model:'Hola, me llamo Jonas. Soy de Alemania, pero ahora vivo en Barcelona. Hablo alemán, inglés y un poco de español. Estudio un máster en la UPC. Estudio español para hablar con mis compañeros y para trabajar en España. Practico deporte, pero no toco un instrumento.'}
]}],
resumen:`<h3>Substantive & Artikel</h3><table><tr><th></th><th>männlich</th><th>weiblich</th></tr><tr><td>Sg.</td><td class="es-t">el / un producto</td><td class="es-t">la / una empresa</td></tr><tr><td>Pl.</td><td class="es-t">los / unos productos</td><td class="es-t">las / unas empresas</td></tr></table>
<p>-o → meist m · -a, -dad, -ción → meist w · Ausnahmen: el día, el programa, la foto. Plural: Vokal + s, Konsonant + es.</p>
<h3>ser</h3><table><tr><td>soy · eres · es</td><td>somos · sois · son</td></tr></table>
<h3>Verben auf -ar (hablar)</h3><table><tr><td>hablo · hablas · habla</td><td>hablamos · habláis · hablan</td></tr></table>
<h3>Herkunft</h3><table><tr><td class="es-t">¿De dónde eres?</td><td class="es-t">Soy de Alemania.</td></tr><tr><td class="es-t">¿Eres de España?</td><td class="es-t">No, soy de Chile.</td></tr></table>
<h3>Fragewörter</h3><p class="es-t">¿Qué? · ¿Quién/es? · ¿Dónde? · ¿De dónde? · ¿Para qué? · ¿Cómo?</p>
<h3>Zustimmung & Widerspruch</h3><table><tr><td class="es-t">Hablo español.</td><td class="es-t">Yo también. / Yo no.</td></tr><tr><td class="es-t">No hablo francés.</td><td class="es-t">Yo tampoco. / Yo sí.</td></tr></table>
<h3>Zahlen 0–10</h3><p class="es-t">cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</p>`});
