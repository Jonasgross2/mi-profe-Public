/* Übungsblätter aus Jonas' DHBW-Spanischkurs (Semester 3–6), als interaktive Übungen */
(function(){
const U=id=>COURSE.units.find(u=>u.id===id);
const add=(id,lesson)=>U(id).lessons.push(Object.assign({ab:true},lesson));
/* Analoge Uhr als SVG */
function clock(hh,mm){const a=(mm/60)*360,b=((hh%12)+mm/60)/12*360;const hand=(deg,len,w,c)=>{const r=(deg-90)*Math.PI/180;return `<line x1="50" y1="50" x2="${(50+len*Math.cos(r)).toFixed(1)}" y2="${(50+len*Math.sin(r)).toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;};
  let ticks='';for(let i=0;i<12;i++){const r=(i*30-90)*Math.PI/180;ticks+=`<line x1="${(50+40*Math.cos(r)).toFixed(1)}" y1="${(50+40*Math.sin(r)).toFixed(1)}" x2="${(50+45*Math.cos(r)).toFixed(1)}" y2="${(50+45*Math.sin(r)).toFixed(1)}" stroke="currentColor" stroke-width="${i%3?1.5:3}"/>`;}
  return `<svg viewBox="0 0 100 100" width="130" height="130" style="display:block;margin:6px 0;color:var(--ink)"><circle cx="50" cy="50" r="47" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/>${ticks}${hand(b,24,4.5,'currentColor')}${hand(a,36,2.5,'var(--accent)')}<circle cx="50" cy="50" r="3" fill="currentColor"/></svg>`;}

/* ---------- Unidad 2 · Semester 3 ---------- */
add('u2',{id:'ab1',title:'📎 Übungsblatt: ¿Qué hacen ahora?',desc:'Aus deinem Kurs (Semester 3) · Berufe, ser, Verben auf -ar/-er/-ir',steps:[
 {t:'read',title:'Unos amigos del colegio',intro:'Alberto und Raúl schauen sich ein altes Klassenfoto an.',text:`Alberto: ¡Veinticinco años ya! ¿Y qué hacen ahora?
Raúl: Pues, Ana trabaja en un {instituto|Gymnasium}, es profesora de inglés en Granada. José Luis vive aquí, en Barcelona. Es cocinero, pero ahora no tiene trabajo.

Alberto: ¡Qué {lástima|schade}! Y Juan y tú, ¿trabajáis todavía en el Banco de Santander?
Raúl: Yo sí, pero Juan trabaja ahora en el Banco Atlántico. Es jefe del departamento de créditos.

Alberto: ¡Qué bien! Y Carmen, mi ex-novia, ¿qué hace?
Raúl: Carmen vive en Toledo y es {ama de casa|Hausfrau}. Tiene tres hijos que estudian en la universidad.

Alberto: ¡No me digas! Y Pepe también vive en Toledo, ¿verdad?
Raúl: Sí, está {casado|verheiratet} con una colombiana. Los dos son médicos y trabajan en un hospital.`},
 {t:'mc',q:'¿Qué hace Ana?',opts:['Es profesora de inglés.','Es cocinera.','Es médica.'],a:0},
 {t:'mc',q:'¿Dónde trabaja Juan ahora?',opts:['En el Banco Atlántico.','En el Banco de Santander.','En un hospital.'],a:0},
 {t:'mc',q:'¿Dónde vive Carmen?',opts:['En Toledo.','En Granada.','En Barcelona.'],a:0},
 {t:'mc',q:'José Luis …',opts:['es cocinero, pero no tiene trabajo.','es jefe de departamento.','es profesor en Toledo.'],a:0},
 {t:'info',kind:'Übungsblatt',title:'Dos turistas en Iguazú',html:`<p>Julia und Paul aus Köln sind im Urlaub in Argentinien und treffen einen Herrn aus Buenos Aires:</p>
 <div class="ex"><span class="es-t">Señor: Perdón, ustedes no son argentinos, ¿verdad?</span><br><span class="es-t">Julia: No, no. Somos alemanes.</span><br><span class="es-t">Señor: ¿Aprenden español en Alemania?</span><br><span class="es-t">Julia: Sí, en la Universidad Popular.</span><br><span class="es-t">Paul: Yo trabajo en una empresa que vende tractores y ella escribe para un periódico.</span><br><span class="es-t">Señor: Yo vivo en Buenos Aires. Trabajo en una agencia de viajes.</span></div>`},
 {t:'gap',q:'Julia y Paul ___ (vivir) en Alemania y ___ (aprender) español en la Universidad Popular.',a:['viven','aprenden']},
 {t:'gap',q:'Ahora ___ (pasar, ellos) las vacaciones en Argentina.',a:['pasan']},
 {t:'gap',q:'El señor ___ (vivir) en Buenos Aires y ___ (trabajar) en una agencia de viajes.',a:['vive','trabaja']},
 {t:'info',kind:'Übungsblatt',title:'Señor, señora – mit oder ohne Artikel?',html:`<p>Wenn man <b>über</b> jemanden spricht, steht ein Artikel: <span class="es-t">El señor Garrido es cantante.</span></p><p>Wenn man jemanden <b>direkt anspricht</b>, steht <b>kein</b> Artikel: <span class="es-t">Un momento, señora Domínguez.</span></p>`},
 {t:'mc',q:'___ señor Garrido es cantante.',opts:['El','— (kein Artikel)'],a:0,keep:true},
 {t:'mc',q:'Un momento, ___ señora Domínguez.',opts:['— (kein Artikel)','la'],a:0,keep:true,why:'Direkte Anrede → ohne Artikel.'},
 {t:'mc',q:'¿De dónde es ___ señorita Julia?',opts:['la','— (kein Artikel)'],a:0,keep:true},
 {t:'mc',q:'Perdón, señora, ¿es usted ___ señora Aguilar?',opts:['la','— (kein Artikel)'],a:0,keep:true,why:'Bei „¿Es usted …?“ mit Namen steht der Artikel.'},
 {t:'gap',task:'„estudiar“, „trabajar“ und „ser“',q:'– ¿Tú trabajas en un banco? – Sí, ___ en el Banco de Santander.',a:['trabajo']},
 {t:'gap',q:'– ¿Vosotros ___ de Salamanca? – Patricia sí, pero yo ___ de Segovia.',a:['sois','soy']},
 {t:'gap',q:'– ¿Ustedes ___ médicas? – No, ___ enfermeras, pero ___ Medicina en la universidad.',a:['son','somos','estudiamos']},
 {t:'gap',q:'Juan y yo ___ (trabajar) en una empresa internacional.',a:['trabajamos']}
]});
add('u2',{id:'ab2',title:'📎 Übungsblatt: Identificación',desc:'Aus deinem Kurs (Semester 3) · Personalausweis lesen, persönliche Fragen',steps:[
 {t:'info',kind:'Übungsblatt',title:'Documento Nacional de Identidad',html:`<table><tr><td>Nombre</td><td class="es-t">Juan</td></tr><tr><td>Apellidos</td><td class="es-t">García Fernández</td></tr><tr><td>Nacionalidad</td><td class="es-t">español</td></tr><tr><td>Fecha de nacimiento</td><td>30-11-1971</td></tr><tr><td>Lugar de nacimiento</td><td class="es-t">Málaga</td></tr><tr><td>Nombre del padre y de la madre</td><td class="es-t">José y Adela</td></tr><tr><td>Dirección</td><td class="es-t">calle Cisneros, n.º 80, 1.º, Málaga</td></tr></table>
 <div class="ex">Spanier haben <b>zwei Nachnamen</b>: den ersten des Vaters (García) und den ersten der Mutter (Fernández).</div>`},
 {t:'mc',q:'¿Cómo se llama?',opts:['Se llama Juan García Fernández.','Se llama José García.','Se llama Adela Fernández.'],a:0},
 {t:'mc',q:'¿De dónde es?',opts:['Es de Málaga.','Es de Madrid.','Es de Granada.'],a:0},
 {t:'mc',q:'¿Cuál es el primer apellido de su madre?',opts:['Fernández','García','Cisneros'],a:0,why:'Der zweite Nachname kommt von der Mutter.'},
 {t:'match',q:'Frage und Antwort-Typ',pairs:[['¿Cómo te llamas?','Me llamo …'],['¿De dónde eres?','Soy de …'],['¿Qué estudias?','Estudio …'],['¿Dónde vives?','Vivo en …'],['¿A qué te dedicas?','Soy profesora.'],['¿Qué haces en tu tiempo libre?','Corro, cocino …']]},
 {t:'tr',de:'Wie ist deine E-Mail-Adresse?',a:['¿Cuál es tu correo electrónico?','¿Cuál es tu dirección de correo electrónico?','¿Cuál es tu correo?','¿Cuál es tu email?']},
 {t:'free',task:'Fülle deinen eigenen Ausweis auf Spanisch aus – in ganzen Sätzen: Name, Nationalität, Geburtsdatum und -ort, Namen der Eltern, Adresse.',hint:'Me llamo … · Soy alemán · Nací el … en … · Mis padres se llaman … · Mi dirección es …',focus:'persönliche Angaben, Zahlen, Datum',model:'Me llamo Jonas Gross. Soy alemán. Nací en Alemania. Mis padres se llaman … y … Ahora vivo en Barcelona. Mi dirección es calle …, número …, Barcelona.'}
]});

/* ---------- Unidad 3 · La familia de Marta ---------- */
add('u3',{id:'ab1',title:'📎 Übungsblatt: La familia de Marta',desc:'Aus deinem Kurs (Semester 3) · Familienbeziehungen',steps:[
 {t:'info',kind:'Übungsblatt',title:'La familia de Marta',html:`<table><tr><th>Abuelos</th><td class="es-t">José (el abuelo) y Amalia (la abuela)</td></tr><tr><th>Padres</th><td class="es-t">Alberto (el padre) y Ana (la madre)</td></tr><tr><th>Tíos</th><td class="es-t">Teresa (la tía, hija de José y Amalia) y Pepe (el tío)</td></tr><tr><th>Hijos</th><td class="es-t">Marta y Roberto (el hermano)</td></tr><tr><th>Primos</th><td class="es-t">Laura (la prima) y Lucas (el primo)</td></tr></table>
 <div class="ex">Neu: <span class="es-t">el sobrino / la sobrina</span> = Neffe / Nichte · <span class="es-t">el marido / la mujer</span> = Ehemann / Ehefrau</div>`},
 {t:'gap',task:'Löse das Kreuzworträtsel aus dem Übungsblatt:',q:'Amalia es la ___ de Marta.',a:['abuela']},
 {t:'gap',q:'Teresa es la ___ de Marta.',a:['tía']},
 {t:'gap',q:'Laura es la ___ de Marta.',a:['prima']},
 {t:'gap',q:'Alberto es el ___ de Ana.',a:['marido']},
 {t:'gap',q:'Marta es la ___ de Teresa y Pepe.',a:['sobrina']},
 {t:'gap',q:'José es el ___ de Marta.',a:['abuelo']},
 {t:'gap',q:'Roberto es el ___ de Alberto y Ana.',a:['hijo']},
 {t:'gap',q:'Ana es la ___ de Marta.',a:['madre']},
 {t:'info',kind:'Übungsblatt',title:'Familienbeziehungen erklären',html:`<p>Neue Wörter: <span class="es-t">el yerno</span> (Schwiegersohn), <span class="es-t">la nuera</span> (Schwiegertochter), <span class="es-t">el suegro / la suegra</span> (Schwiegervater / -mutter), <span class="es-t">el cuñado / la cuñada</span> (Schwager / Schwägerin), <span class="es-t">el nieto</span> (Enkel).</p>`},
 {t:'gap',q:'La mujer de mi padre es mi ___.',a:['madre']},
 {t:'gap',q:'El hijo de mi hermana es mi ___.',a:['sobrino']},
 {t:'gap',q:'La hermana de mi mujer es mi ___.',a:['cuñada']},
 {t:'gap',q:'El hijo de mi hija es mi ___.',a:['nieto']},
 {t:'gap',q:'El padre de mi mujer es mi ___.',a:['suegro']},
 {t:'gap',q:'El marido de mi hija es mi ___.',a:['yerno']},
 {t:'gap',q:'La mujer de mi hijo es mi ___.',a:['nuera']},
 {t:'gap',q:'La hermana de mi padre es mi ___.',a:['tía']}
]});

/* ---------- Unidad 4 · Semester 4 ---------- */
add('u4',{id:'ab1',title:'📎 Übungsblatt: La hora',desc:'Aus deinem Kurs (Semester 4) · Uhren lesen',steps:[
 {t:'info',kind:'Übungsblatt',title:'Vocabulario de la hora',html:`<table><tr><td class="es-t">en punto</td><td>:00</td><td class="es-t">y cinco / y diez</td><td>:05 / :10</td></tr><tr><td class="es-t">y cuarto</td><td>:15</td><td class="es-t">y veinte / y veinticinco</td><td>:20 / :25</td></tr><tr><td class="es-t">y media</td><td>:30</td><td class="es-t">menos veinticinco / menos veinte</td><td>:35 / :40</td></tr><tr><td class="es-t">menos cuarto</td><td>:45</td><td class="es-t">menos diez / menos cinco</td><td>:50 / :55</td></tr></table>`},
 ...[[3,30,'las tres y media'],[1,45,'las dos menos cuarto'],[10,15,'las diez y cuarto'],[1,5,'la una y cinco'],[7,40,'las ocho menos veinte'],[2,10,'las dos y diez'],[5,25,'las cinco y veinticinco'],[9,0,'las nueve en punto|las nueve']].map(([hh,mm,ans])=>({t:'gap',kind:'Wie spät ist es?',task:'',q:clock(hh,mm)+(ans.startsWith('la una')?'Es ___.':'Son ___.'),a:[ans]})),
 {t:'gap',q:'– Perdone, ¿tiene hora? – Sí, son las ___ y cuarto. (3:15)',a:['tres']},
 {t:'gap',q:'– ¿A qué hora abre la biblioteca? – A las ___ en punto. (8:00)',a:['ocho']},
 {t:'gap',q:'– ¿Sabes cuándo cierra la biblioteca? – Creo que a las ___ menos diez. (9:50)',a:['diez']}
]});
add('u4',{id:'ab2',title:'📎 Übungsblatt: ¿Algo más? · ¿Qué comen los españoles?',desc:'Aus deinem Kurs (Semester 4) · Verpackungen, Mengen, Essgewohnheiten, aunque',steps:[
 {t:'vocab',title:'Verpackungen',items:[['la botella','die Flasche'],['la lata','die Dose'],['el paquete','die Packung'],['la bolsa','die Tüte'],['la barra de pan','das Baguette / Stangenbrot'],['las ofertas de la semana','die Wochenangebote'],['¿Algo más?','Sonst noch etwas?']]},
 {t:'match',q:'Welche Verpackung passt?',pairs:[['una lata de','cerveza / sardinas'],['una botella de','aceite / vino'],['un paquete de','café / mantequilla'],['una bolsa de','magdalenas / croquetas'],['una barra de','pan']]},
 {t:'tr',de:'eine Flasche Olivenöl und zwei Packungen Kaffee',a:['una botella de aceite de oliva y dos paquetes de café','una botella de aceite y dos paquetes de café']},
 {t:'read',title:'Los españoles y el almuerzo',intro:'Zusammenfassung des Artikels aus deinem Übungsblatt.',text:`Según un estudio, la mayoría de los trabajadores españoles come el menú del día en un restaurante o en la {cantina|Kantine} de la empresa, porque no tienen tiempo para volver a casa. Cuanto más grande es la ciudad, más gente come fuera.

Los jóvenes entre 18 y 35 años prefieren llevarse la {tartera|Brotdose} al trabajo. Entre 35 y 50 años eligen el restaurante o la cantina.

Lo que comen depende del clima: en el norte prefieren las comidas de {cuchara|Löffelgerichte (Eintöpfe)}, en zonas más templadas como Valencia, las verduras. Para beber, cuatro de cada diez prefieren el agua; de las bebidas alcohólicas, la más pedida es la cerveza.`},
 {t:'mc',q:'¿Qué prefieren los jóvenes?',opts:['Llevarse la comida al trabajo.','Comer en casa.','Comer en un restaurante caro.'],a:0},
 {t:'mc',q:'¿Qué prefieren comer en el norte de España?',opts:['Comidas de cuchara (sopas).','Ensaladas.','Pescado crudo.'],a:0},
 {t:'info',kind:'Übungsblatt',title:'Sätze verbinden mit aunque',html:`<p><b>aunque</b> = obwohl. Damit drückt man einen Gegensatz aus:</p><div class="ex"><span class="es-t">Normalmente como en la cantina, aunque prefiero comer en casa.</span></div>`},
 {t:'tr',de:'Ich esse Fleisch, obwohl ich lieber Fisch esse.',a:['Como carne, aunque prefiero comer pescado.','Como carne aunque prefiero el pescado.','Como carne, aunque prefiero el pescado.','Como carne aunque prefiero comer pescado.']},
 {t:'gap',q:'Yo como carne dos ___ a la semana.',a:['veces']}
]});

/* ---------- Unidad 5 · Explicar el camino ---------- */
add('u5',{id:'ab1',title:'📎 Übungsblatt: Explicar el camino',desc:'Aus deinem Kurs (Semester 5) · hay oder está?',steps:[
 {t:'info',kind:'Übungsblatt',title:'En la facultad',html:`<table><tr><th>Lage (bestimmt) → estar</th><th>Existenz (unbestimmt) → hay</th></tr><tr><td class="es-t">¿Sabe dónde está la biblioteca? – Sí, está …</td><td class="es-t">¿Sabe si hay algún correo aquí cerca? – Sí, hay uno …</td></tr><tr><td class="es-t">¿Sabe si la biblioteca está cerca de aquí?</td><td class="es-t">¿Hay algún café cerca de aquí? – No, no hay ninguno.</td></tr></table>`},
 {t:'mc',q:'Perdón, ¿dónde ___ la oficina de turismo?',opts:['está','hay'],a:0,keep:true},
 {t:'mc',q:'¿___ un centro comercial cerca de aquí?',opts:['Hay','Está'],a:0,keep:true},
 {t:'mc',q:'Por favor, ¿dónde ___ el hospital Santa Ana?',opts:['está','hay'],a:0,keep:true},
 {t:'mc',q:'¿Sabe usted dónde ___ un aparcamiento?',opts:['hay','está'],a:0,keep:true,why:'<i>un</i> aparcamiento = irgendeiner → <b>hay</b>.'},
 {t:'mc',q:'¿___ muchas actividades culturales en el pueblo?',opts:['Hay','Están'],a:0,keep:true},
 {t:'mc',q:'Perdón, ¿dónde ___ la calle Bolívar?',opts:['está','hay'],a:0,keep:true},
 {t:'gap',task:'Präpositionen: a(l), de(l), en, por',q:'Para ir ___ museo, tienes que pasar ___ la plaza.',a:['al','por']},
 {t:'gap',q:'La farmacia está al lado ___ banco.',a:['del']},
 {t:'gap',q:'Vamos ___ metro hasta la parada de Liceu.',a:['en']}
]});

/* ---------- Unidad 6 · gustar & Perfekt ---------- */
add('u6',{id:'ab1',title:'📎 Übungsblatt: A Lola le gusta bailar',desc:'Aus deinem Kurs (Semester 5) · normale Verben vs. gustar',steps:[
 {t:'info',kind:'Übungsblatt',title:'Lola baila flamenco – A Lola le gusta bailar flamenco',html:`<table><tr><th>normales Verb (Subjekt = Person)</th><th>gustar & Co. (Subjekt = Sache)</th></tr>
 <tr><td class="es-t">Yo toco la guitarra.</td><td class="es-t">(A mí) me gusta la guitarra.</td></tr><tr><td class="es-t">Tú practicas muchos deportes.</td><td class="es-t">(A ti) te gustan muchos deportes.</td></tr><tr><td class="es-t">Lola baila flamenco.</td><td class="es-t">(A Lola) le encanta bailar flamenco.</td></tr><tr><td class="es-t">Nosotros jugamos al fútbol.</td><td class="es-t">(A nosotros) nos encanta el fútbol.</td></tr><tr><td class="es-t">Mis compañeros estudian latín.</td><td class="es-t">A mis compañeros les interesa el latín.</td></tr></table>
 <div class="ojo">Nach gustar steht ein Artikel – außer bei Eigennamen: <span class="es-t">Nos encanta Picasso. Me interesa mucho Perú.</span></div>`},
 {t:'gap',q:'A mí me ___ (encantar) el surrealismo.',a:['encanta']},
 {t:'gap',q:'¿A ti te ___ (gustar) ir a exposiciones de arte?',a:['gusta']},
 {t:'gap',q:'A mi compañero no ___ ___ (interesar) el arte clásico.',a:['le','interesa']},
 {t:'gap',q:'A mis padres ___ ___ (encantar) el teatro.',a:['les','encanta']},
 {t:'gap',q:'A mí me ___ (interesar) mucho mis estudios.',a:['interesan']},
 {t:'mc',q:'„Wir lieben Picasso.“',opts:['Nos encanta Picasso.','Nos encanta el Picasso.','Nosotros encantamos Picasso.'],a:0}
]});
add('u6',{id:'ab2',title:'📎 Übungsblatt: ¿Qué has hecho?',desc:'Aus deinem Kurs (Semester 6) · Perfekt, ya / todavía no, Präsens oder Perfekt',steps:[
 {t:'match',q:'Verbinde die Satzteile',pairs:[['Hemos estado en un festival de música folk y …','hemos conocido al cantante.'],['No he podido salir porque …','he tenido que terminar un trabajo.'],['Hemos ido a un museo y …','hemos visto una exposición.'],['Esta semana he visto una película …','que me ha gustado mucho.'],['He estudiado mucho para el examen porque …','es muy difícil.']]},
 {t:'info',kind:'Übungsblatt',title:'Ya o todavía no',html:`<p>Die Familie Martínez ist eine Woche in Madrid. ✔ = schon gemacht, ✗ = noch nicht:</p><p class="es-t">museo Reina Sofía ✔ · parque del Retiro ✔ · la Plaza Mayor ✔ · Noche flamenca ✔ · jamón de bellota ✗ · el Escorial ✗ · el Rastro ✗</p><div class="ex"><span class="es-t">Ya han visitado el museo Reina Sofía.</span> · <span class="es-t">Todavía no han ido al Rastro.</span></div>`},
 {t:'gap',q:'Ya ___ ___ (pasear, ellos) por el parque del Retiro.',a:['han','paseado']},
 {t:'gap',q:'Todavía no ___ ___ (probar, ellos) el jamón de bellota.',a:['han','probado']},
 {t:'gap',q:'Ya ___ ___ (ver, ellos) una noche flamenca.',a:['han','visto']},
 {t:'info',kind:'Übungsblatt',title:'¿Presente o Pretérito Perfecto?',html:`<p><b>Präsens</b> für Gewohnheiten (<span class="es-t">normalmente, generalmente</span>), <b>Perfekt</b> für heute/gerade abgeschlossene Handlungen (<span class="es-t">hoy, ya, este fin de semana</span>).</p>`},
 {t:'gap',q:'– ¿Almuerzas con nosotros? – Lo siento, es que ya ___ ___ (almorzar). Normalmente ___ (almorzar) en la cantina, pero hoy ___ ___ (ir) a casa.',a:['he','almorzado','almuerzo','he','ido']},
 {t:'gap',q:'Este fin de semana unos amigos y yo ___ ___ (estar) en las montañas. Normalmente yo no ___ (hacer) senderismo.',a:['hemos','estado','hago']},
 {t:'gap',q:'¿___ ___ (tú, probar) alguna vez el arroz con leche?',a:['Has','probado']}
]});

/* ---------- Unidad 7 · Semester 5/6 ---------- */
add('u7',{id:'ab1',title:'📎 Übungsblatt: Un día normal (Javier)',desc:'Aus deinem Kurs (Semester 5) · Tagesablauf, unregelmäßige Verben',steps:[
 {t:'read',title:'Estudiantes españoles por el mundo',intro:'Javier Fernández, 24, aus Granada, ist Masterstudent an der UNAM in Mexiko-Stadt.',text:`Mi vida aquí en México D.F. es muy distinta a la de Granada, menos {relajada|entspannt} pero muy linda. Tengo clases por la mañana y, como aquí la {jornada|Arbeits-/Schultag} empieza más pronto, me levanto a las seis, me ducho y me visto rápidamente. Salgo de casa a las seis y media y voy a la uni a pie. Las clases empiezan a las siete y terminan a la una.

Antes de salir de casa tomo solo un café, pero a las nueve desayuno en la cafetería de la universidad. Después de las clases, a eso de la una y media, almuerzo en el comedor universitario o vuelvo a casa y como con mis compañeros de piso.

Por la tarde voy a la biblioteca para estudiar. Allí me quedo hasta las siete. Por la noche hago deporte, salgo con amigos o me quedo en casa y me conecto por Skype. Casi nunca me acuesto antes de las once. Los fines de semana duermo hasta las diez o las once.`},
 {t:'mc',q:'¿A qué hora se levanta Javier?',opts:['A las seis.','A las siete.','A las nueve.'],a:0},
 {t:'mc',q:'¿Dónde desayuna?',opts:['En la cafetería de la universidad.','En casa.','No desayuna.'],a:0},
 {t:'conj',verb:'salir',de:'ausgehen, hinausgehen',forms:['salgo','sales','sale','salimos','salís','salen']},
 {t:'conj',verb:'vestirse',de:'sich anziehen (e→i)',forms:['me visto','te vistes','se viste','nos vestimos','os vestís','se visten']},
 {t:'conj',verb:'almorzar',de:'zu Mittag essen (o→ue)',forms:['almuerzo','almuerzas','almuerza','almorzamos','almorzáis','almuerzan']},
 {t:'conj',verb:'empezar',de:'anfangen (e→ie)',forms:['empiezo','empiezas','empieza','empezamos','empezáis','empiezan']},
 {t:'gap',task:'Javiers Wochenende – ergänze die Verben:',q:'Normalmente me ___ (despertarse) entre las nueve y las diez y me ___ (ducharse). Después, ___ (salir) de casa.',a:['despierto','ducho','salgo']},
 {t:'gap',q:'Ya ___ (conocer) muchos lugares de México. Cuando voy a un restaurante, siempre ___ (pedir) comida típica.',a:['conozco','pido']},
 {t:'gap',q:'Mis amigos y yo ___ (volver) por la noche a casa. Después, ___ (poner) la tele y me ___ (acostarse) sobre las once.',a:['volvemos','pongo','acuesto']},
 {t:'info',kind:'Übungsblatt',title:'La rutina de Sara – was ist unlogisch?',html:`<div class="ex es-t">Me llamo Sara y soy enfermera en el Hospital Clínic de Barcelona. Me levanto a las once y media porque empiezo a trabajar a las cuatro de la tarde. […] A las cuatro menos cuarto salgo de casa. Si el metro va bien, necesito media hora para llegar al hospital. Soy una persona muy puntual y nunca llego tarde al trabajo.</div>`},
 {t:'mc',q:'¿Qué es ilógico en el texto de Sara?',opts:['Sale a las 15:45, necesita 30 minutos y empieza a las 16:00 – llega tarde.','Se levanta a las once y media.','Trabaja en un hospital.'],a:0}
]});
add('u7',{id:'ab2',title:'📎 Übungsblatt: ¿Cuántas veces? · ¿Poder o saber?',desc:'Aus deinem Kurs (Semester 6) · Häufigkeit, poder/saber',steps:[
 {t:'info',kind:'Übungsblatt',title:'Rosas Kalender',html:`<table><tr><th>Lu</th><th>Ma</th><th>Mi</th><th>Ju</th><th>Vi</th><th>Sá</th><th>Do</th></tr><tr><td>clases de chino</td><td>gimnasio</td><td>clases de chino</td><td>Skype / exposición / estudiar</td><td>tapas / cena / copas</td><td>piscina / tenis</td><td>comida con la familia</td></tr></table>
 <p>Häufigkeit: <span class="es-t">siempre / todos los días · casi siempre / a menudo · (todos) los lunes · dos veces por semana · a veces · cada quince días · una vez al mes · casi nunca · nunca</span></p>`},
 {t:'gap',q:'Todos los martes Rosa ___ al gimnasio.',a:['va']},
 {t:'gap',q:'Dos ___ a la semana tiene clases de chino.',a:['veces']},
 {t:'gap',q:'Todos los domingos ___ con la familia.',a:['come']},
 {t:'info',kind:'Übungsblatt',title:'¿No sabes o no puedes?',html:`<div class="ex"><span class="es-t">– Hay que ir a buscar al Sr. Chaw al aeropuerto. – Yo no, no puedo.</span> <span class="muted">(Arm verletzt → keine Möglichkeit)</span><br><span class="es-t">– ¿Y tú? – Yo no sé conducir.</span> <span class="muted">(nie gelernt → Fähigkeit)</span></div>`},
 {t:'mc',q:'¿___ tocar el piano? – Sí, he estudiado en el conservatorio.',opts:['Sabes','Puedes'],a:0,keep:true},
 {t:'mc',q:'¿___ tocar el piano? – No, ahora no, estoy cansada.',opts:['Puedes','Sabes'],a:0,keep:true},
 {t:'mc',q:'¿No ___ conducir? – No, es que he bebido vino.',opts:['puedes','sabes'],a:0,keep:true},
 {t:'mc',q:'¿No ___ conducir? – No, no tengo el carné.',opts:['sabes','puedes'],a:0,keep:true},
 {t:'gap',q:'¿Hoy ___ (tú) ir a buscar a Andrés a la escuela? Es que yo estoy ocupada.',a:['puedes']},
 {t:'gap',q:'Sandra ___ tocar el piano, ha estudiado muchos años en el conservatorio.',a:['sabe']},
 {t:'gap',q:'No ___ (yo) ir a natación hoy porque tengo mucho trabajo.',a:['puedo']},
 {t:'gap',q:'Tomás ___ hacer pan. ¡Y es buenísimo!',a:['sabe']},
 {t:'gap',q:'Noelia ___ bailar muy bien, te ___ dar clases de salsa.',a:['sabe','puede']},
 {t:'gap',q:'No ___ (yo) tocar ningún instrumento, pero me gusta mucho la música.',a:['sé']}
]});
add('u7',{id:'ab3',title:'📎 Übungsblatt: Comparativos',desc:'Aus deinem Kurs (Semester 6) · Vergleiche',steps:[
 {t:'tr',kind:'Sag dasselbe andersherum',de:'Cristina es más alta que yo. → (yo …)',a:['Yo soy más bajo que Cristina.','Soy más bajo que Cristina.','Yo soy más baja que Cristina.','Soy más baja que Cristina.']},
 {t:'tr',kind:'Sag dasselbe andersherum',de:'Yo soy mayor que él. → (él …)',a:['Él es menor que yo.','Él es más joven que yo.']},
 {t:'tr',kind:'Sag dasselbe andersherum',de:'El vino es más caro que la cerveza. → (la cerveza …)',a:['La cerveza es más barata que el vino.']},
 {t:'tr',kind:'Sag dasselbe andersherum',de:'Esta película es peor que la otra. → (la otra …)',a:['La otra es mejor que esta.','La otra película es mejor que esta.','La otra es mejor que esta película.']},
 {t:'gap',task:'tan / tanto / tanta / tantos / tantas … como',q:'Un BMW no es ___ caro ___ un Rolls-Royce.',a:['tan','como']},
 {t:'gap',q:'Mis hijos comen ___ carne ___ yo.',a:['tanta','como']},
 {t:'gap',q:'Yo no tengo ___ libros ___ mi padre.',a:['tantos','como']},
 {t:'gap',q:'Yo no compro ___ cosas ___ tú.',a:['tantas','como']},
 {t:'gap',q:'Yo no puedo correr ___ ___ un atleta.',a:['tanto','como']},
 {t:'gap',task:'como oder que?',q:'Tú comes tanto ___ yo. · Tu habitación es más grande ___ la mía.',a:['como','que']},
 {t:'info',kind:'Übungsblatt',title:'Belén und Antonio',html:`<table><tr><th></th><th>Belén</th><th>Antonio</th></tr><tr><td>Alter</td><td>32</td><td>36</td></tr><tr><td>Größe</td><td>1,60 m</td><td>1,65 m</td></tr><tr><td>Arbeit</td><td>4 h / día</td><td>8–15 h</td></tr><tr><td>Sprachen</td><td>inglés y francés</td><td>inglés</td></tr><tr><td>Geld</td><td>gana poco</td><td>gana bastante</td></tr></table>`},
 {t:'tr',de:'Belén ist jünger als Antonio.',a:['Belén es más joven que Antonio.','Belén es menor que Antonio.']},
 {t:'tr',de:'Antonio arbeitet mehr als Belén.',a:['Antonio trabaja más que Belén.','Antonio trabaja más horas que Belén.']},
 {t:'tr',de:'Belén spricht mehr Sprachen als Antonio.',a:['Belén habla más idiomas que Antonio.','Belén habla más lenguas que Antonio.']}
]});

/* ---------- Unidad 8 · ¿Cuándo quedamos? ---------- */
add('u8',{id:'ab1',title:'📎 Übungsblatt: ¿Cuándo quedamos?',desc:'Aus deinem Kurs (Semester 6) · Vorschläge, quedar / quedarse',steps:[
 {t:'info',kind:'Übungsblatt',title:'quedar oder quedarse?',html:`<table><tr><td class="es-t">quedar (con alguien)</td><td>sich verabreden</td><td class="es-t">¿Quedamos a las ocho?</td></tr><tr><td class="es-t">quedarse</td><td>bleiben</td><td class="es-t">Hoy me quedo en casa.</td></tr></table>`},
 {t:'mc',q:'¿A qué hora ___ mañana? (wir verabreden uns)',opts:['quedamos','nos quedamos'],a:0,keep:true},
 {t:'mc',q:'Estoy cansado, hoy ___ en casa.',opts:['me quedo','quedo'],a:0,keep:true},
 {t:'gap',task:'Präpositionen in Einladungen',q:'¿Quedamos ___ las ocho ___ la puerta del cine?',a:['a','en']},
 {t:'gap',q:'¿Por qué no vamos ___ cine ___ sábado?',a:['al','el']},
 {t:'dialog',place:'Teléfono',title:'Las citas de Maritere',scene:'Deine Freundin Maritere hat eine volle Agenda: Montag Zahnarzt, Mittwoch Englischkurs, Freitag frei. Du rufst sie an.',lines:[
  {you:true,prompt:'Schlag ein Abendessen am Montag vor.',opts:[{es:'¿Tienes ganas de cenar conmigo el lunes?',ok:true},{es:'¿Tienes ganas cenar conmigo el lunes?',ok:false,why:'tener ganas <b>de</b> + Infinitiv.'}]},
  {n:'Maritere',es:'Uy, justo el lunes no puedo, es que tengo dentista.',de:'Oh, ausgerechnet Montag kann ich nicht, ich habe Zahnarzt.'},
  {you:true,opts:[{es:'Vale. ¿Y qué tal el viernes?',ok:true},{es:'Vale. ¿Y qué tal en viernes?',ok:false,why:'Wochentag mit Artikel: <i>el viernes</i>.'}]},
  {n:'Maritere',es:'¡El viernes perfecto! ¿A qué hora quedamos?',de:'Freitag perfekt! Um wie viel Uhr treffen wir uns?'},
  {you:true,opts:[{es:'¿Qué te parece a las nueve en la Plaza del Sol?',ok:true},{es:'¿Qué te parece en las nueve a la Plaza del Sol?',ok:false,why:'Uhrzeit mit <b>a</b>, Ort mit <b>en</b>.'}]},
  {n:'Maritere',es:'De acuerdo. ¡Hasta el viernes!',de:'Einverstanden. Bis Freitag!'}]}
]});
})();
