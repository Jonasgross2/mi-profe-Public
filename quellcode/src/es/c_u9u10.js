/* ================= UNIDAD 9 · MOMENTO DE CAMBIOS ================= */
COURSE.units.push({id:'u9',n:'9',title:'Antes y ahora',sub:'Häuser & Büros beschreiben · Notwendigkeit ausdrücken · über Gewohnheiten in der Vergangenheit sprechen · Veränderungen · Mengen',
goals:['Wohnung & Büro: Räume, Möbel, Stockwerke','Zustand & Lage beschreiben','Imperfekt (buscaba, tenía)','ser, ir, ver im Imperfekt','antes / cuando era … / a los … años','Mengenangaben (la mitad, la mayoría …)','Ordnungszahlen','hay que / tener que + Infinitiv'],
situacion:{title:'Wohnungsbesichtigung in Gràcia',npc:'Sr. Puig',scene:'Du besichtigst ein WG-Zimmer in Gràcia. Der Vermieter, Sr. Puig, zeigt dir alles.',role:'Du bist Sr. Puig, ein älterer Vermieter aus Barcelona, freundlich und gesprächig. Du siezt Jonas. Du beschreibst die WG-Wohnung und das freie Zimmer (3. Stock, kein Aufzug, hell, renoviert, Küche ausgestattet, Balkon, nah an der Metro Fontana, Zimmer möbliert, 450 € im Monat mit Nebenkosten, eine Monatsmiete Kaution). Erzähl auch nostalgisch, wie das Viertel früher war (Imperfekt: antes había…, la gente…, yo vivía…).',goal:'Frag nach Lage, Stockwerk, Zustand, Preis und Kaution (¿Hay que pagar fianza?), und reagiere auf seine Erzählung über früher, indem du erzählst, wie es früher bei dir war (Imperfekt).'},
lessons:[
{id:'l1',title:'Wohnung & Büro beschreiben',desc:'la planta baja · está reformado · es luminoso',steps:[
 {t:'vocab',title:'Räume & Teile',items:[['la habitación','das Zimmer'],['el despacho','das Büro (Raum)'],['la cocina','die Küche'],['el baño / el servicio','das Bad / die Toilette'],['la recepción','die Rezeption, der Empfang'],['la puerta','die Tür'],['la ventana','das Fenster'],['la pared','die Wand'],['la terraza','die Terrasse'],['el balcón','der Balkon'],['el ascensor','der Aufzug'],['la planta baja','das Erdgeschoss'],['la primera / segunda planta','der erste / zweite Stock']]},
 {t:'vocab',title:'Möbel',items:[['el escritorio','der Schreibtisch'],['la mesa','der Tisch'],['la silla','der Stuhl'],['la estantería','das Regal'],['el armario','der Schrank'],['la lámpara','die Lampe'],['el sofá','das Sofa'],['la cama','das Bett']]},
 {t:'info',title:'Beschreiben: ser oder estar?',html:`<table><tr><th>ser – Eigenschaft</th><th>estar – Zustand</th><th>estar – Lage</th></tr>
 <tr><td class="es-t">Es moderno / antiguo.</td><td class="es-t">Está en buen estado.</td><td class="es-t">Está en un edificio de oficinas.</td></tr>
 <tr><td class="es-t">Es tranquilo / luminoso.</td><td class="es-t">Está reformado.</td><td class="es-t">Está en la zona comercial.</td></tr>
 <tr><td class="es-t">Es exterior / interior.</td><td class="es-t">Está amueblado.</td><td class="es-t">Está cerca de la estación.</td></tr>
 <tr><td class="es-t">Es barato / caro.</td><td class="es-t">Está limpio.</td><td class="es-t">Está bien comunicado.</td></tr></table>
 <div class="ex">Gleiches Adjektiv, andere Bedeutung: <span class="es-t">Es limpio</span> = er ist reinlich (Eigenschaft einer Person), <span class="es-t">Está limpio</span> = es ist (gerade) sauber. Für die Wohnung also: <span class="es-t">El piso está limpio.</span></div>`},
 {t:'mc',q:'El piso ___ muy luminoso.',opts:['es','está'],a:0,keep:true,why:'Eigenschaft der Wohnung → <b>ser</b>.'},
 {t:'mc',q:'La cocina ___ equipada.',opts:['está','es'],a:0,keep:true,why:'Zustand (ausgestattet) → <b>estar</b>.'},
 {t:'mc',q:'La oficina ___ cerca de la estación.',opts:['está','es','hay'],a:0,keep:true},
 {t:'gap',q:'Mi habitación ___ exterior y ___ amueblada.',a:['es','está']},
 {t:'match',q:'Wohin gehört das?',pairs:[['la cama','la habitación'],['el escritorio','el despacho'],['la ducha','el baño'],['el sofá','el salón'],['la nevera','la cocina']]},
 {t:'tr',de:'Die Wohnung ist im dritten Stock und hat einen Balkon.',a:['El piso está en la tercera planta y tiene un balcón.','El piso está en el tercer piso y tiene un balcón.','El piso está en la tercera planta y tiene balcón.','El piso está en el tercer piso y tiene balcón.','El apartamento está en la tercera planta y tiene un balcón.']},
 {t:'listen',es:'El piso es muy luminoso y está cerca del metro.',de:'Die Wohnung ist sehr hell und liegt nah an der Metro.'},
 {t:'gap',q:'La cocina ___ pequeña, pero ___ reformada.',a:['es','está'],why:'Eigenschaft → <i>es</i>, Zustand → <i>está</i>.'},
 {t:'tr',de:'Mein Zimmer ist möbliert und hat einen Schreibtisch.',a:['Mi habitación está amueblada y tiene un escritorio.','Mi habitación está amueblada y tiene escritorio.']}
]},
{id:'l2',title:'Das Imperfekt',desc:'buscaba · tenía · era · iba · veía',steps:[
 {t:'info',title:'Imperfekt: Formen',html:`<table><tr><th></th><th>-ar (buscar)</th><th>-er / -ir (tener, vivir)</th></tr>
 <tr><td>yo</td><td class="es-t">buscaba</td><td class="es-t">tenía</td></tr><tr><td>tú</td><td class="es-t">buscabas</td><td class="es-t">tenías</td></tr><tr><td>él / ella / usted</td><td class="es-t">buscaba</td><td class="es-t">tenía</td></tr>
 <tr><td>nosotros/-as</td><td class="es-t">buscábamos</td><td class="es-t">teníamos</td></tr><tr><td>vosotros/-as</td><td class="es-t">buscabais</td><td class="es-t">teníais</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">buscaban</td><td class="es-t">tenían</td></tr></table>
 <p><b>Nur drei Ausnahmen:</b></p>
 <table><tr><th>ser</th><th>ir</th><th>ver</th></tr><tr><td class="es-t">era, eras, era, éramos, erais, eran</td><td class="es-t">iba, ibas, iba, íbamos, ibais, iban</td><td class="es-t">veía, veías, veía, veíamos, veíais, veían</td></tr></table>
 <div class="ex"><span class="es-t">hay → había</span>. Und gute Nachricht: Im Imperfekt gibt es <b>keinen</b> Stammwechsel – <span class="es-t">podía, quería, dormía</span>.</div>`},
 {t:'conj',verb:'trabajar',de:'arbeiten',tense:'Imperfekt',forms:['trabajaba','trabajabas','trabajaba','trabajábamos','trabajabais','trabajaban']},
 {t:'conj',verb:'vivir',de:'wohnen',tense:'Imperfekt',forms:['vivía','vivías','vivía','vivíamos','vivíais','vivían']},
 {t:'conj',verb:'ser',de:'sein',tense:'Imperfekt',forms:['era','eras','era','éramos','erais','eran']},
 {t:'conj',verb:'ir',de:'gehen',tense:'Imperfekt',forms:['iba','ibas','iba','íbamos','ibais','iban']},
 {t:'gap',q:'Antes yo ___ (vivir) en Mannheim y ___ (trabajar) en una consultora.',a:['vivía','trabajaba']},
 {t:'gap',q:'Cuando ___ (ser) niño, ___ (ir) al colegio en bicicleta.',a:['era','iba']},
 {t:'gap',q:'En mi barrio antes ___ (haber) muchas tiendas pequeñas.',a:['había'],why:'hay → <b>había</b>.'},
 {t:'gap',q:'Mis abuelos ___ (ver) la tele todas las noches.',a:['veían']},
 {t:'mc',q:'Imperfekt von „poder“ (yo):',opts:['podía','puedía','pudía'],a:0,why:'Kein Stammwechsel im Imperfekt.'},
 {t:'tr',de:'Früher hatte ich keine Zeit.',a:['Antes no tenía tiempo.','Antes yo no tenía tiempo.']},
 {t:'gap',q:'Antes nosotros ___ (comer) los domingos en casa de mis abuelos.',a:['comíamos']},
 {t:'mc',q:'Imperfekt von „ver“ (ellos):',opts:['veían','vían','veyan'],a:0},
 {t:'listen',es:'Mi abuela vivía en un pueblo pequeño y tenía tres hijos.',de:'Meine Großmutter wohnte in einem kleinen Dorf und hatte drei Kinder.'}
]},
{id:'l3',title:'Früher & heute',desc:'Antes … ahora · Cuando era joven …',steps:[
 {t:'info',title:'Gewohnheiten in der Vergangenheit',html:`<p>Das Imperfekt beschreibt, <b>wie etwas früher war</b> und was man <b>regelmäßig</b> gemacht hat – nicht einzelne, abgeschlossene Ereignisse.</p>
 <table><tr><td class="es-t">antes</td><td class="es-t">Antes iba a la oficina en tren. Ahora voy a la universidad en metro.</td></tr>
 <tr><td class="es-t">cuando era / tenía …</td><td class="es-t">Cuando tenía 10 años, hacía mucho deporte.</td></tr>
 <tr><td class="es-t">a los … años</td><td class="es-t">A los 15 años leía muchos libros.</td></tr>
 <tr><td class="es-t">en los años 70</td><td class="es-t">En los años 70 mis abuelos vivían en un pueblo.</td></tr></table>
 <div class="ex">Typisch ist der Kontrast: <span class="es-t">Antes … – Ahora / Actualmente …</span></div>`},
 {t:'vocab',title:'Veränderungen',items:[['antes','früher'],['ahora / actualmente','jetzt / heutzutage'],['cuando era joven','als ich jung war'],['de pequeño / de pequeña','als Kind'],['el ambiente de trabajo','das Arbeitsklima'],['la flexibilidad de horarios','flexible Arbeitszeiten'],['ergonómico / ergonómica','ergonomisch'],['teletrabajar','im Homeoffice arbeiten'],['cambiar','(sich) ändern'],['mudarse','umziehen']]},
 {t:'gap',q:'Antes la gente no ___ (tener) flexibilidad de horarios. Ahora mucha gente ___ (teletrabajar).',a:['tenía','teletrabaja']},
 {t:'gap',q:'De pequeño yo ___ (levantarse) a las siete.',a:['me levantaba']},
 {t:'mc',q:'Welcher Satz beschreibt eine Gewohnheit von früher?',opts:['Cuando vivía en Mannheim, iba a trabajar en tren.','Ayer fui a trabajar en tren.','Mañana voy a ir en tren.'],a:0},
 {t:'dialog',place:'Plaça del Sol, Gràcia',title:'Wie war Gràcia früher?',scene:'Du sitzt mit der Nachbarin Montse, 74, auf einer Bank und plauderst.',lines:[
  {n:'Montse',es:'Antes este barrio era muy diferente, ¿sabes? No había tantos turistas.',de:'Früher war dieses Viertel ganz anders, weißt du? Es gab nicht so viele Touristen.'},
  {you:true,opts:[{es:'¿Y qué había antes aquí?',ok:true},{es:'¿Y qué hay antes aquí?',ok:false,why:'Vergangenheit → <b>había</b>.'}]},
  {n:'Montse',es:'Pequeñas tiendas, talleres… Todos nos conocíamos. Los niños jugaban en la calle.',de:'Kleine Läden, Werkstätten… Alle kannten sich. Die Kinder spielten auf der Straße.'},
  {you:true,prompt:'Erzähl, wie es bei dir als Kind war.',opts:[{es:'Yo también jugaba mucho en la calle cuando era pequeño.',ok:true},{es:'Yo también juego mucho en la calle cuando era pequeño.',ok:false,why:'Gewohnheit in der Vergangenheit → Imperfekt: <i>jugaba</i>.'},{es:'Yo también jugaba mucho en la calle cuando soy pequeño.',ok:false,why:'„als ich klein war“ → <i>cuando era pequeño</i>.'}]},
  {n:'Montse',es:'¿Y ahora? ¿Te gusta vivir aquí?',de:'Und jetzt? Wohnst du gern hier?'},
  {you:true,opts:[{es:'Sí, me encanta. Antes vivía en una ciudad más tranquila, pero ahora prefiero Barcelona.',ok:true},{es:'Sí, me encanta. Antes viví en una ciudad más tranquila.',ok:false,why:'Ein Zustand über längere Zeit → Imperfekt <i>vivía</i>.'}]},
  {n:'Montse',es:'¡Qué bien! Bienvenido al barrio.',de:'Wie schön! Willkommen im Viertel.'}]},
 {t:'tr',de:'Als ich 15 war, spielte ich Fußball.',a:['Cuando tenía 15 años, jugaba al fútbol.','A los 15 años jugaba al fútbol.','Cuando tenía quince años, jugaba al fútbol.']},
 {t:'tr',de:'Früher wohnte ich in Mannheim, jetzt wohne ich in Barcelona.',a:['Antes vivía en Mannheim, ahora vivo en Barcelona.','Antes vivía en Mannheim y ahora vivo en Barcelona.','Antes yo vivía en Mannheim, ahora vivo en Barcelona.']},
 {t:'mc',q:'Welcher Satz ist richtig?',opts:['Antes trabajaba en Mannheim; ahora estudio en Barcelona.','Antes trabajo en Mannheim; ahora estudiaba en Barcelona.','Antes trabajaré en Mannheim; ahora estudio en Barcelona.'],a:0,why:'Früher (Gewohnheit) → Imperfekt, jetzt → Präsens.'},
 {t:'gap',q:'De pequeña, Laia ___ (tocar) el piano y ___ (ir) a clases de baile.',a:['tocaba','iba']},
 {t:'listen',es:'Antes no había tantos turistas en el barrio.',de:'Früher gab es nicht so viele Touristen im Viertel.'}
]},
{id:'l4',title:'Mengen, Ordnungszahlen & hay que',desc:'la mayoría · un tercio · primer piso · hay que pagar',steps:[
 {t:'info',title:'Über Mengen sprechen',html:`<p>Beispiele aus einer Umfrage unter den Studierenden in Jonas’ Master:</p>
 <table><tr><td class="es-t">(casi) todos/-as</td><td>(fast) alle</td><td class="es-t">Casi todos tienen un portátil.</td></tr>
 <tr><td class="es-t">la mayoría (de)</td><td>die meisten</td><td class="es-t">La mayoría come en la universidad.</td></tr>
 <tr><td class="es-t">la mitad (de)</td><td>die Hälfte</td><td class="es-t">Más de la mitad trabaja los fines de semana.</td></tr>
 <tr><td class="es-t">un tercio (de)</td><td>ein Drittel</td><td class="es-t">Un tercio va a la universidad en bici.</td></tr>
 <tr><td class="es-t">muchos/-as · algunos/-as · pocos/-as</td><td>viele · einige · wenige</td><td class="es-t">Pocos tienen coche.</td></tr>
 <tr><td class="es-t">uno/-a de cada diez</td><td>einer von zehn</td><td class="es-t">Solo uno de cada diez vive con su familia.</td></tr>
 <tr><td class="es-t">(casi) nadie</td><td>(fast) niemand</td><td class="es-t">Casi nadie cocina todos los días.</td></tr></table>
 <div class="ojo">Prozentangaben mit Artikel: <span class="es-t">El 80 % de los estudiantes …</span> / <span class="es-t">Solo un 5 % …</span></div>
 <h3>Ordnungszahlen</h3><p class="es-t">primero/-a · segundo/-a · tercero/-a · cuarto/-a · quinto/-a</p><div class="ojo">Vor männlichen Substantiven: <span class="es-t">el primer piso, el tercer piso</span>.</div>
 <h3>Notwendigkeit</h3><table><tr><td class="es-t">tener que + Inf.</td><td>(ich) muss</td><td class="es-t">Tengo que trabajar mucho.</td></tr><tr><td class="es-t">hay que + Inf.</td><td>man muss</td><td class="es-t">¿Hay que pagar una fianza?</td></tr></table>`},
 {t:'match',q:'Was bedeutet das?',pairs:[['la mitad','die Hälfte'],['la mayoría','die meisten'],['un tercio','ein Drittel'],['casi nadie','fast niemand'],['pocos','wenige']]},
 {t:'gap',q:'Vivo en el ___ (3.) piso y mi oficina está en la ___ (1.) planta.',a:['tercer','primera']},
 {t:'gap',q:'Para alquilar un piso ___ ___ pagar una fianza. (man muss)',a:['hay','que']},
 {t:'mc',q:'„Die meisten Studierenden wohnen in einer WG.“',opts:['La mayoría de los estudiantes vive en un piso compartido.','La mayoría de estudiantes viven en un piso compartido mucho.','Mayoría de los estudiantes vive en un piso compartido.'],a:0},
 {t:'tr',de:'Man muss die Kaution bezahlen.',a:['Hay que pagar la fianza.','Se tiene que pagar la fianza.','Hay que pagar el depósito.']},
 {t:'listen',es:'Más de la mitad de los estudiantes trabaja los fines de semana.',de:'Mehr als die Hälfte der Studierenden arbeitet am Wochenende.'},
 {t:'mc',q:'„Man muss die Kaution vor dem Umzug bezahlen.“',opts:['Hay que pagar la fianza antes de la mudanza.','Hay pagar la fianza antes de la mudanza.','Tiene que hay pagar la fianza antes de la mudanza.'],a:0},
 {t:'gap',q:'Mercè vive en el ___ (5.) piso y su oficina está en la ___ (2.) planta.',a:['quinto','segunda']},
 {t:'tr',de:'Die Hälfte der Studierenden wohnt in Gràcia.',a:['La mitad de los estudiantes vive en Gràcia.','La mitad de los estudiantes viven en Gràcia.']}
]},
{id:'l5',title:'Lesen: La agencia de Nuria',desc:'Text · früher vs. heute',steps:[
 {t:'read',title:'La agencia de Nuria, antes y ahora',intro:'Deine neue Mitbewohnerin Nuria erzählt von ihrer Werbeagentur.',text:`Nuria trabaja en una agencia de publicidad en el Poblenou. Su jefa, Mercè, trabaja allí desde hace veinte años y a veces le cuenta cómo era la agencia antes.

Antes la agencia estaba en un piso pequeño del Eixample y trabajaban allí doce personas. Todos llegaban a las nueve y se iban a las siete o a las ocho. Cada persona tenía su propio {escritorio|Schreibtisch} con un ordenador enorme, y el director estaba en un despacho cerrado. Las reuniones con los clientes eran siempre {presenciales|vor Ort}: los clientes venían a la agencia y todos tomaban café juntos.

Ahora la agencia está en una antigua fábrica y los equipos trabajan en espacios abiertos y {compartidos|geteilt}. La mayoría tiene horarios flexibles y más de la mitad trabaja desde casa dos días a la semana. Muchas reuniones son por videollamada.

Pero no todo es mejor: Nuria a veces no puede {desconectar|abschalten} y lee correos del trabajo por la noche. Y pocos tienen en casa un buen espacio de trabajo: ¡Nuria trabaja en la mesa de la cocina! Por eso la agencia busca un {equilibrio|Gleichgewicht}: hay que ir a la oficina los martes y los jueves, pero los otros días cada uno decide.`,
 de:`Nuria arbeitet in einer Werbeagentur im Poblenou. Ihre Chefin, Mercè, arbeitet dort seit zwanzig Jahren und erzählt ihr manchmal, wie die Agentur früher war.\n\nFrüher war die Agentur in einer kleinen Wohnung im Eixample und dort arbeiteten zwölf Personen. Alle kamen um neun und gingen um sieben oder acht. Jede Person hatte ihren eigenen Schreibtisch mit einem riesigen Computer, und der Direktor saß in einem geschlossenen Büro. Die Besprechungen mit den Kunden waren immer vor Ort: Die Kunden kamen in die Agentur und alle tranken zusammen Kaffee.\n\nJetzt ist die Agentur in einer ehemaligen Fabrik und die Teams arbeiten in offenen, geteilten Räumen. Die meisten haben flexible Arbeitszeiten und mehr als die Hälfte arbeitet zwei Tage pro Woche von zu Hause. Viele Besprechungen finden per Videocall statt.\n\nAber nicht alles ist besser: Nuria kann manchmal nicht abschalten und liest abends Arbeits-E-Mails. Und wenige haben zu Hause einen guten Arbeitsplatz: Nuria arbeitet am Küchentisch! Deshalb sucht die Agentur ein Gleichgewicht: Dienstags und donnerstags muss man ins Büro, an den anderen Tagen entscheidet jeder selbst.`},
 {t:'mc',q:'¿Cómo eran las reuniones antes?',opts:['Siempre presenciales.','Por videollamada.','No había reuniones.'],a:0},
 {t:'mc',q:'¿Qué problema tiene Nuria cuando trabaja en casa?',opts:['A veces no puede desconectar.','Su ordenador es muy viejo.','Su jefa no lo permite.'],a:0},
 {t:'gap',q:'Antes cada persona ___ (tener) su propio escritorio.',a:['tenía']},
 {t:'free',task:'Vergleiche in 5–7 Sätzen dein Leben früher (Wohnort, Schule oder Studium, Arbeit) mit heute. Benutze das Imperfekt für früher und das Präsens für jetzt.',hint:'Antes vivía en … · Cuando trabajaba en …, … · Normalmente iba … · Ahora … · Actualmente …',focus:'Imperfekt (Gewohnheiten früher) vs. Präsens',model:'Antes vivía en Mannheim y estudiaba en la universidad. Cuando trabajaba en una consultora, me levantaba muy temprano e iba a la oficina en tren. Los fines de semana visitaba a mi familia. Ahora vivo en Barcelona y estudio un máster. Actualmente tengo más tiempo libre y voy mucho a la playa. Antes hablaba poco español, pero ahora lo hablo todos los días.'},
 {t:'order',es:'Antes las reuniones eran siempre presenciales.',de:'Früher waren die Besprechungen immer vor Ort.'}
]},
{id:'lr',title:'Hören: Die Wohnungsbesichtigung',desc:'Eine Besichtigung verstehen · früher & heute',steps:[
 {t:'read',hideText:true,title:'Un piso en Gràcia',intro:'Sr. Puig zeigt Jonas ein Zimmer in einer WG in Gràcia. Hör zuerst nur zu.',text:`Sr. Puig: Pase, pase. Este es el piso. Está en la tercera planta. No hay ascensor, pero el edificio es muy tranquilo.
Jonas: ¡Qué luminoso es el salón!
Sr. Puig: Sí, y tiene un balcón. Mire, la cocina está reformada y equipada.
Jonas: ¿Y las habitaciones?
Sr. Puig: Hay tres. Su habitación es la segunda, al lado del baño. Está amueblada: tiene cama, escritorio y un armario.
Jonas: ¿Cuánto cuesta?
Sr. Puig: Cuatrocientos cincuenta euros al mes, con gastos. Hay que pagar un mes de fianza.
Jonas: Perfecto. ¿Y qué tal el barrio?
Sr. Puig: ¡Ah, Gràcia! Yo vivía en esta calle de pequeño. Antes había muchas tiendas pequeñas y talleres, y los niños jugábamos en la plaza. Ahora hay más bares y más turistas, pero todavía es un barrio con mucha vida.`,
 de:`Sr. Puig: Kommen Sie herein. Das ist die Wohnung. Sie ist im dritten Stock. Es gibt keinen Aufzug, aber das Haus ist sehr ruhig.\nJonas: Wie hell das Wohnzimmer ist!\nSr. Puig: Ja, und es hat einen Balkon. Sehen Sie, die Küche ist renoviert und ausgestattet.\nJonas: Und die Zimmer?\nSr. Puig: Es gibt drei. Ihr Zimmer ist das zweite, neben dem Bad. Es ist möbliert: Es hat ein Bett, einen Schreibtisch und einen Schrank.\nJonas: Wie viel kostet es?\nSr. Puig: Vierhundertfünfzig Euro im Monat, mit Nebenkosten. Man muss eine Monatsmiete Kaution zahlen.\nJonas: Perfekt. Und wie ist das Viertel?\nSr. Puig: Ah, Gràcia! Ich habe als Kind in dieser Straße gewohnt. Früher gab es viele kleine Läden und Werkstätten, und wir Kinder spielten auf dem Platz. Jetzt gibt es mehr Bars und mehr Touristen, aber es ist immer noch ein sehr lebendiges Viertel.`},
 {t:'mc',q:'¿En qué planta está el piso?',opts:['En la tercera.','En la planta baja.','En la primera.'],a:0},
 {t:'mc',q:'¿Cómo es la cocina?',opts:['Está reformada y equipada.','Es muy pequeña y oscura.','No tiene ventana.'],a:0},
 {t:'mc',q:'¿Cuánto hay que pagar de fianza?',opts:['Un mes.','Dos meses.','Nada.'],a:0},
 {t:'mc',q:'¿Qué había antes en el barrio, según el Sr. Puig?',opts:['Muchas tiendas pequeñas y talleres.','Muchos bares y turistas.','Un centro comercial.'],a:0},
 {t:'listen',es:'Hay que pagar un mes de fianza.',de:'Man muss eine Monatsmiete Kaution zahlen.'},
 {t:'listen',es:'Antes había muchas tiendas pequeñas.',de:'Früher gab es viele kleine Läden.'},
 {t:'speak',es:'Antes vivía en Sants, pero ahora vivo en Gràcia.',de:'Früher wohnte ich in Sants, aber jetzt wohne ich in Gràcia.'}
]}],
resumen:`<h3>Häuser & Büros</h3><p class="es-t">la oficina · el despacho · la recepción · la cocina · la puerta · la ventana · la terraza · el balcón · el escritorio · la silla · la estantería · el armario · el ascensor · la planta baja · la primera planta</p>
<h3>Beschreiben</h3><table><tr><th>ser</th><th>estar (Zustand)</th><th>estar (Lage)</th></tr><tr><td class="es-t">moderno, tranquilo, luminoso, exterior, caro</td><td class="es-t">en buen estado, reformado, amueblado, limpio</td><td class="es-t">en la zona comercial, cerca de la estación, bien comunicado</td></tr></table>
<h3>Imperfekt</h3><table><tr><td>-ar: -aba, -abas, -aba, -ábamos, -abais, -aban</td></tr><tr><td>-er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían</td></tr><tr><td class="es-t">ser: era … · ir: iba … · ver: veía … · hay → había</td></tr></table>
<p>Für Zustände & Gewohnheiten in der Vergangenheit: <span class="es-t">antes · cuando era joven · a los 15 años · en los años 70</span></p>
<h3>Mengen</h3><p class="es-t">(casi) todos · la mayoría · la mitad · un tercio · muchos · algunos · pocos · uno de cada diez · (casi) nadie · el 95 % de …</p>
<h3>Ordnungszahlen & Notwendigkeit</h3><p class="es-t">primer(o), segundo, tercer(o) · tener que + Inf. · hay que + Inf.</p>`});

/* ================= UNIDAD 10 · LLEGAR A LA META ================= */
COURSE.units.push({id:'u10',n:'10',title:'Mi currículum',sub:'Angaben zur Biografie · berufliche Fähigkeiten · Berufserfahrung · Bewerbung · Vorstellungsgespräch',
goals:['Indefinido regelmäßig (trabajé, aprendí)','Indefinido unregelmäßig (fui, estuve, hice, tuve …)','Zeitangaben: ayer, el año pasado, hace dos años','Biografie erzählen','Perfekt oder Indefinido?','Fähigkeiten: ser / estar / tener / saber','Bewerbung & Vorstellungsgespräch'],
situacion:{title:'Vorstellungsgespräch für ein Praktikum',npc:'Sra. Ferrer',scene:'Videointerview mit Sra. Ferrer, Personalleiterin einer Cybersecurity-Beratung in Barcelona, für ein Praktikum (prácticas) im Bereich IT-Audit.',role:'Du bist Laura Ferrer, Personalleiterin. Führe ein höfliches Vorstellungsgespräch (usted). Frag nach Ausbildung und Lebenslauf (¿Dónde estudió? ¿Cuándo terminó …?), Berufserfahrung (Indefinido & Perfekt: ¿Ha hecho prácticas alguna vez? ¿Qué hizo en su último trabajo?), Stärken, Sprachen und warum er bei euch arbeiten möchte. Stell auch eine Frage wie „¿Por qué quiere dejar su puesto actual?“ – wenn er sagt, er studiert, passe dich an.',goal:'Erzähl deinen Lebenslauf im Indefinido (Ausbildung oder Studium, Jobs oder Praktika, Auslandsaufenthalte, Umzug), nenne deine Stärken und erkläre, warum du das Praktikum willst.'},
lessons:[
{id:'l1',title:'Indefinido: regelmäßig',desc:'trabajé · aprendí · viví',steps:[
 {t:'info',title:'Das Indefinido',html:`<p>Das <b>Indefinido</b> erzählt <b>abgeschlossene Ereignisse</b> in einem abgeschlossenen Zeitraum der Vergangenheit – die Erzählzeit für Biografien.</p>
 <table><tr><th></th><th>-ar (trabajar)</th><th>-er / -ir (aprender, vivir)</th></tr>
 <tr><td>yo</td><td class="es-t">trabajé</td><td class="es-t">aprendí</td></tr><tr><td>tú</td><td class="es-t">trabajaste</td><td class="es-t">aprendiste</td></tr><tr><td>él / ella / usted</td><td class="es-t">trabajó</td><td class="es-t">aprendió</td></tr>
 <tr><td>nosotros/-as</td><td class="es-t">trabajamos</td><td class="es-t">aprendimos</td></tr><tr><td>vosotros/-as</td><td class="es-t">trabajasteis</td><td class="es-t">aprendisteis</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">trabajaron</td><td class="es-t">aprendieron</td></tr></table>
 <div class="ojo">Der Akzent ist wichtig: <span class="es-t">trabajo</span> (ich arbeite) ≠ <span class="es-t">trabajó</span> (er arbeitete).</div>
 <p><b>Zeitangaben:</b> <span class="es-t">ayer · anoche · el año pasado · la semana pasada · en 2019 · hace dos años · en diciembre · por última vez</span></p>
 <div class="ex">Schreibweise ändert sich, damit die Aussprache bleibt: <span class="es-t">buscar → busqué · empezar → empecé · llegar → llegué</span></div>`},
 {t:'conj',verb:'trabajar',de:'arbeiten',tense:'Indefinido',forms:['trabajé','trabajaste','trabajó','trabajamos','trabajasteis','trabajaron']},
 {t:'conj',verb:'vivir',de:'wohnen',tense:'Indefinido',forms:['viví','viviste','vivió','vivimos','vivisteis','vivieron']},
 {t:'gap',q:'Ayer ___ (yo, trabajar) hasta las ocho.',a:['trabajé']},
 {t:'gap',q:'El año pasado mis padres ___ (viajar) a México.',a:['viajaron']},
 {t:'gap',q:'¿Cuándo ___ (tú, terminar) tus estudios?',a:['terminaste']},
 {t:'gap',q:'En 2023 ___ (yo, empezar) a trabajar en una consultora.',a:['empecé'],why:'empezar → <b>empecé</b> (z → c vor e).'},
 {t:'mc',q:'„Er lernte Spanisch in Granada.“',opts:['Aprendió español en Granada.','Aprendío español en Granada.','Aprendo español en Granada.'],a:0},
 {t:'tr',de:'Ich wohnte drei Monate in London.',a:['Viví tres meses en Londres.','Yo viví tres meses en Londres.','Viví en Londres tres meses.']},
 {t:'listen',es:'Ayer trabajé hasta tarde y cené en casa.',de:'Gestern habe ich bis spät gearbeitet und zu Hause zu Abend gegessen.'},
 {t:'gap',q:'Ayer ___ (yo, llegar) tarde a clase y ___ (buscar) mi libro una hora.',a:['llegué','busqué'],why:'llegar → <b>llegué</b>, buscar → <b>busqué</b>.'},
 {t:'mc',q:'„Letztes Jahr haben wir viel gelernt.“',opts:['El año pasado aprendimos mucho.','El año pasado aprendemos mucho.','El año pasado aprendió mucho.'],a:0,why:'Abgeschlossener Zeitraum → Indefinido, nosotros: <i>aprendimos</i>.'}
]},
{id:'l2',title:'Indefinido: unregelmäßig',desc:'fui · estuve · hice · tuve · pude',steps:[
 {t:'info',title:'Die wichtigsten unregelmäßigen Formen',html:`<table><tr><th>ser / ir</th><th>estar</th><th>tener</th><th>hacer</th></tr>
 <tr><td class="es-t">fui</td><td class="es-t">estuve</td><td class="es-t">tuve</td><td class="es-t">hice</td></tr>
 <tr><td class="es-t">fuiste</td><td class="es-t">estuviste</td><td class="es-t">tuviste</td><td class="es-t">hiciste</td></tr>
 <tr><td class="es-t">fue</td><td class="es-t">estuvo</td><td class="es-t">tuvo</td><td class="es-t">hizo</td></tr>
 <tr><td class="es-t">fuimos</td><td class="es-t">estuvimos</td><td class="es-t">tuvimos</td><td class="es-t">hicimos</td></tr>
 <tr><td class="es-t">fuisteis</td><td class="es-t">estuvisteis</td><td class="es-t">tuvisteis</td><td class="es-t">hicisteis</td></tr>
 <tr><td class="es-t">fueron</td><td class="es-t">estuvieron</td><td class="es-t">tuvieron</td><td class="es-t">hicieron</td></tr></table>
 <p><b>Gleiches Muster</b> (Stamm + -e, -iste, -o, -imos, -isteis, -ieron, <b>ohne Akzent</b>):</p>
 <table><tr><td class="es-t">poder → pud-</td><td class="es-t">poner → pus-</td><td class="es-t">querer → quis-</td><td class="es-t">venir → vin-</td></tr><tr><td class="es-t">decir → dij- (dijeron)</td><td class="es-t">producir → produj-</td><td class="es-t">dar → di, diste, dio</td><td class="es-t">ver → vi, viste, vio</td></tr></table>
 <div class="ojo"><b>ser</b> und <b>ir</b> haben im Indefinido die gleichen Formen – der Kontext entscheidet: <span class="es-t">Fue un día genial</span> (ser) / <span class="es-t">Fue a Madrid</span> (ir). <span class="es-t">hay → hubo</span>.</div>`},
 {t:'conj',verb:'ser / ir',de:'sein / gehen',tense:'Indefinido',forms:['fui','fuiste','fue','fuimos','fuisteis','fueron']},
 {t:'conj',verb:'tener',de:'haben',tense:'Indefinido',forms:['tuve','tuviste','tuvo','tuvimos','tuvisteis','tuvieron']},
 {t:'conj',verb:'hacer',de:'machen',tense:'Indefinido',forms:['hice','hiciste','hizo','hicimos','hicisteis','hicieron']},
 {t:'gap',q:'El año pasado ___ (yo, estar) tres meses en Londres y ___ (hacer) un proyecto para mi empresa.',a:['estuve','hice']},
 {t:'gap',q:'¿Qué ___ (tú, hacer) ayer? – ___ (ir) al cine con Laia.',a:['hiciste','Fui']},
 {t:'gap',q:'No ___ (yo, poder) ir a la reunión porque ___ (tener) un problema.',a:['pude','tuve']},
 {t:'gap',q:'Mis amigos ___ (venir) a Barcelona en octubre.',a:['vinieron']},
 {t:'mc',q:'Indefinido von „decir“ (ellos):',opts:['dijeron','dijieron','decieron'],a:0,why:'Nach <b>j</b> fällt das i weg: <i>dijeron, produjeron</i>.'},
 {t:'match',q:'Infinitiv und Form (yo)',pairs:[['poner','puse'],['querer','quise'],['dar','di'],['ver','vi'],['venir','vine'],['decir','dije']]},
 {t:'tr',de:'Es war ein sehr schöner Tag.',a:['Fue un día muy bonito.','Fue un día precioso.']},
 {t:'listen',es:'El verano pasado fuimos a Granada y estuvimos tres días allí.',de:'Letzten Sommer sind wir nach Granada gefahren und waren drei Tage dort.'},
 {t:'tr',de:'Gestern hatte ich keine Zeit.',a:['Ayer no tuve tiempo.','Ayer yo no tuve tiempo.']}
]},
{id:'l3',title:'Eine Biografie erzählen',desc:'Nací en … · A los 10 años … · Hace un mes …',steps:[
 {t:'vocab',title:'Biografie',items:[['nacer (nací)','geboren werden (ich wurde geboren)'],['mudarse (nos mudamos)','umziehen (wir zogen um)'],['ir a la escuela / al colegio','zur Schule gehen'],['terminar el instituto','das Abitur machen / die Schule beenden'],['hacer un intercambio','einen Austausch machen'],['estudiar … en …','… in … studieren'],['empezar a trabajar','anfangen zu arbeiten'],['hace dos años','vor zwei Jahren'],['dos años después','zwei Jahre später'],['desde 2023','seit 2023']]},
 {t:'info',title:'Biografie: typische Sätze',html:`<table><tr><td class="es-t">Nací en Bilbao en 1999.</td></tr><tr><td class="es-t">A los 8 años nos mudamos a Zaragoza.</td></tr><tr><td class="es-t">Fui al colegio de 2005 a 2017.</td></tr><tr><td class="es-t">En 2015 hice un intercambio en Irlanda.</td></tr><tr><td class="es-t">Terminé el instituto dos años después.</td></tr><tr><td class="es-t">Hace un mes empecé a trabajar.</td></tr><tr><td class="es-t">Desde 2024 trabajo en una agencia. <span class="muted">(dauert an → Präsens!)</span></td></tr></table>
 <div class="ojo"><b>hace</b> + Zeitraum = vor: <span class="es-t">hace tres años</span>. <b>desde</b> = seit (mit Präsens, wenn es noch andauert).</div>`},
 {t:'read',title:'Bicicletas Ortega: una empresa con historia',text:`Teresa Ortega {nació|wurde geboren} en 1930 en un pueblo de Aragón. En 1952 se mudó a Barcelona y abrió con su marido un pequeño taller de bicicletas en Gràcia. Al principio reparó las bicis de los vecinos del barrio, pero pronto empezó a fabricar sus propias bicicletas.

En 1968 la empresa hizo su modelo más famoso, la «Golondrina»: una bici sencilla, barata y muy bonita. Muchos jóvenes la compraron y muchos {viajeros|Reisende} recorrieron la costa con ella.

En 1979 Teresa dejó la empresa a su hija Pilar. Pilar llevó la fábrica a las afueras de la ciudad y en 2010 fabricó la primera bicicleta eléctrica de la marca. En 2021 la empresa vendió por primera vez más de veinte mil bicicletas. Hoy {exporta|exportiert} a muchos países: fuera de España, su mercado principal es Alemania.`,
 de:`Teresa Ortega wurde 1930 in einem Dorf in Aragonien geboren. 1952 zog sie nach Barcelona und eröffnete mit ihrem Mann eine kleine Fahrradwerkstatt in Gràcia. Am Anfang reparierte sie die Fahrräder der Nachbarn im Viertel, aber bald begann sie, eigene Fahrräder zu bauen.\n\n1968 brachte die Firma ihr berühmtestes Modell heraus, die „Golondrina“ (Schwalbe): ein einfaches, günstiges und sehr schönes Rad. Viele junge Leute kauften es und viele Reisende fuhren damit die Küste entlang.\n\n1979 übergab Teresa die Firma an ihre Tochter Pilar. Pilar verlegte die Fabrik an den Stadtrand und baute 2010 das erste E-Bike der Marke. 2021 verkaufte die Firma zum ersten Mal mehr als zwanzigtausend Fahrräder. Heute exportiert sie in viele Länder: Außerhalb Spaniens ist Deutschland ihr wichtigster Markt.`},
 {t:'match',q:'Ordne die Jahreszahlen zu',pairs:[['1952','Teresa abrió un taller en Gràcia.'],['1979','Teresa dejó la empresa a su hija.'],['2010','Pilar fabricó la primera bici eléctrica.'],['2021','Vendió más de 20 000 bicicletas.']]},
 {t:'gap',q:'Teresa ___ (abrir) un taller y ___ (reparar) las bicis de los vecinos.',a:['abrió','reparó']},
 {t:'order',es:'Hace tres años empecé a trabajar en una consultora.',de:'Vor drei Jahren habe ich angefangen, in einer Beratung zu arbeiten.'},
 {t:'tr',de:'Ich wurde in Deutschland geboren.',a:['Nací en Alemania.','Yo nací en Alemania.']},
 {t:'tr',de:'Vor ein paar Monaten bin ich nach Barcelona gezogen.',a:['Hace unos meses me mudé a Barcelona.','Me mudé a Barcelona hace unos meses.','Hace algunos meses me mudé a Barcelona.']},
 {t:'mc',q:'„vor zwei Jahren“ heißt …',opts:['hace dos años','desde dos años','dos años después'],a:0},
 {t:'gap',q:'Pablo nació en Sevilla y a los 18 años ___ (terminar) el instituto.',a:['terminó']},
 {t:'listen',es:'En 2023 empecé a trabajar en una consultora.',de:'2023 habe ich angefangen, in einer Beratungsfirma zu arbeiten.'},
 {t:'speak',es:'Nací en Mannheim. Estudié Informática y trabajé tres años en una consultora.',de:'Ich bin in Mannheim geboren. Ich habe Informatik studiert und drei Jahre in einer Beratungsfirma gearbeitet.'}
]},
{id:'l4',title:'Perfekt oder Indefinido?',desc:'He hecho … / Hice …',steps:[
 {t:'info',title:'Perfekt oder Indefinido?',html:`<table><tr><th>Perfekt (he hecho)</th><th>Indefinido (hice)</th></tr>
 <tr><td>Zeitraum <b>noch nicht abgeschlossen</b>: <span class="es-t">hoy, esta semana, este mes, este año</span></td><td>Zeitraum <b>abgeschlossen</b>: <span class="es-t">ayer, la semana pasada, en 2019, hace dos años</span></td></tr>
 <tr><td>Zeitpunkt egal / Erfahrung: <span class="es-t">alguna vez, ya, todavía no, nunca, últimamente</span></td><td>konkreter Zeitpunkt: <span class="es-t">en diciembre, el lunes, por última vez</span></td></tr></table>
 <div class="ex"><span class="es-t">– ¿Has hecho unas prácticas alguna vez? – Sí, hice unas prácticas en una empresa de software hace dos años.</span><br><span class="es-t">– ¿Cuándo hiciste una presentación por última vez? – Hice una la semana pasada. / He hecho una hoy por la mañana.</span></div>
 <div class="ojo">In Lateinamerika (und Teilen Spaniens) verwendet man oft auch bei „hoy“ das Indefinido. Für den Kurs gilt die Regel oben.</div>`},
 {t:'mc',q:'Hoy ___ mucho.',opts:['he trabajado','trabajé'],a:0,keep:true,why:'<i>hoy</i> = Zeitraum noch nicht vorbei → Perfekt.'},
 {t:'mc',q:'Ayer ___ al médico.',opts:['fui','he ido'],a:0,keep:true,why:'<i>ayer</i> = abgeschlossen → Indefinido.'},
 {t:'mc',q:'¿___ alguna vez en México?',opts:['Has estado','Estuviste'],a:0,keep:true,why:'Erfahrung ohne Zeitpunkt (<i>alguna vez</i>) → Perfekt.'},
 {t:'mc',q:'En 2025 ___ tres meses en Londres.',opts:['estuve','he estado'],a:0,keep:true},
 {t:'mc',q:'Esta semana ___ dos exámenes.',opts:['he tenido','tuve'],a:0,keep:true},
 {t:'mc',q:'La semana pasada ___ una película muy buena.',opts:['vi','he visto'],a:0,keep:true},
 {t:'gap',q:'– ¿Has hecho prácticas alguna vez? – Sí, ___ (hacer) unas prácticas en una empresa hace tres años.',a:['hice']},
 {t:'gap',q:'Todavía no ___ ___ (yo, ver) el Camp Nou.',a:['he','visto']},
 {t:'tr',de:'Vor drei Jahren habe ich meinen Bachelor abgeschlossen.',a:['Hace tres años terminé mi grado.','Hace tres años terminé el grado.','Hace tres años terminé mis estudios.','Hace tres años terminé mi bachelor.','Hace tres años terminé la carrera.','Hace tres años terminé mi carrera.','Terminé mi grado hace tres años.','Terminé la carrera hace tres años.']},
 {t:'listen',es:'Este año he viajado mucho, pero el año pasado no viajé nada.',de:'Dieses Jahr bin ich viel gereist, aber letztes Jahr bin ich gar nicht gereist.'}
]},
{id:'l5',title:'Bewerbung & Vorstellungsgespräch',desc:'Soy organizado · Tengo experiencia en … · Sé trabajar en equipo',steps:[
 {t:'vocab',title:'Bewerbung',items:[['el currículum (CV)','der Lebenslauf'],['la carta de presentación','das Anschreiben'],['el puesto','die Stelle'],['las prácticas','das Praktikum'],['la oferta de trabajo','das Stellenangebot'],['el proceso de selección','das Auswahlverfahren'],['la entrevista','das Vorstellungsgespräch'],['los puntos fuertes','die Stärken'],['estar acostumbrado/-a a …','an … gewöhnt sein'],['estar dispuesto/-a a …','bereit sein zu …'],['tener conocimientos de …','Kenntnisse in … haben'],['saber trabajar en equipo','im Team arbeiten können']]},
 {t:'info',title:'Fähigkeiten beschreiben',html:`<table><tr><th>ser</th><th>estar</th><th>tener</th><th>saber</th></tr>
 <tr><td class="es-t">amable · comunicativo/-a · organizado/-a · trabajador/-a · creativo/-a · capaz de …</td><td class="es-t">dispuesto/-a a viajar · acostumbrado/-a a … · interesado/-a en aprender</td><td class="es-t">mucha experiencia · nivel alto de inglés · conocimientos de …</td><td class="es-t">idiomas · trabajar en equipo · convencer</td></tr></table>
 <h3>Im Anschreiben</h3><p class="es-t">En relación con la oferta publicada en … · Les envío mi currículum con el objetivo de participar en el proceso de selección. · Considero que mi experiencia es adecuada para el puesto. · Quedo a su disposición para una entrevista. · Atentamente,</p>
 <h3>Im Gespräch</h3><table><tr><td class="es-t">¿Cuáles son sus puntos fuertes?</td><td class="es-t">Soy una persona organizada y acostumbrada a …</td></tr><tr><td class="es-t">¿Por qué quiere trabajar en nuestra empresa?</td><td class="es-t">Quiero ser parte de un buen equipo de trabajo.</td></tr></table>`},
 {t:'mc',q:'Ich bin bereit zu reisen.',opts:['Estoy dispuesto a viajar.','Soy dispuesto a viajar.','Tengo dispuesto a viajar.'],a:0},
 {t:'mc',q:'Ich habe Kenntnisse in Python.',opts:['Tengo conocimientos de Python.','Sé conocimientos de Python.','Estoy conocimientos de Python.'],a:0},
 {t:'gap',q:'___ una persona muy organizada y ___ acostumbrado a trabajar en equipo.',a:['Soy','estoy']},
 {t:'dialog',place:'Entrevista online',title:'Das Vorstellungsgespräch',scene:'Videointerview für ein Praktikum im Bereich IT-Audit in Barcelona.',lines:[
  {n:'Sra. Ferrer',es:'Buenos días, señor Gross. Cuénteme un poco sobre su formación.',de:'Guten Morgen, Herr Gross. Erzählen Sie mir ein wenig über Ihre Ausbildung.'},
  {you:true,opts:[{es:'Estudié Informática en Mannheim y terminé el grado en 2023.',ok:true},{es:'Estudio Informática en Mannheim y terminé el grado en 2023 hace.',ok:false,why:'Abgeschlossenes Studium → Indefinido <i>estudié</i>; „hace“ passt hier nicht.'},{es:'He estudiado Informática en Mannheim en 2023.',ok:false,why:'Mit Jahreszahl (abgeschlossen) → Indefinido.'}]},
  {n:'Sra. Ferrer',es:'¿Y tiene experiencia profesional?',de:'Und haben Sie Berufserfahrung?'},
  {you:true,opts:[{es:'Sí, trabajé tres años en una consultora como analista. En 2025 estuve tres meses en Londres.',ok:true},{es:'Sí, trabajaba tres años en una consultora. En 2025 estaba tres meses en Londres.',ok:false,why:'Abgeschlossener Zeitraum mit Dauer (tres años, tres meses) → Indefinido: <i>trabajé, estuve</i>.'}]},
  {n:'Sra. Ferrer',es:'Muy interesante. ¿Cuáles son sus puntos fuertes?',de:'Sehr interessant. Was sind Ihre Stärken?'},
  {you:true,opts:[{es:'Soy organizado, sé trabajar en equipo y estoy acostumbrado a hablar con clientes.',ok:true},{es:'Estoy organizado, sé trabajar en equipo y soy acostumbrado a hablar con clientes.',ok:false,why:'Charakter → <i>soy organizado</i>; Gewohnheit → <i>estoy acostumbrado</i>.'}]},
  {n:'Sra. Ferrer',es:'¿Y por qué quiere hacer las prácticas con nosotros?',de:'Und warum möchten Sie das Praktikum bei uns machen?'},
  {you:true,opts:[{es:'Porque me interesa mucho la ciberseguridad y quiero ser parte de un buen equipo.',ok:true},{es:'Porque me interesan mucho la ciberseguridad.',ok:false,why:'<i>la ciberseguridad</i> ist Singular → <i>me interesa</i>.'}]},
  {n:'Sra. Ferrer',es:'Perfecto. Le escribiremos la próxima semana. ¡Muchas gracias!',de:'Perfekt. Wir schreiben Ihnen nächste Woche. Vielen Dank!'}]},
 {t:'free',task:'Schreib eine kurze Bewerbung (6–8 Sätze) für ein Praktikum bei einer Tech-Firma in Barcelona: wer du bist, was du studiert und gearbeitet hast (Indefinido), deine Stärken und warum du dich bewirbst.',hint:'Estimados señores: · En relación con la oferta publicada en … · Estudié … · De 2023 a 2026 trabajé … · Soy … / Estoy acostumbrado a … / Tengo conocimientos de … · Quedo a su disposición … · Atentamente, Jonas Gross',focus:'Indefinido, Fähigkeiten mit ser/estar/tener/saber, formelles Anschreiben',model:'Estimados señores: En relación con la oferta de prácticas publicada en su página web, les envío mi currículum. Estudié Informática en Mannheim y terminé el grado en 2023. De 2023 a 2026 trabajé en una consultora como analista de sistemas y en 2025 estuve tres meses en Londres. Ahora estudio un máster en Barcelona. Soy una persona organizada y comunicativa, sé trabajar en equipo y tengo conocimientos de redes y ciberseguridad. Considero que mi experiencia es adecuada para el puesto. Quedo a su disposición para una entrevista. Atentamente, Jonas Gross'},
 {t:'mc',q:'Im Vorstellungsgespräch: „¿Cuáles son sus puntos fuertes?“ Welche Antwort passt?',opts:['Soy una persona comunicativa y sé trabajar en equipo.','Mis puntos fuertes son el lunes y el martes.','Tengo un hermano y dos primos.'],a:0},
 {t:'order',es:'Tengo conocimientos de redes y ciberseguridad.',de:'Ich habe Kenntnisse in Netzwerken und Cybersicherheit.'},
 {t:'tr',de:'Ich bin bereit, im Ausland zu arbeiten.',a:['Estoy dispuesto a trabajar en el extranjero.','Estoy dispuesta a trabajar en el extranjero.']}
]},
{id:'lr',title:'Hören: Nurias Lebenslauf',desc:'Eine Biografie im Indefinido verstehen',steps:[
 {t:'read',hideText:true,title:'¿Cómo llegaste a Barcelona?',intro:'Jonas fragt Nuria, wie sie nach Barcelona gekommen ist. Hör zuerst nur zu.',text:`Jonas: Nuria, ¿y tú cómo llegaste a Barcelona?
Nuria: Uf, es una historia larga. Nací en Valencia, en el barrio de Benimaclet. A los dieciséis años hice un intercambio en Irlanda: estuve tres meses en Dublín y aprendí mucho inglés.
Jonas: ¿Y después?
Nuria: Después estudié Publicidad en Valencia. Terminé la carrera en 2023 y empecé a trabajar en una agencia pequeña. Fue una época difícil, pero aprendí muchísimo.
Jonas: ¿Y cuándo viniste a Barcelona?
Nuria: Hace un año vi una oferta de trabajo de mi agencia actual. Hice la entrevista por videollamada y me dieron el puesto. ¡Me mudé en dos semanas!
Jonas: ¿Y te gusta más Barcelona que Valencia?
Nuria: Me encanta Barcelona, pero a veces pienso en la playa de Valencia… y en la paella de mi madre.`,
 de:`Jonas: Nuria, und wie bist du nach Barcelona gekommen?\nNuria: Puh, das ist eine lange Geschichte. Ich bin in Valencia geboren, im Viertel Benimaclet. Mit sechzehn habe ich einen Austausch in Irland gemacht: Ich war drei Monate in Dublin und habe viel Englisch gelernt.\nJonas: Und danach?\nNuria: Danach habe ich in Valencia Werbung studiert. 2023 habe ich das Studium abgeschlossen und angefangen, in einer kleinen Agentur zu arbeiten. Es war eine schwierige Zeit, aber ich habe sehr viel gelernt.\nJonas: Und wann bist du nach Barcelona gekommen?\nNuria: Vor einem Jahr habe ich ein Stellenangebot meiner jetzigen Agentur gesehen. Ich habe das Vorstellungsgespräch per Videocall gemacht und sie haben mir die Stelle gegeben. Ich bin in zwei Wochen umgezogen!\nJonas: Und gefällt dir Barcelona besser als Valencia?\nNuria: Ich liebe Barcelona, aber manchmal denke ich an den Strand von Valencia … und an die Paella meiner Mutter.`},
 {t:'mc',q:'¿Dónde nació Nuria?',opts:['En Valencia.','En Barcelona.','En Dublín.'],a:0},
 {t:'mc',q:'¿Qué hizo Nuria a los dieciséis años?',opts:['Hizo un intercambio en Irlanda.','Empezó a trabajar en una agencia.','Se mudó a Barcelona.'],a:0},
 {t:'mc',q:'¿Cuándo terminó la carrera?',opts:['En 2023.','Hace un año.','En 2019.'],a:0},
 {t:'mc',q:'¿Cómo consiguió Nuria el puesto en Barcelona?',opts:['Vio una oferta e hizo la entrevista por videollamada.','Su madre trabaja en la agencia.','Hizo unas prácticas en la agencia.'],a:0},
 {t:'listen',es:'Terminé la carrera en 2023.',de:'2023 habe ich das Studium abgeschlossen.'},
 {t:'listen',es:'Hace un año vi una oferta de trabajo.',de:'Vor einem Jahr habe ich ein Stellenangebot gesehen.'},
 {t:'speak',es:'Nací en Alemania y hace unos meses me mudé a Barcelona.',de:'Ich bin in Deutschland geboren und vor ein paar Monaten nach Barcelona gezogen.'}
]}],
resumen:`<h3>Biografie</h3><p class="es-t">Nací en … · A los 8 años nos mudamos a … · Fui al colegio de … a … · En 2015 hice un intercambio. · Terminé el instituto dos años después. · Hace un mes empecé a trabajar.</p>
<h3>Indefinido – regelmäßig</h3><table><tr><td>-ar: -é, -aste, -ó, -amos, -asteis, -aron</td></tr><tr><td>-er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron</td></tr></table>
<h3>Indefinido – unregelmäßig</h3><table><tr><td class="es-t">ser/ir: fui, fuiste, fue, fuimos, fuisteis, fueron</td></tr><tr><td class="es-t">estar: estuve · tener: tuve · hacer: hice/hizo · poder: pude · poner: puse · querer: quise · venir: vine · decir: dije/dijeron · dar: di · ver: vi · hay → hubo</td></tr></table>
<h3>Perfekt oder Indefinido?</h3><table><tr><td><b>Perfekt</b>: hoy, esta semana, este año · alguna vez, ya, todavía no, nunca</td></tr><tr><td><b>Indefinido</b>: ayer, la semana pasada, en 2019, hace dos años, en diciembre, por última vez</td></tr></table>
<h3>Fähigkeiten</h3><p class="es-t">ser organizado/comunicativo · estar dispuesto a / acostumbrado a · tener experiencia / conocimientos de · saber idiomas / trabajar en equipo</p>
<h3>Bewerbung</h3><p class="es-t">En relación con la oferta publicada en … · Les envío mi currículum … · Considero que mi experiencia es adecuada para el puesto. · Quedo a su disposición … · Atentamente,</p>`});
