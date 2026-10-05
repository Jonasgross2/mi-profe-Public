/* ===== B1 Teil 1 (Rest) & Teil 2: Unidad 21–25 – eigene Inhalte nach dem Plan Curricular (Instituto Cervantes) ===== */

COURSE.units.push({id:'u19',n:'21',level:'B1',title:'¿Tú qué opinas?',sub:'Meinung sagen (creo que / no creo que) · Zweifel & Wahrscheinlichkeit (quizá, es posible que) · diskutieren & widersprechen',
goals:['creo que + Indikativ / no creo que + Subjuntivo','me parece que / no me parece que','quizá, tal vez, puede que, es posible que','a lo mejor + Indikativ','es verdad que / no es verdad que','Diskutieren: zustimmen, widersprechen, abwägen'],
situacion:{title:'Diskussion über Tourismus',npc:'Laia',scene:'Du sitzt mit Laia auf einer Terrasse in der Barceloneta. Überall Touristen. Laia hat eine klare Meinung zum Thema Tourismus in Barcelona – du sollst deine sagen.',role:'Du bist Laia, Studentin aus Barcelona, freundlich, aber meinungsstark. Ihr duzt euch. Du findest, dass es zu viele Touristen gibt (pisos turísticos, precios, ruido). Frag Jonas nach seiner Meinung (¿Tú qué opinas? ¿No crees que…?). Widersprich ihm manchmal höflich (No estoy de acuerdo, pero…), damit er argumentieren muss. Benutze creo que / no creo que + Subjuntivo, es posible que.',goal:'Sag deine Meinung mit creo que / no creo que, wäge ab (por un lado … por otro …) und widersprich Laia höflich mindestens einmal.'},
lessons:[
{id:'l1',title:'Ich glaube (nicht), dass …',desc:'creo que es · no creo que sea',steps:[
 {t:'info',title:'Meinung: bejaht → Indikativ, verneint → Subjuntivo',html:`<table><tr><th>bejaht: Indikativ</th><th>verneint: Subjuntivo</th></tr>
 <tr><td class="es-t">Creo que <b>es</b> caro.</td><td class="es-t">No creo que <b>sea</b> caro.</td></tr>
 <tr><td class="es-t">Pienso que <b>tienes</b> razón.</td><td class="es-t">No pienso que <b>tengas</b> razón.</td></tr>
 <tr><td class="es-t">Me parece que <b>va</b> a llover.</td><td class="es-t">No me parece que <b>vaya</b> a llover.</td></tr></table>
 <div class="ex">Die Logik: Mit <i>creo que</i> sagst du, was du für wahr hältst → Indikativ. Mit <i>no creo que</i> stellst du es in Frage → Subjuntivo.</div>
 <div class="ojo">Fragen mit <i>¿No crees que …?</i> bleiben meist im Indikativ: <span class="es-t">¿No crees que es demasiado caro?</span> – du erwartest ja ein „Doch!“.</div>`},
 {t:'mc',q:'Creo que Barcelona ___ una ciudad muy cara.',opts:['es','sea','será'],a:0},
 {t:'mc',q:'No creo que el metro ___ caro.',opts:['sea','es','está'],a:0},
 {t:'gap',q:'No pienso que ___ (ellos, tener) razón.',a:['tengan']},
 {t:'gap',q:'Me parece que Pablo ___ (estar) cansado.',a:['está']},
 {t:'gap',q:'No me parece que ___ (ser) una buena idea.',a:['sea']},
 {t:'order',es:'No creo que haya tantos turistas en invierno.',de:'Ich glaube nicht, dass es im Winter so viele Touristen gibt.'},
 {t:'tr',de:'Ich glaube nicht, dass er heute kommt.',a:['No creo que venga hoy.','No creo que él venga hoy.']},
 {t:'listen',es:'Creo que tienes razón, pero no creo que sea tan fácil.',de:'Ich glaube, du hast recht, aber ich glaube nicht, dass es so einfach ist.'}]},
{id:'l2',title:'Vielleicht …',desc:'quizá · es posible que · a lo mejor',steps:[
 {t:'info',title:'Wie sicher bist du?',html:`<table><tr><th>Ausdruck</th><th>Modus</th><th>Beispiel</th></tr>
 <tr><td class="es-t">quizá(s) / tal vez</td><td>meist Subj.</td><td class="es-t">Quizá llueva mañana.</td></tr>
 <tr><td class="es-t">puede que</td><td>Subj.</td><td class="es-t">Puede que llegue tarde.</td></tr>
 <tr><td class="es-t">es posible / probable que</td><td>Subj.</td><td class="es-t">Es posible que tengas razón.</td></tr>
 <tr><td class="es-t">a lo mejor</td><td><b>immer Ind.</b></td><td class="es-t">A lo mejor viene Laia.</td></tr></table>
 <div class="ex">Gewissheit → Indikativ: <span class="es-t">Es verdad que / Está claro que / Es seguro que</span> + Ind. Verneint (<span class="es-t">no es verdad que</span>) → Subjuntivo.</div>`},
 {t:'mc',q:'A lo mejor ___ al cine esta noche.',opts:['vamos','vayamos','iremos a'],a:0},
 {t:'mc',q:'Es posible que el museo ___ cerrado los lunes.',opts:['esté','está','es'],a:0},
 {t:'mc',q:'Está claro que la ciudad ___ demasiados turistas.',opts:['tiene','tenga','tendría'],a:0},
 {t:'gap',q:'Puede que ___ (nosotros, llegar) un poco tarde.',a:['lleguemos']},
 {t:'gap',q:'No es verdad que los catalanes no ___ (hablar) español.',a:['hablen']},
 {t:'match',q:'Was passt?',pairs:[['a lo mejor','+ Indikativ'],['puede que','+ Subjuntivo'],['es verdad que','+ Indikativ'],['no es verdad que','+ Subjuntivo']]},
 {t:'tr',de:'Vielleicht hast du recht. (quizá)',a:['Quizá tengas razón.','Quizás tengas razón.','Tal vez tengas razón.']},
 {t:'speak',es:'Es posible que tengas razón, pero a lo mejor hay otra solución.',de:'Es kann sein, dass du recht hast, aber vielleicht gibt es eine andere Lösung.'}]},
{id:'l3',title:'Diskutieren',desc:'estar de acuerdo · por un lado …',steps:[
 {t:'vocab',title:'Meinung & Diskussion',items:[['en mi opinión','meiner Meinung nach','💬'],['desde mi punto de vista','aus meiner Sicht','👁️'],['(no) estoy de acuerdo','ich bin (nicht) einverstanden','🤝'],['tienes razón','du hast recht','✅'],['depende','das kommt darauf an','⚖️'],['por un lado … por otro (lado)','einerseits … andererseits','⚖️'],['sin embargo','jedoch','↩️'],['además','außerdem','➕'],['el piso turístico','die Ferienwohnung','🏠'],['el alquiler','die Miete','💶'],['subir (los precios)','steigen','📈'],['el vecino','der Nachbar','🏘️']]},
 {t:'info',title:'Höflich widersprechen',html:`<p class="es-t">Entiendo lo que dices, pero … · Sí, pero por otro lado … · No estoy del todo de acuerdo.</p>
 <div class="ex">Spanier diskutieren gern lebhaft und unterbrechen sich auch mal – das ist nicht unhöflich. Ein <span class="es-t">¿no?</span> oder <span class="es-t">¿verdad?</span> am Satzende holt den anderen ins Boot.</div>`},
 {t:'mc',q:'„Einerseits … andererseits …“',opts:['por un lado … por otro …','primero … después …','o … o …'],a:0},
 {t:'gap',q:'No estoy ___ acuerdo contigo.',a:['de']},
 {t:'dialog',place:'Terraza en la Barceloneta',title:'Zu viele Touristen?',scene:'Laia zeigt auf die vollen Straßen.',lines:[
  {n:'Laia',es:'Mira, todo lleno de turistas. Creo que en Barcelona ya hay demasiados. ¿Tú qué opinas?',de:'Schau, alles voller Touristen. Ich glaube, in Barcelona gibt es schon zu viele. Was meinst du?'},
  {you:true,opts:[{es:'Por un lado tienes razón, pero no creo que el turismo sea solo malo.',ok:true},{es:'Por un lado tienes razón, pero no creo que el turismo es solo malo.',ok:false,why:'Nach <b>no creo que</b> → Subjuntivo: <i>sea</i>.'}]},
  {n:'Laia',es:'Ya, trae dinero. Pero los alquileres suben y los vecinos se van del centro.',de:'Klar, er bringt Geld. Aber die Mieten steigen und die Nachbarn ziehen aus dem Zentrum weg.'},
  {you:true,opts:[{es:'Es verdad que los alquileres son muy caros. Quizá la ciudad deba controlar los pisos turísticos.',ok:true},{es:'Es verdad que los alquileres sean muy caros. Quizá la ciudad deba controlar los pisos turísticos.',ok:false,why:'<b>Es verdad que</b> (Gewissheit) → Indikativ: <i>son</i>.'}]},
  {n:'Laia',es:'¡Exacto! Veo que estamos de acuerdo.',de:'Genau! Ich sehe, wir sind uns einig.'}]},
 {t:'tr',de:'Meiner Meinung nach sind die Mieten zu hoch.',a:['En mi opinión, los alquileres son demasiado altos.','En mi opinión los alquileres son demasiado caros.','En mi opinión, los alquileres son demasiado caros.']},
 {t:'speak',es:'Entiendo lo que dices, pero no estoy del todo de acuerdo.',de:'Ich verstehe, was du sagst, aber ich bin nicht ganz einverstanden.'}]},
{id:'l4',title:'Lesen: ¿Demasiados turistas?',desc:'Zeitungsartikel · eigene Meinung',steps:[
 {t:'read',title:'¿Demasiados turistas?',text:`Barcelona recibe cada año a millones de visitantes. Para muchos negocios, el turismo es {imprescindible|unverzichtbar}: hoteles, bares y tiendas viven de él. Sin embargo, cada vez más vecinos se quejan. En barrios como la Barceloneta o el Gòtic, muchos pisos se han convertido en pisos turísticos y los alquileres han subido tanto que las familias tienen que irse.

«No creo que el problema sean los turistas», dice Marta, que tiene una pequeña librería en Gràcia. «El problema es que no hay {límites|Grenzen}». Otros piensan que la ciudad debería cobrar más impuestos a los visitantes. Es posible que la solución esté en un {equilibrio|Gleichgewicht}: un turismo que respete la vida de los barrios.`,de:`Barcelona empfängt jedes Jahr Millionen Besucher. Für viele Geschäfte ist der Tourismus unverzichtbar: Hotels, Bars und Läden leben davon. Trotzdem beschweren sich immer mehr Anwohner. In Vierteln wie der Barceloneta oder dem Gòtic sind viele Wohnungen zu Ferienwohnungen geworden, und die Mieten sind so stark gestiegen, dass Familien wegziehen müssen.\n\n„Ich glaube nicht, dass die Touristen das Problem sind“, sagt Marta, die einen kleinen Buchladen in Gràcia hat. „Das Problem ist, dass es keine Grenzen gibt.“ Andere meinen, die Stadt sollte von den Besuchern mehr Steuern verlangen. Es kann sein, dass die Lösung in einem Gleichgewicht liegt: einem Tourismus, der das Leben in den Vierteln respektiert.`},
 {t:'mc',q:'¿Por qué se quejan los vecinos?',opts:['Porque los alquileres han subido mucho.','Porque no hay hoteles.','Porque los turistas no gastan dinero.'],a:0},
 {t:'mc',q:'¿Qué piensa Marta?',opts:['Que el problema es la falta de límites.','Que hay que prohibir el turismo.','Que los turistas son el problema.'],a:0},
 {t:'gap',q:'Es posible que la solución ___ (estar) en un equilibrio.',a:['esté']},
 {t:'free',task:'¿Qué opinas del turismo en tu ciudad o en Barcelona? Escribe 5–6 frases.',hint:'En mi opinión … · Creo que … · No creo que … · Por un lado … por otro … · Es posible que …',focus:'creo que + Ind. / no creo que + Subj., Diskussionsmittel',model:'En mi opinión, el turismo es bueno para la economía de Barcelona. Por un lado, crea muchos trabajos. Por otro, no creo que sea bueno tener tantos pisos turísticos en el centro. Creo que la ciudad debería limitarlos. Es posible que así los alquileres bajen un poco. Además, a lo mejor los turistas pueden visitar también otros barrios.'}]}
],
placement:[
 {t:'mc',q:'No creo que ___ tan difícil.',opts:['sea','es','será'],a:0},
 {t:'mc',q:'A lo mejor ___ mañana.',opts:['llueve','llueva','lloviera'],a:0},
 {t:'gap',q:'Creo que tú ___ (tener) razón.',a:['tienes']},
 {t:'gap',q:'Es posible que ___ (ellos, venir) más tarde.',a:['vengan']},
 {t:'mc',q:'„Einerseits … andererseits …“',opts:['por un lado … por otro …','sin embargo … además …','o sea … pues …'],a:0},
 {t:'mc',q:'Está claro que el piso ___ caro.',opts:['es','sea','esté'],a:0}],
resumen:`<h3>Meinung</h3><table><tr><th>Indikativ</th><th>Subjuntivo</th></tr><tr><td class="es-t">Creo que es · Pienso que tiene · Me parece que va</td><td class="es-t">No creo que sea · No pienso que tenga · No me parece que vaya</td></tr></table>
<h3>Wahrscheinlichkeit</h3><p class="es-t">quizá / tal vez / puede que / es posible que + Subj. · a lo mejor + Ind.</p><p class="es-t">es verdad / está claro que + Ind. · no es verdad que + Subj.</p>
<h3>Diskutieren</h3><p class="es-t">En mi opinión … · Desde mi punto de vista … · (No) estoy de acuerdo · Por un lado … por otro … · Sin embargo … · Entiendo lo que dices, pero …</p>`});

COURSE.units.push({id:'u20',n:'22',level:'B1b',title:'Cuando llegues…',sub:'Zeitsätze mit Subjuntivo (cuando llegues, hasta que, antes de que) · Zweck (para que) · Pläne fürs Ende des Auslandssemesters',
goals:['cuando + Subjuntivo (Zukunft) vs. cuando + Indikativ (Gewohnheit)','en cuanto, hasta que, antes de que, después de que','para + Infinitiv / para que + Subjuntivo','Pläne und Bedingungen in der Zukunft','Abschied & Kontakt halten'],
situacion:{title:'Abschiedspläne',npc:'Marc',scene:'Dein Auslandssemester geht bald zu Ende. Marc, dein Kommilitone, will wissen, was du nach der Rückkehr nach Deutschland vorhast und wann ihr euch wiederseht.',role:'Du bist Marc, Student aus Barcelona, herzlich und neugierig. Ihr duzt euch. Frag Jonas nach seinen Plänen (¿Qué vas a hacer cuando vuelvas a Alemania?), wann er wiederkommt, und schlag vor, in Kontakt zu bleiben. Benutze cuando / en cuanto / antes de que + Subjuntivo und para que.',goal:'Erzähl von deinen Plänen mit cuando / en cuanto + Subjuntivo und erkläre mit para que, warum ihr in Kontakt bleiben solltet.'},
lessons:[
{id:'l1',title:'Wenn ich ankomme …',desc:'cuando llegue · cuando llego',steps:[
 {t:'info',title:'cuando: Zukunft → Subjuntivo',html:`<table><tr><th>Bedeutung</th><th>Modus</th><th>Beispiel</th></tr>
 <tr><td>Gewohnheit / immer</td><td>Indikativ</td><td class="es-t">Cuando <b>llego</b> a casa, me ducho.</td></tr>
 <tr><td>Vergangenheit</td><td>Indikativ</td><td class="es-t">Cuando <b>llegué</b>, no había nadie.</td></tr>
 <tr><td><b>Zukunft</b></td><td><b>Subjuntivo</b></td><td class="es-t">Cuando <b>llegues</b>, llámame.</td></tr></table>
 <div class="ojo">Nie Futur nach <i>cuando</i>: <s>cuando llegarás</s> → <b>cuando llegues</b>. (Im Deutschen geht beides: „wenn du ankommst“.)</div>`},
 {t:'mc',q:'Cuando ___ a Mannheim, te escribo.',opts:['vuelva','vuelvo','volveré'],a:0},
 {t:'mc',q:'Normalmente, cuando ___ cansado, me acuesto pronto.',opts:['estoy','esté','estaré'],a:0},
 {t:'mc',q:'Cuando ___ pequeño, vivía en Hamburgo.',opts:['era','sea','fuera a'],a:0},
 {t:'gap',q:'Cuando ___ (tú, tener) tiempo, ven a verme.',a:['tengas']},
 {t:'gap',q:'Cuando ___ (nosotros, terminar) el máster, buscaremos trabajo.',a:['terminemos']},
 {t:'order',es:'Cuando sepa la fecha, te lo digo.',de:'Wenn ich das Datum weiß, sage ich es dir.'},
 {t:'tr',de:'Wenn du in Berlin bist, ruf mich an.',a:['Cuando estés en Berlín, llámame.']},
 {t:'listen',es:'Cuando llegues al aeropuerto, mándame un mensaje.',de:'Wenn du am Flughafen ankommst, schick mir eine Nachricht.'}]},
{id:'l2',title:'Sobald, bis, bevor',desc:'en cuanto · hasta que · antes de que',steps:[
 {t:'info',title:'Weitere Zeit-Konjunktionen',html:`<table><tr><th>Konjunktion</th><th>Bedeutung</th><th>Zukunft</th></tr>
 <tr><td class="es-t">en cuanto</td><td>sobald</td><td class="es-t">En cuanto <b>pueda</b>, te ayudo.</td></tr>
 <tr><td class="es-t">hasta que</td><td>bis</td><td class="es-t">Espera aquí hasta que <b>vuelva</b>.</td></tr>
 <tr><td class="es-t">después de que</td><td>nachdem</td><td class="es-t">Después de que <b>se vayan</b>, limpiamos.</td></tr>
 <tr><td class="es-t">antes de que</td><td>bevor</td><td class="es-t">Antes de que <b>te vayas</b>, … (<b>immer</b> Subj.)</td></tr></table>
 <div class="ex">Gleiche Person in beiden Satzteilen → einfach Infinitiv: <span class="es-t">Antes de salir, cierro la ventana.</span> · <span class="es-t">Después de comer, descanso.</span></div>`},
 {t:'mc',q:'En cuanto ___ el resultado, te aviso.',opts:['sepa','sé','sabré'],a:0},
 {t:'mc',q:'Antes de que ___, quiero darte algo.',opts:['te vayas','te vas','irte'],a:0},
 {t:'mc',q:'Antes de ___, apaga la luz.',opts:['salir','que salgas','sales'],a:0},
 {t:'gap',q:'No me voy hasta que ___ (tú, terminar).',a:['termines']},
 {t:'gap',q:'Después de que ___ (llegar) los invitados, abrimos el vino.',a:['lleguen']},
 {t:'match',q:'Was bedeutet …?',pairs:[['en cuanto','sobald'],['hasta que','bis'],['antes de que','bevor'],['después de que','nachdem'],['mientras','während']]},
 {t:'tr',de:'Sobald ich kann, besuche ich dich.',a:['En cuanto pueda, te visito.','En cuanto pueda, iré a verte.','En cuanto pueda, te visitaré.']}]},
{id:'l3',title:'Damit …',desc:'para + Infinitiv · para que + Subjuntivo',steps:[
 {t:'info',title:'Zweck: para / para que',html:`<table><tr><th>gleiche Person</th><th>andere Person</th></tr>
 <tr><td class="es-t">Estudio español <b>para trabajar</b> en España.</td><td class="es-t">Te lo explico <b>para que lo entiendas</b>.</td></tr>
 <tr><td>ich lerne – ich arbeite</td><td>ich erkläre – du verstehst</td></tr></table>
 <div class="ex"><i>para que</i> steht <b>immer</b> mit Subjuntivo. Deutsch: „damit“.</div>`},
 {t:'vocab',title:'Abschied & Kontakt',items:[['despedirse (de)','sich verabschieden (von)','👋'],['la despedida','der Abschied','🥲'],['echar de menos','vermissen','💭'],['mantener el contacto','in Kontakt bleiben','📱'],['volver a + Inf.','wieder … tun','🔁'],['la fiesta de despedida','die Abschiedsparty','🎉'],['hacer las maletas','die Koffer packen','🧳'],['el vuelo','der Flug','✈️'],['el recuerdo','die Erinnerung','📸'],['¡Que te vaya bien!','Mach’s gut!','🍀']]},
 {t:'mc',q:'Te dejo mi número para que me ___.',opts:['llames','llamas','llamar'],a:0},
 {t:'mc',q:'Ahorro dinero para ___ a Sudamérica.',opts:['viajar','que viaje','viajo'],a:0},
 {t:'gap',q:'Hablo despacio para que todos me ___ (entender).',a:['entiendan']},
 {t:'gap',q:'Te mando las fotos para que te ___ (acordar) de nosotros.',a:['acuerdes']},
 {t:'tr',de:'Ich werde dich vermissen.',a:['Te voy a echar de menos.','Te echaré de menos.']},
 {t:'speak',es:'Te dejo mi dirección para que vengas a visitarme a Alemania.',de:'Ich gebe dir meine Adresse, damit du mich in Deutschland besuchen kommst.'}]},
{id:'l4',title:'Bevor ich gehe …',desc:'Dialog & Abschiedsnachricht',steps:[
 {t:'dialog',place:'Bar de la facultad',title:'Abschiedspläne',scene:'Letzte Woche vor deinem Rückflug. Marc fragt nach deinen Plänen.',lines:[
  {n:'Marc',es:'¿Y qué vas a hacer cuando vuelvas a Alemania?',de:'Und was machst du, wenn du nach Deutschland zurückkommst?'},
  {you:true,opts:[{es:'Cuando vuelva, voy a terminar el máster y buscar trabajo.',ok:true},{es:'Cuando volveré, voy a terminar el máster y buscar trabajo.',ok:false,why:'Nach <b>cuando</b> mit Zukunftsbezug → Subjuntivo: <i>vuelva</i>.'}]},
  {n:'Marc',es:'¿Y cuándo vienes otra vez a Barcelona?',de:'Und wann kommst du wieder nach Barcelona?'},
  {you:true,opts:[{es:'En cuanto tenga vacaciones, vuelvo. ¡Te lo prometo!',ok:true},{es:'En cuanto tengo vacaciones, vuelvo. ¡Te lo prometo!',ok:false,why:'<b>En cuanto</b> + Zukunft → Subjuntivo: <i>tenga</i>.'}]},
  {n:'Marc',es:'Vale. Antes de que te vayas, hacemos una fiesta de despedida.',de:'Okay. Bevor du gehst, machen wir eine Abschiedsparty.'},
  {you:true,opts:[{es:'¡Genial! Y os dejo mi dirección para que me visitéis.',ok:true},{es:'¡Genial! Y os dejo mi dirección para que me visitáis.',ok:false,why:'<b>para que</b> → immer Subjuntivo: <i>visitéis</i>.'}]}]},
 {t:'read',title:'Mensaje de Laia',text:`¡Hola, Jonas! Ya sé que el viernes es tu último día. No me lo puedo creer. Antes de que te vayas, quiero darte un pequeño regalo, así que no hagas planes para el jueves por la noche. Cuando estés en Alemania, mándame fotos de Mannheim para que vea dónde vives. Y en cuanto tengas vacaciones, vuelve, ¿vale? Aquí siempre tendrás un sofá. ¡Te vamos a echar mucho de menos! Un abrazo, Laia`,de:`Hallo, Jonas! Ich weiß schon, dass Freitag dein letzter Tag ist. Ich kann es nicht glauben. Bevor du gehst, will ich dir ein kleines Geschenk geben, also plan nichts für Donnerstagabend. Wenn du in Deutschland bist, schick mir Fotos von Mannheim, damit ich sehe, wo du wohnst. Und sobald du Urlaub hast, komm zurück, okay? Hier hast du immer ein Sofa. Wir werden dich sehr vermissen! Liebe Grüße, Laia`},
 {t:'mc',q:'¿Qué quiere Laia antes de que Jonas se vaya?',opts:['darle un regalo','ir a Mannheim','hacer una fiesta el viernes'],a:0},
 {t:'mc',q:'¿Para qué quiere Laia fotos de Mannheim?',opts:['para ver dónde vive Jonas','para un trabajo de la universidad','para su madre'],a:0},
 {t:'free',task:'Antworte Laia: Bedank dich, erzähl, was du machst, wenn du zurück bist, und wann du wiederkommst. (5–6 Sätze)',hint:'Cuando vuelva … · En cuanto … · Antes de que … · para que …',focus:'cuando / en cuanto + Subj., para que',model:'¡Hola, Laia! Muchas gracias por tu mensaje, me ha emocionado. El jueves no hago planes, te lo prometo. Cuando vuelva a Alemania, voy a terminar el máster. En cuanto tenga vacaciones, vuelvo a Barcelona. Te mandaré muchas fotos para que veas Mannheim. ¡Os voy a echar mucho de menos! Un abrazo, Jonas'}]}
],
placement:[
 {t:'mc',q:'Cuando ___ a casa, te llamo.',opts:['llegue','llego','llegaré'],a:0},
 {t:'mc',q:'Te lo explico para que lo ___.',opts:['entiendas','entiendes','entender'],a:0},
 {t:'gap',q:'Antes de que ___ (tú, irse), cena con nosotros.',a:['te vayas']},
 {t:'gap',q:'En cuanto ___ (yo, saber) algo, te aviso.',a:['sepa']},
 {t:'mc',q:'Cuando era niño, ___ mucho al fútbol.',opts:['jugaba','juegue','jugaré'],a:0},
 {t:'gap',q:'Espera aquí hasta que ___ (yo, volver).',a:['vuelva']}],
resumen:`<h3>Zeitsätze</h3><table><tr><th>Gewohnheit / Vergangenheit</th><th>Zukunft</th></tr><tr><td class="es-t">Cuando llego, … · Cuando llegué, …</td><td class="es-t">Cuando llegue, … (Subj.)</td></tr></table>
<p class="es-t">en cuanto · hasta que · después de que + Subj. (Zukunft) · antes de que + immer Subj.</p><p>Gleiche Person: <span class="es-t">antes de / después de / hasta + Infinitiv</span></p>
<h3>Zweck</h3><p class="es-t">para + Infinitiv (gleiche Person) · para que + Subjuntivo (andere Person)</p>
<h3>Abschied</h3><p class="es-t">echar de menos · mantener el contacto · ¡Que te vaya bien!</p>`});

COURSE.units.push({id:'u21',n:'23',level:'B1b',title:'Me ha dicho que…',sub:'Indirekte Rede (dice que / dijo que) · indirekte Fragen (si, qué, cuándo) · Bitten weitergeben (me pide que + Subj.) · Nachrichten & Klatsch',
goals:['dice que + gleiche Zeit','dijo que: Präsens → Imperfekt, Futur → Konditional','Perfekt/Indefinido → Plusquamperfekt','indirekte Fragen: pregunta si / qué / dónde','Bitten & Befehle: me pide que / me dijo que + Subjuntivo','Personen, Orte und Zeiten anpassen (aquí → allí, mañana → al día siguiente)'],
situacion:{title:'Neuigkeiten aus der WG',npc:'Pablo',scene:'Du kommst nach einem Wochenende in Valencia zurück in die WG. Pablo will wissen, was die anderen dir am Telefon erzählt haben – und du sollst ihm Nurias Nachricht weitergeben.',role:'Du bist Pablo, Mitbewohner von Jonas, neugierig und ein bisschen tratschig. Ihr duzt euch. Frag Jonas, was Nuria und Laia ihm gesagt haben (¿Qué te dijo Nuria? ¿Te preguntó si…?). Reagiere überrascht (¡No me digas!). Benutze indirekte Rede (Me dijo que…, Me pidió que…).',goal:'Gib Nachrichten in indirekter Rede weiter (Me dijo que… / Me preguntó si… / Me pidió que + Subjuntivo).'},
lessons:[
{id:'l1',title:'Sie sagt, dass …',desc:'dice que · ha dicho que',steps:[
 {t:'info',title:'Indirekte Rede in der Gegenwart',html:`<p>Mit <b>dice que / ha dicho que</b> bleibt die Zeit gleich – nur Personen und Pronomen ändern sich:</p>
 <table><tr><th>direkt</th><th>indirekt</th></tr>
 <tr><td class="es-t">Nuria: «Estoy cansada.»</td><td class="es-t">Nuria dice que está cansada.</td></tr>
 <tr><td class="es-t">Marc: «Mañana vengo a tu casa.»</td><td class="es-t">Marc dice que mañana viene a mi casa.</td></tr>
 <tr><td class="es-t">Laia: «He perdido el móvil.»</td><td class="es-t">Laia ha dicho que ha perdido el móvil.</td></tr></table>
 <div class="ojo">Im Spanischen steht <b>immer que</b>: <span class="es-t">Dice <b>que</b> viene.</span> (Nicht weglassen wie im Deutschen „Er sagt, er kommt.“)</div>`},
 {t:'mc',q:'Pablo: «Tengo hambre.» → Pablo dice que ___ hambre.',opts:['tiene','tengo','tenga'],a:0},
 {t:'mc',q:'Laia: «Os invito a mi casa.» → Laia dice que nos ___ a su casa.',opts:['invita','invito','invite'],a:0},
 {t:'gap',q:'Marc: «Voy a llegar tarde.» → Marc dice que ___ a llegar tarde.',a:['va']},
 {t:'gap',q:'Nuria: «He comprado pan.» → Nuria ha dicho que ___ comprado pan.',a:['ha']},
 {t:'order',es:'Dice que no puede venir a la fiesta.',de:'Er sagt, dass er nicht zur Party kommen kann.'},
 {t:'tr',de:'Sie sagt, dass sie morgen arbeitet.',a:['Dice que mañana trabaja.','Dice que trabaja mañana.','Ella dice que mañana trabaja.']},
 {t:'listen',es:'Laia dice que el concierto empieza a las nueve.',de:'Laia sagt, dass das Konzert um neun anfängt.'}]},
{id:'l2',title:'Sie sagte, dass …',desc:'dijo que estaba · dijo que vendría',steps:[
 {t:'info',title:'Indirekte Rede in der Vergangenheit',html:`<p>Mit <b>dijo que / me contó que</b> rücken die Zeiten eine Stufe zurück:</p>
 <table><tr><th>direkt</th><th>→</th><th>indirekt</th></tr>
 <tr><td>Präsens <span class="es-t">estoy</span></td><td>→</td><td>Imperfekt <span class="es-t">estaba</span></td></tr>
 <tr><td>Futur <span class="es-t">vendré</span></td><td>→</td><td>Konditional <span class="es-t">vendría</span></td></tr>
 <tr><td>Perfekt / Indefinido <span class="es-t">he perdido / perdí</span></td><td>→</td><td>Plusquamperfekt <span class="es-t">había perdido</span></td></tr>
 <tr><td><span class="es-t">voy a ir</span></td><td>→</td><td><span class="es-t">iba a ir</span></td></tr></table>
 <div class="ex">Auch Wörter für Ort und Zeit passen sich an: <span class="es-t">hoy → ese día · mañana → al día siguiente · aquí → allí</span>.</div>`},
 {t:'mc',q:'Nuria: «Estoy enferma.» → Nuria me dijo que ___ enferma.',opts:['estaba','está','estuviera'],a:0},
 {t:'mc',q:'Marc: «Te llamaré.» → Marc me dijo que me ___.',opts:['llamaría','llamará','llamaba'],a:0},
 {t:'mc',q:'Laia: «He perdido las llaves.» → Laia me contó que ___ las llaves.',opts:['había perdido','ha perdido','perdía'],a:0},
 {t:'gap',q:'Pablo: «Voy a cocinar.» → Pablo dijo que ___ a cocinar.',a:['iba']},
 {t:'gap',q:'Sergio: «Mañana no puedo.» → Sergio dijo que al día siguiente no ___.',a:['podía']},
 {t:'match',q:'direkt → indirekt (Vergangenheit)',pairs:[['tengo','tenía'],['haré','haría'],['he visto','había visto'],['vamos a salir','íbamos a salir'],['aquí','allí']]},
 {t:'tr',de:'Er hat mir gesagt, dass er keine Zeit hatte.',a:['Me dijo que no tenía tiempo.']}]},
{id:'l3',title:'Fragen & Bitten weitergeben',desc:'me preguntó si · me pidió que',steps:[
 {t:'info',title:'Indirekte Fragen und Bitten',html:`<table><tr><th>direkt</th><th>indirekt</th></tr>
 <tr><td class="es-t">«¿Vienes?»</td><td class="es-t">Me pregunta <b>si</b> voy. / Me preguntó <b>si</b> iba.</td></tr>
 <tr><td class="es-t">«¿Dónde vives?»</td><td class="es-t">Me preguntó <b>dónde</b> vivía.</td></tr>
 <tr><td class="es-t">«¡Ayúdame!»</td><td class="es-t">Me pide <b>que</b> la <b>ayude</b>. / Me pidió que la <b>ayudara</b>*.</td></tr></table>
 <div class="ex">Ja/Nein-Frage → <b>si</b> (ob). Fragewort bleibt mit Akzent: <i>qué, dónde, cuándo</i>.<br>Bitte/Befehl (Imperativ) → <b>que + Subjuntivo</b>.</div>
 <div class="ojo">*Nach Vergangenheit kommt eigentlich der Subjuntivo der Vergangenheit (<i>ayudara</i>) – den lernst du in B2. Für jetzt reicht: <span class="es-t">Me pide que + Subj. Präsens</span>.</div>`},
 {t:'mc',q:'«¿Tienes coche?» → Me pregunta ___ tengo coche.',opts:['si','que','qué'],a:0},
 {t:'mc',q:'«¿Cuándo llegas?» → Me preguntó ___ llegaba.',opts:['cuándo','si','que'],a:0},
 {t:'mc',q:'Nuria: «¡Compra leche!» → Nuria me pide que ___ leche.',opts:['compre','compro','comprar'],a:0},
 {t:'gap',q:'Mi madre siempre me dice que ___ (yo, llevar) chaqueta.',a:['lleve']},
 {t:'gap',q:'«¿Te gusta Barcelona?» → Me preguntó ___ me gustaba Barcelona.',a:['si']},
 {t:'vocab',title:'Erzählen & reagieren',items:[['contar','erzählen','🗣️'],['preguntar','fragen','❓'],['pedir','bitten','🙏'],['avisar','Bescheid sagen','📢'],['el cotilleo','der Klatsch','🤫'],['¡No me digas!','Was du nicht sagst!','😮'],['¿En serio?','Echt jetzt?','🤨'],['el mensaje de voz','die Sprachnachricht','🎙️'],['por lo visto','anscheinend','👀'],['enterarse (de)','erfahren','💡']]},
 {t:'tr',de:'Sie hat mich gefragt, ob ich Hunger habe.',a:['Me ha preguntado si tengo hambre.','Me preguntó si tenía hambre.']}]},
{id:'l4',title:'Neuigkeiten aus der WG',desc:'Dialog & Nachricht weitergeben',steps:[
 {t:'dialog',place:'Salón del piso',title:'Was hat Nuria gesagt?',scene:'Du kommst aus Valencia zurück. Pablo ist neugierig.',lines:[
  {n:'Pablo',es:'¡Hola! Oye, ¿te llamó Nuria? ¿Qué te dijo?',de:'Hallo! Sag mal, hat Nuria dich angerufen? Was hat sie gesagt?'},
  {you:true,opts:[{es:'Sí, me dijo que había conocido a alguien en el trabajo.',ok:true},{es:'Sí, me dijo que ha conocido a alguien ayer en el trabajo y que es simpática mañana.',ok:false,why:'Nach <b>me dijo que</b> rückt die Zeit zurück: <i>había conocido</i>.'}]},
  {n:'Pablo',es:'¡No me digas! ¿Y te preguntó algo?',de:'Was du nicht sagst! Und hat sie dich was gefragt?'},
  {you:true,opts:[{es:'Me preguntó si estaríamos en casa el sábado. Quiere presentárnoslo.',ok:true},{es:'Me preguntó que estaremos en casa el sábado. Quiere presentárnoslo.',ok:false,why:'Ja/Nein-Frage → <b>si</b>; Futur → Konditional: <i>si estaríamos</i>.'}]},
  {n:'Pablo',es:'¡Qué fuerte! ¿Algo más?',de:'Krass! Noch was?'},
  {you:true,opts:[{es:'Sí, te pide que limpies el baño antes del sábado.',ok:true},{es:'Sí, te pide que limpias el baño antes del sábado.',ok:false,why:'<b>pedir que</b> → Subjuntivo: <i>limpies</i>.'}]}]},
 {t:'read',title:'Un mensaje de voz',text:`«Hola, Jonas, soy Sergio. Te llamo porque el jueves es el cumpleaños de Ana y vamos a hacerle una fiesta {sorpresa|Überraschungs-}. No le digas nada, ¿eh? Será en mi casa a las nueve. ¿Puedes traer algo de beber? Ah, y pregúntale a Pablo si quiere venir. ¡Hasta luego!»

Más tarde, Jonas habla con Pablo: «Me ha llamado Sergio. Dice que el jueves es el cumpleaños de Ana y que van a hacerle una fiesta sorpresa en su casa. Me ha pedido que lleve algo de beber y quiere saber si tú también vienes. ¡Pero no le digas nada a Ana!»`,de:`„Hallo, Jonas, hier ist Sergio. Ich rufe an, weil Ana am Donnerstag Geburtstag hat und wir eine Überraschungsparty für sie machen. Sag ihr nichts, ja? Sie ist bei mir um neun. Kannst du was zu trinken mitbringen? Ach, und frag Pablo, ob er kommen will. Bis später!“\n\nSpäter spricht Jonas mit Pablo: „Sergio hat mich angerufen. Er sagt, dass Ana am Donnerstag Geburtstag hat und dass sie ihr eine Überraschungsparty bei ihm machen. Er hat mich gebeten, was zu trinken mitzubringen, und will wissen, ob du auch kommst. Aber sag Ana nichts!“`},
 {t:'mc',q:'¿Qué le pide Sergio a Jonas?',opts:['que lleve algo de beber','que organice la fiesta','que llame a Ana'],a:0},
 {t:'gap',q:'Sergio quiere saber ___ Pablo viene a la fiesta.',a:['si']},
 {t:'free',task:'Deine Freundin hat dir diese Nachricht geschickt: «No puedo ir al cine hoy, estoy enferma. ¿Podemos ir el sábado? Dile a Marc que le devolveré su libro mañana.» Erzähl einem Freund, was sie geschrieben hat. (4–5 Sätze)',hint:'Me ha escrito que … · Dice que … · Me pregunta si … · Me pide que le digas …',focus:'indirekte Rede, preguntar si, pedir que + Subj.',model:'Me ha escrito Laura. Dice que hoy no puede ir al cine porque está enferma. Me pregunta si podemos ir el sábado. Ah, y me pide que te diga que mañana te devolverá tu libro, Marc.'}]}
],
placement:[
 {t:'mc',q:'Marc: «Estoy cansado.» → Marc me dijo que ___ cansado.',opts:['estaba','está','estará'],a:0},
 {t:'mc',q:'«¿Vienes mañana?» → Me preguntó ___ iba al día siguiente.',opts:['si','que','cuándo'],a:0},
 {t:'gap',q:'Laia: «Te llamaré.» → Laia dijo que me ___.',a:['llamaría']},
 {t:'gap',q:'Mi jefe me pide que ___ (yo, enviar) el informe hoy.',a:['envíe']},
 {t:'mc',q:'Pablo: «He visto la película.» → Pablo dijo que ___ la película.',opts:['había visto','ha visto','veía'],a:0},
 {t:'gap',q:'Nuria dice que hoy no ___ (cocinar) ella.',a:['cocina']}],
resumen:`<h3>Indirekte Rede</h3><p class="es-t">Dice que está cansada. (gleiche Zeit)</p><table><tr><th>direkt</th><th>dijo que …</th></tr><tr><td class="es-t">estoy</td><td class="es-t">estaba</td></tr><tr><td class="es-t">vendré</td><td class="es-t">vendría</td></tr><tr><td class="es-t">he venido / vine</td><td class="es-t">había venido</td></tr><tr><td class="es-t">voy a venir</td><td class="es-t">iba a venir</td></tr></table>
<h3>Fragen & Bitten</h3><p class="es-t">Me preguntó si … · Me preguntó dónde / cuándo … · Me pide que + Subjuntivo</p>
<h3>Anpassen</h3><p class="es-t">hoy → ese día · mañana → al día siguiente · aquí → allí</p>`});

COURSE.units.push({id:'u22',n:'24',level:'B1b',title:'Lo que busco',sub:'Relativsätze (que, donde, lo que, el que, quien) · Gesuchtes beschreiben (busco un piso que tenga…) · Verbalperiphrasen (seguir, dejar de, volver a, llevar + Gerundium)',
goals:['que / donde / lo que','el que, la que, con quien','Bekanntes (Ind.) vs. Gesuchtes (Subj.): busco un piso que tiene / tenga','seguir + Gerundium, llevar + Zeit + Gerundium','dejar de, volver a, acabar de + Infinitiv','Anzeigen lesen & schreiben'],
situacion:{title:'Neue Mitbewohnerin gesucht',npc:'Nuria',scene:'Pablo zieht aus. Du und Nuria sucht eine neue Person fürs WG-Zimmer und überlegt, was ihr in die Anzeige schreibt.',role:'Du bist Nuria, Mitbewohnerin von Jonas, praktisch und direkt. Ihr duzt euch. Überlegt zusammen, was für eine Person ihr sucht (Buscamos a alguien que sea…, que no fume…), beschreibt die Wohnung mit Relativsätzen (la habitación que da a la calle, el barrio donde…). Frag Jonas nach seiner Meinung.',goal:'Beschreibe die gesuchte Person mit que + Subjuntivo und die Wohnung mit Relativsätzen (que, donde, lo que).'},
lessons:[
{id:'l1',title:'Der Mann, der …',desc:'que · donde · lo que',steps:[
 {t:'info',title:'Relativsätze: que, donde, lo que',html:`<table><tr><th>Relativwort</th><th>Beispiel</th></tr>
 <tr><td class="es-t">que (der/die/das)</td><td class="es-t">El chico <b>que</b> vive arriba es músico.</td></tr>
 <tr><td class="es-t">donde (wo)</td><td class="es-t">El bar <b>donde</b> nos conocimos ya no existe.</td></tr>
 <tr><td class="es-t">lo que (was)</td><td class="es-t">No entiendo <b>lo que</b> dices.</td></tr></table>
 <div class="ex"><b>que</b> passt fast immer – für Personen und Sachen, Singular und Plural. <b>lo que</b> = „das, was“, bezieht sich auf eine ganze Idee.</div>`},
 {t:'mc',q:'La chica ___ trabaja en la librería es de Girona.',opts:['que','donde','lo que'],a:0},
 {t:'mc',q:'Este es el barrio ___ viví el primer año.',opts:['donde','que','lo que'],a:0},
 {t:'mc',q:'___ más me gusta de Barcelona es el mar.',opts:['Lo que','Que','Donde'],a:0},
 {t:'gap',q:'Haz ___ quieras.',a:['lo que']},
 {t:'gap',q:'El libro ___ me recomendaste es buenísimo.',a:['que']},
 {t:'order',es:'La ciudad donde nací es muy pequeña.',de:'Die Stadt, in der ich geboren bin, ist sehr klein.'},
 {t:'tr',de:'Das ist die Wohnung, die ich gemietet habe.',a:['Este es el piso que he alquilado.','Es el piso que he alquilado.','Este es el piso que alquilé.']}]},
{id:'l2',title:'Mit wem? Über was?',desc:'el que · con quien · en la que',steps:[
 {t:'info',title:'Relativsätze mit Präposition',html:`<p>Steht eine Präposition davor, braucht <i>que</i> einen Artikel – oder man nimmt <i>quien</i> für Personen:</p>
 <table><tr><th></th><th>Beispiel</th></tr>
 <tr><td class="es-t">con el que / la que</td><td class="es-t">El amigo <b>con el que</b> viajé …</td></tr>
 <tr><td class="es-t">con quien</td><td class="es-t">La chica <b>con quien</b> hablé …</td></tr>
 <tr><td class="es-t">en el que / la que</td><td class="es-t">La empresa <b>en la que</b> trabajo …</td></tr>
 <tr><td class="es-t">de lo que</td><td class="es-t">Eso es <b>de lo que</b> quería hablar.</td></tr></table>
 <div class="ex">Die Präposition steht <b>vor</b> dem Relativwort – nie am Satzende wie im Englischen.</div>`},
 {t:'mc',q:'La compañera ___ comparto despacho es muy simpática.',opts:['con la que','que','la que con'],a:0},
 {t:'mc',q:'El hotel ___ dormimos estaba muy limpio.',opts:['en el que','el que','que en'],a:0},
 {t:'gap',q:'Es la persona en ___ más confío. (Person: quien)',a:['quien','la que']},
 {t:'gap',q:'Eso es de ___ quería hablar contigo. (das, worüber)',a:['lo que']},
 {t:'tr',de:'Der Freund, mit dem ich wohne, kommt aus Sevilla.',a:['El amigo con el que vivo es de Sevilla.','El amigo con quien vivo es de Sevilla.']}]},
{id:'l3',title:'Gesucht: jemand, der …',desc:'busco un piso que tenga',steps:[
 {t:'info',title:'Gibt es das schon – oder suche ich es?',html:`<table><tr><th>bekannt / existiert: Indikativ</th><th>gesucht / unbekannt: Subjuntivo</th></tr>
 <tr><td class="es-t">Tengo un piso que <b>tiene</b> terraza.</td><td class="es-t">Busco un piso que <b>tenga</b> terraza.</td></tr>
 <tr><td class="es-t">Conozco a alguien que <b>habla</b> ruso.</td><td class="es-t">¿Conoces a alguien que <b>hable</b> ruso?</td></tr>
 <tr><td class="es-t">Hay un bar que <b>abre</b> a las seis.</td><td class="es-t">No hay ningún bar que <b>abra</b> a las seis.</td></tr></table>
 <div class="ex">Typisch in Anzeigen: <span class="es-t">Se busca persona que sea ordenada y que no fume.</span></div>`},
 {t:'mc',q:'Busco un trabajo que ___ flexible.',opts:['sea','es','será'],a:0},
 {t:'mc',q:'Tengo una compañera que ___ cinco idiomas.',opts:['habla','hable','hablara'],a:0},
 {t:'mc',q:'No hay nadie que ___ la respuesta.',opts:['sepa','sabe','sabrá'],a:0},
 {t:'gap',q:'Buscamos a alguien que ___ (tener) experiencia.',a:['tenga']},
 {t:'gap',q:'¿Hay algún restaurante por aquí que ___ (estar) abierto ahora?',a:['esté']},
 {t:'vocab',title:'WG & Anzeigen',items:[['se busca','gesucht','🔎'],['compartir piso','in einer WG wohnen','🏠'],['la habitación exterior','das Zimmer zur Straße','🪟'],['dar a (la calle)','gehen auf (die Straße)','🛣️'],['luminoso','hell','☀️'],['amueblado','möbliert','🛋️'],['los gastos incluidos','Nebenkosten inklusive','💡'],['la fianza','die Kaution','💶'],['fumador / no fumador','Raucher / Nichtraucher','🚭'],['ordenado','ordentlich','🗄️'],['la mascota','das Haustier','🐱']]},
 {t:'tr',de:'Wir suchen jemanden, der nicht raucht.',a:['Buscamos a alguien que no fume.','Buscamos una persona que no fume.']}]},
{id:'l4',title:'Immer noch, nicht mehr, wieder',desc:'seguir · dejar de · volver a · llevar',steps:[
 {t:'info',title:'Verbalperiphrasen',html:`<table><tr><th>Form</th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">seguir + Gerundium</td><td>immer noch</td><td class="es-t">Sigo viviendo en Gràcia.</td></tr>
 <tr><td class="es-t">llevar + Zeit + Gerundium</td><td>seit … (schon)</td><td class="es-t">Llevo dos años estudiando español.</td></tr>
 <tr><td class="es-t">dejar de + Inf.</td><td>aufhören</td><td class="es-t">He dejado de fumar.</td></tr>
 <tr><td class="es-t">volver a + Inf.</td><td>wieder tun</td><td class="es-t">No vuelvas a hacerlo.</td></tr>
 <tr><td class="es-t">acabar de + Inf.</td><td>gerade erst</td><td class="es-t">Acabo de llegar.</td></tr></table>`},
 {t:'mc',q:'„Ich lerne seit drei Jahren Spanisch.“',opts:['Llevo tres años estudiando español.','Sigo tres años estudiando español.','Acabo tres años de estudiar español.'],a:0},
 {t:'mc',q:'Pablo ___ fumar el año pasado.',opts:['dejó de','volvió a','siguió'],a:0},
 {t:'gap',q:'¿Todavía vives con Nuria? – Sí, ___ (yo, seguir) viviendo con ella.',a:['sigo']},
 {t:'gap',q:'El tren ___ (acabar) de salir. Tenemos que esperar.',a:['acaba']},
 {t:'read',title:'Anuncio: Se busca compañero/a de piso',text:`Somos dos estudiantes (Nuria, 24, y Jonas, 25) que llevamos un año compartiendo un piso en Gràcia. Pablo, el compañero con el que vivíamos, se ha ido a Madrid, así que buscamos a alguien que quiera vivir con nosotros.

La habitación, que da a una calle tranquila, es luminosa y está amueblada. Cuesta 450 euros al mes, gastos incluidos. Lo que más nos gusta del piso es la terraza, donde cenamos en verano.

Buscamos a una persona que sea ordenada, que no fume y que tenga ganas de compartir alguna cena. ¿Tienes una mascota? ¡No pasa nada! Escríbenos.`,de:`Wir sind zwei Studenten (Nuria, 24, und Jonas, 25), die seit einem Jahr eine Wohnung in Gràcia teilen. Pablo, der Mitbewohner, mit dem wir zusammengewohnt haben, ist nach Madrid gegangen, also suchen wir jemanden, der mit uns wohnen will.\n\nDas Zimmer, das zu einer ruhigen Straße geht, ist hell und möbliert. Es kostet 450 Euro im Monat, Nebenkosten inklusive. Was uns an der Wohnung am meisten gefällt, ist die Terrasse, auf der wir im Sommer zu Abend essen.\n\nWir suchen eine Person, die ordentlich ist, nicht raucht und Lust hat, ab und zu ein Abendessen zu teilen. Hast du ein Haustier? Kein Problem! Schreib uns.`},
 {t:'mc',q:'¿Cuánto tiempo llevan Nuria y Jonas en el piso?',opts:['un año','dos años','seis meses'],a:0},
 {t:'free',task:'Schreib eine Anzeige: Du suchst eine Wohnung oder einen Job in Barcelona. Beschreib, was du suchst. (5–6 Sätze)',hint:'Busco un piso / trabajo que … · Llevo … · Lo que más me importa es … · donde …',focus:'Relativsätze, que + Subjuntivo, llevar + Gerundium',model:'Hola, me llamo Jonas y llevo seis meses viviendo en Barcelona. Busco un piso que esté cerca de la universidad y que no sea muy caro. Lo que más me importa es que la habitación sea luminosa. Me gustaría vivir en un barrio donde haya bares y tiendas. Soy ordenado y no fumo. ¡Escríbeme si tienes algo!'}]}
],
placement:[
 {t:'mc',q:'No entiendo ___ dices.',opts:['lo que','que','donde'],a:0},
 {t:'mc',q:'Busco un piso que ___ terraza.',opts:['tenga','tiene','tendrá'],a:0},
 {t:'gap',q:'La empresa en ___ trabajo es alemana.',a:['la que','la cual']},
 {t:'mc',q:'„Ich lebe seit zwei Jahren hier.“',opts:['Llevo dos años viviendo aquí.','Sigo dos años viviendo aquí.','Vuelvo dos años a vivir aquí.'],a:0},
 {t:'gap',q:'Tengo un amigo que ___ (hablar) japonés.',a:['habla']},
 {t:'gap',q:'Pablo ha dejado ___ fumar.',a:['de']}],
resumen:`<h3>Relativsätze</h3><p class="es-t">que (Personen & Sachen) · donde · lo que · con el que / la que · con quien</p>
<h3>Bekannt ↔ gesucht</h3><p class="es-t">Tengo un piso que tiene terraza. ↔ Busco un piso que tenga terraza.</p><p class="es-t">No hay nadie que sepa … · ¿Conoces a alguien que hable …?</p>
<h3>Periphrasen</h3><p class="es-t">seguir + Gerundium · llevar + Zeit + Gerundium · dejar de / volver a / acabar de + Infinitiv</p>`});

COURSE.units.push({id:'u23',n:'25',level:'B1b',title:'Un mundo mejor',sub:'Gefühle (me alegra que, me molesta que) · Bewertungen (es importante que, es una pena que) · Umwelt & Nachhaltigkeit · B1 abschließen',
goals:['Gefühle + Subjuntivo: me alegra / me molesta / me preocupa que','Bewertungen: es importante / necesario / normal / una pena que','gleiche Person → Infinitiv (me alegra verte)','Umwelt-Wortschatz','Sich beschweren & Vorschläge machen','B1-Wiederholung: Subjuntivo-Auslöser im Überblick'],
situacion:{title:'Klimastreik an der Uni',npc:'Laia',scene:'An der UPC gibt es eine Versammlung zum Thema Nachhaltigkeit auf dem Campus. Laia ist im Organisationsteam und fragt dich, was dich stört und was du vorschlägst.',role:'Du bist Laia, engagierte Studentin, freundlich und begeistert. Ihr duzt euch. Frag Jonas, was ihn am Campus stört (¿Qué te molesta?), was er wichtig findet und was die Uni tun sollte. Benutze Gefühle und Bewertungen mit Subjuntivo (Me preocupa que…, Es importante que…, Es una pena que…).',goal:'Sag, was dich stört und freut, mit me molesta / me alegra que + Subj., und mach Vorschläge mit es importante / necesario que + Subj.'},
lessons:[
{id:'l1',title:'Mich freut, dass …',desc:'me alegra que · me molesta que',steps:[
 {t:'info',title:'Gefühle + Subjuntivo',html:`<p>Bei Gefühlen über etwas, das <b>jemand anderes</b> tut, steht der Subjuntivo:</p>
 <table><tr><th>Gefühl</th><th>Beispiel</th></tr>
 <tr><td class="es-t">me alegra que</td><td class="es-t">Me alegra que <b>vengas</b>.</td></tr>
 <tr><td class="es-t">me molesta que</td><td class="es-t">Me molesta que la gente <b>tire</b> basura.</td></tr>
 <tr><td class="es-t">me preocupa que</td><td class="es-t">Me preocupa que no <b>llueva</b>.</td></tr>
 <tr><td class="es-t">me encanta / odio que</td><td class="es-t">Me encanta que <b>haga</b> sol.</td></tr></table>
 <div class="ex">Gleiche Person → Infinitiv: <span class="es-t">Me alegra <b>verte</b>.</span> (Ich freue mich – ich sehe dich.) Aber: <span class="es-t">Me alegra que <b>me veas</b>.</span></div>`},
 {t:'mc',q:'Me molesta que mis vecinos ___ música por la noche.',opts:['pongan','ponen','poner'],a:0},
 {t:'mc',q:'Me encanta ___ en la playa.',opts:['pasear','que paseo','que pasee'],a:0},
 {t:'gap',q:'Me alegra que ___ (tú, estar) mejor.',a:['estés']},
 {t:'gap',q:'Nos preocupa que el agua ___ (ser) tan cara.',a:['sea']},
 {t:'order',es:'Me molesta que no reciclen en la oficina.',de:'Mich stört, dass sie im Büro nicht recyceln.'},
 {t:'tr',de:'Es freut mich, dass ihr gekommen seid. (dass ihr kommt)',a:['Me alegra que vengáis.','Me alegra que hayáis venido.']},
 {t:'listen',es:'Me encanta que en Barcelona haya tantas bicis.',de:'Ich finde es toll, dass es in Barcelona so viele Fahrräder gibt.'}]},
{id:'l2',title:'Es ist wichtig, dass …',desc:'es importante que · es una pena que',steps:[
 {t:'info',title:'Bewertungen + Subjuntivo',html:`<table><tr><th>allgemein: Infinitiv</th><th>mit Person: que + Subj.</th></tr>
 <tr><td class="es-t">Es importante reciclar.</td><td class="es-t">Es importante que <b>reciclemos</b>.</td></tr>
 <tr><td class="es-t">Es necesario ahorrar agua.</td><td class="es-t">Es necesario que todos <b>ahorren</b> agua.</td></tr>
 <tr><td class="es-t">Es una pena tirar comida.</td><td class="es-t">Es una pena que la gente <b>tire</b> comida.</td></tr></table>
 <p class="es-t">Auch: es normal / lógico / increíble / mejor / fundamental que …</p>
 <div class="ojo">Aber Tatsachen → Indikativ: <span class="es-t">Es verdad / Es obvio que hace calor.</span></div>`},
 {t:'mc',q:'Es importante que ___ menos plástico.',opts:['usemos','usamos','usar'],a:0},
 {t:'mc',q:'Es necesario ___ el transporte público.',opts:['usar','que usamos','usamos'],a:0},
 {t:'mc',q:'Es obvio que el clima ___ cambiando.',opts:['está','esté','estar'],a:0},
 {t:'gap',q:'Es una pena que no ___ (haber) más zonas verdes.',a:['haya']},
 {t:'gap',q:'Es mejor que ___ (vosotros, ir) en bici.',a:['vayáis']},
 {t:'tr',de:'Es ist schade, dass du nicht kommen kannst.',a:['Es una pena que no puedas venir.','Qué pena que no puedas venir.']}]},
{id:'l3',title:'Umwelt',desc:'reciclar · el cambio climático',steps:[
 {t:'vocab',title:'Umwelt & Nachhaltigkeit',items:[['el medio ambiente','die Umwelt','🌍'],['el cambio climático','der Klimawandel','🌡️'],['la contaminación','die Verschmutzung','🏭'],['reciclar','recyceln','♻️'],['la basura','der Müll','🗑️'],['el plástico','das Plastik','🧴'],['ahorrar energía / agua','Energie / Wasser sparen','💡'],['la sequía','die Dürre','🏜️'],['las energías renovables','erneuerbare Energien','☀️'],['el transporte público','der öffentliche Verkehr','🚇'],['los residuos','die Abfälle','🗑️'],['sostenible','nachhaltig','🌱']]},
 {t:'match',q:'Was gehört zusammen?',pairs:[['ahorrar','agua'],['reciclar','plástico'],['energías','renovables'],['transporte','público'],['cambio','climático']]},
 {t:'mc',q:'„die Dürre“',opts:['la sequía','la basura','la contaminación'],a:0},
 {t:'dialog',place:'Asamblea en el campus',title:'Was stört dich?',scene:'Laia leitet die Versammlung und fragt dich direkt.',lines:[
  {n:'Laia',es:'Jonas, tú que eres de Alemania, ¿qué te molesta aquí en el campus?',de:'Jonas, du kommst ja aus Deutschland – was stört dich hier auf dem Campus?'},
  {you:true,opts:[{es:'Me molesta que no haya contenedores para reciclar en las aulas.',ok:true},{es:'Me molesta que no hay contenedores para reciclar en las aulas.',ok:false,why:'Gefühl + <b>que</b> → Subjuntivo: <i>haya</i>.'}]},
  {n:'Laia',es:'Es verdad. ¿Y qué propones?',de:'Stimmt. Und was schlägst du vor?'},
  {you:true,opts:[{es:'Es importante que la universidad ponga más contenedores y fuentes de agua.',ok:true},{es:'Es importante que la universidad pone más contenedores y fuentes de agua.',ok:false,why:'<b>Es importante que</b> → Subjuntivo: <i>ponga</i>.'}]},
  {n:'Laia',es:'¡Me encanta la idea! Lo apunto.',de:'Super Idee! Ich schreibe es auf.'}]},
 {t:'speak',es:'Es fundamental que todos ahorremos agua, sobre todo en verano.',de:'Es ist grundlegend, dass wir alle Wasser sparen, vor allem im Sommer.'}]},
{id:'l4',title:'B1-Check: Wann Subjuntivo?',desc:'Überblick · Lesen · Schreiben',steps:[
 {t:'info',title:'Die Subjuntivo-Auslöser aus B1',html:`<table><tr><th>Bereich</th><th>Auslöser</th></tr>
 <tr><td>Wünsche & Rat</td><td class="es-t">quiero que, espero que, ojalá, te recomiendo que</td></tr>
 <tr><td>Zweifel & verneinte Meinung</td><td class="es-t">no creo que, quizá, es posible que, puede que</td></tr>
 <tr><td>Gefühle & Bewertung</td><td class="es-t">me alegra que, me molesta que, es importante que, es una pena que</td></tr>
 <tr><td>Zeit (Zukunft) & Zweck</td><td class="es-t">cuando, en cuanto, hasta que, antes de que, para que</td></tr>
 <tr><td>Gesuchtes</td><td class="es-t">busco un piso que, no hay nadie que</td></tr>
 <tr><td>Bitten</td><td class="es-t">me pide que, te digo que (Befehl)</td></tr></table>
 <div class="ex">Faustregel: Tatsache → Indikativ. Wunsch, Zweifel, Gefühl, Zukunft, Unbekanntes → Subjuntivo.</div>`},
 {t:'mc',q:'Espero que ___ buen tiempo el sábado.',opts:['haga','hace','hará'],a:0},
 {t:'mc',q:'Sé que ___ razón.',opts:['tienes','tengas','tener'],a:0},
 {t:'mc',q:'Cuando ___ el máster, me mudaré.',opts:['termine','termino','terminaré'],a:0},
 {t:'read',title:'Barcelona sin agua',text:`Este verano, Cataluña ha vivido una de las peores sequías de su historia. En muchos pueblos se ha prohibido llenar piscinas y regar los jardines. En Barcelona, las fuentes de los parques se han apagado.

«Me preocupa que la gente no se tome en serio el problema», dice Jordi, un agricultor de la zona. «Es necesario que todos cambiemos nuestros hábitos: duchas más cortas, menos agua en el jardín». Los expertos creen que las sequías serán cada vez más frecuentes. Por eso, es importante que las ciudades {inviertan|investieren} en reciclar el agua. Lo bueno es que muchos jóvenes ya están {concienciados|sensibilisiert}: el consumo de agua en los hogares ha bajado un 10 %.`,de:`Diesen Sommer hat Katalonien eine der schlimmsten Dürren seiner Geschichte erlebt. In vielen Dörfern wurde verboten, Pools zu füllen und Gärten zu bewässern. In Barcelona wurden die Brunnen in den Parks abgestellt.\n\n„Mich besorgt, dass die Leute das Problem nicht ernst nehmen“, sagt Jordi, ein Landwirt aus der Gegend. „Es ist nötig, dass wir alle unsere Gewohnheiten ändern: kürzere Duschen, weniger Wasser im Garten.“ Die Experten glauben, dass Dürren immer häufiger werden. Deshalb ist es wichtig, dass die Städte in das Recycling von Wasser investieren. Das Gute ist, dass viele junge Leute schon sensibilisiert sind: Der Wasserverbrauch in den Haushalten ist um 10 % gesunken.`},
 {t:'mc',q:'¿Qué le preocupa a Jordi?',opts:['que la gente no se tome en serio el problema','que no haya piscinas','que llueva demasiado'],a:0},
 {t:'gap',q:'Es necesario que todos ___ (cambiar) nuestros hábitos.',a:['cambiemos']},
 {t:'free',task:'Schreib einen kurzen Leserbrief (6–8 Sätze): Was stört dich in deiner Stadt in Sachen Umwelt, was freut dich, und was schlägst du vor?',hint:'Me molesta que … · Me alegra que … · Es importante que … · Es una pena que … · Creo que … / No creo que …',focus:'Gefühle & Bewertungen + Subjuntivo, Meinung',model:'Querida redacción: Vivo en Mannheim y me preocupa el medio ambiente. Me molesta que mucha gente use el coche para distancias cortas. Es una pena que no haya más carriles bici en el centro. Sin embargo, me alegra que la ciudad haya plantado más árboles este año. Creo que es importante que el transporte público sea más barato. No creo que la gente cambie si no hay alternativas. Un saludo, Jonas'}]}
],
placement:[
 {t:'mc',q:'Me alegra que ___ aquí.',opts:['estés','estás','estar'],a:0},
 {t:'mc',q:'Es importante que todos ___.',opts:['reciclemos','reciclamos','reciclar'],a:0},
 {t:'gap',q:'Es una pena que no ___ (tú, poder) venir.',a:['puedas']},
 {t:'mc',q:'Me encanta ___ en bici por la ciudad.',opts:['ir','que voy','que vaya'],a:0},
 {t:'gap',q:'Es obvio que el clima ___ (estar) cambiando.',a:['está']},
 {t:'mc',q:'„die Umwelt“',opts:['el medio ambiente','el ambiente medio','la naturaleza media'],a:0}],
resumen:`<h3>Gefühle</h3><p class="es-t">me alegra / me molesta / me preocupa / me encanta que + Subj.</p><p>gleiche Person: <span class="es-t">Me alegra verte.</span></p>
<h3>Bewertungen</h3><p class="es-t">es importante / necesario / mejor / una pena que + Subj. · es importante + Inf. (allgemein)</p><p>Tatsache: <span class="es-t">es verdad / obvio / está claro que + Ind.</span></p>
<h3>Umwelt</h3><p class="es-t">el medio ambiente · el cambio climático · reciclar · ahorrar agua · la sequía · sostenible</p>`});
