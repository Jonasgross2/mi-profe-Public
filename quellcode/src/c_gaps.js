/* ================= A2 · TEIL 2: Lücken aus der „Systematischen Grammatik“ des Kursbuchs schließen ================= */

/* ================= UNIDAD 11 · PEQUEÑAS PALABRAS ================= */
COURSE.units.push({id:'g1',n:'11',level:'A2b',title:'Pequeñas palabras',sub:'Kleine Wörter, große Wirkung: alguien/nadie, algo/nada, algún/ningún · Kurzformen (buen, gran, primer) · Superlativ · conmigo/contigo · qué oder cuál',
goals:['algo / nada · alguien / nadie','alguno / ninguno (algún, ningún)','doppelte Verneinung: No hay nadie.','Kurzformen: buen, mal, gran, primer, tercer','Superlativ: el más … de · -ísimo','Pronomen nach Präposition: para mí, conmigo','qué oder cuál?'],
situacion:{title:'Verlorene Sachen im Coworking',npc:'Recepción',scene:'Du hast im Coworking-Space in Poblenou deine Jacke und dein Ladekabel liegen lassen. Du fragst am Empfang.',role:'Du bist Marta vom Empfang eines Coworking-Space in Barcelona, freundlich, du duzt Jonas. Er sucht verlorene Sachen. Benutze viele Indefinitpronomen: ¿Has dejado algo? No ha llegado nada. ¿Alguien te ha visto? No hay ningún cargador… Frag nach Details (¿Cuál es tu chaqueta, la negra o la azul? ¿Qué marca es?).',goal:'Frag, ob jemand etwas abgegeben hat (¿Alguien ha dejado…? ¿Hay algún…?), beschreib deine Sachen, und benutze einmal qué und einmal cuál.'},
lessons:[
{id:'l1',title:'Etwas & nichts, jemand & niemand',desc:'algo · nada · alguien · nadie',steps:[
 {t:'vocab',title:'Unbestimmte Wörter',items:[['algo','etwas','✨'],['nada','nichts','🚫'],['alguien','jemand','🧑'],['nadie','niemand','👻'],['siempre','immer','🔁'],['nunca','nie','⛔'],['también','auch','➕'],['tampoco','auch nicht','➖'],['todo','alles','🌐'],['otro / otra','ein anderer / eine andere','🔀']]},
 {t:'info',title:'Doppelt verneinen ist richtig!',html:`<table><tr><th>positiv</th><th>negativ</th></tr>
 <tr><td class="es-t">¿Quieres algo?</td><td class="es-t">No quiero nada.</td></tr>
 <tr><td class="es-t">¿Hay alguien en casa?</td><td class="es-t">No hay nadie.</td></tr>
 <tr><td class="es-t">Siempre llego tarde.</td><td class="es-t">No llego nunca tarde. / Nunca llego tarde.</td></tr></table>
 <div class="ex">Im Deutschen falsch, im Spanischen Pflicht: Steht <i>nada, nadie, nunca</i> <b>nach</b> dem Verb, braucht man <b>no</b> davor: <span class="es-t">No veo nada.</span> Steht es <b>vor</b> dem Verb, kein <i>no</i>: <span class="es-t">Nadie lo sabe.</span></div>
 <p><b>Achtung:</b> <span class="es-t">otro</span> nie mit <i>un</i>: <span class="es-t">otro café</span> (nicht <s>un otro café</s>).</p>`},
 {t:'mc',q:'– ¿Hay alguien en la oficina? – No, no hay ___.',opts:['nadie','alguien','nada'],a:0},
 {t:'mc',q:'– ¿Quieres algo de beber? – No, gracias, no quiero ___.',opts:['nada','algo','nadie'],a:0},
 {t:'mc',q:'„Noch einen Kaffee, bitte.“',opts:['Otro café, por favor.','Un otro café, por favor.','Uno más otro café, por favor.'],a:0},
 {t:'gap',q:'___ sabe dónde están las llaves. (niemand)',a:['Nadie']},
 {t:'gap',q:'No he comido ___ en todo el día. (nichts)',a:['nada']},
 {t:'tr',de:'Ich sehe niemanden.',a:['No veo a nadie.','No veo nadie.']},
 {t:'tr',de:'Hat jemand angerufen?',a:['¿Ha llamado alguien?','¿Alguien ha llamado?']},
 {t:'listen',es:'No hay nadie en la recepción.',de:'Es ist niemand am Empfang.'}]},
{id:'l2',title:'algún & ningún',desc:'¿Hay algún banco cerca? – No, ninguno.',steps:[
 {t:'info',title:'alguno / ninguno – vor Nomen verkürzt',html:`<table><tr><th></th><th>männlich</th><th>weiblich</th></tr>
 <tr><td>irgendein(e)</td><td class="es-t">algún banco · alguno</td><td class="es-t">alguna farmacia</td></tr>
 <tr><td>kein(e)</td><td class="es-t">ningún problema · ninguno</td><td class="es-t">ninguna idea</td></tr></table>
 <p>Vor einem <b>männlichen Nomen</b> fällt das <b>-o</b> weg: <span class="es-t">algún día · ningún problema</span>. Allein stehend: <span class="es-t">– ¿Tienes algún libro en español? – No, no tengo ninguno.</span></p>
 <div class="ex"><i>ninguno</i> steht fast immer im Singular: <span class="es-t">No tengo ningún amigo aquí.</span> (nicht <s>ningunos amigos</s>)</div>`},
 {t:'mc',q:'¿Hay ___ supermercado cerca de aquí?',opts:['algún','alguno','alguna'],a:0},
 {t:'mc',q:'No hay ___ problema.',opts:['ningún','ninguno','ninguna'],a:0},
 {t:'gap',q:'– ¿Tienes alguna pregunta? – No, no tengo ___.',a:['ninguna']},
 {t:'gap',q:'___ día quiero vivir en Barcelona. (irgendwann)',a:['Algún']},
 {t:'tr',de:'Ich habe keine Idee.',a:['No tengo ninguna idea.','No tengo ni idea.']},
 {t:'dialog',place:'Coworking en Poblenou',title:'Verlorene Sachen',scene:'Du suchst deine Jacke und dein Ladekabel.',lines:[
  {n:'Marta',es:'¡Hola! ¿Necesitas algo?',de:'Hallo! Brauchst du etwas?'},
  {you:true,opts:[{es:'Sí, ayer dejé mi chaqueta aquí. ¿Alguien ha traído una chaqueta negra?',ok:true},{es:'Sí, ayer dejé mi chaqueta aquí. ¿Nadie ha traído una chaqueta negra?',ok:false,why:'Bei einer offenen Frage: <b>alguien</b> (jemand).'}]},
  {n:'Marta',es:'Mmm, hay dos chaquetas negras. ¿Cuál es la tuya?',de:'Hm, es gibt zwei schwarze Jacken. Welche ist deine?'},
  {you:true,opts:[{es:'La de cuero. ¿Y hay algún cargador de portátil?',ok:true},{es:'La de cuero. ¿Y hay alguno cargador de portátil?',ok:false,why:'Vor einem männlichen Nomen: <b>algún</b> cargador.'}]},
  {n:'Marta',es:'No, lo siento, no hay ninguno.',de:'Nein, tut mir leid, es gibt keins.'},
  {you:true,opts:[{es:'Vale, no pasa nada. ¡Gracias!',ok:true},{es:'Vale, pasa nada. ¡Gracias!',ok:false,why:'Doppelte Verneinung: <b>no</b> pasa nada.'}]}]}]},
{id:'l3',title:'buen, gran, primer & der Superlativ',desc:'un buen día · el más alto de · carísimo',steps:[
 {t:'info',title:'Kurzformen vor männlichen Nomen',html:`<table><tr><th>normal</th><th>vor männl. Nomen (Sg.)</th></tr>
 <tr><td class="es-t">bueno</td><td class="es-t">un buen trabajo</td></tr>
 <tr><td class="es-t">malo</td><td class="es-t">un mal día</td></tr>
 <tr><td class="es-t">primero / tercero</td><td class="es-t">el primer / tercer piso</td></tr>
 <tr><td class="es-t">grande</td><td class="es-t">una gran ciudad (vor <b>jedem</b> Nomen!)</td></tr></table>
 <div class="ex"><b>gran</b> vor dem Nomen = großartig: <span class="es-t">un gran hombre</span>. <b>grande</b> nach dem Nomen = groß (Größe): <span class="es-t">un hombre grande</span>.</div>`},
 {t:'mc',q:'Hoy hace ___ tiempo.',opts:['buen','bueno','buena'],a:0},
 {t:'mc',q:'Vivo en el ___ piso.',opts:['tercer','tercero','tres'],a:0},
 {t:'mc',q:'Barcelona es una ___ ciudad.',opts:['gran','grande de','grano'],a:0},
 {t:'info',title:'Der Superlativ',html:`<p><b>der/die/das …ste</b>: <span class="es-t">el / la / los / las + más + Adjektiv + de</span></p>
 <p class="es-t">La Sagrada Familia es el edificio más famoso de Barcelona.</p>
 <p>Unregelmäßig: <span class="es-t">el mejor (beste) · el peor (schlechteste) · el mayor (älteste) · el menor (jüngste)</span></p>
 <p><b>Sehr, sehr …</b>: <span class="es-t">-ísimo</span> → <span class="es-t">caro → carísimo · bueno → buenísimo · fácil → facilísimo · rico → riquísimo</span></p>`},
 {t:'mc',q:'Es el restaurante ___ caro ___ la ciudad.',opts:['más … de','más … que','muy … de'],a:0},
 {t:'gap',q:'Mi hermano es el ___ de la familia. (der Jüngste)',a:['menor|más joven']},
 {t:'gap',q:'Este piso es muy, muy caro: es ___. (-ísimo)',a:['carísimo']},
 {t:'tr',de:'Das ist das beste Café des Viertels.',a:['Es el mejor café del barrio.','Este es el mejor café del barrio.','Es la mejor cafetería del barrio.']},
 {t:'listen',es:'La paella de mi abuela está buenísima.',de:'Die Paella meiner Oma ist superlecker.'}]},
{id:'l4',title:'conmigo & qué oder cuál',desc:'para mí · contigo · ¿Cuál prefieres?',steps:[
 {t:'info',title:'Pronomen nach Präpositionen',html:`<p>Nach <i>para, de, a, sin, en …</i> benutzt man <span class="es-t">mí, ti, él, ella, usted, nosotros, vosotros, ellos</span>:</p>
 <p class="es-t">Este regalo es para ti. · ¿Vienes sin mí? · Hablamos de ella.</p>
 <p><b>Sonderformen mit con:</b> <span class="es-t">conmigo</span> (mit mir) · <span class="es-t">contigo</span> (mit dir) – sonst normal: <span class="es-t">con él, con nosotros</span>.</p>
 <div class="ex"><i>mí</i> mit Akzent (mich/mir) ≠ <i>mi</i> ohne Akzent (mein). <i>ti</i> hat nie einen Akzent.</div>`},
 {t:'mc',q:'¿Quieres venir al cine ___?',opts:['conmigo','con mí','con me'],a:0},
 {t:'mc',q:'Este café es para ___.',opts:['ti','tú','te'],a:0},
 {t:'gap',q:'– ¿Puedo ir ___? (mit dir) – ¡Claro!',a:['contigo']},
 {t:'info',title:'¿Qué? oder ¿Cuál?',html:`<table><tr><th>¿Qué …?</th><th>¿Cuál / Cuáles …?</th></tr>
 <tr><td>vor einem Nomen: <span class="es-t">¿Qué libro lees?</span></td><td>Auswahl aus einer Gruppe: <span class="es-t">¿Cuál prefieres, el rojo o el azul?</span></td></tr>
 <tr><td>Definition: <span class="es-t">¿Qué es la Diada?</span></td><td>mit ser + Info: <span class="es-t">¿Cuál es tu número? ¿Cuál es la capital?</span></td></tr></table>
 <div class="ex">Typischer Fehler: „Was ist deine Adresse?“ = <span class="es-t">¿Cuál es tu dirección?</span> (nicht <s>¿Qué es tu dirección?</s>)</div>`},
 {t:'mc',q:'¿___ es tu número de teléfono?',opts:['Cuál','Qué'],a:0,keep:true},
 {t:'mc',q:'¿___ películas te gustan?',opts:['Qué','Cuál'],a:0,keep:true},
 {t:'mc',q:'Hay dos camisetas. ¿___ te gusta más?',opts:['Cuál','Qué'],a:0,keep:true},
 {t:'gap',q:'¿___ es una „calçotada“? – Es una fiesta catalana con cebollas a la brasa.',a:['Qué']},
 {t:'tr',de:'Was ist deine E-Mail-Adresse?',a:['¿Cuál es tu correo electrónico?','¿Cuál es tu dirección de correo electrónico?','¿Cuál es tu email?','¿Cuál es tu e-mail?']}]}
],
placement:[
 {t:'mc',q:'– ¿Hay alguien en casa? – No, no hay ___.',opts:['nadie','alguien','nada'],a:0},
 {t:'mc',q:'No hay ___ problema.',opts:['ningún','ninguno','ninguna'],a:0},
 {t:'mc',q:'¿Quieres venir ___?',opts:['conmigo','con mí','con me'],a:0},
 {t:'mc',q:'¿___ es tu dirección?',opts:['Cuál','Qué'],a:0},
 {t:'gap',q:'Es el edificio ___ alto ___ la ciudad.',a:['más','de']},
 {t:'mc',q:'Vivo en el ___ piso.',opts:['tercer','tercero','tres'],a:0}],
resumen:`<h3>Unbestimmte Wörter</h3><p class="es-t">algo ↔ nada · alguien ↔ nadie · siempre ↔ nunca · algún/alguna ↔ ningún/ninguna</p><p class="es-t">No hay nadie. · No quiero nada. · Nadie lo sabe. · otro café (ohne un!)</p>
<h3>Kurzformen</h3><p class="es-t">un buen día · un mal momento · el primer / tercer piso · una gran ciudad</p>
<h3>Superlativ</h3><p class="es-t">el más famoso de … · el mejor / el peor / el mayor / el menor · carísimo · buenísimo</p>
<h3>Nach Präposition</h3><p class="es-t">para mí / ti / él … · conmigo · contigo</p>
<h3>qué / cuál</h3><p class="es-t">¿Qué libro? · ¿Qué es …? (Definition) — ¿Cuál prefieres? · ¿Cuál es tu número?</p>`});

/* ================= UNIDAD 12 · FECHAS, ACENTOS Y ACCIONES ================= */
COURSE.units.push({id:'g2',n:'12',level:'A2b',title:'Fechas y acciones',sub:'Monate & Datum · Akzentregeln (wann schreibt man á?) · Verb + Infinitiv/Gerundium: acabar de, volver a, dejar de, empezar a, seguir + -ando',
goals:['Monate, Jahreszeiten, Datum sagen & schreiben','Jahreszahlen (dos mil veinticinco)','Betonungsregeln & wann ein Akzent nötig ist','acabar de + Infinitiv (gerade getan haben)','volver a / dejar de / empezar a + Infinitiv','seguir + Gerundium · llevar + Zeit + Gerundium'],
situacion:{title:'Termine beim Sprachkurs',npc:'Secretaría',scene:'Du meldest dich im Sprachenzentrum der UPC für einen neuen Spanischkurs an und klärst Termine.',role:'Du bist die Sekretärin im Servei de Llengües der UPC, freundlich und effizient. Du siezt Jonas. Frag nach Geburtsdatum (¿Cuál es su fecha de nacimiento?), seit wann er Spanisch lernt (¿Cuánto tiempo lleva estudiando español?), ob er schon einmal einen Kurs gemacht hat. Nenne Kursdaten (del 15 de enero al 30 de marzo) und das Datum des Einstufungstests.',goal:'Nenne dein Geburtsdatum, sag, wie lange du schon Spanisch lernst (llevo … estudiando), und frag nach Anfangs- und Enddatum des Kurses.'},
lessons:[
{id:'l1',title:'Monate & Datum',desc:'el 5 de octubre de 2026',steps:[
 {t:'vocab',title:'Monate & Jahreszeiten',items:[['enero','Januar','❄️'],['febrero','Februar','❄️'],['marzo','März','🌱'],['abril','April','🌷'],['mayo','Mai','🌸'],['junio','Juni','☀️'],['julio','Juli','🏖️'],['agosto','August','🏖️'],['septiembre','September','🍂'],['octubre','Oktober','🍂'],['noviembre','November','🌧️'],['diciembre','Dezember','🎄'],['la primavera','der Frühling','🌷'],['el verano','der Sommer','☀️'],['el otoño','der Herbst','🍁'],['el invierno','der Winter','⛄']]},
 {t:'info',title:'So sagt man das Datum',html:`<p class="es-t" style="font-size:18px">Hoy es (el) cinco de octubre de dos mil veintiséis.</p>
 <table><tr><td>Datum</td><td class="es-t">el + Zahl + de + Monat (+ de + Jahr)</td></tr>
 <tr><td>am 1.</td><td class="es-t">el uno / el primero de mayo</td></tr>
 <tr><td>Welches Datum ist heute?</td><td class="es-t">¿Qué fecha es hoy? · ¿A qué día estamos?</td></tr>
 <tr><td>im Mai</td><td class="es-t">en mayo</td></tr>
 <tr><td>Jahreszahl</td><td class="es-t">1998 = mil novecientos noventa y ocho · 2026 = dos mil veintiséis</td></tr></table>
 <div class="ex">Monate schreibt man <b>klein</b>: <i>octubre</i>, nicht <i>Octubre</i>. Und Datum ohne Punkt-Zahl: <span class="es-t">el 5 de octubre</span>, nicht „el 5. de octubre“.</div>`},
 {t:'mc',q:'„am 12. Oktober“',opts:['el doce de octubre','en doce octubre','el doceavo de octubre'],a:0},
 {t:'mc',q:'2026 =',opts:['dos mil veintiséis','veinte veintiséis','dos mil y veintiséis'],a:0},
 {t:'gap',q:'Mi cumpleaños es ___ ___ de marzo. (am 3.)',a:['el','tres']},
 {t:'gap',q:'En España las vacaciones de verano son en julio y ___. (August)',a:['agosto']},
 {t:'tr',de:'Ich bin am 7. Juni geboren.',a:['Nací el siete de junio.']},
 {t:'listen',es:'El curso empieza el quince de enero.',de:'Der Kurs beginnt am 15. Januar.'},
 {t:'speak',es:'Hoy es lunes, cinco de octubre de dos mil veintiséis.',de:'Heute ist Montag, der 5. Oktober 2026.'}]},
{id:'l2',title:'Akzente: wann á, é, í?',desc:'Betonung & Akzentregeln',steps:[
 {t:'info',title:'Drei Regeln für die Betonung',html:`<p><b>1.</b> Endet ein Wort auf <b>Vokal, -n oder -s</b> → Betonung auf der <b>vorletzten</b> Silbe: <span class="es-t">ca<b>sa</b> · ha<b>blan</b> · <b>li</b>bros</span></p>
 <p><b>2.</b> Endet es auf einen <b>anderen Konsonanten</b> → Betonung auf der <b>letzten</b> Silbe: <span class="es-t">ha<b>blar</b> · ciu<b>dad</b> · espa<b>ñol</b></span></p>
 <p><b>3.</b> Wird ein Wort <b>anders</b> betont → <b>Akzent</b>: <span class="es-t">ca<b>fé</b> · in<b>glés</b> · <b>fá</b>cil · <b>mú</b>sica · ha<b>bló</b></span></p>
 <div class="ex">Wörter, die auf der drittletzten Silbe betont sind, haben <b>immer</b> einen Akzent: <span class="es-t">teléfono · rápido · miércoles · América</span>.</div>
 <p><b>Akzent unterscheidet Wörter:</b> <span class="es-t">tú (du) / tu (dein) · él (er) / el (der) · sí (ja) / si (wenn) · mí / mi · más / mas</span>. Fragewörter immer mit Akzent: <span class="es-t">qué, cómo, dónde, cuándo</span>.</p>`},
 {t:'mc',q:'„Telefon“ – Betonung auf der drittletzten Silbe (te-<b>lé</b>-fo-no). Wie schreibt man es?',opts:['teléfono','telefono','telefóno'],a:0,keep:true,why:'Drittletzte Silbe betont → <b>immer</b> Akzent.'},
 {t:'mc',q:'„Er kommt aus Spanien.“',opts:['Él es de España.','El es de España.'],a:0,keep:true},
 {t:'mc',q:'„Ist das dein Buch?“',opts:['¿Es tu libro?','¿Es tú libro?'],a:0,keep:true},
 {t:'mc',q:'Welche Schreibung ist richtig? (Betonung auf der ersten Silbe)',opts:['música','musica','musíca'],a:0},
 {t:'match',q:'Mit oder ohne Akzent?',pairs:[['ja','sí'],['wenn','si'],['du','tú'],['dein','tu'],['er','él']]},
 {t:'gap',q:'¿___ vives? – En Barcelona. (Wo?)',a:['Dónde']},
 {t:'tr',de:'Ja, ich trinke gern Kaffee.',a:['Sí, me gusta tomar café.','Sí, me gusta el café.','Sí, me gusta beber café.']}]},
{id:'l3',title:'Gerade, wieder, nicht mehr',desc:'acabar de · volver a · dejar de · empezar a',steps:[
 {t:'info',title:'Verb + Präposition + Infinitiv',html:`<table><tr><th>Ausdruck</th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">acabar de + Inf.</td><td>gerade etwas getan haben</td><td class="es-t">Acabo de llegar.</td></tr>
 <tr><td class="es-t">volver a + Inf.</td><td>etwas wieder tun</td><td class="es-t">Vuelvo a llamarte luego.</td></tr>
 <tr><td class="es-t">dejar de + Inf.</td><td>mit etwas aufhören</td><td class="es-t">He dejado de fumar.</td></tr>
 <tr><td class="es-t">empezar a + Inf.</td><td>anfangen, etwas zu tun</td><td class="es-t">Empecé a estudiar español en 2024.</td></tr>
 <tr><td class="es-t">tener que + Inf.</td><td>müssen</td><td class="es-t">Tengo que irme.</td></tr></table>`},
 {t:'mc',q:'„Ich bin gerade angekommen.“',opts:['Acabo de llegar.','Acabo llegar.','He acabado a llegar.'],a:0},
 {t:'mc',q:'„Ich habe aufgehört, Fleisch zu essen.“',opts:['He dejado de comer carne.','He dejado comer carne.','He parado a comer carne.'],a:0},
 {t:'gap',q:'Mañana vuelvo ___ intentarlo.',a:['a']},
 {t:'gap',q:'¿Cuándo empezaste ___ trabajar en EY?',a:['a']},
 {t:'gap',q:'El tren acaba ___ salir. ¡Qué mala suerte!',a:['de']},
 {t:'tr',de:'Ich habe gerade gegessen.',a:['Acabo de comer.']},
 {t:'listen',es:'Acabo de terminar el informe, ahora vuelvo a revisarlo.',de:'Ich habe gerade den Bericht fertig gemacht, jetzt prüfe ich ihn noch mal.'}]},
{id:'l4',title:'Seit wann? – llevar & seguir',desc:'llevo dos años estudiando · sigo viviendo aquí',steps:[
 {t:'info',title:'Dauer & Fortsetzung mit dem Gerundium',html:`<table><tr><td class="es-t">llevar + Zeit + Gerundium</td><td>etwas seit … tun</td><td class="es-t">Llevo dos años estudiando español.</td></tr>
 <tr><td class="es-t">seguir + Gerundium</td><td>immer noch / weiterhin</td><td class="es-t">Sigo viviendo en Gràcia.</td></tr>
 <tr><td class="es-t">estar + Gerundium</td><td>gerade dabei sein</td><td class="es-t">Estoy leyendo.</td></tr></table>
 <div class="ex">Drei Wege für „seit“: <span class="es-t">Llevo dos años aquí. = Vivo aquí desde hace dos años. = Hace dos años que vivo aquí.</span></div>`},
 {t:'conj',verb:'llevar',de:'(Dauer) – Präsens',forms:['llevo','llevas','lleva','llevamos','lleváis','llevan']},
 {t:'mc',q:'„Ich lerne seit drei Monaten Spanisch.“',opts:['Llevo tres meses estudiando español.','Llevo tres meses estudiar español.','Estoy tres meses estudiando español.'],a:0},
 {t:'mc',q:'„Wohnst du immer noch in Mannheim?“',opts:['¿Sigues viviendo en Mannheim?','¿Sigues vivir en Mannheim?','¿Sigues a vivir en Mannheim?'],a:0},
 {t:'gap',q:'Mi hermana ___ (seguir) trabajando en el mismo banco.',a:['sigue']},
 {t:'gap',q:'¿Cuánto tiempo ___ (tú, llevar) esperando?',a:['llevas']},
 {t:'tr',de:'Ich wohne seit einem Monat in Barcelona.',a:['Llevo un mes viviendo en Barcelona.','Vivo en Barcelona desde hace un mes.','Hace un mes que vivo en Barcelona.','Llevo un mes en Barcelona.']},
 {t:'free',task:'Stell dich der Sekretärin im Sprachenzentrum vor (4–5 Sätze): Geburtsdatum, seit wann du in Barcelona bist, seit wann du Spanisch lernst, was du gerade erst gemacht hast.',hint:'Nací el … · Llevo … en Barcelona · Llevo … estudiando español · Acabo de …',focus:'Datum, llevar + Gerundium, acabar de',model:'Me llamo Jonas Gross y nací el … de … de … . Llevo un mes viviendo en Barcelona. Empecé a estudiar español en la universidad en Alemania, así que llevo unos dos años estudiándolo. Acabo de terminar el curso A2 y ahora quiero seguir aprendiendo.'}]}
],
placement:[
 {t:'mc',q:'„am 12. Oktober“',opts:['el doce de octubre','en doce octubre','el doceavo de octubre'],a:0},
 {t:'mc',q:'„Ich bin gerade angekommen.“',opts:['Acabo de llegar.','Acabo llegar.','He acabado a llegar.'],a:0},
 {t:'mc',q:'„Ich lerne seit drei Monaten Spanisch.“',opts:['Llevo tres meses estudiando español.','Llevo tres meses estudiar español.','Estoy tres meses estudiando español.'],a:0},
 {t:'mc',q:'„Er kommt aus Spanien.“',opts:['Él es de España.','El es de España.'],a:0},
 {t:'gap',q:'He dejado ___ fumar.',a:['de']},
 {t:'mc',q:'„Wohnst du immer noch hier?“',opts:['¿Sigues viviendo aquí?','¿Sigues vivir aquí?','¿Sigues a vivir aquí?'],a:0}],
resumen:`<h3>Datum</h3><p class="es-t">el cinco de octubre de dos mil veintiséis · ¿Qué fecha es hoy? · en mayo · enero, febrero, marzo …</p>
<h3>Akzentregeln</h3><p>Vokal/-n/-s → vorletzte Silbe · anderer Konsonant → letzte Silbe · sonst Akzent. <span class="es-t">tú/tu · él/el · sí/si · mí/mi</span></p>
<h3>Verb + Infinitiv</h3><p class="es-t">acabar de · volver a · dejar de · empezar a · tener que</p>
<h3>Verb + Gerundium</h3><p class="es-t">Llevo dos años estudiando. · Sigo viviendo aquí. · Estoy leyendo.</p>`});
