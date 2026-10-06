/* ================= UNIDAD 4 · COMIDA DE TRABAJO ================= */
COURSE.units.push({id:'u4',n:'4',title:'Comida de trabajo',sub:'Essgewohnheiten · Häufigkeit · Uhrzeit · Tisch reservieren · im Restaurant bestellen · einen Vorschlag machen',
goals:['Lebensmittel & Mahlzeiten','Wochentage','Häufigkeit (siempre, a veces, nunca …)','poder, querer, preferir (o→ue, e→ie)','Uhrzeit','direkte Objektpronomen lo/la/los/las','se + 3. Person','Mengenangaben','Nationalitäten'],
situacion:{title:'Menú del día in der Barceloneta',npc:'Camarero',scene:'Mittagspause mit einer Kollegin in einem kleinen Restaurant in der Barceloneta. Es gibt ein Menú del día für 14 €: drei Vorspeisen, drei Hauptgerichte, Dessert, Getränk.',role:'Du bist Toni, Kellner in einem traditionellen Restaurant in der Barceloneta. Du siezt Jonas höflich (oder duzt ihn, wenn er dich duzt). Du stellst das Menú del día vor (primeros: ensalada mixta, sopa de pescado, gazpacho; segundos: paella de marisco, pollo al ajillo, merluza a la plancha; postres: crema catalana, fruta, flan) und fragst nach Getränken. Am Ende fragst du, ob er mit Karte zahlen will.',goal:'Bestelle ein komplettes Menú del día (primero, segundo, postre, bebida), frag nach, was in einem Gericht drin ist, und bitte um die Rechnung.'},
lessons:[
{id:'l1',title:'Essen & Häufigkeit',desc:'Desayuno todos los días · Nunca tomo pescado',steps:[
 {t:'info',title:'Essenszeiten in Spanien',html:`<table><tr><th>Mahlzeit</th><th>Verb</th><th>typische Uhrzeit</th></tr>
 <tr><td class="es-t">el desayuno</td><td class="es-t">desayunar</td><td>7:30 – 9:00 (oft nur Kaffee + Toast)</td></tr>
 <tr><td class="es-t">el almuerzo</td><td class="es-t">almorzar</td><td>ca. 11:00 (kleiner Snack, z. B. bocadillo)</td></tr>
 <tr><td class="es-t">la comida</td><td class="es-t">comer</td><td>14:00 – 15:30 – Hauptmahlzeit!</td></tr>
 <tr><td class="es-t">la merienda</td><td class="es-t">merendar</td><td>ca. 18:00</td></tr>
 <tr><td class="es-t">la cena</td><td class="es-t">cenar</td><td>21:00 – 22:30</td></tr></table>
 <div class="ojo"><span class="es-t">comer</span> heißt „essen“ allgemein, aber auch speziell „zu Mittag essen“: <span class="es-t">¿Dónde comes hoy?</span></div>`},
 {t:'vocab',title:'Lebensmittel & Getränke',items:[['el pan','das Brot'],['la fruta','das Obst'],['la verdura','das Gemüse'],['la carne','das Fleisch'],['el pescado','der Fisch'],['el marisco','die Meeresfrüchte'],['el pollo','das Hähnchen'],['los huevos','die Eier'],['el queso','der Käse'],['el jamón','der Schinken'],['el arroz','der Reis'],['la leche','die Milch'],['el agua (con / sin gas)','das Wasser (mit / ohne Kohlensäure)'],['el zumo','der Saft'],['el vino','der Wein'],['la cerveza','das Bier'],['tomar','nehmen; essen/trinken']]},
 {t:'vocab',title:'Wochentage',items:[['el lunes','Montag'],['el martes','Dienstag'],['el miércoles','Mittwoch'],['el jueves','Donnerstag'],['el viernes','Freitag'],['el sábado','Samstag'],['el domingo','Sonntag'],['el fin de semana','das Wochenende']]},
 {t:'info',title:'Häufigkeit & Wochentage',html:`<table><tr><td class="es-t">siempre</td><td>immer</td></tr><tr><td class="es-t">todos los días</td><td>jeden Tag</td></tr><tr><td class="es-t">muchas veces</td><td>oft</td></tr><tr><td class="es-t">a veces</td><td>manchmal</td></tr><tr><td class="es-t">pocas veces</td><td>selten</td></tr><tr><td class="es-t">nunca</td><td>nie</td></tr><tr><td class="es-t">dos veces a la semana</td><td>zweimal pro Woche</td></tr><tr><td class="es-t">cinco veces al día</td><td>fünfmal am Tag</td></tr></table>
 <div class="ojo">Steht <b>nunca</b> nach dem Verb, braucht man zusätzlich <b>no</b>: <span class="es-t">Nunca tomo pescado.</span> = <span class="es-t">No tomo nunca pescado.</span></div>
 <p>Wochentage mit Artikel: <span class="es-t">el lunes</span> = am Montag (diesen), <span class="es-t">los lunes</span> = montags (jeden). <span class="es-t">De lunes a viernes</span> = Montag bis Freitag.</p>`},
 {t:'match',q:'Wie oft?',pairs:[['siempre','immer'],['a veces','manchmal'],['nunca','nie'],['pocas veces','selten'],['todos los días','jeden Tag']]},
 {t:'mc',q:'„Montags habe ich Spanischkurs.“',opts:['Los lunes tengo clase de español.','El lunes tengo clase de español.','En lunes tengo clase de español.'],a:0,why:'Regelmäßig → <i>los lunes</i> (Plural).'},
 {t:'gap',q:'No ___ (desayunar) nunca, solo tomo un café.',a:['desayuno']},
 {t:'gap',q:'En España la gente ___ (cenar) muy tarde, a las diez.',a:['cena']},
 {t:'tr',de:'Ich esse nie Fleisch.',a:['Nunca como carne.','No como nunca carne.','No como carne nunca.']},
 {t:'tr',de:'Ich trinke manchmal Wein.',a:['A veces tomo vino.','A veces bebo vino.','Tomo vino a veces.','Bebo vino a veces.']},
 {t:'listen',es:'Desayuno todos los días a las ocho.',de:'Ich frühstücke jeden Tag um acht.'}
]},
{id:'l2',title:'poder, querer, preferir',desc:'Stammwechsel o→ue und e→ie',steps:[
 {t:'info',title:'Verben mit Stammwechsel',html:`<p>Bei manchen Verben ändert sich der betonte Stammvokal – aber <b>nicht</b> bei nosotros und vosotros:</p>
 <table><tr><th></th><th>poder (o→ue)<br><span class="muted">können</span></th><th>querer (e→ie)<br><span class="muted">wollen, mögen</span></th><th>preferir (e→ie)<br><span class="muted">vorziehen</span></th></tr>
 <tr><td>yo</td><td class="es-t">puedo</td><td class="es-t">quiero</td><td class="es-t">prefiero</td></tr>
 <tr><td>tú</td><td class="es-t">puedes</td><td class="es-t">quieres</td><td class="es-t">prefieres</td></tr>
 <tr><td>él / ella / usted</td><td class="es-t">puede</td><td class="es-t">quiere</td><td class="es-t">prefiere</td></tr>
 <tr><td>nosotros/-as</td><td class="es-t">podemos</td><td class="es-t">queremos</td><td class="es-t">preferimos</td></tr>
 <tr><td>vosotros/-as</td><td class="es-t">podéis</td><td class="es-t">queréis</td><td class="es-t">preferís</td></tr>
 <tr><td>ellos / ellas / ustedes</td><td class="es-t">pueden</td><td class="es-t">quieren</td><td class="es-t">prefieren</td></tr></table>
 <div class="ex">Merkbild „Stiefel“: Die Formen yo, tú, él, ellos (Stiefelform in der Tabelle) wechseln – nosotros/vosotros nicht.</div>
 <p>Genauso: <span class="es-t">almorzar (almuerzo), costar (cuesta), volver (vuelvo), empezar (empiezo), pensar (pienso)</span>.</p>`},
 {t:'conj',verb:'poder',de:'können',forms:['puedo','puedes','puede','podemos','podéis','pueden']},
 {t:'conj',verb:'querer',de:'wollen',forms:['quiero','quieres','quiere','queremos','queréis','quieren']},
 {t:'gap',q:'No ___ (yo, poder) beber alcohol, conduzco.',a:['puedo']},
 {t:'gap',q:'¿___ (vosotros, querer) un café?',a:['Queréis'],why:'vosotros → kein Stammwechsel: <i>queréis</i>.'},
 {t:'gap',q:'Yo ___ (preferir) el café sin leche.',a:['prefiero']},
 {t:'gap',q:'¿Cuánto ___ (costar) el menú?',a:['cuesta']},
 {t:'mc',q:'Nosotros ___ comer a las dos.',opts:['queremos','quieremos','quiremos'],a:0},
 {t:'tr',de:'Willst du Wasser oder Wein?',a:['¿Quieres agua o vino?']},
 {t:'tr',de:'Ich bin allergisch gegen Milch.',a:['Soy alérgico a la leche.','Soy alérgica a la leche.']}
]},
{id:'l3',title:'Die Uhrzeit',desc:'¿Qué hora es? · ¿A qué hora …?',steps:[
 {t:'info',title:'¿Qué hora es?',html:`<table><tr><td>13:00</td><td class="es-t">Es la una.</td></tr><tr><td>14:00</td><td class="es-t">Son las dos.</td></tr><tr><td>14:15</td><td class="es-t">Son las dos y cuarto.</td></tr><tr><td>14:30</td><td class="es-t">Son las dos y media.</td></tr><tr><td>14:45</td><td class="es-t">Son las tres menos cuarto.</td></tr><tr><td>14:50</td><td class="es-t">Son las tres menos diez.</td></tr><tr><td>14:10</td><td class="es-t">Son las dos y diez.</td></tr></table>
 <div class="ojo">Nur bei 1 Uhr: <b>es la</b> una. Sonst: <b>son las</b> …</div>
 <h3>Wann? – a las …</h3><table><tr><td class="es-t">¿A qué hora comes?</td><td class="es-t">A las dos y media.</td></tr><tr><td class="es-t">El martes por la tarde tengo una reunión.</td><td>am Dienstagnachmittag</td></tr><tr><td class="es-t">a las nueve de la mañana / de la noche</td><td>um 9 Uhr morgens / abends</td></tr><tr><td class="es-t">de dos a diez</td><td>von zwei bis zehn</td></tr></table>
 <p><span class="es-t">por la mañana / por la tarde / por la noche</span> – ohne Uhrzeit. Mit Uhrzeit: <span class="es-t">de la mañana</span>.</p>`},
 {t:'mc',q:'Es ist 15:30.',opts:['Son las tres y media.','Es la tres y media.','Son las tres y cuarto.'],a:0},
 {t:'mc',q:'Es ist 13:15.',opts:['Es la una y cuarto.','Son las una y cuarto.','Es la uno y cuarto.'],a:0},
 {t:'mc',q:'Es ist 19:45.',opts:['Son las ocho menos cuarto.','Son las siete menos cuarto.','Son las siete y tres cuartos.'],a:0},
 {t:'gap',q:'– ¿___ qué hora empieza la clase? – ___ las nueve.',a:['A','A']},
 {t:'gap',task:'Schreib die Uhrzeit aus: 10:20',q:'Son las ___.',a:['diez y veinte']},
 {t:'listen',es:'Son las cinco menos diez.',task:'Hör zu und schreib den Satz.',alt:['las cinco menos diez','cinco menos diez'],de:'16:50 / 4:50'},
 {t:'listen',es:'La reunión es a las once y media.',de:'Die Besprechung ist um halb zwölf.'},
 {t:'tr',de:'Am Montagmorgen habe ich eine Besprechung.',a:['El lunes por la mañana tengo una reunión.','Tengo una reunión el lunes por la mañana.']}
]},
{id:'l4',title:'Reservieren & bestellen',desc:'¿Para cuántas personas? · De primero, …',steps:[
 {t:'vocab',title:'Im Restaurant',items:[['reservar una mesa','einen Tisch reservieren'],['¿Para cuántas personas?','Für wie viele Personen?'],['¿A nombre de quién?','Auf welchen Namen?'],['está lleno','es ist voll'],['el menú del día','das Tagesmenü'],['de primero / de segundo','als Vorspeise / als Hauptgericht'],['el postre','der Nachtisch'],['¿Y para beber?','Und zu trinken?'],['la cuenta, por favor','die Rechnung, bitte'],['pagar con tarjeta','mit Karte zahlen'],['el camarero / la camarera','Kellner/in'],['¿Qué lleva …?','Was ist in … drin?']]},
 {t:'info',title:'Direkte Objektpronomen & se',html:`<p>Ein schon genanntes Objekt (Akkusativ) ersetzt man durch <b>lo, la, los, las</b>:</p>
 <table><tr><th></th><th>männlich</th><th>weiblich</th></tr><tr><td>Sg.</td><td class="es-t">lo</td><td class="es-t">la</td></tr><tr><td>Pl.</td><td class="es-t">los</td><td class="es-t">las</td></tr></table>
 <div class="ex"><span class="es-t">¿Quién compra la carne? – La compro yo.</span><br><span class="es-t">¿Tomas el café con leche? – No, lo tomo solo.</span></div>
 <div class="ojo">Das Pronomen steht <b>vor</b> dem konjugierten Verb, <b>no</b> steht davor: <span class="es-t">No las compro.</span></div>
 <h3>se + 3. Person = „man“</h3><table><tr><td class="es-t">Se puede pagar con tarjeta.</td><td>Man kann mit Karte zahlen.</td></tr><tr><td class="es-t">El gazpacho se come frío.</td><td>Gazpacho isst man kalt.</td></tr><tr><td class="es-t">Aquí se beben vinos italianos.</td><td>Plural-Substantiv → Verb im Plural</td></tr></table>`},
 {t:'gap',q:'– ¿Dónde compras el pan? – ___ compro en la panadería.',a:['Lo']},
 {t:'gap',q:'– ¿Tomas las tapas aquí? – Sí, ___ tomo aquí.',a:['las']},
 {t:'mc',q:'„Man kann hier mit Karte zahlen.“',opts:['Aquí se puede pagar con tarjeta.','Aquí puede pagar con tarjeta se.','Aquí se pueden pagar con tarjeta.'],a:0},
 {t:'gap',q:'En Cataluña ___ ___ (comer) mucho pan con tomate.',a:['se','come']},
 {t:'dialog',place:'Teléfono',title:'Einen Tisch reservieren',scene:'Du rufst im Restaurant „Can Solé“ an, um für Freitag einen Tisch für ein Teamessen zu reservieren.',lines:[
  {n:'Restaurante',es:'Can Solé, buenas tardes. ¿Dígame?',de:'Can Solé, guten Tag. Ja, bitte?'},
  {you:true,opts:[{es:'Buenas tardes. ¿Hay mesas libres para el viernes?',ok:true},{es:'Buenas tardes. ¿Están mesas libres para el viernes?',ok:false,why:'„Gibt es …?“ = <b>hay</b>.'}]},
  {n:'Restaurante',es:'Sí. ¿Para cuántas personas?',de:'Ja. Für wie viele Personen?'},
  {you:true,opts:[{es:'Para seis personas, a las dos y media.',ok:true},{es:'Para seis personas, en las dos y media.',ok:false,why:'Uhrzeit: <b>a</b> las …'}]},
  {n:'Restaurante',es:'Perfecto. ¿A nombre de quién?',de:'Perfekt. Auf welchen Namen?'},
  {you:true,opts:[{es:'A nombre de Jonas Gross.',ok:true},{es:'De nombre Jonas Gross.',ok:false,why:'Die Wendung lautet <i>a nombre de</i>.'}]},
  {n:'Restaurante',es:'Muy bien. Hasta el viernes.',de:'Sehr gut. Bis Freitag.'}]},
 {t:'dialog',place:'Restaurante en la Barceloneta',title:'Bestellen',scene:'Du bist mit einer Kollegin beim Mittagessen. Der Kellner kommt.',lines:[
  {n:'Camarero',es:'Hola, buenas. ¿Qué quieren de primero?',de:'Hallo. Was möchten Sie als Vorspeise?'},
  {you:true,opts:[{es:'Para mí, el gazpacho, por favor.',ok:true},{es:'Por mí, el gazpacho, por favor.',ok:false,why:'„Für mich“ = <b>para mí</b>.'}]},
  {n:'Camarero',es:'¿Y de segundo?',de:'Und als Hauptgericht?'},
  {you:true,opts:[{es:'¿Qué lleva el pollo al ajillo?',ok:true},{es:'¿Qué llevan el pollo al ajillo?',ok:false,why:'<i>el pollo</i> ist Singular → <i>lleva</i>.'}]},
  {n:'Camarero',es:'Lleva ajo, aceite de oliva y un poco de vino blanco.',de:'Knoblauch, Olivenöl und ein bisschen Weißwein.'},
  {you:true,opts:[{es:'Vale, lo quiero.',ok:true},{es:'Vale, la quiero.',ok:false,why:'<i>el pollo</i> ist männlich → <b>lo</b>.'}]},
  {n:'Camarero',es:'¿Y para beber?',de:'Und zu trinken?'},
  {you:true,opts:[{es:'Agua sin gas, por favor.',ok:true},{es:'Agua sin gasolina, por favor.',ok:false,why:'😄 <i>gasolina</i> = Benzin. Stilles Wasser: <i>agua sin gas</i>.'}]},
  {n:'Camarero',es:'Muy bien. Ahora mismo.',de:'Sehr gut. Kommt sofort.'}]},
 {t:'info',title:'Mengenangaben',html:`<table><tr><td>1 kg</td><td class="es-t">un kilo de patatas</td></tr><tr><td>100 g</td><td class="es-t">cien gramos de jamón</td></tr><tr><td>½ l</td><td class="es-t">medio litro de zumo</td></tr><tr><td>1½ kg</td><td class="es-t">un kilo y medio de carne</td></tr><tr><td></td><td class="es-t">una botella de agua · una lata de cerveza · un paquete de café</td></tr></table>
 <div class="ojo">Zwischen Menge und Produkt steht immer <b>de</b>.</div>`},
 {t:'tr',de:'ein halber Liter Milch',a:['medio litro de leche']},
 {t:'tr',de:'Die Rechnung, bitte.',a:['La cuenta, por favor.']}
]},
{id:'l5',title:'Lesen: El menú del día',desc:'Text verstehen · Nationalitäten · eigene Gewohnheiten',steps:[
 {t:'read',title:'El menú del día',text:`En España, muchas personas que {trabajan|arbeiten} en la oficina comen fuera de casa. Una opción muy {popular|beliebt} es el «menú del día». Por un {precio fijo|Festpreis} – normalmente entre 12 y 16 euros – tienes un primer plato, un segundo plato, el postre o un café, pan y una {bebida|Getränk}.

Los primeros platos son muchas veces {ensaladas|Salate}, sopas o verduras. De segundo hay carne o pescado. En Barcelona, por ejemplo, es típico el {arroz|Reis} negro o la {butifarra|katalanische Bratwurst} con judías.

La comida es la {comida principal|Hauptmahlzeit} del día y la gente no come {deprisa|schnell}: una comida de trabajo puede {durar|dauern} dos horas. Por eso, la cena es más {ligera|leicht} y muy tarde, a las nueve o a las diez de la noche.`,
 de:`In Spanien essen viele Menschen, die im Büro arbeiten, außer Haus. Eine sehr beliebte Option ist das „Tagesmenü“. Zu einem Festpreis – normalerweise zwischen 12 und 16 Euro – bekommst du eine Vorspeise, ein Hauptgericht, Nachtisch oder Kaffee, Brot und ein Getränk.\n\nDie Vorspeisen sind oft Salate, Suppen oder Gemüse. Als Hauptgericht gibt es Fleisch oder Fisch. In Barcelona ist z. B. schwarzer Reis oder Butifarra mit Bohnen typisch.\n\nDas Mittagessen ist die Hauptmahlzeit des Tages und man isst nicht schnell: Ein Geschäftsessen kann zwei Stunden dauern. Deshalb ist das Abendessen leichter und sehr spät, um neun oder zehn Uhr abends.`},
 {t:'mc',q:'¿Qué incluye normalmente el menú del día?',opts:['Primero, segundo, postre o café, pan y bebida','Solo un plato y una bebida','Tapas y vino'],a:0},
 {t:'mc',q:'¿Por qué la cena es ligera?',opts:['Porque la comida es la comida principal.','Porque es muy cara.','Porque la gente no cena.'],a:0},
 {t:'mc',q:'¿Cuánto cuesta normalmente un menú del día, según el texto?',opts:['entre 12 y 16 euros','entre 2 y 6 euros','más de 30 euros'],a:0},
 {t:'info',title:'Nationalitäten',html:`<table><tr><th>-o / -a</th><th>Konsonant + -a</th><th>eine Form</th></tr>
 <tr><td class="es-t">suizo / suiza</td><td class="es-t">español / española</td><td class="es-t">belga</td></tr>
 <tr><td class="es-t">argentino / argentina</td><td class="es-t">alemán / alemana</td><td class="es-t">marroquí</td></tr>
 <tr><td class="es-t">italiano / italiana</td><td class="es-t">inglés / inglesa</td><td class="es-t">estadounidense</td></tr>
 <tr><td class="es-t">austriaco / austriaca</td><td class="es-t">francés / francesa</td><td class="es-t">canadiense</td></tr></table>
 <div class="ojo">Nationalitäten werden klein geschrieben. Der Akzent fällt bei der weiblichen Form weg: <span class="es-t">alemán → alemana</span>.</div>`},
 {t:'gap',q:'Laia es ___ (spanisch) y su novio es ___ (französisch).',a:['española','francés']},
 {t:'gap',q:'Mi compañera de piso es ___ (deutsch).',a:['alemana']},
 {t:'free',task:'Beschreibe deine Essgewohnheiten in 5–6 Sätzen: Wann und was isst du? Was isst du nie / oft? Was kannst du nicht essen? Was isst man in Deutschland anders als in Spanien?',hint:'Desayuno a las … · Normalmente como … · Nunca tomo … · Prefiero … · En Alemania se cena …',focus:'Häufigkeit, poder/querer/preferir, Uhrzeit, se + 3. Person',model:'Normalmente desayuno a las ocho: tomo un café con leche y pan con queso. Como a la una y media en la universidad. Muchas veces como pasta o arroz. Nunca tomo pescado porque no me gusta. En Alemania se cena muy pronto, a las seis o las siete, pero aquí en Barcelona prefiero cenar a las nueve.'}
]}],
resumen:`<h3>Essgewohnheiten</h3><p class="es-t">Desayuno todos los días. · Como de todo. · Soy vegetariano/-a. · No puedo beber alcohol. · Prefiero el café sin leche.</p>
<h3>Häufigkeit</h3><p class="es-t">siempre · todos los días · muchas veces · a veces · pocas veces · nunca · dos veces a la semana</p>
<h3>Wochentage</h3><p class="es-t">lunes · martes · miércoles · jueves · viernes · sábado · domingo — el lunes (diesen) / los lunes (jeden)</p>
<h3>poder · querer · preferir</h3><table><tr><td>puedo, puedes, puede, podemos, podéis, pueden</td></tr><tr><td>quiero, quieres, quiere, queremos, queréis, quieren</td></tr><tr><td>prefiero, prefieres, prefiere, preferimos, preferís, prefieren</td></tr></table>
<h3>Uhrzeit</h3><table><tr><td class="es-t">Es la una. · Son las dos y cuarto / y media / menos cuarto.</td></tr><tr><td class="es-t">¿A qué hora …? – A las tres. · por la mañana / tarde / noche</td></tr></table>
<h3>Restaurant</h3><table><tr><td class="es-t">¿Hay mesas libres? · ¿Para cuántas personas? · ¿A nombre de quién?</td></tr><tr><td class="es-t">De primero … · De segundo … · ¿Y para beber? · La cuenta, por favor.</td></tr></table>
<h3>Objektpronomen & se</h3><p><b>lo, la, los, las</b> vor dem Verb: <span class="es-t">La compro yo. No lo tomo.</span> · <span class="es-t">Se puede pagar con tarjeta.</span></p>
<h3>Mengen</h3><p class="es-t">un kilo de · cien gramos de · medio litro de · una botella de</p>`});

/* ================= UNIDAD 5 · POR LA CIUDAD ================= */
COURSE.units.push({id:'u5',n:'5',title:'Por la ciudad',sub:'Eine Stadt beschreiben · Verkehrsmittel · den Weg beschreiben · Reihenfolge · Ortsangaben',
goals:['hay vs. estar','muy vs. mucho','ir & a + el = al','Verkehrsmittel (en metro, a pie)','tener que + Infinitiv','seguir (e→i)','Weg beschreiben','Ortsangaben (cerca de, al lado de …)','porque · pero · por eso'],
situacion:{title:'Verlaufen in der Ciutat Vella',npc:'Señora',scene:'Du kommst am Liceu aus der Metro (L3) und willst zum Mercado de Santa Caterina, wo du einen Freund triffst. Du fragst eine ältere Dame nach dem Weg.',role:'Du bist eine freundliche ältere Barcelonesa. Du erklärst den Weg vom Liceu zum Mercado de Santa Caterina: Las Ramblas hinunter? Nein – erst die Calle Ferran bis Plaça Sant Jaume, dann geradeaus durch die Calle Jaume I bis zur Via Laietana, über die Straße, dann links, die Avenida Francesc Cambó, der Markt ist rechts, ca. 15 Minuten zu Fuß. Benutze einfache Wegbeschreibungen (sigue todo recto, gira a la derecha, cruza la calle). Siez ihn erst, dann duz ihn, wenn er dich duzt.',goal:'Frag höflich nach dem Weg, frag, ob es weit ist und ob man zu Fuß gehen kann, wiederhole die Beschreibung und bedanke dich.'},
lessons:[
{id:'l1',title:'Eine Stadt beschreiben',desc:'Hay muchos parques · La catedral está en el centro',steps:[
 {t:'vocab',title:'In der Stadt',items:[['el barrio','das Viertel'],['el centro','das Zentrum'],['el parque','der Park'],['la plaza','der Platz'],['la calle','die Straße'],['el museo','das Museum'],['la catedral','die Kathedrale'],['el edificio','das Gebäude'],['el mercado','der Markt'],['la playa','der Strand'],['el tráfico','der Verkehr'],['la feria','die Messe'],['el casco antiguo','die Altstadt'],['el ambiente','die Atmosphäre']]},
 {t:'info',title:'hay oder estar?',html:`<table><tr><th>hay = es gibt</th><th>estar = sich befinden</th></tr>
 <tr><td class="es-t">En Barcelona hay una catedral famosa.</td><td class="es-t">La Sagrada Família está en el Eixample.</td></tr>
 <tr><td class="es-t">Hay muchos bares y restaurantes.</td><td class="es-t">Mi hotel está en el casco antiguo.</td></tr>
 <tr><td class="es-t">Hay más de 300 ferias al año.</td><td class="es-t">Los servicios están al lado del restaurante.</td></tr></table>
 <div class="ex"><b>hay</b> + unbestimmter Artikel / Zahl / Menge / ohne Artikel (etwas Unbekanntes).<br><b>está/están</b> + bestimmter Artikel / Name (etwas Bestimmtes – wo ist es?).</div>
 <div class="ojo"><b>hay</b> hat nur eine Form – auch im Plural: <span class="es-t">hay dos parques</span>.</div>`},
 {t:'mc',q:'En mi barrio ___ un mercado muy bonito.',opts:['hay','está','es'],a:0,keep:true},
 {t:'mc',q:'El mercado de la Boqueria ___ en las Ramblas.',opts:['está','hay','es'],a:0,keep:true},
 {t:'mc',q:'¿Dónde ___ los servicios, por favor?',opts:['están','hay','son'],a:0,keep:true},
 {t:'gap',q:'En Barcelona ___ mucho turismo y la playa ___ muy cerca del centro.',a:['hay','está']},
 {t:'info',title:'muy oder mucho?',html:`<table><tr><th>mucho/-a/-os/-as + Substantiv (veränderlich)</th><th>muy + Adjektiv/Adverb</th></tr>
 <tr><td class="es-t">mucho tráfico · mucha gente · muchos trenes · muchas obras</td><td class="es-t">Es muy difícil llegar. · Está muy cerca.</td></tr></table>
 <p>Nach dem Verb: <span class="es-t">mucho</span> (unveränderlich): <span class="es-t">No uso mucho la bicicleta. ¿Te gusta? – Sí, mucho.</span></p>`},
 {t:'gap',q:'En el centro hay ___ (viel) gente y ___ (viele) turistas.',a:['mucha','muchos']},
 {t:'gap',q:'El metro es ___ (sehr) rápido y trabajo ___ (viel).',a:['muy','mucho']},
 {t:'tr',de:'In meinem Viertel gibt es viele Parks.',a:['En mi barrio hay muchos parques.']},
 {t:'tr',de:'Die Universität ist sehr weit weg.',a:['La universidad está muy lejos.']}
]},
{id:'l2',title:'Verkehrsmittel',desc:'Voy en metro · ir a / ir en',steps:[
 {t:'info',title:'Das Verb ir (gehen, fahren)',html:`<table><tr><td>yo</td><td class="es-t">voy</td></tr><tr><td>tú</td><td class="es-t">vas</td></tr><tr><td>él / ella / usted</td><td class="es-t">va</td></tr><tr><td>nosotros/-as</td><td class="es-t">vamos</td></tr><tr><td>vosotros/-as</td><td class="es-t">vais</td></tr><tr><td>ellos / ellas / ustedes</td><td class="es-t">van</td></tr></table>
 <table><tr><td><b>a</b> = Richtung (wohin?)</td><td class="es-t">Voy a Guadalajara. · Vamos a la oficina.</td></tr><tr><td><b>en</b> = Verkehrsmittel</td><td class="es-t">Voy en metro / en tren / en coche / en bici / en avión</td></tr><tr><td>zu Fuß</td><td class="es-t">Voy a pie / andando.</td></tr></table>
 <div class="ojo"><b>a + el = al</b>: <span class="es-t">Voy al aeropuerto.</span> (aber: <span class="es-t">a la estación</span>)</div>`},
 {t:'conj',verb:'ir',de:'gehen, fahren',forms:['voy','vas','va','vamos','vais','van']},
 {t:'vocab',title:'Verkehrsmittel',items:[['el metro','die U-Bahn'],['el autobús','der Bus'],['el tren','der Zug'],['el coche','das Auto'],['la bici(cleta)','das Fahrrad'],['el avión','das Flugzeug'],['a pie / andando','zu Fuß'],['la línea','die Linie'],['la parada','die Haltestelle'],['la estación','der Bahnhof / die Station'],['cambiar (de línea)','umsteigen'],['bajar (del metro)','aussteigen'],['tomar / coger','nehmen (Verkehrsmittel)']]},
 {t:'gap',q:'Normalmente ___ (yo, ir) a la universidad ___ metro.',a:['voy','en']},
 {t:'gap',q:'¿Vamos ___ aeropuerto en tren o en taxi?',a:['al']},
 {t:'gap',q:'Mis compañeros ___ (ir) a pie porque viven muy cerca.',a:['van']},
 {t:'mc',q:'„Ich fahre mit dem Fahrrad.“',opts:['Voy en bici.','Voy con bici.','Voy a bici.'],a:0},
 {t:'info',title:'seguir (e→i) & tener que',html:`<table><tr><th>seguir (weitergehen, folgen)</th></tr><tr><td class="es-t">sigo · sigues · sigue · seguimos · seguís · siguen</td></tr></table>
 <div class="ojo">yo <b>sigo</b> – ohne u, damit die Aussprache „g“ bleibt.</div>
 <p><b>tener que + Infinitiv</b> = müssen: <span class="es-t">Tienes que tomar el autobús. Tenéis que bajar en la próxima parada.</span></p>`},
 {t:'gap',q:'Para ir a la feria ___ ___ tomar la línea 1. (du musst)',a:['tienes','que']},
 {t:'tr',de:'Du musst in Plaça Catalunya umsteigen.',a:['Tienes que cambiar en Plaça Catalunya.','Tienes que cambiar en Plaza Cataluña.','Tienes que cambiar de línea en Plaça Catalunya.']},
 {t:'listen',es:'Toma el metro número tres y baja en Liceu.',de:'Nimm die Metro Linie 3 und steig am Liceu aus.'}
]},
{id:'l3',title:'Den Weg beschreiben',desc:'Sigue todo recto · Gira a la izquierda',steps:[
 {t:'vocab',title:'Wegbeschreibung',items:[['¿Sabe dónde está …?','Wissen Sie, wo … ist?'],['¿Hay un … cerca de aquí?','Gibt es ein … hier in der Nähe?'],['seguir todo recto','geradeaus gehen'],['girar a la derecha','rechts abbiegen'],['girar a la izquierda','links abbiegen'],['cruzar la calle','die Straße überqueren'],['hasta el final','bis zum Ende'],['la primera / segunda calle','die erste / zweite Straße'],['cerca (de)','in der Nähe (von)'],['lejos (de)','weit weg (von)'],['enfrente (de)','gegenüber (von)'],['al lado (de)','neben'],['delante (de) / detrás (de)','vor / hinter'],['entre … y …','zwischen … und …']]},
 {t:'info',title:'Reihenfolge & Ortsangaben',html:`<p><b>Reihenfolge:</b> <span class="es-t">primero … después … luego … al final …</span></p>
 <div class="ex"><span class="es-t">Primero sigue todo recto. Después gira a la derecha. Luego cruza la plaza y al final está el museo, a la izquierda.</span></div>
 <table><tr><td class="es-t">cerca de ↔ lejos de</td><td class="es-t">delante de ↔ detrás de</td></tr><tr><td class="es-t">a la izquierda de ↔ a la derecha de</td><td class="es-t">al lado de · enfrente de · entre … y …</td></tr></table>
 <div class="ojo"><b>de + el = del</b>: <span class="es-t">al lado del hotel</span>, <span class="es-t">cerca del metro</span>.</div>`},
 {t:'match',q:'Gegenteile',pairs:[['cerca','lejos'],['delante','detrás'],['a la derecha','a la izquierda'],['primero','al final']]},
 {t:'gap',q:'El banco está al lado ___ supermercado.',a:['del']},
 {t:'gap',q:'La farmacia está ___ el banco ___ la panadería. (zwischen … und …)',a:['entre','y']},
 {t:'mc',q:'Höflich nach dem Weg fragen:',opts:['Perdone, ¿sabe dónde está la estación?','Oye, ¿dónde hay la estación?','Perdone, ¿dónde es la estación?'],a:0},
 {t:'dialog',place:'Plaça de Catalunya',title:'Wo ist der Bahnhof?',scene:'Du suchst den Weg zur Metro. Du sprichst einen Passanten an.',lines:[
  {you:true,prompt:'Sprich den Passanten höflich an.',opts:[{es:'Perdone, ¿hay una estación de metro cerca de aquí?',ok:true},{es:'Perdone, ¿está una estación de metro cerca de aquí?',ok:false,why:'Unbestimmt (eine Station) → <b>hay</b>.'}]},
  {n:'Señor',es:'Sí, está muy cerca. Sigue todo recto y gira la segunda calle a la izquierda.',de:'Ja, ganz nah. Geh geradeaus und bieg in die zweite Straße links ab.'},
  {you:true,prompt:'Wiederhole zur Sicherheit.',opts:[{es:'Todo recto y la segunda a la izquierda, ¿no?',ok:true},{es:'Todo recto y la segunda a la derecha, ¿no?',ok:false,why:'Er hat <i>izquierda</i> (links) gesagt.'}]},
  {n:'Señor',es:'Eso es. La estación está enfrente de un banco.',de:'Genau. Die Station ist gegenüber von einer Bank.'},
  {you:true,opts:[{es:'¡Muchas gracias!',ok:true},{es:'¡De nada!',ok:false,why:'<i>De nada</i> sagt man, wenn sich jemand bei <b>dir</b> bedankt.'}]},
  {n:'Señor',es:'De nada. ¡Que vaya bien!',de:'Gern geschehen. Alles Gute!'}]},
 {t:'listen',es:'Gira a la derecha y sigue hasta el final de la calle.',de:'Bieg rechts ab und geh bis zum Ende der Straße.'},
 {t:'tr',de:'Zuerst geradeaus, dann links abbiegen.',a:['Primero todo recto, después gira a la izquierda.','Primero sigue todo recto y después gira a la izquierda.','Primero todo recto y luego a la izquierda.','Primero todo recto, luego gira a la izquierda.','Primero sigue todo recto, luego gira a la izquierda.']},
 {t:'tr',de:'Das Hotel ist neben dem Museum.',a:['El hotel está al lado del museo.']}
]},
{id:'l4',title:'Lesen: Barcelona & Konnektoren',desc:'porque · pero · por eso',steps:[
 {t:'read',title:'Barcelona, ciudad de negocios',text:`Barcelona es una ciudad muy {atractiva|attraktiv} para hacer negocios. Tiene un {puerto|Hafen} muy importante, un aeropuerto internacional y más de 300 {ferias|Messen} y congresos al año, como el Mobile World Congress.

La ciudad tiene unas 2500 horas de sol al año. Por eso muchas personas {extranjeras|ausländisch} quieren vivir aquí. En el centro hay edificios de todos los estilos: {góticos|gotisch} en el Barri Gòtic y {modernistas|im Jugendstil} en el Eixample, como la Casa Batlló.

Moverse por la ciudad es fácil porque el metro es rápido y barato. Pero en {hora punta|Stoßzeit} hay mucha gente y mucho tráfico. Muchos barceloneses prefieren ir en bici: hay más de 300 kilómetros de {carril bici|Radweg}.`,
 de:`Barcelona ist eine sehr attraktive Stadt, um Geschäfte zu machen. Sie hat einen sehr wichtigen Hafen, einen internationalen Flughafen und mehr als 300 Messen und Kongresse pro Jahr, wie den Mobile World Congress.\n\nDie Stadt hat etwa 2500 Sonnenstunden im Jahr. Deshalb wollen viele Ausländer hier leben. Im Zentrum gibt es Gebäude aller Stilrichtungen: gotische im Barri Gòtic und Jugendstil-Bauten im Eixample, wie die Casa Batlló.\n\nSich in der Stadt fortzubewegen ist einfach, weil die Metro schnell und günstig ist. Aber zur Stoßzeit gibt es viele Leute und viel Verkehr. Viele Barcelonesen fahren lieber Fahrrad: Es gibt mehr als 300 Kilometer Radwege.`},
 {t:'mc',q:'¿Por qué quieren vivir en Barcelona muchos extranjeros, según el texto?',opts:['Porque hay mucho sol.','Porque el metro es caro.','Porque hay poco tráfico.'],a:0},
 {t:'mc',q:'¿Qué problema tiene el metro?',opts:['En hora punta hay mucha gente.','Es muy lento.','Es muy caro.'],a:0},
 {t:'info',title:'Konnektoren',html:`<table><tr><td class="es-t">porque</td><td>weil (Grund)</td><td class="es-t">Es fácil llegar porque está cerca del aeropuerto.</td></tr>
 <tr><td class="es-t">por eso</td><td>deshalb (Folge)</td><td class="es-t">Está cerca del aeropuerto, por eso es fácil llegar.</td></tr>
 <tr><td class="es-t">pero</td><td>aber</td><td class="es-t">El metro es rápido, pero hay mucha gente.</td></tr>
 <tr><td class="es-t">y / también</td><td>und / auch</td><td class="es-t">Hay parques y también playas.</td></tr></table>
 <div class="ojo"><b>¿Por qué?</b> (warum?, getrennt + Akzent) – <b>porque</b> (weil, zusammen).</div>`},
 {t:'gap',q:'Voy en bici ___ es más rápido. (weil)',a:['porque']},
 {t:'gap',q:'Vivo lejos de la universidad, ___ ___ voy en metro. (deshalb)',a:['por','eso']},
 {t:'gap',q:'El piso es bonito, ___ es muy caro.',a:['pero']},
 {t:'free',task:'Beschreibe deinen Weg zur Uni (oder zu einem Lieblingsort in Barcelona) und dein Viertel in 5–7 Sätzen.',hint:'Vivo en … · En mi barrio hay … · Para ir a la FIB tomo … · Primero …, después … · porque / pero / por eso',focus:'hay/estar, ir + en/a, tener que, Wegbeschreibung, Konnektoren',model:'Vivo en Sants, un barrio tranquilo cerca de la estación. En mi barrio hay muchos bares y un mercado muy bonito. Para ir a la FIB, primero voy a pie a la parada de metro. Después tomo la línea 3 y bajo en Palau Reial. Luego tengo que ir andando unos diez minutos. El metro es rápido, pero por la mañana hay mucha gente. Por eso a veces voy en bici.'}
]}],
resumen:`<h3>Stadt beschreiben</h3><p class="es-t">Barcelona es una ciudad atractiva. Hay muchos bares y restaurantes. La catedral está en el casco antiguo.</p>
<h3>hay / estar</h3><table><tr><td><b>hay</b> + unbestimmt (un/una, Zahl, mucho …)</td><td class="es-t">Hay una catedral famosa.</td></tr><tr><td><b>está/n</b> + bestimmt (el/la, Name)</td><td class="es-t">¿Dónde está la Sagrada Família?</td></tr></table>
<h3>muy / mucho</h3><p class="es-t">mucho tráfico, mucha gente, muchos trenes · Es muy fácil. · Trabajo mucho.</p>
<h3>ir · seguir</h3><table><tr><td>voy, vas, va, vamos, vais, van</td><td>sigo, sigues, sigue, seguimos, seguís, siguen</td></tr></table>
<p><b>a</b> + Ziel (a + el = <b>al</b>) · <b>en</b> + Verkehrsmittel · <b>a pie</b> · <b>tener que</b> + Infinitiv</p>
<h3>Weg beschreiben</h3><p class="es-t">Perdone, ¿sabe dónde está …? · Sigue todo recto. · Gira a la derecha / izquierda. · Cruza la calle. · Primero … después … luego … al final …</p>
<h3>Ortsangaben</h3><p class="es-t">cerca de / lejos de · delante de / detrás de · a la derecha de / a la izquierda de · al lado de · enfrente de · entre … y …</p>
<h3>Konnektoren</h3><p class="es-t">porque (weil) · por eso (deshalb) · pero (aber)</p>`});
