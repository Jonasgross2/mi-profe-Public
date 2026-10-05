/* ===== B2 Teil 2: Unidad 30–33 – eigene Inhalte nach dem Plan Curricular (Instituto Cervantes) ===== */

COURSE.units.push({id:'u28',n:'30',level:'B2b',title:'Si lo hubiera sabido',sub:'Pluscuamperfecto de subjuntivo (hubiera hecho) · irreale Vergangenheit (si hubiera…, habría…) · Bedauern & Vorwürfe (ojalá hubiera, deberías haber) · Entscheidungen',
goals:['Pluscuamperfecto de subjuntivo: hubiera + Partizip','Konditional Perfekt: habría + Partizip','si + Plusc. Subj. → habría + Partizip (irreale Vergangenheit)','gemischte Bedingung: si hubiera…, ahora estaría…','Bedauern: ojalá hubiera, me arrepiento de','Vorwürfe: deberías haber / podrías haber + Partizip'],
situacion:{title:'Verpasste Chancen',npc:'Marc',scene:'Marc hat ein tolles Jobangebot in Berlin abgelehnt und bereut es jetzt. Ihr redet darüber in einem Café in Sant Antoni.',role:'Du bist Marc, Freund von Jonas, etwas niedergeschlagen. Ihr duzt euch. Erzähl, dass du das Angebot in Berlin abgelehnt hast und es bereust (Si hubiera aceptado, ahora estaría…; Ojalá le hubiera dicho que sí). Frag Jonas, was er an deiner Stelle gemacht hätte und ob er auch etwas bereut.',goal:'Sag, was du an Marcs Stelle gemacht hättest (Yo habría…), tröste ihn mit einer irrealen Bedingung (Si te hubieras ido, …) und erzähl von etwas, das du selbst bereust.'},
lessons:[
{id:'l1',title:'Hätte ich doch …',desc:'hubiera hecho · habría hecho',steps:[
 {t:'info',title:'Zwei neue Formen',html:`<table><tr><th>Pluscuamperfecto de subjuntivo</th><th>Konditional Perfekt</th></tr>
 <tr><td class="es-t">hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran + Partizip</td><td class="es-t">habría, habrías, habría, habríamos, habríais, habrían + Partizip</td></tr>
 <tr><td>„hätte … gemacht“ (im Nebensatz)</td><td>„hätte … gemacht / würde … gemacht haben“</td></tr></table>
 <div class="ex">Irreale Vergangenheit: <span class="es-t">Si lo <b>hubiera sabido</b>, te lo <b>habría dicho</b>.</span> – Wenn ich es gewusst hätte, hätte ich es dir gesagt.</div>
 <div class="ojo">Im gesprochenen Spanisch hört man oft auch zweimal <i>hubiera</i>: <span class="es-t">Si lo hubiera sabido, te lo hubiera dicho.</span> Das ist korrekt. Falsch ist nur <s>si lo habría sabido</s>.</div>`},
 {t:'mc',q:'Si ___ antes, habríamos cogido el tren.',opts:['hubiéramos salido','habríamos salido','saliéramos'],a:0},
 {t:'mc',q:'Si me lo hubieras pedido, te ___.',opts:['habría ayudado','hubiera ayudara','habías ayudado'],a:0},
 {t:'gap',q:'Si ___ (yo, estudiar) más, habría aprobado.',a:['hubiera estudiado']},
 {t:'gap',q:'Si no hubiera llovido, ___ (nosotros, ir) a la playa.',a:['habríamos ido','hubiéramos ido']},
 {t:'gap',q:'Si ___ (tú, ver) su cara… ¡Fue increíble!',a:['hubieras visto']},
 {t:'order',es:'Si hubiera sabido que venías, habría preparado algo.',de:'Wenn ich gewusst hätte, dass du kommst, hätte ich etwas vorbereitet.'},
 {t:'tr',de:'Wenn du mich angerufen hättest, wäre ich gekommen.',a:['Si me hubieras llamado, habría venido.','Si me hubieras llamado, hubiera venido.']}]},
{id:'l2',title:'Gemischte Bedingungen',desc:'si hubiera… ahora estaría',steps:[
 {t:'info',title:'Vergangenheit → Folge heute',html:`<table><tr><th>Bedingung (Vergangenheit)</th><th>Folge (heute)</th></tr>
 <tr><td class="es-t">Si <b>hubiera aceptado</b> el trabajo,</td><td class="es-t">ahora <b>viviría</b> en Berlín.</td></tr>
 <tr><td class="es-t">Si no <b>hubiera venido</b> a Barcelona,</td><td class="es-t">no te <b>conocería</b>.</td></tr></table>
 <table><tr><th>Bedingung (immer gültig)</th><th>Folge (Vergangenheit)</th></tr>
 <tr><td class="es-t">Si <b>fuera</b> más valiente,</td><td class="es-t">se lo <b>habría dicho</b>.</td></tr></table>
 <div class="ex">Frag dich bei jedem Teil: Wann gilt das? Vergangenheit → <i>hubiera / habría + Partizip</i>. Jetzt / immer → <i>Imperf. Subj. / Konditional</i>.</div>`},
 {t:'mc',q:'Si hubiera dormido más, ahora no ___ tan cansado.',opts:['estaría','habría estado','estuviera'],a:0},
 {t:'mc',q:'Si ___ más paciente, no habría discutido con él. (Ich bin generell ungeduldig.)',opts:['fuera','hubiera sido','sería'],a:0},
 {t:'gap',q:'Si no ___ (yo, venir) a Barcelona, no ___ (hablar) español tan bien ahora.',a:['hubiera venido','hablaría']},
 {t:'gap',q:'Si hubieras comprado las entradas, ahora ___ (nosotros, estar) en el concierto.',a:['estaríamos']},
 {t:'tr',de:'Wenn ich Medizin studiert hätte, wäre ich jetzt Ärztin.',a:['Si hubiera estudiado Medicina, ahora sería médica.']},
 {t:'listen',es:'Si no hubiera perdido el autobús aquel día, no te habría conocido.',de:'Wenn ich an jenem Tag nicht den Bus verpasst hätte, hätte ich dich nicht kennengelernt.'}]},
{id:'l3',title:'Bedauern & Vorwürfe',desc:'ojalá hubiera · deberías haber',steps:[
 {t:'info',title:'Was man bereut – und anderen vorwirft',html:`<table><tr><th>Ausdruck</th><th>Beispiel</th></tr>
 <tr><td class="es-t">ojalá + Plusc. Subj.</td><td class="es-t">¡Ojalá <b>hubiera ido</b>! – Wäre ich doch gegangen!</td></tr>
 <tr><td class="es-t">me arrepiento de + Inf.</td><td class="es-t">Me arrepiento de no <b>haber</b> aceptado.</td></tr>
 <tr><td class="es-t">deberías haber + Partizip</td><td class="es-t">Deberías haberme avisado. – Du hättest mir Bescheid sagen sollen.</td></tr>
 <tr><td class="es-t">podrías haber + Partizip</td><td class="es-t">Podrías haber llamado. – Du hättest anrufen können.</td></tr>
 <tr><td class="es-t">tendría que haber + Partizip</td><td class="es-t">Tendría que haber estudiado más.</td></tr></table>`},
 {t:'mc',q:'„Du hättest mir Bescheid sagen sollen!“',opts:['¡Deberías haberme avisado!','¡Debías avisarme!','¡Deberías avisarme haber!'],a:0},
 {t:'mc',q:'„Hätte ich das doch nicht gesagt!“',opts:['¡Ojalá no lo hubiera dicho!','¡Ojalá no lo diga!','¡Ojalá no lo habría dicho!'],a:0},
 {t:'gap',q:'Me arrepiento de no ___ (aprender) a tocar el piano.',a:['haber aprendido']},
 {t:'gap',q:'Podrías ___ (decir) algo antes.',a:['haber dicho']},
 {t:'vocab',title:'Entscheidungen',items:[['tomar una decisión','eine Entscheidung treffen','🤔'],['rechazar una oferta','ein Angebot ablehnen','🙅'],['aceptar','annehmen','👍'],['arrepentirse (de)','bereuen','😔'],['dejar pasar una oportunidad','eine Chance verpassen','🚪'],['dar un paso','einen Schritt wagen','👣'],['el riesgo','das Risiko','🎲'],['equivocarse','sich irren','❌'],['no hay mal que por bien no venga','alles hat sein Gutes','🍀'],['a toro pasado','im Nachhinein','🔙']]},
 {t:'dialog',place:'Café en Sant Antoni',title:'Marcs Entscheidung',scene:'Marc rührt lustlos in seinem Kaffee.',lines:[
  {n:'Marc',es:'Al final rechacé la oferta de Berlín. Ahora me arrepiento.',de:'Am Ende habe ich das Angebot aus Berlin abgelehnt. Jetzt bereue ich es.'},
  {you:true,opts:[{es:'Vaya… Yo en tu lugar la habría aceptado.',ok:true},{es:'Vaya… Yo en tu lugar la hubiera aceptada.',ok:false,why:'Das Partizip mit <i>haber</i> ist unveränderlich: <i>aceptado</i>.'}]},
  {n:'Marc',es:'Ya… Si me hubiera ido, ahora tendría un sueldo mucho mejor.',de:'Ja … Wenn ich gegangen wäre, hätte ich jetzt ein viel besseres Gehalt.'},
  {you:true,opts:[{es:'Pero si te hubieras ido, no estarías con Laia. No hay mal que por bien no venga.',ok:true},{es:'Pero si te habrías ido, no estarías con Laia. No hay mal que por bien no venga.',ok:false,why:'Nach <b>si</b> nie <i>habría</i>: <i>si te hubieras ido</i>.'}]},
  {n:'Marc',es:'Tienes razón. ¿Y tú? ¿Te arrepientes de algo?',de:'Du hast recht. Und du? Bereust du etwas?'},
  {you:true,opts:[{es:'Me arrepiento de no haber venido antes a Barcelona.',ok:true},{es:'Me arrepiento de no venir antes a Barcelona haber.',ok:false,why:'<i>arrepentirse de + haber + Partizip</i>: <i>de no haber venido</i>.'}]}]}]},
{id:'l4',title:'Lesen: Puertas correderas',desc:'Erzählung · eigener Text',steps:[
 {t:'read',title:'El día que perdí el avión',text:`Hace diez años perdí un avión a Londres. Iba a empezar unas prácticas en una empresa de publicidad y, si hubiera llegado a tiempo, probablemente ahora viviría allí. Pero el {atasco|Stau} de aquella mañana lo cambió todo.

Mientras esperaba el siguiente vuelo, conocí a una mujer mayor que volvía a Valencia. Me habló de su escuela de idiomas y de que buscaba profesores. «Si te interesa, llámame», me dijo. No lo pensé mucho. Tres meses después, en lugar de diseñar anuncios en Londres, estaba enseñando inglés en Valencia.

A veces me pregunto qué habría pasado si no hubiera perdido aquel avión. Quizá habría tenido éxito en publicidad, o quizá habría vuelto a los seis meses. Lo que sé es que, si no hubiera conocido a Amparo, no habría descubierto que me encanta enseñar. Y no habría conocido a mi mujer, que era alumna de la escuela. A toro pasado, aquel atasco fue lo mejor que me pasó.`,de:`Vor zehn Jahren habe ich einen Flug nach London verpasst. Ich wollte ein Praktikum in einer Werbeagentur anfangen, und wenn ich rechtzeitig angekommen wäre, würde ich wahrscheinlich jetzt dort leben. Aber der Stau an jenem Morgen hat alles verändert.\n\nWährend ich auf den nächsten Flug wartete, lernte ich eine ältere Frau kennen, die nach Valencia zurückflog. Sie erzählte mir von ihrer Sprachschule und dass sie Lehrer suchte. „Wenn es dich interessiert, ruf mich an“, sagte sie. Ich überlegte nicht lange. Drei Monate später unterrichtete ich, statt in London Werbung zu gestalten, Englisch in Valencia.\n\nManchmal frage ich mich, was passiert wäre, wenn ich den Flug nicht verpasst hätte. Vielleicht hätte ich in der Werbung Erfolg gehabt, oder vielleicht wäre ich nach sechs Monaten zurückgekommen. Was ich weiß: Wenn ich Amparo nicht kennengelernt hätte, hätte ich nicht entdeckt, dass ich gern unterrichte. Und ich hätte meine Frau nicht kennengelernt, die Schülerin an der Schule war. Im Nachhinein war dieser Stau das Beste, was mir passiert ist.`},
 {t:'mc',q:'¿Qué habría pasado si el autor hubiera llegado a tiempo?',opts:['Probablemente ahora viviría en Londres.','Habría conocido antes a Amparo.','Habría enseñado inglés en Londres.'],a:0},
 {t:'mc',q:'¿Cómo ve hoy el autor aquel atasco?',opts:['como lo mejor que le pasó','como un gran error','como algo sin importancia'],a:0},
 {t:'gap',q:'Si no ___ (conocer) a Amparo, no habría descubierto que le encanta enseñar.',a:['hubiera conocido']},
 {t:'free',task:'Erzähl von einem Moment, der dein Leben verändert hat. Was wäre passiert, wenn es anders gelaufen wäre? (7–9 Sätze)',hint:'Si no hubiera … , ahora … · habría … · Me arrepiento de … · Ojalá hubiera … · A toro pasado …',focus:'irreale Vergangenheit, gemischte Bedingungen, Bedauern',model:'Hace tres años, un profesor me recomendó que hiciera un Erasmus. Al principio no quería, porque me daba miedo dejar a mis amigos. Si no hubiera seguido su consejo, ahora no estaría en Barcelona. Tampoco habría aprendido español ni habría conocido a Nuria y a Pablo. Me arrepiento de no haber venido aún antes. Ojalá hubiera tenido el valor de decidirlo en el primer año. A toro pasado, fue la mejor decisión de mi vida.'}]}
],
placement:[
 {t:'mc',q:'Si lo ___, te lo habría dicho.',opts:['hubiera sabido','habría sabido','sabría'],a:0},
 {t:'mc',q:'„Du hättest anrufen können.“',opts:['Podrías haber llamado.','Podías llamar haber.','Pudieras haber llamado.'],a:0},
 {t:'gap',q:'Si hubiera estudiado más, ___ (yo, aprobar).',a:['habría aprobado','hubiera aprobado']},
 {t:'gap',q:'Si no hubiera venido a España, ahora no ___ (hablar) español.',a:['hablaría']},
 {t:'mc',q:'¡Ojalá no ___ eso!',opts:['hubiera dicho','habría dicho','dijo'],a:0},
 {t:'gap',q:'Me arrepiento de no ___ (aceptar) la oferta.',a:['haber aceptado']}],
resumen:`<h3>Irreale Vergangenheit</h3><p class="es-t">Si lo hubiera sabido, te lo habría dicho. (si + hubiera + Partizip → habría / hubiera + Partizip)</p>
<h3>Gemischt</h3><p class="es-t">Si hubiera aceptado, ahora viviría en Berlín. · Si fuera valiente, se lo habría dicho.</p>
<h3>Bedauern & Vorwürfe</h3><p class="es-t">¡Ojalá hubiera ido! · Me arrepiento de no haber … · Deberías / Podrías / Tendría que haber + Partizip</p>`});

COURSE.units.push({id:'u29',n:'31',level:'B2b',title:'Estimado señor…',sub:'Formelles Register (usted, Höflichkeitsformeln) · formelle E-Mails & Beschwerden · Relativsätze für Fortgeschrittene (el cual, cuyo, lo cual) · ser/estar mit Bedeutungswechsel',
goals:['Formelle E-Mail: Anrede, Einleitung, Schluss','Höflichkeitsfloskeln: le agradecería que, quisiera, le ruego que','el cual / la cual / lo cual, cuyo/a','ser listo / estar listo, ser rico / estar rico …','Beschwerden & Reklamationen schreiben','zwischen formell und informell wechseln'],
situacion:{title:'Reklamation am Telefon',npc:'Sra. Ortega',scene:'Dein neuer Laptop ist nach zwei Wochen kaputt. Du rufst beim Kundendienst des Elektronikgeschäfts an. Frau Ortega nimmt das Gespräch an.',role:'Du bist Sra. Ortega vom Kundendienst eines Elektronikgeschäfts, höflich und korrekt, aber zuerst etwas abwehrend. Ihr siezt euch (usted). Frag nach Bestellnummer, Problem und Kaufdatum, biete zuerst nur eine Reparatur an. Gib nach, wenn Jonas höflich, aber bestimmt bleibt. Benutze formelle Wendungen (¿En qué puedo ayudarle?, Lamentamos las molestias, Le ruego que…).',goal:'Reklamiere höflich, aber bestimmt im usted-Register (Quisiera…, Le agradecería que…), erkläre das Problem und erreiche einen Umtausch oder eine Erstattung.'},
lessons:[
{id:'l1',title:'Formell schreiben',desc:'Estimado/a · Le agradecería que',steps:[
 {t:'info',title:'Aufbau einer formellen E-Mail',html:`<table><tr><th>Teil</th><th>Formeln</th></tr>
 <tr><td>Anrede</td><td class="es-t">Estimado señor García: · Estimada señora: · Estimados señores:</td></tr>
 <tr><td>Einleitung</td><td class="es-t">Me pongo en contacto con usted para … · Le escribo en relación con …</td></tr>
 <tr><td>Bitte</td><td class="es-t">Le agradecería que me enviara … · Quisiera solicitar … · Le ruego que …</td></tr>
 <tr><td>Schluss</td><td class="es-t">Quedo a la espera de su respuesta. · Atentamente, · Un cordial saludo,</td></tr></table>
 <div class="ojo">Nach der Anrede steht im Spanischen ein <b>Doppelpunkt</b> (<i>Estimada señora:</i>), kein Komma.</div>
 <div class="ex"><i>Le agradecería que</i> + <b>Imperf. Subj.</b> – weil Konditional im Hauptsatz (Zeitenfolge aus Unidad 27).</div>`},
 {t:'mc',q:'Welche Anrede ist korrekt?',opts:['Estimada señora López:','Querida señora López,','Hola señora López:'],a:0},
 {t:'mc',q:'Le agradecería que me ___ una factura.',opts:['enviara','envíe','enviaría'],a:0},
 {t:'gap',q:'Me ___ en contacto con ustedes para solicitar información.',a:['pongo']},
 {t:'gap',q:'Quedo a la ___ de su respuesta.',a:['espera']},
 {t:'match',q:'informell → formell',pairs:[['Hola, Marta:','Estimada señora:'],['Te escribo porque …','Me pongo en contacto con usted para …'],['¿Me mandas …?','Le agradecería que me enviara …'],['Un beso,','Atentamente,']]},
 {t:'tr',de:'Ich wäre Ihnen dankbar, wenn Sie mich anrufen würden.',a:['Le agradecería que me llamara.','Le agradecería que me llamase.']}]},
{id:'l2',title:'Welcher, dessen …',desc:'el cual · cuyo · lo cual',steps:[
 {t:'info',title:'Relativwörter für gehobene Sprache',html:`<table><tr><th>Form</th><th>Gebrauch</th><th>Beispiel</th></tr>
 <tr><td class="es-t">el cual, la cual, los cuales …</td><td>nach Präpositionen, formell</td><td class="es-t">El proyecto <b>en el cual</b> trabajo …</td></tr>
 <tr><td class="es-t">lo cual</td><td>bezieht sich auf den ganzen Satz</td><td class="es-t">No contestó, <b>lo cual</b> me pareció raro.</td></tr>
 <tr><td class="es-t">cuyo, cuya, cuyos, cuyas</td><td>dessen/deren – richtet sich nach dem <b>Besitz</b></td><td class="es-t">La autora, <b>cuya</b> novela leí, …</td></tr></table>
 <div class="ex"><i>cuyo</i> stimmt mit dem Folgenden überein: <span class="es-t">el vecino cuy<b>a</b> hij<b>a</b> …</span> – die Tochter ist weiblich, egal ob der Nachbar männlich ist.</div>`},
 {t:'mc',q:'El cliente, ___ pedido no llegó, ha llamado tres veces.',opts:['cuyo','cuya','el cual'],a:0},
 {t:'mc',q:'Llegó tarde otra vez, ___ molestó a todos.',opts:['lo cual','el cual','cuyo'],a:0},
 {t:'gap',q:'La empresa, ___ sede está en Bilbao, busca ingenieros. (deren Sitz)',a:['cuya']},
 {t:'gap',q:'Es un tema sobre el ___ se ha escrito mucho.',a:['cual']},
 {t:'tr',de:'Der Autor, dessen Bücher ich gelesen habe, kommt morgen.',a:['El autor, cuyos libros he leído, viene mañana.','El autor cuyos libros he leído viene mañana.']}]},
{id:'l3',title:'ser oder estar? Bedeutung ändert sich',desc:'ser listo · estar listo',steps:[
 {t:'info',title:'Adjektive mit zwei Bedeutungen',html:`<table><tr><th>Adjektiv</th><th>ser</th><th>estar</th></tr>
 <tr><td class="es-t">listo</td><td>klug</td><td>fertig, bereit</td></tr>
 <tr><td class="es-t">rico</td><td>reich</td><td>lecker</td></tr>
 <tr><td class="es-t">malo</td><td>schlecht, böse</td><td>krank</td></tr>
 <tr><td class="es-t">aburrido</td><td>langweilig</td><td>gelangweilt</td></tr>
 <tr><td class="es-t">despierto</td><td>aufgeweckt</td><td>wach</td></tr>
 <tr><td class="es-t">orgulloso</td><td>hochmütig</td><td>stolz (auf etwas)</td></tr></table>`},
 {t:'mc',q:'„Die Paella ist lecker.“',opts:['La paella está rica.','La paella es rica.','La paella está rico.'],a:0},
 {t:'mc',q:'„Bist du fertig? Wir gehen.“',opts:['¿Estás listo? Nos vamos.','¿Eres listo? Nos vamos.','¿Estás lista nos vamos?'],a:0},
 {t:'gap',q:'Hoy no voy a clase, ___ malo. (ich bin krank)',a:['estoy']},
 {t:'gap',q:'Esta película ___ muy aburrida. (sie ist langweilig)',a:['es']},
 {t:'gap',q:'Mis padres ___ muy orgullosos de mí.',a:['están']}]},
{id:'l4',title:'Eine Beschwerde',desc:'Telefon · Reklamation schreiben',steps:[
 {t:'vocab',title:'Kundendienst & Reklamation',items:[['el servicio de atención al cliente','der Kundendienst','☎️'],['la reclamación','die Reklamation','📝'],['la hoja de reclamaciones','das Beschwerdeformular','📄'],['el número de pedido','die Bestellnummer','🔢'],['la garantía','die Garantie','🛡️'],['el reembolso','die Rückerstattung','💶'],['devolver','zurückgeben','↩️'],['cambiar (un producto)','umtauschen','🔄'],['estar en garantía','unter Garantie sein','✅'],['lamentar las molestias','die Unannehmlichkeiten bedauern','🙇'],['defectuoso','fehlerhaft','⚠️'],['el plazo','die Frist','⏳']]},
 {t:'dialog',place:'Llamada al servicio de atención al cliente',title:'Der kaputte Laptop',scene:'Die Warteschleife ist endlich vorbei.',lines:[
  {n:'Sra. Ortega',es:'Buenos días, le atiende Elena Ortega. ¿En qué puedo ayudarle?',de:'Guten Tag, Sie sprechen mit Elena Ortega. Wie kann ich Ihnen helfen?'},
  {you:true,opts:[{es:'Buenos días. Le llamo porque el portátil que compré hace dos semanas no se enciende.',ok:true},{es:'Hola, ¿qué tal? Te llamo porque mi portátil no va.',ok:false,why:'Am Kundentelefon: <b>usted</b> (<i>Le llamo</i>) und neutral-höflich.'}]},
  {n:'Sra. Ortega',es:'Lamentamos las molestias. Podemos enviarlo a reparar; tardaría unas tres semanas.',de:'Wir bedauern die Unannehmlichkeiten. Wir können ihn zur Reparatur schicken; das würde etwa drei Wochen dauern.'},
  {you:true,opts:[{es:'Entiendo, pero le agradecería que me lo cambiaran por uno nuevo. Lo necesito para trabajar.',ok:true},{es:'Entiendo, pero le agradecería que me lo cambian por uno nuevo. Lo necesito para trabajar.',ok:false,why:'<b>le agradecería que</b> → Imperf. Subj.: <i>cambiaran</i>.'}]},
  {n:'Sra. Ortega',es:'Como el producto está en garantía y es defectuoso, puede devolverlo en tienda y le daremos uno nuevo.',de:'Da das Produkt unter Garantie steht und fehlerhaft ist, können Sie es im Laden zurückgeben, und wir geben Ihnen ein neues.'},
  {you:true,opts:[{es:'Muchísimas gracias por su ayuda. Que tenga un buen día.',ok:true},{es:'Vale, guay, gracias. ¡Chao!',ok:false,why:'Zu locker für ein formelles Gespräch. Besser: <i>Muchas gracias por su ayuda.</i>'}]}]},
 {t:'free',task:'Schreib eine formelle Reklamations-E-Mail an ein Hotel (7–9 Sätze): Das Zimmer war schmutzig, die Klimaanlage kaputt, und niemand hat geholfen. Bitte um eine teilweise Erstattung.',hint:'Estimados señores: · Me pongo en contacto con ustedes para … · Durante mi estancia … · lo cual … · Le agradecería que … · Quedo a la espera de … · Atentamente,',focus:'formelles Register, le agradecería que + Imperf. Subj., lo cual',model:'Estimados señores: Me pongo en contacto con ustedes en relación con mi estancia en su hotel del 3 al 6 de agosto (reserva n.º 45821). Lamentablemente, la habitación estaba sucia cuando llegamos y el aire acondicionado no funcionaba, lo cual hizo imposible dormir con 35 grados. Lo comunicamos tres veces en recepción, pero nadie vino a solucionarlo. Teniendo en cuenta estas circunstancias, les agradecería que me devolvieran una parte del importe. Quedo a la espera de su respuesta. Atentamente, Jonas'}]}
],
placement:[
 {t:'mc',q:'Le agradecería que me ___ la información.',opts:['enviara','envía','enviaría'],a:0},
 {t:'mc',q:'„Die Suppe ist lecker.“',opts:['La sopa está rica.','La sopa es rica.','La sopa tiene rica.'],a:0},
 {t:'gap',q:'El vecino, ___ perro ladra toda la noche, no está nunca. (dessen Hund)',a:['cuyo']},
 {t:'gap',q:'No vino nadie, lo ___ me sorprendió.',a:['cual']},
 {t:'mc',q:'Formeller Schluss einer E-Mail:',opts:['Atentamente,','¡Un besazo!','Venga, chao.'],a:0},
 {t:'mc',q:'„Bist du fertig?“',opts:['¿Estás listo?','¿Eres listo?','¿Tienes listo?'],a:0}],
resumen:`<h3>Formelle E-Mail</h3><p class="es-t">Estimado/a … : · Me pongo en contacto con usted para … · Le agradecería que + Imperf. Subj. · Quedo a la espera de su respuesta. · Atentamente,</p>
<h3>Relativwörter</h3><p class="es-t">el / la cual (nach Präposition) · lo cual (ganzer Satz) · cuyo / cuya / cuyos / cuyas (dessen, deren)</p>
<h3>ser ↔ estar</h3><p class="es-t">ser listo (klug) / estar listo (fertig) · ser rico (reich) / estar rico (lecker) · ser malo / estar malo (krank) · ser aburrido / estar aburrido</p>`});

COURSE.units.push({id:'u30',n:'32',level:'B2b',title:'Ponerse, volverse, hacerse',sub:'Verben der Veränderung (ponerse, volverse, hacerse, quedarse, convertirse en) · Periphrasen (ponerse a, llegar a, acabar + Gerundium, estar a punto de) · Persönlichkeit & Beziehungen',
goals:['ponerse + Adj.: kurze Veränderung (rot, nervös)','volverse + Adj.: tiefe Charakteränderung','hacerse + Nomen/Adj.: durch Anstrengung (hacerse rico, médico)','quedarse + Adj.: Ergebnis (quedarse sorprendido, sin trabajo)','convertirse en + Nomen','Periphrasen: ponerse a, llegar a, acabar + Gerundium, estar a punto de'],
situacion:{title:'Klassentreffen',npc:'Lucía',scene:'Bei einer Feier triffst du Lucía, eine alte Freundin aus deinem ersten Erasmus-Semester vor fünf Jahren. Ihr erzählt, wie ihr euch und eure gemeinsamen Freunde verändert habt.',role:'Du bist Lucía, alte Freundin von Jonas, gesprächig und neugierig. Ihr duzt euch. Erzähl, wie sich eure Freunde verändert haben (Pedro se ha vuelto muy serio, Ana se hizo médica, Carlos se quedó sin trabajo…), und frag Jonas, wie er sich verändert hat. Benutze Verben der Veränderung und Periphrasen.',goal:'Beschreibe Veränderungen bei dir und anderen mit ponerse, volverse, hacerse, quedarse und convertirse en.'},
lessons:[
{id:'l1',title:'werden – aber wie?',desc:'ponerse · volverse · hacerse',steps:[
 {t:'info',title:'Deutsch „werden“ = viele spanische Verben',html:`<table><tr><th>Verb</th><th>Art der Veränderung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">ponerse + Adj.</td><td>plötzlich, vorübergehend</td><td class="es-t">Se puso rojo. Me pongo nervioso.</td></tr>
 <tr><td class="es-t">volverse + Adj.</td><td>tief, oft unerwartet, Charakter</td><td class="es-t">Se ha vuelto muy egoísta.</td></tr>
 <tr><td class="es-t">hacerse + Nomen/Adj.</td><td>durch eigene Anstrengung / allmählich</td><td class="es-t">Se hizo médica. Se hizo rico.</td></tr>
 <tr><td class="es-t">quedarse + Adj.</td><td>Ergebnis, Endzustand</td><td class="es-t">Se quedó sorprendido. Me quedé sin batería.</td></tr>
 <tr><td class="es-t">convertirse en + Nomen</td><td>Verwandlung</td><td class="es-t">El pueblo se convirtió en una ciudad.</td></tr>
 <tr><td class="es-t">llegar a ser</td><td>nach langem Weg</td><td class="es-t">Llegó a ser ministra.</td></tr></table>`},
 {t:'mc',q:'Cuando la vio, ___ rojo.',opts:['se puso','se volvió','se hizo'],a:0},
 {t:'mc',q:'Desde que es famoso, ___ muy arrogante.',opts:['se ha vuelto','se ha puesto','se ha quedado'],a:0},
 {t:'mc',q:'Estudió mucho y ___ abogada.',opts:['se hizo','se puso','se quedó'],a:0},
 {t:'gap',q:'Con la noticia, todos nos ___ (quedarse) sin palabras.',a:['quedamos']},
 {t:'gap',q:'La fábrica se ___ (convertir) en un museo. (Indefinido)',a:['convirtió']},
 {t:'gap',q:'Me ___ (ponerse) muy nervioso antes de los exámenes. (immer)',a:['pongo']},
 {t:'tr',de:'Er ist sehr ernst geworden.',a:['Se ha vuelto muy serio.']}]},
{id:'l2',title:'anfangen, schaffen, am Ende …',desc:'ponerse a · llegar a · acabar + Gerundium',steps:[
 {t:'info',title:'Periphrasen für Fortgeschrittene',html:`<table><tr><th>Form</th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">ponerse a + Inf.</td><td>(plötzlich) anfangen</td><td class="es-t">Se puso a llorar.</td></tr>
 <tr><td class="es-t">echarse a + Inf.</td><td>losbrechen (reír, llorar, correr)</td><td class="es-t">Nos echamos a reír.</td></tr>
 <tr><td class="es-t">llegar a + Inf.</td><td>sogar, so weit gehen</td><td class="es-t">Llegó a dormir en la oficina.</td></tr>
 <tr><td class="es-t">acabar + Gerundium</td><td>am Ende (doch)</td><td class="es-t">Acabé aceptando el trabajo.</td></tr>
 <tr><td class="es-t">estar a punto de + Inf.</td><td>kurz davor sein</td><td class="es-t">Estaba a punto de salir.</td></tr>
 <tr><td class="es-t">tener + Partizip</td><td>(schon) erledigt haben</td><td class="es-t">Tengo hechos los deberes.</td></tr></table>`},
 {t:'mc',q:'„Am Ende habe ich ihn geheiratet.“',opts:['Acabé casándome con él.','Acabé de casarme con él.','Llegué casándome con él.'],a:0},
 {t:'mc',q:'„Der Zug fährt gleich ab.“',opts:['El tren está a punto de salir.','El tren acaba de salir.','El tren se pone a salir.'],a:0},
 {t:'gap',q:'Cuando oyó el chiste, se ___ a reír. (losbrechen)',a:['echó']},
 {t:'gap',q:'Trabajaba tanto que ___ (llegar) a dormir en la oficina. (Indefinido)',a:['llegó']},
 {t:'gap',q:'De repente, el niño se ___ a cantar.',a:['puso']},
 {t:'listen',es:'Estaba a punto de rendirme, pero al final acabé terminando la maratón.',de:'Ich war kurz davor aufzugeben, aber am Ende habe ich den Marathon doch zu Ende gelaufen.'}]},
{id:'l3',title:'Menschen beschreiben',desc:'Persönlichkeit · Dialog',steps:[
 {t:'vocab',title:'Charakter & Beziehungen',items:[['madurar','reifer werden','🌱'],['sensato','vernünftig','🧠'],['testarudo','stur','🐐'],['generoso','großzügig','🎁'],['egoísta','egoistisch','🙄'],['tener mucho carácter','eine starke Persönlichkeit haben','💪'],['llevarse bien / mal con','sich gut / schlecht verstehen mit','🤝'],['perder el contacto','den Kontakt verlieren','📵'],['reencontrarse','sich wiedersehen','🫂'],['echar una mano','helfen','🤲'],['caer bien / mal','sympathisch / unsympathisch sein','😊'],['enamorarse de','sich verlieben in','😍']]},
 {t:'dialog',place:'Fiesta de antiguos alumnos',title:'Wie haben wir uns verändert?',scene:'Lucía erkennt dich sofort.',lines:[
  {n:'Lucía',es:'¡Jonas! ¡Cuánto tiempo! Estás igual. ¿Te acuerdas de Pedro? Se ha vuelto superserio, trabaja en un banco.',de:'Jonas! Lange nicht gesehen! Du siehst aus wie immer. Erinnerst du dich an Pedro? Er ist superernst geworden, er arbeitet in einer Bank.'},
  {you:true,opts:[{es:'¡No me lo puedo creer! Con lo loco que era… ¿Y Ana?',ok:true},{es:'¡No me lo puedo creer! ¿Y Ana se ha puesto?',ok:false,why:'Unvollständig: <i>ponerse</i> braucht ein Adjektiv.'}]},
  {n:'Lucía',es:'Ana se hizo médica y ahora vive en Chile. ¿Y tú? ¿Has cambiado mucho?',de:'Ana ist Ärztin geworden und lebt jetzt in Chile. Und du? Hast du dich sehr verändert?'},
  {you:true,opts:[{es:'Creo que me he vuelto más tranquilo. Antes me ponía nervioso por todo.',ok:true},{es:'Creo que me he puesto más tranquilo para siempre. Antes me volvía nervioso por todo.',ok:false,why:'Dauerhafte Charakteränderung → <i>volverse</i>; kurze Reaktion → <i>ponerse</i>.'}]},
  {n:'Lucía',es:'Y Carlos… perdió el trabajo y estuvo a punto de volver a su pueblo.',de:'Und Carlos … hat seinen Job verloren und war kurz davor, in sein Dorf zurückzukehren.'},
  {you:true,opts:[{es:'¡Vaya! ¿Y al final qué hizo?',ok:true},{es:'¡Vaya! ¿Y al final qué se hizo?',ok:false,why:'Hier ganz normal <i>hacer</i>: <i>¿qué hizo?</i> (was hat er gemacht?).'}]},
  {n:'Lucía',es:'Acabó montando un bar en Gràcia. ¡Y le va genial!',de:'Am Ende hat er eine Bar in Gràcia aufgemacht. Und es läuft super!'}]},
 {t:'speak',es:'Con los años me he vuelto más paciente, aunque todavía me pongo nervioso antes de hablar en público.',de:'Mit den Jahren bin ich geduldiger geworden, auch wenn ich immer noch nervös werde, bevor ich öffentlich spreche.'}]},
{id:'l4',title:'Lesen: Diez años después',desc:'Porträt · eigener Text',steps:[
 {t:'read',title:'Diez años después',text:`Cuando conocí a Raquel en la universidad, era la persona más tímida de la clase. Se ponía roja cada vez que el profesor le hacía una pregunta y nunca hablaba en grupo. Nadie habría dicho que diez años después se convertiría en una de las {periodistas|Journalistinnen} más conocidas de la radio.

El cambio no fue de un día para otro. Empezó a trabajar como becaria en una emisora local, donde tuvo que hacer entrevistas en la calle. «Al principio estaba a punto de dejarlo cada semana», me contó. Pero poco a poco se fue haciendo más segura. Llegó a entrevistar a la presidenta del Gobierno en directo, y no se puso nerviosa ni un segundo.

Lo curioso es que, en privado, sigue siendo bastante tímida. «En la radio me pongo otra piel», dice riendo. Yo me quedé sin palabras cuando la escuché por primera vez. Y, aunque nos vemos poco, siempre que coincidimos acabamos hablando hasta las tantas, como en los viejos tiempos.`,de:`Als ich Raquel an der Uni kennenlernte, war sie die schüchternste Person im Kurs. Sie wurde jedes Mal rot, wenn der Professor ihr eine Frage stellte, und sprach nie in der Gruppe. Niemand hätte gesagt, dass sie zehn Jahre später eine der bekanntesten Journalistinnen im Radio werden würde.\n\nDie Veränderung kam nicht von heute auf morgen. Sie fing als Praktikantin bei einem Lokalsender an, wo sie Straßeninterviews machen musste. „Am Anfang war ich jede Woche kurz davor aufzuhören“, erzählte sie mir. Aber nach und nach wurde sie sicherer. Sie interviewte sogar die Regierungschefin live und wurde keine Sekunde nervös.\n\nDas Kuriose ist, dass sie privat immer noch ziemlich schüchtern ist. „Im Radio schlüpfe ich in eine andere Haut“, sagt sie lachend. Ich war sprachlos, als ich sie das erste Mal hörte. Und obwohl wir uns selten sehen, reden wir immer, wenn wir uns treffen, bis spät in die Nacht – wie in alten Zeiten.`},
 {t:'mc',q:'¿Cómo era Raquel en la universidad?',opts:['muy tímida','muy segura','muy habladora'],a:0},
 {t:'mc',q:'„Llegó a entrevistar a la presidenta“ bedeutet …',opts:['Sie hat es sogar geschafft, die Präsidentin zu interviewen.','Sie kam an, um die Präsidentin zu interviewen.','Sie hat die Präsidentin fast interviewt.'],a:0},
 {t:'gap',q:'Diez años después se ___ (convertir) en una periodista conocida. (Konditional)',a:['convertiría']},
 {t:'free',task:'Beschreib eine Person (dich selbst oder jemand anderen), die sich stark verändert hat. (7–9 Sätze)',hint:'Antes … , pero con los años se ha vuelto … · Se hizo … · Se puso … · Se quedó … · Acabó + Gerundium · Llegó a …',focus:'Verben der Veränderung, Periphrasen',model:'Mi hermano Tim era un adolescente bastante caótico. Se ponía de mal humor si alguien le pedía ayuda en casa. Pero cuando cumplió veinte años, se fue a vivir solo y se volvió mucho más responsable. Empezó a cocinar y llegó a organizar cenas para diez personas. Después de la universidad se hizo profesor de primaria. Al principio no le gustaba, pero acabó enamorándose de su trabajo. Cuando lo veo con sus alumnos, me quedo sorprendido de lo paciente que es.'}]}
],
placement:[
 {t:'mc',q:'Cuando le hicieron la pregunta, ___ rojo.',opts:['se puso','se hizo','se convirtió'],a:0},
 {t:'mc',q:'Trabajó mucho y ___ rico.',opts:['se hizo','se puso','se quedó'],a:0},
 {t:'gap',q:'El pueblo se ha ___ (convertir) en un destino turístico.',a:['convertido']},
 {t:'mc',q:'„Ich war kurz davor zu gehen.“',opts:['Estaba a punto de irme.','Acababa de irme.','Me ponía a irme.'],a:0},
 {t:'gap',q:'Al final ___ (yo, acabar) aceptando su propuesta. (Indefinido)',a:['acabé']},
 {t:'mc',q:'Desde que gana tanto dinero, ___ muy arrogante.',opts:['se ha vuelto','se ha puesto','se ha hecho a'],a:0}],
resumen:`<h3>„werden“</h3><p class="es-t">ponerse + Adj. (kurz: rojo, nervioso) · volverse + Adj. (Charakter) · hacerse + Nomen/Adj. (Anstrengung: médico, rico) · quedarse + Adj. (Ergebnis: sorprendido, sin trabajo) · convertirse en + Nomen · llegar a ser</p>
<h3>Periphrasen</h3><p class="es-t">ponerse a / echarse a + Inf. · llegar a + Inf. · acabar + Gerundium · estar a punto de + Inf. · tener + Partizip</p>`});

COURSE.units.push({id:'u31',n:'33',level:'B2b',title:'Argumentar',sub:'Diskursmarker (no obstante, en cambio, es decir, en definitiva) · Vermutungen (habrá llegado, serían las diez) · Argumentationstext · B2 abschließen',
goals:['Gliedern: en primer lugar, por otra parte, por último','Gegensatz: no obstante, en cambio, sin embargo','Erklären: es decir, o sea, en otras palabras','Zusammenfassen: en definitiva, en resumen','Vermutung: Futur / Futur Perfekt / Konditional (estará, habrá llegado, serían)','Pro & Contra-Text schreiben'],
situacion:{title:'Debatte im Seminar',npc:'Profesora Vidal',scene:'Im Seminar „Tecnología y sociedad“ an der UPC sollst du eine Position vertreten: Sollte künstliche Intelligenz an der Uni bei Prüfungen erlaubt sein? Profesora Vidal moderiert und hakt nach.',role:'Du bist Profesora Vidal, Dozentin an der UPC, sachlich und anspruchsvoll. Ihr siezt euch zuerst (usted), du kannst aber zum tú wechseln. Bitte Jonas, seine Position zu begründen, stell Gegenargumente vor (No obstante, hay quien dice que…) und bitte ihn am Ende um ein Fazit (¿Cuál sería su conclusión?). Benutze Diskursmarker.',goal:'Vertritt eine Position mit gegliederten Argumenten (en primer lugar, por otra parte, no obstante, es decir) und ziehe ein Fazit (en definitiva).'},
lessons:[
{id:'l1',title:'Gliedern & verbinden',desc:'en primer lugar · no obstante · es decir',steps:[
 {t:'info',title:'Diskursmarker für Texte und Debatten',html:`<table><tr><th>Funktion</th><th>Marker</th></tr>
 <tr><td>Aufzählen</td><td class="es-t">en primer lugar · en segundo lugar · por otra parte · además · por último</td></tr>
 <tr><td>Gegensatz</td><td class="es-t">sin embargo · no obstante (formell) · en cambio (dagegen) · aun así</td></tr>
 <tr><td>Erklären</td><td class="es-t">es decir · o sea · en otras palabras</td></tr>
 <tr><td>Beispiel</td><td class="es-t">por ejemplo · tal es el caso de · sin ir más lejos</td></tr>
 <tr><td>Fazit</td><td class="es-t">en definitiva · en resumen · en conclusión · en suma</td></tr></table>
 <div class="ex"><i>en cambio</i> stellt zwei Dinge gegenüber (<span class="es-t">Yo trabajo mucho; mi hermano, en cambio, …</span>). <i>sin embargo / no obstante</i> = trotzdem, jedoch.</div>`},
 {t:'mc',q:'Mi hermana es muy ordenada; yo, ___, soy un desastre.',opts:['en cambio','es decir','por último'],a:0},
 {t:'mc',q:'El plan es caro; ___, creo que merece la pena.',opts:['no obstante','es decir','en primer lugar'],a:0},
 {t:'mc',q:'Llegará el 15, ___, dentro de dos semanas.',opts:['es decir','en cambio','no obstante'],a:0},
 {t:'gap',q:'En ___, la propuesta tiene más ventajas que inconvenientes. (Fazit)',a:['definitiva','resumen','conclusión']},
 {t:'match',q:'Funktion zuordnen',pairs:[['en primer lugar','Aufzählen'],['no obstante','Gegensatz'],['o sea','Erklären'],['en suma','Fazit'],['sin ir más lejos','Beispiel']]},
 {t:'tr',de:'Einerseits ist es praktisch; andererseits ist es teuer.',a:['Por un lado es práctico; por otro (lado), es caro.','Por una parte es práctico; por otra, es caro.']}]},
{id:'l2',title:'Wahrscheinlich …',desc:'estará · habrá llegado · serían las diez',steps:[
 {t:'info',title:'Vermutungen mit Zeitformen',html:`<table><tr><th>Vermutung über …</th><th>Form</th><th>Beispiel</th></tr>
 <tr><td>jetzt</td><td>Futur</td><td class="es-t">¿Dónde está Pablo? – <b>Estará</b> en casa.</td></tr>
 <tr><td>gerade eben (Perfekt)</td><td>Futur Perfekt</td><td class="es-t">No contesta. <b>Habrá salido</b>.</td></tr>
 <tr><td>damals (Indef./Imperf.)</td><td>Konditional</td><td class="es-t">Cuando llegó <b>serían</b> las diez.</td></tr></table>
 <div class="ex">Futur Perfekt = <span class="es-t">habré, habrás, habrá, habremos, habréis, habrán + Partizip</span>. Deutsch oft mit „wohl“: <i>Er wird wohl gegangen sein.</i></div>`},
 {t:'mc',q:'Laia no ha venido. ___ enferma. (jetzt, Vermutung)',opts:['Estará','Estaría','Habrá estado a'],a:0},
 {t:'mc',q:'¿Por qué no contestó ayer? – ___ ocupado.',opts:['Estaría','Estará','Esté'],a:0},
 {t:'gap',q:'Las luces están apagadas. ___ (ellos, irse) ya. (Futur Perfekt)',a:['Se habrán ido']},
 {t:'gap',q:'¿Cuántos años tenía cuando se casó? – ___ (tener) unos treinta.',a:['Tendría']},
 {t:'gap',q:'Son las once y Marc no está. ___ (perder) el tren. (Futur Perfekt)',a:['Habrá perdido']},
 {t:'listen',es:'No te preocupes, ya habrá llegado al aeropuerto. Estará buscando la puerta de embarque.',de:'Keine Sorge, sie wird wohl schon am Flughafen angekommen sein. Sie sucht wohl gerade das Gate.'}]},
{id:'l3',title:'Debattieren',desc:'Wortschatz · Seminar-Dialog',steps:[
 {t:'vocab',title:'Argumentieren & Technik',items:[['el argumento','das Argument','💬'],['las ventajas y los inconvenientes','Vor- und Nachteile','⚖️'],['a favor / en contra de','dafür / dagegen','👍'],['defender una postura','eine Position vertreten','🛡️'],['plantear','aufwerfen, vorschlagen','💡'],['la inteligencia artificial','die künstliche Intelligenz','🤖'],['la herramienta','das Werkzeug','🔧'],['hacer trampa','schummeln','🃏'],['fomentar','fördern','🌱'],['a largo plazo','langfristig','⏳'],['cabe destacar que','es ist hervorzuheben, dass','📌'],['hay quien opina que','manche meinen, dass','🗣️']]},
 {t:'dialog',place:'Seminario en la UPC',title:'KI bei Prüfungen?',scene:'Profesora Vidal gibt dir das Wort.',lines:[
  {n:'Prof. Vidal',es:'Jonas, ¿está usted a favor o en contra de permitir la IA en los exámenes?',de:'Jonas, sind Sie dafür oder dagegen, KI in Prüfungen zu erlauben?'},
  {you:true,opts:[{es:'En principio, a favor. En primer lugar, porque es una herramienta que usaremos en el trabajo.',ok:true},{es:'En principio, a favor. En cambio, porque es una herramienta que usaremos en el trabajo.',ok:false,why:'Erstes Argument → <i>en primer lugar</i>. <i>en cambio</i> stellt etwas gegenüber.'}]},
  {n:'Prof. Vidal',es:'No obstante, hay quien opina que así los estudiantes no aprenden a pensar.',de:'Dennoch meinen manche, dass die Studierenden so nicht denken lernen.'},
  {you:true,opts:[{es:'Es cierto. Por eso, habría que cambiar el tipo de examen, es decir, evaluar más el razonamiento.',ok:true},{es:'Es cierto. Por eso, habría que cambiar el tipo de examen, en definitiva, evaluar más el razonamiento.',ok:false,why:'Erklärung/Umformulierung → <i>es decir</i>; <i>en definitiva</i> ist ein Fazit.'}]},
  {n:'Prof. Vidal',es:'Interesante. ¿Y cuál sería su conclusión?',de:'Interessant. Und was wäre Ihr Fazit?'},
  {you:true,opts:[{es:'En definitiva, no se trata de prohibir, sino de aprender a usarla bien.',ok:true},{es:'En primer lugar, no se trata de prohibir, sino de aprender a usarla bien.',ok:false,why:'Fazit → <i>en definitiva / en conclusión</i>.'}]}]},
 {t:'speak',es:'Por una parte, la tecnología nos ayuda; por otra, puede hacernos más dependientes. En definitiva, depende de cómo la usemos.',de:'Einerseits hilft uns die Technologie; andererseits kann sie uns abhängiger machen. Letztlich hängt es davon ab, wie wir sie benutzen.'}]},
{id:'l4',title:'B2-Check: Pro & Contra',desc:'Lesen · Argumentationstext',steps:[
 {t:'read',title:'¿Semana laboral de cuatro días?',text:`En los últimos años, varias empresas españolas han probado la semana laboral de cuatro días. Los resultados, según sus defensores, son {prometedores|vielversprechend}: los empleados están menos estresados y, sin embargo, producen lo mismo o incluso más.

No obstante, no todo el mundo está convencido. En primer lugar, no todos los sectores pueden reducir las horas: un hospital o un restaurante, por ejemplo, necesitan personal todos los días. En segundo lugar, hay quien teme que la jornada de los cuatro días restantes se vuelva más intensa, es decir, que se trabaje lo mismo en menos tiempo. Por otra parte, las pequeñas empresas dicen que no podrían permitírselo.

Cabe destacar, en cambio, que en los países donde se ha probado, como Islandia, la mayoría de las empresas acabaron manteniendo el modelo. En definitiva, la semana de cuatro días no es una solución mágica, pero quizá sí sea el principio de una nueva forma de entender el trabajo.`,de:`In den letzten Jahren haben mehrere spanische Firmen die Viertagewoche ausprobiert. Die Ergebnisse sind laut ihren Befürwortern vielversprechend: Die Angestellten sind weniger gestresst und produzieren trotzdem genauso viel oder sogar mehr.\n\nDennoch ist nicht jeder überzeugt. Erstens können nicht alle Branchen die Stunden reduzieren: Ein Krankenhaus oder ein Restaurant zum Beispiel brauchen jeden Tag Personal. Zweitens befürchten manche, dass der Arbeitstag an den übrigen vier Tagen intensiver wird, das heißt, dass man in weniger Zeit genauso viel arbeitet. Außerdem sagen kleine Firmen, dass sie sich das nicht leisten könnten.\n\nHervorzuheben ist dagegen, dass in den Ländern, in denen es ausprobiert wurde, wie Island, die meisten Firmen das Modell am Ende beibehalten haben. Letztlich ist die Viertagewoche keine Wunderlösung, aber vielleicht der Anfang einer neuen Art, Arbeit zu verstehen.`},
 {t:'mc',q:'Según el texto, ¿cuál es un argumento en contra?',opts:['No todos los sectores pueden reducir las horas.','Los empleados producen menos.','Islandia lo ha prohibido.'],a:0},
 {t:'mc',q:'„es decir“ im zweiten Absatz …',opts:['erklärt den vorigen Gedanken genauer','leitet einen Gegensatz ein','zieht ein Fazit'],a:0},
 {t:'mc',q:'B2-Mix: Si ___ cuatro días a la semana, tendría más tiempo libre.',opts:['trabajara','trabajo','trabajaría'],a:0},
 {t:'mc',q:'B2-Mix: Me sorprendió que la empresa ___ el modelo.',opts:['mantuviera','mantiene','mantenga'],a:0},
 {t:'free',task:'Schreib einen Argumentationstext (8–10 Sätze): ¿Deberían las universidades permitir la inteligencia artificial en los exámenes? Mit Einleitung, Pro, Contra und Fazit.',hint:'En primer lugar … · Además … · No obstante … · Hay quien opina que … · es decir … · Si … , … · En definitiva …',focus:'Diskursmarker, Konzessiv/Kausal, Subjuntivo, irreale Bedingungen',model:'La inteligencia artificial ha llegado a las aulas y plantea una pregunta difícil: ¿debería estar permitida en los exámenes? En primer lugar, es una herramienta que usaremos en nuestra vida profesional, así que tiene sentido aprender a usarla. Además, si se permitiera, los exámenes podrían centrarse más en el razonamiento. No obstante, hay quien opina que los estudiantes dejarían de pensar por sí mismos. Es cierto que existe el riesgo de que algunos hagan trampa. Por otra parte, prohibirla no impediría que la usen en casa. Por eso, en mi opinión, sería mejor cambiar el tipo de examen, es decir, evaluar más proyectos y presentaciones orales. En definitiva, no se trata de prohibir, sino de enseñar a usar la IA con responsabilidad.'}]}
],
placement:[
 {t:'mc',q:'Mi hermano es muy alto; yo, ___, soy bajito.',opts:['en cambio','es decir','en definitiva'],a:0},
 {t:'mc',q:'¿Dónde está Laia? – ___ en la biblioteca. (Vermutung)',opts:['Estará','Esté','Estaba a'],a:0},
 {t:'gap',q:'No contesta. Se ___ (dormir). (Futur Perfekt)',a:['habrá dormido']},
 {t:'mc',q:'„das heißt“',opts:['es decir','no obstante','por último'],a:0},
 {t:'gap',q:'Cuando llegué ___ (ser) las diez. (Vermutung, damals)',a:['serían']},
 {t:'mc',q:'Fazit-Marker:',opts:['en definitiva','en primer lugar','por ejemplo'],a:0}],
resumen:`<h3>Diskursmarker</h3><p class="es-t">en primer lugar · además · por otra parte · por último · sin embargo · no obstante · en cambio · es decir · o sea · por ejemplo · en definitiva · en resumen</p>
<h3>Vermutungen</h3><p class="es-t">Estará en casa. (jetzt) · Habrá salido. (gerade) · Serían las diez. (damals)</p>
<h3>Argumentieren</h3><p class="es-t">a favor / en contra de · hay quien opina que … · cabe destacar que … · ventajas e inconvenientes</p>`});
