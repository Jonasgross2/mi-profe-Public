/* ===== C2: Unidad 40–43 – eigene Inhalte nach dem Plan Curricular (Instituto Cervantes) ===== */

COURSE.units.push({id:'u38',n:'40',level:'C2',title:'Entre líneas',sub:'Ironie & Andeutungen verstehen · Höflichkeits-Imperfekt (Quería pedirte…) · Futur des Staunens (¿Será posible?) · Ausrufe (¡Menudo…!, ¡Vaya … que …!) · Humor',
goals:['Ironie erkennen: Lob, das Kritik ist','Imperfecto/Konditional der Höflichkeit: Quería / Venía a pedirte…','Futur/Konditional des Staunens und Vorwurfs: ¿Será posible? ¿Serás capaz…?','Ausrufe: ¡Menudo + Nomen!, ¡Vaya + Nomen + que …!, ¡Qué de …!','Andeutungen: no es por nada, pero… · ya sabes lo que te digo','Humor und Doppeldeutigkeit'],
situacion:{title:'Eine diplomatische Bitte',npc:'Sra. Rovira',scene:'Deine Nachbarin, Frau Rovira (über 70, sehr direkt und ironisch), lässt jeden Morgen um sechs ihren Hund laut bellen. Du willst das ansprechen – sehr diplomatisch.',role:'Du bist Sra. Rovira, ältere Nachbarin von Jonas, schlagfertig, ironisch, aber im Grunde herzlich. Ihr siezt euch. Antworte zuerst ironisch und ausweichend (¡Menuda hora de venir a quejarse!, ¿Será posible que un perro tan pequeño moleste tanto?), mach Andeutungen über Jonas’ eigene späte Partys. Gib nach, wenn Jonas höflich und humorvoll bleibt.',goal:'Bring dein Anliegen mit Höflichkeits-Imperfekt vor (Venía a comentarle…), versteh Frau Roviras Ironie und antworte schlagfertig, aber freundlich.'},
lessons:[
{id:'l1',title:'Höflich verpacken',desc:'Quería pedirte · Venía a decirle',steps:[
 {t:'info',title:'Imperfekt und Konditional der Höflichkeit',html:`<p>Imperfekt und Konditional „schieben“ eine Bitte zeitlich weg und machen sie weicher:</p>
 <table><tr><th>direkt</th><th>höflicher</th><th>sehr höflich</th></tr>
 <tr><td class="es-t">Quiero pedirte algo.</td><td class="es-t">Quería pedirte algo.</td><td class="es-t">Querría / Quisiera pedirte algo.</td></tr>
 <tr><td class="es-t">Vengo a decirle que …</td><td class="es-t">Venía a decirle que …</td><td class="es-t">Me gustaría comentarle que …</td></tr>
 <tr><td class="es-t">¿Puedes …?</td><td class="es-t">¿Podías …?</td><td class="es-t">¿Te importaría + Inf.?</td></tr></table>
 <div class="ex">Das Imperfekt bedeutet hier <b>keine</b> Vergangenheit – <i>Quería pedirte</i> heißt „Ich möchte dich bitten“.</div>`},
 {t:'mc',q:'Am höflichsten:',opts:['Quisiera hacerle una pregunta.','Quiero hacerle una pregunta.','Le hago una pregunta.'],a:0},
 {t:'mc',q:'„Venía a pedirle un favor“ bedeutet …',opts:['Ich möchte Sie um einen Gefallen bitten.','Ich kam früher, um Sie zu bitten.','Ich werde Sie um einen Gefallen bitten.'],a:0},
 {t:'gap',q:'¿Te ___ (importar) bajar un poco la música?',a:['importaría']},
 {t:'gap',q:'Perdone, ___ (yo, querer) saber si este asiento está libre. (Imperfekt)',a:['quería']},
 {t:'tr',de:'Ich wollte Sie fragen, ob Sie morgen Zeit hätten.',a:['Quería preguntarle si tendría tiempo mañana.','Quería preguntarle si mañana tendría tiempo.']}]},
{id:'l2',title:'Na, das ist ja toll!',desc:'Ironie · ¡Menudo …! · ¿Será posible?',steps:[
 {t:'info',title:'Ironie, Ausrufe und Staunen',html:`<table><tr><th>Mittel</th><th>Beispiel</th><th>gemeint</th></tr>
 <tr><td>ironisches Lob</td><td class="es-t">¡Qué puntual! (bei 40 Min. Verspätung)</td><td>Du bist viel zu spät.</td></tr>
 <tr><td class="es-t">¡Menudo/a + Nomen!</td><td class="es-t">¡Menudo día! · ¡Menuda cara!</td><td>Was für ein (schlimmer/toller) …!</td></tr>
 <tr><td class="es-t">¡Vaya + Nomen + que …!</td><td class="es-t">¡Vaya cara que tiene!</td><td>Ist der dreist!</td></tr>
 <tr><td>Futur des Staunens</td><td class="es-t">¿Será posible? · ¿Serás capaz de …?</td><td>Kann das wahr sein? · Wirst du es wagen …?</td></tr>
 <tr><td class="es-t">¡Qué de + Nomen!</td><td class="es-t">¡Qué de gente!</td><td>Wie viele Leute!</td></tr></table>
 <div class="ex">Ironie erkennst du am Kontext und am Ton. Im Schriftlichen helfen oft Anführungszeichen: <span class="es-t">Gracias por tu «ayuda».</span></div>`},
 {t:'mc',q:'Dein Freund kommt 40 Minuten zu spät. Du sagst: „¡Qué puntual!“ Das ist …',opts:['ironisch','ein Kompliment','eine Frage'],a:0},
 {t:'mc',q:'„Ist der dreist!“',opts:['¡Vaya cara que tiene!','¡Vaya cara tiene que!','¡Qué cara tan tiene!'],a:0},
 {t:'mc',q:'„¿Serás capaz de decírselo?“ drückt aus …',opts:['Empörung/Vorwurf: Du wirst es doch nicht wagen!','eine Zukunftsplanung','eine höfliche Bitte'],a:0},
 {t:'gap',q:'¡___ lío has montado! (Was für ein Durcheinander!)',a:['Menudo','Vaya']},
 {t:'gap',q:'¡Qué ___ coches hay hoy en la ciudad! (wie viele)',a:['de']},
 {t:'listen',es:'¡Menuda nochecita! El perro de la vecina ha estado ladrando desde las cinco. ¿Será posible?',de:'Was für eine Nacht! Der Hund der Nachbarin hat seit fünf Uhr gebellt. Kann das wahr sein?'}]},
{id:'l3',title:'Zwischen den Zeilen',desc:'Andeutungen · Nachbarschaftsgespräch',steps:[
 {t:'vocab',title:'Andeuten & Ironie',items:[['no es por nada, pero …','ich sag ja nichts, aber …','🤐'],['ya sabes lo que te digo','du weißt schon, was ich meine','😉'],['dejar caer','andeuten, fallen lassen','🪶'],['tirar una indirecta','eine Anspielung machen','🎯'],['hacerse el tonto','sich dumm stellen','🙃'],['con la boca pequeña','halbherzig (sagen)','🤏'],['¡Hasta ahí podíamos llegar!','Das fehlte noch!','🛑'],['tener retintín','einen spitzen Unterton haben','🔔'],['ser un/a cachondo/a','ein Spaßvogel sein','😂'],['pillar la ironía','die Ironie verstehen','💡'],['ir con segundas','etwas mit Hintergedanken sagen','🕵️'],['quedarse con alguien','jemanden veräppeln','🤡']]},
 {t:'dialog',place:'Rellano de la escalera',title:'Der Hund von Frau Rovira',scene:'Du klingelst bei Frau Rovira. Der Hund bellt hinter der Tür.',lines:[
  {n:'Sra. Rovira',es:'¡Hombre, el vecino del tercero! ¡Menuda sorpresa! ¿Viene a devolverme la sal que le presté en marzo?',de:'Na so was, der Nachbar aus dem Dritten! Was für eine Überraschung! Bringen Sie mir das Salz zurück, das ich Ihnen im März geliehen habe?'},
  {you:true,opts:[{es:'Ja, ja, eso también. Pero venía a comentarle una cosa del perro, si no le importa.',ok:true},{es:'Vengo a quejarme del perro. Ladra demasiado.',ok:false,why:'Zu direkt. Mit Höflichkeits-Imperfekt: <i>Venía a comentarle …</i>'}]},
  {n:'Sra. Rovira',es:'¿Del perro? ¿Será posible que un animalito de tres kilos moleste tanto? No es por nada, pero sus fiestas de los sábados tampoco son una nana.',de:'Wegen des Hundes? Kann es sein, dass ein Tierchen von drei Kilo so stört? Ich sag ja nichts, aber Ihre Samstagspartys sind auch kein Wiegenlied.'},
  {you:true,opts:[{es:'Pillo la indirecta. ¿Qué le parece si yo bajo la música y usted saca a Lola un poco más tarde?',ok:true},{es:'No entiendo qué quiere decir. Mis fiestas no son una canción.',ok:false,why:'Sie spielt ironisch auf deine Partys an – darauf eingehen, nicht wörtlich nehmen.'}]},
  {n:'Sra. Rovira',es:'¡Vaya negociador que está hecho! Trato hecho. Y la sal, cuando quiera.',de:'Was für ein Verhandler Sie sind! Abgemacht. Und das Salz, wann Sie wollen.'}]},
 {t:'speak',es:'No es por nada, pero quizá podríamos buscar una solución que nos vaya bien a los dos.',de:'Ich sag ja nichts, aber vielleicht könnten wir eine Lösung finden, die uns beiden passt.'}]},
{id:'l4',title:'Lesen: Una columna de humor',desc:'Satire verstehen · eigene Glosse',steps:[
 {t:'read',title:'Manual del perfecto vecino',text:`Querido lector: si acaba de mudarse a un edificio de Barcelona, enhorabuena. Está a punto de descubrir la convivencia en su estado más puro. Permítame unos consejos de alguien que lleva treinta años en el mismo rellano.

En primer lugar, no se le ocurra saludar en el ascensor con algo más que un «bon dia» murmurado. Contar su vida entre el segundo y el quinto piso es de muy mala educación; para eso están las reuniones de la comunidad, que, como todo el mundo sabe, son la actividad favorita de los vecinos. ¡Qué de horas felices pasará discutiendo si el portal se pinta de beige o de beige claro!

En segundo lugar, si su vecino de arriba decide mover los muebles a las dos de la madrugada, no se queje. Seguramente estará buscando la inspiración. ¿Será usted tan egoísta como para cortarle las alas a un artista? Y, por último, si alguien le pide sal, désela. Nunca se la devolverán, pero ganará algo mucho más valioso: un tema de conversación para los próximos diez años.`,de:`Lieber Leser: Wenn Sie gerade in ein Haus in Barcelona gezogen sind, herzlichen Glückwunsch. Sie sind dabei, das Zusammenleben in seiner reinsten Form zu entdecken. Erlauben Sie mir ein paar Ratschläge von jemandem, der seit dreißig Jahren auf demselben Treppenabsatz wohnt.\n\nErstens: Kommen Sie bloß nicht auf die Idee, im Aufzug mit mehr als einem gemurmelten „bon dia“ zu grüßen. Zwischen dem zweiten und dem fünften Stock sein Leben zu erzählen, ist äußerst unhöflich; dafür gibt es die Eigentümerversammlungen, die, wie jeder weiß, die Lieblingsbeschäftigung der Nachbarn sind. Wie viele glückliche Stunden werden Sie damit verbringen, darüber zu streiten, ob der Hauseingang beige oder hellbeige gestrichen wird!\n\nZweitens: Wenn Ihr Nachbar von oben beschließt, um zwei Uhr nachts die Möbel zu verrücken, beschweren Sie sich nicht. Er sucht bestimmt nach Inspiration. Wollen Sie wirklich so egoistisch sein, einem Künstler die Flügel zu stutzen? Und schließlich: Wenn jemand Sie um Salz bittet, geben Sie es ihm. Sie bekommen es nie zurück, aber Sie gewinnen etwas viel Wertvolleres: ein Gesprächsthema für die nächsten zehn Jahre.`},
 {t:'mc',q:'„las reuniones de la comunidad, que … son la actividad favorita de los vecinos“ ist …',opts:['ironisch gemeint','eine ernste Information','eine Statistik'],a:0},
 {t:'mc',q:'¿Qué critica realmente el autor en el segundo consejo?',opts:['a los vecinos que hacen ruido de noche','a los artistas','a la gente egoísta que se queja'],a:0},
 {t:'mc',q:'„¿Será usted tan egoísta …?“ – welche Funktion hat das Futur?',opts:['ironische Empörung','Zukunft','Vermutung über jetzt'],a:0},
 {t:'free',task:'Schreib eine kurze ironische Glosse (8–10 Sätze): „Manual del perfecto estudiante de Erasmus“ oder „Manual del perfecto compañero de piso“.',hint:'Ironisches Lob · ¡Menudo …! · ¡Qué de …! · ¿Será posible …? · No es por nada, pero … · Höflichkeits-Imperfekt',focus:'Ironie, Ausrufe, Futur des Staunens',model:'Querido futuro estudiante de Erasmus: prepárate para el semestre más productivo de tu vida. Lo primero que debes saber es que las clases son opcionales; al fin y al cabo, ¿qué profesor sería capaz de suspender a alguien tan simpático? Por las tardes, es imprescindible visitar todas las terrazas de la ciudad, por motivos estrictamente culturales. ¡Menudo esfuerzo de integración! Por la noche, recuerda que en España se cena a las diez, así que nunca te acuestes antes de las tres. No es por nada, pero tus compañeros de piso agradecerán mucho que cantes al volver a casa. Y, sobre todo, no aprendas demasiado español: ¿será posible que alguien quiera hablar contigo en otro idioma que no sea inglés?'}]}
],
placement:[
 {t:'mc',q:'Am höflichsten:',opts:['Quisiera pedirle un favor.','Quiero un favor.','Hágame un favor.'],a:0},
 {t:'mc',q:'„¡Menudo día!“ bedeutet …',opts:['Was für ein Tag!','Ein kleiner Tag.','Ein normaler Tag.'],a:0},
 {t:'gap',q:'¡Vaya cara ___ tiene!',a:['que']},
 {t:'mc',q:'„¿Será posible?“ drückt aus …',opts:['Staunen/Empörung','eine Zukunftsfrage','eine Bitte'],a:0},
 {t:'gap',q:'¿Te ___ (importar) cerrar la ventana?',a:['importaría']},
 {t:'mc',q:'„tirar una indirecta“',opts:['eine Anspielung machen','etwas wegwerfen','direkt sagen'],a:0}],
resumen:`<h3>Höflichkeit</h3><p class="es-t">Quería / Quisiera / Venía a + Inf. · ¿Te importaría + Inf.?</p>
<h3>Ausrufe & Staunen</h3><p class="es-t">¡Menudo día! · ¡Vaya cara que tiene! · ¡Qué de gente! · ¿Será posible? · ¿Serás capaz de …?</p>
<h3>Andeutungen</h3><p class="es-t">no es por nada, pero … · tirar una indirecta · ir con segundas · pillar la ironía</p>`});

COURSE.units.push({id:'u39',n:'41',level:'C2',title:'Dicho y hecho',sub:'Sprichwörter (refranes) · feste Kollokationen (tomar una decisión, poner en marcha) · kulturelle Anspielungen · Fiestas & Traditionen',
goals:['häufige refranes verstehen und passend benutzen','Kollokationen: Verb + Nomen (tomar, poner, dar, llevar, hacer)','kulturelle Anspielungen (Don Quijote, Sancho, ir a por uvas …)','über Feste und Traditionen sprechen','Sprichwörter abwandeln und anspielen','C2-Wortschatz: präzise Verben'],
situacion:{title:'Sant Joan mit Abuelo Ramón',npc:'Ramón',scene:'In der Nacht von Sant Joan sitzt du am Strand neben Ramón, Nurias Großvater (82). Er spricht fast nur in Sprichwörtern und erzählt von früher.',role:'Du bist Ramón, Großvater von Nuria, 82, gutmütig, weise und voller refranes (Más vale tarde que nunca, A quien madruga Dios le ayuda, No hay mal que cien años dure…). Ihr siezt euch erst, du bietest das tú an. Erzähl von Sant Joan früher, frag Jonas nach deutschen Traditionen und kommentiere alles mit Sprichwörtern. Freu dich, wenn er selbst eins benutzt.',goal:'Versteh Ramóns Sprichwörter und benutze selbst mindestens zwei passende refranes oder kulturelle Anspielungen.'},
lessons:[
{id:'l1',title:'Sprichwörter',desc:'Más vale tarde que nunca …',steps:[
 {t:'vocab',title:'Häufige refranes',items:[['Más vale tarde que nunca.','Besser spät als nie.','⏰'],['A quien madruga, Dios le ayuda.','Morgenstund hat Gold im Mund.','🌅'],['No hay mal que por bien no venga.','Alles hat sein Gutes.','🍀'],['Del dicho al hecho hay mucho trecho.','Leichter gesagt als getan.','🛤️'],['En casa del herrero, cuchillo de palo.','Der Schuster hat die schlechtesten Schuhe.','🔨'],['Ojos que no ven, corazón que no siente.','Was ich nicht weiß, macht mich nicht heiß.','🙈'],['Dime con quién andas y te diré quién eres.','Sag mir, mit wem du gehst …','👥'],['Más vale pájaro en mano que ciento volando.','Lieber den Spatz in der Hand …','🐦'],['Perro ladrador, poco mordedor.','Hunde, die bellen, beißen nicht.','🐕'],['Cada maestrillo tiene su librillo.','Jeder hat seine eigene Methode.','📒'],['A buen entendedor, pocas palabras bastan.','Dem Kundigen genügen wenige Worte.','💡'],['No hay mal que cien años dure.','Alles Schlechte geht vorbei.','⌛']]},
 {t:'match',q:'Sprichwort → Situation',pairs:[['Más vale tarde que nunca.','Er kommt endlich, wenn auch spät.'],['En casa del herrero, cuchillo de palo.','Die Friseurin hat selbst einen schlechten Haarschnitt.'],['Perro ladrador, poco mordedor.','Er droht viel, tut aber nichts.'],['Del dicho al hecho hay mucho trecho.','Er verspricht viel, macht aber nichts.']]},
 {t:'mc',q:'Der IT-Experte hat selbst einen uralten Laptop:',opts:['En casa del herrero, cuchillo de palo.','A quien madruga, Dios le ayuda.','Más vale tarde que nunca.'],a:0},
 {t:'gap',q:'No hay mal que por bien no ___.',a:['venga']},
 {t:'gap',q:'Más vale pájaro en ___ que ciento volando.',a:['mano']},
 {t:'mc',q:'„A buen entendedor …“ – wie geht es weiter?',opts:['pocas palabras bastan','Dios le ayuda','corazón que no siente'],a:0}]},
{id:'l2',title:'Was zusammengehört',desc:'Kollokationen',steps:[
 {t:'info',title:'Feste Verbindungen: Verb + Nomen',html:`<table><tr><th>Verb</th><th>typische Partner</th></tr>
 <tr><td class="es-t">tomar</td><td class="es-t">una decisión, medidas, el pelo, en serio, en cuenta</td></tr>
 <tr><td class="es-t">poner</td><td class="es-t">en marcha, en duda, de manifiesto, fin a, en práctica</td></tr>
 <tr><td class="es-t">dar</td><td class="es-t">un paso, por hecho, a conocer, lugar a, la razón</td></tr>
 <tr><td class="es-t">llevar</td><td class="es-t">a cabo, la contraria, razón (Am.), las riendas</td></tr>
 <tr><td class="es-t">hacer</td><td class="es-t">hincapié en, frente a, caso a, falta</td></tr></table>
 <div class="ex">Auf C2-Niveau zählt nicht nur, ob ein Satz korrekt ist, sondern ob er <b>idiomatisch</b> ist. <i>hacer una decisión</i> versteht jeder – aber man sagt <i>tomar</i>.</div>`},
 {t:'mc',q:'Das Projekt ___ en marcha el año pasado.',opts:['se puso','se tomó','se hizo'],a:0},
 {t:'mc',q:'El informe ___ hincapié en la falta de datos.',opts:['hace','pone','da'],a:0},
 {t:'gap',q:'Siempre me ___ (llevar) la contraria. (er widerspricht mir immer)',a:['lleva']},
 {t:'gap',q:'Hay que ___ en cuenta todos los factores.',a:['tener','tomar']},
 {t:'gap',q:'La empresa ___ (llevar) a cabo un estudio en 2024. (Indefinido)',a:['llevó']},
 {t:'match',q:'Was gehört zusammen?',pairs:[['dar','un paso'],['poner','fin a'],['hacer','frente a'],['llevar','a cabo'],['tomar','medidas']]},
 {t:'tr',de:'Wir müssen Maßnahmen ergreifen.',a:['Tenemos que tomar medidas.','Hay que tomar medidas.']}]},
{id:'l3',title:'Feste & Anspielungen',desc:'Sant Joan · Don Quijote',steps:[
 {t:'info',title:'Kulturelle Anspielungen im Alltag',html:`<table><tr><th>Ausdruck</th><th>Herkunft</th><th>Bedeutung</th></tr>
 <tr><td class="es-t">luchar contra molinos de viento</td><td>Don Quijote</td><td>gegen Windmühlen kämpfen</td></tr>
 <tr><td class="es-t">ser un quijote</td><td>Don Quijote</td><td>ein Idealist sein</td></tr>
 <tr><td class="es-t">ir a por uvas</td><td>Nochevieja (12 Trauben)</td><td>nicht bei der Sache sein</td></tr>
 <tr><td class="es-t">ser más largo que un día sin pan</td><td>Alltag</td><td>endlos lang sein</td></tr>
 <tr><td class="es-t">quedarse para vestir santos</td><td>Kirche</td><td>(veraltet) unverheiratet bleiben</td></tr>
 <tr><td class="es-t">hacer el agosto</td><td>Ernte</td><td>ein Riesengeschäft machen</td></tr></table>`},
 {t:'vocab',title:'Feste & Traditionen',items:[['la verbena de Sant Joan','die Johannisnacht-Feier','🔥'],['la hoguera','das Lagerfeuer','🔥'],['los petardos','die Böller','🧨'],['la coca','katalanischer Kuchen','🍰'],['las doce uvas','die zwölf Trauben (Silvester)','🍇'],['los Reyes Magos','die Heiligen Drei Könige','👑'],['la cabalgata','der Umzug','🐫'],['los castellers','die Menschentürme','🏰'],['la Semana Santa','die Karwoche','✝️'],['el patrón / la patrona','der/die Schutzheilige','😇']]},
 {t:'dialog',place:'Playa de la Barceloneta, noche de Sant Joan',title:'Großvater Ramón',scene:'Überall Feuer und Böller. Ramón reicht dir ein Stück Coca.',lines:[
  {n:'Ramón',es:'Toma, coca de Sant Joan. Más vale tarde que nunca: ¡llevo una hora intentando abrir la caja!',de:'Nimm, Coca de Sant Joan. Besser spät als nie: Ich versuche seit einer Stunde, die Schachtel aufzumachen!'},
  {you:true,opts:[{es:'¡Gracias! Pues ha merecido la pena. ¿Esto lo celebraban igual cuando usted era joven?',ok:true},{es:'¡Gracias! ¿Por qué tarde? Es nunca.',ok:false,why:'Ramón benutzt ein Sprichwort – nicht wörtlich nehmen.'}]},
  {n:'Ramón',es:'Más o menos. Pero antes los petardos los hacíamos nosotros… y del dicho al hecho había mucho trecho, ¡ja, ja! ¿Y en Alemania qué hacéis?',de:'Mehr oder weniger. Aber früher haben wir die Böller selbst gemacht … und zwischen Sagen und Tun lag ein weiter Weg, haha! Und was macht ihr in Deutschland?'},
  {you:true,opts:[{es:'En Sant Joan, poca cosa. Pero en Nochevieja también tiramos petardos. Eso sí, sin uvas: si no, yo iría a por uvas toda la noche.',ok:true},{es:'En Sant Joan, poca cosa. Y en Nochevieja comemos uvas para ir a por uvas.',ok:false,why:'<i>ir a por uvas</i> heißt „nicht bei der Sache sein“ – nicht „Trauben essen“.'}]},
  {n:'Ramón',es:'¡Este chico tiene gracia! A buen entendedor, pocas palabras bastan.',de:'Der Junge hat Humor! Dem Kundigen genügen wenige Worte.'}]}]},
{id:'l4',title:'Lesen: El refranero',desc:'Essay · eigener Text',steps:[
 {t:'read',title:'¿Siguen vivos los refranes?',text:`Hubo un tiempo en que el refranero era una enciclopedia de bolsillo. Quien no sabía leer sabía, en cambio, que «en abril, aguas mil» y que «a quien madruga, Dios le ayuda». Los refranes condensaban siglos de experiencia campesina en frases fáciles de recordar, a menudo con rima.

Hoy, sin embargo, muchos jóvenes reconocen apenas una docena. No es de extrañar: buena parte del refranero alude a un mundo rural que ya no existe. ¿Qué sentido tiene «cría cuervos y te sacarán los ojos» para alguien que no ha visto un cuervo en su vida? Aun así, sería precipitado darlos por muertos. Lo que ocurre es que se transforman: se citan con ironía, se acortan («ojos que no ven…») o se reinventan en las redes, donde «más vale tarde que nunca» convive con «más vale meme que nunca».

En definitiva, los refranes no desaparecen; cambian de piel. Y quizá esa sea su mayor lección: del dicho al hecho hay mucho trecho, pero del refrán al meme, apenas un clic.`,de:`Es gab eine Zeit, in der der Sprichwortschatz eine Taschenenzyklopädie war. Wer nicht lesen konnte, wusste dafür, dass „im April tausend Regen“ und dass „Morgenstund Gold im Mund hat“. Sprichwörter verdichteten jahrhundertelange bäuerliche Erfahrung in leicht zu merkenden Sätzen, oft mit Reim.\n\nHeute kennen viele junge Leute dagegen kaum ein Dutzend. Kein Wunder: Ein großer Teil der Sprichwörter spielt auf eine ländliche Welt an, die es nicht mehr gibt. Welchen Sinn hat „Zieh Raben groß, und sie hacken dir die Augen aus“ für jemanden, der nie in seinem Leben einen Raben gesehen hat? Trotzdem wäre es voreilig, sie für tot zu erklären. Sie verwandeln sich vielmehr: Man zitiert sie ironisch, kürzt sie („ojos que no ven …“) oder erfindet sie in den sozialen Netzwerken neu, wo „besser spät als nie“ neben „besser Meme als nie“ steht.\n\nLetztlich verschwinden Sprichwörter nicht; sie häuten sich. Und vielleicht ist das ihre größte Lehre: Vom Sagen zum Tun ist es ein weiter Weg, aber vom Sprichwort zum Meme nur ein Klick.`},
 {t:'mc',q:'¿Por qué los jóvenes conocen menos refranes?',opts:['porque muchos aluden a un mundo rural que ya no existe','porque están prohibidos en la escuela','porque no tienen rima'],a:0},
 {t:'mc',q:'¿Qué tesis defiende el autor?',opts:['Los refranes no mueren, se transforman.','Los refranes ya han desaparecido.','Los memes son peores que los refranes.'],a:0},
 {t:'free',task:'Erzähl (8–10 Sätze) von einer Situation aus deinem Leben, die zu einem spanischen Sprichwort passt. Benutze mindestens zwei Sprichwörter und drei Kollokationen.',hint:'refranes aus Lektion 1 · tomar una decisión · poner en marcha · dar un paso · llevar a cabo · hacer frente a',focus:'Sprichwörter, Kollokationen',model:'Cuando decidí hacer el Erasmus, todo el mundo me decía que era una gran idea, pero del dicho al hecho hay mucho trecho. Tardé meses en tomar la decisión, porque me daba miedo dar el paso. Al final, puse en marcha los trámites un poco tarde, pero más vale tarde que nunca. Los primeros meses tuve que hacer frente a muchos problemas: no encontraba piso y no entendía el catalán. Sin embargo, no hay mal que por bien no venga: gracias a esos problemas conocí a Nuria. Hoy puedo decir que llevé a cabo el mejor proyecto de mi vida.'}]}
],
placement:[
 {t:'mc',q:'„Besser spät als nie.“',opts:['Más vale tarde que nunca.','A quien madruga, Dios le ayuda.','Del dicho al hecho hay mucho trecho.'],a:0},
 {t:'mc',q:'___ una decisión',opts:['tomar','hacer','poner'],a:0},
 {t:'gap',q:'Perro ladrador, poco ___.',a:['mordedor']},
 {t:'mc',q:'„ir a por uvas“ bedeutet …',opts:['nicht bei der Sache sein','Trauben kaufen','feiern'],a:0},
 {t:'gap',q:'El gobierno puso ___ marcha un nuevo plan.',a:['en']},
 {t:'mc',q:'Der Bäcker kauft sein Brot im Supermarkt:',opts:['En casa del herrero, cuchillo de palo.','Ojos que no ven, corazón que no siente.','Perro ladrador, poco mordedor.'],a:0}],
resumen:`<h3>Refranes</h3><p class="es-t">Más vale tarde que nunca · A quien madruga, Dios le ayuda · No hay mal que por bien no venga · Del dicho al hecho hay mucho trecho · En casa del herrero, cuchillo de palo · Perro ladrador, poco mordedor</p>
<h3>Kollokationen</h3><p class="es-t">tomar una decisión / medidas · poner en marcha / fin a · dar un paso / por hecho · llevar a cabo · hacer hincapié en / frente a</p>
<h3>Anspielungen</h3><p class="es-t">luchar contra molinos de viento · ir a por uvas · hacer el agosto</p>`});

COURSE.units.push({id:'u40',n:'42',level:'C2',title:'Sea como fuere',sub:'Gehobene & literarische Sprache · Futuro de subjuntivo (quien fuere, sea como fuere) · dondequiera / comoquiera que · Juristen- und Verwaltungssprache · Literatur lesen',
goals:['Futuro de subjuntivo erkennen: hubiere, fuere, a donde fueres…','feste Formeln: sea como fuere, pase lo que pase, digan lo que digan','dondequiera / comoquiera / cuandoquiera que + Subj.','Verwaltungssprache verstehen (el abajo firmante, en virtud de, a efectos de)','Konditional der Berichterstattung & Imperfecto narrativo','einen literarischen Text verstehen'],
situacion:{title:'Ein Brief vom Amt',npc:'Sr. Martí',scene:'Du hast einen Brief vom Ayuntamiento bekommen, voller Behördensprache, wegen deiner Anmeldung (empadronamiento). Herr Martí am Schalter soll dir helfen, ihn zu verstehen.',role:'Du bist Sr. Martí, Verwaltungsbeamter, korrekt, etwas trocken, aber hilfsbereit. Ihr siezt euch. Sprich zuerst in Behördensprache (En virtud de lo dispuesto…, a efectos de…, el interesado deberá…). Wenn Jonas höflich nachfragt, erkläre es in normaler Sprache. Benutze feste Formeln (sea como fuere, en su caso).',goal:'Frag höflich nach, was die Formulierungen bedeuten, gib sie in eigenen Worten wieder und kläre, was du tun musst.'},
lessons:[
{id:'l1',title:'Wie dem auch sei',desc:'sea como fuere · pase lo que pase',steps:[
 {t:'info',title:'Feste Formeln mit Subjuntivo-Verdopplung',html:`<table><tr><th>Formel</th><th>Bedeutung</th></tr>
 <tr><td class="es-t">pase lo que pase</td><td>was auch immer passiert</td></tr>
 <tr><td class="es-t">digan lo que digan</td><td>egal, was sie sagen</td></tr>
 <tr><td class="es-t">cueste lo que cueste</td><td>koste es, was es wolle</td></tr>
 <tr><td class="es-t">vayas donde vayas</td><td>wohin du auch gehst</td></tr>
 <tr><td class="es-t">sea como sea / sea como fuere</td><td>wie dem auch sei</td></tr>
 <tr><td class="es-t">quieras o no</td><td>ob du willst oder nicht</td></tr></table>
 <div class="ex">Gebaut nach dem Muster <b>Verb (Subj.) + lo que / donde / como + gleiches Verb (Subj.)</b>.</div>`},
 {t:'mc',q:'„Was auch immer passiert, ich bin bei dir.“',opts:['Pase lo que pase, estoy contigo.','Pasa lo que pasa, estoy contigo.','Pase lo que pasa, estoy contigo.'],a:0},
 {t:'gap',q:'___ lo que digan, voy a hacerlo. (sagen)',a:['Digan']},
 {t:'gap',q:'Lo conseguiremos, cueste lo que ___.',a:['cueste']},
 {t:'gap',q:'Vayas donde ___, llévate un paraguas.',a:['vayas']},
 {t:'tr',de:'Ob du willst oder nicht, du musst kommen.',a:['Quieras o no, tienes que venir.','Quieras o no, tienes que venir tú.']}]},
{id:'l2',title:'Der Futuro de subjuntivo',desc:'quien fuere · a donde fueres',steps:[
 {t:'info',title:'Eine fast verschwundene Form',html:`<p>Der <b>Futuro de subjuntivo</b> wird heute fast nur noch in Gesetzestexten und Redewendungen benutzt. Bildung wie Imperf. Subj., aber mit <b>-re</b>: <span class="es-t">hablare, tuviere, fuere, hubiere</span>.</p>
 <table><tr><th>Wo?</th><th>Beispiel</th><th>heute normal</th></tr>
 <tr><td>Sprichwort</td><td class="es-t">Adonde fueres, haz lo que vieres.</td><td class="es-t">Adonde vayas, haz lo que veas.</td></tr>
 <tr><td>Formel</td><td class="es-t">Sea como fuere …</td><td class="es-t">Sea como sea …</td></tr>
 <tr><td>Gesetz</td><td class="es-t">El que hubiere cometido el delito …</td><td class="es-t">El que haya cometido …</td></tr></table>
 <div class="ex">Du musst ihn nur <b>erkennen</b>, nicht aktiv benutzen.</div>`},
 {t:'mc',q:'„Adonde fueres, haz lo que vieres“ entspricht …',opts:['Andere Länder, andere Sitten.','Wer zuerst kommt, mahlt zuerst.','Ende gut, alles gut.'],a:0},
 {t:'mc',q:'„tuviere“ ist …',opts:['Futuro de subjuntivo von tener','ein Tippfehler','Konditional von tener'],a:0},
 {t:'match',q:'Futuro de subj. → heute',pairs:[['fuere','sea / fuera'],['hubiere','haya'],['vieres','veas'],['tuviere','tenga']]},
 {t:'info',title:'dondequiera, comoquiera, cuandoquiera',html:`<p class="es-t">Dondequiera que <b>vayas</b>, encontrarás amigos. · Comoquiera que <b>sea</b>, hay que decidir. · Cuandoquiera que <b>llegues</b>, avísame.</p>
 <div class="ex">= wo/wie/wann auch immer – immer mit Subjuntivo, gehobenes Register. Umgangssprachlich: <i>vayas donde vayas</i>.</div>`},
 {t:'gap',q:'Dondequiera que ___ (tú, estar), te encontraré.',a:['estés']}]},
{id:'l3',title:'Behördensprache',desc:'en virtud de · a efectos de',steps:[
 {t:'vocab',title:'Verwaltung & Recht',items:[['el empadronamiento','die Meldebescheinigung / Anmeldung','🏛️'],['el/la interesado/a','der/die Antragsteller/in','🙋'],['el abajo firmante','der Unterzeichnende','✍️'],['en virtud de','aufgrund (Gesetz)','📜'],['a efectos de','zum Zwecke von','🎯'],['en su caso','gegebenenfalls','❓'],['el plazo de diez días hábiles','die Frist von zehn Werktagen','📅'],['subsanar','beheben, nachbessern','🔧'],['la notificación','der Bescheid','📨'],['el recurso','der Einspruch','⚖️'],['la sede electrónica','das Online-Portal (Behörde)','💻'],['dar de alta / de baja','an- / abmelden','📝']]},
 {t:'mc',q:'„en su caso“ bedeutet …',opts:['gegebenenfalls','in Ihrem Koffer','in Ihrem Fall immer'],a:0},
 {t:'mc',q:'„Deberá subsanar la solicitud“ heißt …',opts:['Sie müssen den Antrag nachbessern.','Sie müssen den Antrag zurückziehen.','Sie müssen den Antrag bezahlen.'],a:0},
 {t:'dialog',place:'Oficina de atención ciudadana',title:'Der Brief vom Amt',scene:'Du legst Herrn Martí den Brief auf den Schalter.',lines:[
  {n:'Sr. Martí',es:'A ver… «En virtud de lo dispuesto, el interesado deberá subsanar la solicitud en un plazo de diez días hábiles, aportando, en su caso, la documentación requerida».',de:'Mal sehen … „Gemäß den Bestimmungen hat der Antragsteller den Antrag innerhalb von zehn Werktagen nachzubessern und gegebenenfalls die geforderten Unterlagen beizubringen.“'},
  {you:true,opts:[{es:'Disculpe, ¿podría explicármelo con otras palabras? Si no lo he entendido mal, me falta algún documento.',ok:true},{es:'¿Qué? No entiendo nada de nada. Dígalo normal.',ok:false,why:'Zu unhöflich gegenüber einem Beamten. Besser mit <i>Disculpe, ¿podría …?</i>'}]},
  {n:'Sr. Martí',es:'Exacto. Le falta el contrato de alquiler. Tiene diez días laborables para traerlo.',de:'Genau. Ihnen fehlt der Mietvertrag. Sie haben zehn Werktage, um ihn zu bringen.'},
  {you:true,opts:[{es:'Entendido. Y en caso de que no lo tuviera a tiempo, ¿qué pasaría?',ok:true},{es:'Entendido. Y en caso de que no lo tendría a tiempo, ¿qué pasaría?',ok:false,why:'<i>en caso de que</i> + Subjuntivo: <i>tuviera</i>.'}]},
  {n:'Sr. Martí',es:'Se archivaría la solicitud. Pero, sea como fuere, puede subirlo también a la sede electrónica.',de:'Der Antrag würde abgelegt. Aber wie dem auch sei, Sie können ihn auch im Online-Portal hochladen.'}]}]},
{id:'l4',title:'Lesen: Literatur',desc:'eine literarische Erzählung',steps:[
 {t:'read',title:'La última tienda de la calle',text:`La librería de don Esteve cerraba a las ocho, pero aquella noche, como tantas otras, las luces seguían encendidas pasadas las diez. Desde la acera de enfrente se le veía, encorvado sobre el mostrador, anotando en un cuaderno de tapas negras lo que nadie le había pedido que anotara: los títulos que no había vendido.

Decían en el barrio que la tienda no sobreviviría al invierno. Lo decían con esa mezcla de pena y alivio con que se habla de lo inevitable. Él, en cambio, abría cada mañana a las nueve en punto, pasara lo que pasara, como si la puntualidad pudiera {conjurar|bannen} el final. Comoquiera que fuese, nadie se atrevía a preguntarle.

Una tarde de enero entró una niña con un billete arrugado en la mano. Quería un libro de piratas, dijo, uno que tuviera mapa. Don Esteve tardó en contestar. Luego subió la escalera de madera, rebuscó en la última estantería y bajó con un volumen descolorido. —Este era mío —dijo—. Tiene mapa y, si lo lees bien, también tesoro. La niña no entendió, pero sonrió. Él no le cobró. Aquella noche, por primera vez en meses, apagó las luces a las ocho.`,de:`Don Esteves Buchhandlung schloss um acht, aber an jenem Abend brannten, wie an so vielen anderen, die Lichter nach zehn noch. Vom gegenüberliegenden Gehweg aus sah man ihn, über den Ladentisch gebeugt, in ein Heft mit schwarzem Einband notieren, was niemand von ihm verlangt hatte: die Titel, die er nicht verkauft hatte.\n\nIm Viertel hieß es, der Laden werde den Winter nicht überstehen. Man sagte es mit jener Mischung aus Bedauern und Erleichterung, mit der man über das Unvermeidliche spricht. Er dagegen öffnete jeden Morgen pünktlich um neun, was auch geschah, als könnte die Pünktlichkeit das Ende bannen. Wie dem auch sei, niemand wagte es, ihn zu fragen.\n\nAn einem Januarnachmittag kam ein Mädchen herein, einen zerknitterten Geldschein in der Hand. Sie wollte ein Piratenbuch, sagte sie, eins mit einer Karte. Don Esteve antwortete nicht gleich. Dann stieg er die Holzleiter hinauf, suchte im obersten Regal und kam mit einem verblichenen Band herunter. „Das war meins“, sagte er. „Es hat eine Karte und, wenn du es gut liest, auch einen Schatz.“ Das Mädchen verstand nicht, lächelte aber. Er nahm kein Geld. An jenem Abend schaltete er zum ersten Mal seit Monaten die Lichter um acht aus.`},
 {t:'mc',q:'¿Qué anotaba don Esteve en su cuaderno?',opts:['los libros que no había vendido','sus ventas del día','los nombres de sus clientes'],a:0},
 {t:'mc',q:'„pasara lo que pasara“ bedeutet hier …',opts:['was auch immer geschah','was gestern passiert war','was passieren sollte'],a:0},
 {t:'mc',q:'¿Por qué apaga las luces a las ocho al final?',opts:['Parece haber encontrado sentido o paz al regalar su libro.','Porque la tienda ha cerrado definitivamente.','Porque la niña se lo pidió.'],a:0},
 {t:'free',task:'Schreib (8–10 Sätze), wie die Geschichte weitergehen könnte – im gleichen literarischen Stil (Vergangenheit, Beschreibungen, ein Dialog).',hint:'Imperfekt für Hintergrund, Indefinido für Ereignisse · pasara lo que pasara · como si + Imperf. Subj. · Comoquiera que fuese …',focus:'literarischer Stil, Vergangenheitstempora, gehobene Formeln',model:'Al día siguiente, la niña volvió con su abuela. Traía el libro bajo el brazo, como si temiera que alguien se lo quitara. —Ha encontrado el tesoro —anunció la abuela—, y ahora quiere otro mapa. Don Esteve las miró largo rato sin decir nada. Después, con una sonrisa que nadie le conocía, sacó del mostrador el cuaderno negro. —Aquí hay muchos —dijo—. Elige el que quieras. Aquella semana vendió más libros que en todo el otoño. Comoquiera que fuese, la noticia corrió por el barrio. Y cuando llegó la primavera, la librería seguía abierta.'}]}
],
placement:[
 {t:'mc',q:'„Was auch immer passiert …“',opts:['Pase lo que pase …','Pasa lo que pasa …','Pasara lo que pase …'],a:0},
 {t:'mc',q:'„fuere“ ist …',opts:['Futuro de subjuntivo','Imperfekt','Konditional'],a:0},
 {t:'gap',q:'Dondequiera que ___ (tú, ir), escríbeme.',a:['vayas']},
 {t:'mc',q:'„en su caso“',opts:['gegebenenfalls','in seinem Haus','auf jeden Fall'],a:0},
 {t:'gap',q:'Lo haré, cueste lo que ___.',a:['cueste']},
 {t:'mc',q:'„Adonde fueres, haz lo que vieres.“',opts:['Andere Länder, andere Sitten.','Wo ein Wille ist, ist ein Weg.','Übung macht den Meister.'],a:0}],
resumen:`<h3>Formeln</h3><p class="es-t">pase lo que pase · digan lo que digan · cueste lo que cueste · vayas donde vayas · sea como sea / fuere · quieras o no</p>
<h3>Futuro de subjuntivo (erkennen)</h3><p class="es-t">fuere · hubiere · tuviere · Adonde fueres, haz lo que vieres.</p><p class="es-t">dondequiera / comoquiera / cuandoquiera que + Subj.</p>
<h3>Verwaltung</h3><p class="es-t">en virtud de · a efectos de · en su caso · el interesado · subsanar · plazo de diez días hábiles</p>`});

COURSE.units.push({id:'u41',n:'43',level:'C2',title:'Con mis propias palabras',sub:'Zusammenfassen & umformulieren (dicho de otro modo, o lo que es lo mismo, mejor dicho) · Sprachmittlung Deutsch ↔ Spanisch · Register souverän wechseln · großer Abschluss-Check A1–C2',
goals:['Reformulierer: es decir, dicho de otro modo, o lo que es lo mismo, mejor dicho, a saber','Zusammenfassen: en pocas palabras, en síntesis, grosso modo','Sprachmittlung: Inhalte sinngemäß übertragen, nicht Wort für Wort','typische Übersetzungsfallen Deutsch–Spanisch','Register und Stil souverän wählen','Abschluss: Rückblick auf den ganzen Kurs'],
situacion:{title:'Dolmetschen beim Elternbesuch',npc:'Nuria',scene:'Deine Eltern besuchen dich in Barcelona und lernen Nuria kennen. Deine Eltern sprechen kein Spanisch, Nuria kein Deutsch – du vermittelst beim Abendessen.',role:'Du bist Nuria, Mitbewohnerin von Jonas, herzlich und neugierig. Ihr duzt euch. Stell Jonas Fragen, die er seinen Eltern übersetzen soll (¿Pregúntales qué les parece Barcelona?), und reagiere auf ihre (von Jonas wiedergegebenen) Antworten. Erzähl auch etwas Lustiges über Jonas, das er sinngemäß und diplomatisch wiedergeben soll.',goal:'Gib Aussagen deiner Eltern sinngemäß auf Spanisch wieder (Dicen que…, Lo que quieren decir es que…), fasse zusammen und formuliere diplomatisch um.'},
lessons:[
{id:'l1',title:'Anders gesagt',desc:'dicho de otro modo · mejor dicho',steps:[
 {t:'info',title:'Umformulieren und präzisieren',html:`<table><tr><th>Funktion</th><th>Reformulierer</th><th>Beispiel</th></tr>
 <tr><td>erklären</td><td class="es-t">es decir · o sea · esto es</td><td class="es-t">Es bilingüe, es decir, habla dos lenguas nativas.</td></tr>
 <tr><td>anders sagen</td><td class="es-t">dicho de otro modo · en otras palabras · o lo que es lo mismo</td><td class="es-t">Subió un 100 %, o lo que es lo mismo, se duplicó.</td></tr>
 <tr><td>korrigieren</td><td class="es-t">mejor dicho · más bien · digo</td><td class="es-t">Vendré el lunes, mejor dicho, el martes.</td></tr>
 <tr><td>aufzählen/präzisieren</td><td class="es-t">a saber</td><td class="es-t">Hay tres requisitos, a saber: …</td></tr>
 <tr><td>zusammenfassen</td><td class="es-t">en pocas palabras · en síntesis · grosso modo</td><td class="es-t">En pocas palabras, fue un éxito.</td></tr></table>`},
 {t:'mc',q:'Los precios han bajado un 50 %, ___, cuestan la mitad.',opts:['o lo que es lo mismo','mejor dicho','a saber'],a:0},
 {t:'mc',q:'Nos vemos a las ocho, ___, a las ocho y media.',opts:['mejor dicho','a saber','en síntesis'],a:0},
 {t:'gap',q:'El curso tiene tres niveles, a ___: básico, intermedio y avanzado.',a:['saber']},
 {t:'gap',q:'___ otro modo: no hay presupuesto. (anders gesagt)',a:['Dicho de']},
 {t:'tr',de:'Kurz gesagt: Es hat sich gelohnt.',a:['En pocas palabras, ha valido la pena.','En pocas palabras: ha merecido la pena.','En resumen, ha valido la pena.']}]},
{id:'l2',title:'Übersetzungsfallen',desc:'Deutsch ↔ Spanisch',steps:[
 {t:'info',title:'Sinngemäß statt wörtlich',html:`<table><tr><th>Deutsch</th><th>wörtlich (falsch/seltsam)</th><th>idiomatisch</th></tr>
 <tr><td>Ich bin fertig. (erschöpft)</td><td><s>Estoy listo.</s></td><td class="es-t">Estoy agotado / hecho polvo.</td></tr>
 <tr><td>Das macht Sinn.</td><td><s>Eso hace sentido.</s></td><td class="es-t">Eso tiene sentido.</td></tr>
 <tr><td>Ich bekomme ein Kind.</td><td><s>Recibo un niño.</s></td><td class="es-t">Voy a tener un hijo / Estoy embarazada.</td></tr>
 <tr><td>eventuell</td><td><s>eventualmente</s> (= gelegentlich)</td><td class="es-t">quizás, posiblemente</td></tr>
 <tr><td>sensibel</td><td><s>sensible</s> (passt) / aktuell</td><td class="es-t">sensible ✓ · <b>actual</b> = aktuell ✓ · <b>sensato</b> = vernünftig</td></tr>
 <tr><td>Kompetenz/kompetent</td><td>competente ✓, aber <s>la competencia</s> = auch „Konkurrenz“</td><td class="es-t">Kontext prüfen</td></tr>
 <tr><td>Ich freue mich auf …</td><td><s>Me alegro a …</s></td><td class="es-t">Tengo muchas ganas de …</td></tr></table>`},
 {t:'mc',q:'„Das macht keinen Sinn.“',opts:['No tiene sentido.','No hace sentido.','No da sentido.'],a:0},
 {t:'mc',q:'„Ich freue mich auf den Urlaub.“',opts:['Tengo muchas ganas de que lleguen las vacaciones.','Me alegro a las vacaciones.','Estoy feliz sobre las vacaciones.'],a:0},
 {t:'mc',q:'„Ich komme eventuell später.“',opts:['Quizás llegue más tarde.','Eventualmente llego más tarde.','Llego eventual más tarde.'],a:0},
 {t:'gap',q:'Después de la mudanza estoy hecho ___. (fix und fertig)',a:['polvo']},
 {t:'tr',de:'Ich bin total erschöpft.',a:['Estoy agotado.','Estoy hecho polvo.','Estoy reventado.','Estoy agotada.']},
 {t:'listen',es:'Dicho de otro modo, traducir no es cambiar palabras, sino trasladar ideas.',de:'Anders gesagt: Übersetzen heißt nicht, Wörter auszutauschen, sondern Ideen zu übertragen.'}]},
{id:'l3',title:'Vermitteln',desc:'Dialog beim Abendessen',steps:[
 {t:'vocab',title:'Sprachmittlung',items:[['hacer de intérprete','dolmetschen','🗣️'],['traducir al pie de la letra','wörtlich übersetzen','📏'],['captar el sentido','den Sinn erfassen','🎯'],['suavizar','abmildern','🪶'],['matizar','nuancieren, präzisieren','🎨'],['lo que viene a decir es que …','was er/sie damit sagen will, ist …','💡'],['transmitir','übermitteln','📡'],['perderse en la traducción','in der Übersetzung verloren gehen','🌫️'],['un falso amigo','ein falscher Freund','🎭'],['el matiz','die Nuance','🔍']]},
 {t:'dialog',place:'Cena en el piso',title:'Eltern zu Besuch',scene:'Deine Eltern, Nuria und du am Tisch. Es gibt Paella.',lines:[
  {n:'Nuria',es:'Jonas, pregúntales a tus padres qué les parece Barcelona.',de:'Jonas, frag deine Eltern, wie sie Barcelona finden.'},
  {you:true,opts:[{es:'Dicen que les encanta, aunque mi padre añade que hay demasiada gente en las Ramblas. O sea, que es un poco agobiante.',ok:true},{es:'Ellos dicen: «Nos gusta mucho, pero hay demasiadas personas en las Ramblas, es un poco agobiante para nosotros, dice mi padre».',ok:false,why:'Beim Vermitteln: indirekte Rede und sinngemäß zusammenfassen, nicht wörtlich mit Anführungszeichen.'}]},
  {n:'Nuria',es:'¡Normal! Oye, diles que en todo Gràcia nadie friega los platos peor que tú.',de:'Normal! Hey, sag ihnen, dass in ganz Gràcia niemand schlechter abspült als du.'},
  {you:true,opts:[{es:'Mi madre dice que en casa era igual, o lo que es lo mismo, que no es culpa de Barcelona.',ok:true},{es:'Mi madre dice que en casa era igual, mejor dicho, que no es culpa de Barcelona.',ok:false,why:'Hier ist es keine Korrektur, sondern eine Umschreibung → <i>o lo que es lo mismo</i>.'}]},
  {n:'Nuria',es:'¡Ja, ja! Bueno, en pocas palabras: ¡bienvenidos y que aprovechen!',de:'Haha! Na gut, kurz gesagt: Willkommen und guten Appetit!'}]},
 {t:'speak',es:'Lo que mis padres vienen a decir es que están muy orgullosos de que me haya atrevido a venir.',de:'Was meine Eltern damit sagen wollen, ist, dass sie sehr stolz sind, dass ich mich getraut habe herzukommen.'}]},
{id:'l4',title:'Abschluss: De A1 a C2',desc:'großer Check · Rückblick',steps:[
 {t:'read',title:'Carta a mí mismo',text:`Querido Jonas del primer día:

Ahora mismo estás en el aeropuerto del Prat, repitiendo en voz baja «Me llamo Jonas, soy alemán». Dentro de un rato te perderás en el metro y pensarás que nunca entenderás a nadie. Déjame decirte algo: lo entenderás. No de golpe, sino poco a poco, como quien sube una montaña sin mirar demasiado hacia arriba.

Vas a meter la pata muchas veces. Dirás «estoy embarazado» cuando quieras decir que te da vergüenza, y la cajera del súper se reirá contigo, no de ti. Aprenderás que «ahora» no significa ahora, que se cena a las diez y que una caña nunca es solo una caña. Te costará distinguir el indefinido del imperfecto, y años después te sorprenderás usando un subjuntivo sin pensarlo.

Si pudiera darte un solo consejo, sería este: no esperes a hablar perfecto para hablar. Pase lo que pase, sigue preguntando, sigue equivocándote, sigue escuchando. Dicho de otro modo: el idioma no se aprende; se vive.

Un abrazo del Jonas que, por fin, sueña en español.`,de:`Lieber Jonas vom ersten Tag,\n\ngerade stehst du am Flughafen El Prat und wiederholst leise „Me llamo Jonas, soy alemán“. Gleich wirst du dich in der Metro verlaufen und denken, dass du nie jemanden verstehen wirst. Lass mich dir etwas sagen: Du wirst verstehen. Nicht auf einen Schlag, sondern nach und nach, wie jemand, der einen Berg hinaufsteigt, ohne zu oft nach oben zu schauen.\n\nDu wirst oft ins Fettnäpfchen treten. Du wirst „estoy embarazado“ sagen, wenn du sagen willst, dass dir etwas peinlich ist, und die Kassiererin im Supermarkt wird mit dir lachen, nicht über dich. Du wirst lernen, dass „ahora“ nicht jetzt heißt, dass man um zehn zu Abend isst und dass eine Caña nie nur eine Caña ist. Es wird dir schwerfallen, das Indefinido vom Imperfekt zu unterscheiden, und Jahre später wirst du dich dabei ertappen, wie du einen Subjuntivo benutzt, ohne nachzudenken.\n\nWenn ich dir nur einen Rat geben könnte, wäre es dieser: Warte nicht darauf, perfekt zu sprechen, um zu sprechen. Was auch passiert – frag weiter, irr dich weiter, hör weiter zu. Anders gesagt: Eine Sprache lernt man nicht; man lebt sie.\n\nHerzliche Grüße vom Jonas, der endlich auf Spanisch träumt.`},
 {t:'mc',q:'¿Qué consejo principal da el autor?',opts:['No esperar a hablar perfecto para hablar.','Estudiar más gramática.','No salir de noche.'],a:0},
 {t:'mc',q:'A1: Hola, me ___ Jonas.',opts:['llamo','llama','llamas'],a:0},
 {t:'mc',q:'A2: Ayer ___ al cine con Laia.',opts:['fui','iba','he ido a'],a:0},
 {t:'mc',q:'B1: No creo que ___ razón.',opts:['tengas','tienes','tendrás'],a:0},
 {t:'mc',q:'B2: Si lo ___ sabido, te lo habría dicho.',opts:['hubiera','habría','había'],a:0},
 {t:'mc',q:'C1: Por muy difícil que ___, lo intentaré.',opts:['sea','es','fuera a'],a:0},
 {t:'mc',q:'C2: Adonde ___, haz lo que vieres.',opts:['fueres','fueras','vayas a'],a:0},
 {t:'free',task:'Schreib dir selbst einen Brief (10–12 Sätze): an dein „Ich vom ersten Spanisch-Tag“. Was würdest du dir raten? Was hast du gelernt? Benutze Strukturen aus allen Stufen.',hint:'Si pudiera … · Vas a … · Aprenderás que … · Pase lo que pase … · Dicho de otro modo … · No es por nada, pero … · Más vale tarde que nunca …',focus:'freie Produktion auf C2-Niveau, Register, Stil',model:'Querido Jonas de hace tres años: ahora mismo piensas que el español es imposible y que nunca podrás hablar con fluidez. Déjame quitarte esa idea. Aprenderás que equivocarse no es un fracaso, sino parte del camino. Habrá días en que no entiendas nada y otros en que te sorprendas contando un chiste. Si pudiera darte un consejo, sería que hablaras más y te preocuparas menos. No es por nada, pero esas tardes en la biblioteca repitiendo listas de verbos no te sirvieron tanto como una sola noche charlando en una terraza. Pase lo que pase, no dejes de leer: las historias te enseñarán más que cualquier manual. Y cuando por fin entiendas una indirecta de la señora Rovira, sabrás que lo has conseguido. Dicho de otro modo: disfruta del viaje. Un abrazo de tu yo del futuro.'}]}
],
placement:[
 {t:'mc',q:'Subió un 100 %, ___, se duplicó.',opts:['o lo que es lo mismo','mejor dicho','a saber'],a:0},
 {t:'mc',q:'„Das macht Sinn.“',opts:['Tiene sentido.','Hace sentido.','Da sentido.'],a:0},
 {t:'gap',q:'Hay dos opciones, a ___: quedarse o irse.',a:['saber']},
 {t:'mc',q:'„Ich bin fix und fertig.“',opts:['Estoy hecho polvo.','Estoy listo.','Estoy terminado.'],a:0},
 {t:'gap',q:'Vendré el lunes, mejor ___, el martes.',a:['dicho']},
 {t:'mc',q:'„eventuell“ = …',opts:['quizás','eventualmente','eventual'],a:0}],
resumen:`<h3>Reformulieren</h3><p class="es-t">es decir · o sea · dicho de otro modo · en otras palabras · o lo que es lo mismo · mejor dicho · a saber · en pocas palabras · en síntesis</p>
<h3>Übersetzungsfallen</h3><p class="es-t">tener sentido (nicht hacer) · estar hecho polvo (erschöpft) · tener ganas de (sich freuen auf) · quizás (eventuell) · embarazada ≠ verlegen</p>
<h3>Vermitteln</h3><p class="es-t">Dicen que … · Lo que vienen a decir es que … · suavizar · matizar · captar el sentido</p>`});
