/* Lese-Lektionen für Unidad 1–3 (Comprehensible Input) */
(function(){
const U=id=>COURSE.units.find(u=>u.id===id);
U('u1').lessons.push({id:'lr',title:'Lesen: Bolsa de intercambio',desc:'Kurze Profile verstehen',steps:[
 {t:'read',title:'Bolsa de intercambio – Barcelona',intro:'Profile auf einer Tandem-Plattform. Lies erst ohne Übersetzung.',text:`Hola, me llamo Núria. Soy de Barcelona y {estudio|ich studiere} Ingeniería Informática en la UPC. Hablo catalán, castellano e inglés. Ahora estudio alemán porque {busco|ich suche} unas prácticas en una empresa de Múnich. Busco una persona para practicar alemán. ¡Yo te ayudo con el español!

Me llamo Tom y soy de Inglaterra. {Trabajo|ich arbeite} en una empresa de turismo en Barcelona. Hablo inglés, francés y un poco de español. Necesito español para hablar por teléfono con los clientes. No hablo catalán, pero quiero aprender un poco.

Somos Ana y Marco, de Italia. Somos estudiantes {de intercambio|Austausch-} en la Universidad de Barcelona. Hablamos italiano e inglés. Buscamos personas para practicar español los {fines de semana|Wochenenden}. También {tocamos|wir spielen} la guitarra.`,
 de:`Hallo, ich heiße Núria. Ich bin aus Barcelona und studiere Informatik an der UPC. Ich spreche Katalanisch, Spanisch und Englisch. Jetzt lerne ich Deutsch, weil ich ein Praktikum in einer Firma in München suche. Ich suche jemanden, um Deutsch zu üben. Ich helfe dir mit dem Spanischen!\n\nIch heiße Tom und komme aus England. Ich arbeite bei einer Tourismusfirma in Barcelona. Ich spreche Englisch, Französisch und ein bisschen Spanisch. Ich brauche Spanisch, um mit den Kunden zu telefonieren. Ich spreche kein Katalanisch, aber ich will ein bisschen lernen.\n\nWir sind Ana und Marco aus Italien. Wir sind Austauschstudenten an der Universität Barcelona. Wir sprechen Italienisch und Englisch. Wir suchen Leute, um am Wochenende Spanisch zu üben. Wir spielen auch Gitarre.`},
 {t:'mc',q:'¿Por qué estudia alemán Núria?',opts:['Porque busca unas prácticas en Múnich.','Porque trabaja en una empresa de turismo.','Porque es de Alemania.'],a:0},
 {t:'mc',q:'¿Quién no habla catalán?',opts:['Tom','Núria','Nadie'],a:0},
 {t:'mc',q:'¿De dónde son Ana y Marco?',opts:['de Italia','de Inglaterra','de Barcelona'],a:0},
 {t:'mc',q:'Für wen wäre Jonas der perfekte Tandempartner?',opts:['Núria – sie lernt Deutsch.','Tom – er lernt Französisch.','Ana y Marco – tocan la guitarra.'],a:0},
 {t:'free',task:'Schreib dein eigenes Profil für die Bolsa de intercambio (4–5 Sätze).',hint:'Hola, me llamo … Soy de … Estudio … Hablo … Busco una persona para …',focus:'ser, -ar-Verben, para + Infinitiv',model:'Hola, me llamo Jonas y soy de Alemania. Estudio un máster en la UPC. Hablo alemán, inglés y un poco de español. Busco una persona para practicar español. ¡Yo te ayudo con el alemán!'}
]});
U('u2').lessons.push({id:'lr',title:'Lesen: Perfil profesional',desc:'Ein berufliches Profil verstehen',steps:[
 {t:'read',title:'Perfil profesional',intro:'Ein Profil auf einem beruflichen Netzwerk.',text:`Me llamo Marta Vidal Roca y tengo 29 años. Vivo en Barcelona, en el barrio de Poblenou. Soy ingeniera {informática|Informatik-} y trabajo como {analista de ciberseguridad|Cybersecurity-Analystin} en una consultora internacional.

En mi trabajo {reviso|ich prüfe} los sistemas de los clientes y escribo {informes|Berichte}. Soy responsable del contacto con dos clientes del sector bancario. También organizo seminarios para los nuevos empleados y a veces asisto a congresos.

Hablo catalán, castellano, inglés y un poco de francés. Ahora aprendo alemán porque mi empresa tiene {una sede|einen Standort} en Fráncfort. Mi correo electrónico es marta.vidal arroba consultora punto es.`,
 de:`Ich heiße Marta Vidal Roca und bin 29 Jahre alt. Ich wohne in Barcelona, im Viertel Poblenou. Ich bin Informatik-Ingenieurin und arbeite als Cybersecurity-Analystin bei einer internationalen Beratung.\n\nIn meiner Arbeit prüfe ich die Systeme der Kunden und schreibe Berichte. Ich bin verantwortlich für den Kontakt mit zwei Kunden aus dem Bankensektor. Ich organisiere auch Seminare für die neuen Angestellten und besuche manchmal Kongresse.\n\nIch spreche Katalanisch, Spanisch, Englisch und ein bisschen Französisch. Jetzt lerne ich Deutsch, weil meine Firma einen Standort in Frankfurt hat. Meine E-Mail-Adresse ist marta.vidal@consultora.es.`},
 {t:'mc',q:'¿Cuántos años tiene Marta?',opts:['29','19','39'],a:0},
 {t:'mc',q:'¿De qué es responsable Marta?',opts:['Del contacto con dos clientes.','De la contabilidad.','De la página web.'],a:0},
 {t:'gap',task:'Schreib Martas E-Mail-Adresse.',q:'___',a:['marta.vidal@consultora.es']},
 {t:'mc',q:'¿Por qué aprende alemán?',opts:['Porque su empresa tiene una sede en Fráncfort.','Porque vive en Alemania.','Porque su novio es alemán.'],a:0}
]});
U('u3').lessons.push({id:'lr',title:'Lesen: Una empresa familiar',desc:'Über eine Firma & eine Familie lesen',steps:[
 {t:'read',title:'Turrones Navarro: una empresa familiar',text:`Turrones Navarro es una empresa familiar de Xixona, un pueblo cerca de Alicante. Su {fundador|Gründer} es Jesús Navarro y tiene casi cien años de historia. La empresa {fabrica|stellt her} turrón, un dulce típico de Navidad hecho con {almendras|Mandeln} y miel.

Hoy la directora es Carmen Navarro, la nieta del fundador. Carmen tiene 45 años, es muy trabajadora y bastante {exigente|anspruchsvoll}. Su hermano Pablo es el responsable de las ventas: es simpático, muy abierto y un poco caótico. «Somos muy diferentes, pero trabajamos muy bien juntos», dice Carmen.

En la empresa trabajan 120 personas. Exportan a toda Europa y venden muchos productos en Alemania. A Carmen le gusta mucho su trabajo, pero le molesta una cosa: «En diciembre trabajamos {demasiado|zu viel}. ¡No tengo tiempo para mi familia!»`,
 de:`Turrones Navarro ist ein Familienunternehmen aus Xixona, einem Dorf bei Alicante. Sein Gründer ist Jesús Navarro und es hat fast hundert Jahre Geschichte. Die Firma stellt Turrón her, eine typische Weihnachtssüßigkeit aus Mandeln und Honig.\n\nHeute ist die Direktorin Carmen Navarro, die Enkelin des Gründers. Carmen ist 45, sehr fleißig und ziemlich anspruchsvoll. Ihr Bruder Pablo ist für den Verkauf verantwortlich: Er ist sympathisch, sehr offen und ein bisschen chaotisch. „Wir sind sehr verschieden, aber wir arbeiten sehr gut zusammen“, sagt Carmen.\n\nIn der Firma arbeiten 120 Personen. Sie exportieren in ganz Europa und verkaufen viele Produkte in Deutschland. Carmen mag ihre Arbeit sehr, aber eine Sache stört sie: „Im Dezember arbeiten wir zu viel. Ich habe keine Zeit für meine Familie!“`},
 {t:'mc',q:'¿Quién es Carmen?',opts:['La nieta del fundador.','La hija del fundador.','La hermana del fundador.'],a:0},
 {t:'mc',q:'¿Cómo es Pablo?',opts:['Simpático, abierto y un poco caótico.','Muy exigente y trabajador.','Tímido y ordenado.'],a:0},
 {t:'mc',q:'¿Qué le molesta a Carmen?',opts:['Trabajar demasiado en diciembre.','Su hermano.','Exportar a Alemania.'],a:0},
 {t:'gap',q:'En la empresa ___ (arbeiten) 120 personas y ___ (sie exportieren) a toda Europa.',a:['trabajan','exportan']}
]});
})();
