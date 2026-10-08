/* ================= UNIDAD 9 · MOMENTO DE CAMBIOS ================= */
COURSE.units.push({id:'u9',n:'9',title:'Momento de cambios',sub:'Häuser & Büros beschreiben · Notwendigkeit ausdrücken · über Gewohnheiten in der Vergangenheit sprechen · Veränderungen · Mengen',
goals:['Wohnung & Büro: Räume, Möbel, Stockwerke','Zustand & Lage beschreiben','Imperfekt (buscaba, tenía)','ser, ir, ver im Imperfekt','antes / cuando era … / a los … años','Mengenangaben (la mitad, la mayoría …)','Ordnungszahlen','hay que / tener que + Infinitiv'],
situacion:{title:'Wohnungsbesichtigung in Gràcia',npc:'Sr. Puig',scene:'Du besichtigst ein Zimmer bzw. eine kleine Wohnung in Gràcia. Der Vermieter, Sr. Puig, zeigt dir alles.',role:'Du bist Sr. Puig, ein älterer Vermieter aus Barcelona, freundlich und gesprächig. Du siezt Jonas. Du beschreibst die Wohnung (3. Stock, kein Aufzug, hell, renoviert, Küche ausgestattet, Balkon, nah an der Metro Fontana, 850 € + Nebenkosten, 2 Monatsmieten Kaution). Erzähl auch nostalgisch, wie das Viertel früher war (Imperfekt: antes había…, la gente…, yo vivía…).',goal:'Frag nach Lage, Stockwerk, Zustand, Preis und Kaution (¿Hay que pagar fianza?), und reagiere auf seine Erzählung über früher, indem du erzählst, wie es früher bei dir war (Imperfekt).'},
lessons:[
{id:'l1',title:'Wohnung & Büro beschreiben',desc:'la planta baja · está reformado · es luminoso',steps:[
 {t:'vocab',title:'Räume & Teile',items:[['la habitación','das Zimmer'],['el despacho','das Büro (Raum)'],['la cocina','die Küche'],['el baño / el servicio','das Bad / die Toilette'],['la recepción','der Empfang'],['la puerta','die Tür'],['la ventana','das Fenster'],['la pared','die Wand'],['la terraza','die Terrasse'],['el balcón','der Balkon'],['el ascensor','der Aufzug'],['la planta baja','das Erdgeschoss'],['la primera / segunda planta','der erste / zweite Stock']]},
 {t:'vocab',title:'Möbel',items:[['el escritorio','der Schreibtisch'],['la mesa','der Tisch'],['la silla','der Stuhl'],['la estantería','das Regal'],['el armario','der Schrank'],['la lámpara','die Lampe'],['el sofá','das Sofa'],['la cama','das Bett']]},
 {t:'info',title:'Beschreiben: ser oder estar?',html:`<table><tr><th>ser – Eigenschaft</th><th>estar – Zustand</th><th>estar – Lage</th></tr>
 <tr><td class="es-t">Es moderno / antiguo.</td><td class="es-t">Está en buen estado.</td><td class="es-t">Está en un edificio de oficinas.</td></tr>
 <tr><td class="es-t">Es tranquilo / luminoso.</td><td class="es-t">Está reformado.</td><td class="es-t">Está en la zona comercial.</td></tr>
 <tr><td class="es-t">Es exterior / interior.</td><td class="es-t">Está amueblado.</td><td class="es-t">Está cerca de la estación.</td></tr>
 <tr><td class="es-t">Es barato / caro.</td><td class="es-t">Está limpio.</td><td class="es-t">Está bien comunicado.</td></tr></table>
 <div class="ex">Gleiches Adjektiv, andere Bedeutung: <span class="es-t">El piso es limpio</span> klingt komisch – Sauberkeit ist ein Zustand: <span class="es-t">El piso está limpio.</span></div>`},
 {t:'mc',q:'El piso ___ muy luminoso.',opts:['es','está'],a:0,keep:true,why:'Eigenschaft der Wohnung → <b>ser</b>.'},
 {t:'mc',q:'La cocina ___ equipada.',opts:['está','es'],a:0,keep:true,why:'Zustand (ausgestattet) → <b>estar</b>.'},
 {t:'mc',q:'La oficina ___ cerca de la estación.',opts:['está','es','hay'],a:0,keep:true},
 {t:'gap',q:'Mi habitación ___ exterior y ___ amueblada.',a:['es','está']},
 {t:'match',q:'Wohin gehört das?',pairs:[['la cama','la habitación'],['el escritorio','el despacho'],['la ducha','el baño'],['el sofá','el salón'],['la nevera','la cocina']]},
 {t:'tr',de:'Die Wohnung ist im dritten Stock und hat einen Balkon.',a:['El piso está en la tercera planta y tiene un balcón.','El piso está en el tercer piso y tiene un balcón.','El piso está en la tercera planta y tiene balcón.','El piso está en el tercer piso y tiene balcón.']}
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
 {t:'tr',de:'Früher hatte ich keine Zeit.',a:['Antes no tenía tiempo.','Antes yo no tenía tiempo.']}
]},
{id:'l3',title:'Früher & heute',desc:'Antes … ahora · Cuando era joven …',steps:[
 {t:'info',title:'Gewohnheiten in der Vergangenheit',html:`<p>Das Imperfekt beschreibt, <b>wie etwas früher war</b> und was man <b>regelmäßig</b> gemacht hat – nicht einzelne, abgeschlossene Ereignisse.</p>
 <table><tr><td class="es-t">antes</td><td class="es-t">Antes iba a comer con mis compañeras. Ahora como sola.</td></tr>
 <tr><td class="es-t">cuando era / tenía …</td><td class="es-t">Cuando tenía 10 años, hacía mucho deporte.</td></tr>
 <tr><td class="es-t">a los … años</td><td class="es-t">A los 15 años leía muchos libros.</td></tr>
 <tr><td class="es-t">en los años 70</td><td class="es-t">En los años 70 la gente se quedaba mucho tiempo en la misma empresa.</td></tr></table>
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
 {t:'tr',de:'Früher wohnte ich in Mannheim, jetzt wohne ich in Barcelona.',a:['Antes vivía en Mannheim, ahora vivo en Barcelona.','Antes vivía en Mannheim y ahora vivo en Barcelona.','Antes yo vivía en Mannheim, ahora vivo en Barcelona.']}
]},
{id:'l4',title:'Mengen, Ordnungszahlen & hay que',desc:'la mayoría · un tercio · primer piso · hay que pagar',steps:[
 {t:'info',title:'Über Mengen sprechen',html:`<table><tr><td class="es-t">(casi) todos/-as</td><td>(fast) alle</td><td class="es-t">Casi todos prefieren trabajar en remoto.</td></tr>
 <tr><td class="es-t">la mayoría (de)</td><td>die meisten</td><td class="es-t">La mayoría trabaja en una oficina.</td></tr>
 <tr><td class="es-t">la mitad (de)</td><td>die Hälfte</td><td class="es-t">Más de la mitad se ha mudado una vez.</td></tr>
 <tr><td class="es-t">un tercio (de)</td><td>ein Drittel</td><td class="es-t">Un tercio prefiere ir a la oficina.</td></tr>
 <tr><td class="es-t">muchos/-as · algunos/-as · pocos/-as</td><td>viele · einige · wenige</td><td class="es-t">Pocos pueden separar la vida privada.</td></tr>
 <tr><td class="es-t">uno/-a de cada diez</td><td>einer von zehn</td><td class="es-t">Solo una de cada diez españolas teletrabajaba.</td></tr>
 <tr><td class="es-t">(casi) nadie</td><td>(fast) niemand</td><td class="es-t">Casi nadie tiene un espacio adecuado.</td></tr></table>
 <div class="ojo">Prozentangaben mit Artikel: <span class="es-t">El 95 % de los trabajadores …</span> / <span class="es-t">Solo un 5 % …</span></div>
 <h3>Ordnungszahlen</h3><p class="es-t">primero/-a · segundo/-a · tercero/-a · cuarto/-a · quinto/-a</p><div class="ojo">Vor männlichen Substantiven: <span class="es-t">el primer piso, el tercer piso</span>.</div>
 <h3>Notwendigkeit</h3><table><tr><td class="es-t">tener que + Inf.</td><td>(ich) muss</td><td class="es-t">Tengo que trabajar mucho.</td></tr><tr><td class="es-t">hay que + Inf.</td><td>man muss</td><td class="es-t">¿Hay que pagar una fianza?</td></tr></table>`},
 {t:'match',q:'Was bedeutet das?',pairs:[['la mitad','die Hälfte'],['la mayoría','die meisten'],['un tercio','ein Drittel'],['casi nadie','fast niemand'],['pocos','wenige']]},
 {t:'gap',q:'Vivo en el ___ (3.) piso y mi oficina está en la ___ (1.) planta.',a:['tercer','primera']},
 {t:'gap',q:'Para alquilar un piso ___ ___ pagar una fianza. (man muss)',a:['hay','que']},
 {t:'mc',q:'„Die meisten Studierenden wohnen in einer WG.“',opts:['La mayoría de los estudiantes vive en un piso compartido.','La mayoría de estudiantes viven en un piso compartido mucho.','Mayoría de los estudiantes vive en un piso compartido.'],a:0},
 {t:'tr',de:'Man muss die Kaution bezahlen.',a:['Hay que pagar la fianza.']},
 {t:'listen',es:'Más de la mitad de los trabajadores prefiere el teletrabajo.',de:'Mehr als die Hälfte der Angestellten bevorzugt Homeoffice.'}
]},
{id:'l5',title:'Lesen: Nuevas formas de trabajo',desc:'Text · früher vs. heute',steps:[
 {t:'read',title:'La oficina, antes y ahora',text:`Hace veinte años, la oficina era muy diferente. Casi todos los empleados trabajaban en la empresa de nueve a seis. Cada persona tenía su propio {escritorio|Schreibtisch} y el jefe estaba en un despacho cerrado. Las reuniones eran siempre {presenciales|vor Ort} y la gente usaba mucho el teléfono fijo.

Ahora las cosas han cambiado. En muchas empresas de Barcelona los equipos trabajan en espacios abiertos y {compartidos|geteilt}. La mayoría de los trabajadores tiene horarios flexibles y más de la mitad teletrabaja uno o dos días a la semana.

Pero no todo es mejor: algunas personas tienen problemas para {desconectar|abschalten} y pocos tienen en casa un espacio de trabajo adecuado. Por eso, muchas empresas buscan un {equilibrio|Gleichgewicht}: hay que estar en la oficina algunos días, pero también se puede trabajar desde casa.`,
 de:`Vor zwanzig Jahren war das Büro ganz anders. Fast alle Angestellten arbeiteten von neun bis sechs in der Firma. Jede Person hatte ihren eigenen Schreibtisch und der Chef saß in einem geschlossenen Büro. Besprechungen waren immer vor Ort und man benutzte viel das Festnetztelefon.\n\nJetzt haben sich die Dinge geändert. In vielen Firmen in Barcelona arbeiten die Teams in offenen, geteilten Räumen. Die meisten Angestellten haben flexible Arbeitszeiten und mehr als die Hälfte arbeitet ein oder zwei Tage pro Woche im Homeoffice.\n\nAber nicht alles ist besser: Manche haben Probleme abzuschalten und wenige haben zu Hause einen geeigneten Arbeitsplatz. Deshalb suchen viele Firmen ein Gleichgewicht: Man muss an einigen Tagen im Büro sein, kann aber auch von zu Hause arbeiten.`},
 {t:'mc',q:'¿Cómo eran las reuniones antes?',opts:['Siempre presenciales.','Por videollamada.','No había reuniones.'],a:0},
 {t:'mc',q:'¿Qué problema tiene el teletrabajo según el texto?',opts:['Algunas personas no pueden desconectar.','Es muy caro.','Los jefes no lo permiten.'],a:0},
 {t:'gap',q:'Antes cada persona ___ (tener) su propio escritorio.',a:['tenía']},
 {t:'free',task:'Vergleiche in 5–7 Sätzen dein Leben früher (Wohnort, Schule oder Studium, Arbeit) mit heute. Benutze das Imperfekt für früher und das Präsens für jetzt.',hint:'Antes vivía en … · Cuando trabajaba en …, … · Normalmente iba … · Ahora … · Actualmente …',focus:'Imperfekt (Gewohnheiten früher) vs. Präsens',model:'Antes vivía en Mannheim y estudiaba en la universidad. Cuando trabajaba en una consultora, me levantaba muy temprano e iba a la oficina en tren. Los fines de semana visitaba a mi familia. Ahora vivo en Barcelona y estudio un máster. Actualmente tengo más tiempo libre y voy mucho a la playa. Antes hablaba poco español, pero ahora lo hablo todos los días.'}
]}],
resumen:`<h3>Häuser & Büros</h3><p class="es-t">la oficina · el despacho · la recepción · la cocina · la puerta · la ventana · la terraza · el balcón · el escritorio · la silla · la estantería · el armario · el ascensor · la planta baja · la primera planta</p>
<h3>Beschreiben</h3><table><tr><th>ser</th><th>estar (Zustand)</th><th>estar (Lage)</th></tr><tr><td class="es-t">moderno, tranquilo, luminoso, exterior, caro</td><td class="es-t">en buen estado, reformado, amueblado, limpio</td><td class="es-t">en la zona comercial, cerca de la estación, bien comunicado</td></tr></table>
<h3>Imperfekt</h3><table><tr><td>-ar: -aba, -abas, -aba, -ábamos, -abais, -aban</td></tr><tr><td>-er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían</td></tr><tr><td class="es-t">ser: era … · ir: iba … · ver: veía … · hay → había</td></tr></table>
<p>Für Zustände & Gewohnheiten in der Vergangenheit: <span class="es-t">antes · cuando era joven · a los 15 años · en los años 70</span></p>
<h3>Mengen</h3><p class="es-t">(casi) todos · la mayoría · la mitad · un tercio · muchos · algunos · pocos · uno de cada diez · (casi) nadie · el 95 % de …</p>
<h3>Ordnungszahlen & Notwendigkeit</h3><p class="es-t">primer(o), segundo, tercer(o) · tener que + Inf. · hay que + Inf.</p>`});

/* ================= UNIDAD 10 · LLEGAR A LA META ================= */
COURSE.units.push({id:'u10',n:'10',title:'Llegar a la meta',sub:'Angaben zur Biografie · berufliche Fähigkeiten · Berufserfahrung · Bewerbung · Vorstellungsgespräch',
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
 {t:'tr',de:'Ich wohnte drei Monate in London.',a:['Viví tres meses en Londres.','Yo viví tres meses en Londres.','Viví en Londres tres meses.']}
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
 {t:'gap',q:'El verano pasado ___ (yo, estar) en Londres y ___ (hacer) unas prácticas.',a:['estuve','hice']},
 {t:'gap',q:'¿Qué ___ (tú, hacer) ayer? – ___ (ir) al cine con Laia.',a:['hiciste','Fui']},
 {t:'gap',q:'No ___ (yo, poder) ir a la reunión porque ___ (tener) un problema.',a:['pude','tuve']},
 {t:'gap',q:'Mis amigos ___ (venir) a Barcelona en octubre.',a:['vinieron']},
 {t:'mc',q:'Indefinido von „decir“ (ellos):',opts:['dijeron','dijieron','decieron'],a:0,why:'Nach <b>j</b> fällt das i weg: <i>dijeron, produjeron</i>.'},
 {t:'match',q:'Infinitiv und Form (yo)',pairs:[['poner','puse'],['querer','quise'],['dar','di'],['ver','vi'],['venir','vine'],['decir','dije']]},
 {t:'tr',de:'Es war ein sehr schöner Tag.',a:['Fue un día muy bonito.']}
]},
{id:'l3',title:'Eine Biografie erzählen',desc:'Nací en … · A los 10 años … · Hace un mes …',steps:[
 {t:'vocab',title:'Biografie',items:[['nacer (nací)','geboren werden (ich wurde geboren)'],['mudarse (nos mudamos)','umziehen (wir zogen um)'],['ir a la escuela / al colegio','zur Schule gehen'],['terminar el instituto','das Abitur machen / die Schule beenden'],['hacer un intercambio','einen Austausch machen'],['estudiar … en …','… in … studieren'],['empezar a trabajar','anfangen zu arbeiten'],['hace dos años','vor zwei Jahren'],['dos años después','zwei Jahre später'],['desde 2023','seit 2023']]},
 {t:'info',title:'Biografie: typische Sätze',html:`<table><tr><td class="es-t">Nací en Cádiz en 1998.</td></tr><tr><td class="es-t">A los 10 años nos mudamos a Gijón.</td></tr><tr><td class="es-t">Fui a la escuela de 2004 a 2016.</td></tr><tr><td class="es-t">Hice un intercambio el año pasado.</td></tr><tr><td class="es-t">Terminé el instituto dos años después.</td></tr><tr><td class="es-t">Hace un mes empecé a trabajar.</td></tr><tr><td class="es-t">Desde 2023 trabajo en una agencia. <span class="muted">(dauert an → Präsens!)</span></td></tr></table>
 <div class="ojo"><b>hace</b> + Zeitraum = vor: <span class="es-t">hace tres años</span>. <b>desde</b> = seit (mit Präsens, wenn es noch andauert).</div>`},
 {t:'read',title:'Inés Rosales: una empresa con historia',text:`Inés Rosales {nació|wurde geboren} a finales del siglo XIX en un pueblo cerca de Sevilla. En 1910 empezó a hacer tortas de aceite en su cocina con una receta de su familia. Primero las vendió en la estación de trenes de Sevilla y pronto tuvo mucho éxito.

Necesitó la ayuda de otras mujeres de su pueblo para fabricar y vender las tortas. En los años veinte, su empresa ya tenía unas diez empleadas. Los {viajeros|Reisende} llevaron las tortas a toda España.

Inés murió muy joven, en 1934, y la empresa pasó a su familia. En 1985 su hijo la vendió a Juan Moreno, el actual presidente. En 2019 la empresa superó por primera vez los 15 millones de euros en ventas. Hoy {exporta|exportiert} a muchos países: después de España, su mercado principal es Estados Unidos.`,
 de:`Inés Rosales wurde Ende des 19. Jahrhunderts in einem Dorf bei Sevilla geboren. 1910 begann sie, in ihrer Küche nach einem Familienrezept Ölkuchen zu backen. Zuerst verkaufte sie sie am Bahnhof von Sevilla und hatte bald großen Erfolg.\n\nSie brauchte die Hilfe anderer Frauen aus ihrem Dorf, um die Kuchen herzustellen und zu verkaufen. In den Zwanzigerjahren hatte ihre Firma schon etwa zehn Angestellte. Die Reisenden brachten die Kuchen in ganz Spanien bekannt.\n\nInés starb sehr jung, 1934, und die Firma ging an ihre Familie. 1985 verkaufte ihr Sohn sie an Juan Moreno, den heutigen Präsidenten. 2019 überstieg die Firma zum ersten Mal 15 Millionen Euro Umsatz. Heute exportiert sie in viele Länder: Nach Spanien ist der wichtigste Markt die USA.`},
 {t:'match',q:'Ordne die Jahreszahlen zu',pairs:[['1910','Inés empezó a hacer tortas.'],['1934','Inés murió.'],['1985','Su hijo vendió la empresa.'],['2019','Superó los 15 millones en ventas.']]},
 {t:'gap',q:'Inés ___ (empezar) en su cocina y ___ (vender) las tortas en la estación.',a:['empezó','vendió']},
 {t:'order',es:'Hace tres años empecé a trabajar en una consultora.',de:'Vor drei Jahren habe ich angefangen, in einer Beratung zu arbeiten.'},
 {t:'tr',de:'Ich wurde in Deutschland geboren.',a:['Nací en Alemania.','Yo nací en Alemania.']},
 {t:'tr',de:'Vor einem Monat bin ich nach Barcelona gezogen.',a:['Hace un mes me mudé a Barcelona.','Me mudé a Barcelona hace un mes.']}
]},
{id:'l4',title:'Perfekt oder Indefinido?',desc:'He hecho … / Hice …',steps:[
 {t:'info',title:'Perfekt oder Indefinido?',html:`<table><tr><th>Perfekt (he hecho)</th><th>Indefinido (hice)</th></tr>
 <tr><td>Zeitraum <b>noch nicht abgeschlossen</b>: <span class="es-t">hoy, esta semana, este mes, este año</span></td><td>Zeitraum <b>abgeschlossen</b>: <span class="es-t">ayer, la semana pasada, en 2019, hace dos años</span></td></tr>
 <tr><td>Zeitpunkt egal / Erfahrung: <span class="es-t">alguna vez, ya, todavía no, nunca, últimamente</span></td><td>konkreter Zeitpunkt: <span class="es-t">en diciembre, el lunes, por última vez</span></td></tr></table>
 <div class="ex"><span class="es-t">– ¿Has hecho unas prácticas alguna vez? – Sí, hice unas prácticas en SEAT hace dos años.</span><br><span class="es-t">– ¿Cuándo hiciste una presentación por última vez? – Hice una la semana pasada. / He hecho una hoy por la mañana.</span></div>
 <div class="ojo">In Lateinamerika (und Teilen Spaniens) verwendet man oft auch bei „hoy“ das Indefinido. Für den Kurs gilt die Regel oben.</div>`},
 {t:'mc',q:'Hoy ___ mucho.',opts:['he trabajado','trabajé'],a:0,keep:true,why:'<i>hoy</i> = Zeitraum noch nicht vorbei → Perfekt.'},
 {t:'mc',q:'Ayer ___ al médico.',opts:['fui','he ido'],a:0,keep:true,why:'<i>ayer</i> = abgeschlossen → Indefinido.'},
 {t:'mc',q:'¿___ alguna vez en México?',opts:['Has estado','Estuviste'],a:0,keep:true,why:'Erfahrung ohne Zeitpunkt (<i>alguna vez</i>) → Perfekt.'},
 {t:'mc',q:'En 2025 ___ tres meses en Londres.',opts:['estuve','he estado'],a:0,keep:true},
 {t:'mc',q:'Esta semana ___ dos exámenes.',opts:['he tenido','tuve'],a:0,keep:true},
 {t:'mc',q:'La semana pasada ___ una película muy buena.',opts:['vi','he visto'],a:0,keep:true},
 {t:'gap',q:'– ¿Has hecho prácticas alguna vez? – Sí, ___ (hacer) unas prácticas en una empresa hace tres años.',a:['hice']},
 {t:'gap',q:'Todavía no ___ ___ (yo, ver) el Camp Nou.',a:['he','visto']},
 {t:'tr',de:'Letztes Jahr habe ich meinen Bachelor abgeschlossen.',a:['El año pasado terminé mi grado.','El año pasado terminé el grado.','El año pasado terminé mis estudios.','El año pasado terminé mi bachelor.','El año pasado terminé la carrera.','El año pasado terminé mi carrera.']}
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
  {you:true,opts:[{es:'Estudié Informática en Mannheim y terminé el grado en 2026.',ok:true},{es:'Estudio Informática en Mannheim y terminé el grado en 2026 hace.',ok:false,why:'Abgeschlossenes Studium → Indefinido <i>estudié</i>; „hace“ passt hier nicht.'},{es:'He estudiado Informática en Mannheim en 2023.',ok:false,why:'Mit Jahreszahl (abgeschlossen) → Indefinido.'}]},
  {n:'Sra. Ferrer',es:'¿Y tiene experiencia profesional?',de:'Und haben Sie Berufserfahrung?'},
  {you:true,opts:[{es:'Sí, trabajé tres años en una consultora como analista. En 2025 estuve tres meses en Londres.',ok:true},{es:'Sí, trabajaba tres años en una consultora. En 2025 estaba tres meses en Londres.',ok:false,why:'Abgeschlossener Zeitraum mit Dauer (tres años, tres meses) → Indefinido: <i>trabajé, estuve</i>.'}]},
  {n:'Sra. Ferrer',es:'Muy interesante. ¿Cuáles son sus puntos fuertes?',de:'Sehr interessant. Was sind Ihre Stärken?'},
  {you:true,opts:[{es:'Soy organizado, sé trabajar en equipo y estoy acostumbrado a hablar con clientes.',ok:true},{es:'Estoy organizado, sé trabajar en equipo y soy acostumbrado a hablar con clientes.',ok:false,why:'Charakter → <i>soy organizado</i>; Gewohnheit → <i>estoy acostumbrado</i>.'}]},
  {n:'Sra. Ferrer',es:'¿Y por qué quiere hacer las prácticas con nosotros?',de:'Und warum möchten Sie das Praktikum bei uns machen?'},
  {you:true,opts:[{es:'Porque me interesa mucho la ciberseguridad y quiero ser parte de un buen equipo.',ok:true},{es:'Porque me interesan mucho la ciberseguridad.',ok:false,why:'<i>la ciberseguridad</i> ist Singular → <i>me interesa</i>.'}]},
  {n:'Sra. Ferrer',es:'Perfecto. Le escribiremos la próxima semana. ¡Muchas gracias!',de:'Perfekt. Wir schreiben Ihnen nächste Woche. Vielen Dank!'}]},
 {t:'free',task:'Schreib eine kurze Bewerbung (6–8 Sätze) für ein Praktikum bei einer Tech-Firma in Barcelona: wer du bist, was du studiert und gearbeitet hast (Indefinido), deine Stärken und warum du dich bewirbst.',hint:'Estimados señores: · En relación con la oferta publicada en … · Estudié … · De 2023 a 2026 trabajé … · Soy … / Estoy acostumbrado a … / Tengo conocimientos de … · Quedo a su disposición … · Atentamente, Jonas Gross',focus:'Indefinido, Fähigkeiten mit ser/estar/tener/saber, formelles Anschreiben',model:'Estimados señores: En relación con la oferta de prácticas publicada en su página web, les envío mi currículum. Estudié Informática en la Universidad de Mannheim y terminé el grado en septiembre de 2026. De 2023 a 2026 trabajé en una consultora como analista de sistemas y en 2025 estuve tres meses en Londres. Ahora estudio un máster en Barcelona. Soy una persona organizada y comunicativa, sé trabajar en equipo y tengo conocimientos de redes y ciberseguridad. Considero que mi experiencia es adecuada para el puesto. Quedo a su disposición para una entrevista. Atentamente, Jonas Gross'}
]}],
resumen:`<h3>Biografie</h3><p class="es-t">Nací en … · A los 10 años nos mudamos a … · Fui a la escuela de … a … · Hice un intercambio el año pasado. · Terminé el instituto dos años después. · Hace un mes empecé a trabajar.</p>
<h3>Indefinido – regelmäßig</h3><table><tr><td>-ar: -é, -aste, -ó, -amos, -asteis, -aron</td></tr><tr><td>-er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron</td></tr></table>
<h3>Indefinido – unregelmäßig</h3><table><tr><td class="es-t">ser/ir: fui, fuiste, fue, fuimos, fuisteis, fueron</td></tr><tr><td class="es-t">estar: estuve · tener: tuve · hacer: hice/hizo · poder: pude · poner: puse · querer: quise · venir: vine · decir: dije/dijeron · dar: di · ver: vi · hay → hubo</td></tr></table>
<h3>Perfekt oder Indefinido?</h3><table><tr><td><b>Perfekt</b>: hoy, esta semana, este año · alguna vez, ya, todavía no, nunca</td></tr><tr><td><b>Indefinido</b>: ayer, la semana pasada, en 2019, hace dos años, en diciembre, por última vez</td></tr></table>
<h3>Fähigkeiten</h3><p class="es-t">ser organizado/comunicativo · estar dispuesto a / acostumbrado a · tener experiencia / conocimientos de · saber idiomas / trabajar en equipo</p>
<h3>Bewerbung</h3><p class="es-t">En relación con la oferta publicada en … · Les envío mi currículum … · Considero que mi experiencia es adecuada para el puesto. · Quedo a su disposición … · Atentamente,</p>`});
