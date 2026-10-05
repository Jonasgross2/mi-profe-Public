/* ================= B1 · ERSTE SCHRITTE ================= */

/* ================= UNIDAD 16 · OJALÁ ================= */
COURSE.units.push({id:'u16',n:'18',level:'B1',title:'Ojalá',sub:'Subjuntivo Präsens: Formen · Wünsche (quiero que, espero que, ojalá) · Ratschläge (te recomiendo que) · verneinter Imperativ',
goals:['Wann braucht man den Subjuntivo? (WEIRDO-Idee)','Formen: regelmäßig (hable, coma, viva)','Formen: unregelmäßig (tenga, haga, sea, vaya, esté)','quiero que / espero que / ojalá','te recomiendo que / es importante que','Verneinter Imperativ: no hables, no vayas'],
situacion:{title:'Ein Freund kommt nach Barcelona',npc:'Lukas',scene:'Dein Freund Lukas aus Mannheim (er lernt auch Spanisch) besucht dich nächste Woche zum ersten Mal in Barcelona. Ihr telefoniert auf Spanisch zum Üben.',role:'Du bist Lukas, ein Freund von Jonas aus Mannheim, Spanisch-Niveau A2, neugierig, etwas chaotisch. Ihr duzt euch. Frag Jonas nach Tipps für Barcelona (¿Qué me recomiendas? ¿Qué no debo hacer?). Mach selbst einfache Fehler, damit Jonas dich korrigieren kann. Benutze ab und zu Subjuntivo-Sätze (Espero que haga buen tiempo, Ojalá podamos ir a la playa).',goal:'Gib Lukas Tipps mit te recomiendo que / es importante que + Subjuntivo, sag, was er nicht tun soll (No vayas…, No dejes…), und äußere Wünsche (Espero que…, Ojalá…).'},
lessons:[
{id:'l1',title:'Was ist der Subjuntivo?',desc:'hable · coma · viva',steps:[
 {t:'info',title:'Eine neue Art, Verben zu benutzen',html:`<p>Der <b>Subjuntivo</b> ist keine Zeit, sondern ein <b>Modus</b>: Er drückt aus, dass etwas nicht als Tatsache gesagt wird, sondern <b>gewünscht, empfohlen, bezweifelt oder gefühlt</b> wird.</p>
 <table><tr><th>Indikativ (Tatsache)</th><th>Subjuntivo (Wunsch)</th></tr>
 <tr><td class="es-t">Laia habla español.</td><td class="es-t">Quiero que Laia hable español.</td></tr>
 <tr><td class="es-t">Hace sol.</td><td class="es-t">Ojalá haga sol.</td></tr></table>
 <p>Typisch: <b>zwei verschiedene Personen</b> – ich will, dass <b>du</b> …: <span class="es-t">Quiero que (tú) vengas.</span></p>
 <div class="ex">Gleiche Person → Infinitiv: <span class="es-t">Quiero venir.</span> (ich will kommen) – nicht <s>quiero que venga</s>.</div>`},
 {t:'info',title:'Regelmäßige Formen: Endung tauschen',html:`<p>Nimm die <b>yo-Form</b> im Präsens, streich das <b>-o</b>, und tausch den Vokal: -ar → <b>e</b>, -er/-ir → <b>a</b>.</p>
 <table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
 <tr><td>yo</td><td class="es-t">hable</td><td class="es-t">coma</td><td class="es-t">viva</td></tr>
 <tr><td>tú</td><td class="es-t">hables</td><td class="es-t">comas</td><td class="es-t">vivas</td></tr>
 <tr><td>él / ella / usted</td><td class="es-t">hable</td><td class="es-t">coma</td><td class="es-t">viva</td></tr>
 <tr><td>nosotros</td><td class="es-t">hablemos</td><td class="es-t">comamos</td><td class="es-t">vivamos</td></tr>
 <tr><td>vosotros</td><td class="es-t">habléis</td><td class="es-t">comáis</td><td class="es-t">viváis</td></tr>
 <tr><td>ellos / ustedes</td><td class="es-t">hablen</td><td class="es-t">coman</td><td class="es-t">vivan</td></tr></table>
 <div class="ex">Kennst du schon! Der <i>usted</i>-Imperativ aus Unidad 13 (<i>tome, beba</i>) ist genau diese Form.</div>`},
 {t:'conj',verb:'trabajar',de:'arbeiten',tense:'Subjuntivo',forms:['trabaje','trabajes','trabaje','trabajemos','trabajéis','trabajen']},
 {t:'conj',verb:'escribir',de:'schreiben',tense:'Subjuntivo',forms:['escriba','escribas','escriba','escribamos','escribáis','escriban']},
 {t:'mc',q:'Quiero que tú ___ más despacio.',opts:['hables','hablas','hablar'],a:0},
 {t:'mc',q:'Quiero ___ en Barcelona. (ich selbst)',opts:['vivir','que viva','que vivo'],a:0,why:'Gleiche Person → Infinitiv.'},
 {t:'gap',q:'Mi madre quiere que yo ___ (comer) más verdura.',a:['coma']},
 {t:'gap',q:'Espero que mis amigos me ___ (escribir) pronto.',a:['escriban']}]},
{id:'l2',title:'Unregelmäßige Formen',desc:'tenga · haga · sea · vaya',steps:[
 {t:'info',title:'Von der yo-Form – und sechs Sonderfälle',html:`<p>Ist die yo-Form unregelmäßig, ist es auch der Subjuntivo – <b>in allen Personen</b>:</p>
 <table><tr><th>yo (Präsens)</th><th>Subjuntivo</th></tr>
 <tr><td class="es-t">tengo</td><td class="es-t">tenga, tengas …</td></tr>
 <tr><td class="es-t">hago</td><td class="es-t">haga, hagas …</td></tr>
 <tr><td class="es-t">vengo / salgo / pongo / digo</td><td class="es-t">venga / salga / ponga / diga</td></tr>
 <tr><td class="es-t">puedo / quiero</td><td class="es-t">pueda / quiera (aber: podamos, queramos)</td></tr></table>
 <p><b>Ganz eigene Formen:</b></p>
 <p class="es-t">ser → sea · ir → vaya · estar → esté · haber → haya · saber → sepa · dar → dé</p>`},
 {t:'conj',verb:'ir',de:'gehen',tense:'Subjuntivo',forms:['vaya','vayas','vaya','vayamos','vayáis','vayan']},
 {t:'match',q:'Infinitiv → Subjuntivo (yo)',pairs:[['ser','sea'],['estar','esté'],['tener','tenga'],['hacer','haga'],['saber','sepa'],['haber','haya']]},
 {t:'gap',q:'Ojalá ___ (hacer) buen tiempo el sábado.',a:['haga']},
 {t:'gap',q:'Espero que ___ (tú, tener) suerte en el examen.',a:['tengas']},
 {t:'gap',q:'Quiero que ___ (nosotros, ir) juntos a la playa.',a:['vayamos']},
 {t:'gap',q:'Ojalá no ___ (haber) mucha gente en el museo.',a:['haya']},
 {t:'mc',q:'Espero que la fiesta ___ divertida.',opts:['sea','es','esté'],a:0},
 {t:'listen',es:'Ojalá podamos ir a la playa este fin de semana.',de:'Hoffentlich können wir dieses Wochenende an den Strand gehen.'}]},
{id:'l3',title:'Wünsche & Empfehlungen',desc:'ojalá · espero que · te recomiendo que',steps:[
 {t:'vocab',title:'Auslöser für den Subjuntivo',items:[['ojalá','hoffentlich','🤞'],['espero que …','ich hoffe, dass …','🙏'],['quiero que …','ich will, dass …','👉'],['prefiero que …','mir ist lieber, dass …','⚖️'],['te recomiendo que …','ich empfehle dir, dass …','💡'],['te aconsejo que …','ich rate dir, dass …','🧭'],['es importante que …','es ist wichtig, dass …','❗'],['es mejor que …','es ist besser, dass …','👍'],['¡Que te vaya bien!','Mach’s gut! / Viel Erfolg!','🍀'],['¡Que tengas un buen día!','Einen schönen Tag!','☀️'],['¡Que aproveche!','Guten Appetit!','🍽️']]},
 {t:'info',title:'Kennst du schon: Que …!',html:`<p>Viele feste Wünsche sind Subjuntivo mit <b>que</b> am Anfang – du hast sie schon gelernt:</p>
 <p class="es-t">¡Que te mejores! · ¡Que lo pases bien! · ¡Que aproveche! · ¡Que tengas suerte!</p>
 <p>= „(Ich wünsche dir,) dass …“</p>`},
 {t:'mc',q:'Te recomiendo que ___ el Park Güell temprano.',opts:['visites','visitas','visitar'],a:0},
 {t:'mc',q:'Es importante que ___ las entradas online.',opts:['compres','compras','comprar'],a:0},
 {t:'mc',q:'Es importante ___ agua cuando hace calor. (allgemein, keine Person)',opts:['beber','que bebas','que bebes'],a:0,why:'Ohne bestimmte Person → Infinitiv.'},
 {t:'gap',q:'Te aconsejo que ___ (llevar) una chaqueta, por la noche hace fresco.',a:['lleves']},
 {t:'gap',q:'Mis padres prefieren que ___ (yo, volver) a Alemania después del máster.',a:['vuelva']},
 {t:'tr',de:'Hoffentlich regnet es morgen nicht.',a:['Ojalá no llueva mañana.','Ojalá mañana no llueva.']},
 {t:'tr',de:'Ich empfehle dir, die Metro zu nehmen.',a:['Te recomiendo que tomes el metro.','Te recomiendo que cojas el metro.']},
 {t:'speak',es:'Espero que te guste Barcelona tanto como a mí.',de:'Ich hoffe, dass dir Barcelona so gut gefällt wie mir.'}]},
{id:'l4',title:'Mach das nicht!',desc:'no vayas · no dejes · no te preocupes',steps:[
 {t:'info',title:'Verneinter Imperativ = no + Subjuntivo',html:`<table><tr><th></th><th>bejahend</th><th>verneint</th></tr>
 <tr><td>tú</td><td class="es-t">habla</td><td class="es-t">no hables</td></tr>
 <tr><td>tú</td><td class="es-t">ve</td><td class="es-t">no vayas</td></tr>
 <tr><td>tú</td><td class="es-t">hazlo</td><td class="es-t">no lo hagas</td></tr>
 <tr><td>usted</td><td class="es-t">venga</td><td class="es-t">no venga</td></tr>
 <tr><td>vosotros</td><td class="es-t">comed</td><td class="es-t">no comáis</td></tr></table>
 <div class="ex">Pronomen stehen beim verneinten Imperativ <b>vor</b> dem Verb: <span class="es-t">¡Cómpralo!</span> ↔ <span class="es-t">¡No lo compres!</span> · <span class="es-t">¡No te preocupes!</span></div>`},
 {t:'mc',q:'„Mach dir keine Sorgen!“',opts:['¡No te preocupes!','¡No preocúpate!','¡No te preocupas!'],a:0},
 {t:'mc',q:'„Geh nicht allein dorthin!“',opts:['¡No vayas solo!','¡No ve solo!','¡No vas solo!'],a:0},
 {t:'gap',q:'No ___ (dejar) el móvil en la mesa de la terraza.',a:['dejes']},
 {t:'gap',q:'¿El taxi? No ___ ___ (lo + tomar), es muy caro. Toma el metro.',a:['lo','tomes']},
 {t:'read',title:'Consejos para tu primera visita a Barcelona',text:`Si vienes a Barcelona por primera vez, aquí tienes algunos consejos. {Primero que nada|Zuallererst}, te recomiendo que compres una tarjeta de transporte: es mucho más barata que los billetes {sueltos|einzeln}. No lleves la cartera en el bolsillo de atrás, sobre todo en el metro y en las Ramblas, porque hay muchos {carteristas|Taschendiebe}.

Para comer, no vayas a los restaurantes con fotos en el menú; es mejor que busques un bar pequeño en Gràcia o en el Poble-sec. Y no te sorprendas si la gente cena a las diez de la noche. Por último, es importante que digas algunas palabras en catalán: un simple «bon dia» o «gràcies» le gusta a todo el mundo. ¡Que disfrutes de la ciudad!`,de:'Wenn du zum ersten Mal nach Barcelona kommst, hier ein paar Tipps. Zuallererst empfehle ich dir, eine Fahrkarte für den Nahverkehr zu kaufen: Sie ist viel günstiger als Einzeltickets. Trag deinen Geldbeutel nicht in der Gesäßtasche, vor allem in der Metro und auf den Ramblas, denn es gibt viele Taschendiebe.\n\nZum Essen: Geh nicht in Restaurants mit Fotos auf der Speisekarte; besser suchst du dir eine kleine Bar in Gràcia oder im Poble-sec. Und wundere dich nicht, wenn die Leute um zehn Uhr abends essen. Zuletzt ist es wichtig, dass du ein paar Wörter Katalanisch sagst: Ein einfaches „bon dia“ oder „gràcies“ mag jeder. Genieß die Stadt!'},
 {t:'mc',q:'¿Qué NO debes hacer según el texto?',opts:['llevar la cartera en el bolsillo de atrás','comprar una tarjeta de transporte','decir «gràcies»'],a:0},
 {t:'free',task:'Lukas kommt nächste Woche. Schreib ihm 5 Tipps für Barcelona: 3 Empfehlungen mit Subjuntivo und 2 Verbote.',hint:'Te recomiendo que … · Es importante que … · Es mejor que … · No vayas … · No dejes …',focus:'Subjuntivo nach Empfehlungen, verneinter Imperativ',model:'¡Hola Lukas! Te recomiendo que traigas ropa ligera, porque todavía hace calor. Es importante que compres la T-casual para el metro. Es mejor que visites la Sagrada Familia por la mañana. No vayas a cenar a las Ramblas, es muy caro. Y no dejes la mochila en la playa sin vigilar. ¡Ojalá tengamos buen tiempo!'}]}
],
placement:[
 {t:'mc',q:'Quiero que tú ___ más despacio.',opts:['hables','hablas','hablar'],a:0},
 {t:'gap',q:'Ojalá ___ (hacer) buen tiempo mañana.',a:['haga']},
 {t:'mc',q:'„Mach dir keine Sorgen!“',opts:['¡No te preocupes!','¡No preocúpate!','¡No te preocupas!'],a:0},
 {t:'mc',q:'Es importante que ___ las entradas online.',opts:['compres','compras','comprar'],a:0},
 {t:'gap',q:'Espero que la fiesta ___ (ser) divertida.',a:['sea']},
 {t:'mc',q:'Quiero ___ en Barcelona. (ich selbst)',opts:['vivir','que viva','que vivo'],a:0}],
resumen:`<h3>Subjuntivo: Formen</h3><table><tr><th>hablar</th><th>comer</th><th>vivir</th></tr><tr><td class="es-t">hable, hables, hable, hablemos, habléis, hablen</td><td class="es-t">coma, comas …</td><td class="es-t">viva, vivas …</td></tr></table>
<p class="es-t">tenga · haga · venga · salga · diga · pueda — sea · vaya · esté · haya · sepa · dé</p>
<h3>Auslöser</h3><p class="es-t">ojalá · espero que · quiero que · prefiero que · te recomiendo que · es importante que · es mejor que</p>
<p>Gleiche Person / allgemein → Infinitiv: <span class="es-t">Quiero vivir aquí. · Es importante beber agua.</span></p>
<h3>Verneinter Imperativ</h3><p class="es-t">no hables · no vayas · no lo hagas · ¡No te preocupes!</p>`});

/* ================= UNIDAD 17 · HISTORIAS ================= */
COURSE.units.push({id:'u17',n:'19',level:'B1',title:'Historias',sub:'Plusquamperfekt (había hecho) · alle vier Vergangenheitszeiten im Zusammenspiel · Erzähl-Konnektoren · Anekdoten erzählen & reagieren',
goals:['Plusquamperfekt: había + Partizip','Vorvergangenheit: Das war schon passiert, als …','Perfekt, Indefinido, Imperfekt, Plusquamperfekt unterscheiden','Konnektoren: mientras, en cuanto, de repente, resulta que …','Spannend erzählen & reagieren','Wiederholung unregelmäßiger Partizipien'],
situacion:{title:'Anekdoten in der Bar',npc:'Sergio',scene:'Freitagabend in einer Bar im Born. Sergio, ein Kumpel aus dem Master, erzählt gern Geschichten – und will auch deine hören.',role:'Du bist Sergio, 27, aus Zaragoza, Master-Kommilitone von Jonas, lustig und neugierig. Ihr duzt euch. Erzähl eine kurze peinliche Anekdote (mit Plusquamperfekt: cuando llegué, el tren ya había salido…). Frag dann Jonas nach seiner peinlichsten oder lustigsten Geschichte und reagiere lebhaft (¿En serio? ¡Qué fuerte! ¿Y qué pasó después?). Hilf ihm mit Konnektoren.',goal:'Erzähl eine Anekdote mit allen Vergangenheitszeiten, insbesondere einmal mit había + Partizip, und benutze Konnektoren (resulta que, de repente, al final).'},
lessons:[
{id:'l1',title:'Das Plusquamperfekt',desc:'había salido · ya habían cerrado',steps:[
 {t:'info',title:'Noch weiter zurück: había + Partizip',html:`<p>Für etwas, das <b>vor</b> einem anderen Ereignis in der Vergangenheit schon passiert war:</p>
 <p class="es-t" style="font-size:18px">Cuando llegué a la estación, el tren ya <b>había salido</b>.</p>
 <p>= Als ich am Bahnhof ankam, <b>war</b> der Zug schon <b>abgefahren</b>.</p>
 <table><tr><td>yo</td><td class="es-t">había</td></tr><tr><td>tú</td><td class="es-t">habías</td></tr><tr><td>él / ella / usted</td><td class="es-t">había</td></tr><tr><td>nosotros</td><td class="es-t">habíamos</td></tr><tr><td>vosotros</td><td class="es-t">habíais</td></tr><tr><td>ellos / ustedes</td><td class="es-t">habían</td></tr></table>
 <p>+ Partizip wie beim Perfekt: <span class="es-t">hablado, comido, vivido · hecho, visto, dicho, escrito, puesto, vuelto, roto, abierto</span></p>
 <div class="ex">Genau wie im Deutschen: <i>war … abgefahren</i> = <i>había salido</i>. Oft mit <b>ya</b> (schon) oder <b>nunca antes</b> (noch nie zuvor).</div>`},
 {t:'conj',verb:'ver',de:'sehen',tense:'Plusquamperfekt',forms:['había visto','habías visto','había visto','habíamos visto','habíais visto','habían visto']},
 {t:'mc',q:'Cuando llegamos al cine, la película ya ___.',opts:['había empezado','ha empezado','empezaba'],a:0},
 {t:'gap',q:'Nunca antes ___ ___ (yo, ver) el mar tan azul.',a:['había','visto']},
 {t:'gap',q:'Cuando volví a casa, mis compañeros ya ___ ___ (hacer) la cena.',a:['habían','hecho']},
 {t:'gap',q:'Me dijo que ya ___ ___ (escribir) el informe.',a:['había','escrito']},
 {t:'tr',de:'Als ich ankam, war das Geschäft schon geschlossen.',a:['Cuando llegué, la tienda ya había cerrado.','Cuando llegué, la tienda ya estaba cerrada.']},
 {t:'listen',es:'Cuando llegué al aeropuerto, el avión ya había despegado.',de:'Als ich am Flughafen ankam, war das Flugzeug schon gestartet.'}]},
{id:'l2',title:'Vier Vergangenheiten',desc:'he ido · fui · iba · había ido',steps:[
 {t:'info',title:'Welche Vergangenheit wofür?',html:`<table><tr><th>Zeit</th><th>wofür</th><th>Beispiel</th></tr>
 <tr><td>Perfekt</td><td>Zeitraum bis jetzt (hoy, esta semana, nunca)</td><td class="es-t">Hoy he trabajado mucho.</td></tr>
 <tr><td>Indefinido</td><td>abgeschlossenes Ereignis (ayer, en 2020)</td><td class="es-t">Ayer fui al cine.</td></tr>
 <tr><td>Imperfekt</td><td>Beschreibung, Gewohnheit, Hintergrund</td><td class="es-t">Hacía frío. Antes iba a pie.</td></tr>
 <tr><td>Plusquamperfekt</td><td>noch früher als ein anderes Ereignis</td><td class="es-t">Ya había comido.</td></tr></table>`},
 {t:'mc',q:'Esta mañana ___ un café con Laia.',opts:['he tomado','tomaba','había tomado'],a:0,keep:true},
 {t:'mc',q:'En 2019 ___ un intercambio en Lyon.',opts:['hice','he hecho','hacía'],a:0,keep:true},
 {t:'mc',q:'De pequeño ___ al fútbol todos los domingos.',opts:['jugaba','jugué','he jugado'],a:0,keep:true},
 {t:'mc',q:'No tenía hambre porque ya ___.',opts:['había comido','comí','he comido'],a:0,keep:true},
 {t:'gap',q:'Ayer ___ (yo, ir) a un concierto. ___ (haber) mucha gente y la música ___ (ser) genial.',a:['fui','había','era']},
 {t:'gap',q:'Cuando ___ (yo, llegar) a la fiesta, Marc ya se ___ ___ (ir).',a:['llegué','había','ido']},
 {t:'order',es:'Cuando sonó la alarma, yo ya me había levantado.',de:'Als der Wecker klingelte, war ich schon aufgestanden.'},
 {t:'tr',de:'Heute habe ich nichts gegessen, weil ich gestern zu viel gegessen hatte.',a:['Hoy no he comido nada porque ayer había comido demasiado.','Hoy no he comido nada porque ayer comí demasiado.']}]},
{id:'l3',title:'Spannend erzählen',desc:'resulta que · de repente · en cuanto',steps:[
 {t:'vocab',title:'Konnektoren & Reaktionen',items:[['resulta que …','also, die Sache ist die: …','📖'],['un día','eines Tages','📅'],['mientras','während','⏳'],['en cuanto','sobald','⏱️'],['de repente','plötzlich','⚡'],['en ese momento','in diesem Moment','📍'],['sin embargo','jedoch','↔️'],['así que','also / deshalb','➡️'],['al final','am Ende','🏁'],['¿En serio?','Im Ernst?','😮'],['¡Qué fuerte!','Krass!','😱'],['¿Y qué pasó después?','Und was passierte dann?','❓'],['¡Qué vergüenza!','Wie peinlich!','🙈']]},
 {t:'mc',q:'Sergio: „Y entonces me di cuenta de que había entrado en el baño de mujeres.“ – Du:',opts:['¡Qué vergüenza!','¡Que aproveche!','¡Enhorabuena!'],a:0},
 {t:'mc',q:'___ estaba cocinando, escuchaba la radio.',opts:['Mientras','En cuanto','Sin embargo'],a:0},
 {t:'mc',q:'Perdí las llaves, ___ tuve que llamar a mi compañero de piso.',opts:['así que','mientras','resulta que'],a:0},
 {t:'gap',q:'En ___ llegué a casa, me fui a dormir.',a:['cuanto']},
 {t:'dialog',place:'Bar en el Born',title:'Sergios Geschichte',scene:'Sergio erzählt dir eine Anekdote.',lines:[
  {n:'Sergio',es:'Tío, ¿sabes qué me pasó ayer? Resulta que tenía una entrevista de trabajo a las nueve.',de:'Alter, weißt du, was mir gestern passiert ist? Ich hatte um neun ein Vorstellungsgespräch.'},
  {you:true,opts:[{es:'¿Y qué pasó?',ok:true},{es:'¿Y qué pasaba?',ok:false,why:'Gefragt ist nach dem Ereignis → Indefinido <b>pasó</b>.'}]},
  {n:'Sergio',es:'Pues me levanté tardísimo porque no había puesto la alarma.',de:'Na ja, ich bin super spät aufgestanden, weil ich den Wecker nicht gestellt hatte.'},
  {you:true,opts:[{es:'¡No me digas! ¿Y llegaste a tiempo?',ok:true},{es:'¡No me digas! ¿Y llegabas a tiempo?',ok:false,why:'Einmaliges Ereignis → <b>llegaste</b>.'}]},
  {n:'Sergio',es:'¡Qué va! Cuando llegué, ya habían empezado con otro candidato. Pero al final me hicieron la entrevista igualmente.',de:'Ach was! Als ich ankam, hatten sie schon mit einem anderen Kandidaten angefangen. Aber am Ende haben sie das Gespräch trotzdem mit mir gemacht.'},
  {you:true,opts:[{es:'¡Qué fuerte! Bueno, por suerte terminó bien.',ok:true},{es:'¡Qué fuerte! Bueno, por suerte terminaba bien.',ok:false,why:'Das Ende der Geschichte ist ein Ereignis → <b>terminó</b>.'}]}]},
 {t:'listen',es:'Resulta que mientras estaba esperando el autobús, me encontré con mi antiguo profesor.',de:'Also, während ich auf den Bus wartete, traf ich meinen alten Lehrer.'}]},
{id:'l4',title:'Deine Anekdote',desc:'Lesen & selbst erzählen',steps:[
 {t:'read',title:'La llave equivocada',text:`El verano pasado, mi amiga Paula se mudó a un piso nuevo en Valencia. El primer día, {después de|nachdem} haber trabajado diez horas, volvió a casa muy cansada. Era medianoche y llovía mucho. Abrió la puerta del {portal|Hauseingang}, subió al tercer piso e intentó abrir la puerta, pero la llave no {funcionaba|funktionierte}.

Lo intentó una y otra vez. De repente, la puerta se abrió y apareció un señor mayor en pijama. Paula no entendía nada. Resulta que se había equivocado de edificio: su piso estaba en el portal de al lado. ¡Qué vergüenza! El señor, sin embargo, fue muy amable y le ofreció un {paraguas|Regenschirm}. Ahora son buenos vecinos y, cada vez que se ven, se ríen de aquella noche.`,de:'Letzten Sommer zog meine Freundin Paula in eine neue Wohnung in Valencia. Am ersten Tag kam sie, nachdem sie zehn Stunden gearbeitet hatte, sehr müde nach Hause. Es war Mitternacht und es regnete stark. Sie öffnete die Haustür, ging in den dritten Stock und versuchte, die Tür aufzuschließen, aber der Schlüssel funktionierte nicht.\n\nSie versuchte es immer wieder. Plötzlich ging die Tür auf und ein älterer Herr im Schlafanzug erschien. Paula verstand gar nichts. Es stellte sich heraus, dass sie sich im Gebäude geirrt hatte: Ihre Wohnung war im Eingang nebenan. Wie peinlich! Der Herr war jedoch sehr freundlich und bot ihr einen Regenschirm an. Jetzt sind sie gute Nachbarn und jedes Mal, wenn sie sich sehen, lachen sie über jene Nacht.'},
 {t:'mc',q:'¿Por qué no funcionaba la llave?',opts:['Paula se había equivocado de edificio.','La llave estaba rota.','El señor había cambiado la puerta.'],a:0},
 {t:'mc',q:'„Era medianoche y llovía mucho“ – warum Imperfekt?',opts:['Es la descripción de la situación.','Son acciones nuevas en la historia.','Pasó antes de otra acción.'],a:0},
 {t:'mc',q:'„se había equivocado“ – warum Plusquamperfekt?',opts:['Pasó antes del momento de la historia.','Es una costumbre.','Es una descripción del tiempo.'],a:0},
 {t:'free',task:'Erzähl eine kleine Anekdote (lustig oder peinlich, 6–8 Sätze). Benutze Imperfekt, Indefinido und mindestens einmal das Plusquamperfekt, dazu 3 Konnektoren.',hint:'Resulta que … · Era … / Hacía … · Un día … · De repente … · Ya había … · Al final …',focus:'4 Vergangenheitszeiten, Konnektoren',model:'Resulta que el año pasado tenía un examen muy importante en la DHBW. Era invierno y hacía mucho frío. Aquella mañana salí de casa tarde porque no había oído la alarma. Mientras corría a la estación, empezó a nevar. Cuando llegué, el tren ya había salido, así que tomé un taxi. Al final llegué a tiempo, pero de repente me di cuenta de que había olvidado mi bolígrafo. ¡Qué vergüenza! Por suerte, una compañera me prestó uno.'},
 {t:'speak',es:'Cuando llegué a la estación, el tren ya había salido.',de:'Als ich am Bahnhof ankam, war der Zug schon abgefahren.'}]}
],
placement:[
 {t:'mc',q:'Cuando llegamos al cine, la película ya ___.',opts:['había empezado','ha empezado','empezaba'],a:0},
 {t:'gap',q:'Nunca antes ___ ___ (yo, ver) algo así.',a:['había','visto']},
 {t:'mc',q:'De pequeño ___ al fútbol todos los domingos.',opts:['jugaba','jugué','he jugado'],a:0},
 {t:'mc',q:'___ estaba cocinando, escuchaba la radio.',opts:['Mientras','En cuanto','Así que'],a:0},
 {t:'mc',q:'No tenía hambre porque ya ___.',opts:['había comido','comí','he comido'],a:0},
 {t:'gap',q:'Cuando volví, mis compañeros ya ___ ___ (hacer) la cena.',a:['habían','hecho']}],
resumen:`<h3>Plusquamperfekt</h3><p class="es-t">había / habías / había / habíamos / habíais / habían + Partizip</p><p class="es-t">Cuando llegué, el tren ya había salido.</p>
<h3>Vier Vergangenheiten</h3><table><tr><td>Perfekt</td><td class="es-t">Hoy he trabajado mucho.</td></tr><tr><td>Indefinido</td><td class="es-t">Ayer fui al cine.</td></tr><tr><td>Imperfekt</td><td class="es-t">Hacía frío. Antes iba a pie.</td></tr><tr><td>Plusquamperfekt</td><td class="es-t">Ya había comido.</td></tr></table>
<h3>Erzählen</h3><p class="es-t">resulta que · un día · mientras · en cuanto · de repente · sin embargo · así que · al final</p><p class="es-t">¿En serio? · ¡Qué fuerte! · ¿Y qué pasó después? · ¡Qué vergüenza!</p>`});

/* ================= UNIDAD 18 · SI TENGO TIEMPO ================= */
COURSE.units.push({id:'u18',n:'20',level:'B1',title:'Si tengo tiempo…',sub:'Bedingungen (si + Präsens) · Konditional (haría, tendría) · Ratschläge: yo en tu lugar … · Hypothesen über die Gegenwart',
goals:['si + Präsens → Präsens / Futur / Imperativ','Konditional: regelmäßig (trabajaría)','Konditional: unregelmäßig (tendría, haría, podría, diría)','Yo en tu lugar … / Yo que tú …','Höfliche Bitten & Vorschläge','Wohnungs- & WG-Probleme lösen'],
situacion:{title:'WG-Krisensitzung',npc:'Nuria',scene:'In eurer WG gibt es Ärger: Die Küche ist nie sauber und es ist nachts laut. Nuria will das mit dir besprechen.',role:'Du bist Nuria, Mitbewohnerin von Jonas, direkt aber fair. Ihr duzt euch. Sprich die Probleme an (la cocina siempre está sucia, Pablo pone música hasta las dos…). Mach Vorschläge mit Bedingungen (Si cada uno limpia una semana, …) und frag Jonas nach seiner Meinung (¿Tú qué harías?). Benutze Konditional (Yo en tu lugar hablaría con Pablo).',goal:'Schlag Lösungen mit si + Präsens vor, gib Ratschläge mit „Yo en tu lugar / Yo que tú + Konditional“ und reagiere höflich auf Nurias Vorschläge.'},
lessons:[
{id:'l1',title:'Wenn …, dann …',desc:'si llueve, nos quedamos',steps:[
 {t:'info',title:'Reale Bedingungen: si + Präsens',html:`<p>Wenn etwas wirklich passieren kann:</p>
 <table><tr><th>si + Präsens</th><th>Folge</th></tr>
 <tr><td class="es-t">Si llueve,</td><td class="es-t">nos quedamos en casa. (Präsens)</td></tr>
 <tr><td class="es-t">Si tengo tiempo,</td><td class="es-t">iré a la playa. (Futur)</td></tr>
 <tr><td class="es-t">Si tienes hambre,</td><td class="es-t">come algo. (Imperativ)</td></tr></table>
 <div class="ex">Nach <b>si</b> (wenn/falls) <b>nie</b> Futur: <s>si lloverá</s> → <b>si llueve</b>. Wie im Deutschen: „Wenn es regnet“, nicht „wenn es regnen wird“.</div>`},
 {t:'mc',q:'Si ___ buen tiempo, iremos a Montjuïc.',opts:['hace','hará','haga'],a:0},
 {t:'mc',q:'Si estás cansado, ___ un rato.',opts:['descansa','descansaste','descansabas'],a:0},
 {t:'gap',q:'Si ___ (tú, venir) a Mannheim, te ___ (yo, enseñar) la ciudad. (Futur)',a:['vienes','enseñaré']},
 {t:'gap',q:'Si no ___ (nosotros, salir) ahora, ___ (perder) el tren. (Futur)',a:['salimos','perderemos']},
 {t:'order',es:'Si tengo tiempo este fin de semana, te llamo.',de:'Wenn ich dieses Wochenende Zeit habe, rufe ich dich an.'},
 {t:'tr',de:'Wenn du Fragen hast, schreib mir.',a:['Si tienes preguntas, escríbeme.','Si tienes dudas, escríbeme.']},
 {t:'listen',es:'Si llueve mañana, iremos al museo.',de:'Wenn es morgen regnet, gehen wir ins Museum.'}]},
{id:'l2',title:'Der Konditional',desc:'trabajaría · tendría · haría',steps:[
 {t:'info',title:'Konditional: Infinitiv + -ía',html:`<table><tr><th></th><th>viajar</th></tr>
 <tr><td>yo</td><td class="es-t">viajar<b>ía</b></td></tr><tr><td>tú</td><td class="es-t">viajar<b>ías</b></td></tr><tr><td>él / ella / usted</td><td class="es-t">viajar<b>ía</b></td></tr>
 <tr><td>nosotros</td><td class="es-t">viajar<b>íamos</b></td></tr><tr><td>vosotros</td><td class="es-t">viajar<b>íais</b></td></tr><tr><td>ellos / ustedes</td><td class="es-t">viajar<b>ían</b></td></tr></table>
 <p><b>Unregelmäßig</b> – gleiche Stämme wie beim Futur (Unidad 17):</p>
 <p class="es-t">tendría · pondría · saldría · vendría · podría · sabría · haría · diría · querría · habría</p>
 <div class="ex">Konditional = „würde“: <span class="es-t">Con más dinero viajaría más.</span> – Mit mehr Geld würde ich mehr reisen.</div>`},
 {t:'conj',verb:'hacer',de:'machen',tense:'Konditional',forms:['haría','harías','haría','haríamos','haríais','harían']},
 {t:'match',q:'Futur ↔ Konditional',pairs:[['tendré','tendría'],['saldré','saldría'],['diré','diría'],['podré','podría'],['vendré','vendría']]},
 {t:'gap',q:'Con más tiempo, ___ (yo, aprender) a tocar la guitarra.',a:['aprendería']},
 {t:'gap',q:'¿Qué ___ (tú, hacer) con un millón de euros?',a:['harías']},
 {t:'gap',q:'Nosotros ___ (vivir) en la playa, pero es muy caro.',a:['viviríamos']},
 {t:'tr',de:'Ich würde gern mehr reisen, aber ich habe keine Zeit.',a:['Me gustaría viajar más, pero no tengo tiempo.','Viajaría más, pero no tengo tiempo.']}]},
{id:'l3',title:'Ich an deiner Stelle …',desc:'yo en tu lugar · yo que tú',steps:[
 {t:'vocab',title:'Rat geben & Probleme',items:[['yo en tu lugar …','ich an deiner Stelle …','🔄'],['yo que tú …','wenn ich du wäre …','🔄'],['¿Tú qué harías?','Was würdest du tun?','🤔'],['sería mejor + Inf.','es wäre besser, …','👍'],['podrías + Inf.','du könntest …','💡'],['el compañero de piso','der Mitbewohner','🧑‍🤝‍🧑'],['las tareas de casa','die Hausarbeit','🧹'],['fregar los platos','abspülen','🍽️'],['sacar la basura','den Müll rausbringen','🗑️'],['el ruido','der Lärm','🔊'],['quejarse (de)','sich beschweren (über)','😤'],['llegar a un acuerdo','sich einigen','🤝']]},
 {t:'info',title:'Ratschläge mit Konditional',html:`<p class="es-t">Yo en tu lugar hablaría con él. · Yo que tú no diría nada.</p>
 <p class="es-t">Podrías hacer un plan de limpieza. · Sería mejor llegar a un acuerdo.</p>
 <div class="ex">Das ist weicher als <i>tienes que</i> und weniger direkt als der Imperativ. Perfekt für heikle Themen.</div>`},
 {t:'mc',q:'Mein Mitbewohner macht nachts Lärm. – Yo en tu lugar ___ con él.',opts:['hablaría','hablaré','hable'],a:0},
 {t:'mc',q:'„Was würdest du tun?“',opts:['¿Tú qué harías?','¿Tú qué harás?','¿Tú qué hacías?'],a:0},
 {t:'gap',q:'Yo que tú no ___ (decir) nada todavía.',a:['diría']},
 {t:'gap',q:'___ (tú, poder) hacer un plan para las tareas de casa.',a:['Podrías']},
 {t:'dialog',place:'Cocina del piso',title:'WG-Krisensitzung',scene:'Nuria will über die Küche reden.',lines:[
  {n:'Nuria',es:'Jonas, tenemos que hablar. La cocina siempre está sucia y nadie friega los platos.',de:'Jonas, wir müssen reden. Die Küche ist immer dreckig und niemand spült ab.'},
  {you:true,opts:[{es:'Tienes razón. Podríamos hacer un plan de limpieza.',ok:true},{es:'Tienes razón. Podremos hacer un plan de limpieza si.',ok:false,why:'Vorschlag → Konditional <b>podríamos</b>.'}]},
  {n:'Nuria',es:'Buena idea. ¿Y qué hacemos con Pablo y su música a las dos de la mañana?',de:'Gute Idee. Und was machen wir mit Pablo und seiner Musik um zwei Uhr morgens?'},
  {you:true,opts:[{es:'Yo en tu lugar hablaría con él directamente.',ok:true},{es:'Yo en tu lugar hablaré con él directamente.',ok:false,why:'„An deiner Stelle würde ich …“ → Konditional <b>hablaría</b>.'}]},
  {n:'Nuria',es:'¿Y si no cambia nada?',de:'Und wenn sich nichts ändert?'},
  {you:true,opts:[{es:'Si no cambia nada, hablaremos con el casero.',ok:true},{es:'Si no cambiará nada, hablaremos con el casero.',ok:false,why:'Nach <b>si</b> kein Futur: <i>si no cambia</i>.'}]}]},
 {t:'tr',de:'An deiner Stelle würde ich den Müll rausbringen.',a:['Yo en tu lugar sacaría la basura.','Yo que tú sacaría la basura.']},
 {t:'speak',es:'Yo en tu lugar hablaría con él. Seguro que llegáis a un acuerdo.',de:'Ich an deiner Stelle würde mit ihm reden. Bestimmt einigt ihr euch.'}]},
{id:'l4',title:'Consultorio',desc:'Ratgeber-Kolumne lesen & antworten',steps:[
 {t:'read',title:'Consultorio: «Mi compañera de piso no limpia nunca»',text:`Hola, me llamo Andrea, tengo 23 años y vivo en Madrid con otras dos chicas. Mi problema es Carla: nunca limpia, deja la ropa por todas partes y {encima|obendrein} usa mis cosas sin preguntar. Ya le he dicho dos veces que me molesta, pero no cambia nada. ¿Qué haría usted?

Querida Andrea: Entiendo que estés harta. Yo en tu lugar organizaría una reunión con las tres. Si habláis todas juntas, Carla verá que no es solo tu problema. Podríais hacer un plan con las tareas de cada semana y ponerlo en la {nevera|Kühlschrank}. Y si usa tus cosas, díselo en el momento, con calma. Si después de un mes todo sigue igual, sería mejor buscar otro piso: la {convivencia|das Zusammenleben} es muy importante para estar bien.`,de:'Hallo, ich heiße Andrea, bin 23 und wohne in Madrid mit zwei anderen Mädchen. Mein Problem ist Carla: Sie putzt nie, lässt ihre Klamotten überall liegen und benutzt obendrein meine Sachen, ohne zu fragen. Ich habe ihr schon zweimal gesagt, dass mich das stört, aber es ändert sich nichts. Was würden Sie tun?\n\nLiebe Andrea, ich verstehe, dass du es satt hast. Ich an deiner Stelle würde ein Treffen mit allen dreien organisieren. Wenn ihr alle zusammen redet, wird Carla sehen, dass es nicht nur dein Problem ist. Ihr könntet einen Plan mit den Aufgaben jeder Woche machen und ihn an den Kühlschrank hängen. Und wenn sie deine Sachen benutzt, sag es ihr sofort, ganz ruhig. Wenn nach einem Monat alles gleich ist, wäre es besser, eine andere Wohnung zu suchen: Das Zusammenleben ist sehr wichtig, um sich wohlzufühlen.'},
 {t:'mc',q:'¿Qué le recomienda primero la consejera?',opts:['organizar una reunión con las tres','buscar otro piso','no decir nada'],a:0},
 {t:'mc',q:'„Si habláis todas juntas, Carla verá …“ – welche Struktur?',opts:['si + Präsens → Futur','si + Futur → Präsens','si + Konditional → Futur'],a:0},
 {t:'gap',q:'Si después de un mes todo ___ (seguir) igual, ___ (ser) mejor buscar otro piso.',a:['sigue','sería']},
 {t:'free',task:'Antworte auf diesen Brief: „Mi jefe me escribe correos a las once de la noche y espera respuesta enseguida. ¿Qué haría usted?“ (5–6 Sätze)',hint:'Yo en tu lugar … · Podrías … · Si tu jefe … · Sería mejor …',focus:'Konditional, si + Präsens',model:'Querido amigo: Yo en tu lugar hablaría con tu jefe en una reunión tranquila. Podrías explicarle que necesitas descansar por la noche para trabajar bien. Si te escribe tarde, no contestes hasta el día siguiente. Yo que tú también miraría tu contrato. Si nada cambia, sería mejor hablar con recursos humanos.'}]}
],
placement:[
 {t:'mc',q:'Si ___ buen tiempo, iremos a la playa.',opts:['hace','hará','haría'],a:0},
 {t:'mc',q:'„Was würdest du tun?“',opts:['¿Tú qué harías?','¿Tú qué harás?','¿Tú qué hacías?'],a:0},
 {t:'gap',q:'Yo en tu lugar ___ (hablar) con él.',a:['hablaría']},
 {t:'gap',q:'Con más dinero ___ (yo, tener) un coche.',a:['tendría']},
 {t:'mc',q:'Si tienes hambre, ___ algo.',opts:['come','comerías','comiste'],a:0},
 {t:'gap',q:'Yo que tú no ___ (decir) nada.',a:['diría']}],
resumen:`<h3>Reale Bedingung</h3><p class="es-t">Si llueve, nos quedamos en casa. · Si tengo tiempo, iré. · Si tienes hambre, come algo.</p><p>Nach <b>si</b> nie Futur!</p>
<h3>Konditional</h3><p class="es-t">viajaría · viajarías · viajaría · viajaríamos · viajaríais · viajarían</p><p class="es-t">tendría · pondría · saldría · vendría · podría · sabría · haría · diría · querría · habría</p>
<h3>Ratschläge</h3><p class="es-t">Yo en tu lugar … · Yo que tú … · Podrías … · Sería mejor … · ¿Tú qué harías?</p>`});
