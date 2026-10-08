/* ================= UNIDAD 6 · VIAJES ================= */
COURSE.units.push({id:'u6',n:'6',title:'Viajes',sub:'Freizeit & Vorlieben · Zustimmung & Widerspruch · Hotelzimmer reservieren · ein Problem benennen · sich entschuldigen · über Erfahrungen sprechen',
goals:['encantar, interesar, molestar + betonte Pronomen','A mí también / tampoco / sí / no','Hotelausstattung','Verben mit -g- (hago, pongo, salgo …)','jugar (u→ue)','Perfekt (he hablado)','unregelmäßige Partizipien','neutrales lo'],
situacion:{title:'Problem im Hotel in Sevilla',npc:'Recepción',scene:'Du bist für ein verlängertes Wochenende in einem Hotel in Sevilla. Abends funktioniert die Klimaanlage in deinem Zimmer nicht, und es fehlen Handtücher. Du rufst an der Rezeption an.',role:'Du bist Rezeptionist/in in einem Hotel in Sevilla, sehr höflich, du siezt den Gast. Entschuldige dich für die Probleme, frag nach Details (Zimmernummer, was genau nicht funktioniert), biete Lösungen an (Techniker schicken, anderes Zimmer, Handtücher bringen). Frag am Ende, was er schon in Sevilla gemacht hat (Perfekt!).',goal:'Benenne die Probleme (no funciona …, faltan …), nenne deine Zimmernummer, akzeptiere eine Lösung und erzähl im Perfekt, was du heute schon gemacht hast.'},
lessons:[
{id:'l1',title:'Freizeit & Vorlieben',desc:'Me encanta la naturaleza · A mí también',steps:[
 {t:'vocab',title:'Freizeit',items:[['el tiempo libre','die Freizeit'],['hacer deporte','Sport treiben'],['ir al gimnasio','ins Fitnessstudio gehen'],['nadar','schwimmen'],['jugar al tenis / al fútbol','Tennis / Fußball spielen'],['salir con amigos','mit Freunden ausgehen'],['leer un libro','ein Buch lesen'],['ir de excursión','einen Ausflug machen'],['la montaña','die Berge'],['la naturaleza','die Natur'],['encantar','sehr gefallen, lieben'],['casi nunca','fast nie']]},
 {t:'info',title:'encantar & betonte Pronomen',html:`<p><b>encantar</b> funktioniert wie <i>gustar</i>, ist aber stärker („lieben“): <span class="es-t">Me encanta la naturaleza. Me encantan los museos.</span></p>
 <table><tr><th>betont (optional)</th><th>unbetont (Pflicht)</th><th></th></tr>
 <tr><td class="es-t">(A mí)</td><td class="es-t">me</td><td rowspan="6" class="es-t">encanta jugar al tenis.<br>gustan los museos.<br>interesa la cultura.<br>molesta el ruido.</td></tr>
 <tr><td class="es-t">(A ti)</td><td class="es-t">te</td></tr><tr><td class="es-t">(A él / ella / usted)</td><td class="es-t">le</td></tr><tr><td class="es-t">(A nosotros/-as)</td><td class="es-t">nos</td></tr><tr><td class="es-t">(A vosotros/-as)</td><td class="es-t">os</td></tr><tr><td class="es-t">(A ellos / ellas / ustedes)</td><td class="es-t">les</td></tr></table>
 <div class="ex">Die betonten Formen braucht man zur Hervorhebung: <span class="es-t">A él le gustan los bares, pero a mí me molesta el ruido.</span></div>
 <div class="ojo">Mit Namen: <span class="es-t">A Miguel <b>le</b> gusta la música.</span> – das <i>le</i> bleibt!</div>`},
 {t:'info',title:'Zustimmen & widersprechen bei gustar',html:`<table><tr><th>Aussage</th><th>gleich</th><th>anders</th></tr>
 <tr><td class="es-t">Me gusta nadar.</td><td class="es-t">A mí también. 🙂</td><td class="es-t">A mí no. 🙁</td></tr>
 <tr><td class="es-t">No me gusta la playa.</td><td class="es-t">A mí tampoco.</td><td class="es-t">A mí sí.</td></tr></table>
 <div class="ojo">Bei <i>gustar/encantar/interesar</i>: <b>A mí</b> también – nicht „yo también“ (das ist für normale Verben: <span class="es-t">Hablo inglés. – Yo también.</span>).</div>`},
 {t:'mc',q:'– Me encantan los museos. – (Dir auch.)',opts:['A mí también.','Yo también.','A mí tampoco.'],a:0},
 {t:'mc',q:'– No me gusta el fútbol. – (Dir schon!)',opts:['A mí sí.','A mí también.','Yo sí.'],a:0},
 {t:'mc',q:'– Juego al tenis los sábados. – (Du auch.)',opts:['Yo también.','A mí también.','Me también.'],a:0,why:'<i>jugar</i> ist ein normales Verb → <i>yo también</i>.'},
 {t:'gap',q:'A mi hermana ___ ___ (encantar) las montañas.',a:['le','encantan']},
 {t:'gap',q:'¿A vosotros ___ ___ (interesar) la historia?',a:['os','interesa']},
 {t:'info',title:'Verben mit -g- & jugar',html:`<p>Einige Verben haben in der 1. Person Singular ein <b>-g-</b>:</p>
 <table><tr><td class="es-t">hacer → hago</td><td class="es-t">poner → pongo</td><td class="es-t">salir → salgo</td></tr><tr><td class="es-t">tener → tengo (tienes)</td><td class="es-t">venir → vengo (vienes)</td><td class="es-t">decir → digo (dices)</td></tr></table>
 <p><b>jugar</b> (u→ue): <span class="es-t">juego, juegas, juega, jugamos, jugáis, juegan</span> – Sport immer mit <b>al</b>: <span class="es-t">juego al tenis</span>.</p>`},
 {t:'gap',q:'Los fines de semana ___ (yo, salir) con mis amigos y ___ (hacer) deporte.',a:['salgo','hago']},
 {t:'conj',verb:'jugar',de:'spielen',forms:['juego','juegas','juega','jugamos','jugáis','juegan']},
 {t:'tr',de:'Ich liebe die Natur, aber der Lärm stört mich.',a:['Me encanta la naturaleza, pero me molesta el ruido.']}
]},
{id:'l2',title:'Ein Hotelzimmer reservieren',desc:'Quería reservar una habitación doble',steps:[
 {t:'vocab',title:'Im Hotel',items:[['la habitación doble / individual','das Doppel- / Einzelzimmer'],['exterior / interior','zur Straße / zum Innenhof'],['tranquila / ruidosa','ruhig / laut'],['con ducha / con baño','mit Dusche / mit Bad'],['el aire acondicionado','die Klimaanlage'],['la calefacción','die Heizung'],['la piscina','das Schwimmbad'],['el desayuno incluido','Frühstück inklusive'],['la recepción','die Rezeption'],['la ubicación','die Lage'],['el precio','der Preis'],['quería …','ich hätte gern / ich wollte …']]},
 {t:'info',title:'Höflich reservieren',html:`<table><tr><td class="es-t">Buenos días, ¿en qué puedo ayudarle?</td><td>Rezeption</td></tr><tr><td class="es-t">Quería reservar una habitación doble.</td><td>du (höflich: <b>quería</b>)</td></tr>
 <tr><td class="es-t">¿Para qué fechas?</td><td class="es-t">Del 20 al 23 de mayo.</td></tr><tr><td class="es-t">¿Para cuántas personas?</td><td class="es-t">Para dos.</td></tr>
 <tr><td class="es-t">¿Está incluido el desayuno?</td><td class="es-t">Sí, está incluido. / No, son 12 € más.</td></tr><tr><td class="es-t">¿Me puede decir si hay …?</td><td>Können Sie mir sagen, ob es … gibt?</td></tr></table>
 <div class="ex">Datum: <span class="es-t">el 3 de octubre</span> · <span class="es-t">del 20 al 23 de mayo</span> (de + el = del, a + el = al)</div>`},
 {t:'dialog',place:'Hotel en Sevilla (por teléfono)',title:'Reservierung',scene:'Du willst für ein langes Wochenende ein Zimmer in Sevilla reservieren.',lines:[
  {n:'Recepción',es:'Hotel Giralda, buenos días. ¿En qué puedo ayudarle?',de:'Hotel Giralda, guten Morgen. Wie kann ich Ihnen helfen?'},
  {you:true,opts:[{es:'Buenos días. Quería reservar una habitación individual.',ok:true},{es:'Buenos días. Quiero que reservar una habitación individual.',ok:false,why:'<i>querer</i> + Infinitiv – ohne <i>que</i>. Höflicher: <i>quería</i>.'}]},
  {n:'Recepción',es:'¿Para qué fechas?',de:'Für welche Daten?'},
  {you:true,opts:[{es:'Del diez al trece de octubre.',ok:true},{es:'De el diez a el trece de octubre.',ok:false,why:'de + el = <b>del</b>, a + el = <b>al</b>.'}]},
  {n:'Recepción',es:'Tenemos una habitación exterior con baño por 85 euros la noche.',de:'Wir haben ein Zimmer zur Straße mit Bad für 85 € pro Nacht.'},
  {you:true,opts:[{es:'¿Está incluido el desayuno?',ok:true},{es:'¿Es incluida el desayuno?',ok:false,why:'<i>el desayuno</i> ist männlich; man sagt <i>está incluido</i>.'}]},
  {n:'Recepción',es:'Sí, está incluido. ¿Prefiere una habitación tranquila?',de:'Ja. Möchten Sie lieber ein ruhiges Zimmer?'},
  {you:true,opts:[{es:'Sí, prefiero una habitación interior, por favor.',ok:true},{es:'Sí, prefiero una habitación ruidosa, por favor.',ok:false,why:'<i>ruidosa</i> = laut 😉'}]},
  {n:'Recepción',es:'Perfecto. ¿A nombre de quién?',de:'Perfekt. Auf welchen Namen?'},
  {you:true,opts:[{es:'A nombre de Jonas Gross.',ok:true}]}]},
 {t:'gap',q:'Quería una habitación ___ (Doppel-) con ___ (Dusche).',a:['doble','ducha']},
 {t:'tr',de:'Ich hätte gern ein ruhiges Einzelzimmer.',a:['Quería una habitación individual tranquila.','Quería una habitación individual y tranquila.']},
 {t:'tr',de:'vom 5. bis 8. Juni',a:['del cinco al ocho de junio','del 5 al 8 de junio']},
 {t:'listen',es:'¿Está incluido el desayuno en el precio?',de:'Ist das Frühstück im Preis inbegriffen?'}
]},
{id:'l3',title:'Das Perfekt',desc:'He estado · Hemos tenido muchos problemas',steps:[
 {t:'info',title:'Perfekt = haber + Partizip',html:`<table><tr><th>haber</th><th>Partizip (unveränderlich)</th></tr>
 <tr><td class="es-t">he · has · ha · hemos · habéis · han</td><td class="es-t">-ar → -ado (estado)<br>-er / -ir → -ido (podido, elegido)</td></tr></table>
 <div class="ex"><span class="es-t">Esta semana he trabajado mucho.</span> · <span class="es-t">¿Has estado alguna vez en México?</span> · <span class="es-t">Todavía no he recibido respuesta.</span></div>
 <p><b>Wann?</b> Für Handlungen in einem <b>noch nicht abgeschlossenen Zeitraum</b> (<span class="es-t">hoy, esta semana, este año</span>) oder wenn der Zeitpunkt egal ist (<span class="es-t">alguna vez, ya, todavía no, nunca, últimamente</span>).</p>
 <div class="ojo">haber und Partizip stehen immer zusammen – nichts dazwischen: <span class="es-t">No lo he visto</span> (nicht „he no lo visto“).</div>`},
 {t:'conj',verb:'haber',de:'(Hilfsverb)',forms:['he','has','ha','hemos','habéis','han']},
 {t:'gap',q:'Hoy ___ ___ (yo, trabajar) ocho horas.',a:['he','trabajado']},
 {t:'gap',q:'¿___ ___ (tú, comer) ya?',a:['Has','comido']},
 {t:'gap',q:'Esta semana ___ ___ (nosotros, tener) muchas reuniones.',a:['hemos','tenido']},
 {t:'info',title:'Unregelmäßige Partizipien',html:`<table><tr><td class="es-t">decir → dicho</td><td class="es-t">hacer → hecho</td><td class="es-t">ir → ido</td></tr><tr><td class="es-t">abrir → abierto</td><td class="es-t">escribir → escrito</td><td class="es-t">poner → puesto</td></tr><tr><td class="es-t">ver → visto</td><td class="es-t">volver → vuelto</td><td class="es-t">romper → roto</td></tr></table>`},
 {t:'match',q:'Infinitiv und Partizip',pairs:[['hacer','hecho'],['ver','visto'],['escribir','escrito'],['volver','vuelto'],['decir','dicho'],['poner','puesto']]},
 {t:'gap',q:'¿Qué ___ ___ (tú, hacer) este fin de semana?',a:['has','hecho']},
 {t:'gap',q:'Todavía no ___ ___ (yo, ver) la Sagrada Família.',a:['he','visto']},
 {t:'mc',q:'Welcher Satz ist richtig?',opts:['Nunca he estado en Sevilla.','He nunca estado en Sevilla.','Nunca estado he en Sevilla.'],a:0},
 {t:'tr',de:'Warst du schon einmal in Madrid?',a:['¿Has estado alguna vez en Madrid?','¿Has estado en Madrid alguna vez?','¿Ya has estado en Madrid?','¿Has estado ya en Madrid?']},
 {t:'tr',de:'Heute habe ich viele E-Mails geschrieben.',a:['Hoy he escrito muchos correos.','Hoy he escrito muchos emails.','Hoy he escrito muchos e-mails.']}
]},
{id:'l4',title:'Ein Problem benennen',desc:'No funciona … · Faltan toallas · ¡Cuánto lo siento!',steps:[
 {t:'vocab',title:'Probleme & Entschuldigungen',items:[['no funciona …','… funktioniert nicht'],['faltan toallas','es fehlen Handtücher'],['la toalla','das Handtuch'],['está sucio / sucia','ist schmutzig'],['hay mucho ruido','es ist sehr laut'],['el técnico','der Techniker'],['enseguida','sofort'],['perdón por las molestias','entschuldigen Sie die Unannehmlichkeiten'],['disculpe','entschuldigen Sie'],['¡Cuánto lo siento!','Das tut mir so leid!'],['la queja','die Beschwerde']]},
 {t:'info',title:'Ein Problem benennen & reagieren',html:`<table><tr><th>Gast</th><th>Hotel</th></tr><tr><td class="es-t">Tenemos un problema con la habitación.</td><td class="es-t">Enseguida le mando al técnico.</td></tr>
 <tr><td class="es-t">Mire, es que no funciona el aire acondicionado.</td><td class="es-t">Perdón por las molestias.</td></tr><tr><td class="es-t">En la habitación faltan toallas.</td><td class="es-t">Disculpe. ¡Cuánto lo siento!</td></tr></table>
 <div class="ojo"><b>faltar</b> funktioniert wie <i>gustar</i>: <span class="es-t">Falta una toalla. Faltan toallas.</span></div>
 <h3>Das neutrale lo</h3><p><b>lo</b> bezieht sich auf einen ganzen Sachverhalt: <span class="es-t">– No funciona la calefacción. – ¡Cuánto lo siento!</span> · <span class="es-t">Si lo desea, puedo ofrecerle otra habitación.</span></p>`},
 {t:'gap',q:'En el baño ___ (fehlen) toallas y no ___ (funktioniert) la ducha.',a:['faltan','funciona']},
 {t:'mc',q:'Der Gast beschwert sich. Wie reagiert die Rezeption höflich?',opts:['Perdón por las molestias. Enseguida lo solucionamos.','¡Qué bien!','No es mi problema.'],a:0},
 {t:'dialog',place:'Recepción del hotel',title:'Die Klimaanlage',scene:'Es ist 32 Grad in Sevilla. Du gehst zur Rezeption.',lines:[
  {n:'Recepción',es:'Buenas noches. ¿Qué desea?',de:'Guten Abend. Was wünschen Sie?'},
  {you:true,opts:[{es:'Mire, tengo un problema: no funciona el aire acondicionado.',ok:true},{es:'Mire, tengo un problema: no funcionan el aire acondicionado.',ok:false,why:'<i>el aire acondicionado</i> ist Singular → <i>funciona</i>.'}]},
  {n:'Recepción',es:'¡Cuánto lo siento! ¿Qué número de habitación tiene?',de:'Das tut mir so leid! Welche Zimmernummer haben Sie?'},
  {you:true,opts:[{es:'La 214. Y también faltan toallas.',ok:true},{es:'La 214. Y también falta toallas.',ok:false,why:'<i>toallas</i> Plural → <i>faltan</i>.'}]},
  {n:'Recepción',es:'Perdón por las molestias. Si lo desea, puedo ofrecerle otra habitación.',de:'Entschuldigen Sie. Wenn Sie möchten, kann ich Ihnen ein anderes Zimmer anbieten.'},
  {you:true,opts:[{es:'Sí, perfecto. Muchas gracias.',ok:true},{es:'Sí, perfecto. De nada.',ok:false,why:'<i>De nada</i> antwortet man auf <i>gracias</i>.'}]}]},
 {t:'tr',de:'Die Heizung funktioniert nicht.',a:['No funciona la calefacción.','La calefacción no funciona.']},
 {t:'tr',de:'Wir hatten viele Probleme. (Perfekt)',a:['Hemos tenido muchos problemas.']}
]},
{id:'l5',title:'Lesen: Mi fin de semana en Sevilla',desc:'Erfahrungen im Perfekt',steps:[
 {t:'read',title:'Mi fin de semana en Sevilla',text:`¡Hola a todos! Este fin de semana he estado en Sevilla con mi amiga Laia. Hemos ido en {AVE|spanischer Schnellzug} desde Barcelona: ¡solo cinco horas y media!

El sábado por la mañana hemos visitado la catedral y hemos subido a la Giralda. Las {vistas|Aussicht} son increíbles. Después hemos comido tapas en el barrio de Triana. ¡Me encanta el {salmorejo|kalte Tomatencreme aus Córdoba}!

El hotel ha estado bien, pero hemos tenido un problema: el primer día no ha funcionado el aire acondicionado y en Sevilla hace mucho calor, ¡38 grados en octubre! El personal ha sido muy amable y nos ha dado otra habitación.

Todavía no he visto el Alcázar. Por eso quiero volver pronto. ¿Habéis estado alguna vez en Andalucía?`,
 de:`Hallo zusammen! Dieses Wochenende war ich mit meiner Freundin Laia in Sevilla. Wir sind mit dem AVE von Barcelona gefahren: nur fünfeinhalb Stunden!\n\nAm Samstagmorgen haben wir die Kathedrale besichtigt und sind auf die Giralda gestiegen. Die Aussicht ist unglaublich. Danach haben wir im Viertel Triana Tapas gegessen. Ich liebe Salmorejo!\n\nDas Hotel war gut, aber wir hatten ein Problem: Am ersten Tag hat die Klimaanlage nicht funktioniert, und in Sevilla ist es sehr heiß – 38 Grad im Oktober! Das Personal war sehr nett und hat uns ein anderes Zimmer gegeben.\n\nDen Alcázar habe ich noch nicht gesehen. Deshalb will ich bald wiederkommen. Wart ihr schon einmal in Andalusien?`},
 {t:'mc',q:'¿Cómo han viajado a Sevilla?',opts:['En tren','En avión','En coche'],a:0},
 {t:'mc',q:'¿Qué problema han tenido en el hotel?',opts:['No ha funcionado el aire acondicionado.','Han faltado toallas.','La habitación ha sido muy ruidosa.'],a:0},
 {t:'mc',q:'¿Por qué quiere volver?',opts:['Porque todavía no ha visto el Alcázar.','Porque el hotel ha sido muy barato.','Porque no le gusta Barcelona.'],a:0},
 {t:'order',es:'Este fin de semana hemos visitado la catedral.',de:'Dieses Wochenende haben wir die Kathedrale besichtigt.'},
 {t:'free',task:'Erzähl im Perfekt in 5–7 Sätzen, was du diese Woche gemacht hast (Uni, Freizeit, Barcelona) – und was du noch nicht gemacht hast.',hint:'Esta semana he … · El martes he ido … · He conocido a … · Todavía no he … · Me ha encantado …',focus:'Perfekt (haber + Partizip), unregelmäßige Partizipien, encantar/gustar',model:'Esta semana ha sido muy intensa. He tenido muchas clases en la universidad y he escrito un informe para la asignatura de redes. El miércoles he ido al gimnasio con un compañero. El sábado hemos visitado el Park Güell y me ha encantado. Todavía no he visto el Camp Nou, pero quiero ir pronto.'}
]}],
resumen:`<h3>Vorlieben</h3><table><tr><td class="es-t">(A mí) me encanta / gusta / interesa / molesta + Sg.</td><td class="es-t">… encantan / gustan + Pl.</td></tr><tr><td colspan="2" class="es-t">A él le gustan los bares, pero a mí me molesta el ruido.</td></tr></table>
<h3>Zustimmung (gustar-Verben)</h3><table><tr><td class="es-t">Me gusta nadar.</td><td class="es-t">A mí también. / A mí no.</td></tr><tr><td class="es-t">No me gusta la playa.</td><td class="es-t">A mí tampoco. / A mí sí.</td></tr></table>
<h3>Verben mit -g-</h3><p class="es-t">hago · pongo · salgo · tengo · vengo · digo — jugar: juego, juegas, juega, jugamos, jugáis, juegan</p>
<h3>Hotel</h3><p class="es-t">Quería reservar una habitación doble. · ¿Para qué fechas? – Del 20 al 23 de mayo. · ¿Está incluido el desayuno?</p>
<h3>Probleme</h3><p class="es-t">No funciona la calefacción. · Faltan toallas. — Perdón por las molestias. · ¡Cuánto lo siento! · Enseguida le mando al técnico.</p>
<h3>Perfekt</h3><table><tr><td>he, has, ha, hemos, habéis, han + -ado / -ido</td></tr><tr><td>hoy, esta semana, ya, todavía no, alguna vez, nunca, últimamente</td></tr><tr><td class="es-t">dicho · hecho · ido · abierto · escrito · puesto · visto · vuelto</td></tr></table>`});

/* ================= UNIDAD 7 · ENTORNO LABORAL ================= */
COURSE.units.push({id:'u7',n:'7',title:'Entorno laboral',sub:'Arbeitsbedingungen · Fähigkeiten · Vergleiche · Tagesablauf · etwas zeitlich einordnen · einen Vorgang beschreiben · sich rechtfertigen',
goals:['Arbeitsbedingungen','saber vs. poder','Vergleiche (más/menos … que, tan … como)','mejor, peor, mayor, menor','reflexive Verben','antes de / después de + Infinitiv','estar + Gerundium','Relativsätze mit que','Lo siento, es que …'],
situacion:{title:'Bewerbungsgespräch für ein Praktikum',npc:'Marta',scene:'Online-Gespräch mit Marta von einer Cybersecurity-Firma in Barcelona (22@-Viertel). Sie suchen eine/n Praktikant/in für IT-Audit.',role:'Du bist Marta, Teamleiterin bei einer Firma in Barcelona. Du duzt Jonas. Frag ihn nach seinen Fähigkeiten (¿Sabes …? Sprachen, Programme, Tools), seinem typischen Arbeits- oder Unitag, was ihm an einem Job wichtig ist (horarios flexibles, teletrabajo, salario) und vergleiche (¿Qué prefieres: trabajar en equipo o solo?). Benutze Gegenwart und Perfekt, keine komplizierten Zeiten.',goal:'Sag, was du kannst (sé / no sé …), beschreibe deinen typischen Arbeitstag (reflexive Verben, antes de / después de) und vergleiche zwei Arbeitsweisen.'},
lessons:[
{id:'l1',title:'Arbeit & Fähigkeiten',desc:'Es un trabajo creativo · ¿Sabes francés?',steps:[
 {t:'vocab',title:'Arbeitsbedingungen',items:[['el sueldo / el salario','das Gehalt'],['alto / bajo','hoch / niedrig'],['el horario flexible','die flexible Arbeitszeit'],['el teletrabajo','das Homeoffice'],['la jornada','die Arbeitszeit, der Arbeitstag'],['creativo / creativa','kreativ'],['estresante','stressig'],['el ambiente de trabajo','das Arbeitsklima'],['el compañero / la compañera','Kollege / Kollegin'],['la empresa','das Unternehmen'],['las vacaciones','der Urlaub'],['la reunión','die Besprechung']]},
 {t:'info',title:'saber oder poder?',html:`<table><tr><th>saber = Fähigkeit, Wissen</th><th>poder = Möglichkeit</th><th>poder = Erlaubnis</th></tr>
 <tr><td class="es-t">¿Sabes chino?<br>No sé usar este programa.</td><td class="es-t">Puedo ir a pie al trabajo.<br>¿Puedes llevar los documentos?</td><td class="es-t">¿Puedo abrir la ventana?<br>¿Se puede usar el móvil aquí?</td></tr></table>
 <p>saber: <span class="es-t">sé · sabes · sabe · sabemos · sabéis · saben</span></p>
 <div class="ojo">Gelernte Fähigkeiten (schwimmen, Auto fahren, programmieren, Sprachen) → <b>saber</b>: <span class="es-t">Sé nadar.</span></div>`},
 {t:'mc',q:'„Kannst du Python programmieren?“ (gelernt)',opts:['¿Sabes programar en Python?','¿Puedes programar en Python?','¿Conoces programar en Python?'],a:0},
 {t:'mc',q:'„Kann ich das Fenster aufmachen?“ (Erlaubnis)',opts:['¿Puedo abrir la ventana?','¿Sé abrir la ventana?','¿Sabo abrir la ventana?'],a:0},
 {t:'mc',q:'„Heute kann ich nicht, ich habe eine Besprechung.“',opts:['Hoy no puedo, tengo una reunión.','Hoy no sé, tengo una reunión.','Hoy no podo, tengo una reunión.'],a:0},
 {t:'gap',q:'No ___ (yo, saber) hablar francés, pero lo entiendo.',a:['sé']},
 {t:'tr',de:'Mein Job ist kreativ und ich habe flexible Arbeitszeiten.',a:['Mi trabajo es creativo y tengo un horario flexible.','Mi trabajo es creativo y mis horarios son flexibles.','Mi trabajo es creativo y tengo horarios flexibles.']},
 {t:'tr',de:'Weißt du, wie man dieses Programm benutzt?',a:['¿Sabes usar este programa?']}
]},
{id:'l2',title:'Vergleiche',desc:'más … que · tan … como · el más …',steps:[
 {t:'info',title:'Vergleichen',html:`<table><tr><td>+</td><td class="es-t">Lucas es más joven que Carlos.</td></tr><tr><td>–</td><td class="es-t">Valentina gana menos que Lucas.</td></tr>
 <tr><td>= (Adjektiv)</td><td class="es-t">Lucas es tan joven como Valentina.</td></tr><tr><td>= (Verb)</td><td class="es-t">Lucas trabaja tanto como Carlos.</td></tr>
 <tr><td>= (Substantiv)</td><td class="es-t">Lucas trabaja tantas horas como Carlos.</td></tr><tr><td>++</td><td class="es-t">Jan es el más deportista de la clase.</td></tr></table>
 <h3>Unregelmäßig</h3><table><tr><td class="es-t">bueno → mejor</td><td>besser</td></tr><tr><td class="es-t">malo → peor</td><td>schlechter</td></tr><tr><td class="es-t">grande → mayor / más grande</td><td>älter / größer</td></tr><tr><td class="es-t">pequeño → menor / más pequeño</td><td>jünger / kleiner</td></tr></table>
 <div class="ojo">Bei Zahlen: <b>más de / menos de</b>: <span class="es-t">Gano más de 2000 €.</span> · <b>tanto</b> passt sich an: tanto trabajo, tanta gente, tantos días, tantas horas.</div>`},
 {t:'gap',q:'El metro es ___ rápido ___ el autobús. (schneller als)',a:['más','que']},
 {t:'gap',q:'Mi hermano es ___ alto ___ yo. (genauso groß wie)',a:['tan','como']},
 {t:'gap',q:'No tengo ___ vacaciones ___ tú. (so viel Urlaub wie)',a:['tantas','como'],why:'<i>las vacaciones</i> ist weiblich Plural → <i>tantas</i>.'},
 {t:'mc',q:'Este restaurante es ___ que el otro. (besser)',opts:['mejor','más bueno','más mejor'],a:0},
 {t:'mc',q:'En esta empresa trabajan ___ 500 personas.',opts:['más de','más que','tanto como'],a:0},
 {t:'gap',q:'Ana es la ___ trabajadora del equipo. (die fleißigste)',a:['más']},
 {t:'tr',de:'Barcelona ist größer als Mannheim.',a:['Barcelona es más grande que Mannheim.','Barcelona es mayor que Mannheim.']},
 {t:'tr',de:'Ich arbeite weniger als mein Chef.',a:['Trabajo menos que mi jefe.','Yo trabajo menos que mi jefe.']}
]},
{id:'l3',title:'Der Tagesablauf',desc:'Me levanto a las seis · Antes de desayunar …',steps:[
 {t:'info',title:'Reflexive Verben',html:`<table><tr><th></th><th>levantarse (aufstehen)</th></tr><tr><td>yo</td><td class="es-t">me levanto</td></tr><tr><td>tú</td><td class="es-t">te levantas</td></tr><tr><td>él / ella / usted</td><td class="es-t">se levanta</td></tr><tr><td>nosotros/-as</td><td class="es-t">nos levantamos</td></tr><tr><td>vosotros/-as</td><td class="es-t">os levantáis</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">se levantan</td></tr></table>
 <p>Das Pronomen steht <b>vor</b> dem konjugierten Verb: <span class="es-t">No me levanto tarde.</span> Beim Infinitiv kann es angehängt werden: <span class="es-t">Me quiero duchar = Quiero ducharme.</span></p>
 <p>Weitere: <span class="es-t">ducharse, acostarse (o→ue: me acuesto), vestirse (e→i: me visto), reunirse (me reúno), despertarse (e→ie: me despierto)</span>.</p>`},
 {t:'vocab',title:'Tagesablauf',items:[['levantarse','aufstehen'],['despertarse','aufwachen'],['ducharse','duschen'],['vestirse','sich anziehen'],['acostarse','ins Bett gehen'],['reunirse','sich treffen (Besprechung)'],['normalmente','normalerweise'],['primero / después','zuerst / danach'],['antes de + Inf.','bevor …'],['después de + Inf.','nachdem …']]},
 {t:'conj',verb:'levantarse',de:'aufstehen',forms:['me levanto','te levantas','se levanta','nos levantamos','os levantáis','se levantan']},
 {t:'gap',q:'Normalmente ___ ___ (yo, levantarse) a las siete.',a:['me','levanto']},
 {t:'gap',q:'Mis compañeros ___ ___ (reunirse) los lunes a las nueve.',a:['se','reúnen']},
 {t:'gap',q:'¿A qué hora ___ ___ (tú, acostarse)?',a:['te','acuestas'],why:'acostarse: o→ue → <i>te acuestas</i>.'},
 {t:'info',title:'antes de / después de + Infinitiv',html:`<table><tr><td class="es-t">Me ducho antes de desayunar.</td><td>Ich dusche, bevor ich frühstücke.</td></tr><tr><td class="es-t">Después del trabajo ceno con la familia.</td><td>+ Substantiv</td></tr><tr><td class="es-t">Después de estudiar voy al gimnasio.</td><td>+ Infinitiv</td></tr></table>
 <div class="ojo">Im Deutschen ein Nebensatz – im Spanischen einfach <b>Präposition + Infinitiv</b>.</div>`},
 {t:'tr',de:'Bevor ich arbeite, trinke ich einen Kaffee.',a:['Antes de trabajar tomo un café.','Antes de trabajar bebo un café.','Tomo un café antes de trabajar.','Bebo un café antes de trabajar.']},
 {t:'tr',de:'Nach dem Unterricht gehe ich ins Fitnessstudio.',a:['Después de clase voy al gimnasio.','Después de la clase voy al gimnasio.','Después de las clases voy al gimnasio.','Voy al gimnasio después de clase.']},
 {t:'listen',es:'Me levanto a las seis y media y me ducho antes de desayunar.',de:'Ich stehe um halb sieben auf und dusche vor dem Frühstück.'}
]},
{id:'l4',title:'Was machst du gerade?',desc:'Estoy escribiendo un informe · la chica que está hablando',steps:[
 {t:'info',title:'estar + Gerundium',html:`<p>Für Handlungen, die <b>gerade jetzt</b> passieren:</p>
 <table><tr><td>-ar → <b>-ando</b></td><td class="es-t">buscar → Estoy buscando los precios.</td></tr><tr><td>-er / -ir → <b>-iendo</b></td><td class="es-t">hacer → ¿Qué estás haciendo? · escribir → escribiendo</td></tr></table>
 <table><tr><td class="es-t">leer → leyendo</td><td class="es-t">ir → yendo</td><td class="es-t">decir → diciendo</td></tr><tr><td class="es-t">pedir → pidiendo</td><td class="es-t">venir → viniendo</td><td class="es-t">dormir → durmiendo</td></tr></table>
 <div class="ojo">Pronomen: <span class="es-t">Me estoy duchando = Estoy duchándome</span> (dann mit Akzent!).</div>`},
 {t:'gap',q:'– ¿Qué estás ___ (hacer)? – Estoy ___ (preparar) una presentación.',a:['haciendo','preparando']},
 {t:'gap',q:'Marc está ___ (leer) el periódico.',a:['leyendo']},
 {t:'gap',q:'Ahora mismo ___ ___ (nosotros, comer).',a:['estamos','comiendo']},
 {t:'mc',q:'„Sie telefoniert gerade.“',opts:['Está hablando por teléfono.','Es hablando por teléfono.','Está hablado por teléfono.'],a:0},
 {t:'info',title:'Relativsätze mit que & sich rechtfertigen',html:`<p><b>que</b> (der, die, das) ist unveränderlich – für Personen und Sachen:</p>
 <table><tr><td class="es-t">Ana es la chica morena que está pagando.</td></tr><tr><td class="es-t">Es la traducción que me has pedido.</td></tr></table>
 <h3>Sich rechtfertigen / absagen</h3><table><tr><td class="es-t">Lo siento (mucho), es que …</td><td>Es tut mir (sehr) leid, aber …</td></tr><tr><td class="es-t">Perdón, pero ahora no puedo.</td><td>Entschuldigung, aber jetzt kann ich nicht.</td></tr><tr><td class="es-t">Gracias, pero (es que) …</td><td>Danke, aber …</td></tr></table>`},
 {t:'gap',q:'El señor ___ está a la derecha es mi jefe.',a:['que']},
 {t:'dialog',place:'Oficina',title:'Hast du kurz Zeit?',scene:'Eine Kollegin kommt an deinen Schreibtisch.',lines:[
  {n:'Núria',es:'Jonas, ¿tienes un momento? ¿Qué estás haciendo?',de:'Jonas, hast du kurz Zeit? Was machst du gerade?'},
  {you:true,opts:[{es:'Estoy terminando un informe para un cliente.',ok:true},{es:'Soy terminando un informe para un cliente.',ok:false,why:'Verlaufsform: <b>estar</b> + Gerundium.'},{es:'Estoy terminado un informe para un cliente.',ok:false,why:'Gerundium: <i>terminando</i> (nicht Partizip <i>terminado</i>).'}]},
  {n:'Núria',es:'¿Puedes venir a la reunión de las once?',de:'Kannst du zur Besprechung um elf kommen?'},
  {you:true,prompt:'Sag höflich ab und begründe.',opts:[{es:'Lo siento, es que tengo que enviar el informe antes de las doce.',ok:true},{es:'No sé, es que tengo que enviar el informe.',ok:false,why:'Es geht um Möglichkeit, nicht Wissen. Höflich absagen: <i>Lo siento, es que …</i>'}]},
  {n:'Núria',es:'Vale, no pasa nada. Después te cuento.',de:'Okay, kein Problem. Ich erzähl dir später davon.'}]},
 {t:'tr',de:'Was machst du gerade?',a:['¿Qué estás haciendo?','¿Qué haces ahora?']}
]},
{id:'l5',title:'Lesen: Teletrabajo en Barcelona',desc:'Text · eigener Tagesablauf',steps:[
 {t:'read',title:'Un día de teletrabajo',text:`Sergi tiene 31 años y es programador en una {start-up|Start-up} del distrito 22@ de Barcelona. Trabaja tres días en casa y dos en la oficina.

«Los días de teletrabajo me levanto más tarde que los días de oficina, a las ocho. Antes de empezar a trabajar, salgo a correr por la playa. Me ducho, desayuno y a las nueve y media me conecto. Por la mañana normalmente estoy programando y a las once me reúno con mi equipo por videollamada.

Para mí, el teletrabajo es mejor que trabajar en la oficina: no pierdo tiempo en el metro y mis horarios son más {flexibles|flexibel}. Pero también tiene {desventajas|Nachteile}: a veces me siento solo y trabajo más horas que en la oficina. Por eso los martes y los jueves voy a la oficina: allí veo a mis compañeros y comemos juntos.»`,
 de:`Sergi ist 31 Jahre alt und Programmierer bei einem Start-up im Viertel 22@ in Barcelona. Er arbeitet drei Tage zu Hause und zwei im Büro.\n\n„An Homeoffice-Tagen stehe ich später auf als an Bürotagen, um acht. Bevor ich anfange zu arbeiten, gehe ich am Strand joggen. Ich dusche, frühstücke und um halb zehn logge ich mich ein. Vormittags programmiere ich normalerweise und um elf treffe ich mich per Videocall mit meinem Team.\n\nFür mich ist Homeoffice besser als im Büro zu arbeiten: Ich verliere keine Zeit in der Metro und meine Arbeitszeiten sind flexibler. Aber es hat auch Nachteile: Manchmal fühle ich mich allein und arbeite mehr Stunden als im Büro. Deshalb gehe ich dienstags und donnerstags ins Büro: Dort sehe ich meine Kollegen und wir essen zusammen.“`},
 {t:'mc',q:'¿Qué hace Sergi antes de empezar a trabajar?',opts:['Sale a correr.','Va a la oficina.','Se reúne con su equipo.'],a:0},
 {t:'mc',q:'¿Qué desventaja tiene el teletrabajo para Sergi?',opts:['A veces se siente solo.','Pierde mucho tiempo en el metro.','Sus horarios no son flexibles.'],a:0},
 {t:'mc',q:'¿Cuántos días va Sergi a la oficina?',opts:['dos','tres','cinco'],a:0},
 {t:'free',task:'Beschreibe deinen typischen Tag an der Uni (oder einen Arbeitstag) in 6–8 Sätzen. Vergleiche am Ende: Was ist besser – Uni oder Arbeit?',hint:'Me levanto a las … · Antes de … · Después de … · Por la tarde … · Me acuesto … · La universidad es más … que …',focus:'reflexive Verben, antes de/después de + Infinitiv, Vergleiche, saber/poder',model:'Normalmente me levanto a las siete y media. Me ducho y desayuno en casa antes de ir a la universidad. Voy en metro y llego a la facultad a las nueve. Por la mañana tengo clases y a las dos como con mis compañeros. Después de comer estudio en la biblioteca. Por la noche ceno tarde y me acuesto a las doce. La vida de estudiante es más flexible que el trabajo en una oficina, pero también es más estresante antes de los exámenes.'}
]}],
resumen:`<h3>Arbeitsbedingungen</h3><p class="es-t">Es un trabajo creativo. · Mis horarios son flexibles. · Tengo un salario alto / bajo.</p>
<h3>saber / poder</h3><table><tr><td><b>saber</b>: Fähigkeit, Wissen</td><td class="es-t">¿Sabes chino? · No sé usar este programa.</td></tr><tr><td><b>poder</b>: Möglichkeit / Erlaubnis</td><td class="es-t">Puedo ir a pie. · ¿Puedo abrir la ventana?</td></tr></table>
<h3>Vergleich</h3><table><tr><td class="es-t">más / menos … que · tan … como · tanto/-a/-os/-as … como · el más …</td></tr><tr><td class="es-t">mejor · peor · mayor · menor · más / menos de + Zahl</td></tr></table>
<h3>Reflexive Verben</h3><p class="es-t">me levanto · te levantas · se levanta · nos levantamos · os levantáis · se levantan — Quiero ducharme = Me quiero duchar.</p>
<h3>Zeitlich einordnen</h3><p class="es-t">antes de / después de + Infinitiv: Me ducho antes de desayunar.</p>
<h3>estar + Gerundium</h3><p class="es-t">-ando / -iendo: Estoy escribiendo un informe. · leyendo · yendo · diciendo · pidiendo · durmiendo</p>
<h3>Relativsatz & Rechtfertigen</h3><p class="es-t">La mujer que está hablando es mi compañera. · Lo siento, es que … · Perdón, pero ahora no puedo.</p>`});

/* ================= UNIDAD 8 · MI AGENDA ================= */
COURSE.units.push({id:'u8',n:'8',title:'Mi agenda',sub:'Einen Termin vereinbaren · über Pläne sprechen · Kleidung & Farben · Ratschläge · Wetter · Smalltalk',
goals:['Vorschlagen, annehmen, ablehnen','ir a + Infinitiv','Kleidung, Muster, Material','Farben (Angleichung)','este / ese / aquel','conocer, ofrecer (-zc-)','direktes Objekt mit a (Personen)','Wetter','Ausrufe: ¡Qué …! ¡Cómo …!'],
situacion:{title:'Planes para el fin de semana',npc:'Laia',scene:'Freitagmittag in der Mensa der Uni. Laia, deine Kommilitonin, will am Wochenende etwas mit dir unternehmen.',role:'Du bist Laia, Kommilitonin aus Girona. Du duzt Jonas. Schlag Aktivitäten fürs Wochenende vor (Bunkers del Carmel bei Sonnenuntergang, Montjuïc, Strand, Mercat de Sant Antoni am Sonntag, ein Konzert). Erzähl vom Wetter (am Samstag Sonne, am Sonntag soll es regnen). Lehne einen Termin ab und schlag einen anderen vor, damit Jonas verhandeln muss. Benutze ir a + Infinitiv.',goal:'Vereinbare einen Treffpunkt und eine Uhrzeit fürs Wochenende: Mach selbst einen Vorschlag, lehne einen Vorschlag höflich ab, sprich übers Wetter und darüber, was du anziehst.'},
lessons:[
{id:'l1',title:'Einen Termin vereinbaren',desc:'¿Por qué no quedamos el lunes? · Vale · Es que …',steps:[
 {t:'info',title:'Vorschlagen, annehmen, ablehnen',html:`<table><tr><th>Vorschlagen</th><th>Annehmen</th><th>Ablehnen</th></tr>
 <tr><td class="es-t">¿Tienes ganas de tomar un café?</td><td class="es-t">¡Vale!</td><td class="es-t">Justo el sábado no puedo.</td></tr>
 <tr><td class="es-t">¿Por qué no quedamos el lunes?</td><td class="es-t">De acuerdo.</td><td class="es-t">Lo siento, pero no puedo.</td></tr>
 <tr><td class="es-t">¿Qué te / le parece si nos vemos …?</td><td class="es-t">Muy bien. / Perfecto.</td><td class="es-t">Es que tengo otra reunión.</td></tr>
 <tr><td class="es-t">¿Cuándo / Dónde podemos vernos?</td><td class="es-t">A las 10 es posible.</td><td class="es-t">Gracias, pero es que …</td></tr>
 <tr><td class="es-t">¿Qué tal si quedamos a las 10?</td><td></td><td class="es-t">Mejor el viernes.</td></tr></table>
 <div class="ex"><span class="es-t">quedar</span> = sich verabreden: <span class="es-t">¿Quedamos a las ocho delante del cine?</span></div>`},
 {t:'vocab',title:'Termine',items:[['quedar (con alguien)','sich verabreden (mit jdm.)'],['¿Tienes ganas de …?','Hast du Lust, … zu …?'],['¿Qué te parece si …?','Was hältst du davon, wenn …?'],['¿Qué tal si …?','Wie wäre es, wenn …?'],['vale / de acuerdo','okay / einverstanden'],['es que …','es ist nur so, dass …'],['justo …','ausgerechnet …'],['mejor …','lieber …'],['la cita','der Termin, das Date'],['la agenda','der Terminkalender']]},
 {t:'mc',q:'Du willst eine Freundin auf einen Kaffee einladen:',opts:['¿Tienes ganas de tomar un café?','¿Tienes hambre de tomar un café?','¿Quedas un café?'],a:0},
 {t:'mc',q:'Höflich ablehnen:',opts:['Lo siento, es que tengo otra cita.','Vale, de acuerdo.','No, no quiero.'],a:0},
 {t:'gap',q:'¿Qué te ___ si ___ (nosotros, quedar) a las ocho?',a:['parece','quedamos']},
 {t:'dialog',place:'Teléfono',title:'Einen Termin finden',scene:'Ein Kunde ruft dich an, um einen Termin zu vereinbaren.',lines:[
  {n:'Sr. Torres',es:'Hola, Jonas, soy Luis Torres. ¿Cuándo podemos vernos para hablar del proyecto?',de:'Hallo Jonas, hier ist Luis Torres. Wann können wir uns treffen, um über das Projekt zu sprechen?'},
  {you:true,opts:[{es:'¿Qué le parece el martes a las diez?',ok:true},{es:'¿Qué le parece en el martes en las diez?',ok:false,why:'Wochentag mit <i>el</i>, Uhrzeit mit <i>a las</i>.'}]},
  {n:'Sr. Torres',es:'Justo el martes no puedo, tengo un viaje. ¿El miércoles?',de:'Ausgerechnet Dienstag kann ich nicht, ich bin auf Reisen. Mittwoch?'},
  {you:true,opts:[{es:'El miércoles por la mañana es posible. ¿A las once?',ok:true},{es:'El miércoles por la mañana es posible. ¿En las once?',ok:false,why:'Uhrzeit: <b>a</b> las once.'}]},
  {n:'Sr. Torres',es:'Perfecto. ¿Dónde quedamos?',de:'Perfekt. Wo treffen wir uns?'},
  {you:true,opts:[{es:'En nuestra oficina, si le parece bien.',ok:true},{es:'En nuestra oficina, si te parezco bien.',ok:false,why:'Er siezt dich → <i>si le parece bien</i>.'}]}]},
 {t:'tr',de:'Wie wäre es, wenn wir uns am Freitag treffen?',a:['¿Qué tal si quedamos el viernes?','¿Qué te parece si quedamos el viernes?','¿Por qué no quedamos el viernes?','¿Qué tal si nos vemos el viernes?','¿Qué te parece si nos vemos el viernes?']},
 {t:'tr',de:'Ausgerechnet am Samstag kann ich nicht.',a:['Justo el sábado no puedo.']}
]},
{id:'l2',title:'Pläne: ir a + Infinitiv',desc:'Voy a visitar a un cliente',steps:[
 {t:'info',title:'Das „futuro próximo“',html:`<p>Für Pläne und nahe Zukunft: <b>ir</b> (konjugiert) + <b>a</b> + Infinitiv.</p>
 <table><tr><td class="es-t">voy</td><td rowspan="6" class="es-t">a</td><td rowspan="6" class="es-t">comer con una amiga.<br>quedar con Pablo a las 3.<br>ir al gimnasio el lunes.<br>hacer un viaje mañana.</td></tr><tr><td class="es-t">vas</td></tr><tr><td class="es-t">va</td></tr><tr><td class="es-t">vamos</td></tr><tr><td class="es-t">vais</td></tr><tr><td class="es-t">van</td></tr></table>
 <p>Zeitangaben: <span class="es-t">mañana, pasado mañana, el próximo lunes, la semana que viene, este fin de semana, el 22 de octubre</span>.</p>`},
 {t:'gap',q:'El lunes ___ ___ ver a un cliente.',a:['voy','a']},
 {t:'gap',q:'Carlos ___ ___ estar en Valencia el día 22.',a:['va','a']},
 {t:'gap',q:'¿Qué ___ ___ hacer (vosotros) este fin de semana?',a:['vais','a']},
 {t:'mc',q:'„Morgen werden wir ins Museum gehen.“',opts:['Mañana vamos a ir al museo.','Mañana vamos ir al museo.','Mañana vamos a el museo ir.'],a:0},
 {t:'info',title:'Das direkte Objekt mit a',html:`<p>Ist das direkte Objekt eine <b>Person</b>, steht davor ein <b>a</b>:</p>
 <table><tr><td class="es-t">¿Conoces a la fundadora de la empresa?</td><td>Person → a</td></tr><tr><td class="es-t">Voy a ver a María el martes.</td><td>Person → a</td></tr><tr><td class="es-t">¿Conoces una tienda de segunda mano?</td><td>Sache → kein a</td></tr></table>
 <div class="ojo">Bei <i>tener</i> kein a: <span class="es-t">Tengo un hermano.</span></div>
 <p><b>conocer</b> (kennen) & <b>ofrecer</b> (anbieten): <span class="es-t">conozco, conoces, conoce … · ofrezco, ofreces, ofrece …</span></p>`},
 {t:'mc',q:'¿Conoces ___ mi compañera de piso?',opts:['a','—','en'],a:0,keep:true},
 {t:'mc',q:'No veo ___ las llaves.',opts:['— (nichts)','a','de'],a:0,keep:true,why:'Sachen → kein <i>a</i>.'},
 {t:'gap',q:'Yo no ___ (conocer) Madrid, pero ___ (conocer) bien Barcelona.',a:['conozco','conozco']},
 {t:'tr',de:'Am Samstag werde ich meine Freunde besuchen.',a:['El sábado voy a visitar a mis amigos.','El sábado voy a ver a mis amigos.']},
 {t:'tr',de:'Nächste Woche werde ich viel lernen.',a:['La semana que viene voy a estudiar mucho.','La próxima semana voy a estudiar mucho.']}
]},
{id:'l3',title:'Kleidung & Farben',desc:'una camisa a rayas · este jersey / esa falda',steps:[
 {t:'vocab',title:'Kleidung',items:[['la camiseta','das T-Shirt'],['la camisa','das Hemd'],['la blusa','die Bluse'],['el jersey','der Pullover'],['los pantalones','die Hose'],['los vaqueros','die Jeans'],['la falda','der Rock'],['el vestido','das Kleid'],['el traje','der Anzug'],['la chaqueta','die Jacke'],['el abrigo','der Mantel'],['los zapatos','die Schuhe'],['las botas','die Stiefel'],['a rayas / a cuadros','gestreift / kariert'],['de algodón / de lana / de cuero','aus Baumwolle / Wolle / Leder']]},
 {t:'info',title:'Farben',html:`<table><tr><th>-o/-a (4 Formen)</th><th>eine Form m/f (+s im Plural)</th></tr>
 <tr><td class="es-t">blanco/-a · negro/-a · rojo/-a · amarillo/-a</td><td class="es-t">azul · verde · gris · marrón</td></tr></table>
 <div class="ojo"><span class="es-t">rosa</span> und <span class="es-t">naranja</span> (eigentlich Substantive) bleiben oft unverändert, werden aber auch im Plural verwendet: <span class="es-t">zapatos rosa / rosas</span>.</div>
 <div class="ex"><span class="es-t">una camisa blanca · unos pantalones negros · una chaqueta azul · unas botas marrones</span></div>`},
 {t:'gap',q:'Llevo una camisa ___ (weiß) y unos pantalones ___ (grau).',a:['blanca','grises']},
 {t:'gap',q:'Me gustan esas botas ___ (rot).',a:['rojas']},
 {t:'info',title:'este · ese · aquel',html:`<table><tr><th></th><th>männlich</th><th>weiblich</th><th>Bedeutung</th></tr>
 <tr><td>hier (bei mir)</td><td class="es-t">este / estos</td><td class="es-t">esta / estas</td><td>dieser hier</td></tr>
 <tr><td>da (bei dir)</td><td class="es-t">ese / esos</td><td class="es-t">esa / esas</td><td>der da</td></tr>
 <tr><td>dort (weit weg)</td><td class="es-t">aquel / aquellos</td><td class="es-t">aquella / aquellas</td><td>der dort</td></tr></table>
 <p>Neutral (für Unbekanntes): <span class="es-t">esto, eso, aquello</span> – <span class="es-t">¿Qué es eso?</span></p>`},
 {t:'mc',q:'Du zeigst auf eine Jacke weit hinten im Laden:',opts:['aquella chaqueta','esta chaqueta','aquel chaqueta'],a:0},
 {t:'mc',q:'Du hältst Schuhe in der Hand:',opts:['estos zapatos','esos zapatos','estas zapatos'],a:0},
 {t:'listen',es:'¿Cuánto cuesta esa chaqueta de cuero?',de:'Wie viel kostet die Lederjacke da?'},
 {t:'tr',de:'Diese blaue Hose gefällt mir.',a:['Me gustan estos pantalones azules.']}
]},
{id:'l4',title:'Wetter & Smalltalk',desc:'Hace calor · ¡Qué frío hace! · ¿Verdad?',steps:[
 {t:'info',title:'Über das Wetter sprechen',html:`<table><tr><td class="es-t">Hace calor / frío / sol / viento.</td><td>Es ist heiß / kalt / sonnig / windig.</td></tr>
 <tr><td class="es-t">Hace buen / mal tiempo.</td><td>Das Wetter ist gut / schlecht.</td></tr>
 <tr><td class="es-t">Llueve. / Nieva.</td><td>Es regnet. / Es schneit.</td></tr>
 <tr><td class="es-t">Hay niebla.</td><td>Es ist neblig.</td></tr>
 <tr><td class="es-t">Estamos a 25 grados.</td><td>Wir haben 25 Grad.</td></tr></table>
 <h3>Ausrufe</h3><table><tr><td class="es-t">¡Qué calor hace!</td><td class="es-t">¡Qué camiseta tan original!</td><td class="es-t">¡Qué simpático es!</td></tr><tr><td class="es-t">¡Cómo llueve!</td><td class="es-t">¡Cuánto lo siento!</td><td></td></tr></table>`},
 {t:'vocab',title:'Wetter',items:[['hace calor','es ist heiß'],['hace frío','es ist kalt'],['hace sol','die Sonne scheint'],['hace viento','es ist windig'],['llueve','es regnet'],['nieva','es schneit'],['hay niebla','es ist neblig'],['el tiempo','das Wetter / die Zeit'],['el grado','das Grad'],['¿Verdad?','Nicht wahr?']]},
 {t:'mc',q:'„Es ist kalt.“',opts:['Hace frío.','Es frío.','Está frío.'],a:0},
 {t:'mc',q:'„Es regnet.“',opts:['Llueve.','Hace lluvia.','Es lluvia.'],a:0},
 {t:'gap',q:'¡Qué calor ___! Estamos ___ 35 grados.',a:['hace','a']},
 {t:'info',title:'Smalltalk',html:`<table><tr><td class="es-t">¡Qué agradable es este hotel! ¿Verdad?</td></tr><tr><td class="es-t">¡Qué simpático es el profesor del curso! ¿No?</td></tr><tr><td class="es-t">¿Ha visto el último partido del Barça?</td></tr><tr><td class="es-t">¿Ha leído algún libro interesante últimamente?</td></tr><tr><td class="es-t">¿Qué puedo comprar como recuerdo de aquí?</td></tr></table>
 <div class="ex">Smalltalk-Themen in Spanien: Wetter, Essen, Fußball, Reisen. Lieber nicht: Politik, Geld – und in Barcelona vorsichtig beim Thema Unabhängigkeit.</div>`},
 {t:'dialog',place:'Pausa del café',title:'Smalltalk in der Kaffeepause',scene:'Auf einer Konferenz im CCIB. Du stehst neben einer Teilnehmerin an der Kaffeemaschine.',lines:[
  {n:'Teresa',es:'¡Qué calor hace hoy! ¿Verdad?',de:'Wie heiß es heute ist! Oder?'},
  {you:true,opts:[{es:'Sí, ¡y estamos en octubre! En Alemania ahora hace frío.',ok:true},{es:'Sí, ¡y estamos en octubre! En Alemania ahora es frío.',ok:false,why:'Wetter mit <b>hacer</b>: <i>hace frío</i>.'}]},
  {n:'Teresa',es:'¿Eres alemán? ¿Y qué tal en Barcelona?',de:'Du bist Deutscher? Und wie gefällt’s dir in Barcelona?'},
  {you:true,opts:[{es:'Me encanta. ¡Qué ciudad tan bonita!',ok:true},{es:'Me encanta. ¡Cómo ciudad tan bonita!',ok:false,why:'Ausruf mit Substantiv: <b>¡Qué</b> + Substantiv + tan + Adjektiv!'}]},
  {n:'Teresa',es:'¿Y vas a ir a la cena de esta noche?',de:'Und gehst du heute Abend zum Abendessen?'},
  {you:true,opts:[{es:'Sí, voy a ir con unos compañeros.',ok:true},{es:'Sí, voy ir con unos compañeros.',ok:false,why:'ir <b>a</b> + Infinitiv.'}]},
  {n:'Teresa',es:'¡Genial! Nos vemos allí.',de:'Super! Wir sehen uns dort.'}]},
 {t:'tr',de:'Wie es regnet!',a:['¡Cómo llueve!']},
 {t:'tr',de:'Heute ist das Wetter schlecht.',a:['Hoy hace mal tiempo.']}
]},
{id:'l5',title:'Lesen: La agenda de Laia',desc:'Pläne lesen · eigenes Wochenende planen',steps:[
 {t:'read',title:'Un mensaje de Laia',text:`¡Hola, Jonas! ¿Qué tal la semana? Te escribo porque este fin de semana va a hacer muy buen tiempo: el sábado van a estar a 24 grados y va a hacer sol. ¿Tienes ganas de hacer algo?

Yo el sábado por la mañana voy a ir al mercado de Sant Antoni con mi hermana. Por la tarde estoy libre. ¿Qué te parece si subimos a los {Bunkers del Carmel|Aussichtspunkt in Barcelona} para ver la {puesta de sol|Sonnenuntergang}? Desde allí se ve toda la ciudad. Después podemos cenar en Gràcia, conozco un sitio muy bueno y no muy caro.

El domingo dicen que va a llover, así que mejor no hacemos planes al aire libre. ¡Ah! Lleva una chaqueta: por la noche en los Bunkers hace viento y puede hacer un poco de frío.

¿Quedamos a las seis en la parada de metro de El Carmel? ¡Dime algo! Un beso, Laia`,
 de:`Hallo Jonas! Wie war die Woche? Ich schreibe dir, weil dieses Wochenende sehr gutes Wetter wird: Am Samstag soll es 24 Grad haben und sonnig sein. Hast du Lust, etwas zu unternehmen?\n\nIch gehe am Samstagvormittag mit meiner Schwester auf den Markt von Sant Antoni. Nachmittags habe ich frei. Was hältst du davon, wenn wir zu den Bunkers del Carmel hochgehen, um den Sonnenuntergang zu sehen? Von dort sieht man die ganze Stadt. Danach können wir in Gràcia zu Abend essen, ich kenne ein sehr gutes und nicht sehr teures Lokal.\n\nAm Sonntag soll es regnen, also machen wir lieber keine Pläne draußen. Ah! Nimm eine Jacke mit: Abends ist es an den Bunkers windig und es kann etwas kalt werden.\n\nTreffen wir uns um sechs an der Metrostation El Carmel? Sag mir Bescheid! Kuss, Laia`},
 {t:'mc',q:'¿Qué va a hacer Laia el sábado por la mañana?',opts:['Va a ir al mercado con su hermana.','Va a subir a los Bunkers.','Va a trabajar.'],a:0},
 {t:'mc',q:'¿Qué tiempo va a hacer el domingo?',opts:['Va a llover.','Va a hacer sol.','Va a nevar.'],a:0},
 {t:'mc',q:'¿Por qué Jonas tiene que llevar una chaqueta?',opts:['Porque por la noche hace viento y puede hacer frío.','Porque van a un restaurante elegante.','Porque va a llover el sábado.'],a:0},
 {t:'free',task:'Antworte Laia (5–7 Sätze): Nimm den Vorschlag an oder schlag eine andere Uhrzeit vor, erzähl, was du am Wochenende sonst noch vorhast (ir a + Infinitiv), und was du anziehen wirst.',hint:'¡Hola, Laia! ¡Qué buena idea! · El sábado por la mañana voy a … · ¿Qué tal si quedamos a las …? · Voy a llevar …',focus:'ir a + Infinitiv, Termine vereinbaren, Wetter, Kleidung',model:'¡Hola, Laia! ¡Qué buena idea! El sábado por la mañana voy a estudiar un poco para el examen de redes, pero por la tarde estoy libre. ¿Qué tal si quedamos a las seis y media? Es que antes voy a ir al gimnasio. Voy a llevar unos vaqueros y una chaqueta, porque no me gusta tener frío. Y el domingo, si llueve, ¿por qué no vamos al cine? ¡Hasta el sábado!'}
]}],
resumen:`<h3>Termin vereinbaren</h3><table><tr><th>vorschlagen</th><th>annehmen</th><th>ablehnen</th></tr><tr><td class="es-t">¿Tienes ganas de …? · ¿Por qué no quedamos …? · ¿Qué te parece si …? · ¿Qué tal si …?</td><td class="es-t">Vale. · De acuerdo. · Perfecto. · A las 10 es posible.</td><td class="es-t">Justo el sábado no puedo. · Es que … · Mejor el viernes.</td></tr></table>
<h3>ir a + Infinitiv</h3><p class="es-t">voy / vas / va / vamos / vais / van + a + Infinitiv: El lunes voy a ver a un cliente.</p>
<h3>Kleidung & Farben</h3><p class="es-t">la camiseta, la camisa, el jersey, los pantalones, la falda, la chaqueta, el traje, los zapatos · a rayas, a cuadros · de algodón, de lana, de cuero</p><p>blanco/-a, negro/-a, rojo/-a, amarillo/-a · azul, verde, gris, marrón (+es) · rosa, naranja</p>
<h3>Demonstrativ</h3><p class="es-t">este/esta/estos/estas · ese/esa/esos/esas · aquel/aquella/aquellos/aquellas · esto, eso, aquello</p>
<h3>Direktes Objekt mit a</h3><p class="es-t">¿Conoces a la fundadora? — aber: ¿Conoces una tienda …? · Tengo un hermano.</p>
<h3>Wetter</h3><p class="es-t">Hace calor / frío / sol / viento / buen tiempo / mal tiempo · Llueve · Nieva · Hay niebla · Estamos a 25 grados</p>
<h3>Ausrufe</h3><p class="es-t">¡Qué calor hace! · ¡Qué camiseta tan original! · ¡Cómo llueve! · ¡Cuánto lo siento!</p>`});


