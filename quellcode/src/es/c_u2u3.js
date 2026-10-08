/* ================= UNIDAD 2 · METAS PROFESIONALES ================= */
COURSE.units.push({id:'u2',n:'2',title:'Metas profesionales',sub:'Jemanden vorstellen · buchstabieren · Alter · Telefon & E-Mail · Studium & Beruf · Tätigkeiten beschreiben',
goals:['este / esta / estos / estas','encantado/-a','Alphabet & buchstabieren','Berufe (m/w)','Zahlen ab 11','tener + Alter','Telefon, E-Mail, Adresse','Verben auf -er / -ir','de + el = del'],
situacion:{title:'Networking auf einer Tech-Messe',npc:'Sra. Ruiz',scene:'Du bist auf einer Tech-Messe in der Fira de Barcelona (Montjuïc) und suchst ein Praktikum. Am Stand einer Firma spricht dich eine Recruiterin an.',role:'Du bist Elena Ruiz, Recruiterin bei einer Software-Firma in Barcelona (Poblenou). Du siezt Jonas zuerst, bietest dann aber das Du an. Du fragst nach Studium, Alter, Erfahrung, Sprachen und Kontaktdaten (móvil, correo).',goal:'Stell dich vor, sag, was du studierst oder arbeitest, und gib deine Handynummer und E-Mail-Adresse (buchstabieren!) an.'},
lessons:[
{id:'l1',title:'Jemanden vorstellen',desc:'Este es Marc · Encantado · Mucho gusto',steps:[
 {t:'info',title:'Este, esta, estos, estas',html:`<p>Um jemanden vorzustellen, benutzt man <b>Demonstrativpronomen</b> (dies/das ist …):</p>
 <table><tr><th></th><th>männlich</th><th>weiblich</th></tr>
 <tr><td>Singular</td><td class="es-t">Este es el señor Vega.</td><td class="es-t">Esta es Paula Díaz.</td></tr>
 <tr><td>Plural</td><td class="es-t">Estos son Andrés y Pablo.</td><td class="es-t">Estas son Ana y Elena.</td></tr></table>
 <p>Antwort: <span class="es-t">Encantado</span> (Mann spricht) / <span class="es-t">Encantada</span> (Frau spricht) / <span class="es-t">Mucho gusto</span> (alle).</p>
 <div class="ojo">Gemischte Gruppe → männliche Form: <span class="es-t">Estos son Laia y Marc.</span></div>`},
 {t:'mc',q:'Du stellst deine Mitbewohnerin Núria vor:',opts:['Esta es Núria.','Este es Núria.','Estas son Núria.'],a:0},
 {t:'mc',q:'Du stellst zwei Kommilitonen vor, Marc und Laia:',opts:['Estos son Marc y Laia.','Estas son Marc y Laia.','Este es Marc y Laia.'],a:0,why:'Gemischte Gruppe → <i>estos</i>.'},
 {t:'gap',q:'– Marta, ___ es Pablo, un compañero del máster. – Encantad___.',a:['este','a'],why:'Pablo ist ein Mann → <i>este</i>. Marta spricht → <i>encantada</i>.'},
 {t:'info',title:'Das Alphabet & buchstabieren',html:`<table><tr><td>a <span class="es-t">a</span></td><td>b <span class="es-t">be</span></td><td>c <span class="es-t">ce</span></td><td>d <span class="es-t">de</span></td><td>e <span class="es-t">e</span></td><td>f <span class="es-t">efe</span></td><td>g <span class="es-t">ge</span></td></tr>
 <tr><td>h <span class="es-t">hache</span></td><td>i <span class="es-t">i</span></td><td>j <span class="es-t">jota</span></td><td>k <span class="es-t">ka</span></td><td>l <span class="es-t">ele</span></td><td>m <span class="es-t">eme</span></td><td>n <span class="es-t">ene</span></td></tr>
 <tr><td>ñ <span class="es-t">eñe</span></td><td>o <span class="es-t">o</span></td><td>p <span class="es-t">pe</span></td><td>q <span class="es-t">cu</span></td><td>r <span class="es-t">erre</span></td><td>s <span class="es-t">ese</span></td><td>t <span class="es-t">te</span></td></tr>
 <tr><td>u <span class="es-t">u</span></td><td>v <span class="es-t">uve</span></td><td>w <span class="es-t">uve doble</span></td><td>x <span class="es-t">equis</span></td><td>y <span class="es-t">i griega</span></td><td>z <span class="es-t">zeta</span></td><td></td></tr></table>
 <table><tr><td class="es-t">¿Cómo se escribe?</td><td>Wie schreibt man das?</td></tr><tr><td class="es-t">¿Se escribe con hache?</td><td>Schreibt man das mit h?</td></tr>
 <tr><td class="es-t">¿Con acento o sin acento?</td><td>Mit oder ohne Akzent?</td></tr><tr><td class="es-t">¿Con mayúscula?</td><td>Groß geschrieben?</td></tr></table>`},
 {t:'vocab',title:'Vorstellen & buchstabieren',items:[['este / esta es …','das ist … (m / w)'],['encantado / encantada','freut mich'],['mucho gusto','sehr erfreut'],['¿Cómo se escribe?','Wie schreibt man das?'],['el apellido','der Nachname'],['el nombre','der Vorname / Name'],['con / sin acento','mit / ohne Akzent'],['la mayúscula / la minúscula','Groß- / Kleinbuchstabe']]},
 {t:'listen',es:'jota, o, ene, a, ese',task:'Hör zu: Welcher Name wird buchstabiert? Schreib die Buchstabennamen ab (z. B. „jota, o, …“).',alt:['jota o ene a ese'],why:'J-O-N-A-S'},
 {t:'mc',q:'Wie buchstabiert man „G“ auf Spanisch?',say:'ge',opts:['ge','je','gue'],a:0,why:'G = <i>ge</i> (gesprochen wie „che“), J = <i>jota</i>.'},
 {t:'mc',q:'„Gross“ – du sagst, dass man das Doppel-S mit zwei S schreibt. Wie heißt der Buchstabe S?',opts:['ese','es','sé'],a:0},
 {t:'tr',de:'Wie schreibt man deinen Nachnamen?',a:['¿Cómo se escribe tu apellido?']},
 {t:'speak',es:'Gross: ge, erre, o, ese, ese.',de:'Deinen Nachnamen buchstabieren'}
]},
{id:'l2',title:'Berufe',desc:'ingeniero, ingeniera, analista …',steps:[
 {t:'info',title:'Berufsbezeichnungen: männlich & weiblich',html:`<table><tr><th>Regel</th><th>männlich</th><th>weiblich</th></tr>
 <tr><td>-o → -a</td><td class="es-t">ingeniero, médico, informático</td><td class="es-t">ingeniera, médica, informática</td></tr>
 <tr><td>-or → -ora</td><td class="es-t">profesor, programador, diseñador</td><td class="es-t">profesora, programadora, diseñadora</td></tr>
 <tr><td>-e, -ista, Konsonant: gleich</td><td class="es-t">el estudiante, el analista</td><td class="es-t">la estudiante, la analista</td></tr></table>
 <div class="ojo"><span class="es-t">el jefe / la jefa</span> – Ausnahme. Und: Bei Berufen <b>kein Artikel</b>: <span class="es-t">Soy ingeniero.</span> (nicht „soy un ingeniero“)</div>`},
 {t:'vocab',title:'Berufe',items:[['el ingeniero / la ingeniera','Ingenieur/in'],['el informático / la informática','Informatiker/in'],['el programador / la programadora','Programmierer/in'],['el analista / la analista','Analyst/in'],['el auditor / la auditora','Wirtschaftsprüfer/in'],['el consultor / la consultora','Berater/in'],['el / la estudiante','Student/in'],['el profesor / la profesora','Lehrer/in, Dozent/in'],['el médico / la médica','Arzt / Ärztin'],['el diseñador / la diseñadora','Designer/in'],['el / la recepcionista','Rezeptionist/in'],['el jefe / la jefa','Chef/in']]},
 {t:'gap',task:'Weibliche Form:',q:'el programador → la ___',a:['programadora']},
 {t:'gap',task:'Weibliche Form:',q:'el analista → la ___',a:['analista'],why:'-ista bleibt gleich.'},
 {t:'gap',task:'Weibliche Form:',q:'el informático → la ___',a:['informática']},
 {t:'mc',q:'Wie sagst du „Ich bin Student“?',opts:['Soy estudiante.','Soy un estudiante.','Estoy estudiante.'],a:0,why:'Beruf: <b>ser</b> ohne Artikel.'},
 {t:'match',q:'Wer macht was?',pairs:[['el programador','escribe código'],['la profesora','trabaja en una universidad'],['el auditor','revisa las cuentas'],['la recepcionista','trabaja en un hotel'],['el médico','trabaja en un hospital']]},
 {t:'tr',de:'Laia ist Ingenieurin.',a:['Laia es ingeniera.']},
 {t:'tr',de:'Ich bin Informatiker.',a:['Soy informático.']}
]},
{id:'l3',title:'Zahlen, Telefon, E-Mail & Alter',desc:'once … mil · arroba · ¿Cuántos años tienes?',steps:[
 {t:'vocab',title:'Zahlen 11–20',items:[['once','11'],['doce','12'],['trece','13'],['catorce','14'],['quince','15'],['dieciséis','16'],['diecisiete','17'],['dieciocho','18'],['diecinueve','19'],['veinte','20']]},
 {t:'info',title:'Zahlen ab 21',html:`<table><tr><td class="es-t">21 veintiuno</td><td class="es-t">22 veintidós</td><td class="es-t">23 veintitrés</td><td class="es-t">29 veintinueve</td></tr>
 <tr><td class="es-t">30 treinta</td><td class="es-t">31 treinta y uno</td><td class="es-t">40 cuarenta</td><td class="es-t">50 cincuenta</td></tr>
 <tr><td class="es-t">60 sesenta</td><td class="es-t">70 setenta</td><td class="es-t">80 ochenta</td><td class="es-t">90 noventa</td></tr>
 <tr><td class="es-t">100 cien</td><td class="es-t">101 ciento uno</td><td class="es-t">200 doscientos</td><td class="es-t">500 quinientos</td></tr>
 <tr><td class="es-t">1000 mil</td><td class="es-t">2000 dos mil</td><td class="es-t">2026 dos mil veintiséis</td><td></td></tr></table>
 <div class="ex">Bis 29 in einem Wort (veinti…), ab 31 mit <b>y</b>: <span class="es-t">treinta y cinco</span>. Genau 100 = <span class="es-t">cien</span>, danach <span class="es-t">ciento</span>.</div>`},
 {t:'vocab',title:'Zehner & Hunderter',items:[['veinte','20'],['treinta','30'],['cuarenta','40'],['cincuenta','50'],['sesenta','60'],['setenta','70'],['ochenta','80'],['noventa','90'],['cien','100'],['mil','1000']]},
 {t:'listen',es:'veintitrés',task:'Schreib die Zahl als Wort.'},
 {t:'listen',es:'cuarenta y ocho',task:'Schreib die Zahl als Wort.'},
 {t:'gap',q:'15 = ___ · 16 = ___',a:['quince','dieciséis']},
 {t:'gap',q:'67 = ___',a:['sesenta y siete']},
 {t:'info',title:'Alter mit tener',html:`<table><tr><th>tener (haben)</th><th></th></tr><tr><td>yo</td><td class="es-t">tengo</td></tr><tr><td>tú</td><td class="es-t">tienes</td></tr><tr><td>él / ella / usted</td><td class="es-t">tiene</td></tr><tr><td>nosotros/-as</td><td class="es-t">tenemos</td></tr><tr><td>vosotros/-as</td><td class="es-t">tenéis</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">tienen</td></tr></table>
 <div class="ojo">Das Alter „hat“ man: <span class="es-t">Tengo 23 años.</span> – nicht „soy 23“! Frage: <span class="es-t">¿Cuántos años tienes?</span></div>`},
 {t:'conj',verb:'tener',de:'haben',forms:['tengo','tienes','tiene','tenemos','tenéis','tienen']},
 {t:'info',title:'Telefon, E-Mail, Adresse',html:`<table><tr><td class="es-t">¿Cuál es tu (número de) móvil?</td><td class="es-t">Es el 612 34 56 78.</td></tr>
 <tr><td class="es-t">¿Cuál es tu correo electrónico?</td><td class="es-t">Es pablo.ruiz@correo.es</td></tr>
 <tr><td class="es-t">¿Cuál es tu dirección?</td><td class="es-t">Calle Mallorca, número 40.</td></tr></table>
 <table><tr><td><b>@</b> <span class="es-t">arroba</span></td><td><b>.</b> <span class="es-t">punto</span></td><td><b>-</b> <span class="es-t">guion</span></td><td><b>_</b> <span class="es-t">guion bajo</span></td></tr>
 <tr><td><span class="es-t">c/</span> = calle</td><td><span class="es-t">av.</span> = avenida</td><td><span class="es-t">pl.</span> = plaza</td><td><span class="es-t">n.º</span> = número</td></tr></table>
 <div class="ex">Telefonnummern liest man in Spanien meist in Paaren oder Dreiergruppen: <span class="es-t">seis uno dos, treinta y cuatro, cincuenta y seis, setenta y ocho</span>.</div>`},
 {t:'vocab',title:'Kontaktdaten',items:[['el móvil','das Handy'],['el correo electrónico','die E-Mail'],['la dirección','die Adresse'],['la calle','die Straße'],['arroba','@'],['punto','Punkt'],['guion','Bindestrich'],['¿Cuántos años tienes?','Wie alt bist du?']]},
 {t:'gap',q:'– ¿Cuántos años ___? – ___ 24 años.',a:['tienes','tengo']},
 {t:'mc',q:'Wie liest man „laia_p@gmail.com“?',opts:['laia guion bajo pe arroba gmail punto com','laia guion pe a gmail punto com','laia guion bajo pe arroba gmail coma com'],a:0},
 {t:'tr',de:'Ich bin 24 Jahre alt.',a:['Tengo 24 años.','Tengo veinticuatro años.']},
 {t:'tr',de:'Wie ist deine Handynummer?',a:['¿Cuál es tu móvil?','¿Cuál es tu número de móvil?','¿Cuál es tu número de teléfono?','¿Cuál es tu teléfono?']}
]},
{id:'l4',title:'Verben auf -er/-ir · Studium & Beruf',desc:'aprender, vivir · ¿Qué haces? · ¿Dónde trabajas?',steps:[
 {t:'info',title:'Regelmäßige Verben auf -er und -ir',html:`<table><tr><th></th><th>aprender (lernen)</th><th>vivir (leben, wohnen)</th></tr>
 <tr><td>yo</td><td class="es-t">aprendo</td><td class="es-t">vivo</td></tr><tr><td>tú</td><td class="es-t">aprendes</td><td class="es-t">vives</td></tr><tr><td>él / ella / usted</td><td class="es-t">aprende</td><td class="es-t">vive</td></tr>
 <tr><td>nosotros/-as</td><td class="es-t">aprendemos</td><td class="es-t">vivimos</td></tr><tr><td>vosotros/-as</td><td class="es-t">aprendéis</td><td class="es-t">vivís</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">aprenden</td><td class="es-t">viven</td></tr></table>
 <div class="ex">-er und -ir unterscheiden sich nur bei <b>nosotros</b> (-emos / -imos) und <b>vosotros</b> (-éis / -ís).</div>
 <p>Genauso: <span class="es-t">leer, comer, beber, responder · escribir, asistir, abrir</span>.</p>`},
 {t:'conj',verb:'vivir',de:'wohnen, leben',forms:['vivo','vives','vive','vivimos','vivís','viven']},
 {t:'conj',verb:'aprender',de:'lernen',forms:['aprendo','aprendes','aprende','aprendemos','aprendéis','aprenden']},
 {t:'info',title:'Über Studium und Beruf sprechen',html:`<table><tr><td class="es-t">¿Qué haces? / ¿A qué te dedicas?</td><td class="es-t">Soy estudiante. / Trabajo como analista.</td></tr>
 <tr><td class="es-t">¿Dónde trabajas?</td><td class="es-t">Trabajo en un banco / en una consultora.</td></tr>
 <tr><td class="es-t">¿Qué estudias?</td><td class="es-t">Estudio Informática.</td></tr>
 <tr><td class="es-t">¿Dónde estudias?</td><td class="es-t">En la Universidad Politécnica de Cataluña.</td></tr>
 <tr><td class="es-t">¿Dónde vives?</td><td class="es-t">Vivo en Barcelona, en el barrio de Gràcia.</td></tr></table>
 <div class="ex">Formell: <span class="es-t">¿Qué hace usted? ¿Dónde trabaja usted?</span></div>`},
 {t:'vocab',title:'Studium & Arbeit',items:[['¿Qué haces?','Was machst du (beruflich)?'],['trabajar como …','als … arbeiten'],['la consultora','die Beratungsfirma'],['el banco','die Bank'],['la universidad','die Universität'],['el máster','der Master'],['las prácticas','das Praktikum'],['vivir','wohnen, leben'],['aprender','lernen'],['escribir','schreiben'],['leer','lesen'],['el barrio','das Stadtviertel']]},
 {t:'gap',q:'Yo ___ (vivir) en Barcelona y mis padres ___ (vivir) en Alemania.',a:['vivo','viven']},
 {t:'gap',q:'Nosotros ___ (aprender) español en la universidad.',a:['aprendemos']},
 {t:'gap',q:'¿Vosotros ___ (escribir) muchos correos?',a:['escribís'],why:'-ir, vosotros → <b>-ís</b>.'},
 {t:'gap',q:'Marc ___ (leer) el periódico.',a:['lee']},
 {t:'order',es:'Trabajo como auditor en una empresa internacional.',de:'Ich arbeite als Prüfer in einem internationalen Unternehmen.'},
 {t:'dialog',place:'Gimnasio en el Eixample',title:'Anmeldung im Fitnessstudio',scene:'Du meldest dich in einem Fitnessstudio an. Der Mitarbeiter füllt ein Formular aus.',lines:[
  {n:'Recepción',es:'Hola, buenas tardes. ¿Tu nombre, por favor?',de:'Hallo, guten Tag. Dein Name, bitte?'},
  {you:true,opts:[{es:'Jonas Gross.',ok:true},{es:'Tengo Jonas Gross.',ok:false,why:'Name: <i>Soy / Me llamo …</i> oder einfach nur der Name.'}]},
  {n:'Recepción',es:'¿Cómo se escribe tu apellido?',de:'Wie schreibt man deinen Nachnamen?'},
  {you:true,opts:[{es:'Ge, erre, o, ese, ese.',ok:true},{es:'Je, erre, o, es, es.',ok:false,why:'Das sind die deutschen Buchstabennamen. Auf Spanisch z. B. R = <i>erre</i>, S = <i>ese</i>, G = <i>ge</i>.'}]},
  {n:'Recepción',es:'Perfecto. ¿Cuántos años tienes?',de:'Perfekt. Wie alt bist du?'},
  {you:true,opts:[{es:'Tengo veinticuatro años.',ok:true},{es:'Soy veinticuatro años.',ok:false,why:'Alter immer mit <b>tener</b>: <i>tengo … años</i>.'},{es:'Tienes veinticuatro años.',ok:false,why:'Über dich selbst: <i>tengo</i>.'}]},
  {n:'Recepción',es:'¿Y a qué te dedicas?',de:'Und was machst du beruflich?'},
  {you:true,opts:[{es:'Soy estudiante. Estudio un máster en la universidad.',ok:true},{es:'Soy un estudiante. Estudio un máster en la universidad.',ok:false,why:'Bei Berufen kein Artikel: <i>Soy estudiante</i>.'}]},
  {n:'Recepción',es:'¡Ah! Tenemos descuento para estudiantes. ¿Y tu correo electrónico?',de:'Ah! Wir haben Studentenrabatt. Und deine E-Mail?'},
  {you:true,opts:[{es:'Jonas arroba correo punto com.',ok:true},{es:'Jonas a correo coma com.',ok:false,why:'„.“ = <i>punto</i>, „@“ = <i>arroba</i>.'}]},
  {n:'Recepción',es:'Muy bien. ¡Bienvenido!',de:'Sehr gut. Willkommen!'}]},
 {t:'tr',de:'Wo wohnst du?',a:['¿Dónde vives?']},
 {t:'tr',de:'Ich studiere Informatik in Barcelona.',a:['Estudio Informática en Barcelona.','Estudio informática en Barcelona.']}
]},
{id:'l5',title:'Tätigkeiten beschreiben',desc:'Llevo la agenda · Soy responsable de …',steps:[
 {t:'vocab',title:'Tätigkeiten im Job',items:[['llevar la contabilidad','die Buchhaltung führen'],['llevar la agenda','den Terminkalender führen'],['organizar seminarios','Seminare organisieren'],['asistir a ferias y congresos','Messen und Kongresse besuchen'],['responder a los correos','die E-Mails beantworten'],['ser responsable de …','verantwortlich sein für …'],['contactar con clientes','Kunden kontaktieren'],['el cliente / la clienta','der Kunde / die Kundin'],['el departamento','die Abteilung'],['revisar','prüfen, überprüfen']]},
 {t:'info',title:'de + el = del',html:`<p>Wenn <b>de</b> und <b>el</b> zusammentreffen, verschmelzen sie zu <b>del</b> (ähnlich wie „von dem“ → „vom“):</p>
 <table><tr><td class="es-t">Es responsable del contacto con clientes.</td><td>de + el</td></tr>
 <tr><td class="es-t">Es responsable de la agenda.</td><td>bleibt</td></tr>
 <tr><td class="es-t">Es responsable de los empleados.</td><td>bleibt</td></tr>
 <tr><td class="es-t">Es responsable de las empresas.</td><td>bleibt</td></tr></table>
 <div class="ojo">Nur <b>de + el</b> verschmilzt. Später lernst du auch <b>a + el = al</b>.</div>`},
 {t:'gap',q:'Ana es responsable ___ departamento de marketing.',a:['del']},
 {t:'gap',q:'Soy responsable ___ página web.',a:['de la']},
 {t:'gap',q:'Mi jefe ___ (asistir) a muchas ferias.',a:['asiste']},
 {t:'gap',q:'Yo ___ (responder) a los correos de los clientes.',a:['respondo']},
 {t:'mc',q:'Was macht jemand, der „lleva la contabilidad“?',opts:['die Buchhaltung','den Terminkalender','die Webseite'],a:0},
 {t:'tr',de:'Ich bin verantwortlich für den Kontakt mit Kunden.',a:['Soy responsable del contacto con clientes.','Soy responsable del contacto con los clientes.']},
 {t:'free',task:'Beschreibe in 4–6 Sätzen deine Arbeit (oder einen Job, den du dir wünschst): Was machst du, wo, wofür bist du verantwortlich, mit wem sprichst du?',hint:'Trabajo como … en … · Soy responsable de/del … · Reviso … · Hablo con clientes · Escribo …',focus:'Verben auf -ar/-er/-ir, Berufe, ser responsable de, del',model:'Trabajo como analista en una empresa internacional en Mannheim. Reviso los sistemas informáticos de los clientes. Soy responsable del contacto con algunos clientes. Escribo informes y respondo a muchos correos. A veces asisto a reuniones con el equipo.'}
]}],
resumen:`<h3>Jemanden vorstellen</h3><table><tr><td class="es-t">Este es el señor Vega. / Esta es Paula.</td><td class="es-t">Encantado / Encantada / Mucho gusto.</td></tr><tr><td class="es-t">Estos son Andrés y Pablo. / Estas son Ana y Elena.</td><td></td></tr></table>
<h3>Buchstabieren</h3><p class="es-t">¿Cómo se escribe …? · ¿Con hache? · ¿Con acento o sin acento? · ¿Con mayúscula?</p>
<h3>Beruf & Studium</h3><table><tr><td class="es-t">¿Qué haces?</td><td class="es-t">Soy ingeniera. / Trabajo como analista.</td></tr><tr><td class="es-t">¿Dónde trabajas?</td><td class="es-t">En un banco.</td></tr><tr><td class="es-t">¿Qué estudias? ¿Dónde?</td><td class="es-t">Informática, en la UPC.</td></tr></table>
<h3>Berufe</h3><p>-o/-a (ingeniero/-a) · -or/-ora (profesor/-a) · gleich: -e, -ista (estudiante, analista) · el jefe / la jefa · <b>kein Artikel</b>: Soy estudiante.</p>
<h3>Alter, Telefon, E-Mail</h3><table><tr><td class="es-t">¿Cuántos años tienes?</td><td class="es-t">Tengo 24 años.</td></tr><tr><td class="es-t">¿Cuál es tu móvil / correo?</td><td class="es-t">@ arroba · . punto · - guion · _ guion bajo</td></tr></table>
<h3>Verben</h3><table><tr><th>tener</th><th>aprender</th><th>vivir</th></tr><tr><td>tengo, tienes, tiene, tenemos, tenéis, tienen</td><td>aprendo, -es, -e, -emos, -éis, -en</td><td>vivo, -es, -e, -imos, -ís, -en</td></tr></table>
<h3>de + el = del</h3><p class="es-t">Es responsable del contacto con clientes / de la agenda.</p>
<h3>Zahlen</h3><p>11 once · 12 doce · 15 quince · 16 dieciséis · 20 veinte · 21 veintiuno · 30 treinta · 31 treinta y uno · 100 cien · 101 ciento uno · 1000 mil</p>`});

/* ================= UNIDAD 3 · FAMILIA Y COMPAÑÍA ================= */
COURSE.units.push({id:'u3',n:'3',title:'Familia y compañía',sub:'Familie · Aussehen & Charakter · nach der Anzahl fragen · über eine Firma sprechen · Gefallen & Interesse',
goals:['Familie','mi / tu / su …','Adjektive & Angleichung','muy · bastante · un poco','estar','ser oder estar?','gustar, interesar, molestar','¿Cuánto/-a/-os/-as?'],
situacion:{title:'Abendessen mit den Mitbewohnern',npc:'Clara',scene:'Erster Abend in deiner WG in Sants. Deine Mitbewohnerin Clara kocht und fragt dich über deine Familie und deine Interessen aus.',role:'Du bist Clara, 26, aus Valencia, Krankenpflegerin, lebst seit 2 Jahren in der WG. Du duzt Jonas, bist herzlich und erzählst auch von deiner eigenen Familie (zwei Schwestern, Eltern in Valencia).',goal:'Erzähl von deiner Familie (wer, wie alt, wie sie sind, wo sie wohnen) und sag, was dir gefällt und was dich stört. Frag Clara auch nach ihrer Familie.'},
lessons:[
{id:'l1',title:'Die Familie & Possessivbegleiter',desc:'mi hermano, tus padres, su tía',steps:[
 {t:'vocab',title:'Familie',items:[['el padre / la madre','Vater / Mutter'],['los padres','die Eltern'],['el hermano / la hermana','Bruder / Schwester'],['los hermanos','die Geschwister / Brüder'],['el hijo / la hija','Sohn / Tochter'],['el abuelo / la abuela','Großvater / Großmutter'],['el nieto / la nieta','Enkel / Enkelin'],['el tío / la tía','Onkel / Tante'],['el primo / la prima','Cousin / Cousine'],['la pareja','der/die Partner/in'],['el novio / la novia','fester Freund / feste Freundin']]},
 {t:'info',title:'Männliche Mehrzahl = gemischte Gruppe',html:`<table><tr><td class="es-t">el padre + la madre</td><td>=</td><td class="es-t">los padres</td></tr><tr><td class="es-t">el hermano + la hermana</td><td>=</td><td class="es-t">los hermanos</td></tr></table>
 <div class="ex"><span class="es-t">¿Tienes hermanos?</span> fragt also nach Geschwistern allgemein. Antwort z. B.: <span class="es-t">Sí, tengo un hermano.</span> / <span class="es-t">No, soy hijo único.</span> (Einzelkind)</div>`},
 {t:'info',title:'Possessivbegleiter (mein, dein, sein …)',html:`<table><tr><th></th><th>Singular</th><th>Plural</th></tr>
 <tr><td>mein</td><td class="es-t">mi tío / tía</td><td class="es-t">mis tíos / tías</td></tr>
 <tr><td>dein</td><td class="es-t">tu tío / tía</td><td class="es-t">tus tíos / tías</td></tr>
 <tr><td>sein / ihr / Ihr</td><td class="es-t">su tío / tía</td><td class="es-t">sus tíos / tías</td></tr>
 <tr><td>unser</td><td class="es-t">nuestro tío / nuestra tía</td><td class="es-t">nuestros tíos / nuestras tías</td></tr>
 <tr><td>euer</td><td class="es-t">vuestro tío / vuestra tía</td><td class="es-t">vuestros tíos / vuestras tías</td></tr>
 <tr><td>ihr (Pl.) / Ihr</td><td class="es-t">su tío / tía</td><td class="es-t">sus tíos / tías</td></tr></table>
 <div class="ojo">Der Begleiter richtet sich nach dem <b>Besitz</b>, nicht nach dem Besitzer: <span class="es-t">mis padres</span> (Plural, weil Eltern Plural). <b>su/sus</b> kann sein / ihr / Ihr / ihr (Pl.) heißen – der Kontext entscheidet.</div>`},
 {t:'gap',q:'Me llamo Jonas. ___ hermano se llama Lukas y ___ padres viven en Alemania.',a:['mi','mis']},
 {t:'gap',q:'Clara, ¿cómo se llama ___ hermana?',a:['tu']},
 {t:'gap',q:'Nosotros vivimos con ___ abuela.',a:['nuestra'],why:'abuela ist weiblich → <i>nuestra</i>.'},
 {t:'mc',q:'Der Vater meiner Mutter ist mein …',opts:['abuelo','tío','primo'],a:0},
 {t:'mc',q:'Die Tochter meines Onkels ist meine …',opts:['prima','tía','nieta'],a:0},
 {t:'mc',q:'„Marta y su hermano“ – wessen Bruder?',opts:['Martas Bruder','dein Bruder','unser Bruder'],a:0,why:'<i>su</i> bezieht sich hier auf Marta.'},
 {t:'tr',de:'Ich habe einen Bruder und zwei Cousinen.',a:['Tengo un hermano y dos primas.']},
 {t:'tr',de:'Hast du Geschwister?',a:['¿Tienes hermanos?']}
]},
{id:'l2',title:'Aussehen & Charakter',desc:'alto, simpático, trabajadora …',steps:[
 {t:'info',title:'Adjektive passen sich an',html:`<table><tr><th></th><th>männlich</th><th>weiblich</th></tr>
 <tr><td>-o / -a</td><td class="es-t">un hombre delgado</td><td class="es-t">una mujer delgada</td></tr>
 <tr><td>-e / Konsonant: gleich</td><td class="es-t">un niño alegre / un producto especial</td><td class="es-t">una niña alegre / una persona especial</td></tr>
 <tr><td>Plural</td><td class="es-t">hombres delgados</td><td class="es-t">mujeres delgadas</td></tr></table>
 <p>Das Adjektiv steht normalerweise <b>nach</b> dem Substantiv.</p>
 <h3>Abstufen</h3><table><tr><td class="es-t">Es muy alto.</td><td>sehr</td></tr><tr><td class="es-t">Es bastante alto.</td><td>ziemlich</td></tr><tr><td class="es-t">Es un poco vago.</td><td>ein bisschen (meist bei Negativem)</td></tr></table>
 <div class="ojo"><span class="es-t">muy, bastante, un poco</span> verändern sich nicht.</div>`},
 {t:'vocab',title:'Aussehen',items:[['alto / alta','groß'],['bajo / baja','klein'],['delgado / delgada','schlank'],['gordo / gorda','dick'],['guapo / guapa','hübsch, gutaussehend'],['joven','jung'],['mayor','älter, alt'],['moreno / morena','dunkelhaarig'],['rubio / rubia','blond'],['tiene el pelo largo / corto','hat lange / kurze Haare']]},
 {t:'vocab',title:'Charakter',items:[['simpático / simpática','sympathisch, nett'],['antipático / antipática','unsympathisch'],['trabajador / trabajadora','fleißig'],['vago / vaga','faul'],['ordenado / ordenada','ordentlich'],['caótico / caótica','chaotisch'],['optimista','optimistisch'],['pesimista','pessimistisch'],['alegre','fröhlich'],['triste','traurig'],['tímido / tímida','schüchtern'],['abierto / abierta','offen']]},
 {t:'match',q:'Finde das Gegenteil',pairs:[['alto','bajo'],['simpático','antipático'],['trabajador','vago'],['ordenado','caótico'],['alegre','triste'],['joven','mayor']]},
 {t:'gap',q:'Mi hermana es muy ___ (simpático) y bastante ___ (alto).',a:['simpática','alta']},
 {t:'gap',q:'Mis primos son ___ (trabajador) y ___ (optimista).',a:['trabajadores','optimistas']},
 {t:'gap',q:'Clara es una persona ___ (alegre) y ___ (ordenado).',a:['alegre','ordenada']},
 {t:'mc',q:'Was klingt höflicher, wenn jemand faul ist?',opts:['Es un poco vago.','Es muy vago.','Es bastante vago.'],a:0,why:'<i>un poco</i> schwächt negative Eigenschaften ab.'},
 {t:'tr',de:'Mein Vater ist groß und ein bisschen chaotisch.',a:['Mi padre es alto y un poco caótico.']},
 {t:'tr',de:'Meine Schwestern sind sehr sympathisch.',a:['Mis hermanas son muy simpáticas.']},
 {t:'listen',es:'Mi madre es baja, morena y muy alegre.',de:'Meine Mutter ist klein, dunkelhaarig und sehr fröhlich.'}
]},
{id:'l3',title:'estar · ser oder estar?',desc:'Estoy en Barcelona · Es de Cádiz',steps:[
 {t:'info',title:'Das Verb estar',html:`<table><tr><th></th><th>estar</th></tr><tr><td>yo</td><td class="es-t">estoy</td></tr><tr><td>tú</td><td class="es-t">estás</td></tr><tr><td>él / ella / usted</td><td class="es-t">está</td></tr><tr><td>nosotros/-as</td><td class="es-t">estamos</td></tr><tr><td>vosotros/-as</td><td class="es-t">estáis</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">están</td></tr></table>`},
 {t:'conj',verb:'estar',de:'sein (Ort, Befinden)',forms:['estoy','estás','está','estamos','estáis','están']},
 {t:'info',title:'ser oder estar?',html:`<p>Beide heißen „sein“ – aber:</p>
 <table><tr><th>ser – Wer/Was ist es?</th><th>estar – Wo? Wie geht’s?</th></tr>
 <tr><td class="es-t">Es Juan. <span class="muted">(Name)</span></td><td class="es-t">Estoy en Barcelona. <span class="muted">(Ort)</span></td></tr>
 <tr><td class="es-t">Es ingeniera. <span class="muted">(Beruf)</span></td><td class="es-t">La facultad está en el campus. <span class="muted">(Ort)</span></td></tr>
 <tr><td class="es-t">Es de Cádiz. <span class="muted">(Herkunft)</span></td><td class="es-t">¿Cómo estás? – Estoy bien. <span class="muted">(Befinden)</span></td></tr>
 <tr><td class="es-t">Es alto y simpático. <span class="muted">(Eigenschaft)</span></td><td class="es-t">Estoy cansado. <span class="muted">(Zustand gerade)</span></td></tr></table>
 <div class="ex">Merkhilfe: <b>ser</b> = was jemand/etwas <b>ist</b> (Identität). <b>estar</b> = wo/wie jemand <b>sich befindet</b>.</div>`},
 {t:'mc',q:'Barcelona ___ en Cataluña.',opts:['está','es'],a:0,keep:true,why:'Ort → <b>estar</b>.'},
 {t:'mc',q:'Mi hermano ___ informático.',opts:['es','está'],a:0,keep:true,why:'Beruf → <b>ser</b>.'},
 {t:'mc',q:'Hoy ___ muy cansado.',opts:['estoy','soy'],a:0,keep:true,why:'Momentaner Zustand → <b>estar</b>.'},
 {t:'mc',q:'Clara ___ de Valencia.',opts:['es','está'],a:0,keep:true,why:'Herkunft → <b>ser</b>.'},
 {t:'mc',q:'Mis padres ___ muy simpáticos.',opts:['son','están'],a:0,keep:true,why:'Charaktereigenschaft → <b>ser</b>.'},
 {t:'mc',q:'¿Dónde ___ la Sagrada Família?',opts:['está','es'],a:0,keep:true},
 {t:'gap',q:'– ¿Cómo ___ (tú)? – ___ bien, gracias.',a:['estás','estoy']},
 {t:'gap',q:'Nosotros ___ en la biblioteca y ___ estudiantes de la universidad.',a:['estamos','somos']},
 {t:'tr',de:'Meine Eltern sind in Mannheim.',a:['Mis padres están en Mannheim.']},
 {t:'tr',de:'Wie geht es euch?',a:['¿Cómo estáis?','¿Qué tal estáis?']}
]},
{id:'l4',title:'gustar, interesar, molestar',desc:'Me gusta la rutina · Le interesan los idiomas',steps:[
 {t:'info',title:'Me gusta … – „es gefällt mir“',html:`<p><b>gustar</b> funktioniert anders als im Deutschen: Wörtlich heißt es „etwas gefällt mir“. Das Verb richtet sich nach der Sache, die gefällt:</p>
 <table><tr><th>Person</th><th>Singular / Infinitiv</th><th>Plural</th></tr>
 <tr><td>(a mí) <b>me</b></td><td rowspan="6" class="es-t">gusta la música<br>gusta viajar</td><td rowspan="6" class="es-t">gustan los idiomas<br>gustan las fiestas</td></tr>
 <tr><td>(a ti) <b>te</b></td></tr><tr><td>(a él / ella / usted) <b>le</b></td></tr><tr><td>(a nosotros/-as) <b>nos</b></td></tr><tr><td>(a vosotros/-as) <b>os</b></td></tr><tr><td>(a ellos / ellas / ustedes) <b>les</b></td></tr></table>
 <p>Genauso: <span class="es-t">interesar</span>, <span class="es-t">molestar</span>.</p>
 <div class="ojo">Nach diesen Verben steht der Artikel: <span class="es-t">Me gusta <b>la</b> música</span> (nicht „me gusta música“).</div>
 <table><tr><td class="es-t">¿Te gusta la rutina?</td><td class="es-t">Sí, mucho. / Sí, bastante. / No, nada.</td></tr><tr><td class="es-t">¿Le interesa viajar?</td><td class="es-t">No mucho.</td></tr><tr><td class="es-t">¿Te molestan las discusiones?</td><td class="es-t">Un poco.</td></tr></table>`},
 {t:'mc',q:'Me ___ los idiomas.',opts:['gustan','gusta','gusto'],a:0,keep:true,why:'<i>los idiomas</i> ist Plural → <i>gustan</i>.'},
 {t:'mc',q:'Me ___ trabajar en equipo.',opts:['gusta','gustan','gusto'],a:0,keep:true,why:'Infinitiv → immer Singular: <i>gusta</i>.'},
 {t:'mc',q:'A mi hermano ___ interesa la política.',opts:['le','me','te'],a:0,keep:true},
 {t:'gap',q:'¿A ti ___ ___ (molestar) los ruidos?',a:['te','molestan']},
 {t:'gap',q:'A nosotros ___ ___ (gustar) la comida catalana.',a:['nos','gusta']},
 {t:'gap',q:'A mis padres ___ ___ (interesar) los museos.',a:['les','interesan']},
 {t:'tr',de:'Mir gefällt Barcelona sehr.',a:['Me gusta mucho Barcelona.','Me gusta Barcelona mucho.','A mí me gusta mucho Barcelona.']},
 {t:'tr',de:'Mich stört der Lärm.',a:['Me molesta el ruido.','A mí me molesta el ruido.']},
 {t:'dialog',place:'Piso compartido en Sants',title:'Was magst du?',scene:'In der WG-Küche. Dein Mitbewohner Óscar fragt dich aus.',lines:[
  {n:'Óscar',es:'Oye, Jonas, ¿te gusta cocinar?',de:'Hey, Jonas, kochst du gern?'},
  {you:true,opts:[{es:'Sí, bastante. Me gusta mucho la comida italiana.',ok:true},{es:'Sí, bastante. Me gustan mucho la comida italiana.',ok:false,why:'<i>la comida</i> ist Singular → <i>gusta</i>.'},{es:'Sí, yo gusto cocinar.',ok:false,why:'Man sagt <i>me gusta cocinar</i> – nicht „yo gusto“.'}]},
  {n:'Óscar',es:'¡A mí también! ¿Y te interesa el fútbol?',de:'Mir auch! Und interessierst du dich für Fußball?'},
  {you:true,prompt:'Du interessierst dich nicht für Fußball.',opts:[{es:'No mucho. Me interesan más los deportes de montaña.',ok:true},{es:'No, no me interesan el fútbol.',ok:false,why:'<i>el fútbol</i> ist Singular → <i>no me interesa</i>.'},{es:'Yo tampoco.',ok:false,why:'Óscar hat nichts Negatives gesagt – „yo tampoco“ passt nicht.'}]},
  {n:'Óscar',es:'Vale. ¿Y qué te molesta en un piso compartido?',de:'Okay. Und was stört dich in einer WG?'},
  {you:true,opts:[{es:'Me molestan los platos sucios en la cocina.',ok:true},{es:'Me molesta los platos sucios en la cocina.',ok:false,why:'<i>los platos</i> ist Plural → <i>molestan</i>.'}]},
  {n:'Óscar',es:'¡Ja, ja! A mí también. Somos buenos compañeros de piso.',de:'Haha! Mich auch. Wir sind gute Mitbewohner.'}]}
]},
{id:'l5',title:'Über eine Firma sprechen · ¿cuánto?',desc:'¿Cuántos empleados tiene? · Es una empresa familiar',steps:[
 {t:'info',title:'¿Cuánto? – nach der Anzahl fragen',html:`<p><b>cuánto</b> richtet sich nach dem Substantiv:</p>
 <table><tr><td class="es-t">¿Cuánto tiempo pasas con tu familia?</td><td>m. Sg.</td></tr>
 <tr><td class="es-t">¿Cuánta gente trabaja aquí?</td><td>w. Sg.</td></tr>
 <tr><td class="es-t">¿Cuántos años tienes?</td><td>m. Pl.</td></tr>
 <tr><td class="es-t">¿Cuántas horas trabajas?</td><td>w. Pl.</td></tr></table>`},
 {t:'vocab',title:'Über eine Firma sprechen',items:[['la empresa familiar','das Familienunternehmen'],['el fundador / la fundadora','der/die Gründer/in'],['el sector','die Branche'],['los empleados','die Angestellten'],['exportar','exportieren'],['vender','verkaufen'],['el producto','das Produkt'],['tiene … años de historia','hat … Jahre Geschichte'],['líder del mercado','Marktführer'],['la sede','der Hauptsitz']]},
 {t:'gap',q:'¿___ empleados tiene la empresa?',a:['Cuántos']},
 {t:'gap',q:'¿___ horas trabajas al día?',a:['Cuántas']},
 {t:'gap',q:'¿___ gente vive en Barcelona?',a:['Cuánta'],why:'<i>la gente</i> ist weiblich Singular.'},
 {t:'listen',es:'La empresa tiene casi cien años de historia.',de:'Das Unternehmen hat fast hundert Jahre Geschichte.'},
 {t:'order',es:'Es una empresa familiar del sector de la moda.',de:'Es ist ein Familienunternehmen aus der Modebranche.'},
 {t:'tr',de:'Wie viele Geschwister hast du?',a:['¿Cuántos hermanos tienes?']},
 {t:'free',task:'Beschreibe deine Familie in 5–7 Sätzen: Wer gehört dazu? Wie alt sind sie, wo wohnen sie, wie sind sie (Aussehen/Charakter), was gefällt ihnen?',hint:'Tengo un hermano, se llama … · Tiene … años · Vive en … · Es alto y muy … · Le gusta/n …',focus:'Familie, Possessivbegleiter, Adjektivangleichung, ser/estar, gustar',model:'Mi familia no es muy grande. Mis padres viven en Alemania, cerca de Mannheim. Mi madre es profesora y es muy alegre. Mi padre es alto y un poco caótico. Tengo un hermano. Es muy simpático y le gusta mucho el deporte. Ahora yo estoy en Barcelona, pero hablo con mi familia todas las semanas.'}
]}],
resumen:`<h3>Familie</h3><p class="es-t">el padre · la madre · los padres · el hermano · la hermana · el hijo · la hija · el abuelo · la abuela · el tío · la tía · el primo · la prima</p>
<h3>Possessivbegleiter</h3><table><tr><td>mi / mis</td><td>tu / tus</td><td>su / sus</td></tr><tr><td>nuestro/-a/-os/-as</td><td>vuestro/-a/-os/-as</td><td>su / sus</td></tr></table>
<h3>Adjektive</h3><p>-o/-a: alto/alta · -e & Konsonant gleich: alegre, especial · Plural +s/+es · <b>muy</b> (sehr), <b>bastante</b> (ziemlich), <b>un poco</b> (ein bisschen) bleiben gleich.</p>
<h3>estar</h3><p>estoy · estás · está · estamos · estáis · están</p>
<h3>ser oder estar?</h3><table><tr><th>ser</th><th>estar</th></tr><tr><td>Name, Beruf, Herkunft, Eigenschaft</td><td>Ort, Befinden, momentaner Zustand</td></tr><tr><td class="es-t">Es cocinero. Es de Cádiz.</td><td class="es-t">Está en Novelda. ¿Cómo estás?</td></tr></table>
<h3>gustar & Co.</h3><table><tr><td>me · te · le · nos · os · les</td><td class="es-t">gusta + Sg. / Infinitiv · gustan + Pl.</td></tr><tr><td colspan="2" class="es-t">Me gusta la rutina. Te molesta trabajar con estrés. Le interesan las discusiones.</td></tr></table>
<h3>¿Cuánto?</h3><p class="es-t">¿Cuánto tiempo? · ¿Cuánta gente? · ¿Cuántos años? · ¿Cuántas horas?</p>`});

/* ================= Kommende Unidades (werden in c_u9u10 ersetzt) ================= */
window.SOON=[['u9','9','Momento de cambios','Wohnung & Büro beschreiben · Imperfekt · über Veränderungen sprechen'],
 ['u10','10','Llegar a la meta','Biografie · Indefinido · Bewerbung & Vorstellungsgespräch']];
