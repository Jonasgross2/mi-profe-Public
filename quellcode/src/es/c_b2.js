/* ===== B2 Teil 1: Unidad 26–29 – eigene Inhalte nach dem Plan Curricular (Instituto Cervantes) ===== */

COURSE.units.push({id:'u24',n:'26',level:'B2',title:'Si tuviera tiempo…',sub:'Imperfecto de subjuntivo (tuviera, fuera, hiciera) · irreale Bedingungen (si tuviera…, haría…) · ojalá + Imperfecto · como si · Träume & Lebensentwürfe',
goals:['Imperfecto de subjuntivo: Bildung aus der 3. Person Plural Indefinido','unregelmäßige Formen: tuviera, fuera, hiciera, pudiera, dijera','irreale Bedingung: si + Imperf. Subj. → Konditional','ojalá + Imperf. Subj. (unwahrscheinlicher Wunsch)','como si + Imperf. Subj.','über Träume und Alternativen im Leben sprechen'],
situacion:{title:'Was wäre wenn …',npc:'Sergio',scene:'Spätabends auf einer Dachterrasse in Poble-sec. Sergio ist in philosophischer Stimmung und will wissen, was du anders machen würdest, wenn du könntest.',role:'Du bist Sergio, Master-Kommilitone von Jonas, nachdenklich und humorvoll. Ihr duzt euch. Stell hypothetische Fragen (¿Qué harías si te tocara la lotería? ¿Dónde vivirías si pudieras elegir?) und erzähl auch von deinen Träumen. Benutze si + Imperfecto de subjuntivo + Konditional, ojalá + Imperfecto, como si.',goal:'Beantworte hypothetische Fragen mit si + Imperfecto de subjuntivo und Konditional und sag mindestens einen Wunsch mit ojalá + Imperfecto.'},
lessons:[
{id:'l1',title:'Eine neue Form: tuviera',desc:'hablara · comiera · tuviera',steps:[
 {t:'info',title:'Imperfecto de subjuntivo: so bildest du ihn',html:`<p>Nimm die <b>3. Person Plural Indefinido</b>, streich <b>-ron</b> und häng <b>-ra</b> an:</p>
 <table><tr><th>Indefinido</th><th>→ Stamm</th><th>Imperf. Subj.</th></tr>
 <tr><td class="es-t">habla<b>ron</b></td><td class="es-t">habla-</td><td class="es-t">hablara, hablaras, hablara, habláramos, hablarais, hablaran</td></tr>
 <tr><td class="es-t">comie<b>ron</b></td><td class="es-t">comie-</td><td class="es-t">comiera, comieras …</td></tr>
 <tr><td class="es-t">tuvie<b>ron</b></td><td class="es-t">tuvie-</td><td class="es-t">tuviera, tuvieras …</td></tr>
 <tr><td class="es-t">fue<b>ron</b></td><td class="es-t">fue-</td><td class="es-t">fuera (ser <b>und</b> ir)</td></tr></table>
 <div class="ex">Dadurch sind alle Unregelmäßigkeiten des Indefinido automatisch drin: <span class="es-t">hicieron → hiciera, dijeron → dijera, pudieron → pudiera, estuvieron → estuviera</span>.</div>
 <div class="ojo">Es gibt auch Formen auf <b>-se</b> (<i>tuviese, hablase</i>) – gleiche Bedeutung, eher geschrieben. Du verstehst sie, benutzen reicht mit <b>-ra</b>.</div>`},
 {t:'conj',verb:'tener',de:'haben',tense:'Imperfecto de subjuntivo',forms:['tuviera','tuvieras','tuviera','tuviéramos','tuvierais','tuvieran']},
 {t:'match',q:'Indefinido → Imperfecto de subjuntivo',pairs:[['hicieron','hiciera'],['dijeron','dijera'],['pudieron','pudiera'],['estuvieron','estuviera'],['supieron','supiera']]},
 {t:'gap',q:'(nosotros, vivir) → ___',a:['viviéramos']},
 {t:'gap',q:'(ellos, ser) → ___',a:['fueran']},
 {t:'mc',q:'Welche Form ist richtig? (yo, poner)',opts:['pusiera','ponera','ponería'],a:0},
 {t:'gap',q:'(tú, venir) → ___',a:['vinieras']}]},
{id:'l2',title:'Wenn ich … hätte',desc:'si tuviera, viajaría',steps:[
 {t:'info',title:'Irreale Bedingung in der Gegenwart',html:`<table><tr><th>Bedingung</th><th>möglich (B1)</th><th>irreal / unwahrscheinlich (B2)</th></tr>
 <tr><td></td><td class="es-t">Si <b>tengo</b> tiempo, <b>iré</b>.</td><td class="es-t">Si <b>tuviera</b> tiempo, <b>iría</b>.</td></tr>
 <tr><td></td><td>Wenn ich Zeit habe, gehe ich.</td><td>Wenn ich Zeit hätte, würde ich gehen.</td></tr></table>
 <div class="ex">Formel: <b>si + Imperfecto de subjuntivo → Konditional</b>. Die Reihenfolge kann man tauschen: <span class="es-t">Iría si tuviera tiempo.</span></div>
 <div class="ojo">Nach <b>si</b> nie Konditional: <s>si tendría</s> → <b>si tuviera</b>. (Typischer Fehler auch bei Muttersprachlern aus manchen Regionen – aber falsch.)</div>`},
 {t:'mc',q:'Si ___ más dinero, me compraría un piso.',opts:['tuviera','tendría','tengo'],a:0},
 {t:'mc',q:'Si fuera tú, no ___ nada.',opts:['diría','dijera','digo'],a:0},
 {t:'gap',q:'Si ___ (yo, saber) cocinar, invitaría a todos a cenar.',a:['supiera']},
 {t:'gap',q:'¿Qué ___ (tú, hacer) si te tocara la lotería?',a:['harías']},
 {t:'gap',q:'Si no ___ (llover), iríamos a la playa.',a:['lloviera']},
 {t:'order',es:'Si viviera en la playa, nadaría todos los días.',de:'Wenn ich am Strand wohnen würde, würde ich jeden Tag schwimmen.'},
 {t:'tr',de:'Wenn ich du wäre, würde ich das Angebot annehmen.',a:['Si yo fuera tú, aceptaría la oferta.','Si fuera tú, aceptaría la oferta.','Yo que tú aceptaría la oferta.']},
 {t:'listen',es:'Si pudiera elegir, viviría en un pueblo cerca del mar.',de:'Wenn ich wählen könnte, würde ich in einem Dorf in der Nähe des Meeres leben.'}]},
{id:'l3',title:'Ojalá & como si',desc:'ojalá pudiera · como si fuera',steps:[
 {t:'info',title:'Wünsche und Vergleiche',html:`<table><tr><th></th><th>Beispiel</th><th>Bedeutung</th></tr>
 <tr><td class="es-t">ojalá + Subj. Präsens</td><td class="es-t">Ojalá <b>venga</b>.</td><td>Hoffentlich kommt er. (möglich)</td></tr>
 <tr><td class="es-t">ojalá + Imperf. Subj.</td><td class="es-t">Ojalá <b>viniera</b>.</td><td>Wenn er doch käme! (unwahrscheinlich)</td></tr>
 <tr><td class="es-t">como si + Imperf. Subj.</td><td class="es-t">Habla como si <b>fuera</b> el jefe.</td><td>Er redet, als ob er der Chef wäre.</td></tr>
 <tr><td class="es-t">me gustaría que + Imperf. Subj.</td><td class="es-t">Me gustaría que <b>vinieras</b>.</td><td>Ich hätte gern, dass du kommst.</td></tr></table>
 <div class="ex"><i>como si</i> steht <b>immer</b> mit Imperfecto (oder Pluscuamperfecto) de subjuntivo – nie mit Präsens.</div>`},
 {t:'mc',q:'Me mira como si no me ___.',opts:['conociera','conoce','conozca'],a:0},
 {t:'mc',q:'„Wenn ich doch nur besser singen könnte!“',opts:['¡Ojalá pudiera cantar mejor!','¡Ojalá puedo cantar mejor!','¡Ojalá podría cantar mejor!'],a:0},
 {t:'gap',q:'Me gustaría que ___ (vosotros, conocer) a mi familia.',a:['conocierais']},
 {t:'gap',q:'Gasta dinero como si ___ (ser) millonario.',a:['fuera']},
 {t:'vocab',title:'Träume & Lebensentwürfe',items:[['tocar la lotería','im Lotto gewinnen','🎰'],['dar la vuelta al mundo','eine Weltreise machen','🌍'],['montar un negocio','ein Geschäft gründen','🏪'],['cambiar de vida','sein Leben ändern','🔄'],['echar raíces','Wurzeln schlagen','🌳'],['el sueño','der Traum','💭'],['la meta','das Ziel','🎯'],['arriesgarse','etwas riskieren','🎲'],['arrepentirse (de)','bereuen','😔'],['valer la pena','sich lohnen','✅']]},
 {t:'tr',de:'Wenn ich im Lotto gewinnen würde, würde ich eine Weltreise machen.',a:['Si me tocara la lotería, daría la vuelta al mundo.','Si ganara la lotería, daría la vuelta al mundo.','Si me tocara la lotería, haría un viaje alrededor del mundo.']},
 {t:'speak',es:'Ojalá tuviera más tiempo para viajar, pero ahora tengo que trabajar.',de:'Wenn ich doch mehr Zeit zum Reisen hätte, aber jetzt muss ich arbeiten.'}]},
{id:'l4',title:'Lesen: Otra vida',desc:'Kolumne · eigener Text',steps:[
 {t:'read',title:'Si pudiera empezar de nuevo',text:`A veces me pregunto qué haría si pudiera empezar de nuevo. Quizá estudiaría música en lugar de {Derecho|Jura}, o me iría a vivir a Lisboa, donde siempre me he sentido en casa. Si no tuviera hipoteca ni hijos, seguramente me arriesgaría más.

Pero luego pienso en lo que tengo: un trabajo que me gusta, amigos que me conocen desde hace veinte años y un barrio donde todo el mundo me saluda. Si cambiara de vida, perdería muchas de esas cosas. Ojalá pudiéramos vivir dos vidas a la vez, una tranquila y otra llena de aventuras. Como no es posible, intento meter un poco de aventura en la vida tranquila: este año, por ejemplo, me he apuntado a clases de {guitarra|Gitarre}. Nunca es tarde.`,de:`Manchmal frage ich mich, was ich tun würde, wenn ich neu anfangen könnte. Vielleicht würde ich Musik statt Jura studieren oder nach Lissabon ziehen, wo ich mich immer zu Hause gefühlt habe. Wenn ich keine Hypothek und keine Kinder hätte, würde ich sicher mehr riskieren.\n\nAber dann denke ich an das, was ich habe: eine Arbeit, die mir gefällt, Freunde, die mich seit zwanzig Jahren kennen, und ein Viertel, in dem mich alle grüßen. Wenn ich mein Leben ändern würde, würde ich viele dieser Dinge verlieren. Wenn wir doch zwei Leben gleichzeitig leben könnten, ein ruhiges und eins voller Abenteuer. Da das nicht geht, versuche ich, ein bisschen Abenteuer ins ruhige Leben zu bringen: Dieses Jahr habe ich mich zum Beispiel für Gitarrenunterricht angemeldet. Es ist nie zu spät.`},
 {t:'mc',q:'¿Por qué no cambia de vida el autor?',opts:['Porque perdería muchas cosas que valora.','Porque no le gusta Lisboa.','Porque no sabe tocar la guitarra.'],a:0},
 {t:'mc',q:'„Ojalá pudiéramos vivir dos vidas“ bedeutet …',opts:['Er hält es für unmöglich, wünscht es sich aber.','Er plant, zwei Leben zu leben.','Er hofft, dass es morgen passiert.'],a:0},
 {t:'gap',q:'Si no ___ (tener) hipoteca, me arriesgaría más.',a:['tuviera']},
 {t:'free',task:'¿Qué harías si pudieras cambiar una cosa de tu vida? Escribe 6–8 frases.',hint:'Si pudiera … · Si tuviera … · Me gustaría que … · Ojalá … · Pero también …',focus:'si + Imperf. Subj. → Konditional, ojalá, me gustaría que',model:'Si pudiera cambiar una cosa de mi vida, viviría más cerca del mar. Si tuviera más tiempo, aprendería a surfear. Me gustaría que mis amigos de Mannheim vivieran también en Barcelona. Ojalá no tuviera que elegir entre los dos países. Pero también sé que si me fuera para siempre, echaría mucho de menos a mi familia. Por eso, de momento, intento disfrutar de lo que tengo.'}]}
],
placement:[
 {t:'mc',q:'Si ___ tiempo, iría contigo.',opts:['tuviera','tendría','tengo'],a:0},
 {t:'mc',q:'Habla como si lo ___ todo.',opts:['supiera','sabe','sepa'],a:0},
 {t:'gap',q:'Si yo ___ (ser) tú, no lo haría.',a:['fuera']},
 {t:'gap',q:'¿Qué ___ (tú, hacer) si ganaras un millón?',a:['harías']},
 {t:'mc',q:'Me gustaría que ___ a la fiesta.',opts:['vinieras','vienes','vendrías'],a:0},
 {t:'gap',q:'(ellos, decir) → Imperfecto de subjuntivo: ___',a:['dijeran']}],
resumen:`<h3>Imperfecto de subjuntivo</h3><p>3. Pl. Indefinido − <b>ron</b> + <b>ra</b>: <span class="es-t">hablaron → hablara · tuvieron → tuviera · fueron → fuera · hicieron → hiciera</span></p><p class="es-t">-ra, -ras, -ra, -ramos (mit Akzent: habláramos), -rais, -ran</p>
<h3>Irreale Bedingung</h3><p class="es-t">Si tuviera tiempo, iría. (si + Imperf. Subj. → Konditional)</p>
<h3>Wünsche & Vergleiche</h3><p class="es-t">Ojalá viniera. · Me gustaría que vinieras. · Habla como si fuera el jefe.</p>`});

COURSE.units.push({id:'u25',n:'27',level:'B2',title:'Quería que vinieras',sub:'Zeitenfolge: Vergangenheit im Hauptsatz → Imperfecto de subjuntivo · Bitten, Wünsche, Gefühle in der Vergangenheit · Erwartungen an Praktikum & Job',
goals:['quería que / me pidió que + Imperf. Subj.','me sorprendió / me molestó que + Imperf. Subj.','era importante / necesario que + Imperf. Subj.','no creía que + Imperf. Subj.','Zeitenfolge: Präsens → Subj. Präsens, Vergangenheit → Imperf. Subj.','über Erwartungen und Enttäuschungen im Job erzählen'],
situacion:{title:'Feedback zum Praktikum',npc:'Carmen',scene:'Dein Praktikum bei einer Softwarefirma in Barcelona ist vorbei. Carmen aus der Personalabteilung führt ein Abschlussgespräch und will wissen, was du erwartet hattest und wie es war.',role:'Du bist Carmen, Personalreferentin, freundlich und professionell. Ihr sprecht mit „tú“, aber in professionellem Ton. Frag Jonas, was er vom Praktikum erwartet hatte (¿Qué esperabas que…?), was ihn überrascht hat, was ihn gestört hat, und was die Firma besser machen könnte. Benutze Vergangenheit + Imperfecto de subjuntivo.',goal:'Erzähl von deinen Erwartungen und Überraschungen mit esperaba que / me sorprendió que / me habría gustado que + Imperfecto de subjuntivo.'},
lessons:[
{id:'l1',title:'Sie wollte, dass ich …',desc:'quería que · me pidió que',steps:[
 {t:'info',title:'Zeitenfolge mit Subjuntivo',html:`<table><tr><th>Hauptsatz</th><th>Nebensatz</th></tr>
 <tr><td>Präsens / Futur / Imperativ</td><td>Subj. Präsens</td></tr>
 <tr><td class="es-t">Quiero que <b>vengas</b>.</td><td></td></tr>
 <tr><td>Vergangenheit / Konditional</td><td>Imperf. Subj.</td></tr>
 <tr><td class="es-t">Quería / Quise / Querría que <b>vinieras</b>.</td><td></td></tr></table>
 <div class="ex">Das Prinzip kennst du von der indirekten Rede: Die Vergangenheit „zieht“ den Nebensatz mit. <span class="es-t">Me pide que llame → Me pidió que llamara.</span></div>`},
 {t:'mc',q:'Mi jefa me pidió que ___ el informe.',opts:['terminara','termine','terminaba'],a:0},
 {t:'mc',q:'Mi jefa me pide que ___ el informe.',opts:['termine','terminara','termino'],a:0},
 {t:'gap',q:'Mis padres querían que ___ (yo, estudiar) Medicina.',a:['estudiara']},
 {t:'gap',q:'El profesor nos dijo que ___ (nosotros, leer) el capítulo 3. (Aufforderung)',a:['leyéramos']},
 {t:'gap',q:'Te recomendé que no ___ (tú, ir) en agosto.',a:['fueras']},
 {t:'order',es:'Le pedí que me ayudara con la mudanza.',de:'Ich bat ihn, mir beim Umzug zu helfen.'},
 {t:'tr',de:'Sie wollte, dass wir früher kommen.',a:['Quería que viniéramos antes.','Quería que llegáramos antes.','Ella quería que viniéramos antes.']}]},
{id:'l2',title:'Es überraschte mich, dass …',desc:'me sorprendió que · era normal que',steps:[
 {t:'info',title:'Gefühle, Bewertungen, Zweifel – in der Vergangenheit',html:`<table><tr><th>Präsens</th><th>Vergangenheit</th></tr>
 <tr><td class="es-t">Me sorprende que <b>sea</b> tan fácil.</td><td class="es-t">Me sorprendió que <b>fuera</b> tan fácil.</td></tr>
 <tr><td class="es-t">Es normal que <b>estés</b> nervioso.</td><td class="es-t">Era normal que <b>estuvieras</b> nervioso.</td></tr>
 <tr><td class="es-t">No creo que <b>venga</b>.</td><td class="es-t">No creía que <b>viniera</b>.</td></tr>
 <tr><td class="es-t">Busco a alguien que <b>sepa</b> …</td><td class="es-t">Buscaba a alguien que <b>supiera</b> …</td></tr></table>`},
 {t:'mc',q:'Me molestó que nadie me ___ las gracias.',opts:['diera','dé','daba'],a:0},
 {t:'mc',q:'No creía que el proyecto ___ tan difícil.',opts:['fuera','es','sea'],a:0},
 {t:'gap',q:'Era importante que todos ___ (llegar) puntuales.',a:['llegaran']},
 {t:'gap',q:'Nos sorprendió que el jefe ___ (hablar) alemán.',a:['hablara']},
 {t:'gap',q:'Buscábamos un piso que ___ (estar) cerca del trabajo.',a:['estuviera']},
 {t:'match',q:'Präsens → Vergangenheit',pairs:[['quiero que vengas','quería que vinieras'],['es raro que llueva','era raro que lloviera'],['dudo que lo sepa','dudaba que lo supiera'],['te pido que esperes','te pedí que esperaras']]},
 {t:'listen',es:'Me sorprendió que en la empresa todos se tutearan, incluso con el director.',de:'Es überraschte mich, dass sich in der Firma alle duzten, sogar mit dem Direktor.'}]},
{id:'l3',title:'Erwartungen',desc:'esperaba que · me habría gustado que',steps:[
 {t:'vocab',title:'Arbeit & Praktikum',items:[['las prácticas','das Praktikum','💼'],['el/la becario/a','der/die Praktikant/in','🧑‍💻'],['el/la tutor/a','der/die Betreuer/in','🧑‍🏫'],['las expectativas','die Erwartungen','🔮'],['cumplir las expectativas','die Erwartungen erfüllen','✅'],['el ambiente de trabajo','das Arbeitsklima','🌤️'],['la jornada intensiva','die durchgehende Arbeitszeit','⏰'],['tutearse','sich duzen','🤝'],['la formación','die Ausbildung / Schulung','📚'],['valorar','schätzen, bewerten','⭐'],['decepcionar','enttäuschen','😞'],['la retroalimentación / el feedback','das Feedback','💬']]},
 {t:'info',title:'Höflich Kritik üben',html:`<p class="es-t">Me habría gustado que <b>hubiera</b> más formación. · Habría estado bien que me <b>dieran</b> más feedback.</p>
 <div class="ex"><i>me habría gustado que</i> / <i>me hubiera gustado que</i> + Imperf. Subj. = „ich hätte mir gewünscht, dass …“ – höflich und indirekt.</div>`},
 {t:'mc',q:'„Ich hätte mir gewünscht, dass sie mir mehr erklären.“',opts:['Me habría gustado que me explicaran más.','Me habría gustado que me expliquen más.','Me gustó que me explicaran más.'],a:0},
 {t:'dialog',place:'Oficina de recursos humanos',title:'Abschlussgespräch',scene:'Carmen hat einen Kaffee für dich und ihren Laptop vor sich.',lines:[
  {n:'Carmen',es:'Bueno, Jonas, ¿qué esperabas de estas prácticas cuando empezaste?',de:'Also, Jonas, was hast du von diesem Praktikum erwartet, als du angefangen hast?'},
  {you:true,opts:[{es:'Esperaba que me dieran tareas reales, y la verdad es que se cumplieron mis expectativas.',ok:true},{es:'Esperaba que me dan tareas reales, y la verdad es que se cumplieron mis expectativas.',ok:false,why:'<b>Esperaba que</b> (Vergangenheit) → Imperfecto de subjuntivo: <i>dieran</i>.'}]},
  {n:'Carmen',es:'Me alegro. ¿Y hubo algo que te sorprendiera?',de:'Das freut mich. Und gab es etwas, das dich überrascht hat?'},
  {you:true,opts:[{es:'Sí, me sorprendió que todo el mundo comiera a las dos y media.',ok:true},{es:'Sí, me sorprendió que todo el mundo come a las dos y media.',ok:false,why:'Gefühl in der Vergangenheit → <i>comiera</i>.'}]},
  {n:'Carmen',es:'¡Ja, ja! Típico. ¿Y qué podríamos mejorar?',de:'Haha! Typisch. Und was könnten wir verbessern?'},
  {you:true,opts:[{es:'Me habría gustado que mi tutor tuviera más tiempo para reuniones.',ok:true},{es:'Me habría gustado que mi tutor tiene más tiempo para reuniones.',ok:false,why:'<b>me habría gustado que</b> → <i>tuviera</i>.'}]}]},
 {t:'tr',de:'Es hat mich überrascht, dass das Arbeitsklima so entspannt war.',a:['Me sorprendió que el ambiente de trabajo fuera tan relajado.','Me sorprendió que el ambiente de trabajo estuviera tan relajado.']}]},
{id:'l4',title:'Lesen: Mi primer trabajo',desc:'Erfahrungsbericht · Bewertung schreiben',steps:[
 {t:'read',title:'Mi primer trabajo en España',text:`Cuando empecé a trabajar en una agencia de marketing en Madrid, no sabía muy bien qué esperar. En Alemania me habían dicho que en España todo era más relajado, pero me sorprendió que la gente trabajara tantas horas. Mi jefa quería que estuviéramos disponibles hasta las ocho, aunque oficialmente salíamos a las seis.

Al principio no me atrevía a decir nada. Era normal que los becarios se quedaran más tiempo, me explicó un compañero. Sin embargo, después de tres meses le pedí a mi jefa que habláramos del tema. Para mi sorpresa, me escuchó con atención y propuso que probáramos la jornada intensiva en verano. Fue la primera vez que sentí que mi opinión contaba. Aprendí que, a veces, es mejor hablar que esperar a que las cosas cambien solas.`,de:`Als ich anfing, in einer Marketingagentur in Madrid zu arbeiten, wusste ich nicht genau, was ich erwarten sollte. In Deutschland hatte man mir gesagt, dass in Spanien alles entspannter sei, aber es überraschte mich, dass die Leute so viele Stunden arbeiteten. Meine Chefin wollte, dass wir bis acht erreichbar waren, obwohl wir offiziell um sechs Feierabend hatten.\n\nAnfangs traute ich mich nicht, etwas zu sagen. Es sei normal, dass die Praktikanten länger blieben, erklärte mir ein Kollege. Nach drei Monaten bat ich meine Chefin jedoch, dass wir über das Thema sprechen. Zu meiner Überraschung hörte sie mir aufmerksam zu und schlug vor, dass wir im Sommer die durchgehende Arbeitszeit ausprobieren. Es war das erste Mal, dass ich spürte, dass meine Meinung zählte. Ich lernte, dass es manchmal besser ist zu reden, als darauf zu warten, dass sich die Dinge von allein ändern.`},
 {t:'mc',q:'¿Qué le sorprendió al autor?',opts:['que la gente trabajara tantas horas','que todo fuera relajado','que su jefa hablara alemán'],a:0},
 {t:'mc',q:'¿Qué propuso la jefa?',opts:['que probaran la jornada intensiva en verano','que el autor trabajara hasta las ocho','que contrataran más becarios'],a:0},
 {t:'gap',q:'Mi jefa quería que ___ (nosotros, estar) disponibles hasta las ocho.',a:['estuviéramos']},
 {t:'free',task:'Erzähl von einer Erfahrung (Job, Praktikum, Uni, Umzug), die anders war als erwartet. (6–8 Sätze)',hint:'Esperaba que … · Me sorprendió que … · Mis padres / mi jefe quería que … · No creía que … · Me habría gustado que …',focus:'Zeitenfolge: Vergangenheit + Imperfecto de subjuntivo',model:'Cuando llegué a Barcelona, esperaba que todo fuera fácil. Sin embargo, me sorprendió que fuera tan difícil encontrar piso. No creía que los alquileres fueran tan caros. Mi madre quería que buscara una residencia de estudiantes, pero yo prefería compartir piso. Al final, una amiga me pidió que la ayudara con su mudanza y así conocí a Nuria. Me habría gustado que alguien me avisara antes, pero ahora estoy muy contento.'}]}
],
placement:[
 {t:'mc',q:'Mi jefe me pidió que ___ antes.',opts:['llegara','llegue','llegaba'],a:0},
 {t:'mc',q:'Me sorprendió que nadie lo ___.',opts:['supiera','sabe','sepa'],a:0},
 {t:'gap',q:'Mis padres querían que ___ (yo, ser) médico.',a:['fuera']},
 {t:'gap',q:'No creía que ___ (vosotros, venir).',a:['vinierais']},
 {t:'mc',q:'Te pido que me ___.',opts:['ayudes','ayudaras','ayudas'],a:0},
 {t:'gap',q:'Era necesario que todos ___ (firmar) el contrato.',a:['firmaran']}],
resumen:`<h3>Zeitenfolge</h3><table><tr><th>Hauptsatz</th><th>Nebensatz</th></tr><tr><td>Präsens, Futur, Imperativ</td><td class="es-t">Quiero que vengas.</td></tr><tr><td>Vergangenheit, Konditional</td><td class="es-t">Quería que vinieras.</td></tr></table>
<p class="es-t">me pidió que + Imperf. Subj. · me sorprendió que … · era normal que … · no creía que … · buscaba a alguien que …</p>
<h3>Höfliche Kritik</h3><p class="es-t">Me habría gustado que … · Habría estado bien que …</p>`});

COURSE.units.push({id:'u26',n:'28',level:'B2',title:'Aunque cueste',sub:'Konzessiv (aunque + Ind./Subj., a pesar de, por mucho que) · Grund (como, ya que, puesto que) · Folge (así que, por lo tanto, de modo que) · Gesundheit & Lebensstil',
goals:['aunque + Indikativ (Tatsache) / + Subjuntivo (Möglichkeit oder egal)','a pesar de + Inf./Nomen, a pesar de que','por mucho que + Subj.','Grund: como (am Satzanfang), ya que, puesto que, debido a','Folge: así que, por lo tanto, de modo que, por eso','über gesunde Gewohnheiten diskutieren'],
situacion:{title:'Beim Physiotherapeuten',npc:'Álex',scene:'Du hast Rückenschmerzen vom vielen Sitzen. Álex, dein Physiotherapeut, will deine Gewohnheiten ändern – du hast für alles eine Ausrede.',role:'Du bist Álex, Physiotherapeut, motivierend und etwas streng. Ihr duzt euch. Frag Jonas nach seinen Gewohnheiten (¿Cuántas horas pasas sentado?), gib Ratschläge und reagiere auf Ausreden mit Konzessivsätzen (Aunque tengas poco tiempo, …; Por mucho que te cueste, …). Benutze auch como / ya que / así que.',goal:'Begründe deine Gewohnheiten mit como / ya que und reagiere auf Ratschläge mit aunque (+ Ind. oder Subj.) und a pesar de.'},
lessons:[
{id:'l1',title:'Obwohl … / Auch wenn …',desc:'aunque llueve · aunque llueva',steps:[
 {t:'info',title:'aunque: Indikativ oder Subjuntivo?',html:`<table><tr><th>Modus</th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td>Indikativ</td><td>„obwohl“ – Tatsache, neue Info</td><td class="es-t">Aunque <b>llueve</b>, salgo. (Es regnet, ich gehe trotzdem.)</td></tr>
 <tr><td>Subjuntivo</td><td>„auch wenn“ – vielleicht / egal</td><td class="es-t">Aunque <b>llueva</b>, saldré. (Ob es regnet oder nicht.)</td></tr>
 <tr><td>Subjuntivo</td><td>bekannte Tatsache, die mir egal ist</td><td class="es-t">Aunque <b>sea</b> tu jefe, no tiene razón.</td></tr></table>
 <div class="ex">Ähnlich: <span class="es-t">a pesar de + Inf./Nomen</span> · <span class="es-t">a pesar de que</span> (wie aunque) · <span class="es-t">por mucho que + Subj.</span>.</div>`},
 {t:'mc',q:'Aunque ___ cansado, fui al gimnasio. (Ich war wirklich müde.)',opts:['estaba','estuviera','esté'],a:0},
 {t:'mc',q:'Aunque mañana ___, iremos de excursión. (Wir wissen es noch nicht.)',opts:['llueva','llueve','lloverá'],a:0},
 {t:'mc',q:'A pesar ___ dolor, terminó la maratón.',opts:['del','de que','que'],a:0},
 {t:'gap',q:'Por mucho que ___ (tú, insistir), no voy a cambiar de opinión.',a:['insistas']},
 {t:'gap',q:'A pesar de ___ (dormir) ocho horas, estoy cansado.',a:['dormir']},
 {t:'order',es:'Aunque no me guste correr, lo hago por mi salud.',de:'Auch wenn ich nicht gern laufe, tue ich es für meine Gesundheit.'},
 {t:'tr',de:'Obwohl ich wenig Zeit habe, koche ich jeden Tag.',a:['Aunque tengo poco tiempo, cocino todos los días.','A pesar de que tengo poco tiempo, cocino todos los días.']}]},
{id:'l2',title:'Weil & deshalb',desc:'como · ya que · así que',steps:[
 {t:'info',title:'Grund und Folge – mehr als porque und por eso',html:`<table><tr><th>Grund</th><th>Position</th><th>Beispiel</th></tr>
 <tr><td class="es-t">como</td><td>immer am Satzanfang</td><td class="es-t">Como estaba enfermo, no fui.</td></tr>
 <tr><td class="es-t">ya que / puesto que</td><td>beides möglich, eher formell</td><td class="es-t">No fui, ya que estaba enfermo.</td></tr>
 <tr><td class="es-t">debido a + Nomen</td><td>formell</td><td class="es-t">Debido a la lluvia, se canceló el partido.</td></tr></table>
 <table><tr><th>Folge</th><th>Beispiel</th></tr>
 <tr><td class="es-t">así que</td><td class="es-t">Estaba cansado, así que me acosté.</td></tr>
 <tr><td class="es-t">por lo tanto / por consiguiente</td><td class="es-t">No hay datos; por lo tanto, no podemos decidir. (formell)</td></tr>
 <tr><td class="es-t">de modo que / de manera que</td><td class="es-t">Habló claro, de modo que todos lo entendieron.</td></tr></table>
 <div class="ojo"><b>como</b> = weil nur am Satzanfang. In der Mitte heißt es <i>wie</i>.</div>`},
 {t:'mc',q:'___ no tenía hambre, no cené.',opts:['Como','Porque','Así que'],a:0},
 {t:'mc',q:'Me duele la espalda, ___ voy al fisio.',opts:['así que','ya que','como'],a:0},
 {t:'mc',q:'___ la huelga, no hay metro hoy.',opts:['Debido a','Ya que','Como'],a:0},
 {t:'gap',q:'No puedo ir, ___ que tengo que trabajar. (formell: da)',a:['ya']},
 {t:'gap',q:'Hacía mucho calor, ___ que nos quedamos en casa.',a:['así']},
 {t:'match',q:'Grund oder Folge?',pairs:[['como','Grund'],['por lo tanto','Folge'],['ya que','Grund'],['de modo que','Folge'],['puesto que','Grund']]},
 {t:'tr',de:'Da ich nicht schlafen konnte, habe ich ein Buch gelesen.',a:['Como no podía dormir, leí un libro.','Como no podía dormir, he leído un libro.']}]},
{id:'l3',title:'Gesund leben',desc:'Wortschatz · Dialog',steps:[
 {t:'vocab',title:'Gesundheit & Lebensstil',items:[['llevar una vida sana','gesund leben','🥗'],['el sedentarismo','der Bewegungsmangel','🪑'],['hacer ejercicio','Sport treiben','🏃'],['estirar','dehnen','🧘'],['la postura','die Haltung','🧍'],['tener dolor de espalda','Rückenschmerzen haben','🤕'],['el estrés','der Stress','😫'],['desconectar','abschalten','📴'],['dormir a pierna suelta','tief und fest schlafen','😴'],['picar entre horas','zwischendurch naschen','🍫'],['la alimentación','die Ernährung','🍎'],['el/la fisioterapeuta','der/die Physiotherapeut/in','💆']]},
 {t:'dialog',place:'Consulta de fisioterapia',title:'Ausreden',scene:'Álex hat deinen Rücken untersucht.',lines:[
  {n:'Álex',es:'Tienes la espalda muy cargada. ¿Cuántas horas pasas sentado al día?',de:'Dein Rücken ist sehr verspannt. Wie viele Stunden sitzt du am Tag?'},
  {you:true,opts:[{es:'Unas diez. Como estoy escribiendo el TFM, no me levanto casi nunca.',ok:true},{es:'Unas diez. No me levanto casi nunca, como estoy escribiendo el TFM.',ok:false,why:'<b>como</b> (weil) steht am Satzanfang. In der Mitte: <i>ya que</i>.'}]},
  {n:'Álex',es:'Pues aunque tengas mucho trabajo, tienes que levantarte cada hora.',de:'Na ja, auch wenn du viel Arbeit hast, musst du jede Stunde aufstehen.'},
  {you:true,opts:[{es:'Vale, lo intentaré, aunque me cueste acordarme.',ok:true},{es:'Vale, lo intentaré, a pesar de que me cueste de acordarme.',ok:false,why:'<i>costar + Infinitiv</i> ohne <b>de</b>: <i>me cuesta acordarme</i>.'}]},
  {n:'Álex',es:'Ponte una alarma en el móvil; así no tienes excusa.',de:'Stell dir einen Wecker im Handy, dann hast du keine Ausrede.'},
  {you:true,opts:[{es:'De acuerdo. Y como no tengo tiempo para el gimnasio, iré andando a la uni.',ok:true},{es:'De acuerdo. Y ya que no tengo tiempo para el gimnasio, iré andando a la uni por lo tanto.',ok:false,why:'Doppelt gemoppelt: Grund (<i>ya que</i>) und Folge (<i>por lo tanto</i>) nicht im selben Satz.'}]}]},
 {t:'speak',es:'Aunque tenga mucho trabajo, voy a intentar desconectar los fines de semana.',de:'Auch wenn ich viel Arbeit habe, werde ich versuchen, an den Wochenenden abzuschalten.'}]},
{id:'l4',title:'Lesen: Sentados todo el día',desc:'Sachtext · Argumentieren',steps:[
 {t:'read',title:'Sentados todo el día',text:`Pasamos una media de nueve horas sentados al día: en la oficina, en el coche y, por la noche, en el sofá. Aunque muchos hacen deporte dos o tres veces por semana, eso no basta para {compensar|ausgleichen} el sedentarismo, según varios estudios recientes.

Como nuestro cuerpo no está hecho para estar quieto, aparecen dolores de espalda, problemas de circulación y cansancio. Por lo tanto, los expertos recomiendan pequeñas pausas: levantarse cada 45 minutos, subir por las escaleras o hacer reuniones de pie. Por mucho que nos cueste cambiar de hábitos, estos pequeños gestos tienen un gran efecto. A pesar de que algunas empresas ya ofrecen mesas regulables, todavía son una minoría. Así que, de momento, la responsabilidad es nuestra.`,de:`Wir sitzen im Durchschnitt neun Stunden am Tag: im Büro, im Auto und abends auf dem Sofa. Obwohl viele zwei- oder dreimal pro Woche Sport treiben, reicht das laut mehreren neueren Studien nicht aus, um den Bewegungsmangel auszugleichen.\n\nDa unser Körper nicht dafür gemacht ist, stillzusitzen, treten Rückenschmerzen, Kreislaufprobleme und Müdigkeit auf. Deshalb empfehlen Experten kleine Pausen: alle 45 Minuten aufstehen, die Treppe nehmen oder Besprechungen im Stehen abhalten. So schwer es uns auch fällt, Gewohnheiten zu ändern, diese kleinen Gesten haben eine große Wirkung. Obwohl einige Firmen schon höhenverstellbare Tische anbieten, sind sie noch eine Minderheit. Also liegt die Verantwortung vorerst bei uns.`},
 {t:'mc',q:'Según el texto, ¿basta con hacer deporte dos o tres veces por semana?',opts:['No, no compensa el sedentarismo.','Sí, es suficiente.','El texto no lo dice.'],a:0},
 {t:'mc',q:'„Por lo tanto“ im Text drückt aus …',opts:['eine Folge','einen Gegensatz','eine Bedingung'],a:0},
 {t:'gap',q:'Por mucho que nos ___ (costar) cambiar de hábitos, merece la pena.',a:['cueste']},
 {t:'free',task:'Schreib einen kurzen Meinungstext (6–8 Sätze): Sollten Firmen ihre Mitarbeiter zu mehr Bewegung verpflichten?',hint:'Aunque … · A pesar de … · Como … · ya que … · Por lo tanto … · Por mucho que …',focus:'Konzessiv-, Kausal- und Konsekutivkonnektoren',model:'Como pasamos tantas horas en el trabajo, las empresas tienen cierta responsabilidad. Sin embargo, no creo que deban obligar a nadie a hacer deporte. Aunque sea por nuestra salud, cada uno debe decidir. Lo que sí pueden hacer es facilitar el movimiento, ya que pequeños cambios tienen un gran efecto. Por ejemplo, podrían ofrecer mesas regulables o pausas activas. Por lo tanto, mi propuesta es motivar, no obligar. Por mucho que se intente, una obligación no cambia los hábitos.'}]}
],
placement:[
 {t:'mc',q:'Aunque mañana ___, iremos.',opts:['llueva','llovería','llovió'],a:0},
 {t:'mc',q:'___ estaba cansado, me acosté pronto.',opts:['Como','Así que','Aunque'],a:0},
 {t:'gap',q:'A pesar ___ que hacía frío, fuimos a la playa.',a:['de']},
 {t:'gap',q:'Por mucho que ___ (yo, estudiar), no lo entiendo.',a:['estudie']},
 {t:'mc',q:'No había metro, ___ fuimos en taxi.',opts:['así que','ya que','como'],a:0},
 {t:'mc',q:'„debido a“ bedeutet …',opts:['aufgrund','trotz','damit'],a:0}],
resumen:`<h3>Konzessiv</h3><p class="es-t">aunque + Ind. (obwohl, Tatsache) · aunque + Subj. (auch wenn, egal) · a pesar de + Inf./Nomen · a pesar de que · por mucho que + Subj.</p>
<h3>Grund</h3><p class="es-t">como (Satzanfang) · porque · ya que · puesto que · debido a</p>
<h3>Folge</h3><p class="es-t">así que · por eso · por lo tanto · por consiguiente · de modo que</p>`});

COURSE.units.push({id:'u27',n:'29',level:'B2',title:'Se dice que…',sub:'Passiv (ser + Partizip) · Zustand (estar + Partizip) · Passiv mit se · unpersönliches se · Nachrichten verstehen & wiedergeben',
goals:['ser + Partizip: Vorgangspassiv (fue construido)','estar + Partizip: Zustand (está cerrado)','pasiva refleja: se venden pisos, se construyó','unpersönliches se: se dice que, se vive bien','Nachrichten-Sprache: según, al parecer, se calcula que','Nachrichten verstehen und weitererzählen'],
situacion:{title:'Nachrichten beim Frühstück',npc:'Nuria',scene:'Samstagmorgen in der WG-Küche. Nuria liest auf dem Handy Nachrichten und will mit dir darüber reden.',role:'Du bist Nuria, Mitbewohnerin von Jonas, interessiert an Politik und Wissenschaft. Ihr duzt euch. Erzähl Jonas von Nachrichten (Se ha descubierto…, Según el periódico…, Al parecer…) und frag ihn, was er gelesen hat. Benutze Passiv (ser + Partizip) und se-Konstruktionen.',goal:'Gib eine Nachricht mit se + Verb, ser + Partizip und según / al parecer wieder und reagiere auf Nurias Nachrichten.'},
lessons:[
{id:'l1',title:'Wurde gebaut / ist geschlossen',desc:'fue construido · está cerrado',steps:[
 {t:'info',title:'ser + Partizip vs. estar + Partizip',html:`<table><tr><th></th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">ser + Partizip</td><td>Vorgang (wurde …)</td><td class="es-t">La Sagrada Familia <b>fue diseñada</b> por Gaudí.</td></tr>
 <tr><td class="es-t">estar + Partizip</td><td>Zustand (ist …)</td><td class="es-t">El museo <b>está cerrado</b> los lunes.</td></tr></table>
 <div class="ex">Das Partizip passt sich an: <span class="es-t">la casa fue construid<b>a</b>, los pisos fueron vendid<b>os</b></span>. Wer es getan hat: <b>por</b>.</div>
 <div class="ojo">Das ser-Passiv klingt im Spanischen formell (Nachrichten, Geschichte). Im Alltag nimmt man lieber <b>se</b> oder Aktiv.</div>`},
 {t:'mc',q:'El Park Güell ___ diseñado por Gaudí.',opts:['fue','estuvo','era'],a:0},
 {t:'mc',q:'Ya no puedes entrar: la puerta ___ cerrada.',opts:['está','es','fue'],a:0},
 {t:'gap',q:'Las fotos fueron ___ (hacer) por un turista.',a:['hechas']},
 {t:'gap',q:'El ladrón fue detenido ___ la policía.',a:['por']},
 {t:'gap',q:'Las ventanas ___ (estar) abiertas cuando llegamos.',a:['estaban']},
 {t:'tr',de:'Das Buch wurde 1605 geschrieben.',a:['El libro fue escrito en 1605.']}]},
{id:'l2',title:'Hier spricht man …',desc:'se vende · se dice que',steps:[
 {t:'info',title:'Passiv und Unpersönliches mit se',html:`<table><tr><th>Form</th><th>Beispiel</th><th>Deutsch</th></tr>
 <tr><td>Passiv mit se (Verb passt sich an)</td><td class="es-t">Se <b>vende</b> piso. · Se <b>venden</b> pisos.</td><td>Wohnung(en) zu verkaufen</td></tr>
 <tr><td></td><td class="es-t">Se construyeron tres hoteles.</td><td>Es wurden drei Hotels gebaut.</td></tr>
 <tr><td>unpersönlich (immer 3. Sg.)</td><td class="es-t">Se vive bien aquí. · Se dice que …</td><td>Man lebt gut hier. Man sagt, dass …</td></tr>
 <tr><td>bestimmte Person + a</td><td class="es-t">Se busca al responsable.</td><td>Der Verantwortliche wird gesucht.</td></tr></table>
 <div class="ex">Faustregel: Steht ein Plural-Ding dabei, kommt das Verb in den Plural (<i>se venden coches</i>). Sonst Singular.</div>`},
 {t:'mc',q:'En Cataluña ___ catalán y castellano.',opts:['se hablan','se habla','hablan se'],a:0},
 {t:'mc',q:'___ que va a llover todo el fin de semana.',opts:['Se dice','Se dicen','Es dicho'],a:0},
 {t:'gap',q:'Se ___ (alquilar) habitaciones para estudiantes.',a:['alquilan']},
 {t:'gap',q:'En España se ___ (cenar) muy tarde.',a:['cena']},
 {t:'gap',q:'El año pasado se ___ (vender) más bicis que coches. (Indefinido)',a:['vendieron']},
 {t:'order',es:'Se calcula que la obra estará terminada en 2030.',de:'Man schätzt, dass das Bauwerk 2030 fertig sein wird.'},
 {t:'tr',de:'Hier darf man nicht rauchen.',a:['Aquí no se puede fumar.','No se puede fumar aquí.']}]},
{id:'l3',title:'Nachrichtensprache',desc:'según · al parecer · se calcula',steps:[
 {t:'vocab',title:'Medien & Nachrichten',items:[['la noticia','die Nachricht','📰'],['el titular','die Schlagzeile','🗞️'],['el/la periodista','der/die Journalist/in','🎤'],['según','laut, nach','📌'],['al parecer','anscheinend','👀'],['se calcula que','man schätzt, dass','🔢'],['la fuente','die Quelle','🔗'],['el bulo / la noticia falsa','die Falschmeldung','🚫'],['investigar','untersuchen, forschen','🔬'],['el descubrimiento','die Entdeckung','💡'],['publicar','veröffentlichen','📤'],['la huelga','der Streik','✊']]},
 {t:'info',title:'Distanziert berichten',html:`<p class="es-t">Según el periódico, … · Al parecer, … · Se calcula que … · Fuentes de la policía informan de que …</p>
 <div class="ex">In Nachrichten steht oft der <b>Konditional</b>, wenn etwas nicht bestätigt ist: <span class="es-t">El ministro habría dimitido.</span> = Der Minister soll zurückgetreten sein.</div>`},
 {t:'mc',q:'„Der Minister soll zurückgetreten sein.“ (unbestätigt)',opts:['El ministro habría dimitido.','El ministro ha dimitido.','El ministro dimitiera.'],a:0},
 {t:'mc',q:'„laut der Polizei“',opts:['según la policía','por la policía','a la policía'],a:0},
 {t:'dialog',place:'Cocina del piso',title:'Was gibt’s Neues?',scene:'Nuria scrollt durch die Nachrichten.',lines:[
  {n:'Nuria',es:'¡Mira esto! Se ha descubierto un barco romano en el puerto de Barcelona.',de:'Schau mal! Im Hafen von Barcelona wurde ein römisches Schiff entdeckt.'},
  {you:true,opts:[{es:'¡Qué interesante! ¿Y cuándo fue encontrado?',ok:true},{es:'¡Qué interesante! ¿Y cuándo estuvo encontrado?',ok:false,why:'Vorgang (wurde gefunden) → <b>ser</b>: <i>fue encontrado</i>.'}]},
  {n:'Nuria',es:'La semana pasada, durante unas obras. Según el periódico, tiene casi dos mil años.',de:'Letzte Woche, bei Bauarbeiten. Laut der Zeitung ist es fast zweitausend Jahre alt.'},
  {you:true,opts:[{es:'Al parecer, en Barcelona se encuentran restos romanos cada dos por tres.',ok:true},{es:'Al parecer, en Barcelona se encuentra restos romanos cada dos por tres.',ok:false,why:'Plural-Ding (<i>restos</i>) → Verb im Plural: <i>se encuentran</i>.'}]}]},
 {t:'listen',es:'Según los expertos, se calcula que el barco fue construido en el siglo primero.',de:'Laut Experten wird geschätzt, dass das Schiff im ersten Jahrhundert gebaut wurde.'}]},
{id:'l4',title:'Lesen: Una noticia',desc:'Zeitungsmeldung · eigene Meldung',steps:[
 {t:'read',title:'Barcelona prohibirá los cruceros en el centro',text:`El Ayuntamiento de Barcelona anunció ayer que, a partir de 2027, no se permitirá que los grandes cruceros {atraquen|anlegen} en la terminal más cercana al centro. Según fuentes municipales, la medida fue aprobada después de meses de {quejas|Beschwerden} vecinales.

Se calcula que cada año llegan a la ciudad más de tres millones de pasajeros de crucero, que en muchos casos solo pasan unas horas en la ciudad. Al parecer, las terminales serán trasladadas a una zona más alejada del puerto. Las navieras, por su parte, han criticado la decisión, que consideran «precipitada». Mientras tanto, en el barrio del Gòtic se respira cierto {alivio|Erleichterung}: «Por fin se escucha a los vecinos», comenta una comerciante.`,de:`Das Rathaus von Barcelona kündigte gestern an, dass ab 2027 große Kreuzfahrtschiffe nicht mehr am Terminal anlegen dürfen, das dem Zentrum am nächsten liegt. Laut städtischen Quellen wurde die Maßnahme nach monatelangen Beschwerden der Anwohner beschlossen.\n\nMan schätzt, dass jedes Jahr mehr als drei Millionen Kreuzfahrtpassagiere in die Stadt kommen, die oft nur ein paar Stunden bleiben. Anscheinend werden die Terminals in einen weiter entfernten Bereich des Hafens verlegt. Die Reedereien haben die Entscheidung ihrerseits kritisiert und halten sie für „übereilt“. Unterdessen herrscht im Gòtic eine gewisse Erleichterung: „Endlich hört man auf die Anwohner“, sagt eine Ladenbesitzerin.`},
 {t:'mc',q:'¿Por qué fue aprobada la medida?',opts:['por las quejas de los vecinos','por un accidente','porque lo pidieron las navieras'],a:0},
 {t:'mc',q:'„Las terminales serán trasladadas“ ist …',opts:['Passiv im Futur','Passiv mit se','Zustand mit estar'],a:0},
 {t:'gap',q:'Se ___ (calcular) que llegan tres millones de pasajeros.',a:['calcula']},
 {t:'free',task:'Schreib eine kurze Nachrichtenmeldung (5–7 Sätze) über etwas, das in deiner Stadt oder Uni passiert ist (echt oder erfunden).',hint:'Según … · Al parecer … · Se calcula que … · fue + Partizip · se ha + Partizip',focus:'Passiv mit ser und se, Nachrichtensprache',model:'La Universidad de Mannheim anunció ayer que se abrirá una nueva biblioteca en 2027. Según la rectora, el edificio fue diseñado por un equipo de arquitectos jóvenes. Se calcula que tendrá espacio para 800 estudiantes. Al parecer, también se instalarán paneles solares en el tejado. Los estudiantes han recibido la noticia con alegría, ya que la biblioteca actual siempre está llena.'}]}
],
placement:[
 {t:'mc',q:'La catedral ___ construida en el siglo XIV.',opts:['fue','estuvo','era'],a:0},
 {t:'mc',q:'Se ___ coches de segunda mano.',opts:['venden','vende','vendido'],a:0},
 {t:'gap',q:'Cuando llegamos, la tienda ya ___ (estar) cerrada.',a:['estaba']},
 {t:'gap',q:'En verano se ___ (comer) mucho gazpacho.',a:['come']},
 {t:'mc',q:'„anscheinend“',opts:['al parecer','según','sin embargo'],a:0},
 {t:'gap',q:'La novela fue ___ (escribir) por una autora chilena.',a:['escrita']}],
resumen:`<h3>Passiv</h3><p class="es-t">ser + Partizip (Vorgang): fue construida por … · estar + Partizip (Zustand): está cerrado</p>
<h3>se</h3><p class="es-t">Se vende piso. / Se venden pisos. (Passiv) · Se vive bien. Se dice que … (unpersönlich)</p>
<h3>Nachrichten</h3><p class="es-t">según · al parecer · se calcula que · habría dimitido (unbestätigt)</p>`});
