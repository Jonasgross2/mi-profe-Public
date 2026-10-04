/* ================= A2 · TEIL 2 (eigene Unidades nach dem Plan Curricular des Instituto Cervantes) ================= */

/* ================= UNIDAD 11 · ¿QUÉ TE PASA? ================= */
COURSE.units.push({id:'u11',n:'11',level:'A2b',title:'¿Qué te pasa?',sub:'Körper & Gesundheit · Schmerzen beschreiben (me duele) · beim Arzt & in der Apotheke · Ratschläge geben · Imperativ',
goals:['Körperteile','me duele / me duelen','Symptome: tengo fiebre, estoy resfriado','beim Arzt & in der Apotheke','Ratschläge: deberías / tienes que / es mejor','Imperativ tú & usted (bejahend)'],
situacion:{title:'In der Apotheke in Gràcia',npc:'Farmacéutica',scene:'Du hast seit zwei Tagen Halsschmerzen und leichtes Fieber. Du gehst in eine Apotheke in der Calle Verdi.',role:'Du bist eine freundliche Apothekerin in Barcelona. Du siezt Jonas nicht, du duzt ihn (in Spanien üblich). Frag nach Symptomen (¿Qué te pasa? ¿Desde cuándo? ¿Tienes fiebre? ¿Eres alérgico a algo?), empfiehl etwas (Ibuprofeno, pastillas para la garganta) und gib Ratschläge im Imperativ (Toma una pastilla cada ocho horas, bebe mucha agua, descansa). Wenn es nicht besser wird: Ve al médico.',goal:'Beschreib deine Symptome (me duele…, tengo…, desde hace…), frag, wie oft du das Medikament nehmen sollst und was es kostet.'},
lessons:[
{id:'l1',title:'Der Körper',desc:'la cabeza · la espalda · me duele',steps:[
 {t:'vocab',title:'Körperteile',items:[['la cabeza','der Kopf','🗣️'],['el ojo','das Auge','👁️'],['la oreja','das Ohr','👂'],['la nariz','die Nase','👃'],['la boca','der Mund','👄'],['el diente','der Zahn','🦷'],['la garganta','der Hals (innen)','🗣️'],['el cuello','der Hals / Nacken','🦒'],['la espalda','der Rücken','🧍'],['el brazo','der Arm','💪'],['la mano','die Hand','✋'],['el estómago','der Magen','🫃'],['la pierna','das Bein','🦵'],['el pie','der Fuß','🦶'],['la rodilla','das Knie','🦵']]},
 {t:'info',title:'Me duele … – wie gustar',html:`<p>„Mir tut … weh“ funktioniert genau wie <span class="es-t">me gusta</span>: Das Verb richtet sich nach dem, <b>was</b> weh tut.</p>
 <table><tr><th>Einzahl</th><th>Mehrzahl</th></tr>
 <tr><td class="es-t">Me duele la cabeza.</td><td class="es-t">Me duelen los pies.</td></tr>
 <tr><td class="es-t">¿Te duele la espalda?</td><td class="es-t">¿Te duelen los ojos?</td></tr>
 <tr><td class="es-t">A Ana le duele el estómago.</td><td class="es-t">A mis padres les duelen las rodillas.</td></tr></table>
 <div class="ex">Achtung: Im Spanischen sagt man <b>la</b> cabeza, nicht „mi cabeza“ – dass es dein Kopf ist, zeigt schon das <i>me</i>.</div>`},
 {t:'mc',q:'Me ___ la cabeza.',opts:['duele','duelen','dolor'],a:0,keep:true},
 {t:'mc',q:'¿Te ___ los pies después del partido?',opts:['duelen','duele','duelo'],a:0,keep:true},
 {t:'gap',q:'A mi madre le ___ (doler) la espalda.',a:['duele']},
 {t:'gap',q:'Después de diez horas en el ordenador me ___ (doler) los ojos.',a:['duelen']},
 {t:'match',q:'Was tut weh?',pairs:[['Zahnschmerzen','me duelen las muelas'],['Bauchschmerzen','me duele el estómago'],['Kopfschmerzen','me duele la cabeza'],['Halsschmerzen','me duele la garganta']]},
 {t:'tr',de:'Mir tut der Rücken weh.',a:['Me duele la espalda.']},
 {t:'tr',de:'Tun dir die Beine weh?',a:['¿Te duelen las piernas?']},
 {t:'listen',es:'Me duele mucho la garganta.',de:'Mir tut der Hals sehr weh.'}]},
{id:'l2',title:'Was hast du?',desc:'tengo fiebre · estoy resfriado · desde hace',steps:[
 {t:'vocab',title:'Symptome',items:[['tengo fiebre','ich habe Fieber','🤒'],['tengo tos','ich habe Husten','😷'],['tengo gripe','ich habe Grippe','🤧'],['estoy resfriado / resfriada','ich bin erkältet','🤧'],['estoy mareado / mareada','mir ist schwindelig','😵'],['estoy cansado / cansada','ich bin müde','🥱'],['me encuentro mal','ich fühle mich schlecht','🤢'],['me encuentro mejor','mir geht es besser','🙂'],['tengo alergia a …','ich bin allergisch gegen …','🌼'],['¿Qué te pasa?','Was ist los? / Was hast du?','❓'],['desde hace dos días','seit zwei Tagen','📅']]},
 {t:'info',title:'tener, estar oder doler?',html:`<table><tr><th>tener + Nomen</th><th>estar + Adjektiv</th><th>doler</th></tr>
 <tr><td class="es-t">Tengo fiebre.</td><td class="es-t">Estoy resfriado.</td><td class="es-t">Me duele la garganta.</td></tr>
 <tr><td class="es-t">Tengo tos.</td><td class="es-t">Estoy cansada.</td><td class="es-t">Me duelen los oídos.</td></tr></table>
 <p><b>Seit wann?</b> <span class="es-t">desde hace + Zeitraum</span> – <span class="es-t">Tengo tos desde hace una semana.</span> (Präsens, nicht Perfekt wie im Englischen!)</p>
 <p><b>Seit einem Zeitpunkt:</b> <span class="es-t">desde el lunes</span>, <span class="es-t">desde ayer</span>.</p>`},
 {t:'mc',q:'„Ich bin erkältet.“',opts:['Estoy resfriado.','Tengo resfriado.','Soy resfriado.'],a:0},
 {t:'mc',q:'„Ich habe Fieber.“',opts:['Tengo fiebre.','Estoy fiebre.','Me duele fiebre.'],a:0},
 {t:'gap',q:'Tengo tos ___ ___ tres días.',a:['desde','hace']},
 {t:'gap',q:'No puedo ir a clase, ___ (yo, estar) muy cansado y ___ (tener) fiebre.',a:['estoy','tengo']},
 {t:'tr',de:'Ich habe seit gestern Kopfschmerzen.',a:['Me duele la cabeza desde ayer.','Desde ayer me duele la cabeza.','Tengo dolor de cabeza desde ayer.']},
 {t:'dialog',place:'Por WhatsApp',title:'Laia fragt nach',scene:'Du warst heute nicht im Kurs. Laia schreibt dir.',lines:[
  {n:'Laia',es:'¡Hola! Hoy no has venido a clase. ¿Qué te pasa?',de:'Hi! Du warst heute nicht im Kurs. Was ist los?'},
  {you:true,opts:[{es:'Estoy resfriado y me duele mucho la garganta.',ok:true},{es:'Tengo resfriado y me duelen mucho la garganta.',ok:false,why:'<i>estar resfriado</i>; und <i>la garganta</i> ist Einzahl → <b>duele</b>.'}]},
  {n:'Laia',es:'¡Vaya! ¿Desde cuándo?',de:'Oh nein! Seit wann?'},
  {you:true,opts:[{es:'Desde hace dos días.',ok:true},{es:'Hace dos días desde.',ok:false,why:'Reihenfolge: <b>desde hace</b> + Zeitraum.'}]},
  {n:'Laia',es:'¿Y tienes fiebre?',de:'Und hast du Fieber?'},
  {you:true,opts:[{es:'Un poco, 37,8. Pero hoy me encuentro mejor.',ok:true},{es:'Un poco, 37,8. Pero hoy estoy mejor encuentro.',ok:false,why:'<i>me encuentro mejor</i> oder <i>estoy mejor</i>.'}]},
  {n:'Laia',es:'¡Que te mejores! Mañana te paso los apuntes.',de:'Gute Besserung! Morgen gebe ich dir die Mitschriften.'}]},
 {t:'speak',es:'Me encuentro mal, tengo fiebre desde ayer.',de:'Mir geht es schlecht, ich habe seit gestern Fieber.'}]},
{id:'l3',title:'Ratschläge geben',desc:'deberías · tienes que · es mejor',steps:[
 {t:'info',title:'So gibst du Ratschläge',html:`<table><tr><th>Ausdruck</th><th>Beispiel</th></tr>
 <tr><td class="es-t">deberías + Infinitiv</td><td class="es-t">Deberías descansar.</td></tr>
 <tr><td class="es-t">tienes que + Infinitiv</td><td class="es-t">Tienes que beber mucha agua.</td></tr>
 <tr><td class="es-t">es mejor + Infinitiv</td><td class="es-t">Es mejor no salir hoy.</td></tr>
 <tr><td class="es-t">¿Por qué no + Präsens?</td><td class="es-t">¿Por qué no vas al médico?</td></tr></table>
 <div class="ex"><i>deberías</i> (du solltest) ist freundlicher als <i>tienes que</i> (du musst). <i>Deberías</i> ist eine Form von <i>deber</i> im Konditional – die lernst du in Unidad 15 genauer.</div>`},
 {t:'vocab',title:'Beim Arzt & in der Apotheke',items:[['el médico de cabecera','der Hausarzt','🧑‍⚕️'],['el centro de salud','das Gesundheitszentrum (CAP)','🏥'],['la farmacia','die Apotheke','💊'],['la receta','das Rezept','📝'],['la pastilla','die Tablette','💊'],['el jarabe','der Hustensaft','🧴'],['la tarjeta sanitaria','die Krankenversicherungskarte','💳'],['pedir cita','einen Termin ausmachen','📅'],['descansar','sich ausruhen','🛌'],['tres veces al día','dreimal am Tag','🕒']]},
 {t:'mc',q:'Me duele la cabeza. – ___ tomar un ibuprofeno.',opts:['Deberías','Debes que','Tienes'],a:0},
 {t:'mc',q:'¿Por qué no ___ al médico?',opts:['vas','ir','vayas'],a:0},
 {t:'gap',q:'Tienes fiebre: tienes ___ quedarte en casa.',a:['que']},
 {t:'gap',q:'Estás muy cansado. Es ___ dormir un poco.',a:['mejor']},
 {t:'order',es:'Deberías pedir cita en el centro de salud.',de:'Du solltest einen Termin im Gesundheitszentrum ausmachen.'},
 {t:'tr',de:'Du solltest mehr Wasser trinken.',a:['Deberías beber más agua.','Deberías tomar más agua.']},
 {t:'tr',de:'Warum gehst du nicht in die Apotheke?',a:['¿Por qué no vas a la farmacia?']},
 {t:'free',task:'Dein Mitbewohner schläft schlecht und hat Rückenschmerzen. Gib ihm 3 Ratschläge.',hint:'Deberías … · Tienes que … · Es mejor … · ¿Por qué no …?',focus:'deberías / tienes que / es mejor + Infinitiv',model:'Deberías hacer un poco de deporte. Tienes que comprar una silla mejor para el escritorio. Es mejor no mirar el móvil en la cama. ¿Por qué no vas al fisioterapeuta?'}]},
{id:'l4',title:'Imperativ: Nimm! Nehmen Sie!',desc:'toma · bebe · descanse',steps:[
 {t:'info',title:'Der Imperativ (bejahend)',html:`<p><b>tú</b>: wie die 3. Person Singular Präsens. <b>usted</b>: Endung „tauschen“ (-ar → <b>-e</b>, -er/-ir → <b>-a</b>).</p>
 <table><tr><th></th><th>tú</th><th>usted</th></tr>
 <tr><td>tomar</td><td class="es-t">toma</td><td class="es-t">tome</td></tr>
 <tr><td>beber</td><td class="es-t">bebe</td><td class="es-t">beba</td></tr>
 <tr><td>abrir</td><td class="es-t">abre</td><td class="es-t">abra</td></tr>
 <tr><td>descansar</td><td class="es-t">descansa</td><td class="es-t">descanse</td></tr></table>
 <p><b>Unregelmäßig (tú):</b> <span class="es-t">ven (venir) · ve (ir) · haz (hacer) · pon (poner) · ten (tener) · di (decir) · sal (salir) · sé (ser)</span></p>
 <p><b>usted</b> kommt von der yo-Form: <span class="es-t">tengo → tenga · hago → haga · vengo → venga</span>. Und: <span class="es-t">ir → vaya</span>.</p>
 <div class="ex">Reflexiv: Pronomen hinten dran – <span class="es-t">¡Siéntate! · ¡Siéntese!</span> (der Akzent bleibt auf der gleichen Silbe).</div>`},
 {t:'conj',verb:'tomar',de:'nehmen (Imperativ)',tense:'Imperativ',persons:['tú','usted','vosotros','ustedes'],forms:['toma','tome','tomad','tomen']},
 {t:'mc',q:'Der Arzt zu dir (usted): „Nehmen Sie eine Tablette.“',opts:['Tome una pastilla.','Toma una pastilla.','Tomar una pastilla.'],a:0},
 {t:'mc',q:'Zu deinem Freund: „Komm her!“',opts:['¡Ven aquí!','¡Viene aquí!','¡Venga aquí!'],a:0},
 {t:'gap',q:'(tú) ___ (beber) mucha agua y ___ (descansar).',a:['bebe','descansa']},
 {t:'gap',q:'(usted) ___ (abrir) la boca, por favor.',a:['abra']},
 {t:'gap',q:'(tú) ___ (hacer) los deberes y luego ___ (ir) a la cama.',a:['haz','ve']},
 {t:'match',q:'Infinitiv → Imperativ (tú)',pairs:[['tener','ten'],['poner','pon'],['salir','sal'],['decir','di'],['venir','ven']]},
 {t:'listen',es:'Tome una pastilla cada ocho horas.',de:'Nehmen Sie alle acht Stunden eine Tablette.'},
 {t:'read',title:'Consejos para el estrés de los exámenes',text:`Los exámenes son estresantes para todos. Aquí tienes cinco consejos. Primero, {organiza|organisiere} tu tiempo: haz un plan para cada día. Segundo, {duerme|schlafe} siete u ocho horas. Sin descanso no puedes aprender. Tercero, {come|iss} bien y bebe mucha agua; el café no es la solución. Cuarto, haz deporte: un {paseo|Spaziergang} de veinte minutos ayuda mucho. Y por último, {habla|sprich} con tus compañeros: no estás solo.`,de:'Prüfungen sind für alle stressig. Hier hast du fünf Tipps. Erstens: Organisiere deine Zeit, mach einen Plan für jeden Tag. Zweitens: Schlaf sieben oder acht Stunden. Ohne Erholung kannst du nicht lernen. Drittens: Iss gut und trink viel Wasser; Kaffee ist nicht die Lösung. Viertens: Mach Sport, ein Spaziergang von zwanzig Minuten hilft viel. Und zuletzt: Sprich mit deinen Kommilitonen, du bist nicht allein.'},
 {t:'mc',q:'Laut Text: Was ist „nicht die Lösung“?',opts:['el café','el deporte','el agua'],a:0},
 {t:'tr',de:'Schlaf acht Stunden und mach Sport.',a:['Duerme ocho horas y haz deporte.']}]}
],
placement:[
 {t:'mc',q:'„Mir tun die Füße weh.“',opts:['Me duelen los pies.','Me duele los pies.','Tengo dolor los pies.'],a:0},
 {t:'mc',q:'„Ich bin erkältet.“',opts:['Estoy resfriado.','Tengo resfriado.','Soy resfriado.'],a:0},
 {t:'gap',q:'Tengo tos ___ ___ una semana. (seit)',a:['desde','hace']},
 {t:'gap',q:'Imperativ (tú): ___ (hacer) los deberes.',a:['haz']},
 {t:'mc',q:'Der Arzt (usted): „Nehmen Sie diese Tabletten.“',opts:['Tome estas pastillas.','Toma estas pastillas.','Tomas estas pastillas.'],a:0},
 {t:'mc',q:'„Du solltest dich ausruhen.“',opts:['Deberías descansar.','Debes que descansar.','Tienes descansar.'],a:0}],
resumen:`<h3>Schmerzen</h3><table><tr><td class="es-t">Me duele la cabeza / la espalda.</td><td class="es-t">Me duelen los pies / los ojos.</td></tr></table>
<h3>Symptome</h3><p class="es-t">Tengo fiebre / tos / gripe. · Estoy resfriado / mareado / cansado. · Me encuentro mal / mejor. · desde hace dos días · desde ayer</p>
<h3>Ratschläge</h3><p class="es-t">Deberías descansar. · Tienes que beber agua. · Es mejor no salir. · ¿Por qué no vas al médico?</p>
<h3>Imperativ</h3><table><tr><th></th><th>tú</th><th>usted</th></tr><tr><td>tomar</td><td class="es-t">toma</td><td class="es-t">tome</td></tr><tr><td>beber</td><td class="es-t">bebe</td><td class="es-t">beba</td></tr><tr><td>abrir</td><td class="es-t">abre</td><td class="es-t">abra</td></tr></table>
<p class="es-t">ven · ve · haz · pon · ten · di · sal · sé</p>`});

/* ================= UNIDAD 12 · DE VIAJE ================= */
COURSE.units.push({id:'u12',n:'12',level:'A2b',title:'De viaje',sub:'Von einer Reise erzählen · Indefinido & Imperfekt im Wechsel · estaba + Gerundium · Probleme am Flughafen · reagieren',
goals:['Reise-Wortschatz: Flughafen, Gepäck, Unterkunft','Indefinido + Imperfekt: Handlung vs. Hintergrund','estaba + Gerundium (gerade dabei sein)','Zeitangaben: aquel día, al día siguiente, de repente','Reagieren: ¡Qué bien! ¡Qué mala suerte!','ser/estar/ir/tener im Indefinido wiederholen'],
situacion:{title:'Reise-Erzählung im Kurs',npc:'Profesora Marta',scene:'Nach den Ferien fragt deine Spanischlehrerin in Barcelona, wie deine Reise war. Sie will viele Details hören.',role:'Du bist Marta, Spanischlehrerin an der UPC, neugierig und herzlich. Du duzt Jonas. Frag nach seiner letzten Reise: ¿Adónde fuiste? ¿Con quién? ¿Qué tal el viaje? ¿Qué tiempo hacía? ¿Qué hiciste? ¿Pasó algo curioso? Reagiere mit ¡Qué bien!, ¡Qué mala suerte!, ¿De verdad?. Wenn er Indefinido und Imperfekt verwechselt, korrigiere sanft.',goal:'Erzähl von einer Reise: wohin, mit wem, wie das Wetter war (Imperfekt), was du gemacht hast (Indefinido) und eine kleine Panne.'},
lessons:[
{id:'l1',title:'Am Flughafen',desc:'la maleta · el vuelo · perder',steps:[
 {t:'vocab',title:'Reisen',items:[['el aeropuerto','der Flughafen','🛫'],['el vuelo','der Flug','✈️'],['la maleta','der Koffer','🧳'],['el equipaje de mano','das Handgepäck','🎒'],['la tarjeta de embarque','die Bordkarte','🎫'],['la puerta de embarque','das Gate','🚪'],['facturar','(Gepäck) aufgeben','🧳'],['el retraso','die Verspätung','⏳'],['cancelar','stornieren / absagen','❌'],['perder el vuelo','den Flug verpassen','🏃'],['el billete de ida y vuelta','das Hin- und Rückticket','🎟️'],['el alojamiento','die Unterkunft','🏠'],['el albergue','die Jugendherberge','🛏️']]},
 {t:'mc',q:'„Ich habe den Flug verpasst.“',opts:['Perdí el vuelo.','Pasé el vuelo.','Falté el vuelo.'],a:0},
 {t:'mc',q:'„Der Flug hat zwei Stunden Verspätung.“',opts:['El vuelo tiene dos horas de retraso.','El vuelo es dos horas tarde.','El vuelo tiene dos horas retrasado.'],a:0},
 {t:'match',q:'Was passt?',pairs:[['facturar','la maleta'],['perder','el vuelo'],['reservar','el alojamiento'],['enseñar','la tarjeta de embarque']]},
 {t:'dialog',place:'Aeropuerto del Prat',title:'Mein Koffer ist nicht da',scene:'Du landest in Barcelona, aber dein Koffer kommt nicht aufs Band.',lines:[
  {n:'Empleada',es:'Buenas tardes, ¿en qué puedo ayudarle?',de:'Guten Tag, wie kann ich Ihnen helfen?'},
  {you:true,opts:[{es:'Buenas tardes. Mi maleta no ha llegado.',ok:true},{es:'Buenas tardes. Mi maleta no es llegado.',ok:false,why:'Perfekt immer mit <b>haber</b>: <i>ha llegado</i>.'}]},
  {n:'Empleada',es:'¿De dónde viene su vuelo?',de:'Woher kommt Ihr Flug?'},
  {you:true,opts:[{es:'De Frankfurt. Es el vuelo IB3145.',ok:true},{es:'A Frankfurt. Es el vuelo IB3145.',ok:false,why:'Herkunft: <b>de</b> Frankfurt.'}]},
  {n:'Empleada',es:'¿Cómo es la maleta?',de:'Wie sieht der Koffer aus?'},
  {you:true,opts:[{es:'Es grande, negra y tiene una cinta roja.',ok:true},{es:'Está grande, negra y tiene una cinta roja.',ok:false,why:'Aussehen/Eigenschaft → <b>ser</b>.'}]},
  {n:'Empleada',es:'Muy bien. Se la llevamos a su casa mañana.',de:'Sehr gut. Wir bringen ihn Ihnen morgen nach Hause.'}]},
 {t:'listen',es:'El vuelo a Madrid tiene una hora de retraso.',de:'Der Flug nach Madrid hat eine Stunde Verspätung.'}]},
{id:'l2',title:'Handlung oder Hintergrund?',desc:'fui · hacía · era',steps:[
 {t:'info',title:'Indefinido + Imperfekt in einer Geschichte',html:`<p>Stell dir einen Film vor:</p>
 <table><tr><th>Imperfekt = Kulisse</th><th>Indefinido = Handlung</th></tr>
 <tr><td>Wie war es? Wetter, Ort, Gefühle, Uhrzeit</td><td>Was ist passiert? Abgeschlossene Ereignisse</td></tr>
 <tr><td class="es-t">Hacía sol y había mucha gente.</td><td class="es-t">Fuimos a la playa.</td></tr>
 <tr><td class="es-t">Era tarde y estaba cansado.</td><td class="es-t">Llegué al hotel a las once.</td></tr></table>
 <div class="ex">Test-Frage: Kann ich „und dann?“ fragen? → Indefinido. Beschreibt es nur die Situation drumherum? → Imperfekt.</div>`},
 {t:'mc',q:'El año pasado ___ a Sevilla con mis padres.',opts:['fui','iba'],a:0,keep:true,why:'Abgeschlossene Handlung → Indefinido.'},
 {t:'mc',q:'___ mucho calor, 40 grados.',opts:['Hacía','Hizo'],a:0,keep:true,why:'Wetter als Hintergrund → Imperfekt.'},
 {t:'mc',q:'El hotel ___ muy bonito y ___ al lado de la catedral.',opts:['era … estaba','fue … estuvo'],a:0,keep:true,why:'Beschreibung → Imperfekt.'},
 {t:'gap',q:'Cuando ___ (nosotros, llegar) al hotel, ___ (ser) las doce de la noche.',a:['llegamos','eran']},
 {t:'gap',q:'Como ___ (yo, estar) cansado, ___ (acostarse, yo) pronto.',a:['estaba','me acosté']},
 {t:'gap',q:'El último día ___ (nosotros, visitar) la Alhambra. ___ (haber) muchos turistas.',a:['visitamos','había']},
 {t:'order',es:'Hacía buen tiempo, así que fuimos a la playa.',de:'Es war schönes Wetter, also sind wir an den Strand gegangen.'},
 {t:'tr',de:'Es war kalt, aber wir haben viele Fotos gemacht.',a:['Hacía frío, pero hicimos muchas fotos.','Hacía frío pero sacamos muchas fotos.','Hacía frío, pero sacamos muchas fotos.','Hacía frío pero hicimos muchas fotos.']}]},
{id:'l3',title:'Gerade dabei, als …',desc:'estaba durmiendo cuando …',steps:[
 {t:'info',title:'estaba + Gerundium',html:`<p>Für eine Handlung, die gerade lief, als etwas passierte:</p>
 <p class="es-t" style="font-size:18px">Estaba durmiendo cuando sonó el teléfono.</p>
 <p>= Ich schlief gerade (lief schon), als das Telefon klingelte (neues Ereignis).</p>
 <table><tr><td>estaba</td><td>estábamos</td></tr><tr><td>estabas</td><td>estabais</td></tr><tr><td>estaba</td><td>estaban</td></tr></table>
 <p>+ Gerundium: <span class="es-t">-ar → -ando, -er/-ir → -iendo</span> · <span class="es-t">leer → leyendo, dormir → durmiendo</span></p>`},
 {t:'mc',q:'___ por el centro cuando empezó a llover.',opts:['Estábamos paseando','Paseamos','Estuvimos paseando'],a:0},
 {t:'gap',q:'Cuando me llamaste, ___ ___ (yo, estar + ducharse).',a:['me estaba','duchando'],hint:'Reflexivpronomen davor: <i>me estaba duchando</i> (oder: <i>estaba duchándome</i>).'},
 {t:'gap',q:'Los niños ___ ___ (estar + jugar) en la playa cuando vieron los delfines.',a:['estaban','jugando']},
 {t:'vocab',title:'Erzählen',items:[['aquel día','an jenem Tag','📅'],['al día siguiente','am nächsten Tag','➡️'],['de repente','plötzlich','⚡'],['entonces','dann / da','👉'],['al final','am Ende','🏁'],['por suerte','zum Glück','🍀'],['por desgracia','leider','😞'],['¡Qué bien!','Wie schön!','😀'],['¡Qué mala suerte!','So ein Pech!','😩'],['¿De verdad?','Wirklich?','😮'],['¡No me digas!','Was du nicht sagst!','😲']]},
 {t:'mc',q:'Dein Freund: „Perdí el móvil en el tren.“ – Du reagierst:',opts:['¡Qué mala suerte!','¡Qué bien!','¡Enhorabuena!'],a:0},
 {t:'tr',de:'Ich las gerade ein Buch, als plötzlich das Licht ausging.',a:['Estaba leyendo un libro cuando de repente se fue la luz.','Estaba leyendo un libro cuando de repente se apagó la luz.']},
 {t:'listen',es:'Estábamos cenando cuando de repente llegó mi hermano.',de:'Wir aßen gerade zu Abend, als plötzlich mein Bruder kam.'}]},
{id:'l4',title:'Mi viaje a Granada',desc:'Lesen & selbst erzählen',steps:[
 {t:'read',title:'Un fin de semana en Granada',text:`El mes pasado fui a Granada con mi amiga Clara. {Salimos|Wir fuhren los} de Barcelona un viernes por la mañana. El tren {tardó|brauchte} seis horas, pero el paisaje era precioso. Cuando llegamos, hacía mucho calor y las calles estaban llenas de gente. El {albergue|die Jugendherberge} estaba en el Albaicín, el barrio antiguo, y desde la terraza se veía la Alhambra.

El sábado visitamos la Alhambra. Mientras estábamos haciendo fotos en los jardines, Clara {se dio cuenta|merkte} de que no tenía su cartera. ¡Qué susto! Volvimos a la entrada y, por suerte, alguien la había dejado allí. Por la noche cenamos tapas: en Granada las tapas son {gratis|kostenlos} con cada bebida. Al día siguiente volvimos a casa, cansados pero muy contentos.`,de:'Letzten Monat bin ich mit meiner Freundin Clara nach Granada gefahren. Wir fuhren an einem Freitagmorgen in Barcelona los. Der Zug brauchte sechs Stunden, aber die Landschaft war wunderschön. Als wir ankamen, war es sehr heiß und die Straßen waren voller Menschen. Die Jugendherberge war im Albaicín, dem alten Viertel, und von der Terrasse aus sah man die Alhambra.\n\nAm Samstag besichtigten wir die Alhambra. Während wir in den Gärten Fotos machten, merkte Clara, dass sie ihren Geldbeutel nicht hatte. Was für ein Schreck! Wir gingen zum Eingang zurück und zum Glück hatte ihn jemand dort abgegeben. Abends aßen wir Tapas: In Granada sind die Tapas zu jedem Getränk kostenlos. Am nächsten Tag fuhren wir nach Hause, müde, aber sehr zufrieden.'},
 {t:'mc',q:'¿Cómo viajaron a Granada?',opts:['en tren','en avión','en coche'],a:0},
 {t:'mc',q:'¿Qué problema tuvo Clara?',opts:['No tenía su cartera.','Perdió el tren.','Le dolía la cabeza.'],a:0},
 {t:'mc',q:'„hacía mucho calor“ steht im Imperfekt, weil …',opts:['es una descripción (Hintergrund)','es una acción terminada','pasó una sola vez'],a:0},
 {t:'gap',q:'Mientras ___ (nosotros, estar) haciendo fotos, Clara ___ (darse) cuenta de algo.',a:['estábamos','se dio']},
 {t:'free',task:'Erzähl von deiner letzten Reise (5–6 Sätze): wohin, mit wem, wie war es (Imperfekt), was habt ihr gemacht (Indefinido), eine kleine Panne.',hint:'El verano pasado fui a … · Hacía … · El hotel era … · Un día … · De repente … · Al final …',focus:'Indefinido vs. Imperfekt, estaba + Gerundium',model:'El verano pasado fui a Lisboa con dos amigos. Hacía mucho sol y la ciudad era preciosa. Un día alquilamos bicicletas y fuimos a la playa. Mientras estábamos nadando, empezó a llover. ¡Qué mala suerte! Al final cenamos pescado en un restaurante pequeño y fue genial.'},
 {t:'speak',es:'El año pasado fui a Granada. Hacía mucho calor, pero fue un viaje precioso.',de:'Letztes Jahr bin ich nach Granada gefahren. Es war sehr heiß, aber es war eine wunderschöne Reise.'}]}
],
placement:[
 {t:'mc',q:'El año pasado ___ a Sevilla. (Reise abgeschlossen)',opts:['fui','iba','he ido'],a:0},
 {t:'mc',q:'Cuando llegamos, ___ mucho calor.',opts:['hacía','hizo','ha hecho'],a:0},
 {t:'gap',q:'___ (yo, estar) durmiendo cuando sonó el teléfono.',a:['estaba']},
 {t:'mc',q:'Dein Freund hat seinen Koffer verloren. Du sagst:',opts:['¡Qué mala suerte!','¡Qué bien!','¡Enhorabuena!'],a:0},
 {t:'gap',q:'„den Flug verpassen“ = ___ el vuelo',a:['perder']},
 {t:'mc',q:'Como ___ cansado, me acosté pronto.',opts:['estaba','estuve','fui'],a:0}],
resumen:`<h3>Reisen</h3><p class="es-t">el vuelo · la maleta · facturar · la tarjeta de embarque · el retraso · perder el vuelo · el alojamiento</p>
<h3>Kulisse & Handlung</h3><table><tr><th>Imperfekt (Hintergrund)</th><th>Indefinido (Ereignis)</th></tr><tr><td class="es-t">Hacía sol. Era tarde. Estaba cansado.</td><td class="es-t">Fuimos a la playa. Llegué a las once.</td></tr></table>
<h3>Gerade dabei</h3><p class="es-t">Estaba durmiendo cuando sonó el teléfono.</p>
<h3>Erzählen & reagieren</h3><p class="es-t">aquel día · al día siguiente · de repente · al final · por suerte · ¡Qué bien! · ¡Qué mala suerte! · ¿De verdad?</p>`});

/* ================= UNIDAD 13 · EN LA COCINA ================= */
COURSE.units.push({id:'u13',n:'13',level:'A2b',title:'En la cocina',sub:'Rezepte verstehen & erklären · unpersönliches se (se corta, se añade) · Mengen · Objektpronomen beim Imperativ (córtalo)',
goals:['Küche & Zubereitung: cortar, freír, añadir …','Mengen: un kilo de, una cucharada de, un poco de','se + Verb: so macht man das','Objektpronomen lo/la/los/las wiederholen','Imperativ + Pronomen: córtalo, échalas','Im Markt einkaufen'],
situacion:{title:'Tortilla mit deiner Mitbewohnerin',npc:'Nuria',scene:'Deine Mitbewohnerin Nuria aus Valencia zeigt dir, wie man eine echte tortilla de patatas macht. Du hilfst in der Küche.',role:'Du bist Nuria, 25, Mitbewohnerin von Jonas, lustig und ein bisschen streng beim Kochen. Du duzt ihn. Erklär Schritt für Schritt, wie man eine Tortilla macht, mit Imperativ + Pronomen (Pela las patatas… córtalas… échalas en la sartén…). Frag ihn, ob er die Tortilla mit oder ohne Zwiebel will (gran debate). Lass ihn auch fragen, wie viel von etwas man braucht.',goal:'Frag nach Zutaten und Mengen (¿Cuántos huevos…? ¿Cuánto aceite…?), bestätige Anweisungen mit Pronomen (¿Las corto ya? – Sí, córtalas) und sag deine Meinung zur Zwiebel.'},
lessons:[
{id:'l1',title:'Zutaten & Mengen',desc:'un kilo de · una cucharada de',steps:[
 {t:'vocab',title:'Zutaten',items:[['la patata','die Kartoffel','🥔'],['la cebolla','die Zwiebel','🧅'],['el ajo','der Knoblauch','🧄'],['el tomate','die Tomate','🍅'],['el pimiento','die Paprika','🫑'],['el aceite de oliva','das Olivenöl','🫒'],['la sal','das Salz','🧂'],['el azúcar','der Zucker','🍬'],['la harina','das Mehl','🌾'],['el limón','die Zitrone','🍋'],['la manzana','der Apfel','🍎'],['la naranja','die Orange','🍊']]},
 {t:'vocab',title:'Mengen',items:[['un kilo de','ein Kilo','⚖️'],['medio kilo de','ein halbes Kilo','⚖️'],['cien gramos de','hundert Gramm','⚖️'],['un litro de','ein Liter','🥛'],['una docena de huevos','ein Dutzend Eier','🥚'],['una cucharada de','ein Esslöffel','🥄'],['una pizca de sal','eine Prise Salz','🧂'],['un poco de','ein bisschen','🤏'],['bastante','ziemlich viel / genug','👌'],['demasiado','zu viel','🙅']]},
 {t:'info',title:'Mengen + de',html:`<p>Nach jeder Mengenangabe kommt <b>de</b> – ohne Artikel:</p>
 <p class="es-t">un kilo <b>de</b> tomates · una botella <b>de</b> aceite · un poco <b>de</b> sal</p>
 <p><b>¿Cuánto/-a/-os/-as?</b> passt sich an: <span class="es-t">¿Cuánta harina? ¿Cuántos huevos? ¿Cuánto aceite? ¿Cuántas patatas?</span></p>
 <div class="ex"><i>demasiado</i> = zu viel (negativ!): <span class="es-t">Has puesto demasiada sal.</span></div>`},
 {t:'mc',q:'¿___ huevos necesitamos?',opts:['Cuántos','Cuántas','Cuánto'],a:0},
 {t:'mc',q:'¿___ harina hay que poner?',opts:['Cuánta','Cuántas','Cuánto'],a:0},
 {t:'gap',q:'Póngame medio kilo ___ tomates, por favor.',a:['de']},
 {t:'gap',q:'La sopa está muy salada: has puesto ___ sal.',a:['demasiada']},
 {t:'dialog',place:'Mercado de la Boquería',title:'Am Gemüsestand',scene:'Du kaufst Zutaten für eine Tortilla.',lines:[
  {n:'Vendedor',es:'¡Hola! ¿Qué te pongo?',de:'Hallo! Was darf es sein?'},
  {you:true,opts:[{es:'Hola. Un kilo de patatas y dos cebollas, por favor.',ok:true},{es:'Hola. Un kilo patatas y dos cebollas, por favor.',ok:false,why:'Nach Mengen immer <b>de</b>: un kilo <b>de</b> patatas.'}]},
  {n:'Vendedor',es:'Aquí tienes. ¿Algo más?',de:'Bitte schön. Sonst noch etwas?'},
  {you:true,opts:[{es:'Sí, ¿tiene huevos? Necesito media docena.',ok:true},{es:'Sí, ¿tiene huevos? Necesito media de docena.',ok:false,why:'<i>media docena</i> – ohne <i>de</i> dazwischen.'}]},
  {n:'Vendedor',es:'Claro. Son cuatro con veinte.',de:'Klar. Das macht 4,20 €.'}]},
 {t:'listen',es:'Necesito un kilo de patatas y una docena de huevos.',de:'Ich brauche ein Kilo Kartoffeln und ein Dutzend Eier.'}]},
{id:'l2',title:'So macht man das: se',desc:'se corta · se añade · se sirve',steps:[
 {t:'vocab',title:'In der Küche',items:[['pelar','schälen','🔪'],['cortar','schneiden','🔪'],['freír','braten / frittieren','🍳'],['hervir','kochen (Wasser)','♨️'],['añadir','hinzufügen','➕'],['echar','hineingeben / -schütten','🫗'],['mezclar','mischen / verrühren','🥣'],['batir','schlagen (Eier)','🥚'],['dar la vuelta','umdrehen / wenden','🔄'],['servir','servieren','🍽️'],['la sartén','die Pfanne','🍳'],['la olla','der Kochtopf','🍲'],['el horno','der Backofen','🔥']]},
 {t:'info',title:'Das unpersönliche se',html:`<p>In Rezepten sagt man nicht, <b>wer</b> etwas tut – sondern <b>wie man</b> es tut:</p>
 <table><tr><th>se + 3. Person Sg.</th><th>se + 3. Person Pl.</th></tr>
 <tr><td class="es-t">Se pela la cebolla.</td><td class="es-t">Se pelan las patatas.</td></tr>
 <tr><td class="es-t">Se añade la sal.</td><td class="es-t">Se baten los huevos.</td></tr></table>
 <p>Das Verb richtet sich nach dem Ding danach (Singular/Plural). Wie im Deutschen „man schält die Kartoffeln“.</p>
 <div class="ex">Auch außerhalb der Küche: <span class="es-t">Aquí se habla catalán. · ¿Cómo se dice … en español? · Se alquila piso.</span></div>`},
 {t:'mc',q:'Primero ___ las patatas.',opts:['se pelan','se pela','se pelamos'],a:0,keep:true},
 {t:'mc',q:'Luego ___ la cebolla en trozos pequeños.',opts:['se corta','se cortan','se corto'],a:0,keep:true},
 {t:'gap',q:'Después ___ ___ (se + batir) los huevos.',a:['se','baten']},
 {t:'gap',q:'Aquí ___ ___ (se + vender) pan recién hecho.',a:['se','vende']},
 {t:'order',es:'Se fríen las patatas en mucho aceite.',de:'Man brät die Kartoffeln in viel Öl.'},
 {t:'tr',de:'Wie sagt man „Pfanne“ auf Spanisch?',a:['¿Cómo se dice „Pfanne“ en español?','¿Cómo se dice Pfanne en español?']},
 {t:'read',title:'Receta: pan con tomate',text:`El pan con tomate es muy típico de Cataluña. Es fácil y rápido. Para cuatro personas se necesitan: un pan grande, dos tomates maduros, un {diente de ajo|eine Knoblauchzehe}, aceite de oliva y sal.

Primero se corta el pan en {rebanadas|Scheiben} y se {tuesta|röstet} un poco. Después, si te gusta, se frota el ajo sobre el pan. Luego se cortan los tomates por la mitad y se frotan sobre el pan. Al final se echa un poco de aceite y una pizca de sal. Se sirve con jamón o queso. ¡Que aproveche!`,de:'Pan con tomate ist sehr typisch für Katalonien. Es ist einfach und schnell. Für vier Personen braucht man: ein großes Brot, zwei reife Tomaten, eine Knoblauchzehe, Olivenöl und Salz.\n\nZuerst schneidet man das Brot in Scheiben und röstet es ein bisschen. Danach reibt man, wenn man mag, den Knoblauch über das Brot. Dann schneidet man die Tomaten in der Mitte durch und reibt sie über das Brot. Zum Schluss gibt man etwas Öl und eine Prise Salz dazu. Man serviert es mit Schinken oder Käse. Guten Appetit!'},
 {t:'mc',q:'¿Qué se hace con los tomates?',opts:['Se frotan sobre el pan.','Se fríen.','Se mezclan con los huevos.'],a:0}]},
{id:'l3',title:'Schneid sie! – Imperativ + Pronomen',desc:'córtalo · échalas · no lo …',steps:[
 {t:'info',title:'Pronomen hängen am Imperativ',html:`<p>Wiederholung: <span class="es-t">lo, la, los, las</span> ersetzen ein Ding. Beim <b>bejahenden Imperativ</b> hängen sie hinten dran:</p>
 <table><tr><th>Ding</th><th>tú</th><th>usted</th></tr>
 <tr><td class="es-t">el pan</td><td class="es-t">córtalo</td><td class="es-t">córtelo</td></tr>
 <tr><td class="es-t">la cebolla</td><td class="es-t">pélala</td><td class="es-t">pélela</td></tr>
 <tr><td class="es-t">los huevos</td><td class="es-t">bátelos</td><td class="es-t">bátalos</td></tr>
 <tr><td class="es-t">las patatas</td><td class="es-t">échalas</td><td class="es-t">éch<b>e</b>las</td></tr></table>
 <div class="ex">Akzent nicht vergessen: Die Betonung bleibt, wo sie war – <i>corta</i> → <i>có</i>rtalo.</div>
 <p>In normalen Sätzen steht das Pronomen <b>vor</b> dem Verb: <span class="es-t">Las corto ahora.</span></p>`},
 {t:'mc',q:'– ¿Corto la cebolla? – Sí, ___.',opts:['córtala','córtalo','la corta'],a:0},
 {t:'mc',q:'– ¿Pongo los platos en la mesa? – Sí, ___, por favor.',opts:['ponlos','ponlas','los pon'],a:0},
 {t:'gap',q:'– ¿Dónde echo las patatas? – ___ (echar + las) en la sartén.',a:['Échalas']},
 {t:'gap',q:'– ¿Y el aceite? – ___ (añadir + lo) al final.',a:['Añádelo']},
 {t:'gap',q:'– ¿Ya has batido los huevos? – Sí, ya ___ he batido.',a:['los']},
 {t:'tr',de:'Die Tortilla? Dreh sie jetzt um!',a:['¿La tortilla? ¡Dale la vuelta ahora!','¿La tortilla? Dale la vuelta ahora.']},
 {t:'listen',es:'Pela las patatas y córtalas en trozos pequeños.',de:'Schäl die Kartoffeln und schneide sie in kleine Stücke.'},
 {t:'speak',es:'¿La cebolla? Córtala muy fina.',de:'Die Zwiebel? Schneide sie ganz fein.'}]},
{id:'l4',title:'Dein Lieblingsrezept',desc:'Rezept verstehen & schreiben',steps:[
 {t:'dialog',place:'En casa',title:'Nuria erklärt die Tortilla',scene:'Ihr kocht zusammen.',lines:[
  {n:'Nuria',es:'Bueno, primero pela las patatas.',de:'Also, schäl zuerst die Kartoffeln.'},
  {you:true,opts:[{es:'Vale. ¿Y luego las corto?',ok:true},{es:'Vale. ¿Y luego corto las?',ok:false,why:'Pronomen <b>vor</b> dem konjugierten Verb: <i>las corto</i>.'}]},
  {n:'Nuria',es:'Sí, córtalas finas. ¿Te gusta la tortilla con cebolla?',de:'Ja, schneide sie dünn. Magst du die Tortilla mit Zwiebel?'},
  {you:true,opts:[{es:'¡Sí, me encanta con cebolla!',ok:true},{es:'¡Sí, me encantan con cebolla!',ok:false,why:'<i>la tortilla</i> = Singular → <b>encanta</b>.'}]},
  {n:'Nuria',es:'¡Bien! Ahora bate los huevos con un poco de sal.',de:'Gut! Jetzt schlag die Eier mit etwas Salz.'},
  {you:true,opts:[{es:'¿Cuántos huevos echo?',ok:true},{es:'¿Cuántas huevos echo?',ok:false,why:'<i>el huevo</i> ist männlich → <b>cuántos</b>.'}]},
  {n:'Nuria',es:'Seis. Y ahora lo más difícil: darle la vuelta. ¡Hazlo tú!',de:'Sechs. Und jetzt das Schwierigste: sie umdrehen. Mach du es!'}]},
 {t:'match',q:'Rezept-Schritte',pairs:[['Primero','se pelan las patatas'],['Después','se fríen en aceite'],['Luego','se mezclan con los huevos'],['Al final','se le da la vuelta']]},
 {t:'tr',de:'Man braucht vier Eier und ein bisschen Salz.',a:['Se necesitan cuatro huevos y un poco de sal.']},
 {t:'free',task:'Erklär ein einfaches Gericht aus Deutschland (z. B. Kartoffelsalat oder Pfannkuchen) mit se + Verb: Zutaten und 4–5 Schritte.',hint:'Se necesitan … · Primero se … · Después se … · Luego se … · Al final se …',focus:'se + Verb, Mengenangaben, Reihenfolge',model:'Para hacer tortitas alemanas se necesitan 250 gramos de harina, tres huevos, medio litro de leche y una pizca de sal. Primero se mezclan la harina y la leche. Después se añaden los huevos y la sal. Luego se calienta un poco de aceite en la sartén. Al final se fríen las tortitas y se sirven con azúcar o con manzana.'}]}
],
placement:[
 {t:'mc',q:'In Rezepten: „Man schält die Kartoffeln.“',opts:['Se pelan las patatas.','Se pela las patatas.','Pelan se las patatas.'],a:0},
 {t:'gap',q:'Un kilo ___ tomates, por favor.',a:['de']},
 {t:'mc',q:'– ¿Corto la cebolla? – Sí, ___.',opts:['córtala','córtalo','la corta'],a:0},
 {t:'mc',q:'¿___ huevos necesitamos?',opts:['Cuántos','Cuántas','Cuánto'],a:0},
 {t:'gap',q:'– ¿Y las patatas? – ___ (echar + las) en la sartén. (tú)',a:['Échalas']},
 {t:'mc',q:'„Hier spricht man Katalanisch.“',opts:['Aquí se habla catalán.','Aquí habla se catalán.','Aquí hablan se catalán.'],a:0}],
resumen:`<h3>Mengen</h3><p class="es-t">un kilo de · medio kilo de · cien gramos de · un litro de · una docena de · una cucharada de · una pizca de · un poco de · demasiado</p>
<h3>So macht man das</h3><table><tr><td class="es-t">Se pela la cebolla.</td><td class="es-t">Se pelan las patatas.</td></tr></table>
<h3>Imperativ + Pronomen</h3><p class="es-t">córtalo · pélala · bátelos · échalas · dale la vuelta</p><p class="es-t">Aber: Las corto ahora. · Ya los he batido.</p>`});

/* ================= UNIDAD 14 · REGALOS Y FAVORES ================= */
COURSE.units.push({id:'u14',n:'14',level:'A2b',title:'Regalos y favores',sub:'Feste & Geschenke · indirekte Objektpronomen (le, les) · se lo / se la · um Gefallen bitten · Erlaubnis fragen',
goals:['Feste: cumpleaños, boda, Navidad …','Glückwünsche: ¡Felicidades! ¡Enhorabuena!','me/te/le/nos/os/les (wem?)','Doppelte Pronomen: me lo, te la, se lo','um einen Gefallen bitten: ¿Me prestas …? ¿Te importa …?','Erlaubnis: ¿Puedo …? ¿Te importa si …?'],
situacion:{title:'Geburtstagsgeschenk für Laia',npc:'Marc',scene:'Eure Freundin Laia hat am Samstag Geburtstag. Du und Marc, ein Kommilitone, überlegt, was ihr ihr schenkt, und organisiert die Party.',role:'Du bist Marc, ein katalanischer Kommilitone von Jonas, entspannt und hilfsbereit. Ihr duzt euch. Diskutiert ein Geschenk für Laia (¿Qué le regalamos? ¿Le compramos…? Ya se lo regaló su hermana…). Bitte Jonas um Gefallen (¿Me prestas…? ¿Puedes traer…?) und benutze Pronomen wie se lo.',goal:'Schlag Geschenke vor (¿Por qué no le regalamos…?), bitte Marc um einen Gefallen und reagiere auf seine Bitten (Sí, claro, te lo traigo / Lo siento, es que…).'},
lessons:[
{id:'l1',title:'Feste & Glückwünsche',desc:'¡Felicidades! · regalar',steps:[
 {t:'vocab',title:'Feste',items:[['el cumpleaños','der Geburtstag','🎂'],['la boda','die Hochzeit','💒'],['la Navidad','Weihnachten','🎄'],['Nochevieja','Silvester','🎆'],['la fiesta sorpresa','die Überraschungsparty','🎉'],['el regalo','das Geschenk','🎁'],['regalar','schenken','🎁'],['invitar','einladen','💌'],['celebrar','feiern','🥂'],['la tarta','die Torte','🎂'],['las flores','die Blumen','💐'],['¡Felicidades!','Herzlichen Glückwunsch!','🥳'],['¡Enhorabuena!','Glückwunsch! (zu einer Leistung)','🏅'],['¡Feliz Navidad!','Frohe Weihnachten!','🎄'],['¡Que lo pases bien!','Viel Spaß!','😄']]},
 {t:'info',title:'Welcher Glückwunsch?',html:`<table><tr><th>Situation</th><th>Spanisch</th></tr>
 <tr><td>Geburtstag</td><td class="es-t">¡Feliz cumpleaños! / ¡Felicidades!</td></tr>
 <tr><td>Prüfung bestanden, neuer Job</td><td class="es-t">¡Enhorabuena!</td></tr>
 <tr><td>Hochzeit</td><td class="es-t">¡Que seáis muy felices!</td></tr>
 <tr><td>Reise, Party</td><td class="es-t">¡Buen viaje! · ¡Que lo pases bien!</td></tr>
 <tr><td>Krankheit</td><td class="es-t">¡Que te mejores!</td></tr></table>
 <div class="ex">In Spanien feiert man oft auch den <b>santo</b> (Namenstag). Und: Am 6. Januar bringen die <b>Reyes Magos</b> die Geschenke.</div>`},
 {t:'mc',q:'Dein Freund hat die Masterprüfung bestanden:',opts:['¡Enhorabuena!','¡Que te mejores!','¡Buen provecho!'],a:0},
 {t:'mc',q:'Deine Kollegin ist krank:',opts:['¡Que te mejores!','¡Felicidades!','¡Que aproveche!'],a:0},
 {t:'mc',q:'Deine Mitbewohnerin geht heute Abend auf ein Konzert:',opts:['¡Que lo pases bien!','¡Enhorabuena!','¡Feliz Navidad!'],a:0},
 {t:'listen',es:'¡Feliz cumpleaños! Te hemos traído un regalo.',de:'Alles Gute zum Geburtstag! Wir haben dir ein Geschenk mitgebracht.'}]},
{id:'l2',title:'Wem? – le, les',desc:'le regalo · les escribo',steps:[
 {t:'info',title:'Indirekte Objektpronomen',html:`<p>Sie sagen, <b>wem</b> etwas gegeben, geschenkt, gesagt … wird:</p>
 <table><tr><th>wem?</th><th>Pronomen</th><th>Beispiel</th></tr>
 <tr><td>mir</td><td class="es-t">me</td><td class="es-t">Mi madre me regala un libro.</td></tr>
 <tr><td>dir</td><td class="es-t">te</td><td class="es-t">¿Te escribo mañana?</td></tr>
 <tr><td>ihm / ihr / Ihnen</td><td class="es-t">le</td><td class="es-t">Le regalo flores a Laia.</td></tr>
 <tr><td>uns</td><td class="es-t">nos</td><td class="es-t">Nos invitan a la boda.</td></tr>
 <tr><td>euch</td><td class="es-t">os</td><td class="es-t">Os mando las fotos.</td></tr>
 <tr><td>ihnen / Ihnen (Pl.)</td><td class="es-t">les</td><td class="es-t">Les escribo a mis padres.</td></tr></table>
 <div class="ex">Typisch Spanisch: Pronomen <b>und</b> Person zusammen – <span class="es-t">Le regalo flores a Laia.</span> Das <i>le</i> ist nicht doppelt gemoppelt, sondern normal.</div>`},
 {t:'mc',q:'¿Qué ___ regalamos a Laia?',opts:['le','la','les'],a:0},
 {t:'mc',q:'Mañana ___ escribo a mis abuelos.',opts:['les','los','le'],a:0},
 {t:'gap',q:'¿___ (dir) mando las fotos por WhatsApp?',a:['Te']},
 {t:'gap',q:'Mis amigos ___ (uns) han invitado a su boda.',a:['nos']},
 {t:'gap',q:'El profesor ___ (ihnen, Pl.) explica la gramática a los estudiantes.',a:['les']},
 {t:'tr',de:'Ich schenke meiner Mutter Blumen.',a:['Le regalo flores a mi madre.','A mi madre le regalo flores.']},
 {t:'order',es:'¿Qué le compramos a Marc para su cumpleaños?',de:'Was kaufen wir Marc zum Geburtstag?'}]},
{id:'l3',title:'se lo · me la · te los',desc:'zwei Pronomen hintereinander',steps:[
 {t:'info',title:'Zwei Pronomen: erst wem, dann was',html:`<p>Reihenfolge: <b>indirekt (wem) + direkt (was)</b> – beide vor dem Verb.</p>
 <p class="es-t">¿El libro? Te lo presto. · ¿Las fotos? Me las mandas luego.</p>
 <p><b>Wichtig:</b> <i>le</i> / <i>les</i> wird vor <i>lo, la, los, las</i> zu <b>se</b>:</p>
 <table><tr><td class="es-t"><s>le lo</s> → se lo</td><td class="es-t">¿El regalo? Se lo doy a Laia mañana.</td></tr>
 <tr><td class="es-t"><s>les las</s> → se las</td><td class="es-t">¿Las fotos? Se las mando a mis padres.</td></tr></table>
 <div class="ex">Beim Imperativ hängen beide hinten dran: <span class="es-t">¡Dámelo! · ¡Dáselo!</span></div>`},
 {t:'mc',q:'– ¿Me prestas tu bici? – Sí, claro, ___ presto.',opts:['te la','te lo','la te'],a:0},
 {t:'mc',q:'– ¿Le has dado el regalo a Laia? – Sí, ya ___ he dado.',opts:['se lo','le lo','lo le'],a:0},
 {t:'mc',q:'– ¿Nos mandas las fotos? – Sí, ___ mando esta noche.',opts:['os las','os los','las os'],a:0},
 {t:'gap',q:'– ¿Le compras las flores a tu madre? – Sí, ___ ___ compro mañana.',a:['se','las']},
 {t:'gap',q:'– ¿Me dejas el libro? – Sí, ___ ___ dejo.',a:['te','lo']},
 {t:'tr',de:'Die Torte? Ich bringe sie dir morgen.',a:['¿La tarta? Te la traigo mañana.']},
 {t:'listen',es:'¿Las llaves? Se las he dado a Marc.',de:'Die Schlüssel? Ich habe sie Marc gegeben.'}]},
{id:'l4',title:'Um Gefallen bitten',desc:'¿Me prestas …? · ¿Te importa …?',steps:[
 {t:'vocab',title:'Bitten & antworten',items:[['¿Me prestas …?','Leihst du mir …?','🤲'],['¿Me dejas …?','Lässt du mich … / Leihst du mir …?','🤲'],['¿Puedes …?','Kannst du …?','🙋'],['¿Te importa + Infinitiv?','Macht es dir etwas aus, …?','🙏'],['¿Te importa si …?','Stört es dich, wenn …?','🙏'],['¿Podría …?','Könnten Sie …? (höflich)','🎩'],['Sí, claro.','Ja, klar.','👍'],['¡Por supuesto!','Selbstverständlich!','👌'],['Lo siento, es que …','Tut mir leid, aber …','🙇'],['Ahora mismo no puedo.','Gerade kann ich nicht.','⏱️']]},
 {t:'mc',q:'Höflich zur Professorin: „Könnten Sie das wiederholen?“',opts:['¿Podría repetirlo?','¿Me prestas repetirlo?','¿Repítelo?'],a:0},
 {t:'mc',q:'„Stört es dich, wenn ich das Fenster aufmache?“',opts:['¿Te importa si abro la ventana?','¿Te importa abro la ventana?','¿Te molestas si abro la ventana?'],a:0},
 {t:'dialog',place:'En el piso',title:'Ein Gefallen unter Mitbewohnern',scene:'Du brauchst heute Abend Nurias Laptop-Ladekabel.',lines:[
  {you:true,opts:[{es:'Nuria, ¿me prestas tu cargador? El mío no funciona.',ok:true},{es:'Nuria, ¿te prestas mi cargador? El mío no funciona.',ok:false,why:'Du willst, dass sie <b>dir</b> leiht: <i>¿<b>me</b> prestas…?</i>'}]},
  {n:'Nuria',es:'Sí, claro. Está en mi habitación, en la mesa.',de:'Ja klar. Es liegt in meinem Zimmer auf dem Tisch.'},
  {you:true,opts:[{es:'Gracias. Te lo devuelvo mañana.',ok:true},{es:'Gracias. Lo te devuelvo mañana.',ok:false,why:'Reihenfolge: erst <i>te</i> (wem), dann <i>lo</i> (was): <b>te lo</b>.'}]},
  {n:'Nuria',es:'Vale. Oye, ¿te importa bajar la basura?',de:'Okay. Hör mal, macht es dir was aus, den Müll runterzubringen?'},
  {you:true,opts:[{es:'No, no me importa. La bajo ahora.',ok:true},{es:'No, no me importa. Lo bajo ahora.',ok:false,why:'<i>la basura</i> ist weiblich → <b>la</b> bajo.'}]}]},
 {t:'tr',de:'Kannst du mir dein Buch leihen? – Ja klar, ich leihe es dir.',a:['¿Me prestas tu libro? – Sí, claro, te lo presto.','¿Puedes prestarme tu libro? – Sí, claro, te lo presto.','¿Me puedes prestar tu libro? – Sí, claro, te lo presto.']},
 {t:'free',task:'Schreib eine WhatsApp an Marc: Du organisierst eine Überraschungsparty für Laia. Bitte ihn um zwei Gefallen und sag, was ihr ihr schenkt.',hint:'¡Hola Marc! El sábado … · ¿Puedes …? · ¿Te importa …? · Le regalamos … · ¿Se lo das tú?',focus:'le / se lo, ¿Puedes …? / ¿Te importa …?',model:'¡Hola Marc! El sábado hacemos una fiesta sorpresa para Laia en mi piso. ¿Puedes traer música? Y ¿te importa comprar la tarta? Le regalamos un libro de fotografía, porque le encanta. Lo tengo yo, pero ¿se lo das tú? ¡Gracias!'},
 {t:'speak',es:'¿Te importa si cierro la ventana? Tengo un poco de frío.',de:'Stört es dich, wenn ich das Fenster zumache? Mir ist ein bisschen kalt.'}]}
],
placement:[
 {t:'mc',q:'¿Qué ___ regalamos a Laia?',opts:['le','la','lo'],a:0},
 {t:'mc',q:'– ¿Le has dado el regalo? – Sí, ya ___ he dado.',opts:['se lo','le lo','lo le'],a:0},
 {t:'mc',q:'Dein Freund hat eine neue Stelle bekommen:',opts:['¡Enhorabuena!','¡Que te mejores!','¡Buen viaje!'],a:0},
 {t:'gap',q:'– ¿Me prestas tu bici? – Sí, ___ ___ presto.',a:['te','la']},
 {t:'mc',q:'„Stört es dich, wenn ich das Fenster öffne?“',opts:['¿Te importa si abro la ventana?','¿Te importa abro la ventana?','¿Te molesta abro la ventana?'],a:0},
 {t:'gap',q:'Mañana ___ escribo a mis padres. (ihnen)',a:['les']}],
resumen:`<h3>Glückwünsche</h3><p class="es-t">¡Felicidades! · ¡Feliz cumpleaños! · ¡Enhorabuena! · ¡Que te mejores! · ¡Que lo pases bien! · ¡Buen viaje!</p>
<h3>Wem?</h3><p class="es-t">me · te · le · nos · os · les — Le regalo flores a Laia.</p>
<h3>Zwei Pronomen</h3><p class="es-t">Te lo presto. · Me las mandas. · le/les + lo → <b>se lo</b>: Se lo doy a Laia.</p>
<h3>Bitten</h3><p class="es-t">¿Me prestas …? · ¿Puedes …? · ¿Te importa + Inf.? · ¿Te importa si …? · ¿Podría …? — Sí, claro. · Lo siento, es que …</p>`});

/* ================= UNIDAD 15 · EL FUTURO ================= */
COURSE.units.push({id:'u15',n:'15',level:'A2b',title:'El futuro',sub:'Futur (trabajaré, tendré) · Vorhersagen & Pläne · Meinung äußern · Konditional der Höflichkeit (me gustaría, podría) · por & para',
goals:['Futur: regelmäßige Formen','Futur: tendré, haré, podré, saldré …','Vorhersagen: Creo que mañana lloverá','Meinung: creo que, para mí, (no) estoy de acuerdo','Wünsche & Höflichkeit: me gustaría, podría, debería','por vs. para (Grundregeln)'],
situacion:{title:'Zukunftsgespräch mit deiner Tutorin',npc:'Dra. Vidal',scene:'Du hast ein Gespräch mit deiner Master-Tutorin an der UPC über deine Pläne nach dem Auslandssemester.',role:'Du bist Dra. Vidal, Tutorin an der UPC (FIB), sachlich und freundlich. Du siezt Jonas am Anfang, bietest dann das Du an. Frag nach seinen Plänen (¿Qué harás cuando termines el máster? ¿Te gustaría trabajar en España?), nach seiner Meinung (¿Crees que la inteligencia artificial cambiará el trabajo?) und gib Ratschläge mit deberías / podrías.',goal:'Sprich über deine Pläne im Futur (trabajaré, viviré…), äußere deine Meinung (creo que…, para mí…), und benutze me gustaría / podría.'},
lessons:[
{id:'l1',title:'Das Futur',desc:'trabajaré · viviremos',steps:[
 {t:'info',title:'Futur: einfach anhängen',html:`<p>Infinitiv + Endung – gleich für -ar, -er, -ir:</p>
 <table><tr><th></th><th>trabajar</th></tr>
 <tr><td>yo</td><td class="es-t">trabajar<b>é</b></td></tr><tr><td>tú</td><td class="es-t">trabajar<b>ás</b></td></tr><tr><td>él / ella / usted</td><td class="es-t">trabajar<b>á</b></td></tr>
 <tr><td>nosotros</td><td class="es-t">trabajar<b>emos</b></td></tr><tr><td>vosotros</td><td class="es-t">trabajar<b>éis</b></td></tr><tr><td>ellos / ustedes</td><td class="es-t">trabajar<b>án</b></td></tr></table>
 <div class="ex">Im Alltag sagt man für feste Pläne oft <i>ir a + Infinitiv</i> (Unidad 8). Das Futur klingt etwas ferner: Vorhersagen, Versprechen, Träume.</div>`},
 {t:'conj',verb:'vivir',de:'leben / wohnen',tense:'Futur',forms:['viviré','vivirás','vivirá','viviremos','viviréis','vivirán']},
 {t:'mc',q:'El año que viene ___ en Alemania. (yo, trabajar)',opts:['trabajaré','trabajeré','trabajo será'],a:0},
 {t:'gap',q:'Mañana ___ (llover) en Barcelona.',a:['lloverá']},
 {t:'gap',q:'En 2030 mis amigos y yo ___ (vivir) en otra ciudad.',a:['viviremos']},
 {t:'gap',q:'¿___ (tú, venir) a la fiesta? – Sí, ___ (ir) seguro.',a:['Vendrás','iré'],hint:'<i>venir</i> ist unregelmäßig: vendr-.'},
 {t:'tr',de:'Morgen werde ich viel lernen.',a:['Mañana estudiaré mucho.','Mañana aprenderé mucho.']},
 {t:'listen',es:'El próximo verano viajaremos por Andalucía.',de:'Nächsten Sommer werden wir durch Andalusien reisen.'}]},
{id:'l2',title:'Unregelmäßige Futurformen',desc:'tendré · haré · podré',steps:[
 {t:'info',title:'Neuer Stamm, gleiche Endungen',html:`<table><tr><th>Infinitiv</th><th>Stamm</th><th>yo</th></tr>
 <tr><td>tener</td><td class="es-t">tendr-</td><td class="es-t">tendré</td></tr>
 <tr><td>poner</td><td class="es-t">pondr-</td><td class="es-t">pondré</td></tr>
 <tr><td>salir</td><td class="es-t">saldr-</td><td class="es-t">saldré</td></tr>
 <tr><td>venir</td><td class="es-t">vendr-</td><td class="es-t">vendré</td></tr>
 <tr><td>poder</td><td class="es-t">podr-</td><td class="es-t">podré</td></tr>
 <tr><td>saber</td><td class="es-t">sabr-</td><td class="es-t">sabré</td></tr>
 <tr><td>hacer</td><td class="es-t">har-</td><td class="es-t">haré</td></tr>
 <tr><td>decir</td><td class="es-t">dir-</td><td class="es-t">diré</td></tr>
 <tr><td>querer</td><td class="es-t">querr-</td><td class="es-t">querré</td></tr>
 <tr><td>haber (hay)</td><td class="es-t">habr-</td><td class="es-t">habrá</td></tr></table>`},
 {t:'conj',verb:'tener',de:'haben',tense:'Futur',forms:['tendré','tendrás','tendrá','tendremos','tendréis','tendrán']},
 {t:'match',q:'Infinitiv → Futur (yo)',pairs:[['hacer','haré'],['salir','saldré'],['poder','podré'],['decir','diré'],['saber','sabré']]},
 {t:'gap',q:'Cuando termine el máster, ___ (yo, tener) más tiempo.',a:['tendré']},
 {t:'gap',q:'¿Qué ___ (tú, hacer) el fin de semana?',a:['harás']},
 {t:'gap',q:'Creo que mañana ___ (haber) mucho tráfico.',a:['habrá']},
 {t:'mc',q:'No te preocupes, te lo ___ mañana. (decir)',opts:['diré','deciré','dicré'],a:0},
 {t:'tr',de:'Nächstes Jahr werde ich mehr Geld haben.',a:['El año que viene tendré más dinero.','El próximo año tendré más dinero.']}]},
{id:'l3',title:'Meinung & Vorhersagen',desc:'creo que · para mí · estoy de acuerdo',steps:[
 {t:'vocab',title:'Meinung äußern',items:[['creo que …','ich glaube, dass …','💭'],['pienso que …','ich denke, dass …','💭'],['para mí, …','für mich …','🙋'],['en mi opinión, …','meiner Meinung nach …','🗨️'],['estoy de acuerdo','ich bin einverstanden','🤝'],['no estoy de acuerdo','ich bin nicht einverstanden','🙅'],['tienes razón','du hast recht','✅'],['depende','kommt darauf an','⚖️'],['seguramente','wahrscheinlich / sicher','🎯'],['quizás','vielleicht','🤔'],['dentro de diez años','in zehn Jahren','🔮'],['la inteligencia artificial','die künstliche Intelligenz','🤖']]},
 {t:'info',title:'Vorhersagen mit Futur',html:`<p class="es-t">Creo que dentro de diez años trabajaremos menos.</p>
 <p class="es-t">Seguramente habrá más coches eléctricos.</p>
 <p class="es-t">Para mí, la inteligencia artificial cambiará muchas profesiones.</p>
 <div class="ex"><i>Creo que</i> + Indikativ (also Futur oder Präsens). Bei <b>no creo que</b> braucht man den Subjuntivo – den lernst du in B1.</div>`},
 {t:'mc',q:'– Creo que el teletrabajo es mejor. – Du siehst es genauso:',opts:['Estoy de acuerdo.','Soy de acuerdo.','Tengo acuerdo.'],a:0},
 {t:'mc',q:'„Du hast recht.“',opts:['Tienes razón.','Eres razón.','Estás razón.'],a:0},
 {t:'gap',q:'Creo que dentro de veinte años la gente ___ (viajar) menos en avión.',a:['viajará']},
 {t:'read',title:'¿Cómo trabajaremos en 2040?',text:`Muchos expertos creen que el trabajo cambiará mucho en los próximos años. {Seguramente|Wahrscheinlich} trabajaremos menos horas, porque la inteligencia artificial hará muchas tareas {repetitivas|sich wiederholende}. Las oficinas serán más pequeñas y muchas personas trabajarán desde casa o desde otros países.

Pero no todos están de acuerdo. Algunos piensan que habrá menos {puestos de trabajo|Arbeitsplätze} y que será más difícil encontrar empleo. Otros dicen que aparecerán profesiones nuevas que hoy no podemos imaginar. Lo que está claro es que tendremos que aprender toda la vida.`,de:'Viele Experten glauben, dass sich die Arbeit in den nächsten Jahren stark verändern wird. Wahrscheinlich werden wir weniger Stunden arbeiten, weil die künstliche Intelligenz viele sich wiederholende Aufgaben erledigen wird. Die Büros werden kleiner sein und viele Menschen werden von zu Hause oder aus anderen Ländern arbeiten.\n\nAber nicht alle sind einverstanden. Einige denken, dass es weniger Arbeitsplätze geben wird und dass es schwieriger sein wird, eine Stelle zu finden. Andere sagen, dass neue Berufe entstehen werden, die wir uns heute nicht vorstellen können. Klar ist: Wir werden ein Leben lang lernen müssen.'},
 {t:'mc',q:'Laut Text: Was ist sicher?',opts:['Tendremos que aprender toda la vida.','Habrá menos trabajo.','Las oficinas serán más grandes.'],a:0},
 {t:'free',task:'Wie wird dein Leben in 10 Jahren sein? 4–5 Sätze mit Futur und einer Meinung.',hint:'Dentro de diez años … · Creo que … · Seguramente … · Para mí …',focus:'Futur (regelmäßig & unregelmäßig), creo que',model:'Dentro de diez años viviré en Múnich o en Barcelona. Creo que trabajaré como consultor de IT y tendré un equipo pequeño. Seguramente hablaré español muy bien. Para mí, lo más importante será tener tiempo para mi familia y para viajar.'}]},
{id:'l4',title:'Höflich & por/para',desc:'me gustaría · podría · por o para',steps:[
 {t:'info',title:'Konditional der Höflichkeit',html:`<p>Infinitiv + <b>-ía</b>-Endungen (gleiche Stämme wie das Futur!):</p>
 <table><tr><td class="es-t">gustar → me gustaría</td><td>ich hätte gern / ich würde gern</td></tr>
 <tr><td class="es-t">poder → podría</td><td>ich könnte / könnten Sie</td></tr>
 <tr><td class="es-t">deber → deberías</td><td>du solltest</td></tr>
 <tr><td class="es-t">tener → tendría</td><td>ich hätte</td></tr></table>
 <p class="es-t">Me gustaría trabajar en España. · ¿Podría ayudarme? · Deberías hablar con tu jefe.</p>`},
 {t:'mc',q:'„Ich würde gern in Spanien arbeiten.“',opts:['Me gustaría trabajar en España.','Me gustará trabajar en España.','Me gusto trabajar en España.'],a:0},
 {t:'gap',q:'¿___ (usted, poder) cerrar la puerta, por favor?',a:['Podría']},
 {t:'info',title:'por oder para?',html:`<table><tr><th>para</th><th>por</th></tr>
 <tr><td>Ziel, Zweck: <span class="es-t">Estudio para trabajar en España.</span></td><td>Grund: <span class="es-t">Gracias por tu ayuda.</span></td></tr>
 <tr><td>Empfänger: <span class="es-t">El regalo es para Laia.</span></td><td>durch / entlang: <span class="es-t">Paseamos por el centro.</span></td></tr>
 <tr><td>Frist: <span class="es-t">El informe es para el lunes.</span></td><td>Tageszeit: <span class="es-t">por la mañana</span></td></tr>
 <tr><td>Richtung: <span class="es-t">Salgo para Madrid.</span></td><td>Mittel, Preis: <span class="es-t">por teléfono · por 10 euros</span></td></tr></table>`},
 {t:'mc',q:'Este regalo es ___ ti.',opts:['para','por'],a:0,keep:true},
 {t:'mc',q:'Gracias ___ todo.',opts:['por','para'],a:0,keep:true},
 {t:'mc',q:'Estudio español ___ vivir en Barcelona.',opts:['para','por'],a:0,keep:true},
 {t:'gap',q:'Te llamo ___ teléfono ___ la tarde.',a:['por','por']},
 {t:'gap',q:'El trabajo es ___ el viernes.',a:['para']},
 {t:'tr',de:'Danke für die Einladung! Ich würde gern kommen.',a:['¡Gracias por la invitación! Me gustaría ir.','¡Gracias por la invitación! Me gustaría venir.']},
 {t:'speak',es:'Me gustaría trabajar en Barcelona durante un par de años.',de:'Ich würde gern ein paar Jahre in Barcelona arbeiten.'}]}
],
placement:[
 {t:'gap',q:'El año que viene ___ (yo, tener) más tiempo.',a:['tendré']},
 {t:'mc',q:'Creo que mañana ___ en Barcelona.',opts:['lloverá','llueverá','llovió mañana'],a:0},
 {t:'mc',q:'„Ich würde gern in Spanien arbeiten.“',opts:['Me gustaría trabajar en España.','Me gustará trabajar en España.','Me gusto trabajar en España.'],a:0},
 {t:'mc',q:'Gracias ___ tu ayuda.',opts:['por','para'],a:0},
 {t:'gap',q:'¿Qué ___ (tú, hacer) el fin de semana? (Futur)',a:['harás']},
 {t:'mc',q:'„Du hast recht.“',opts:['Tienes razón.','Eres razón.','Estás razón.'],a:0}],
resumen:`<h3>Futur</h3><p class="es-t">trabajaré · trabajarás · trabajará · trabajaremos · trabajaréis · trabajarán</p>
<p class="es-t">tendré · pondré · saldré · vendré · podré · sabré · haré · diré · querré · habrá</p>
<h3>Meinung</h3><p class="es-t">Creo que … · Pienso que … · Para mí … · Estoy de acuerdo. · Tienes razón. · Depende.</p>
<h3>Höflich</h3><p class="es-t">Me gustaría … · ¿Podría …? · Deberías …</p>
<h3>por / para</h3><table><tr><td class="es-t">para: Ziel, Empfänger, Frist</td><td class="es-t">por: Grund, durch, Tageszeit, Mittel</td></tr></table>`});
