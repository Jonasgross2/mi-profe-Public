/* Vocabulario A2 – freiwillige Zusatzlektionen (Extras-Kachel, plus:true + ab:true: zählen nicht für Fortschritt und Tagesplan).
   Schließen die Lücken zur A2-Liste des Plan Curricular (Instituto Cervantes, „Nociones específicas A2“), passend zum Thema der Unidad.
   Abdeckung prüfen: python3 test/a1_check.py --kurs es --liste quellen/pcic_a2_es.json --bis u15 */
(function(){
function P(uid,l){var u=COURSE.units.filter(function(x){return x.id===uid;})[0];if(u)u.lessons.push(Object.assign({ab:true,plus:true,icon:'📘'},l));}
P('u6',{id:'lx',title:'Vocabulario A2: viajes y ocio',desc:'Reisen, Unterkunft, Freizeit',steps:[
 {t:'vocab',title:'De viaje',items:[['hacer las maletas','die Koffer packen'],['la mochila','der Rucksack'],['el / la guía turístico/a','der Reiseführer / die Reiseführerin'],['la pensión completa','die Vollpension'],['la media pensión','die Halbpension'],['el piloto / la piloto','der Pilot / die Pilotin'],['el azafato / la azafata','der Flugbegleiter / die Flugbegleiterin'],['la moto','das Motorrad'],['el / la ciclista','der Radfahrer / die Radfahrerin'],['la isla','die Insel'],['el bosque','der Wald'],['el desierto','die Wüste'],['el castillo','die Burg, das Schloss'],['el palacio','der Palast'],['la estatua','die Statue']]},
 {t:'vocab',title:'Tiempo libre',items:[['la afición','das Hobby, die Leidenschaft'],['el parque de atracciones','der Freizeitpark'],['el zoo','der Zoo'],['la ópera','die Oper'],['el musical','das Musical'],['jugar a las cartas','Karten spielen'],['el ajedrez','das Schach']]},
 {t:'match',q:'Ordne zu.',pairs:[['la mochila','der Rucksack'],['la isla','die Insel'],['el bosque','der Wald'],['el ajedrez','das Schach'],['la media pensión','die Halbpension']]},
 {t:'gap',q:'Mañana salimos de viaje y esta noche tengo que hacer las ___.',a:['maletas']},
 {t:'tr',de:'Wir möchten ein Zimmer mit Halbpension.',a:['Queremos una habitación con media pensión.','Quisiéramos una habitación con media pensión.']}]});
P('u7',{id:'lx',title:'Vocabulario A2: el mundo laboral',desc:'Berufe, Arbeitsplatz, Arbeitsleben',steps:[
 {t:'vocab',title:'Profesiones y lugares de trabajo',items:[['el / la dependiente/a','der Verkäufer / die Verkäuferin (im Laden)'],['el funcionario / la funcionaria','der Beamte / die Beamtin'],['el / la periodista','der Journalist / die Journalistin'],['el presentador / la presentadora','der Moderator / die Moderatorin'],['el mecánico / la mecánica','der Mechaniker / die Mechanikerin'],['hacer de canguro','babysitten'],['la peluquería','der Friseursalon'],['la librería','die Buchhandlung'],['la multinacional','der internationale Konzern'],['la impresora','der Drucker'],['la fotocopiadora','der Kopierer'],['la corbata','die Krawatte'],['el uniforme','die Uniform'],['ganar dinero','Geld verdienen'],['estar jubilado / jubilada','in Rente sein']]},
 {t:'match',q:'Ordne zu.',pairs:[['la librería','die Buchhandlung'],['la peluquería','der Friseursalon'],['estar jubilado','in Rente sein'],['la impresora','der Drucker'],['hacer de canguro','babysitten']]},
 {t:'mc',q:'„librería“ bedeutet …',opts:['Buchhandlung','Bibliothek','Bücherregal'],a:0,why:'Falscher Freund! Bibliothek = <i>biblioteca</i>.'},
 {t:'tr',de:'Mein Opa ist in Rente.',a:['Mi abuelo está jubilado.']}]});
P('u8',{id:'lx',title:'Vocabulario A2: ropa y tiempo',desc:'Kleidung, Accessoires, Himmel & Wetter',steps:[
 {t:'vocab',title:'Ropa y complementos',items:[['la gorra','die Kappe'],['el sombrero','der Hut'],['el gorro','die Mütze'],['el pañuelo','das Halstuch, Taschentuch'],['la bufanda','der Schal'],['los guantes','die Handschuhe'],['los calcetines','die Socken'],['el pijama','der Schlafanzug'],['la cazadora','die Jacke (kurz)'],['el bañador','die Badehose, der Badeanzug'],['el biquini','der Bikini'],['el probador','die Umkleidekabine'],['quitarse','ausziehen (Kleidung)']]},
 {t:'vocab',title:'El cielo y el tiempo',items:[['el cielo','der Himmel'],['la luna','der Mond'],['la estrella','der Stern']]},
 {t:'match',q:'Ordne zu.',pairs:[['la bufanda','der Schal'],['los guantes','die Handschuhe'],['el cielo','der Himmel'],['la luna','der Mond'],['el probador','die Umkleidekabine']]},
 {t:'gap',q:'Esta camiseta es pequeña. ¿La puedo ___? (umtauschen)',a:['devolver|cambiar']},
 {t:'tr',de:'Im Winter trage ich eine Mütze und einen Schal.',a:['En invierno llevo un gorro y una bufanda.']}]});
P('u9',{id:'lx',title:'Vocabulario A2: casa, barrio y animales',desc:'Wohnung, Geräte, Viertel, Haustiere',steps:[
 {t:'vocab',title:'La casa',items:[['el chalé','das Einfamilienhaus'],['el pasillo','der Flur'],['la habitación de invitados','das Gästezimmer'],['el propietario / la propietaria','der Eigentümer / die Eigentümerin'],['la lavadora','die Waschmaschine'],['el lavaplatos','die Spülmaschine'],['el microondas','die Mikrowelle'],['la esquina','die Ecke'],['la calle peatonal','die Fußgängerzone'],['el / la habitante','der Einwohner / die Einwohnerin']]},
 {t:'vocab',title:'Animales',items:[['el gato','die Katze'],['el pájaro','der Vogel'],['el pez','der Fisch (lebend)'],['el caballo','das Pferd'],['la mosca','die Fliege'],['el mosquito','die Mücke'],['la araña','die Spinne']]},
 {t:'info',title:'pez oder pescado?',html:`<p><span class="es-t">el pez</span> = der Fisch, der lebt (im Wasser, im Aquarium). <span class="es-t">el pescado</span> = der Fisch, den man isst.</p>`},
 {t:'mc',q:'Im Restaurant: „Hoy tenemos ___ fresco.“',opts:['pescado','pez','pájaro'],a:0},
 {t:'match',q:'Ordne zu.',pairs:[['la lavadora','die Waschmaschine'],['el pasillo','der Flur'],['la esquina','die Ecke'],['el caballo','das Pferd'],['el pájaro','der Vogel']]},
 {t:'tr',de:'Die Wohnung hat eine Spülmaschine und eine Mikrowelle.',a:['El piso tiene lavaplatos y microondas.','El piso tiene un lavaplatos y un microondas.','El apartamento tiene lavaplatos y microondas.']}]});
P('u10',{id:'lx',title:'Vocabulario A2: estudios y vida',desc:'Schule, Kurse, Lebensabschnitte',steps:[
 {t:'vocab',title:'Estudiar',items:[['la academia','die private Schule, das Institut'],['el aula','der Unterrichtsraum'],['el alumno / la alumna','der Schüler / die Schülerin'],['el diploma','das Diplom, Zeugnis'],['aprobar','bestehen'],['suspender','durchfallen'],['contestar','antworten'],['completar','ergänzen'],['repasar','wiederholen (Lernstoff)'],['cometer un error','einen Fehler machen'],['la redacción','der Aufsatz'],['el cuaderno','das Heft'],['la hoja','das Blatt'],['la regla','das Lineal; die Regel'],['dibujar','zeichnen'],['adivinar','raten']]},
 {t:'vocab',title:'Etapas de la vida',items:[['el bebé','das Baby'],['el / la adolescente','der / die Jugendliche'],['crecer','wachsen, aufwachsen'],['casarse','heiraten'],['morir','sterben']]},
 {t:'mc',q:'„Suspendí el examen.“ bedeutet …',opts:['Ich bin durch die Prüfung gefallen.','Ich habe die Prüfung verschoben.','Ich habe die Prüfung bestanden.'],a:0},
 {t:'gap',q:'Estudié mucho y ___ el examen con un 9. (bestehen, Indefinido)',a:['aprobé']},
 {t:'match',q:'Ordne zu.',pairs:[['el cuaderno','das Heft'],['crecer','aufwachsen'],['casarse','heiraten'],['la redacción','der Aufsatz'],['adivinar','raten']]},
 {t:'tr',de:'Ich bin in Mannheim aufgewachsen.',a:['Crecí en Mannheim.','Me crie en Mannheim.']}]});
P('u11',{id:'lx',title:'Vocabulario A2: salud e higiene',desc:'Körperpflege, Notfall, Gesundheit',steps:[
 {t:'vocab',title:'Higiene',items:[['el dedo','der Finger'],['afeitarse','sich rasieren'],['peinarse','sich kämmen'],['cepillarse los dientes','sich die Zähne putzen'],['el cepillo de dientes','die Zahnbürste'],['la pasta de dientes','die Zahnpasta'],['el champú','das Shampoo'],['el gel','das Duschgel'],['la colonia','das Parfüm, Eau de Cologne'],['el desodorante','das Deo'],['la bañera','die Badewanne'],['la toalla','das Handtuch']]},
 {t:'vocab',title:'Salud',items:[['la enfermedad','die Krankheit'],['el medicamento','das Medikament'],['las urgencias','die Notaufnahme'],['la ambulancia','der Krankenwagen'],['llevar una vida sana','gesund leben']]},
 {t:'match',q:'Ordne zu.',pairs:[['la toalla','das Handtuch'],['afeitarse','sich rasieren'],['la ambulancia','der Krankenwagen'],['las urgencias','die Notaufnahme'],['el dedo','der Finger']]},
 {t:'gap',q:'Todas las mañanas me ducho, me ___ (kämmen) y me cepillo los dientes.',a:['peino']},
 {t:'tr',de:'Ich versuche, gesund zu leben.',a:['Intento llevar una vida sana.']}]});
P('u12',{id:'lx',title:'Vocabulario A2: dinero y emergencias',desc:'Geld, Bezahlen, Hilfe',steps:[
 {t:'vocab',title:'Dinero',items:[['la moneda','die Münze; die Währung'],['el cajero automático','der Geldautomat'],['pagar en efectivo','bar zahlen'],['la propina','das Trinkgeld'],['el cheque','der Scheck'],['pobre','arm']]},
 {t:'vocab',title:'Emergencias',items:[['la comisaría','die Polizeiwache'],['¡Socorro!','Hilfe!'],['el paraguas','der Regenschirm'],['la cabina (de teléfono)','die Telefonzelle']]},
 {t:'mc',q:'Man hat dir in der Metro das Portemonnaie gestohlen. Wohin gehst du?',opts:['a la comisaría','al cajero automático','a la peluquería'],a:0},
 {t:'gap',q:'En España no siempre se deja ___, pero en los restaurantes es normal. (Trinkgeld)',a:['propina']},
 {t:'tr',de:'Kann ich bar zahlen?',a:['¿Puedo pagar en efectivo?']}]});
P('u13',{id:'lx',title:'Vocabulario A2: en el mercado',desc:'Obst, Gemüse, Fisch, Fleisch, Desserts',steps:[
 {t:'vocab',title:'Fruta y verdura',items:[['la lechuga','der Salat (Kopf)'],['la zanahoria','die Karotte'],['el plátano','die Banane'],['la fresa','die Erdbeere'],['el perejil','die Petersilie']]},
 {t:'vocab',title:'Más alimentos',items:[['el yogur','der Joghurt'],['la mayonesa','die Mayonnaise'],['el salmón','der Lachs'],['las gambas','die Garnelen'],['la ternera','das Kalbfleisch'],['el filete','das Steak, Filet'],['los cereales','das Müsli, die Cornflakes'],['el chocolate','die Schokolade'],['el helado de vainilla','das Vanilleeis'],['el aperitivo','der Aperitif, der Snack vor dem Essen'],['la infusión','der Kräutertee'],['el hielo','das Eis (Würfel)'],['el cava','der Sekt (aus Katalonien)']]},
 {t:'vocab',title:'Tiendas',items:[['la frutería','der Obstladen'],['la carnicería','die Metzgerei'],['el carnicero / la carnicera','der Metzger / die Metzgerin'],['la pizzería','die Pizzeria']]},
 {t:'match',q:'Ordne zu.',pairs:[['la zanahoria','die Karotte'],['las gambas','die Garnelen'],['la carnicería','die Metzgerei'],['la fresa','die Erdbeere'],['el hielo','das Eis (Würfel)']]},
 {t:'gap',q:'Para la ensalada necesito una ___ (Kopfsalat) y dos tomates.',a:['lechuga']},
 {t:'tr',de:'Ich nehme einen Kräutertee ohne Zucker.',a:['Tomo una infusión sin azúcar.','Para mí, una infusión sin azúcar.','Quiero una infusión sin azúcar.']}]});
P('u14',{id:'lx',title:'Vocabulario A2: fiestas y arte',desc:'Familie & Feste, Musik, Kunst',steps:[
 {t:'vocab',title:'Familia y fiestas',items:[['papá','Papa'],['mamá','Mama'],['los gemelos','die Zwillinge'],['la Navidad','Weihnachten'],['creer en Dios','an Gott glauben'],['el ramo de flores','der Blumenstrauß'],['la margarita','das Gänseblümchen'],['la papelería','das Schreibwarengeschäft'],['el maletín','die Aktentasche']]},
 {t:'vocab',title:'Música y arte',items:[['el / la artista','der Künstler / die Künstlerin'],['el pintor / la pintora','der Maler / die Malerin'],['pintar','malen'],['el fotógrafo / la fotógrafa','der Fotograf / die Fotografin'],['la cámara (de fotos)','die Kamera'],['la literatura','die Literatur'],['el violín','die Geige'],['el jazz','der Jazz'],['el tango','der Tango'],['el arquitecto / la arquitecta','der Architekt / die Architektin']]},
 {t:'match',q:'Ordne zu.',pairs:[['los gemelos','die Zwillinge'],['el ramo de flores','der Blumenstrauß'],['pintar','malen'],['el violín','die Geige'],['la Navidad','Weihnachten']]},
 {t:'tr',de:'Zum Geburtstag schenke ich ihr einen Blumenstrauß.',a:['Para su cumpleaños le regalo un ramo de flores.','Le regalo un ramo de flores para su cumpleaños.']}]});
P('u15',{id:'lx',title:'Vocabulario A2: sociedad y mundo',desc:'Politik, Welt, Internet',steps:[
 {t:'vocab',title:'Sociedad',items:[['el gobierno','die Regierung'],['el ministro / la ministra','der Minister / die Ministerin'],['el ayuntamiento','das Rathaus, die Stadtverwaltung'],['el juez / la jueza','der Richter / die Richterin'],['el príncipe / la princesa','der Prinz / die Prinzessin'],['la educación','die Bildung; die Erziehung'],['la región','die Region'],['el planeta','der Planet']]},
 {t:'vocab',title:'Internet',items:[['navegar por internet','im Internet surfen'],['chatear','chatten'],['el chat','der Chat'],['el virus','der Virus']]},
 {t:'match',q:'Ordne zu.',pairs:[['el gobierno','die Regierung'],['el ministro','der Minister'],['chatear','chatten'],['el planeta','der Planet'],['el juez','der Richter']]},
 {t:'mc',q:'„la educación“ heißt Bildung – und auch …',opts:['gutes Benehmen / Erziehung','Ausbildungsplatz','Universität'],a:0},
 {t:'tr',de:'In Zukunft werden wir mehr im Internet surfen.',a:['En el futuro navegaremos más por internet.']}]});
})();
