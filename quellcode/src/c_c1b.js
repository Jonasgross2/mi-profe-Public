/* ===== C1 Teil 2: Unidad 37–39 – eigene Inhalte nach dem Plan Curricular (Instituto Cervantes) ===== */

COURSE.units.push({id:'u35',n:'37',level:'C1b',title:'Lo que importa',sub:'Hervorheben: Spaltsätze (Fue Laia quien…, Es aquí donde…) · lo + Adjektiv (lo bueno, lo difícil) · lo + Adj. + que (lo caro que es) · Satzstellung & Dislokation · Kunst & Kultur',
goals:['Spaltsätze: ser … quien / el que / donde / cuando / como','Lo que más me gusta es … / Lo que pasa es que …','lo + Adjektiv: lo bueno, lo peor, lo importante','lo + Adj./Adv. + que: No sabes lo cansado que estoy','Dislokation: El libro, ya lo he leído','über Kunst, Museen und Kultur sprechen'],
situacion:{title:'Im Museum',npc:'Marta',scene:'Du besuchst mit Marta, die Kunstgeschichte studiert, das MNAC auf dem Montjuïc. Sie will wissen, was dich an den Werken beeindruckt.',role:'Du bist Marta, Kunstgeschichtsstudentin, begeistert und gesprächig. Ihr duzt euch. Erklär Jonas Werke (Fue en el siglo XII cuando…, Lo interesante es que…), frag ihn, was ihm am meisten gefällt und warum, und widersprich ihm gelegentlich. Benutze Spaltsätze und lo + Adjektiv.',goal:'Sag mit Spaltsätzen und lo + Adjektiv, was dich beeindruckt (Lo que más me impresiona es…, Es la luz lo que…, No sabía lo antiguo que era…).'},
lessons:[
{id:'l1',title:'Genau das!',desc:'Fue Laia quien … · Es aquí donde …',steps:[
 {t:'info',title:'Spaltsätze: ein Element betonen',html:`<p>Mit <b>ser + Element + Relativwort</b> rückst du einen Teil des Satzes ins Rampenlicht:</p>
 <table><tr><th>neutral</th><th>betont</th></tr>
 <tr><td class="es-t">Laia organizó la fiesta.</td><td class="es-t">Fue Laia <b>quien</b> organizó la fiesta.</td></tr>
 <tr><td class="es-t">Nos conocimos aquí.</td><td class="es-t">Es aquí <b>donde</b> nos conocimos.</td></tr>
 <tr><td class="es-t">Me di cuenta en 2020.</td><td class="es-t">Fue en 2020 <b>cuando</b> me di cuenta.</td></tr>
 <tr><td class="es-t">Lo hice así.</td><td class="es-t">Fue así <b>como</b> lo hice.</td></tr>
 <tr><td class="es-t">Me preocupa el precio.</td><td class="es-t">Lo que me preocupa <b>es</b> el precio.</td></tr></table>
 <div class="ex">Personen: <i>quien</i> oder <i>el/la que</i>. Ort: <i>donde</i>. Zeit: <i>cuando</i>. Art: <i>como</i>. Sachen: <i>lo que</i>.</div>`},
 {t:'mc',q:'Fue Picasso ___ pintó el Guernica.',opts:['quien','donde','lo que'],a:0},
 {t:'mc',q:'Es en Barcelona ___ vivió Picasso de joven.',opts:['donde','quien','como'],a:0},
 {t:'mc',q:'___ más me sorprendió fue el silencio.',opts:['Lo que','El que','Quien'],a:0},
 {t:'gap',q:'Fue en 1992 ___ se celebraron los Juegos Olímpicos en Barcelona.',a:['cuando']},
 {t:'gap',q:'Fue así ___ aprendí a cocinar: mirando a mi abuela.',a:['como']},
 {t:'order',es:'Lo que pasa es que no tengo tiempo.',de:'Die Sache ist die, dass ich keine Zeit habe.'},
 {t:'tr',de:'Es war Nuria, die mir die Wohnung gezeigt hat.',a:['Fue Nuria quien me enseñó el piso.','Fue Nuria la que me enseñó el piso.']}]},
{id:'l2',title:'Das Gute daran …',desc:'lo bueno · lo caro que es',steps:[
 {t:'info',title:'lo + Adjektiv',html:`<table><tr><th>Form</th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">lo + Adj.</td><td>das …e (daran)</td><td class="es-t"><b>Lo bueno</b> es que es gratis. · <b>Lo peor</b> fue la espera.</td></tr>
 <tr><td class="es-t">lo + Adj./Adv. + que</td><td>wie … (Ausrufe, Staunen)</td><td class="es-t">No sabes <b>lo cansada que</b> estoy. · ¡Mira <b>lo bien que</b> canta!</td></tr>
 <tr><td class="es-t">lo de + Nomen/Inf.</td><td>die Sache mit …</td><td class="es-t"><b>Lo de</b> ayer fue un error.</td></tr></table>
 <div class="ojo">Bei <i>lo + Adj. + que</i> passt sich das Adjektiv an: <span class="es-t">lo cansad<b>a</b> que estoy</span> (ich, weiblich) · <span class="es-t">lo car<b>os</b> que son</span>.</div>`},
 {t:'mc',q:'___ de vivir en Barcelona es el mar.',opts:['Lo mejor','El mejor','La mejor'],a:0},
 {t:'mc',q:'No te imaginas lo ___ que son estas entradas.',opts:['caras','caro','cara'],a:0},
 {t:'gap',q:'Lo ___ (malo) es que cierra a las seis.',a:['malo']},
 {t:'gap',q:'¡Mira lo ___ (rápido) que corre ese niño!',a:['rápido']},
 {t:'gap',q:'___ de mañana sigue en pie, ¿no? (die Sache mit morgen)',a:['Lo']},
 {t:'tr',de:'Du weißt nicht, wie schön diese Stadt ist.',a:['No sabes lo bonita que es esta ciudad.']},
 {t:'listen',es:'Lo increíble es lo bien conservados que están los frescos después de ochocientos años.',de:'Das Unglaubliche ist, wie gut erhalten die Fresken nach achthundert Jahren sind.'}]},
{id:'l3',title:'Satzstellung & Kunst',desc:'Dislokation · Museumsbesuch',steps:[
 {t:'info',title:'Thema nach vorn: Dislokation',html:`<p>Im gesprochenen Spanisch stellt man das Thema oft nach vorn und wiederholt es mit einem Pronomen:</p>
 <p class="es-t">El libro, ya <b>lo</b> he leído. · A tu hermana, no <b>la</b> conozco. · De eso, mejor no hablamos.</p>
 <div class="ex">So sagst du: „Was X betrifft …“. Das Pronomen (<i>lo, la, le …</i>) ist dann Pflicht.</div>`},
 {t:'mc',q:'Esa película, ya ___ he visto.',opts:['la','lo','le'],a:0},
 {t:'mc',q:'A Marc, no ___ he dicho nada.',opts:['le','lo','la'],a:0},
 {t:'vocab',title:'Kunst & Kultur',items:[['la obra de arte','das Kunstwerk','🖼️'],['el cuadro','das Gemälde','🎨'],['la escultura','die Skulptur','🗿'],['el fresco','das Fresko','🏛️'],['la exposición','die Ausstellung','🖼️'],['el/la comisario/a','der/die Kurator/in','🧑‍🎨'],['el románico / el gótico','die Romanik / die Gotik','⛪'],['el modernismo','der (katalanische) Jugendstil','🌿'],['impresionar','beeindrucken','😮'],['conmover','berühren','🥲'],['la pincelada','der Pinselstrich','🖌️'],['vanguardista','avantgardistisch','✨']]},
 {t:'dialog',place:'Museu Nacional d’Art de Catalunya',title:'Vor dem Fresko',scene:'Marta führt dich in den Saal mit den romanischen Apsiden.',lines:[
  {n:'Marta',es:'Estas pinturas estaban en iglesias del Pirineo. Fue a principios del siglo XX cuando las trajeron aquí.',de:'Diese Malereien waren in Kirchen in den Pyrenäen. Anfang des 20. Jahrhunderts hat man sie hierher gebracht.'},
  {you:true,opts:[{es:'¡Impresionante! Lo que más me sorprende es lo vivos que son los colores.',ok:true},{es:'¡Impresionante! Lo que más me sorprende es lo vivo que son los colores.',ok:false,why:'Anpassung an <i>los colores</i>: <i>lo vivos que son</i>.'}]},
  {n:'Marta',es:'¿Verdad? ¿Y por qué crees que las trasladaron?',de:'Oder? Und warum, glaubst du, hat man sie umgezogen?'},
  {you:true,opts:[{es:'Supongo que fue por miedo a perderlas por lo que las trajeron aquí.',ok:true},{es:'Supongo que fue por miedo a perderlas quien las trajeron aquí.',ok:false,why:'Grund betonen: <i>Fue por … por lo que …</i> – <i>quien</i> ist nur für Personen.'}]},
  {n:'Marta',es:'Exacto. Muchas obras se estaban vendiendo al extranjero. El museo, de hecho, lo crearon en parte por eso.',de:'Genau. Viele Werke wurden ins Ausland verkauft. Das Museum hat man tatsächlich teilweise deshalb gegründet.'}]}]},
{id:'l4',title:'Lesen: Una ciudad modernista',desc:'Kulturtext · Kritik schreiben',steps:[
 {t:'read',title:'Gaudí y los demás',text:`Lo primero que hacen la mayoría de los turistas en Barcelona es visitar la Sagrada Familia. Lo que pocos saben es que el modernismo catalán no fue obra de un solo genio. Fue un movimiento entero el que transformó la ciudad entre 1888 y 1911, y fueron arquitectos como Domènech i Montaner o Puig i Cadafalch quienes dejaron algunas de sus joyas más impresionantes.

El Palau de la Música Catalana, por ejemplo, es probablemente el edificio donde mejor se aprecia lo que pretendía el modernismo: unir arquitectura, escultura, vidrio y cerámica en una sola obra. Quien entra por primera vez no se imagina lo luminosa que es la sala, gracias a una enorme {claraboya|Oberlicht} de cristal de colores.

Lo curioso es que durante décadas estos edificios se consideraron «de mal gusto». Fue a partir de los años setenta cuando se empezaron a valorar de nuevo. Hoy, en cambio, son precisamente ellos los que atraen a millones de visitantes. Lo que antes se despreciaba se ha convertido en la imagen de la ciudad.`,de:`Das Erste, was die meisten Touristen in Barcelona tun, ist die Sagrada Familia zu besuchen. Was nur wenige wissen: Der katalanische Modernisme war nicht das Werk eines einzelnen Genies. Es war eine ganze Bewegung, die die Stadt zwischen 1888 und 1911 verwandelte, und es waren Architekten wie Domènech i Montaner oder Puig i Cadafalch, die einige ihrer beeindruckendsten Juwelen hinterließen.\n\nDer Palau de la Música Catalana zum Beispiel ist wohl das Gebäude, in dem man am besten sieht, was der Modernisme wollte: Architektur, Skulptur, Glas und Keramik in einem einzigen Werk vereinen. Wer zum ersten Mal hineingeht, ahnt nicht, wie hell der Saal ist – dank eines riesigen Oberlichts aus farbigem Glas.\n\nKurios ist, dass diese Gebäude jahrzehntelang als „geschmacklos“ galten. Erst ab den Siebzigerjahren begann man, sie wieder zu schätzen. Heute dagegen sind gerade sie es, die Millionen Besucher anziehen. Was früher verachtet wurde, ist zum Aushängeschild der Stadt geworden.`},
 {t:'mc',q:'Según el texto, ¿quién transformó Barcelona?',opts:['todo un movimiento de arquitectos y artistas','solo Gaudí','los turistas'],a:0},
 {t:'mc',q:'¿Cuándo se empezaron a valorar de nuevo estos edificios?',opts:['a partir de los años setenta','en 1911','en el siglo XXI'],a:0},
 {t:'gap',q:'Quien entra no se imagina lo ___ (luminoso) que es la sala.',a:['luminosa']},
 {t:'free',task:'Schreib eine kurze Kritik (7–9 Sätze) über ein Museum, eine Ausstellung, ein Konzert oder einen Film, den du gesehen hast. Benutze Hervorhebungen.',hint:'Lo que más me impresionó fue … · Fue … quien / donde / cuando … · Lo bueno / Lo malo es que … · No te imaginas lo … que …',focus:'Spaltsätze, lo + Adjektiv, lo + Adj. + que',model:'El fin de semana pasado fui al Palau de la Música a un concierto de piano. Lo que más me impresionó no fue la música, sino la sala. No te imaginas lo luminosa que es, incluso de noche. Fue durante el segundo movimiento cuando me di cuenta de que había dejado de mirar al pianista para mirar el techo. Lo malo es que las butacas son bastante incómodas. Lo bueno, que la acústica es increíble. Fue mi amiga Marta quien me regaló la entrada, y se lo agradeceré siempre.'}]}
],
placement:[
 {t:'mc',q:'Fue Gaudí ___ diseñó la Casa Batlló.',opts:['quien','donde','lo que'],a:0},
 {t:'mc',q:'___ mejor del viaje fue la comida.',opts:['Lo','El','La'],a:0},
 {t:'gap',q:'No sabes lo ___ (cansado) que estamos. (wir, weiblich)',a:['cansadas']},
 {t:'gap',q:'Es aquí ___ nos conocimos.',a:['donde']},
 {t:'mc',q:'Las llaves, ya ___ he encontrado.',opts:['las','lo','les'],a:0},
 {t:'gap',q:'Lo que me preocupa ___ el precio.',a:['es']}],
resumen:`<h3>Spaltsätze</h3><p class="es-t">Fue Laia quien … · Es aquí donde … · Fue en 2020 cuando … · Fue así como … · Lo que me preocupa es …</p>
<h3>lo</h3><p class="es-t">lo bueno / lo peor / lo importante · No sabes lo cansada que estoy. · lo de ayer</p>
<h3>Dislokation</h3><p class="es-t">El libro, ya lo he leído. · A Marc, no le he dicho nada.</p>`});

COURSE.units.push({id:'u36',n:'38',level:'C1b',title:'Por muy difícil que sea',sub:'Konzessiv für Fortgeschrittene (por muy … que, aun + Gerundium, y eso que, si bien) · Folge (tan … que, de ahí que + Subj., con lo que) · Wissenschaft & Ethik',
goals:['por muy + Adj./Adv. + que + Subj.','por más / mucho que + Subj.','aun + Gerundium, aun así','y eso que (+ Ind.: obwohl doch)','si bien (formell: wenn auch)','Folge: tan/tanto … que, de ahí que + Subj., con lo que, de tal modo que'],
situacion:{title:'Diskussion über KI und Arbeit',npc:'Dr. Puig',scene:'Bei einem Abendvortrag der UPC über künstliche Intelligenz und Arbeitswelt sitzt du neben Dr. Puig, einer Forscherin. In der Pause diskutiert ihr.',role:'Du bist Dr. Puig, Informatikerin an der UPC, freundlich und skeptisch gegenüber Technik-Hype. Ihr wechselt nach kurzer Zeit zum tú. Diskutiere, ob KI Jobs vernichtet oder schafft. Bring Gegenargumente mit Konzessiv-Konstruktionen (Por muy avanzada que sea…, Si bien es cierto que…, y eso que…) und zieh Schlüsse (de ahí que…).',goal:'Argumentiere mit por muy … que, si bien, aun así und ziehe Schlussfolgerungen mit de ahí que + Subj. oder tan … que.'},
lessons:[
{id:'l1',title:'So … auch immer',desc:'por muy … que · por más que',steps:[
 {t:'info',title:'Starke Konzessivsätze',html:`<table><tr><th>Struktur</th><th>Beispiel</th><th>Deutsch</th></tr>
 <tr><td class="es-t">por muy + Adj./Adv. + que + Subj.</td><td class="es-t">Por muy listo que <b>sea</b>, no lo sabe todo.</td><td>So klug er auch ist, …</td></tr>
 <tr><td class="es-t">por más / mucho que + Subj.</td><td class="es-t">Por más que <b>lo intente</b>, no me sale.</td><td>So sehr ich es auch versuche, …</td></tr>
 <tr><td class="es-t">por mucho/a/os/as + Nomen + que</td><td class="es-t">Por mucho dinero que <b>tenga</b>, no es feliz.</td><td>So viel Geld er auch hat, …</td></tr></table>
 <div class="ex">Mit Indikativ, wenn es um echte, wiederholte Erfahrung geht: <span class="es-t">Por más que lo intento, no me sale.</span> (Ich versuche es tatsächlich ständig.)</div>`},
 {t:'mc',q:'Por muy caro que ___, lo voy a comprar.',opts:['sea','es','será'],a:0},
 {t:'mc',q:'Por mucha prisa que ___, no llegaremos a tiempo.',opts:['nos demos','nos damos','darnos'],a:0},
 {t:'gap',q:'Por muy ___ (temprano) que salgas, habrá tráfico.',a:['temprano']},
 {t:'gap',q:'Por más que ___ (tú, insistir), no cambiaré de opinión.',a:['insistas']},
 {t:'gap',q:'Por muy ___ (inteligente) que sean las máquinas, necesitan supervisión.',a:['inteligentes']},
 {t:'tr',de:'So schwer es auch sein mag, wir schaffen es.',a:['Por muy difícil que sea, lo conseguiremos.','Por difícil que sea, lo conseguiremos.']}]},
{id:'l2',title:'Obwohl doch …',desc:'aun · y eso que · si bien',steps:[
 {t:'info',title:'Weitere Konzessiv-Mittel',html:`<table><tr><th>Mittel</th><th>Register</th><th>Beispiel</th></tr>
 <tr><td class="es-t">aun + Gerundium</td><td>neutral</td><td class="es-t">Aun estando cansado, siguió trabajando.</td></tr>
 <tr><td class="es-t">aun así</td><td>neutral</td><td class="es-t">Era caro; aun así, lo compré.</td></tr>
 <tr><td class="es-t">y eso que + Ind.</td><td>umgangssprachlich, nachgestellt</td><td class="es-t">Suspendió, y eso que estudió mucho.</td></tr>
 <tr><td class="es-t">si bien + Ind.</td><td>formell</td><td class="es-t">Si bien el estudio es interesante, tiene limitaciones.</td></tr>
 <tr><td class="es-t">pese a (que)</td><td>formell, = a pesar de</td><td class="es-t">Pese a la lluvia, el acto se celebró.</td></tr></table>`},
 {t:'mc',q:'Llegó tarde, ___ salió una hora antes.',opts:['y eso que','si bien','aun así'],a:0},
 {t:'mc',q:'Formell: „Wenn auch die Ergebnisse positiv sind, …“',opts:['Si bien los resultados son positivos, …','Y eso que los resultados son positivos, …','Por muy positivos los resultados, …'],a:0},
 {t:'gap',q:'Aun ___ (saber) la respuesta, no dijo nada. (Gerundium)',a:['sabiendo']},
 {t:'gap',q:'___ a las críticas, el proyecto siguió adelante. (formell: trotz)',a:['Pese']},
 {t:'vocab',title:'Wissenschaft & Technik',items:[['la investigación','die Forschung','🔬'],['el/la investigador/a','der/die Forscher/in','🧑‍🔬'],['el avance','der Fortschritt','📈'],['los datos','die Daten','📊'],['el algoritmo','der Algorithmus','🧮'],['automatizar','automatisieren','🤖'],['el puesto de trabajo','der Arbeitsplatz','💼'],['la ética','die Ethik','⚖️'],['el sesgo','die Verzerrung, der Bias','🎯'],['la privacidad','die Privatsphäre','🔒'],['regular','regulieren','📜'],['a costa de','auf Kosten von','💸']]},
 {t:'tr',de:'Er hat die Prüfung bestanden, obwohl er doch kaum gelernt hat.',a:['Aprobó el examen, y eso que apenas estudió.','Aprobó el examen, y eso que casi no estudió.']}]},
{id:'l3',title:'So …, dass … / Daher …',desc:'tan … que · de ahí que · con lo que',steps:[
 {t:'info',title:'Folgen ausdrücken',html:`<table><tr><th>Struktur</th><th>Modus</th><th>Beispiel</th></tr>
 <tr><td class="es-t">tan + Adj. + que / tanto/a + Nomen + que</td><td>Ind.</td><td class="es-t">Estaba tan cansado que me dormí en el metro.</td></tr>
 <tr><td class="es-t">de tal modo / manera que</td><td>Ind.</td><td class="es-t">Lo explicó de tal manera que todos lo entendieron.</td></tr>
 <tr><td class="es-t">de ahí que</td><td><b>Subj.</b></td><td class="es-t">No hay datos fiables; de ahí que el debate <b>sea</b> tan difícil.</td></tr>
 <tr><td class="es-t">con lo que / por lo que</td><td>Ind.</td><td class="es-t">Perdió el tren, con lo que llegó tarde.</td></tr></table>
 <div class="ex"><i>de ahí que</i> („daher“) steht – überraschend – mit <b>Subjuntivo</b>, weil die Ursache schon bekannt ist und nur noch bewertet wird.</div>`},
 {t:'mc',q:'Los datos no son claros; de ahí que los expertos no se ___.',opts:['pongan de acuerdo','ponen de acuerdo','pondrán de acuerdo'],a:0},
 {t:'mc',q:'Había ___ gente que no pudimos entrar.',opts:['tanta','tan','tanto'],a:0},
 {t:'gap',q:'Hablaba tan ___ (rápido) que nadie le entendía.',a:['rápido']},
 {t:'gap',q:'El algoritmo tiene un sesgo; de ahí que ___ (discriminar) a algunos candidatos.',a:['discrimine']},
 {t:'dialog',place:'Pausa de una conferencia en la UPC',title:'KI und Arbeit',scene:'Dr. Puig nimmt sich einen Kaffee.',lines:[
  {n:'Dr. Puig',es:'Dicen que la IA va a destruir millones de empleos. ¿Tú qué crees?',de:'Man sagt, die KI wird Millionen Jobs vernichten. Was glaubst du?'},
  {you:true,opts:[{es:'Si bien es cierto que muchas tareas se automatizarán, también surgirán trabajos nuevos.',ok:true},{es:'Y eso que es cierto que muchas tareas se automatizarán, también surgirán trabajos nuevos.',ok:false,why:'<i>y eso que</i> steht nachgestellt; am Satzanfang formell: <i>si bien</i>.'}]},
  {n:'Dr. Puig',es:'Ya, pero por muy optimistas que seamos, no todo el mundo podrá reciclarse.',de:'Schon, aber so optimistisch wir auch sein mögen, nicht jeder wird sich umschulen können.'},
  {you:true,opts:[{es:'Tienes razón; de ahí que la formación sea tan importante.',ok:true},{es:'Tienes razón; de ahí que la formación es tan importante.',ok:false,why:'<i>de ahí que</i> → Subjuntivo: <i>sea</i>.'}]},
  {n:'Dr. Puig',es:'Exacto. Y aun siendo una investigadora del tema, a mí también me da un poco de miedo.',de:'Genau. Und obwohl ich zu dem Thema forsche, macht es mir auch ein bisschen Angst.'}]}]},
{id:'l4',title:'Lesen: Progreso y precaución',desc:'Essay · Stellungnahme',steps:[
 {t:'read',title:'¿Progreso a cualquier precio?',text:`Pocas tecnologías han avanzado tan rápido como la inteligencia artificial. En apenas unos años, los sistemas han pasado de reconocer imágenes a redactar textos, diagnosticar enfermedades o componer música. Si bien estos avances abren posibilidades enormes, también plantean preguntas que todavía no sabemos responder.

Por muy precisos que sean los algoritmos, aprenden de datos creados por personas, con todos nuestros prejuicios. De ahí que algunos sistemas de selección de personal hayan discriminado a mujeres o a candidatos de ciertos barrios sin que nadie lo programara de forma consciente. Y eso que sus creadores pretendían precisamente lo contrario: decisiones más objetivas.

Aun reconociendo estos riesgos, sería un error frenar la investigación. Lo que hace falta es una regulación tan clara que las empresas no puedan esconderse detrás de la «caja negra» de sus algoritmos. Por mucho que nos fascine la tecnología, las decisiones que afectan a personas deberían seguir teniendo, en último término, un responsable humano.`,de:`Nur wenige Technologien haben sich so schnell entwickelt wie die künstliche Intelligenz. In kaum ein paar Jahren sind die Systeme vom Erkennen von Bildern dazu übergegangen, Texte zu verfassen, Krankheiten zu diagnostizieren oder Musik zu komponieren. Wenn diese Fortschritte auch enorme Möglichkeiten eröffnen, werfen sie doch Fragen auf, die wir noch nicht beantworten können.\n\nSo präzise die Algorithmen auch sein mögen, sie lernen aus Daten, die von Menschen geschaffen wurden – mit all unseren Vorurteilen. Daher haben manche Personalauswahlsysteme Frauen oder Bewerber aus bestimmten Vierteln diskriminiert, ohne dass jemand das bewusst programmiert hätte. Und das, obwohl ihre Entwickler genau das Gegenteil wollten: objektivere Entscheidungen.\n\nAuch wenn man diese Risiken anerkennt, wäre es ein Fehler, die Forschung zu bremsen. Was es braucht, ist eine so klare Regulierung, dass sich Firmen nicht hinter der „Blackbox“ ihrer Algorithmen verstecken können. So sehr uns die Technik auch fasziniert: Entscheidungen, die Menschen betreffen, sollten letztlich weiterhin einen menschlichen Verantwortlichen haben.`},
 {t:'mc',q:'¿Por qué discriminan algunos algoritmos?',opts:['porque aprenden de datos con prejuicios humanos','porque sus creadores lo programaron así a propósito','porque no tienen suficientes datos'],a:0},
 {t:'mc',q:'¿Qué propone el autor?',opts:['una regulación clara, no frenar la investigación','prohibir la IA','dejar que las empresas decidan'],a:0},
 {t:'gap',q:'Por muy precisos que ___ (ser) los algoritmos, aprenden de datos humanos.',a:['sean']},
 {t:'free',task:'Nimm Stellung (8–10 Sätze): ¿Debería usarse la IA para seleccionar candidatos en las empresas?',hint:'Si bien … · Por muy … que … · Aun + Gerundium … · de ahí que + Subj. · tan … que … · y eso que …',focus:'Konzessiv- und Konsekutivstrukturen auf C1-Niveau',model:'La inteligencia artificial puede ahorrar mucho tiempo en los procesos de selección. Si bien es cierto que revisa cientos de currículos en segundos, no siempre entiende el contexto de cada persona. Por muy objetivo que parezca un algoritmo, reproduce los prejuicios de los datos con los que ha aprendido. De ahí que haya habido casos de discriminación. Aun así, no creo que haya que prohibirla. Sería útil para hacer una primera selección, siempre que una persona revise las decisiones finales. Además, las empresas deberían explicar con tanta claridad cómo funciona el sistema que cualquier candidato pudiera entenderlo.'}]}
],
placement:[
 {t:'mc',q:'Por muy difícil que ___, lo intentaré.',opts:['sea','es','será'],a:0},
 {t:'mc',q:'No hay datos; de ahí que no ___ conclusiones claras.',opts:['haya','hay','habrá'],a:0},
 {t:'gap',q:'Aun ___ (estar) enfermo, fue a trabajar. (Gerundium)',a:['estando']},
 {t:'mc',q:'Suspendió, ___ estudió muchísimo.',opts:['y eso que','de ahí que','por muy'],a:0},
 {t:'gap',q:'Había ___ ruido que no podía dormir.',a:['tanto']},
 {t:'mc',q:'Formell: „trotz der Kritik“',opts:['pese a las críticas','y eso que las críticas','con lo que las críticas'],a:0}],
resumen:`<h3>Konzessiv</h3><p class="es-t">por muy + Adj. + que + Subj. · por más / mucho que · aun + Gerundium · aun así · y eso que + Ind. · si bien (formell) · pese a (que)</p>
<h3>Folge</h3><p class="es-t">tan / tanto … que + Ind. · de tal modo que · de ahí que + Subj. · con lo que / por lo que</p>`});

COURSE.units.push({id:'u37',n:'39',level:'C1b',title:'Escribir bien',sub:'Essay & formelle Textsorten · Konnektoren für Fortgeschrittene (ahora bien, dicho esto, en lo que respecta a) · Nominalisierung · Gerundium richtig benutzen · C1 abschließen',
goals:['Konnektoren: ahora bien, dicho esto, a raíz de, en lo que respecta a, cabe señalar','Nominalisierung: aumentar → el aumento','Gerundium: richtig (gleichzeitig) vs. falsch (Folge, Attribut)','Zeichensetzung: Komma vor pero, nach Konnektoren','Aufbau eines Essays: Einleitung, These, Argumente, Schluss','C1-Wiederholung'],
situacion:{title:'Feedback zur Hausarbeit',npc:'Profesora Vidal',scene:'Du hast einen Essay für das Seminar „Tecnología y sociedad“ geschrieben. Profesora Vidal bespricht ihn mit dir in der Sprechstunde.',role:'Du bist Profesora Vidal, Dozentin, wohlwollend, aber genau. Ihr siezt euch. Gib Jonas Feedback zu seinem Essay (estructura, conectores, registro, gerundios mal usados), frag nach seiner These und lass ihn einzelne Sätze verbessern. Benutze formelle Konnektoren.',goal:'Erkläre deine These, reagiere auf Kritik und verbessere Sätze mit formellen Konnektoren (ahora bien, dicho esto, en lo que respecta a) und Nominalisierungen.'},
lessons:[
{id:'l1',title:'Konnektoren für Texte',desc:'ahora bien · dicho esto · a raíz de',steps:[
 {t:'info',title:'Konnektoren auf C1-Niveau',html:`<table><tr><th>Funktion</th><th>Konnektoren</th></tr>
 <tr><td>Thema einführen</td><td class="es-t">en lo que respecta a · en cuanto a · por lo que se refiere a</td></tr>
 <tr><td>Einschränken</td><td class="es-t">ahora bien · no obstante · con todo · dicho esto</td></tr>
 <tr><td>Ursache</td><td class="es-t">a raíz de · dado que · habida cuenta de que</td></tr>
 <tr><td>Hervorheben</td><td class="es-t">cabe señalar / destacar que · conviene subrayar que · es más</td></tr>
 <tr><td>Ergänzen</td><td class="es-t">asimismo · a su vez · de igual modo</td></tr>
 <tr><td>Schließen</td><td class="es-t">en suma · en definitiva · a modo de conclusión</td></tr></table>
 <div class="ex"><i>ahora bien</i> = „allerdings“ – leitet eine wichtige Einschränkung ein. <i>dicho esto</i> = „das vorausgeschickt“.</div>`},
 {t:'mc',q:'El proyecto es viable. ___, exigirá una gran inversión.',opts:['Ahora bien','Asimismo','En cuanto a'],a:0},
 {t:'mc',q:'___ la vivienda, los datos son preocupantes.',opts:['En lo que respecta a','Ahora bien','Es más'],a:0},
 {t:'mc',q:'___ la crisis de 2008, muchos jóvenes emigraron.',opts:['A raíz de','Asimismo','Dicho esto'],a:0},
 {t:'gap',q:'Cabe ___ que el estudio solo analizó a 200 personas. (hervorheben)',a:['señalar','destacar']},
 {t:'gap',q:'El gobierno subió los impuestos; ___ su vez, redujo el gasto. (gleichzeitig)',a:['a']},
 {t:'match',q:'Funktion zuordnen',pairs:[['ahora bien','Einschränkung'],['a raíz de','Ursache'],['asimismo','Ergänzung'],['en suma','Schluss'],['en cuanto a','Thema']]}]},
{id:'l2',title:'Nominalisieren',desc:'aumentar → el aumento',steps:[
 {t:'info',title:'Verben werden Nomen – typisch für formelle Texte',html:`<table><tr><th>Verb</th><th>Nomen</th></tr>
 <tr><td class="es-t">aumentar / disminuir</td><td class="es-t">el aumento / la disminución</td></tr>
 <tr><td class="es-t">crecer / desarrollar</td><td class="es-t">el crecimiento / el desarrollo</td></tr>
 <tr><td class="es-t">analizar / proponer</td><td class="es-t">el análisis / la propuesta</td></tr>
 <tr><td class="es-t">mejorar / reducir</td><td class="es-t">la mejora / la reducción</td></tr></table>
 <p class="es-t">Los precios aumentaron mucho, por eso la gente consume menos.<br>→ El fuerte aumento de los precios ha provocado una disminución del consumo.</p>
 <div class="ex">Nominalisierung macht Texte dichter und sachlicher – aber nicht übertreiben, sonst wird es schwer lesbar.</div>`},
 {t:'gap',q:'reducir → la ___',a:['reducción']},
 {t:'gap',q:'crecer → el ___',a:['crecimiento']},
 {t:'gap',q:'proponer → la ___',a:['propuesta']},
 {t:'mc',q:'Nominalisiert: „Wenn die Stadt den Verkehr reduziert, …“',opts:['La reducción del tráfico en la ciudad …','Reduciendo la ciudad el tráfico …','El reducir tráfico ciudad …'],a:0},
 {t:'tr',de:'Die Verbesserung der öffentlichen Verkehrsmittel ist dringend.',a:['La mejora del transporte público es urgente.']}]},
{id:'l3',title:'Gerundium & Zeichensetzung',desc:'häufige Fehler',steps:[
 {t:'info',title:'Gerundium: wann richtig, wann falsch?',html:`<table><tr><th>richtig</th><th>falsch</th></tr>
 <tr><td>gleichzeitig: <span class="es-t">Entró <b>cantando</b>.</span></td><td>als Folge danach: <s>Se cayó, rompiéndose la pierna.</s> → <span class="es-t">Se cayó y se rompió la pierna.</span></td></tr>
 <tr><td>Art und Weise: <span class="es-t">Aprendí <b>leyendo</b>.</span></td><td>als Attribut: <s>una caja conteniendo libros</s> → <span class="es-t">una caja <b>que contiene</b> libros</span></td></tr>
 <tr><td>vorher/Grund: <span class="es-t"><b>Viendo</b> que llovía, nos quedamos.</span></td><td>Englischer Stil: <s>Adjuntando el informe…</s> → <span class="es-t">Le adjunto el informe.</span></td></tr></table>
 <div class="ojo">Zeichensetzung: Komma <b>vor</b> <i>pero, sino, aunque</i>; Komma <b>nach</b> satzeinleitenden Konnektoren (<i>Sin embargo, …</i>). Kein Komma zwischen Subjekt und Verb!</div>`},
 {t:'mc',q:'Welcher Satz ist korrekt?',opts:['Recibí un paquete que contenía libros.','Recibí un paquete conteniendo libros.','Recibí un paquete, conteniendo libros.'],a:0},
 {t:'mc',q:'Welcher Satz ist korrekt?',opts:['El ladrón huyó y fue detenido horas después.','El ladrón huyó, siendo detenido horas después.','El ladrón huyó siendo detenido después.'],a:0},
 {t:'mc',q:'Zeichensetzung:',opts:['Sin embargo, el estudio tiene limitaciones.','Sin embargo el estudio, tiene limitaciones.','Sin embargo el estudio tiene, limitaciones.'],a:0},
 {t:'dialog',place:'Despacho de la profesora Vidal',title:'Feedback zum Essay',scene:'Der Essay liegt mit roten Anmerkungen auf dem Tisch.',lines:[
  {n:'Prof. Vidal',es:'El contenido es bueno, pero hay algunos gerundios incorrectos. Por ejemplo: «Se aprobó la ley, entrando en vigor en enero».',de:'Der Inhalt ist gut, aber es gibt ein paar falsche Gerundien. Zum Beispiel: „Se aprobó la ley, entrando en vigor en enero.“'},
  {you:true,opts:[{es:'Entiendo. Sería mejor: «Se aprobó la ley, que entró en vigor en enero».',ok:true},{es:'Entiendo. Sería mejor: «Se aprobó la ley, entrada en vigor en enero».',ok:false,why:'Folge danach → Relativsatz oder <i>y</i>: <i>…, que entró en vigor</i>.'}]},
  {n:'Prof. Vidal',es:'Exacto. ¿Y cuál es exactamente su tesis?',de:'Genau. Und was genau ist Ihre These?'},
  {you:true,opts:[{es:'Que la tecnología no es neutral. Ahora bien, eso no significa que debamos rechazarla.',ok:true},{es:'Que la tecnología no es neutral. Asimismo, eso no significa que debamos rechazarla.',ok:false,why:'Einschränkung → <i>ahora bien</i>; <i>asimismo</i> ergänzt nur.'}]},
  {n:'Prof. Vidal',es:'Muy bien. En lo que respecta a la conclusión, le falta fuerza.',de:'Sehr gut. Was den Schluss betrifft, fehlt ihm Kraft.'},
  {you:true,opts:[{es:'La reformularé. En suma, lo que quiero decir es que la responsabilidad es nuestra.',ok:true},{es:'La reformularé. A raíz de, lo que quiero decir es que la responsabilidad es nuestra.',ok:false,why:'Fazit → <i>en suma / en definitiva</i>; <i>a raíz de</i> braucht ein Nomen (Ursache).'}]}]}]},
{id:'l4',title:'C1-Check: Ein Essay',desc:'Lesen · Essay schreiben',steps:[
 {t:'read',title:'Ensayo: El valor del aburrimiento',text:`Vivimos en la era de la distracción permanente. Basta con que pasen unos segundos sin estímulos para que saquemos el móvil del bolsillo. Ahora bien, ¿qué perdemos cuando eliminamos por completo el aburrimiento?

En lo que respecta a la creatividad, numerosos estudios coinciden en que los momentos de inactividad favorecen la aparición de ideas nuevas. Cabe señalar, por ejemplo, el experimento en el que un grupo de personas que había realizado una tarea monótona encontró después más soluciones originales que otro grupo que no se había aburrido. De ahí que algunos expertos hablen del aburrimiento como de un «motor» del pensamiento.

Dicho esto, no se trata de idealizarlo. Por mucho que favorezca la reflexión, un aburrimiento crónico puede derivar en apatía. Lo que parece razonable, en suma, es recuperar pequeños espacios de silencio: un trayecto sin auriculares, una espera sin pantalla. Quizá sea ahí donde, paradójicamente, empiecen las mejores ideas.`,de:`Wir leben im Zeitalter der permanenten Ablenkung. Es reicht, dass ein paar Sekunden ohne Reize vergehen, damit wir das Handy aus der Tasche ziehen. Allerdings: Was verlieren wir, wenn wir die Langeweile vollständig abschaffen?\n\nWas die Kreativität betrifft, stimmen zahlreiche Studien darin überein, dass Momente der Untätigkeit das Entstehen neuer Ideen begünstigen. Hervorzuheben ist etwa das Experiment, in dem eine Gruppe, die eine monotone Aufgabe erledigt hatte, danach mehr originelle Lösungen fand als eine andere Gruppe, die sich nicht gelangweilt hatte. Daher sprechen manche Experten von der Langeweile als „Motor“ des Denkens.\n\nDas vorausgeschickt, geht es nicht darum, sie zu idealisieren. So sehr sie das Nachdenken auch fördert, chronische Langeweile kann in Apathie münden. Vernünftig erscheint also, kleine Räume der Stille zurückzugewinnen: eine Fahrt ohne Kopfhörer, ein Warten ohne Bildschirm. Vielleicht beginnen paradoxerweise genau dort die besten Ideen.`},
 {t:'mc',q:'¿Cuál es la tesis del texto?',opts:['Recuperar momentos de aburrimiento puede favorecer la creatividad.','El aburrimiento siempre es negativo.','Hay que prohibir los móviles.'],a:0},
 {t:'mc',q:'„Dicho esto“ leitet hier ein …',opts:['eine Einschränkung des Vorigen','ein Beispiel','die Einleitung'],a:0},
 {t:'mc',q:'C1-Mix: Siento que no ___ venir. (Bedauern)',opts:['puedas','puedes','podrás'],a:0},
 {t:'mc',q:'C1-Mix: De ___ antes, te habría ayudado.',opts:['haberlo sabido','saberlo habido','lo haber sabido'],a:0},
 {t:'free',task:'Schreib einen kurzen Essay (10–12 Sätze) zu einem dieser Themen: «¿Deberíamos trabajar menos horas?» oder «¿Las redes sociales nos acercan o nos alejan?». Mit These, Argumenten, Gegenargument und Schluss.',hint:'Einleitung mit Frage · En lo que respecta a … · Cabe señalar que … · Ahora bien … · Por mucho que … · De ahí que … · Dicho esto … · En suma …',focus:'Essay-Aufbau, Konnektoren, Nominalisierung, C1-Strukturen',model:'Nunca habíamos estado tan conectados como ahora; ahora bien, ¿estamos realmente más cerca unos de otros? En lo que respecta al contacto con personas lejanas, las redes sociales han supuesto un avance enorme: un estudiante de Erasmus puede hablar a diario con su familia. Cabe señalar, asimismo, que han permitido la creación de comunidades en torno a intereses compartidos. Dicho esto, el uso excesivo tiene consecuencias. Por mucho que sumemos «amigos», el tiempo que pasamos frente a la pantalla se lo restamos a las relaciones cara a cara. De ahí que cada vez más jóvenes afirmen sentirse solos. En suma, las redes no nos acercan ni nos alejan por sí mismas: es el uso que hacemos de ellas lo que marca la diferencia.'}]}
],
placement:[
 {t:'mc',q:'El plan es bueno. ___, es muy caro. (Einschränkung)',opts:['Ahora bien','Asimismo','A raíz de'],a:0},
 {t:'gap',q:'aumentar → el ___',a:['aumento']},
 {t:'mc',q:'Korrekt:',opts:['una carta que contiene datos','una carta conteniendo datos','una carta, conteniendo datos'],a:0},
 {t:'mc',q:'___ la economía, los datos son positivos. (Was … betrifft)',opts:['En lo que respecta a','Ahora bien','Dicho esto'],a:0},
 {t:'gap',q:'Cabe ___ que la muestra era pequeña.',a:['señalar','destacar']},
 {t:'mc',q:'Komma richtig gesetzt:',opts:['No es caro, sino barato.','No es caro sino, barato.','No es, caro sino barato.'],a:0}],
resumen:`<h3>Konnektoren C1</h3><p class="es-t">en lo que respecta a · en cuanto a · ahora bien · dicho esto · con todo · a raíz de · dado que · cabe señalar que · asimismo · a su vez · en suma</p>
<h3>Nominalisierung</h3><p class="es-t">aumentar → el aumento · reducir → la reducción · mejorar → la mejora · proponer → la propuesta</p>
<h3>Gerundium</h3><p>richtig: gleichzeitig, Art und Weise, Grund · falsch: Folge danach, Attribut (<s>caja conteniendo</s>)</p>`});
