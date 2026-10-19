/* Lese-Lektionen für Unidad 1–3 (Comprehensible Input) */
(function(){
const U=id=>COURSE.units.find(u=>u.id===id);
U('u1').lessons.push({id:'lr',title:'Lesen: Tándem en Barcelona',desc:'Kurze Profile verstehen',steps:[
 {t:'read',title:'Tándem en Barcelona',intro:'Profile auf einer Tandem-Plattform. Lies erst ohne Übersetzung.',text:`¡Hola! Me llamo Irene y soy de Barcelona. {Estudio|ich studiere} Arquitectura en la universidad. Hablo catalán, castellano e inglés. Ahora estudio alemán porque quiero hacer un máster en Berlín. {Busco|ich suche} una persona para practicar alemán los martes. ¡Yo te ayudo con el español!

Me llamo Kevin y soy de Estados Unidos. {Trabajo|ich arbeite} en la recepción de un hotel en el centro. Hablo inglés y un poco de español. Necesito español para hablar con los clientes del hotel. No hablo catalán, pero escucho catalán todos los días.

Somos Lucie y Paul, de Francia. Somos estudiantes {de intercambio|Austausch-} y vivimos en Gràcia. Hablamos francés, inglés y un poco de italiano. Buscamos personas para practicar español los {fines de semana|Wochenenden}. También {tocamos|wir spielen} en un grupo de música.`,
 de:`Hallo! Ich heiße Irene und komme aus Barcelona. Ich studiere Architektur an der Universität. Ich spreche Katalanisch, Spanisch und Englisch. Jetzt lerne ich Deutsch, weil ich einen Master in Berlin machen will. Ich suche jemanden, um dienstags Deutsch zu üben. Ich helfe dir mit dem Spanischen!\n\nIch heiße Kevin und komme aus den USA. Ich arbeite an der Rezeption eines Hotels im Zentrum. Ich spreche Englisch und ein bisschen Spanisch. Ich brauche Spanisch, um mit den Gästen des Hotels zu sprechen. Ich spreche kein Katalanisch, aber ich höre jeden Tag Katalanisch.\n\nWir sind Lucie und Paul aus Frankreich. Wir sind Austauschstudenten und wohnen in Gràcia. Wir sprechen Französisch, Englisch und ein bisschen Italienisch. Wir suchen Leute, um am Wochenende Spanisch zu üben. Wir spielen auch in einer Band.`},
 {t:'mc',q:'¿Por qué estudia alemán Irene?',opts:['Porque quiere hacer un máster en Berlín.','Porque trabaja en un hotel.','Porque es de Alemania.'],a:0},
 {t:'mc',q:'¿Quién no habla catalán?',opts:['Kevin','Irene','Nadie'],a:0},
 {t:'mc',q:'¿De dónde son Lucie y Paul?',opts:['de Francia','de Estados Unidos','de Barcelona'],a:0},
 {t:'mc',q:'Für wen wäre Jonas der perfekte Tandempartner?',opts:['Irene – sie lernt Deutsch.','Kevin – er arbeitet in einem Hotel.','Lucie und Paul – sie spielen in einer Band.'],a:0},
 {t:'free',task:'Schreib dein eigenes Profil für die Tandem-Plattform (4–5 Sätze).',hint:'Hola, me llamo … Soy de … Estudio … Hablo … Busco una persona para …',focus:'ser, -ar-Verben, para + Infinitiv',model:'Hola, me llamo Jonas y soy de Alemania. Estudio un máster en Barcelona. Hablo alemán, inglés y un poco de español. Busco una persona para practicar español. ¡Yo te ayudo con el alemán!'}
]});
U('u2').lessons.push({id:'lr',title:'Lesen: Perfil profesional',desc:'Ein berufliches Profil verstehen',steps:[
 {t:'read',title:'Perfil profesional',intro:'Ein Profil auf einem beruflichen Netzwerk.',text:`Me llamo Sofía Ibáñez Mora y tengo 31 años. Soy de Tarragona, pero vivo en Barcelona, en el barrio de Sant Martí. Soy {programadora|Programmiererin} y trabajo en el departamento de sistemas de una cadena de hoteles.

En mi trabajo {reviso|ich prüfe} el sistema de reservas y escribo {informes|Berichte} para la jefa del departamento. Soy responsable del contacto con las agencias de viajes. También organizo seminarios para los recepcionistas nuevos y a veces asisto a ferias de turismo.

Hablo castellano, catalán, inglés y un poco de alemán. Ahora aprendo más alemán porque muchos clientes de nuestros hoteles son de Alemania y de Austria. Mi correo electrónico es sofia.ibanez arroba hotelesmar punto com.`,
 de:`Ich heiße Sofía Ibáñez Mora und bin 31 Jahre alt. Ich komme aus Tarragona, wohne aber in Barcelona, im Viertel Sant Martí. Ich bin Programmiererin und arbeite in der IT-Abteilung einer Hotelkette.\n\nIn meiner Arbeit prüfe ich das Buchungssystem und schreibe Berichte für die Abteilungsleiterin. Ich bin verantwortlich für den Kontakt mit den Reisebüros. Ich organisiere auch Seminare für die neuen Rezeptionisten und besuche manchmal Tourismusmessen.\n\nIch spreche Spanisch, Katalanisch, Englisch und ein bisschen Deutsch. Jetzt lerne ich mehr Deutsch, weil viele Gäste unserer Hotels aus Deutschland und Österreich kommen. Meine E-Mail-Adresse ist sofia.ibanez@hotelesmar.com.`},
 {t:'mc',q:'¿Cuántos años tiene Sofía?',opts:['31','21','41'],a:0},
 {t:'mc',q:'¿De qué es responsable Sofía?',opts:['Del contacto con las agencias de viajes.','De la contabilidad.','De la recepción del hotel.'],a:0},
 {t:'gap',task:'Schreib Sofías E-Mail-Adresse.',q:'___',a:['sofia.ibanez@hotelesmar.com']},
 {t:'mc',q:'¿Por qué aprende alemán?',opts:['Porque muchos clientes son de Alemania y de Austria.','Porque vive en Alemania.','Porque su jefa es alemana.'],a:0},
 {t:'mc',q:'¿Dónde vive Sofía?',opts:['En Barcelona, en Sant Martí.','En Tarragona.','En Alemania.'],a:0}
]});
U('u3').lessons.push({id:'lr',title:'Lesen: Una empresa familiar',desc:'Über eine Firma & eine Familie lesen',steps:[
 {t:'read',title:'Cafés Bosch: una empresa familiar',text:`Cafés Bosch es una empresa familiar de Sabadell, una ciudad cerca de Barcelona. Su {fundador|Gründer} es Josep Bosch y tiene más de sesenta años de historia. La empresa {tuesta|röstet} café de Colombia, de Brasil y de Etiopía y lo vende en bares, hoteles y tiendas.

Hoy la directora es Marina Bosch, la nieta del fundador. Marina tiene 41 años, es muy ordenada y bastante {exigente|anspruchsvoll}. Su hermano Àlex es el responsable de las ventas: es alegre, muy abierto y un poco caótico. «Mi hermano y yo somos muy diferentes, pero somos un buen equipo», dice Marina.

En la empresa trabajan 85 personas. Venden café en toda España y exportan a Francia y a Alemania. A Marina le encanta su trabajo, pero le molesta una cosa: «Los lunes tenemos reuniones de tres horas. ¡Son {demasiado|zu} largas!»`,
 de:`Cafés Bosch ist ein Familienunternehmen aus Sabadell, einer Stadt bei Barcelona. Sein Gründer ist Josep Bosch und es hat mehr als sechzig Jahre Geschichte. Die Firma röstet Kaffee aus Kolumbien, Brasilien und Äthiopien und verkauft ihn an Bars, Hotels und Läden.\n\nHeute ist die Direktorin Marina Bosch, die Enkelin des Gründers. Marina ist 41, sehr ordentlich und ziemlich anspruchsvoll. Ihr Bruder Àlex ist für den Verkauf verantwortlich: Er ist fröhlich, sehr offen und ein bisschen chaotisch. „Mein Bruder und ich sind sehr verschieden, aber wir sind ein gutes Team“, sagt Marina.\n\nIn der Firma arbeiten 85 Personen. Sie verkaufen Kaffee in ganz Spanien und exportieren nach Frankreich und Deutschland. Marina liebt ihre Arbeit, aber eine Sache stört sie: „Montags haben wir dreistündige Besprechungen. Die sind zu lang!“`},
 {t:'mc',q:'¿Quién es Marina?',opts:['La nieta del fundador.','La hija del fundador.','La hermana del fundador.'],a:0},
 {t:'mc',q:'¿Cómo es Àlex?',opts:['Alegre, abierto y un poco caótico.','Muy ordenado y exigente.','Tímido y trabajador.'],a:0},
 {t:'mc',q:'¿Qué le molesta a Marina?',opts:['Las reuniones largas de los lunes.','Su hermano.','Exportar a Alemania.'],a:0},
 {t:'gap',q:'En la empresa ___ (arbeiten) 85 personas y ___ (sie verkaufen) café en toda España.',a:['trabajan','venden']},
 {t:'order',es:'Marina es la nieta del fundador.',de:'Marina ist die Enkelin des Gründers.'}
]});
})();
