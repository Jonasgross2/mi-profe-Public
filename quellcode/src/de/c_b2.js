/* Deutschkurs B2 (Erklärungen auf Portugiesisch) – Kapitel 37–48.
   Orientierung (nur Themen/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat B2 – Prüfungsziele/Testbeschreibung.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit drei Jahren in Frankfurt, Softwareentwickler (Kollegin Jana, Chefin Frau Dr. Hoffmann, Freund Tom – früher Mitbewohner). */

/* ================= KAPITEL 37 · BERUF & KARRIERE ================= */
LANGS.de.course.units.push({id:'k37',n:'37',level:'B2',title:'Beruf & Karriere',sub:'Carreira e qualificações · Nomen-Verb-Verbindungen (eine Entscheidung treffen, zur Verfügung stehen) · entrevista de emprego · carta de motivação',
goals:['Über Werdegang, Qualifikationen und Karriereziele sprechen','Nomen-Verb-Verbindungen verstehen und benutzen (eine Rolle spielen, in Frage kommen …)','Sich in einem Vorstellungsgespräch präsentieren: Stärken, Schwächen, Gehalt','Ein Motivationsschreiben verfassen'],
situacion:{title:'Entrevista de emprego',npc:'Herr Albrecht',scene:'Você se candidatou a uma vaga de líder de equipe (Teamleiter) numa empresa de software em Frankfurt. O Sr. Albrecht, do RH, conduz a entrevista.',role:'Du bist Herr Albrecht, Personalleiter einer Softwarefirma in Frankfurt. Du siezt. Du führst ein Vorstellungsgespräch mit Lucas für die Stelle „Teamleiter Entwicklung“. Frag nach seinem Werdegang, seinen Stärken und Schwächen, Erfahrung mit Verantwortung, wie er mit Konflikten im Team umgeht und nach seiner Gehaltsvorstellung. Stell auch eine schwierige Frage (Warum wollen Sie Ihre jetzige Stelle verlassen?). Benutze Nomen-Verb-Verbindungen (in Frage kommen, Verantwortung übernehmen, eine Entscheidung treffen). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Apresente o seu percurso, fale de pontos fortes e fracos com exemplos, responda à pergunta difícil com diplomacia e diga a sua pretensão salarial.'},
placement:[
 {t:'mc',q:'Wir müssen bis Freitag eine Entscheidung ___.',opts:['treffen','machen','stellen'],a:0},
 {t:'mc',q:'Für die Stelle ___ nur Bewerber mit Erfahrung in Frage.',opts:['kommen','stehen','gehen'],a:0},
 {t:'mc',q:'Der Laptop steht Ihnen ab Montag zur ___.',opts:['Verfügung','Verantwortung','Entscheidung'],a:0},
 {t:'gap',q:'Ich möchte gern mehr Verantwortung ___. (assumir)',a:['übernehmen']},
 {t:'mc',q:'„a promoção (no trabalho)“',opts:['die Beförderung','die Bewerbung','die Bewertung'],a:0},
 {t:'mc',q:'Die Stelle ist auf zwei Jahre ___. Danach endet der Vertrag.',opts:['befristet','belastbar','beruflich'],a:0}],
lessons:[
{id:'l1',title:'Carreira e qualificações',desc:'der Werdegang, die Beförderung, belastbar …',steps:[
 {t:'vocab',title:'Percurso profissional',items:[['der Werdegang','a trajetória (profissional)'],['die Laufbahn','a carreira'],['qualifiziert','qualificado'],['die Kompetenz','a competência'],['die Stellenausschreibung','o anúncio de vaga'],['ausschreiben','anunciar (uma vaga), abrir concurso'],['die Beförderung','a promoção'],['befördern','promover (alguém)'],['die Führungskraft','o/a líder, o gestor'],['aufsteigen','subir (na carreira)'],['der Quereinsteiger / die Quereinsteigerin','quem muda de área'],['das Arbeitszeugnis','a carta de referência (do empregador)'],['die Kündigungsfrist','o aviso prévio'],['die Gehaltsvorstellung','a pretensão salarial'],['verhandeln','negociar']]},
 {t:'vocab',title:'Perfil e pontos fortes',items:[['belastbar','resistente à pressão'],['die Belastbarkeit','a resistência à pressão'],['teamfähig','que sabe trabalhar em equipe'],['die Eigeninitiative','a iniciativa própria'],['durchsetzungsfähig','assertivo'],['kommunikationsstark','bom comunicador'],['lösungsorientiert','focado em soluções'],['sorgfältig','cuidadoso, meticuloso'],['sich weiterentwickeln','desenvolver-se'],['der Ehrgeiz','a ambição'],['ehrgeizig','ambicioso']]},
 {t:'mc',q:'Nach drei Jahren wurde Jana zur Teamleiterin ___.',opts:['befördert','beworben','beschrieben'],a:0},
 {t:'mc',q:'Ich bleibe auch in stressigen Phasen ruhig – ich bin sehr ___.',opts:['belastbar','ehrgeizig','befristet'],a:0},
 {t:'gap',q:'Max hat vorher Biologie studiert. Jetzt programmiert er – er ist ein ___ in der IT. (quem muda de área)',a:['Quereinsteiger']},
 {t:'match',q:'Ligue.',pairs:[['der Werdegang','a trajetória'],['die Beförderung','a promoção'],['sorgfältig','meticuloso'],['die Kündigungsfrist','o aviso prévio'],['verhandeln','negociar']]},
 {t:'tr',de:'Qual é a sua pretensão salarial?',a:['Was ist Ihre Gehaltsvorstellung?','Wie ist Ihre Gehaltsvorstellung?','Welche Gehaltsvorstellung haben Sie?']},
 {t:'speak',es:'In meiner bisherigen Laufbahn habe ich gelernt, lösungsorientiert und sorgfältig zu arbeiten.',de:'Na minha carreira até agora aprendi a trabalhar de forma focada em soluções e meticulosa.',tip:'<i>bisherig</i> = até agora (adjetivo): <i>meine bisherige Stelle</i>.'}
]},
{id:'l2',title:'Nomen-Verb-Verbindungen',desc:'eine Rolle spielen · in Frage kommen · zur Verfügung stehen',steps:[
 {t:'info',title:'Substantivo + verbo = uma expressão',html:`<p>Na linguagem formal (trabalho, jornais, cartas), o alemão gosta de expressões com <b>substantivo + verbo</b>. O sentido está no <b>substantivo</b>; o verbo quase não tem significado próprio – por isso é preciso aprender os pares.</p>
 <table><tr><th>expressão</th><th>= verbo simples</th></tr>
 <tr><td class="es-t">eine Entscheidung treffen</td><td>entscheiden – decidir</td></tr>
 <tr><td class="es-t">eine Frage stellen · einen Antrag stellen</td><td>fragen · beantragen</td></tr>
 <tr><td class="es-t">Verantwortung übernehmen</td><td>assumir a responsabilidade</td></tr>
 <tr><td class="es-t">in Frage kommen</td><td>ser uma opção, ser considerado</td></tr>
 <tr><td class="es-t">zur Verfügung stehen / stellen</td><td>estar / colocar à disposição</td></tr>
 <tr><td class="es-t">eine Rolle spielen</td><td>ser importante, ter um papel</td></tr>
 <tr><td class="es-t">in Kontakt treten / stehen mit</td><td>entrar / estar em contato com</td></tr>
 <tr><td class="es-t">Kritik üben an</td><td>kritisieren – criticar</td></tr>
 <tr><td class="es-t">Rücksicht nehmen auf</td><td>levar em consideração, ter consideração</td></tr>
 <tr><td class="es-t">zum Ausdruck bringen</td><td>ausdrücken – expressar</td></tr>
 <tr><td class="es-t">in Anspruch nehmen</td><td>utilizar (um serviço), tomar (tempo)</td></tr>
 <tr><td class="es-t">Maßnahmen ergreifen</td><td>tomar medidas</td></tr>
 <tr><td class="es-t">in Kraft treten</td><td>entrar em vigor</td></tr></table>
 <div class="ex">Muitas formam pares com <b>stellen</b> (ação) e <b>stehen</b> (estado, sentido passivo): <span class="es-t">zur Verfügung stellen → zur Verfügung stehen</span> · <span class="es-t">zur Diskussion stellen → zur Diskussion stehen</span>. Cuidado com a diferença: <span class="es-t">eine Frage stellen → in Frage stellen</span> (fazer uma pergunta ≠ questionar).</div>`},
 {t:'vocab',title:'Expressões com substantivo + verbo',items:[['eine Entscheidung treffen','tomar uma decisão'],['Verantwortung übernehmen','assumir a responsabilidade'],['in Frage kommen','ser uma opção'],['in Frage stellen','questionar, pôr em dúvida'],['zur Verfügung stehen','estar à disposição'],['zur Verfügung stellen','pôr à disposição'],['eine Rolle spielen','ter um papel, ser importante'],['in Kontakt treten mit','entrar em contato com'],['Kritik üben an','criticar'],['zum Ausdruck bringen','expressar'],['in Anspruch nehmen','utilizar, tomar (tempo)'],['Maßnahmen ergreifen','tomar medidas'],['in Kraft treten','entrar em vigor'],['einen Beitrag leisten','dar uma contribuição'],['zur Sprache bringen','trazer à tona (um assunto)']]},
 {t:'mc',q:'Das Gesetz ___ am 1. Januar in Kraft.',opts:['tritt','kommt','stellt'],a:0},
 {t:'mc',q:'Das Gehalt ___ für mich nicht die wichtigste Rolle.',opts:['spielt','macht','nimmt'],a:0},
 {t:'mc',q:'Der Kunde hat an unserem Konzept deutlich Kritik ___.',opts:['geübt','gestellt','gemacht'],a:0},
 {t:'gap',q:'Die Firma stellt allen Mitarbeitenden ein Jobticket zur ___.',a:['Verfügung']},
 {t:'gap',q:'Ein Umzug nach München kommt für mich leider nicht in ___.',a:['Frage']},
 {t:'gap',q:'Die Regierung muss endlich Maßnahmen ___. (tomar)',a:['ergreifen']},
 {t:'match',q:'Qual verbo combina?',pairs:[['eine Entscheidung','treffen'],['einen Antrag','stellen'],['einen Beitrag','leisten'],['Rücksicht','nehmen'],['in Kontakt','treten']]},
 {t:'order',es:'Ich möchte das Thema Homeoffice in der nächsten Besprechung zur Sprache bringen',alt:['In der nächsten Besprechung möchte ich das Thema Homeoffice zur Sprache bringen', 'Ich möchte in der nächsten Besprechung das Thema Homeoffice zur Sprache bringen'],de:'Eu gostaria de trazer o tema home office à tona na próxima reunião.'},
 {t:'tr',de:'A reunião vai tomar muito tempo.',a:['Die Besprechung wird viel Zeit in Anspruch nehmen.','Das Meeting wird viel Zeit in Anspruch nehmen.']},
 {t:'tr',de:'Quem assume a responsabilidade pelo projeto?',a:['Wer übernimmt die Verantwortung für das Projekt?']}
]},
{id:'l3',title:'Na entrevista',desc:'Stärken, Schwächen, Gehalt – höflich und überzeugend',steps:[
 {t:'info',title:'Frases para a entrevista',html:`<table><tr><td class="es-t">Ich bin auf Ihre Stellenausschreibung aufmerksam geworden, weil …</td><td>O seu anúncio me chamou a atenção porque …</td></tr>
 <tr><td class="es-t">Zu meinen Stärken zählt …</td><td>Entre os meus pontos fortes está …</td></tr>
 <tr><td class="es-t">Ich habe gelernt, mit Druck umzugehen.</td><td>Aprendi a lidar com pressão.</td></tr>
 <tr><td class="es-t">Eine meiner Schwächen ist …, aber ich arbeite daran, indem ich …</td><td>Um dos meus pontos fracos é …, mas estou trabalhando nisso: …</td></tr>
 <tr><td class="es-t">Ich suche eine neue Herausforderung.</td><td>Procuro um novo desafio.</td></tr>
 <tr><td class="es-t">Meine Gehaltsvorstellung liegt bei … brutto im Jahr.</td><td>A minha pretensão é de … bruto por ano.</td></tr>
 <tr><td class="es-t">Ab wann wäre die Stelle zu besetzen?</td><td>A partir de quando a vaga precisa ser preenchida?</td></tr></table>
 <div class="ex">Dica: fale de uma fraqueza <b>real, mas não crítica</b> e mostre o que você faz para melhorar. Nunca fale mal do empregador atual.</div>`},
 {t:'dialog',place:'Vorstellungsgespräch',title:'A pergunta difícil',scene:'O Sr. Albrecht, do RH, quer saber por que você quer sair do emprego atual.',lines:[
  {n:'Herr Albrecht',es:'Sie sind ja erst seit drei Jahren bei Ihrer jetzigen Firma. Warum wollen Sie wechseln?',de:'O senhor está há apenas três anos na sua empresa atual. Por que quer mudar?'},
  {you:true,opts:[{es:'Ich habe dort sehr viel gelernt, aber ich möchte mehr Verantwortung übernehmen – und das ist dort im Moment nicht möglich.',ok:true},{es:'Mein Chef ist schrecklich und die Kollegen sind faul.',ok:false,why:'Nunca fale mal do empregador atual – isso causa uma péssima impressão.'}]},
  {n:'Herr Albrecht',es:'Verstehe. Haben Sie denn schon Erfahrung in der Führung eines Teams?',de:'Entendo. O senhor já tem experiência em liderar uma equipe?'},
  {you:true,opts:[{es:'Ja, im letzten Projekt habe ich vier Kollegen koordiniert und wichtige Entscheidungen mit dem Kunden getroffen.',ok:true},{es:'Nein, aber ich bin sehr ehrgeizig.',ok:false,why:'Melhor dar um exemplo concreto – mesmo uma experiência pequena conta.'}]},
  {n:'Herr Albrecht',es:'Und was wäre Ihre Gehaltsvorstellung?',de:'E qual seria a sua pretensão salarial?'},
  {you:true,opts:[{es:'Ich stelle mir ein Jahresgehalt von 72.000 Euro brutto vor, bin aber für Gespräche offen.',ok:true},{es:'So viel wie möglich.',ok:false,why:'Diga um valor concreto (bruto, por ano) e mostre abertura.'}]},
  {n:'Herr Albrecht',es:'Gut. Dann treten wir in den nächsten zwei Wochen mit Ihnen in Kontakt.',de:'Certo. Então entraremos em contato nas próximas duas semanas.'}]},
 {t:'mc',q:'Wie reagiert man am besten auf die Frage nach Schwächen?',opts:['Man nennt eine echte Schwäche und sagt, wie man daran arbeitet.','Man sagt, dass man keine Schwächen hat.','Man erzählt von Problemen mit dem Chef.'],a:0},
 {t:'gap',q:'Ich bin auf Ihre Anzeige ___ geworden. (atento)',a:['aufmerksam']},
 {t:'gap',q:'Zu meinen Stärken ___ Zuverlässigkeit und Teamfähigkeit. (contar)',a:['zählen']},
 {t:'tr',de:'Procuro um novo desafio.',a:['Ich suche eine neue Herausforderung.']},
 {t:'speak',es:'Ich habe gelernt, auch unter Druck ruhig zu bleiben und Prioritäten zu setzen.',de:'Aprendi a ficar calmo mesmo sob pressão e a definir prioridades.',tip:'<i>Prioritäten setzen</i> = definir prioridades (mais uma expressão substantivo + verbo).'}
]},
{id:'l4',title:'Escrever: carta de motivação',desc:'Motivationsschreiben (ca. 150 Wörter)',steps:[
 {t:'read',title:'Leitura: Stellenanzeige',text:`Wir suchen ab 1. März eine Teamleitung Softwareentwicklung (m/w/d) in Vollzeit, unbefristet.
Ihre Aufgaben: Sie führen ein Team von sechs Entwicklerinnen und Entwicklern, planen Projekte gemeinsam mit unseren Kunden und treffen technische Entscheidungen.
Ihr Profil: abgeschlossenes Studium oder vergleichbare Qualifikation, mindestens drei Jahre Berufserfahrung, erste Erfahrung in der Führung, sehr gute Deutsch- und Englischkenntnisse.
Wir bieten: flexible Arbeitszeiten, zwei Tage Homeoffice pro Woche, ein Weiterbildungsbudget und ein Jobticket.
Bitte senden Sie Ihre Unterlagen mit Gehaltsvorstellung und frühestmöglichem Eintrittstermin an bewerbung@datawerk-frankfurt.de.`,de:`Procuramos a partir de 1º de março uma liderança de equipe de desenvolvimento de software (m/f/d) em tempo integral, por tempo indeterminado.\nSuas tarefas: liderar uma equipe de seis desenvolvedoras e desenvolvedores, planejar projetos junto com nossos clientes e tomar decisões técnicas.\nSeu perfil: graduação completa ou qualificação comparável, pelo menos três anos de experiência profissional, primeira experiência em liderança, conhecimentos muito bons de alemão e inglês.\nOferecemos: horários flexíveis, dois dias de home office por semana, orçamento para formação e passe de transporte.\nEnvie seus documentos com pretensão salarial e a data de início mais próxima possível para bewerbung@datawerk-frankfurt.de.`},
 {t:'mc',q:'Was muss man in der Bewerbung angeben?',opts:['Gehaltsvorstellung und Eintrittstermin','Nur den Lebenslauf','Ein Foto und Referenzen'],a:0},
 {t:'mc',q:'Welche Erfahrung ist Voraussetzung?',opts:['mindestens drei Jahre im Beruf','zehn Jahre Führung','ein Doktortitel'],a:0},
 {t:'mc',q:'„unbefristet“ bedeutet:',opts:['Der Vertrag hat kein festes Ende.','Der Vertrag dauert ein Jahr.','Es ist eine Teilzeitstelle.'],a:0},
 {t:'info',title:'Estrutura do Motivationsschreiben',html:`<table><tr><td>Assunto</td><td class="es-t">Bewerbung als Teamleiter Softwareentwicklung</td></tr>
 <tr><td>Início</td><td class="es-t">Sehr geehrte Damen und Herren, mit großem Interesse habe ich Ihre Stellenausschreibung gelesen.</td></tr>
 <tr><td>Quem sou</td><td class="es-t">Derzeit arbeite ich als … bei … und bin dort verantwortlich für …</td></tr>
 <tr><td>Por que eu</td><td class="es-t">Besonders reizt mich an der Stelle, dass … · Ich bringe … mit.</td></tr>
 <tr><td>Final</td><td class="es-t">Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr. Mit freundlichen Grüßen</td></tr></table>`},
 {t:'free',task:'Escreva uma carta de motivação para a vaga acima (~150 palavras): 1) por que a vaga interessa, 2) sua experiência e qualificações (com um exemplo concreto), 3) seus pontos fortes, 4) pretensão salarial e data de início.',hint:'Sehr geehrte Damen und Herren, mit großem Interesse … Derzeit arbeite ich … Dabei habe ich Verantwortung für … übernommen. Zu meinen Stärken zählen … Meine Gehaltsvorstellung liegt bei … Ich könnte die Stelle ab … antreten.',focus:'formelle Sprache, Nomen-Verb-Verbindungen, Nebensätze, Begründungen',model:'Sehr geehrte Damen und Herren,\nmit großem Interesse habe ich Ihre Anzeige für die Stelle als Teamleiter Softwareentwicklung gelesen. Derzeit arbeite ich als Softwareentwickler bei einer Frankfurter IT-Firma. Im letzten Jahr habe ich dort die Verantwortung für ein Kundenprojekt übernommen und ein Team von vier Personen koordiniert. Dabei habe ich gelernt, auch unter Zeitdruck gute Entscheidungen zu treffen.\nBesonders reizt mich an Ihrer Stelle, dass Sie eng mit den Kunden zusammenarbeiten. Zu meinen Stärken zählen Teamfähigkeit, Belastbarkeit und ein lösungsorientierter Arbeitsstil. Außerdem spreche ich Portugiesisch, Englisch und Deutsch.\nMeine Gehaltsvorstellung liegt bei 72.000 Euro brutto im Jahr. Unter Berücksichtigung meiner Kündigungsfrist könnte ich die Stelle zum 1. April antreten.\nÜber eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Nomen-Verb-Verbindungen</h3><p class="es-t">eine Entscheidung treffen · Verantwortung übernehmen · in Frage kommen · zur Verfügung stehen/stellen · eine Rolle spielen · Kritik üben an · Maßnahmen ergreifen · in Kraft treten · in Anspruch nehmen · einen Beitrag leisten</p>
<h3>Vorstellungsgespräch</h3><p class="es-t">Zu meinen Stärken zählt … · Ich suche eine neue Herausforderung. · Meine Gehaltsvorstellung liegt bei …</p>
<h3>Karriere</h3><p class="es-t">der Werdegang · die Beförderung · die Führungskraft · belastbar · teamfähig · die Kündigungsfrist · das Arbeitszeugnis</p>`});

/* ================= KAPITEL 38 · WISSENSCHAFT & TECHNIK ================= */
LANGS.de.course.units.push({id:'k38',n:'38',level:'B2',title:'Wissenschaft & Technik',sub:'Pesquisa e invenções · alternativas à voz passiva (lässt sich, -bar, ist zu …) · descrever gráficos · inteligência artificial',
goals:['Über Forschung, Erfindungen und Fortschritt sprechen','Passiversatzformen: sich lassen, -bar, sein + zu + Infinitiv','Grafiken und Statistiken beschreiben','Einen Forumsbeitrag mit Argumenten schreiben (Thema KI)'],
situacion:{title:'Debate sobre IA',npc:'Dr. Weber',scene:'Na sua empresa há uma palestra sobre inteligência artificial. Depois, a pesquisadora Dra. Weber conversa com você.',role:'Du bist Dr. Katrin Weber, Forscherin für künstliche Intelligenz an der Universität Frankfurt. Du siezt. Nach deinem Vortrag sprichst du mit Lucas (Softwareentwickler) über Chancen und Risiken von KI: Arbeitsplätze, Datenschutz, Fehler von Systemen, Bildung. Vertritt eine differenzierte Meinung, frag nach seinen Erfahrungen im Beruf und widersprich ihm höflich, wenn er zu einseitig argumentiert. Benutze Passiversatzformen (lässt sich nicht vermeiden, ist kaum vorhersehbar, ist zu prüfen). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Dê a sua opinião sobre IA com argumentos a favor e contra, conte uma experiência do trabalho e reaja às objeções.'},
placement:[
 {t:'mc',q:'Das Problem ___ sich leicht lösen.',opts:['lässt','wird','ist'],a:0},
 {t:'mc',q:'Diese Handschrift ist kaum ___. (man kann sie kaum lesen)',opts:['lesbar','lesend','gelesen'],a:0},
 {t:'mc',q:'Der Antrag ist bis Montag ___. (muss abgegeben werden)',opts:['abzugeben','abgegeben','abgeben'],a:0},
 {t:'gap',q:'Der Anteil ist von 20 auf 40 Prozent gestiegen – er hat sich ___. (dobrou)',a:['verdoppelt']},
 {t:'mc',q:'„a descoberta“',opts:['die Entdeckung','die Erfindung','die Erkenntnis'],a:0},
 {t:'mc',q:'Die Studie ___, dass Schlaf das Gedächtnis verbessert.',opts:['belegt','erfindet','vermutet sich'],a:0}],
lessons:[
{id:'l1',title:'Pesquisa e invenções',desc:'die Forschung, die Erkenntnis, beweisen …',steps:[
 {t:'vocab',title:'Ciência e pesquisa',items:[['die Wissenschaft','a ciência'],['der Wissenschaftler / die Wissenschaftlerin','o cientista / a cientista'],['wissenschaftlich','científico'],['forschen','pesquisar'],['der Forscher / die Forscherin','o pesquisador / a pesquisadora'],['die Erfindung','a invenção'],['erfinden','inventar'],['die Entdeckung','a descoberta'],['die Erkenntnis','o conhecimento adquirido, a constatação'],['das Experiment','o experimento'],['die These','a tese'],['die Annahme','a suposição'],['beweisen','provar'],['der Beweis','a prova'],['widerlegen','refutar'],['belegen','comprovar (com dados)'],['die Studie','o estudo'],['das Verfahren','o procedimento, o processo'],['das Labor','o laboratório']]},
 {t:'vocab',title:'Tecnologia e progresso',items:[['der Fortschritt','o progresso'],['fortschrittlich','progressista, avançado'],['die künstliche Intelligenz (KI)','a inteligência artificial (IA)'],['die Anwendung','a aplicação, o uso'],['anwenden','aplicar'],['die Entwicklung','o desenvolvimento'],['automatisieren','automatizar'],['der Roboter','o robô'],['ersetzen','substituir'],['die Gefahr','o perigo'],['das Risiko','o risco']]},
 {t:'mc',q:'Die Glühbirne wurde nicht von einer Person allein ___.',opts:['erfunden','entdeckt','bewiesen'],a:0},
 {t:'mc',q:'Neue Daten haben die alte These ___. Sie war falsch.',opts:['widerlegt','belegt','angewendet'],a:0},
 {t:'gap',q:'Kolumbus hat Amerika nicht erfunden, sondern ___. (descobriu – Perfekt)',a:['entdeckt']},
 {t:'match',q:'Ligue.',pairs:[['die Erkenntnis','a constatação'],['das Verfahren','o procedimento'],['beweisen','provar'],['der Fortschritt','o progresso'],['die Annahme','a suposição']]},
 {t:'tr',de:'O estudo comprova que o esporte reduz o estresse.',a:['Die Studie belegt, dass Sport Stress reduziert.','Die Studie belegt, dass Sport Stress verringert.','Die Studie beweist, dass Sport Stress reduziert.']},
 {t:'speak',es:'Künstliche Intelligenz kann viele Aufgaben automatisieren, aber sie kann den Menschen nicht vollständig ersetzen.',de:'A inteligência artificial pode automatizar muitas tarefas, mas não pode substituir o ser humano completamente.',tip:'<i>ersetzen</i> + acusativo: <i>den Menschen</i> (declinação -n).'}
]},
{id:'l2',title:'Alternativas à voz passiva',desc:'lässt sich lösen · lösbar · ist zu lösen',steps:[
 {t:'info',title:'Passiversatzformen',html:`<p>Em vez do Passiv com <i>werden</i> + modal, o alemão formal usa outras formas. Todas significam „<b>pode</b> ser feito“ ou „<b>deve</b> ser feito“:</p>
 <table><tr><th>forma</th><th>exemplo</th><th>= Passiv com modal</th></tr>
 <tr><td><b>sich lassen</b> + infinitivo</td><td class="es-t">Das Problem lässt sich lösen.</td><td class="es-t">Das Problem kann gelöst werden.</td></tr>
 <tr><td>adjetivo em <b>-bar</b></td><td class="es-t">Das Problem ist lösbar.</td><td class="es-t">Das Problem kann gelöst werden.</td></tr>
 <tr><td><b>sein + zu</b> + infinitivo</td><td class="es-t">Das Problem ist zu lösen.</td><td class="es-t">Das Problem kann / muss gelöst werden.</td></tr>
 <tr><td><b>sein + zu</b> (obrigação)</td><td class="es-t">Der Antrag ist bis Freitag abzugeben.</td><td class="es-t">Der Antrag muss bis Freitag abgegeben werden.</td></tr></table>
 <div class="ex">Com verbos separáveis, o <b>zu</b> fica no meio: <span class="es-t">abgeben → abzugeben</span> · <span class="es-t">einschalten → einzuschalten</span>. Negação com -bar muitas vezes com <b>un-</b>: <span class="es-t">unlösbar, unvorstellbar</span>.</div>`},
 {t:'vocab',title:'Adjetivos em -bar',items:[['machbar','viável'],['vorstellbar','imaginável'],['unvorstellbar','inimaginável'],['vorhersehbar','previsível'],['erkennbar','reconhecível, perceptível'],['vergleichbar','comparável'],['nachvollziehbar','compreensível (dá para entender o raciocínio)'],['vermeidbar','evitável'],['lösbar','solucionável']]},
 {t:'mc',q:'Die Ergebnisse ___ sich nicht mit den alten Daten vergleichen.',opts:['lassen','werden','sind'],a:0},
 {t:'mc',q:'Das Gerät ist vor der Reinigung ___.',opts:['auszuschalten','ausschalten','ausgeschaltet zu'],a:0},
 {t:'mc',q:'„Der Fehler kann nicht vermieden werden.“ = Der Fehler ist ___.',opts:['nicht vermeidbar','nicht vermeiden','nicht zu vermieden'],a:0},
 {t:'gap',q:'Deine Argumente sind gut ___. (dá para entender o raciocínio)',a:['nachvollziehbar']},
 {t:'gap',q:'Das Projekt ___ sich in drei Monaten umsetzen.',a:['lässt']},
 {t:'gap',q:'Die Rechnung ist innerhalb von 14 Tagen zu ___. (bezahlen)',a:['bezahlen']},
 {t:'order',es:'Die Folgen dieser Technologie sind heute noch nicht vorhersehbar',alt:['Heute sind die Folgen dieser Technologie noch nicht vorhersehbar'],de:'As consequências dessa tecnologia ainda não são previsíveis hoje.'},
 {t:'tr',de:'Isso não dá para explicar facilmente. (sich lassen)',a:['Das lässt sich nicht leicht erklären.','Das lässt sich nicht einfach erklären.']},
 {t:'tr',de:'O formulário deve ser preenchido completamente. (sein + zu)',a:['Das Formular ist vollständig auszufüllen.']}
]},
{id:'l3',title:'Descrever gráficos',desc:'der Anteil, steigen, sich verdoppeln, die Mehrheit …',steps:[
 {t:'vocab',title:'Estatísticas',items:[['die Grafik','o gráfico'],['das Diagramm','o diagrama'],['der Anteil','a parcela, a proporção'],['der Prozentsatz','a porcentagem'],['sich verdoppeln','dobrar'],['sich halbieren','cair pela metade'],['ein Drittel','um terço'],['ein Viertel','um quarto'],['knapp','pouco menos de'],['rund','cerca de'],['deutlich','claramente, bem'],['im Vergleich zu','em comparação com'],['gleich bleiben','permanecer igual']]},
 {t:'info',title:'Como descrever um gráfico',html:`<table><tr><td>Tema e fonte</td><td class="es-t">Die Grafik zeigt, wie viele Menschen in Deutschland KI-Programme nutzen. Die Daten stammen aus einer Umfrage von 2025.</td></tr>
 <tr><td>Tendência</td><td class="es-t">Der Anteil ist von 15 auf 45 Prozent gestiegen. · Die Zahl hat sich verdreifacht.</td></tr>
 <tr><td>Comparação</td><td class="es-t">Im Vergleich zu den Älteren nutzen Jüngere KI deutlich häufiger.</td></tr>
 <tr><td>Maior / menor</td><td class="es-t">Die Mehrheit (knapp 60 Prozent) … · Nur eine Minderheit …</td></tr></table>
 <div class="ex">Preposições: <b>von … auf</b> (de … para): <span class="es-t">von 15 auf 45 Prozent</span> · <b>um</b> (diferença): <span class="es-t">um 30 Prozentpunkte</span>.</div>`},
 {t:'read',title:'Leitura: Wer nutzt KI?',text:`Die Grafik zeigt, wie viele Erwachsene in Deutschland mindestens einmal pro Woche KI-Programme nutzen. Im Jahr 2023 waren es rund 15 Prozent, 2025 bereits 45 Prozent – der Anteil hat sich also verdreifacht. Besonders deutlich ist der Unterschied zwischen den Altersgruppen: Während bei den 18- bis 29-Jährigen knapp 70 Prozent KI regelmäßig verwenden, ist es bei den über 65-Jährigen nur etwa jeder Zehnte. Die Mehrheit der Befragten nutzt die Programme zum Übersetzen und zum Schreiben von Texten. Ein Viertel gibt an, KI auch im Beruf einzusetzen.`,de:`O gráfico mostra quantos adultos na Alemanha usam programas de IA pelo menos uma vez por semana. Em 2023 eram cerca de 15 por cento, em 2025 já 45 por cento – a parcela, portanto, triplicou. A diferença entre as faixas etárias é especialmente clara: enquanto entre os de 18 a 29 anos quase 70 por cento usam IA regularmente, entre os acima de 65 é só cerca de um em cada dez. A maioria dos entrevistados usa os programas para traduzir e escrever textos. Um quarto afirma usar IA também no trabalho.`},
 {t:'mc',q:'Wie hat sich die Nutzung von 2023 bis 2025 entwickelt?',opts:['Sie hat sich verdreifacht.','Sie hat sich halbiert.','Sie ist gleich geblieben.'],a:0},
 {t:'mc',q:'Wie viele Menschen über 65 nutzen KI regelmäßig?',opts:['etwa zehn Prozent','knapp 70 Prozent','ein Viertel'],a:0},
 {t:'mc',q:'Wofür nutzt die Mehrheit KI?',opts:['zum Übersetzen und Schreiben','für Spiele','zum Programmieren'],a:0},
 {t:'gap',q:'Die Zahl der Nutzer ist von 15 ___ 45 Prozent gestiegen.',a:['auf']},
 {t:'tr',de:'A maioria dos entrevistados trabalha em casa.',a:['Die Mehrheit der Befragten arbeitet zu Hause.','Die Mehrheit der Befragten arbeitet von zu Hause.','Die Mehrheit der Befragten arbeitet im Homeoffice.']}
]},
{id:'l4',title:'Escrever: opinião no fórum',desc:'Forumsbeitrag „KI in der Schule?“ (ca. 150 Wörter)',steps:[
 {t:'read',title:'Leitura: Diskussion im Forum',text:`Thema: Sollen Schülerinnen und Schüler KI bei den Hausaufgaben benutzen dürfen?
Mareike, Lehrerin: Ich sehe das kritisch. Wenn ein Programm die Texte schreibt, lernen die Kinder nicht mehr, selbst zu denken. Außerdem ist kaum erkennbar, welcher Text echt ist.
Leon_17: Verbieten lässt sich KI sowieso nicht. Die Schule sollte uns lieber zeigen, wie man sie sinnvoll anwendet. Im Beruf brauchen wir das später auch.
Herr Kaya, Vater: Für mich spielt der Datenschutz eine große Rolle. Wer garantiert, dass die Daten der Kinder nicht weitergegeben werden?`,de:`Tema: Os alunos devem poder usar IA nas tarefas de casa?\nMareike, professora: Vejo isso de forma crítica. Se um programa escreve os textos, as crianças não aprendem mais a pensar por conta própria. Além disso, é difícil perceber qual texto é autêntico.\nLeon_17: De qualquer forma, não dá para proibir a IA. A escola deveria nos mostrar como usá-la de forma sensata. No trabalho, mais tarde, também vamos precisar disso.\nSr. Kaya, pai: Para mim, a proteção de dados tem um papel importante. Quem garante que os dados das crianças não serão repassados?`},
 {t:'mc',q:'Was befürchtet Mareike?',opts:['Die Kinder lernen nicht mehr, selbst zu denken.','Die Kinder benutzen zu wenig Technik.','Die Lehrer verlieren ihre Arbeit.'],a:0},
 {t:'mc',q:'Welche Meinung hat Leon_17?',opts:['Man sollte lernen, KI sinnvoll zu nutzen.','KI sollte verboten werden.','Datenschutz ist am wichtigsten.'],a:0},
 {t:'mc',q:'Worum macht sich Herr Kaya Sorgen?',opts:['um die Daten der Kinder','um die Noten','um die Kosten'],a:0},
 {t:'info',title:'Argumentar por escrito',html:`<table><tr><td class="es-t">Meiner Ansicht nach … · Ich bin der Meinung, dass …</td><td>Na minha opinião …</td></tr>
 <tr><td class="es-t">Dafür spricht, dass … · Dagegen spricht, dass …</td><td>Um argumento a favor é que … · Um argumento contra é que …</td></tr>
 <tr><td class="es-t">Einerseits …, andererseits …</td><td>Por um lado …, por outro …</td></tr>
 <tr><td class="es-t">Ein wichtiges Argument ist …</td><td>Um argumento importante é …</td></tr>
 <tr><td class="es-t">Zusammenfassend lässt sich sagen, dass …</td><td>Resumindo, pode-se dizer que …</td></tr></table>`},
 {t:'free',task:'Escreva a sua contribuição no fórum (~150 palavras): 1) sua opinião sobre IA nas tarefas escolares, 2) dois argumentos (um a favor, um contra), 3) reaja a uma das opiniões acima, 4) uma proposta concreta para as escolas.',hint:'Meiner Ansicht nach … Einerseits …, andererseits … Mareike hat recht, wenn sie sagt, dass … Allerdings lässt sich … Ich schlage vor, dass … Zusammenfassend lässt sich sagen, …',focus:'Argumentation, Passiversatzformen, Konnektoren',model:'Meiner Ansicht nach lässt sich KI aus der Schule nicht mehr verbannen – die Frage ist nur, wie man sie sinnvoll einsetzt.\nEinerseits können Programme beim Lernen helfen: Sie erklären schwierige Themen in einfachen Worten und geben sofort Feedback. Andererseits hat Mareike recht, wenn sie sagt, dass Kinder selbst denken lernen müssen. Wer jeden Aufsatz von einer Maschine schreiben lässt, lernt nichts.\nAuch das Argument von Herrn Kaya ist nachvollziehbar: Daten von Minderjährigen sind besonders zu schützen.\nIch schlage deshalb vor, dass Schulen klare Regeln aufstellen: Hausaufgaben, die bewertet werden, sind ohne KI zu schreiben. Im Unterricht sollte man aber gemeinsam üben, wie man KI-Ergebnisse prüft und kritisch hinterfragt.\nZusammenfassend lässt sich sagen, dass KI eine Chance ist, wenn wir lernen, verantwortungsvoll damit umzugehen.'}
]}],
resumen:`<h3>Passiversatzformen</h3><p class="es-t">Das lässt sich lösen. · Das ist lösbar. · Das ist zu lösen. · Der Antrag ist bis Freitag abzugeben.</p>
<h3>-bar</h3><p class="es-t">machbar · vorstellbar · vorhersehbar · erkennbar · vergleichbar · nachvollziehbar · vermeidbar · erneuerbar</p>
<h3>Grafiken</h3><p class="es-t">Die Grafik zeigt … · Der Anteil ist von 15 auf 45 Prozent gestiegen. · Die Mehrheit … · im Vergleich zu …</p>`});

/* ================= KAPITEL 39 · GESELLSCHAFT IM WANDEL ================= */
LANGS.de.course.units.push({id:'k39',n:'39',level:'B2',title:'Gesellschaft im Wandel',sub:'Mudanças sociais e demografia · Konjunktiv I (discurso indireto: er sagt, er sei …) · discutir e contradizer',
goals:['Über demografischen Wandel, Vielfalt und Zusammenhalt sprechen','Konjunktiv I: indirekte Rede in Nachrichten und Berichten','Aussagen anderer korrekt wiedergeben','In einer Diskussion widersprechen und Kompromisse vorschlagen'],
situacion:{title:'Discussão no bairro',npc:'Herr Krüger',scene:'Numa reunião do bairro, discute-se se um antigo prédio de escritórios deve virar moradia para idosos ou um centro para jovens. O Sr. Krüger, morador antigo, tem uma opinião forte.',role:'Du bist Herr Krüger, 70 Jahre, seit 40 Jahren im Frankfurter Stadtteil Bornheim zu Hause. Du siezt. Bei einer Bürgerversammlung diskutierst du mit Lucas: Du willst, dass aus dem alten Bürogebäude Wohnungen für Seniorinnen und Senioren werden (Einsamkeit, steigende Mieten, Altersarmut). Lucas ist eher für ein Jugend- und Begegnungszentrum. Argumentiere engagiert, aber fair, und sei am Ende offen für einen Kompromiss (z. B. ein Mehrgenerationenhaus). Gib auch wieder, was andere gesagt haben (Konjunktiv I: Die Stadträtin hat gesagt, es gebe kein Geld …). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Defenda a sua posição com argumentos, contradiga com educação, cite o que outros disseram e chegue a um meio-termo.'},
placement:[
 {t:'mc',q:'Der Minister sagte, er ___ mit dem Ergebnis zufrieden.',opts:['sei','ist gewesen','wäre gewesen'],a:0},
 {t:'mc',q:'Sie erklärte, sie ___ keine Zeit.',opts:['habe','hat','hätten'],a:0},
 {t:'mc',q:'Die Forscher sagen, sie ___ neue Daten. (Konjunktiv I = Indikativ → Konjunktiv II)',opts:['hätten','haben','habe'],a:0},
 {t:'gap',q:'Der Sprecher betonte, die Firma ___ keine Stellen abbauen. (werden – Konj. I)',a:['werde']},
 {t:'mc',q:'„a igualdade de direitos“',opts:['die Gleichberechtigung','die Gleichgültigkeit','die Gleichzeitigkeit'],a:0},
 {t:'mc',q:'Da muss ich Ihnen ___. Das sehe ich ganz anders.',opts:['widersprechen','versprechen','besprechen'],a:0}],
lessons:[
{id:'l1',title:'Mudanças sociais',desc:'der demografische Wandel, die Vielfalt, die Einsamkeit …',steps:[
 {t:'vocab',title:'Sociedade e demografia',items:[['gesellschaftlich','social'],['der Wandel','a mudança, a transformação'],['der demografische Wandel','a mudança demográfica'],['die Lebenserwartung','a expectativa de vida'],['die Geburtenrate','a taxa de natalidade'],['die Altersarmut','a pobreza na velhice'],['der Generationenvertrag','o pacto entre gerações (aposentadoria)'],['das Mehrgenerationenhaus','a casa multigeracional'],['die Einsamkeit','a solidão'],['der Zusammenhalt','a coesão, a união'],['die Solidarität','a solidariedade'],]},
 {t:'vocab',title:'Diversidade e igualdade',items:[['die Vielfalt','a diversidade'],['vielfältig','diverso, variado'],['die Gleichberechtigung','a igualdade de direitos'],['die Chancengleichheit','a igualdade de oportunidades'],['die Ungleichheit','a desigualdade'],['benachteiligt','desfavorecido'],['die Benachteiligung','a desvantagem, a discriminação'],['die Zuwanderung','a imigração'],['der Zuwanderer / die Zuwanderin','o imigrante / a imigrante'],['die Vorurteile (Pl.)','os preconceitos'],['die Akzeptanz','a aceitação'],['sich engagieren für','engajar-se por']]},
 {t:'mc',q:'Die Menschen werden immer älter – die ___ steigt.',opts:['Lebenserwartung','Geburtenrate','Altersarmut'],a:0},
 {t:'mc',q:'Viele ältere Menschen leben allein und leiden unter ___.',opts:['Einsamkeit','Vielfalt','Solidarität'],a:0},
 {t:'gap',q:'Frauen und Männer sollen die gleichen Rechte haben: Das nennt man ___.',a:['Gleichberechtigung']},
 {t:'match',q:'Ligue.',pairs:[['der Zusammenhalt','a coesão'],['die Vielfalt','a diversidade'],['benachteiligt','desfavorecido'],['die Zuwanderung','a imigração'],['das Ehrenamt','o trabalho voluntário']]},
 {t:'tr',de:'Ela se engaja pelos direitos dos imigrantes.',a:['Sie engagiert sich für die Rechte der Zuwanderer.','Sie engagiert sich für die Rechte von Zuwanderern.']},
 {t:'speak',es:'Durch den demografischen Wandel wird der Zusammenhalt zwischen den Generationen immer wichtiger.',de:'Com a mudança demográfica, a união entre as gerações fica cada vez mais importante.',tip:'<i>durch</i> + acusativo: <i>durch den Wandel</i>.'}
]},
{id:'l2',title:'Konjunktiv I',desc:'er sagt, er sei … · sie habe … · man könne …',steps:[
 {t:'info',title:'O discurso indireto',html:`<p>Em <b>notícias e relatórios</b>, para reproduzir o que outra pessoa disse sem assumir que é verdade, usa-se o <b>Konjunktiv I</b>. Forma: radical do infinitivo + terminação (quase só usado na 3ª pessoa):</p>
 <table><tr><th>infinitivo</th><th>er / sie / es</th></tr>
 <tr><td>sein</td><td class="es-t">er sei · sie seien</td></tr>
 <tr><td>haben</td><td class="es-t">er habe</td></tr>
 <tr><td>werden</td><td class="es-t">er werde</td></tr>
 <tr><td>können / müssen / wollen</td><td class="es-t">er könne · er müsse · er wolle</td></tr>
 <tr><td>kommen / geben / wissen</td><td class="es-t">er komme · es gebe · er wisse</td></tr></table>
 <div class="ex">Exemplo: <span class="es-t">Die Ministerin sagt: „Wir haben genug Geld.“ → Die Ministerin sagt, man habe genug Geld.</span></div>
 <p>Se o Konjunktiv I for <b>igual ao presente</b> (sobretudo no plural: <i>sie haben</i>), usa-se o <b>Konjunktiv II</b>: <span class="es-t">Sie sagen, sie hätten keine Zeit.</span></p>
 <p>Passado: Konjunktiv I de <i>haben/sein</i> + particípio: <span class="es-t">Er sagt, er habe den Bericht gelesen.</span> · <span class="es-t">Sie sagt, sie sei krank gewesen.</span></p>
 <div class="ex">Na conversa, as pessoas normalmente usam o indicativo ou o Konjunktiv II: <span class="es-t">Er hat gesagt, dass er keine Zeit hat / hätte.</span></div>`},
 {t:'mc',q:'Der Bürgermeister erklärte, die Stadt ___ mehr Sozialwohnungen bauen.',opts:['wolle','will','wollen'],a:0},
 {t:'mc',q:'Die Studentin berichtet, sie ___ drei Nebenjobs.',opts:['habe','hat','hätten'],a:0},
 {t:'mc',q:'Die Eltern sagen, sie ___ keinen Kitaplatz gefunden.',opts:['hätten','haben','habe'],a:0},
 {t:'mc',q:'Laut dem Bericht ___ die Zahl der Ehrenamtlichen gestiegen.',opts:['sei','ist gewesen','wäre'],a:0},
 {t:'gap',q:'Die Ärztin sagt, man ___ mehr Sport machen. (sollen – Konj. I)',a:['solle']},
 {t:'gap',q:'Er behauptet, er ___ davon nichts gewusst. (haben – Konj. I)',a:['habe']},
 {t:'gap',q:'Die Polizei teilte mit, es ___ keine Verletzten. (geben – Konj. I)',a:['gebe']},
 {t:'order',es:'Die Forscherin betonte es gebe noch viele offene Fragen',alt:['Es gebe noch viele offene Fragen betonte die Forscherin'],de:'A pesquisadora enfatizou que ainda haveria muitas questões em aberto.'},
 {t:'tr',de:'O ministro diz que a situação é difícil. (Konjunktiv I)',a:['Der Minister sagt, die Situation sei schwierig.','Der Minister sagt, die Lage sei schwierig.']},
 {t:'tr',de:'Ela disse que tinha estado doente. (Konjunktiv I)',a:['Sie sagte, sie sei krank gewesen.','Sie hat gesagt, sie sei krank gewesen.']}
]},
{id:'l3',title:'Ler notícias',desc:'Bericht über eine Studie · indirekte Rede',steps:[
 {t:'vocab',title:'Verbos para citar',items:[['behaupten','afirmar (sem provas)'],['betonen','enfatizar'],['mitteilen','comunicar, informar'],['angeben','declarar, indicar'],['zufolge','segundo (depois do substantivo)'],['die Befragten (Pl.)','os entrevistados']]},
 {t:'read',title:'Leitura: Studie zur Einsamkeit',text:`Immer mehr junge Menschen fühlen sich einsam. Das ist das Ergebnis einer neuen Studie der Universität Frankfurt. Laut der Studie gibt jeder vierte Befragte zwischen 18 und 29 Jahren an, sich oft allein zu fühlen.
Die Leiterin der Studie, Prof. Sabine Lorenz, erklärte, Einsamkeit sei längst kein Problem nur älterer Menschen mehr. Die Pandemie habe die Situation verschärft, aber auch soziale Medien spielten eine Rolle. Viele junge Leute hätten zwar Hunderte Kontakte im Netz, aber niemanden, mit dem sie wirklich reden könnten.
Lorenz betonte, die Politik müsse handeln. Sie schlägt vor, mehr Treffpunkte zu schaffen, an denen sich Jung und Alt begegnen können – zum Beispiel Mehrgenerationenhäuser. Ein Sprecher des Familienministeriums teilte mit, man werde die Ergebnisse genau prüfen.`,de:`Cada vez mais jovens se sentem sozinhos. Esse é o resultado de um novo estudo da Universidade de Frankfurt. Segundo o estudo, um em cada quatro entrevistados entre 18 e 29 anos declara sentir-se sozinho com frequência.\nA coordenadora do estudo, Prof.ª Sabine Lorenz, declarou que a solidão há muito tempo não seria mais um problema só de pessoas mais velhas. A pandemia teria agravado a situação, mas as redes sociais também teriam um papel. Muitos jovens teriam centenas de contatos na internet, mas ninguém com quem pudessem realmente conversar.\nLorenz enfatizou que a política precisaria agir. Ela propõe criar mais pontos de encontro onde jovens e idosos possam se encontrar – por exemplo, casas multigeracionais. Um porta-voz do Ministério da Família informou que iriam examinar os resultados com atenção.`},
 {t:'mc',q:'Wie viele junge Befragte fühlen sich oft allein?',opts:['jeder Vierte','jeder Zehnte','die Hälfte'],a:0},
 {t:'mc',q:'Was sagt Prof. Lorenz über soziale Medien?',opts:['Sie spielen auch eine Rolle.','Sie lösen das Problem.','Sie haben keinen Einfluss.'],a:0},
 {t:'mc',q:'Warum steht „sei“ und „habe“ im Text?',opts:['Die Zeitung gibt wieder, was Prof. Lorenz gesagt hat.','Es ist ein Wunsch.','Es ist eine Bedingung.'],a:0},
 {t:'mc',q:'Was hat das Ministerium angekündigt?',opts:['Es wird die Ergebnisse prüfen.','Es baut sofort neue Häuser.','Es kritisiert die Studie.'],a:0},
 {t:'gap',q:'Prof. Lorenz sagt: „Die Politik muss handeln.“ → Sie sagt, die Politik ___ handeln.',a:['müsse']}
]},
{id:'l4',title:'Discutir e contradizer',desc:'Da muss ich widersprechen · Was halten Sie von einem Kompromiss?',steps:[
 {t:'info',title:'Frases para discussões',html:`<table><tr><th>opinião</th><td class="es-t">Ich bin der Auffassung, dass … · Ich vertrete die Meinung, dass …</td></tr>
 <tr><th>concordar em parte</th><td class="es-t">Da haben Sie zwar recht, aber … · Das stimmt teilweise, allerdings …</td></tr>
 <tr><th>contradizer</th><td class="es-t">Da muss ich Ihnen widersprechen. · Das sehe ich anders. · Davon bin ich nicht überzeugt.</td></tr>
 <tr><th>interromper</th><td class="es-t">Darf ich kurz unterbrechen? · Lassen Sie mich bitte ausreden.</td></tr>
 <tr><th>meio-termo</th><td class="es-t">Was halten Sie von einem Kompromiss? · Wir könnten uns darauf einigen, dass …</td></tr></table>`},
 {t:'vocab',title:'Discussão',items:[['die Auffassung','a opinião, o entendimento'],['vertreten','defender (opinião); representar'],['überzeugt sein von','estar convencido de'],['unterbrechen','interromper'],['ausreden lassen','deixar terminar de falar'],['sich einigen auf','chegar a um acordo sobre'],['der Einwand','a objeção']]},
 {t:'dialog',place:'Bürgerversammlung',title:'Moradia para idosos ou centro para jovens?',scene:'Na reunião do bairro, o Sr. Krüger defende moradias para idosos no prédio antigo.',lines:[
  {n:'Herr Krüger',es:'Die Mieten steigen ständig. Viele Rentner können sich ihre Wohnung nicht mehr leisten. Deshalb brauchen wir dort Seniorenwohnungen!',de:'Os aluguéis sobem sem parar. Muitos aposentados não conseguem mais pagar o apartamento. Por isso precisamos de moradias para idosos ali!'},
  {you:true,opts:[{es:'Da haben Sie zwar recht, aber auch die Jugendlichen im Viertel haben keinen Ort, wo sie sich treffen können.',ok:true},{es:'Nein, Rentner sind nicht wichtig.',ok:false,why:'Num debate no nível B2, reconheça o argumento do outro antes de contradizer – e sem desrespeito.'}]},
  {n:'Herr Krüger',es:'Die Jugendlichen haben doch ihre Handys. Die Stadträtin hat außerdem gesagt, es gebe kein Geld für ein Jugendzentrum.',de:'Os jovens têm os celulares deles. Além disso, a vereadora disse que não haveria dinheiro para um centro de jovens.'},
  {you:true,opts:[{es:'Davon bin ich nicht überzeugt. Gerade junge Leute fühlen sich oft einsam. Was halten Sie von einem Kompromiss – einem Mehrgenerationenhaus?',ok:true},{es:'Das ist falsch, Sie verstehen das nicht.',ok:false,why:'Prefira expressões como „Davon bin ich nicht überzeugt“ e proponha uma solução.'}]},
  {n:'Herr Krüger',es:'Hm. Wohnungen für Ältere und Räume für Jüngere unter einem Dach … Darauf könnten wir uns vielleicht einigen.',de:'Hum. Moradias para mais velhos e espaços para mais jovens sob o mesmo teto … Nisso talvez a gente pudesse chegar a um acordo.'}]},
 {t:'mc',q:'Sie möchten höflich widersprechen. Was sagen Sie?',opts:['Das sehe ich etwas anders.','Sie haben keine Ahnung.','Seien Sie still.'],a:0},
 {t:'gap',q:'Entschuldigung, lassen Sie mich bitte ___! (terminar de falar)',a:['ausreden']},
 {t:'gap',q:'Nach langer Diskussion haben wir uns auf einen Kompromiss ___.',a:['geeinigt']},
 {t:'free',task:'Escreva um comentário (~150 palavras) para o jornal do bairro sobre o futuro do prédio: 1) reproduza duas opiniões da reunião (Konjunktiv I: Herr Krüger sagte, …), 2) dê a sua opinião com argumentos, 3) proponha um meio-termo.',hint:'Bei der Bürgerversammlung ging es um … Herr Krüger sagte, viele Rentner könnten … Die Stadträtin erklärte, es gebe … Ich bin der Auffassung, dass … Deshalb schlage ich vor, …',focus:'Konjunktiv I, Argumentation, Konnektoren',model:'Bei der Bürgerversammlung am Dienstag ging es um die Zukunft des alten Bürogebäudes in der Saalburgstraße. Herr Krüger, der seit 40 Jahren im Viertel wohnt, sagte, viele Rentnerinnen und Rentner könnten sich ihre Wohnungen nicht mehr leisten. Die Stadträtin erklärte, es gebe im Moment kein Geld für ein Jugendzentrum.\nIch bin der Auffassung, dass beide Gruppen Unterstützung brauchen. Einsamkeit betrifft nicht nur ältere Menschen, sondern auch viele Jugendliche. Außerdem fehlen im Viertel Orte, an denen sich Menschen unterschiedlichen Alters begegnen.\nDeshalb schlage ich ein Mehrgenerationenhaus vor: In den oberen Etagen könnten bezahlbare Wohnungen für Seniorinnen und Senioren entstehen, im Erdgeschoss ein Café und Räume für Jugendliche. Ehrenamtliche könnten das Programm unterstützen. So würde der Zusammenhalt im Viertel gestärkt.'}
]}],
resumen:`<h3>Konjunktiv I</h3><p class="es-t">er sei · er habe · er werde · er könne · es gebe · Sie sagen, sie hätten keine Zeit. · Er sagt, er habe den Bericht gelesen.</p>
<h3>Zitieren</h3><p class="es-t">behaupten · betonen · mitteilen · laut der Studie · der Studie zufolge</p>
<h3>Diskutieren</h3><p class="es-t">Ich bin der Auffassung, dass … · Da muss ich Ihnen widersprechen. · Davon bin ich nicht überzeugt. · Was halten Sie von einem Kompromiss?</p>`});

/* ================= KAPITEL 40 · WIRTSCHAFT & KONSUM ================= */
LANGS.de.course.units.push({id:'k40',n:'40',level:'B2',title:'Wirtschaft & Konsum',sub:'Economia e empresas · consumo consciente · atributos com particípio (das von uns entwickelte Produkt) · reclamação formal',
goals:['Über Unternehmen, Märkte und wirtschaftliche Entwicklungen sprechen','Konsumverhalten und Nachhaltigkeit diskutieren','Erweiterte Partizipialattribute verstehen und in Relativsätze umformen','Eine formelle Reklamation schreiben'],
situacion:{title:'Reclamação por telefone',npc:'Frau Seidel',scene:'O notebook que você comprou numa loja online parou de funcionar depois de três semanas. Você liga para o atendimento ao cliente.',role:'Du bist Frau Seidel vom Kundenservice des Onlineshops „Technikwelt“. Du siezt. Lucas ruft an, weil sein vor drei Wochen gekaufter Laptop nicht mehr startet. Frag nach Bestellnummer und Fehlerbeschreibung. Biete zuerst nur eine Reparatur an (Dauer: vier Wochen). Wenn Lucas freundlich, aber bestimmt auf sein Recht besteht (Gewährleistung, er braucht den Laptop für die Arbeit), biete einen Umtausch oder die Erstattung des Kaufpreises an. Benutze Partizipialattribute (das von Ihnen gekaufte Gerät, die angegebene Adresse). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Descreva o problema, recuse com educação a primeira proposta, argumente com os seus direitos e consiga uma troca ou o reembolso.'},
placement:[
 {t:'mc',q:'Das ___ Produkt verkauft sich sehr gut. (= das Produkt, das von uns entwickelt wurde)',opts:['von uns entwickelte','von uns entwickelnde','uns entwickelt'],a:0},
 {t:'mc',q:'Die seit Monaten ___ Preise machen vielen Menschen Sorgen.',opts:['steigenden','gestiegene','steigende'],a:0},
 {t:'mc',q:'Der ___ des Unternehmens ist im letzten Jahr um 10 % gestiegen.',opts:['Umsatz','Verbraucher','Verlust'],a:0},
 {t:'gap',q:'Die Firma hat keine Kunden mehr und ist ___ gegangen. (faliu)',a:['pleite']},
 {t:'mc',q:'„o consumidor“',opts:['der Verbraucher','der Verkäufer','der Vertreter'],a:0},
 {t:'mc',q:'Ich möchte den Kaufpreis ___ bekommen.',opts:['erstattet','erstellt','ersetzt'],a:0}],
lessons:[
{id:'l1',title:'Economia e empresas',desc:'der Umsatz, der Gewinn, die Nachfrage …',steps:[
 {t:'vocab',title:'Economia',items:[['wirtschaftlich','econômico'],['das Unternehmen','a empresa'],['der Konzern','o grupo empresarial, a multinacional'],['der Umsatz','o faturamento'],['der Gewinn','o lucro; o prêmio'],['der Verlust','o prejuízo, a perda'],['die Nachfrage','a demanda, a procura'],['die Inflation','a inflação'],['die Aktie','a ação (na bolsa)'],['die Börse','a bolsa de valores'],['investieren','investir'],['die Investition','o investimento'],['pleitegehen','falir'],['die Insolvenz','a insolvência, a falência'],['der Standort','a localização (da empresa)'],['die Branche','o setor, o ramo'],['der Export','a exportação']]},
 {t:'mc',q:'Die Firma hat dieses Jahr mehr verkauft – der ___ ist gestiegen.',opts:['Umsatz','Verlust','Standort'],a:0},
 {t:'mc',q:'Wenn viele Menschen ein Produkt kaufen wollen, ist die ___ groß.',opts:['Nachfrage','Inflation','Insolvenz'],a:0},
 {t:'gap',q:'Lucas arbeitet in der IT-___. (o ramo)',a:['Branche']},
 {t:'match',q:'Ligue.',pairs:[['der Gewinn','o lucro'],['der Verlust','o prejuízo'],['die Aktie','a ação'],['der Wettbewerb','a concorrência'],['investieren','investir']]},
 {t:'tr',de:'A empresa investe muito dinheiro em pesquisa.',a:['Das Unternehmen investiert viel Geld in Forschung.','Das Unternehmen investiert viel Geld in die Forschung.','Die Firma investiert viel Geld in Forschung.','Die Firma investiert viel Geld in die Forschung.']},
 {t:'speak',es:'Wegen der hohen Inflation ist die Nachfrage nach günstigen Produkten deutlich gestiegen.',de:'Por causa da inflação alta, a procura por produtos baratos aumentou bastante.',tip:'<i>die Nachfrage nach</i> + dativo = a procura por.'}
]},
{id:'l2',title:'Atributos com particípio',desc:'das von uns entwickelte Produkt · die steigenden Preise',steps:[
 {t:'info',title:'Erweiterte Partizipialattribute',html:`<p>Em textos formais, uma <b>oração relativa</b> vira muitas vezes um <b>atributo antes do substantivo</b>. O particípio funciona como adjetivo (com terminação!) e tudo o que pertence a ele vem antes:</p>
 <table><tr><th>oração relativa</th><th>atributo com particípio</th></tr>
 <tr><td class="es-t">das Produkt, das von uns entwickelt wurde</td><td class="es-t">das von uns entwickelte Produkt</td></tr>
 <tr><td class="es-t">die Preise, die seit Monaten steigen</td><td class="es-t">die seit Monaten steigenden Preise</td></tr>
 <tr><td class="es-t">der Laptop, den ich online gekauft habe</td><td class="es-t">der online gekaufte Laptop</td></tr>
 <tr><td class="es-t">Kunden, die sich beschweren</td><td class="es-t">sich beschwerende Kunden</td></tr></table>
 <div class="ex"><b>Partizip II</b> (gekauft, entwickelt) = passivo/terminado · <b>Partizip I</b> (steigend, wachsend) = ativo/acontecendo agora.<br>Para ler: encontre o <b>artigo</b>, pule até o <b>substantivo</b> e depois leia o meio: <span class="es-t">die (seit Jahren stark wachsende) Nachfrage</span>.</div>`},
 {t:'mc',q:'„die Ware, die gestern geliefert wurde“ =',opts:['die gestern gelieferte Ware','die gestern liefernde Ware','die gestern geliefert Ware'],a:0},
 {t:'mc',q:'„die Zahl der Menschen, die online einkaufen“ =',opts:['die Zahl der online einkaufenden Menschen','die Zahl der online eingekauften Menschen','die Zahl der Menschen online einkaufend'],a:0},
 {t:'mc',q:'Wie heißt der Relativsatz? „das im Vertrag genannte Datum“',opts:['das Datum, das im Vertrag genannt wird','das Datum, das den Vertrag nennt','das Datum, das im Vertrag nennt'],a:0},
 {t:'gap',q:'Der von mir ___ Artikel ist kaputt. (bestellen)',a:['bestellte']},
 {t:'gap',q:'Wir suchen eine gut Englisch ___ Mitarbeiterin. (sprechen – Partizip I)',a:['sprechende']},
 {t:'gap',q:'Bitte schicken Sie die Ware an die von mir ___ Adresse. (angeben)',a:['angegebene']},
 {t:'order',es:'Die seit Jahren steigende Nachfrage nach Secondhand-Kleidung überrascht viele Händler',de:'A procura por roupas de segunda mão, que cresce há anos, surpreende muitos comerciantes.'},
 {t:'tr',de:'o produto vendido no mundo inteiro (atributo com particípio)',a:['das weltweit verkaufte Produkt','das in der ganzen Welt verkaufte Produkt']}
]},
{id:'l3',title:'Consumo consciente',desc:'der Verbraucher, fair, die Lieferkette …',steps:[
 {t:'vocab',title:'Consumo',items:[['der Verbraucher / die Verbraucherin','o consumidor / a consumidora'],['das Konsumverhalten','o comportamento de consumo'],['der Onlinehandel','o comércio online'],['der Händler / die Händlerin','o / a comerciante'],['die Lieferkette','a cadeia de fornecimento'],['fair gehandelt','de comércio justo'],['die Marke','a marca'],['das Etikett','a etiqueta'],['der Fehlkauf','a compra errada'],['sich verschulden','endividar-se'],['die Gewährleistung','a garantia legal'],['die Erstattung','o reembolso'],['erstatten','reembolsar'],['der Umtausch','a troca'],['verzichten auf','abrir mão de, renunciar a'],['die Wegwerfgesellschaft','a sociedade do descartável']]},
 {t:'read',title:'Leitura: Reparieren statt wegwerfen',text:`Smartphone kaputt? Neu kaufen! So denken immer weniger Menschen in Deutschland. Die Zahl der sogenannten Repair-Cafés, in denen Ehrenamtliche kostenlos defekte Geräte reparieren, hat sich in den letzten zehn Jahren mehr als verdoppelt. Auch der Handel mit gebrauchter Kleidung wächst: Fast jeder dritte Verbraucher hat im letzten Jahr Secondhand-Mode gekauft.
Für die Wirtschaft ist das eine Herausforderung. Viele Hersteller verdienen ihr Geld mit Produkten, die schnell ersetzt werden. Ein im letzten Jahr beschlossenes EU-Gesetz soll das ändern: Hersteller müssen Ersatzteile künftig mindestens sieben Jahre lang anbieten.
Kritiker sagen allerdings, das allein reiche nicht. Solange Reparaturen teurer seien als neue Geräte, werde sich das Konsumverhalten kaum ändern.`,de:`Celular quebrado? Compra um novo! Cada vez menos pessoas na Alemanha pensam assim. O número dos chamados Repair-Cafés, onde voluntários consertam aparelhos com defeito de graça, mais que dobrou nos últimos dez anos. O comércio de roupas usadas também cresce: quase um em cada três consumidores comprou moda de segunda mão no último ano.\nPara a economia, isso é um desafio. Muitos fabricantes ganham dinheiro com produtos que são substituídos rapidamente. Uma lei da UE aprovada no ano passado deve mudar isso: no futuro, os fabricantes precisam oferecer peças de reposição por pelo menos sete anos.\nCríticos dizem, porém, que isso sozinho não bastaria. Enquanto consertos forem mais caros que aparelhos novos, o comportamento de consumo dificilmente vai mudar.`},
 {t:'mc',q:'Was passiert in einem Repair-Café?',opts:['Freiwillige reparieren kostenlos Geräte.','Man kauft gebrauchte Kleidung.','Man trinkt Kaffee und arbeitet.'],a:0},
 {t:'mc',q:'Was regelt das neue EU-Gesetz?',opts:['Ersatzteile müssen sieben Jahre angeboten werden.','Neue Geräte werden billiger.','Reparaturen sind kostenlos.'],a:0},
 {t:'mc',q:'Was meinen die Kritiker?',opts:['Reparaturen sind oft zu teuer.','Das Gesetz ist zu streng.','Niemand kauft Secondhand.'],a:0},
 {t:'gap',q:'Ein im letzten Jahr ___ Gesetz soll das ändern. (beschließen)',a:['beschlossenes']},
 {t:'tr',de:'Eu abro mão de roupas novas.',a:['Ich verzichte auf neue Kleidung.','Ich verzichte auf neue Klamotten.']}
]},
{id:'l4',title:'Escrever: reclamação formal',desc:'Reklamation an einen Onlineshop (ca. 100 Wörter)',steps:[
 {t:'info',title:'Reclamar por escrito',html:`<table><tr><td>Assunto</td><td class="es-t">Reklamation – Bestellung Nr. 48213 vom 2. Mai</td></tr>
 <tr><td>Situação</td><td class="es-t">Am 2. Mai habe ich bei Ihnen einen Laptop bestellt, der am 5. Mai geliefert wurde.</td></tr>
 <tr><td>Problema</td><td class="es-t">Leider startet das Gerät seit gestern nicht mehr.</td></tr>
 <tr><td>Exigência</td><td class="es-t">Ich bitte Sie daher, mir umgehend ein neues Gerät zu schicken oder den Kaufpreis zu erstatten.</td></tr>
 <tr><td>Prazo</td><td class="es-t">Ich erwarte Ihre Antwort bis zum 20. Mai.</td></tr></table>
 <div class="ex">Na Alemanha, a <b>Gewährleistung</b> (garantia legal) vale 2 anos. Nos primeiros 12 meses, presume-se que o defeito já existia na compra.</div>`},
 {t:'mc',q:'Welcher Satz passt am besten in eine formelle Reklamation?',opts:['Ich bitte Sie, mir den Kaufpreis zu erstatten.','Gebt mir sofort mein Geld zurück!','Na ja, vielleicht könnt ihr was machen.'],a:0},
 {t:'gap',q:'Ich bitte Sie, mir ___ ein neues Gerät zu schicken. (imediatamente)',a:['umgehend']},
 {t:'free',task:'Escreva uma reclamação formal para a loja online (~100 palavras): 1) o que você comprou e quando, 2) qual é o problema, 3) o que você já tentou, 4) o que você exige e até quando.',hint:'Sehr geehrte Damen und Herren, am … habe ich bei Ihnen … bestellt. Leider … Ich habe bereits … Ich bitte Sie daher, … Ich erwarte Ihre Antwort bis … Mit freundlichen Grüßen',focus:'formelle Sprache, Partizipialattribute, Infinitiv mit zu',model:'Sehr geehrte Damen und Herren,\nam 2. Mai habe ich bei Ihnen einen Laptop des Modells „ProBook 14“ bestellt (Bestellnummer 48213). Das am 5. Mai gelieferte Gerät funktionierte zunächst einwandfrei. Seit gestern startet es jedoch nicht mehr. Ich habe bereits versucht, den Akku vollständig zu laden und das Gerät zurückzusetzen – leider ohne Erfolg.\nDa ich den Laptop dringend für meine Arbeit benötige, bitte ich Sie, mir umgehend ein neues Gerät zu schicken oder den Kaufpreis zu erstatten. Eine Reparatur, die mehrere Wochen dauert, kommt für mich nicht in Frage.\nIch erwarte Ihre Antwort bis zum 20. Mai.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Partizipialattribute</h3><p class="es-t">das von uns entwickelte Produkt · die seit Monaten steigenden Preise · der online gekaufte Laptop · die von mir angegebene Adresse</p>
<h3>Wirtschaft</h3><p class="es-t">der Umsatz · der Gewinn · der Verlust · die Nachfrage · die Branche · investieren · pleitegehen</p>
<h3>Reklamation</h3><p class="es-t">Ich bitte Sie, mir den Kaufpreis zu erstatten. · die Gewährleistung · der Umtausch · Ich erwarte Ihre Antwort bis …</p>`});

/* ================= KAPITEL 41 · GESUNDHEIT & PSYCHE ================= */
LANGS.de.course.units.push({id:'k41',n:'41',level:'B2',title:'Gesundheit & Psyche',sub:'Estresse e bem-estar · sistema de saúde · modais para suposições (er dürfte, sie muss …) · Futur II (er wird … gewesen sein)',
goals:['Über Stress, Belastung und psychische Gesundheit sprechen','Modalverben subjektiv: Vermutungen und Behauptungen (muss, dürfte, kann, soll, will)','Futur II: Vermutungen über die Vergangenheit','Einen Ratgebertext verstehen und Tipps geben'],
situacion:{title:'Conversa com o médico',npc:'Dr. Yilmaz',scene:'Há semanas você dorme mal e se sente esgotado. Você vai à sua médica de família, a Dra. Yilmaz.',role:'Du bist Dr. Elif Yilmaz, Hausärztin in Frankfurt. Du siezt. Lucas kommt, weil er seit Wochen schlecht schläft, müde und gereizt ist. Frag genau nach (seit wann, Arbeit, Schlaf, Sport, Ernährung, Privatleben). Äußere vorsichtige Vermutungen (Das dürfte mit dem Stress zusammenhängen; Sie werden in letzter Zeit viel gearbeitet haben). Erkläre Möglichkeiten: Krankschreibung, Entspannungskurs (zahlt die Krankenkasse), Überweisung zu einer Psychotherapeutin. Sprich natürliches Deutsch auf B2-Niveau.',goal:'Descreva os sintomas com detalhes, responda às perguntas e decida com a médica o que fazer.'},
placement:[
 {t:'mc',q:'Er ist nicht im Büro. Er ___ krank sein. (provavelmente)',opts:['dürfte','soll','will'],a:0},
 {t:'mc',q:'Sie ___ sehr reich sein – das sagen jedenfalls alle. (dizem que)',opts:['soll','will','muss'],a:0},
 {t:'mc',q:'Er ___ den Text allein geschrieben haben. Aber das glaube ich nicht. (ele afirma)',opts:['will','soll','dürfte'],a:0},
 {t:'gap',q:'Jana ist noch nicht da. Sie ___ den Zug verpasst haben. (Futur II: werden)',a:['wird']},
 {t:'mc',q:'„esgotado, sobrecarregado (não dá conta)“',opts:['überfordert','überzeugt','überrascht'],a:0},
 {t:'mc',q:'Diese Krankheit ist ___. Bleiben Sie bitte zu Hause.',opts:['ansteckend','chronisch','psychisch'],a:0}],
lessons:[
{id:'l1',title:'Estresse e bem-estar',desc:'die Belastung, überfordert, abschalten …',steps:[
 {t:'vocab',title:'Psique e estresse',items:[['die Psyche','a psique'],['psychisch','psíquico, mental'],['die Belastung','a carga, a sobrecarga'],['überfordert','sobrecarregado'],['die Erschöpfung','o esgotamento'],['das Burn-out','o burnout'],['die Depression','a depressão'],['der Psychotherapeut / die Psychotherapeutin','o psicoterapeuta / a psicoterapeuta'],['die Achtsamkeit','a atenção plena'],['abschalten','desligar(-se), relaxar'],['die Auszeit','a pausa, o tempo para si'],['gereizt','irritado'],['die Schlafstörung','o distúrbio do sono'],['das Selbstwertgefühl','a autoestima'],['vorbeugen','prevenir'],['ausgeglichen','equilibrado']]},
 {t:'mc',q:'Nach der Arbeit kann ich einfach nicht ___. Ich denke immer an meine Projekte.',opts:['abschalten','vorbeugen','überfordern'],a:0},
 {t:'mc',q:'Seit Wochen schläft er schlecht. Er hat ___.',opts:['Schlafstörungen','Achtsamkeit','eine Auszeit'],a:0},
 {t:'gap',q:'Sport kann Stress ___. (prevenir)',a:['vorbeugen']},
 {t:'match',q:'Ligue.',pairs:[['überfordert','sobrecarregado'],['gereizt','irritado'],['ausgeglichen','equilibrado'],['die Erschöpfung','o esgotamento'],['die Auszeit','a pausa']]},
 {t:'tr',de:'Preciso de uma pausa.',a:['Ich brauche eine Auszeit.']},
 {t:'speak',es:'In letzter Zeit fühle ich mich oft überfordert und kann abends nicht mehr abschalten.',de:'Ultimamente me sinto muitas vezes sobrecarregado e não consigo mais relaxar à noite.',tip:'<i>abschalten</i> é separável: <i>ich schalte ab</i>, mas com modal: <i>ich kann nicht abschalten</i>.'}
]},
{id:'l2',title:'Modais para suposições',desc:'muss · dürfte · kann · soll · will',steps:[
 {t:'info',title:'Uso subjetivo dos modais',html:`<p>Os modais também expressam <b>o quanto o falante tem certeza</b> – ou que a informação vem de outra pessoa:</p>
 <table><tr><th>modal</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>muss</b></td><td>quase certeza (~90 %)</td><td class="es-t">Er muss krank sein. Er fehlt nie.</td></tr>
 <tr><td><b>dürfte</b></td><td>provável (~75 %)</td><td class="es-t">Das dürfte am Stress liegen.</td></tr>
 <tr><td><b>kann / könnte</b></td><td>possível (~50 %)</td><td class="es-t">Sie könnte im Meeting sein.</td></tr>
 <tr><td><b>soll</b></td><td>dizem que (outra pessoa afirma)</td><td class="es-t">Der neue Chef soll sehr streng sein.</td></tr>
 <tr><td><b>will</b></td><td>ele próprio afirma (duvidoso)</td><td class="es-t">Er will nie krank gewesen sein.</td></tr></table>
 <div class="ex">Sobre o <b>passado</b>: modal + particípio + <i>haben/sein</i>: <span class="es-t">Sie muss den Termin vergessen haben.</span> · <span class="es-t">Er soll lange im Krankenhaus gewesen sein.</span></div>`},
 {t:'mc',q:'Das Licht ist an. Tom ___ zu Hause sein. (quase certeza)',opts:['muss','soll','will'],a:0},
 {t:'mc',q:'Laut Zeitung ___ das neue Medikament sehr wirksam sein.',opts:['soll','will','muss'],a:0},
 {t:'mc',q:'Max sagt, er habe den Marathon in drei Stunden geschafft. → Max ___ den Marathon in drei Stunden geschafft haben.',opts:['will','soll','dürfte'],a:0},
 {t:'mc',q:'„Wahrscheinlich ist sie schon zu Hause.“ =',opts:['Sie dürfte schon zu Hause sein.','Sie will schon zu Hause sein.','Sie soll schon zu Hause sein.'],a:0},
 {t:'gap',q:'Der Kollege fehlt schon wieder. Er ___ wirklich überlastet sein. (quase certeza)',a:['muss']},
 {t:'gap',q:'Sie ___ den Termin vergessen haben. (possivelmente – könnte)',a:['könnte']},
 {t:'order',es:'Die Ärztin soll schon lange in dieser Praxis arbeiten',alt:['Die Ärztin soll in dieser Praxis schon lange arbeiten', 'In dieser Praxis soll die Ärztin schon lange arbeiten'],de:'Dizem que a médica trabalha há muito tempo neste consultório.'},
 {t:'tr',de:'Ele deve ter perdido o ônibus. (quase certeza)',a:['Er muss den Bus verpasst haben.']}
]},
{id:'l3',title:'Sistema de saúde – Futur II',desc:'die Diagnose, die Nebenwirkung · Er wird es vergessen haben.',steps:[
 {t:'vocab',title:'No médico',items:[['der Hausarzt / die Hausärztin','o médico / a médica de família'],['die Diagnose','o diagnóstico'],['die Behandlung','o tratamento'],['behandeln','tratar'],['verschreiben','receitar'],['die Nebenwirkung','o efeito colateral'],['chronisch','crônico'],['ansteckend','contagioso'],['die Impfung','a vacina(ção)'],['impfen','vacinar'],['die Vorsorgeuntersuchung','o exame preventivo'],['die Krankschreibung','o atestado médico'],['krankschreiben','dar atestado'],['die Wartezeit','o tempo de espera']]},
 {t:'info',title:'Futur II: suposições sobre o passado',html:`<p><b>werden</b> + particípio + <b>haben/sein</b> expressa uma <b>suposição</b> sobre algo que já aconteceu (muitas vezes com <i>wohl</i>, <i>sicher</i>, <i>bestimmt</i>):</p>
 <table><tr><td class="es-t">Er ist nicht gekommen. Er wird den Termin vergessen haben.</td><td>Ele não veio. Deve ter esquecido o compromisso.</td></tr>
 <tr><td class="es-t">Sie wird wohl schon nach Hause gegangen sein.</td><td>Ela provavelmente já foi para casa.</td></tr></table>
 <div class="ex">Raramente: futuro concluído – <span class="es-t">Bis Freitag werde ich den Bericht geschrieben haben.</span> (Até sexta terei escrito o relatório.)</div>`},
 {t:'mc',q:'Die Praxis ist zu. Die Ärztin ___ schon in den Urlaub gefahren sein.',opts:['wird','hat','ist'],a:0},
 {t:'mc',q:'„Er hat wohl viel gearbeitet.“ =',opts:['Er wird viel gearbeitet haben.','Er wird viel arbeiten.','Er wurde viel gearbeitet.'],a:0},
 {t:'gap',q:'Lucas hat Kopfschmerzen. Er wird zu wenig getrunken ___.',a:['haben']},
 {t:'gap',q:'Der Arzt hat mir ein Medikament ___. (receitar – particípio)',a:['verschrieben']},
 {t:'mc',q:'Das Medikament kann Müdigkeit verursachen. Das ist eine ___.',opts:['Nebenwirkung','Diagnose','Impfung'],a:0},
 {t:'tr',de:'A médica me deu atestado por uma semana.',a:['Die Ärztin hat mich eine Woche krankgeschrieben.','Die Ärztin hat mich für eine Woche krankgeschrieben.']}
]},
{id:'l4',title:'Ler e escrever: guia contra o estresse',desc:'Ratgeber · Antwort mit Tipps',steps:[
 {t:'read',title:'Leitura: Wenn der Akku leer ist',text:`Ständig erreichbar, immer mehr Aufgaben, kaum Pausen: Laut einer Umfrage einer großen Krankenkasse fühlt sich fast jeder zweite Beschäftigte in Deutschland häufig gestresst. Die Zahl der Krankschreibungen wegen psychischer Erkrankungen hat sich in den letzten 15 Jahren mehr als verdoppelt.
„Stress an sich ist nicht schädlich“, erklärt die Psychologin Dr. Anna Brandt. „Problematisch wird es, wenn es keine Erholungsphasen mehr gibt.“ Warnsignale seien zum Beispiel Schlafstörungen, Gereiztheit oder das Gefühl, nicht mehr abschalten zu können.
Brandt empfiehlt, feste Feierabendzeiten einzuhalten und das Diensthandy abends auszuschalten. Auch Bewegung an der frischen Luft und regelmäßige soziale Kontakte könnten vorbeugen. Wer über Wochen erschöpft sei, solle jedoch nicht zögern, ärztliche Hilfe in Anspruch zu nehmen.`,de:`Sempre disponível, cada vez mais tarefas, quase sem pausas: segundo uma pesquisa de um grande plano de saúde, quase um em cada dois trabalhadores na Alemanha se sente estressado com frequência. O número de atestados por doenças psíquicas mais que dobrou nos últimos 15 anos.\n„O estresse em si não é prejudicial“, explica a psicóloga Dra. Anna Brandt. „Fica problemático quando não há mais fases de recuperação.“ Sinais de alerta seriam, por exemplo, distúrbios do sono, irritabilidade ou a sensação de não conseguir mais se desligar.\nBrandt recomenda respeitar horários fixos de fim de expediente e desligar o celular do trabalho à noite. Movimento ao ar livre e contatos sociais regulares também poderiam prevenir. Quem estiver esgotado por semanas, porém, não deveria hesitar em buscar ajuda médica.`},
 {t:'mc',q:'Was ist laut Dr. Brandt das eigentliche Problem?',opts:['Es gibt keine Erholungsphasen mehr.','Jeder Stress ist gefährlich.','Die Menschen arbeiten zu wenig.'],a:0},
 {t:'mc',q:'Welches Warnsignal wird genannt?',opts:['nicht mehr abschalten können','zu viel Sport','Hunger'],a:0},
 {t:'mc',q:'Was soll man tun, wenn man wochenlang erschöpft ist?',opts:['ärztliche Hilfe suchen','mehr arbeiten','das Handy kaufen'],a:0},
 {t:'free',task:'A sua colega Jana escreveu: „Ich bin total erschöpft, kann nachts nicht schlafen und denke nur an die Arbeit.“ Responda (~120 palavras): 1) mostre compreensão e faça uma suposição sobre a causa (dürfte, muss …), 2) dê três conselhos, 3) ofereça ajuda concreta.',hint:'Liebe Jana, das tut mir leid … Das dürfte mit … zusammenhängen. Du musst in letzter Zeit … An deiner Stelle würde ich … Außerdem … Wenn du willst, …',focus:'subjektive Modalverben, Futur II, Ratschläge',model:'Liebe Jana,\nes tut mir wirklich leid, dass es dir so schlecht geht. Das dürfte mit dem großen Projekt zusammenhängen – du musst in den letzten Wochen fast jeden Abend gearbeitet haben.\nAn deiner Stelle würde ich zuerst mit Frau Dr. Hoffmann sprechen. Sie wird sicher verstehen, dass du nicht alles allein schaffen kannst. Außerdem solltest du dein Diensthandy abends ausschalten und dir feste Feierabendzeiten setzen. Und wenn du nach ein paar Wochen immer noch nicht schlafen kannst, geh bitte zu deiner Hausärztin.\nWenn du willst, können wir am Samstag zusammen im Taunus wandern gehen. Frische Luft und Bewegung helfen mir immer, abzuschalten.\nAlles Liebe\nLucas'}
]}],
resumen:`<h3>Modalverben subjektiv</h3><p class="es-t">Er muss krank sein. · Das dürfte am Stress liegen. · Sie könnte im Meeting sein. · Er soll sehr streng sein. · Er will nie krank gewesen sein.</p>
<h3>Futur II</h3><p class="es-t">Er wird den Termin vergessen haben. · Sie wird schon nach Hause gegangen sein.</p>
<h3>Gesundheit</h3><p class="es-t">überfordert · abschalten · die Belastung · vorbeugen · verschreiben · die Nebenwirkung · krankschreiben</p>`});

/* ================= KAPITEL 42 · MEDIEN & KOMMUNIKATION ================= */
LANGS.de.course.units.push({id:'k42',n:'42',level:'B2',title:'Medien & Kommunikation',sub:'Imprensa e fake news · estilo nominal (bei der Ankunft = wenn ich ankomme) · fazer uma apresentação',
goals:['Über Presse, Quellen und Falschmeldungen sprechen','Nominalisierung: Verbalstil ↔ Nominalstil (bei, nach, vor, wegen, zur …)','Eine Präsentation strukturieren und halten','Einen Artikel kritisch lesen und kommentieren'],
situacion:{title:'Apresentação no trabalho',npc:'Frau Dr. Hoffmann',scene:'Você apresenta para a sua chefe, a Dra. Hoffmann, e para a equipe uma proposta: uma nova ferramenta de comunicação interna para a empresa.',role:'Du bist Frau Dr. Hoffmann, Abteilungsleiterin in einer Softwarefirma in Frankfurt. Du siezt. Lucas hält eine kurze Präsentation über ein neues internes Kommunikationstool (statt vieler E-Mails). Hör zu, unterbrich höchstens einmal mit einer kurzen Verständnisfrage und stell danach kritische Fragen: Kosten, Datenschutz, Einarbeitung der Mitarbeitenden, ältere Kolleginnen und Kollegen, die keine neuen Tools wollen. Benutze Nominalstil (die Einführung des Tools, zur Verbesserung der Kommunikation). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Apresente com estrutura (introdução, pontos, conclusão), responda às perguntas críticas e defenda a sua proposta.'},
placement:[
 {t:'mc',q:'„Wenn wir ankommen, rufen wir an.“ = ___ rufen wir an.',opts:['Bei unserer Ankunft','Zu unserer Ankunft','Mit unserer Ankunft'],a:0},
 {t:'mc',q:'„Weil es stark regnete, …“ = ___ …',opts:['Wegen des starken Regens','Trotz des starken Regens','Bei starkem Regnen'],a:0},
 {t:'mc',q:'„Damit die Qualität besser wird, …“ = ___ der Qualität …',opts:['Zur Verbesserung','Bei der Verbesserung','Nach der Verbesserung'],a:0},
 {t:'gap',q:'Viele Falschmeldungen werden über soziale Medien ___. (espalhadas)',a:['verbreitet']},
 {t:'mc',q:'„a fonte (de informação)“',opts:['die Quelle','die Quote','die Qual'],a:0},
 {t:'mc',q:'Mein Vortrag ___ sich in drei Teile.',opts:['gliedert','teilt mit','handelt'],a:0}],
lessons:[
{id:'l1',title:'Imprensa e fake news',desc:'die Quelle, seriös, recherchieren, verbreiten …',steps:[
 {t:'vocab',title:'Mídia e informação',items:[['die Presse','a imprensa'],['die Pressefreiheit','a liberdade de imprensa'],['der Journalismus','o jornalismo'],['die Quelle','a fonte'],['seriös','sério, confiável'],['recherchieren','pesquisar, apurar'],['die Recherche','a apuração, a pesquisa'],['die Schlagzeile','a manchete'],['die Falschmeldung','a notícia falsa'],['verbreiten','espalhar, divulgar'],['die Glaubwürdigkeit','a credibilidade'],['glaubwürdig','confiável, crível'],['manipulieren','manipular'],['der Algorithmus','o algoritmo'],['die Filterblase','a bolha (de filtro)'],['die Zensur','a censura'],['objektiv','objetivo'],['einseitig','unilateral, parcial']]},
 {t:'mc',q:'Bevor man eine Nachricht teilt, sollte man die ___ prüfen.',opts:['Quelle','Zensur','Schlagzeile'],a:0},
 {t:'mc',q:'Der Artikel zeigt nur eine Seite des Problems. Er ist sehr ___.',opts:['einseitig','seriös','objektiv'],a:0},
 {t:'gap',q:'Gute Journalisten ___ gründlich, bevor sie schreiben. (apuram)',a:['recherchieren']},
 {t:'match',q:'Ligue.',pairs:[['die Falschmeldung','a notícia falsa'],['die Schlagzeile','a manchete'],['verbreiten','espalhar'],['die Glaubwürdigkeit','a credibilidade'],['die Filterblase','a bolha']]},
 {t:'tr',de:'A liberdade de imprensa é importante para a democracia.',a:['Die Pressefreiheit ist wichtig für die Demokratie.']},
 {t:'speak',es:'Durch Algorithmen sehen wir oft nur Meinungen, die unserer eigenen ähneln – wir leben in einer Filterblase.',de:'Por causa dos algoritmos, muitas vezes só vemos opiniões parecidas com a nossa – vivemos numa bolha.',tip:'<i>ähneln</i> + dativo: <i>unserer eigenen (Meinung)</i>.'}
]},
{id:'l2',title:'Estilo nominal',desc:'wenn wir ankommen → bei unserer Ankunft',steps:[
 {t:'info',title:'Verbalstil ↔ Nominalstil',html:`<p>Textos formais (jornais, ciência, administração) transformam <b>orações</b> em <b>substantivos com preposição</b>. O texto fica mais curto e mais denso:</p>
 <table><tr><th>oração (Verbalstil)</th><th>substantivo (Nominalstil)</th></tr>
 <tr><td class="es-t">wenn wir ankommen</td><td class="es-t">bei unserer Ankunft</td></tr>
 <tr><td class="es-t">nachdem er das Studium beendet hatte</td><td class="es-t">nach Beendigung des Studiums</td></tr>
 <tr><td class="es-t">bevor die Sitzung beginnt</td><td class="es-t">vor Beginn der Sitzung</td></tr>
 <tr><td class="es-t">weil es stark regnete</td><td class="es-t">wegen des starken Regens</td></tr>
 <tr><td class="es-t">obwohl die Kritik groß war</td><td class="es-t">trotz der großen Kritik</td></tr>
 <tr><td class="es-t">damit die Kommunikation besser wird</td><td class="es-t">zur Verbesserung der Kommunikation</td></tr>
 <tr><td class="es-t">indem man Daten analysiert</td><td class="es-t">durch die Analyse von Daten</td></tr>
 <tr><td class="es-t">während er studierte</td><td class="es-t">während seines Studiums</td></tr></table>
 <div class="ex">Formação: <b>-ung</b> (verbessern → die Verbesserung), infinitivo (<span class="es-t">das Lesen</span>), radical (<span class="es-t">beginnen → der Beginn</span>, <span class="es-t">ankommen → die Ankunft</span>). O sujeito/objeto vira <b>genitivo</b> ou <b>von</b>: <span class="es-t">die Analyse der Daten / von Daten</span>.</div>`},
 {t:'mc',q:'„Bevor Sie das Gerät benutzen, lesen Sie die Anleitung.“ = ___ des Geräts …',opts:['Vor der Benutzung','Nach der Benutzung','Bei Benutzen'],a:0},
 {t:'mc',q:'„Nachdem sie angekommen war, …“ =',opts:['Nach ihrer Ankunft','Vor ihrer Ankunft','Bei ihrem Ankommen nach'],a:0},
 {t:'mc',q:'„durch die Einführung des neuen Systems“ =',opts:['indem man das neue System einführt','obwohl man das System einführt','bevor man das System einführt'],a:0},
 {t:'gap',q:'Wenn Sie Fragen haben, … → ___ Fragen wenden Sie sich bitte an …',a:['Bei']},
 {t:'gap',q:'Weil die Nachfrage gestiegen ist → wegen der gestiegenen ___',a:['Nachfrage']},
 {t:'gap',q:'damit die Arbeit erleichtert wird → zur ___ der Arbeit',a:['Erleichterung']},
 {t:'order',es:'Nach Abschluss der Recherche wurde der Artikel veröffentlicht',alt:['Der Artikel wurde nach Abschluss der Recherche veröffentlicht'],de:'Depois de concluída a apuração, o artigo foi publicado.'},
 {t:'tr',de:'Durante a reunião, os celulares devem estar desligados. (während + genitivo)',a:['Während der Besprechung müssen die Handys ausgeschaltet sein.','Während des Meetings müssen die Handys ausgeschaltet sein.','Während der Sitzung müssen die Handys ausgeschaltet sein.']}
]},
{id:'l3',title:'Fazer uma apresentação',desc:'Mein Vortrag gliedert sich in … · Damit komme ich zu …',steps:[
 {t:'info',title:'Frases para apresentações',html:`<table><tr><td>Introdução</td><td class="es-t">Ich möchte Ihnen heute ein neues Konzept vorstellen. · Mein Vortrag gliedert sich in drei Teile.</td></tr>
 <tr><td>Transição</td><td class="es-t">Damit komme ich zum zweiten Punkt. · Lassen Sie mich kurz auf … eingehen.</td></tr>
 <tr><td>Recursos visuais</td><td class="es-t">Wie Sie auf dieser Folie sehen, … · Die Grafik verdeutlicht, dass …</td></tr>
 <tr><td>Exemplo / ênfase</td><td class="es-t">Ein Beispiel dafür ist … · Ich möchte betonen, dass …</td></tr>
 <tr><td>Conclusão</td><td class="es-t">Abschließend möchte ich zusammenfassen: … · Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?</td></tr></table>`},
 {t:'vocab',title:'Apresentação',items:[['die Präsentation','a apresentação'],['die Folie','o slide'],['gliedern','estruturar, dividir'],['die Gliederung','a estrutura, o roteiro'],['eingehen auf','abordar, entrar em (um assunto)'],['verdeutlichen','deixar claro, ilustrar'],['zusammenfassen','resumir'],['die Einführung','a introdução, a implantação'],['einführen','introduzir, implantar']]},
 {t:'mc',q:'Sie sind mit dem ersten Teil fertig. Was sagen Sie?',opts:['Damit komme ich zum zweiten Punkt.','Jetzt ist Schluss.','Der erste Punkt war gut, oder?'],a:0},
 {t:'mc',q:'Wie beenden Sie einen Vortrag höflich?',opts:['Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?','Das war’s, tschüss.','Fragen bitte per E-Mail.'],a:0},
 {t:'gap',q:'Wie Sie auf dieser ___ sehen, sind die Kosten gering. (slide)',a:['Folie']},
 {t:'gap',q:'Lassen Sie mich kurz auf die Kosten ___. (abordar)',a:['eingehen']},
 {t:'speak',es:'Ich möchte Ihnen heute ein neues Tool vorstellen, das unsere interne Kommunikation deutlich verbessern könnte.',de:'Hoje eu gostaria de apresentar a vocês uma nova ferramenta que poderia melhorar bastante a nossa comunicação interna.',tip:'Na oração relativa, o verbo conjugado (<i>könnte</i>) vai para o final.'}
]},
{id:'l4',title:'Ler e comentar',desc:'Artikel über Falschmeldungen · Kommentar',steps:[
 {t:'read',title:'Leitura: Gefälschte Nachrichten erkennen',text:`Ein angebliches Foto vom überfluteten Flughafen, ein erfundenes Zitat einer Politikerin: Falschmeldungen verbreiten sich im Netz oft schneller als die Wahrheit. Nach Angaben einer Medienstudie hat bereits jeder zweite Jugendliche mindestens einmal eine Falschmeldung geteilt – meist ohne es zu merken.
Durch den Einsatz künstlicher Intelligenz wird die Erkennung immer schwieriger. Gefälschte Bilder und Videos sind heute kaum noch von echten zu unterscheiden. Experten raten deshalb zur Überprüfung der Quelle: Wer hat die Nachricht veröffentlicht? Berichten auch seriöse Medien darüber? Wann wurde das Foto aufgenommen?
Mehrere Bundesländer haben inzwischen auf die Entwicklung reagiert: Seit diesem Schuljahr gehört Medienkompetenz zum Pflichtunterricht. Kritiker bemängeln allerdings, dass es an ausgebildeten Lehrkräften fehle.`,de:`Uma suposta foto do aeroporto inundado, uma citação inventada de uma política: notícias falsas muitas vezes se espalham na internet mais rápido que a verdade. Segundo um estudo de mídia, um em cada dois jovens já compartilhou pelo menos uma vez uma notícia falsa – na maioria das vezes sem perceber.\nCom o uso da inteligência artificial, identificá-las fica cada vez mais difícil. Imagens e vídeos falsificados hoje quase não se distinguem dos verdadeiros. Por isso, especialistas aconselham verificar a fonte: quem publicou a notícia? Mídias sérias também noticiam isso? Quando a foto foi tirada?\nVários estados já reagiram a essa evolução: desde este ano letivo, competência midiática faz parte das aulas obrigatórias. Críticos reclamam, porém, que faltariam professores formados para isso.`},
 {t:'mc',q:'Was haben viele Jugendliche laut Studie schon getan?',opts:['eine Falschmeldung geteilt','einen Artikel geschrieben','eine Zeitung abonniert'],a:0},
 {t:'mc',q:'Warum wird die Erkennung schwieriger?',opts:['wegen künstlicher Intelligenz','wegen der Pressefreiheit','wegen der Lehrkräfte'],a:0},
 {t:'mc',q:'„Experten raten zur Überprüfung der Quelle.“ bedeutet:',opts:['Man soll prüfen, woher die Nachricht kommt.','Man soll keine Nachrichten lesen.','Man soll die Quelle löschen.'],a:0},
 {t:'mc',q:'Was kritisieren die Kritiker?',opts:['Es fehlen ausgebildete Lehrkräfte.','Medienkompetenz ist unwichtig.','Der Unterricht ist zu lang.'],a:0},
 {t:'free',task:'Escreva um comentário (~150 palavras) sobre o artigo: 1) resuma o problema com suas palavras, 2) diga se a escola deve ensinar competência midiática e por quê, 3) dê duas dicas práticas para reconhecer fake news, 4) conclusão. Tente usar pelo menos duas formas nominais (zur Überprüfung, bei der Nutzung …).',hint:'Der Artikel beschäftigt sich mit … Meiner Meinung nach … Bei der Nutzung sozialer Medien sollte man … Zur Überprüfung einer Nachricht … Abschließend …',focus:'Nominalstil, Argumentation, Konnektoren',model:'Der Artikel beschäftigt sich mit der schnellen Verbreitung von Falschmeldungen im Internet. Besonders Jugendliche teilen oft Nachrichten, ohne deren Herkunft zu prüfen, und durch künstliche Intelligenz wird die Erkennung immer schwieriger.\nMeiner Meinung nach ist Medienkompetenz als Schulfach längst überfällig. Junge Menschen informieren sich fast ausschließlich über soziale Medien, lernen aber kaum, Quellen kritisch zu bewerten. Trotz des Mangels an Lehrkräften sollten Schulen deshalb sofort damit beginnen – zur Not mit Unterstützung von Journalistinnen und Journalisten.\nZur Überprüfung einer Nachricht helfen zwei einfache Fragen: Wer hat sie veröffentlicht, und berichten auch seriöse Medien darüber? Außerdem kann man bei verdächtigen Fotos eine Bildersuche machen.\nAbschließend lässt sich sagen: Bei der Nutzung sozialer Medien ist ein gesundes Misstrauen die beste Verteidigung.'}
]}],
resumen:`<h3>Nominalstil</h3><p class="es-t">bei unserer Ankunft · nach Beendigung des Studiums · vor Beginn der Sitzung · wegen des Regens · trotz der Kritik · zur Verbesserung der Kommunikation · durch die Analyse von Daten</p>
<h3>Präsentation</h3><p class="es-t">Mein Vortrag gliedert sich in drei Teile. · Damit komme ich zum zweiten Punkt. · Wie Sie auf dieser Folie sehen, … · Vielen Dank für Ihre Aufmerksamkeit.</p>
<h3>Medien</h3><p class="es-t">die Quelle · seriös · recherchieren · die Falschmeldung · verbreiten · die Glaubwürdigkeit · einseitig</p>`});

/* ================= KAPITEL 43 · NATUR & KLIMA ================= */
LANGS.de.course.units.push({id:'k43',n:'43',level:'B2',title:'Natur & Klima',sub:'Mudança climática e catástrofes naturais · biodiversidade · preposições com genitivo (aufgrund, infolge, angesichts, innerhalb …) · carta de leitor',
goals:['Über Klimawandel, Wetterextreme und Artenschutz sprechen','Präpositionen mit Genitiv: aufgrund, infolge, angesichts, innerhalb, außerhalb, mithilfe, anstelle, bezüglich','Ursachen und Folgen in Texten erkennen und benennen','Einen Leserbrief mit Stellungnahme schreiben'],
situacion:{title:'Debate na rádio',npc:'Moderator Jens Kühn',scene:'Uma rádio de Frankfurt faz um debate com ouvintes sobre o plano da cidade de proibir carros no centro para proteger o clima. Você liga e entra no ar.',role:'Du bist Jens Kühn, Moderator der Radiosendung „Frankfurt diskutiert“. Du siezt. Thema: Die Stadt will die Innenstadt bis 2030 autofrei machen – aufgrund der Hitzesommer und der Luftverschmutzung. Begrüße Lucas als Anrufer, frag nach seiner Meinung und seinen Erfahrungen (Hitze in der Stadt, Radfahren, öffentlicher Verkehr). Spiel danach den Advocatus Diaboli: Was ist mit Handwerkern, Lieferdiensten, älteren Menschen? Lies zwischendurch eine kritische Hörermeinung vor. Benutze Präpositionen mit Genitiv (angesichts der Hitze, innerhalb der Innenstadt, infolge des Klimawandels). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Dê a sua opinião sobre um centro sem carros, com causas e consequências, e responda às objeções do apresentador.'},
placement:[
 {t:'mc',q:'___ des starken Regens wurde das Konzert abgesagt.',opts:['Aufgrund','Trotz','Mithilfe'],a:0},
 {t:'mc',q:'Bitte bezahlen Sie die Rechnung ___ von 14 Tagen.',opts:['innerhalb','außer','infolge'],a:0},
 {t:'mc',q:'___ der steigenden Temperaturen pflanzt die Stadt mehr Bäume.',opts:['Angesichts','Anstelle','Außerhalb'],a:0},
 {t:'gap',q:'Viele Tierarten sind vom ___ bedroht. (a extinção)',a:['Aussterben']},
 {t:'mc',q:'„a seca“',opts:['die Dürre','die Flut','der Sturm'],a:0},
 {t:'mc',q:'Der Leserbrief bezieht sich ___ Ihren Artikel vom 3. Mai.',opts:['auf','an','über'],a:0}],
lessons:[
{id:'l1',title:'Clima e catástrofes',desc:'die Dürre, die Überschwemmung, der Klimawandel …',steps:[
 {t:'vocab',title:'Clima extremo',items:[['der Klimawandel','a mudança climática'],['die Erderwärmung','o aquecimento global'],['der Treibhauseffekt','o efeito estufa'],['das Treibhausgas','o gás de efeito estufa'],['der Ausstoß','a emissão'],['die Dürre','a seca'],['die Hitzewelle','a onda de calor'],['die Überschwemmung','a inundação'],['das Hochwasser','a cheia, a enchente'],['der Waldbrand','o incêndio florestal'],['der Meeresspiegel','o nível do mar'],['schmelzen','derreter'],['der Gletscher','a geleira'],['die Folge','a consequência'],['die Ursache','a causa'],['verursachen','causar'],['eindämmen','conter, frear']]},
 {t:'mc',q:'Es hat seit drei Monaten nicht geregnet. Die Bauern leiden unter der ___.',opts:['Dürre','Überschwemmung','Hitzewelle'],a:0},
 {t:'mc',q:'Durch die Erderwärmung steigt der ___.',opts:['Meeresspiegel','Gletscher','Ausstoß'],a:0},
 {t:'gap',q:'Die Gletscher in den Alpen ___ immer schneller. (derretem)',a:['schmelzen']},
 {t:'match',q:'Ligue.',pairs:[['die Ursache','a causa'],['die Folge','a consequência'],['der Waldbrand','o incêndio florestal'],['das Hochwasser','a enchente'],['eindämmen','conter']]},
 {t:'tr',de:'Os carros causam muitos gases de efeito estufa.',a:['Autos verursachen viele Treibhausgase.','Die Autos verursachen viele Treibhausgase.']},
 {t:'speak',es:'Der Klimawandel verursacht immer häufiger Hitzewellen, Dürren und Überschwemmungen.',de:'A mudança climática causa cada vez mais ondas de calor, secas e inundações.',tip:'<i>immer häufiger</i> = cada vez mais frequentemente (immer + comparativo).'}
]},
{id:'l2',title:'Preposições com genitivo',desc:'aufgrund · infolge · angesichts · innerhalb · mithilfe …',steps:[
 {t:'info',title:'Preposições da linguagem formal',html:`<p>Em textos formais, muitas preposições pedem <b>genitivo</b>:</p>
 <table><tr><th>preposição</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>aufgrund</b></td><td>por causa de (causa)</td><td class="es-t">aufgrund des Regens</td></tr>
 <tr><td><b>infolge</b></td><td>em consequência de</td><td class="es-t">infolge der Dürre</td></tr>
 <tr><td><b>angesichts</b></td><td>diante de, em vista de</td><td class="es-t">angesichts der hohen Temperaturen</td></tr>
 <tr><td><b>innerhalb / außerhalb</b></td><td>dentro de / fora de</td><td class="es-t">innerhalb eines Jahres · außerhalb der Stadt</td></tr>
 <tr><td><b>mithilfe</b></td><td>com a ajuda de</td><td class="es-t">mithilfe neuer Technologien</td></tr>
 <tr><td><b>anstelle / statt</b></td><td>em vez de</td><td class="es-t">anstelle des Autos</td></tr>
 <tr><td><b>bezüglich / hinsichtlich</b></td><td>com relação a</td><td class="es-t">bezüglich Ihrer Anfrage</td></tr>
 <tr><td><b>zugunsten</b></td><td>em favor de</td><td class="es-t">zugunsten der Umwelt</td></tr></table>
 <div class="ex">Já conhecidas: <b>wegen, trotz, während</b> + genitivo. Sem artigo no plural, usa-se <b>von</b>: <span class="es-t">innerhalb von zwei Wochen</span>, <span class="es-t">aufgrund von Problemen</span>.</div>`},
 {t:'mc',q:'___ der Überschwemmung mussten 2000 Menschen ihre Häuser verlassen.',opts:['Infolge','Anstelle','Innerhalb'],a:0},
 {t:'mc',q:'Die Stadt baut einen Park ___ des alten Parkplatzes.',opts:['anstelle','aufgrund','angesichts'],a:0},
 {t:'mc',q:'___ von drei Tagen haben wir eine Antwort bekommen.',opts:['Innerhalb','Außerhalb','Infolge'],a:0},
 {t:'gap',q:'Mithilfe ___ Satelliten kann man Waldbrände früh erkennen. (artigo genitivo plural)',a:['der']},
 {t:'gap',q:'Aufgrund ___ Hitzewelle sind die Schwimmbäder voll. (die Hitzewelle)',a:['der']},
 {t:'gap',q:'Wir wohnen ___ der Stadt, auf dem Land. (fora de)',a:['außerhalb']},
 {t:'order',es:'Angesichts der Klimakrise müssen wir unseren Lebensstil ändern',alt:['Wir müssen angesichts der Klimakrise unseren Lebensstil ändern'],de:'Diante da crise climática, precisamos mudar o nosso estilo de vida.'},
 {t:'tr',de:'Por causa da seca, a colheita foi ruim. (aufgrund)',a:['Aufgrund der Dürre war die Ernte schlecht.']}
]},
{id:'l3',title:'Natureza e biodiversidade',desc:'die Artenvielfalt, aussterben, schützen …',steps:[
 {t:'vocab',title:'Natureza',items:[['die Artenvielfalt','a biodiversidade'],['die Art','a espécie; o tipo'],['aussterben','extinguir-se'],['bedroht','ameaçado'],['der Lebensraum','o habitat'],['das Naturschutzgebiet','a reserva natural'],['der Regenwald','a floresta tropical'],['die Biene','a abelha'],['das Insekt','o inseto'],['die Ressource','o recurso'],['nachwachsend','renovável (matéria-prima)'],['die Nachhaltigkeit','a sustentabilidade'],['der ökologische Fußabdruck','a pegada ecológica']]},
 {t:'read',title:'Leitura: Stille Wiesen',text:`Wer heute im Sommer über eine Wiese läuft, hört deutlich weniger Summen als noch vor dreißig Jahren. Einer Langzeitstudie zufolge ist die Zahl der Insekten in Teilen Deutschlands seit 1990 um mehr als 70 Prozent zurückgegangen. Als Hauptursachen gelten die intensive Landwirtschaft, der Einsatz von Pestiziden und der Verlust natürlicher Lebensräume.
Die Folgen betreffen nicht nur Bienen und Schmetterlinge. Infolge des Insektensterbens finden auch viele Vogelarten nicht mehr genug Nahrung. Und ohne Bestäuber sind auch die Ernten vieler Obstsorten in Gefahr.
Doch es gibt Hoffnung: Innerhalb weniger Jahre haben zahlreiche Städte ihre Grünflächen in blühende Wiesen verwandelt. Auch auf Balkonen kann jeder etwas tun – anstelle von Geranien empfehlen Experten heimische Wildblumen.`,de:`Quem hoje caminha num prado no verão ouve bem menos zumbido do que há trinta anos. Segundo um estudo de longo prazo, o número de insetos em partes da Alemanha diminuiu mais de 70 por cento desde 1990. As principais causas seriam a agricultura intensiva, o uso de pesticidas e a perda de habitats naturais.\nAs consequências não afetam só abelhas e borboletas. Em consequência da morte dos insetos, muitas espécies de pássaros também não encontram mais comida suficiente. E sem polinizadores, as colheitas de muitas frutas também estão em perigo.\nMas há esperança: em poucos anos, numerosas cidades transformaram suas áreas verdes em prados floridos. Também nas varandas todos podem fazer algo – em vez de gerânios, especialistas recomendam flores silvestres nativas.`},
 {t:'mc',q:'Um wie viel ist die Zahl der Insekten zurückgegangen?',opts:['um mehr als 70 Prozent','um 30 Prozent','um die Hälfte'],a:0},
 {t:'mc',q:'Was ist laut Text eine Hauptursache?',opts:['die intensive Landwirtschaft','zu viele Vögel','der Regen'],a:0},
 {t:'mc',q:'Warum finden Vögel weniger Nahrung?',opts:['wegen des Insektensterbens','wegen der Städte','wegen der Wildblumen'],a:0},
 {t:'mc',q:'Was kann man auf dem Balkon tun?',opts:['heimische Wildblumen pflanzen','Pestizide benutzen','Geranien kaufen'],a:0},
 {t:'gap',q:'Viele Tierarten sind vom Aussterben ___. (ameaçadas)',a:['bedroht']}
]},
{id:'l4',title:'Escrever: carta de leitor',desc:'Leserbrief zur autofreien Innenstadt (ca. 150 Wörter)',steps:[
 {t:'read',title:'Leitura: Zeitungsmeldung',text:`Frankfurt soll bis 2030 eine weitgehend autofreie Innenstadt bekommen. Das hat der Stadtrat am Donnerstag beschlossen. Angesichts der Hitzesommer und der hohen Luftverschmutzung sollen Parkplätze in Grünflächen und Radwege umgewandelt werden. Anwohner, Lieferdienste und Menschen mit Behinderung dürfen weiterhin hineinfahren. Der Einzelhandel befürchtet allerdings, dass aufgrund fehlender Parkplätze weniger Kundschaft in die Innenstadt kommt.`,de:`Frankfurt deve ter até 2030 um centro praticamente sem carros. Foi o que a Câmara Municipal decidiu na quinta-feira. Diante dos verões quentes e da alta poluição do ar, estacionamentos devem ser transformados em áreas verdes e ciclovias. Moradores, serviços de entrega e pessoas com deficiência poderão continuar entrando. O comércio, porém, teme que, pela falta de estacionamentos, menos clientes venham ao centro.`},
 {t:'mc',q:'Wer darf weiterhin mit dem Auto in die Innenstadt fahren?',opts:['Anwohner und Lieferdienste','alle Touristen','niemand'],a:0},
 {t:'mc',q:'Was befürchtet der Einzelhandel?',opts:['weniger Kundschaft','mehr Verkehr','höhere Mieten'],a:0},
 {t:'info',title:'Estrutura da carta de leitor',html:`<table><tr><td>Referência</td><td class="es-t">Zu Ihrem Artikel „Autofreie Innenstadt bis 2030“ vom 12. Juni</td></tr>
 <tr><td>Opinião</td><td class="es-t">Mit großem Interesse habe ich gelesen, dass … Ich halte diese Entscheidung für …</td></tr>
 <tr><td>Argumentos</td><td class="es-t">Zum einen …, zum anderen … · Hinzu kommt, dass …</td></tr>
 <tr><td>Contra-argumento</td><td class="es-t">Zwar …, aber … · Man darf allerdings nicht vergessen, dass …</td></tr>
 <tr><td>Conclusão</td><td class="es-t">Aus diesen Gründen bin ich überzeugt, dass …</td></tr></table>`},
 {t:'free',task:'Escreva uma carta de leitor (~150 palavras) sobre a notícia: 1) referência ao artigo, 2) sua opinião, 3) dois argumentos com causa e consequência, 4) um contra-argumento e a sua resposta, 5) conclusão. Use pelo menos duas preposições com genitivo.',hint:'Zu Ihrem Artikel … Ich halte die Entscheidung für … Zum einen … aufgrund … Zum anderen … Zwar befürchten …, aber … Aus diesen Gründen …',focus:'Präpositionen mit Genitiv, Argumentation, zwar … aber',model:'Zu Ihrem Artikel „Autofreie Innenstadt bis 2030“ vom 12. Juni\nMit großem Interesse habe ich gelesen, dass Frankfurt die Innenstadt weitgehend autofrei machen will. Ich halte diese Entscheidung für mutig und richtig.\nZum einen leiden wir aufgrund der zunehmenden Hitzewellen jeden Sommer mehr unter der Hitze in der Stadt. Bäume und Grünflächen anstelle von Parkplätzen würden die Temperaturen spürbar senken. Zum anderen wäre die Luft innerhalb weniger Jahre deutlich sauberer, was vor allem Kindern und älteren Menschen zugutekäme.\nZwar befürchtet der Einzelhandel weniger Kundschaft, aber Erfahrungen aus Städten wie Kopenhagen zeigen das Gegenteil: In Fußgängerzonen bleiben die Menschen länger und kaufen mehr. Wichtig ist allerdings, dass Busse und Bahnen ausgebaut werden.\nAus diesen Gründen bin ich überzeugt, dass die autofreie Innenstadt für alle ein Gewinn ist.\nLucas Souza, Frankfurt-Bornheim'}
]}],
resumen:`<h3>Präpositionen mit Genitiv</h3><p class="es-t">aufgrund des Regens · infolge der Dürre · angesichts der Hitze · innerhalb eines Jahres · außerhalb der Stadt · mithilfe neuer Technologien · anstelle des Autos · bezüglich Ihrer Anfrage</p>
<h3>Klima</h3><p class="es-t">der Klimawandel · die Dürre · die Überschwemmung · der Waldbrand · die Ursache · die Folge · verursachen · eindämmen</p>
<h3>Natur</h3><p class="es-t">die Artenvielfalt · aussterben · bedroht · der Lebensraum · die Nachhaltigkeit</p>`});

/* ================= KAPITEL 44 · KUNST & KULTUR ================= */
LANGS.de.course.units.push({id:'k44',n:'44',level:'B2',title:'Kunst & Kultur',sub:'Arte, exposições e cinema · als ob (como se) · partículas modais (doch, ja, mal, eben, halt) · resenha',
goals:['Über Kunstwerke, Ausstellungen und Filme sprechen und sie bewerten','Irreale Vergleichssätze: als ob / als wenn / als + Konjunktiv II','Modalpartikeln im Gespräch: doch, ja, mal, eben, halt, eigentlich, wohl','Eine Rezension schreiben'],
situacion:{title:'No museu',npc:'Lea',scene:'A Lea, a namorada do Tom, que hoje trabalha numa galeria em Munique, está passando o fim de semana em Frankfurt. Você vai com ela a uma exposição de arte contemporânea no Städel Museum. Ela adora; você não está tão convencido.',role:'Du bist Lea, Freundin von Lucas’ gutem Freund Tom. Du arbeitest seit einem Jahr in einer Galerie in München und bist übers Wochenende in Frankfurt. Du duzt. Ihr seid zusammen in einer Ausstellung moderner Kunst im Städel. Du bist begeistert, erklärst Werke (eine fast leere weiße Leinwand, eine Installation aus alten Fernsehern) und fragst Lucas, was er sieht und fühlt. Wenn er skeptisch ist („Das sieht aus, als ob ein Kind es gemalt hätte“), argumentiere leidenschaftlich, aber mit Humor. Benutze viele Modalpartikeln (doch, ja, mal, halt, eben, eigentlich) und als ob. Sprich natürliches, lockeres Deutsch auf B2-Niveau.',goal:'Descreva o que você vê, diga a sua opinião (com „als ob“), discorde com humor e combine com a Lea o que fazer depois.'},
placement:[
 {t:'mc',q:'Er tut so, ___ er alles wüsste.',opts:['als ob','wie wenn','ob als'],a:0},
 {t:'mc',q:'Sie sieht aus, als ___ sie nicht geschlafen.',opts:['hätte','habe gehabt','hat'],a:0},
 {t:'mc',q:'Komm ___ her! Ich will dir was zeigen.',opts:['mal','ja','eben'],a:0},
 {t:'mc',q:'Das weißt du ___ schon – ich habe es dir gestern gesagt.',opts:['doch','mal','halt'],a:0},
 {t:'gap',q:'Das Gemälde wirkt, als ___ es gestern gemalt worden. (sein – Konj. II)',a:['wäre']},
 {t:'mc',q:'„a exposição“',opts:['die Ausstellung','die Aufstellung','die Vorstellung'],a:0}],
lessons:[
{id:'l1',title:'Arte e exposições',desc:'die Ausstellung, das Werk, abstrakt …',steps:[
 {t:'vocab',title:'Artes visuais',items:[['ausstellen','expor'],['das Kunstwerk','a obra de arte'],['das Werk','a obra'],['die Skulptur','a escultura'],['die Installation','a instalação'],['die Leinwand','a tela'],['abstrakt','abstrato'],['zeitgenössisch','contemporâneo'],['der Maler / die Malerin','o pintor / a pintora'],['der Bildhauer / die Bildhauerin','o escultor / a escultora'],['das Motiv','o motivo, o tema'],['die Darstellung','a representação'],['wirken','parecer, causar efeito'],['beeindruckend','impressionante'],['provokant','provocador'],['geschmacklos','de mau gosto']]},
 {t:'mc',q:'Das Museum zeigt eine ___ mit Werken von Paula Modersohn-Becker.',opts:['Ausstellung','Darstellung','Leinwand'],a:0},
 {t:'mc',q:'Auf dem Bild sieht man keine Personen, nur Farben und Formen. Es ist ___.',opts:['abstrakt','zeitgenössisch','geschmacklos'],a:0},
 {t:'gap',q:'Das Gemälde stellt eine Szene am Main ___. (representa)',a:['dar']},
 {t:'match',q:'Ligue.',pairs:[['die Skulptur','a escultura'],['das Kunstwerk','a obra de arte'],['beeindruckend','impressionante'],['ausstellen','expor'],['das Motiv','o tema']]},
 {t:'tr',de:'O quadro parece muito triste. (wirken)',a:['Das Bild wirkt sehr traurig.','Das Gemälde wirkt sehr traurig.']},
 {t:'speak',es:'Die Installation hat mich sehr beeindruckt, obwohl ich zeitgenössische Kunst normalerweise schwierig finde.',de:'A instalação me impressionou muito, embora eu normalmente ache arte contemporânea difícil.',tip:'<i>beeindrucken</i> + acusativo: <i>hat mich beeindruckt</i>.'}
]},
{id:'l2',title:'als ob – como se',desc:'Er tut so, als ob … · Es sieht aus, als wäre …',steps:[
 {t:'info',title:'Comparações irreais',html:`<p>Para dizer „<b>como se</b>“ (algo que não é real), usa-se <b>als ob / als wenn</b> + <b>Konjunktiv II</b> (verbo no final) – ou só <b>als</b> com o verbo logo depois:</p>
 <table><tr><td class="es-t">Er tut so, als ob er alles wüsste.</td><td>Ele age como se soubesse tudo.</td></tr>
 <tr><td class="es-t">Er tut so, als wüsste er alles.</td><td>(mesmo sentido – verbo logo depois de <i>als</i>)</td></tr>
 <tr><td class="es-t">Das Bild sieht aus, als hätte ein Kind es gemalt.</td><td>O quadro parece que foi pintado por uma criança.</td></tr>
 <tr><td class="es-t">Sie redet, als wäre sie die Chefin.</td><td>Ela fala como se fosse a chefe.</td></tr></table>
 <div class="ex">Verbos típicos antes: <span class="es-t">so tun · aussehen · wirken · sich anhören · sich anfühlen · klingen</span>.<br>Passado: <span class="es-t">Er tut so, als ob er nichts gehört hätte.</span></div>`},
 {t:'mc',q:'Die Musik klingt, als ob sie aus den Achtzigern ___.',opts:['wäre','ist','sei gewesen'],a:0},
 {t:'mc',q:'Er tut so, als ___ er mich nicht kennen.',opts:['würde','wird','hätte'],a:0},
 {t:'mc',q:'Welcher Satz ist richtig?',opts:['Du siehst aus, als hättest du ein Gespenst gesehen.','Du siehst aus, als du hättest ein Gespenst gesehen.','Du siehst aus, als ob hättest du ein Gespenst gesehen.'],a:0},
 {t:'gap',q:'Es fühlt sich an, als ___ wir schon Sommer. (haben – Konj. II)',a:['hätten']},
 {t:'gap',q:'Sie tut so, als ob sie keine Zeit ___. (haben – Konj. II)',a:['hätte']},
 {t:'order',es:'Der Film wirkt als wäre er mit dem Handy gedreht worden',de:'O filme parece que foi gravado com o celular.'},
 {t:'tr',de:'Ele age como se fosse o chefe.',a:['Er tut so, als ob er der Chef wäre.','Er tut so, als wäre er der Chef.','Er tut so, als wenn er der Chef wäre.']}
]},
{id:'l3',title:'Partículas modais',desc:'doch · ja · mal · eben/halt · eigentlich · wohl',steps:[
 {t:'info',title:'Modalpartikeln',html:`<p>Pequenas palavras que não se traduzem literalmente, mas dão <b>tom</b> à frase – muito usadas na fala:</p>
 <table><tr><th>partícula</th><th>efeito</th><th>exemplo</th></tr>
 <tr><td><b>doch</b></td><td>reforço; „mas você sabe“; pedido insistente</td><td class="es-t">Komm doch mit! · Das ist doch klar!</td></tr>
 <tr><td><b>ja</b></td><td>algo conhecido; surpresa</td><td class="es-t">Das weißt du ja. · Das ist ja toll!</td></tr>
 <tr><td><b>mal</b></td><td>suaviza pedidos</td><td class="es-t">Schau mal! · Kannst du mal kurz helfen?</td></tr>
 <tr><td><b>eben / halt</b></td><td>„é assim, fazer o quê“</td><td class="es-t">Das ist halt so. · Dann nehmen wir eben den Bus.</td></tr>
 <tr><td><b>eigentlich</b></td><td>„na verdade“; pergunta mais leve</td><td class="es-t">Was machst du eigentlich am Wochenende?</td></tr>
 <tr><td><b>wohl</b></td><td>suposição</td><td class="es-t">Er ist wohl krank.</td></tr>
 <tr><td><b>denn</b></td><td>interesse em perguntas</td><td class="es-t">Wie heißt du denn?</td></tr></table>`},
 {t:'mc',q:'Bitte freundlich: „Kannst du ___ das Fenster aufmachen?“',opts:['mal','ja','halt'],a:0},
 {t:'mc',q:'Der Zug ist weg. – Na gut, dann fahren wir ___ mit dem nächsten.',opts:['eben','denn','doch'],a:0},
 {t:'mc',q:'Überraschung: „Du sprichst ___ super Deutsch!“',opts:['ja','mal','eben'],a:0},
 {t:'mc',q:'Leichte Frage: „Woher kennt ihr euch ___?“',opts:['eigentlich','halt','eben'],a:0},
 {t:'gap',q:'Warum kommst du nicht mit? Komm ___ mit! (convite insistente)',a:['doch']},
 {t:'dialog',place:'Im Städel',title:'Arte ou brincadeira?',scene:'Você e a Lea estão diante de uma tela quase toda branca.',lines:[
  {n:'Lea',es:'Schau mal, das ist mein Lieblingsbild! Ist das nicht wunderschön?',de:'Olha só, esse é o meu quadro favorito! Não é lindo?'},
  {you:true,opts:[{es:'Ehrlich gesagt sieht es aus, als hätte jemand vergessen, es fertig zu malen.',ok:true},{es:'Ich sehe es aus, als ob weiß.',ok:false,why:'Estrutura: „Es sieht aus, als hätte …“ / „als ob … hätte“ – com Konjunktiv II.'}]},
  {n:'Lea',es:'Ach komm, das ist doch gerade der Punkt! Die Leere soll uns ja zum Nachdenken bringen.',de:'Ah, para, esse é justamente o ponto! O vazio deve nos fazer pensar.'},
  {you:true,opts:[{es:'Na ja, vielleicht verstehe ich moderne Kunst halt nicht. Was kostet so ein Bild eigentlich?',ok:true},{es:'Doch halt mal ja.',ok:false,why:'Partículas não funcionam sozinhas – elas acompanham uma frase completa.'}]},
  {n:'Lea',es:'Über eine Million! Komm, wir gehen jetzt mal ins Café, dann erkläre ich dir alles in Ruhe.',de:'Mais de um milhão! Vem, vamos agora ao café, aí te explico tudo com calma.'}]},
 {t:'tr',de:'Olha só! (com partícula)',a:['Schau mal!','Guck mal!']}
]},
{id:'l4',title:'Escrever: resenha',desc:'Rezension eines Films oder einer Ausstellung (ca. 150 Wörter)',steps:[
 {t:'vocab',title:'Cinema e crítica',items:[['die Rezension','a resenha'],['der Regisseur / die Regisseurin','o diretor / a diretora (de cinema)'],['die Hauptrolle','o papel principal'],['der Darsteller / die Darstellerin','o ator / a atriz'],['die Handlung spielt in …','a história se passa em …'],['gelungen','bem-sucedido, bem-feito'],['überzeugend','convincente'],['die Szene','a cena']]},
 {t:'read',title:'Leitura: Filmkritik',text:`„Die Brücke am Main“ – ein Film, der unter die Haut geht
Regisseurin Nora Holtz erzählt in ihrem neuen Film die Geschichte zweier Brüder, die sich nach zwanzig Jahren in Frankfurt wiedersehen. Die Handlung spielt an nur einem Wochenende, und doch erfährt man fast alles über eine Familie, die an ihren Geheimnissen zerbricht.
Besonders überzeugend ist Karim Sayed in der Hauptrolle: Er spielt so natürlich, als würde er gar nicht spielen. Auch die Bilder sind gelungen – die Stadt wirkt grau und kalt, als hätte sie selbst ihre Hoffnung verloren.
Schwächen hat der Film allerdings im letzten Drittel: Das Ende ist leider ziemlich vorhersehbar, und manche Dialoge klingen, als hätte man sie aus einem Lehrbuch abgeschrieben.
Fazit: trotzdem ein mutiger, spannender Film, den man im Kino sehen sollte. Vier von fünf Sternen.`,de:`„A ponte sobre o Meno“ – um filme que mexe com a gente\nA diretora Nora Holtz conta em seu novo filme a história de dois irmãos que se reencontram em Frankfurt depois de vinte anos. A história se passa em um único fim de semana e, mesmo assim, ficamos sabendo quase tudo sobre uma família que se despedaça por causa dos seus segredos.\nEspecialmente convincente é Karim Sayed no papel principal: ele atua de forma tão natural como se nem estivesse atuando. As imagens também são bem-feitas – a cidade parece cinza e fria, como se ela mesma tivesse perdido a esperança.\nO filme tem pontos fracos, porém, no último terço: o final infelizmente é bastante previsível, e alguns diálogos soam como se tivessem sido copiados de um livro didático.\nConclusão: mesmo assim, um filme corajoso e emocionante, que vale a pena ver no cinema. Quatro de cinco estrelas.`},
 {t:'mc',q:'Worum geht es im Film?',opts:['um zwei Brüder, die sich wiedersehen','um eine Brücke, die gebaut wird','um eine Regisseurin'],a:0},
 {t:'mc',q:'Was lobt die Kritik besonders?',opts:['den Hauptdarsteller','das Ende','die Dialoge'],a:0},
 {t:'mc',q:'Was kritisiert die Rezension?',opts:['das vorhersehbare Ende','die Bilder','die Länge der Handlung'],a:0},
 {t:'free',task:'Escreva uma resenha (~150 palavras) de um filme, série, livro ou exposição de que você gostou (ou não): 1) título e tema, 2) do que se trata (sem contar o final!), 3) o que é bom – com uma comparação com „als ob“, 4) pontos fracos, 5) conclusão e nota.',hint:'„…“ – … In dem Film / Buch geht es um … Die Handlung spielt in … Besonders gelungen ist … Er/Sie spielt, als ob … Schwächen hat … allerdings … Fazit: …',focus:'als ob + Konjunktiv II, Bewertungen, Adjektive',model:'„Central do Brasil“ – eine Reise, die man nicht vergisst\nIn dem Film von Walter Salles geht es um Dora, eine ältere Frau, die am Bahnhof in Rio Briefe für Menschen schreibt, die nicht schreiben können. Eines Tages muss sie einem kleinen Jungen helfen, seinen Vater im armen Nordosten des Landes zu finden.\nBesonders gelungen ist die Hauptdarstellerin Fernanda Montenegro: Sie spielt so ehrlich, als ob sie ihr eigenes Leben erzählen würde. Auch die Landschaften sind beeindruckend – manchmal wirkt der Film, als wäre er ein Dokumentarfilm.\nSchwächen hat der Film eigentlich nur am Anfang, der etwas langsam ist. Wer Action erwartet, wird enttäuscht sein.\nFazit: ein berührender Film über Einsamkeit und Freundschaft, den man unbedingt gesehen haben sollte. Fünf von fünf Sternen.'}
]}],
resumen:`<h3>als ob / als + Konjunktiv II</h3><p class="es-t">Er tut so, als ob er alles wüsste. · Er tut so, als wüsste er alles. · Es sieht aus, als hätte ein Kind es gemalt.</p>
<h3>Modalpartikeln</h3><p class="es-t">Komm doch mit! · Das weißt du ja. · Schau mal! · Das ist halt so. · Was machst du eigentlich …? · Er ist wohl krank.</p>
<h3>Kunst & Film</h3><p class="es-t">die Ausstellung · das Kunstwerk · abstrakt · zeitgenössisch · wirken · die Rezension · die Hauptrolle · gelungen · vorhersehbar</p>`});

/* ================= KAPITEL 45 · RECHT & POLITIK ================= */
LANGS.de.course.units.push({id:'k45',n:'45',level:'B2',title:'Recht & Politik',sub:'Direitos, leis e tribunal · participação política · conectores: indem, ohne dass, anstatt dass, falls/sofern · carta formal a um órgão público',
goals:['Über Rechte, Gesetze und Gerichte sprechen','Konnektoren: indem / dadurch, dass · ohne … zu / ohne dass · (an)statt … zu / (an)statt dass · falls / sofern','Politische Beteiligung und Bürgerrechte diskutieren','Einen formellen Brief an eine Behörde schreiben (Widerspruch)'],
situacion:{title:'Consulta jurídica',npc:'Frau Brenner',scene:'O seu senhorio quer aumentar o aluguel em 20 % e ficar com parte da caução. Você vai a uma consulta na associação de inquilinos (Mieterverein).',role:'Du bist Frau Brenner, Juristin beim Mieterverein Frankfurt. Du siezt. Lucas kommt zur Beratung: Sein Vermieter will die Miete um 20 Prozent erhöhen und behauptet, Lucas müsse für einen Wasserschaden zahlen. Frag nach Details (Mietvertrag, letzte Erhöhung, wer hat den Schaden verursacht). Erkläre seine Rechte (Mieterhöhung höchstens 15–20 % in drei Jahren, Mietspiegel, Fristen) und was er tun kann (schriftlich widersprechen, Fotos, Fristen beachten). Benutze Konnektoren: indem, ohne dass, anstatt zu, falls, sofern. Sprich natürliches Deutsch auf B2-Niveau.',goal:'Explique o seu problema com clareza, faça perguntas sobre os seus direitos e combine os próximos passos.'},
placement:[
 {t:'mc',q:'Man kann Energie sparen, ___ man das Licht ausschaltet.',opts:['indem','ohne dass','anstatt'],a:0},
 {t:'mc',q:'Er hat den Vertrag unterschrieben, ___ ihn zu lesen.',opts:['ohne','indem','falls'],a:0},
 {t:'mc',q:'___ zu klagen, sollten Sie zuerst mit dem Vermieter sprechen.',opts:['Anstatt','Indem','Sofern'],a:0},
 {t:'mc',q:'___ Sie Fragen haben, rufen Sie uns an.',opts:['Falls','Ohne dass','Indem'],a:0},
 {t:'gap',q:'Sie hat ___ Anwalt genommen. (um advogado – acusativo)',a:['einen']},
 {t:'mc',q:'„o tribunal“',opts:['das Gericht','das Gerücht','das Gewicht'],a:0}],
lessons:[
{id:'l1',title:'Direito e justiça',desc:'das Gericht, der Anwalt, klagen …',steps:[
 {t:'vocab',title:'Justiça',items:[['der Richter / die Richterin','o juiz / a juíza'],['der Anwalt / die Anwältin','o advogado / a advogada'],['klagen','processar, entrar com ação'],['die Klage','a ação judicial'],['der Prozess','o processo (judicial)'],['das Urteil','a sentença'],['verurteilen','condenar'],['der / die Angeklagte','o réu / a ré'],['schuldig','culpado'],['unschuldig','inocente'],['die Strafe','a pena, a multa'],['der Zeuge / die Zeugin','a testemunha'],['das Verbrechen','o crime'],['der Täter / die Täterin','o autor / a autora do crime'],['das Opfer','a vítima'],['der Widerspruch','o recurso administrativo; a contradição'],]},
 {t:'mc',q:'Der Richter hat den Angeklagten zu zwei Jahren Haft ___.',opts:['verurteilt','geklagt','bezeugt'],a:0},
 {t:'mc',q:'Sie hat den Unfall gesehen und ist jetzt ___ vor Gericht.',opts:['Zeugin','Täterin','Richterin'],a:0},
 {t:'gap',q:'Welches Amt ist für Wohngeld ___? (responsável)',a:['zuständig']},
 {t:'match',q:'Ligue.',pairs:[['das Urteil','a sentença'],['schuldig','culpado'],['das Opfer','a vítima'],['klagen','processar'],['das Verbrechen','o crime']]},
 {t:'tr',de:'Ela processou o antigo empregador dela.',a:['Sie hat ihren ehemaligen Arbeitgeber verklagt.','Sie hat gegen ihren ehemaligen Arbeitgeber geklagt.','Sie hat ihren früheren Arbeitgeber verklagt.']},
 {t:'speak',es:'Falls der Vermieter nicht reagiert, werde ich mir einen Anwalt nehmen.',de:'Caso o senhorio não reaja, vou contratar um advogado.',tip:'<i>sich einen Anwalt nehmen</i> = contratar um advogado.'}
]},
{id:'l2',title:'Conectores: modo e alternativa',desc:'indem · ohne … zu / ohne dass · anstatt … zu / anstatt dass',steps:[
 {t:'info',title:'indem, ohne, anstatt',html:`<table><tr><th>conector</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>indem</b> / <b>dadurch, dass</b></td><td>como? de que modo? (= -ndo)</td><td class="es-t">Man kann sich wehren, indem man schriftlich widerspricht.</td></tr>
 <tr><td><b>ohne … zu</b></td><td>sem (mesmo sujeito)</td><td class="es-t">Er hat unterschrieben, ohne den Vertrag zu lesen.</td></tr>
 <tr><td><b>ohne dass</b></td><td>sem que (outro sujeito)</td><td class="es-t">Der Vermieter hat die Miete erhöht, ohne dass wir informiert wurden.</td></tr>
 <tr><td><b>(an)statt … zu</b></td><td>em vez de (mesmo sujeito)</td><td class="es-t">Anstatt zu klagen, haben wir einen Kompromiss gesucht.</td></tr>
 <tr><td><b>(an)statt dass</b></td><td>em vez de (outro sujeito)</td><td class="es-t">Anstatt dass die Stadt hilft, steigen die Gebühren.</td></tr></table>
 <div class="ex"><b>indem</b> responde à pergunta <i>Wie?</i>: <span class="es-t">Wie kann man Geld sparen? – Indem man weniger online einkauft.</span><br>Com <b>zu</b>, o sujeito das duas partes é o mesmo; com <b>dass</b>, há sujeitos diferentes.</div>`},
 {t:'mc',q:'Wie kann man bei der Wahl mitbestimmen? – ___ man wählen geht.',opts:['Indem','Ohne dass','Anstatt'],a:0},
 {t:'mc',q:'Sie ist gegangen, ___ sich zu verabschieden.',opts:['ohne','indem','dass'],a:0},
 {t:'mc',q:'Das Gesetz wurde beschlossen, ___ die Bürger gefragt wurden.',opts:['ohne dass','ohne zu','indem'],a:0},
 {t:'mc',q:'___ selbst zu kochen, bestellt er jeden Abend Pizza.',opts:['Anstatt','Ohne dass','Indem'],a:0},
 {t:'gap',q:'Man kann die Frist verlängern, ___ man einen Antrag stellt.',a:['indem']},
 {t:'gap',q:'Er hat die Strafe bezahlt, ohne Widerspruch ___. (einlegen)',a:['einzulegen']},
 {t:'order',es:'Anstatt sich zu beschweren sollten die Bürger selbst aktiv werden',alt:['Die Bürger sollten selbst aktiv werden anstatt sich zu beschweren', 'Die Bürger sollten anstatt sich zu beschweren selbst aktiv werden'],de:'Em vez de reclamar, os cidadãos deveriam agir eles mesmos.'},
 {t:'tr',de:'Ele saiu sem pagar.',a:['Er ist gegangen, ohne zu bezahlen.','Er ist gegangen, ohne zu zahlen.']},
 {t:'tr',de:'Aprende-se uma língua falando muito. (indem)',a:['Man lernt eine Sprache, indem man viel spricht.']}
]},
{id:'l3',title:'Participação política – falls / sofern',desc:'die Bürgerinitiative, die Petition, sofern …',steps:[
 {t:'vocab',title:'Participação',items:[['die Bürgerinitiative','a iniciativa cidadã'],['die Petition','a petição'],['der Volksentscheid','o plebiscito'],['das Wahlrecht','o direito de voto'],['die Wahlbeteiligung','a participação eleitoral'],['die Mitbestimmung','a participação nas decisões'],['der Abgeordnete / die Abgeordnete','o deputado / a deputada'],['die Opposition','a oposição'],['die Koalition','a coalizão'],['der Bescheid','a notificação (oficial)'],['einlegen','interpor (recurso)']]},
 {t:'info',title:'Condições: falls, sofern, soweit',html:`<table><tr><td><b>falls</b> = wenn (caso)</td><td class="es-t">Falls Sie den Bescheid nicht akzeptieren, können Sie Widerspruch einlegen.</td></tr>
 <tr><td><b>sofern</b> = desde que, contanto que</td><td class="es-t">Sie dürfen wählen, sofern Sie 18 Jahre alt sind.</td></tr>
 <tr><td><b>soweit</b> = até onde, na medida em que</td><td class="es-t">Soweit ich weiß, ist die Frist schon abgelaufen.</td></tr></table>
 <div class="ex">Também sem conector, com o verbo no início: <span class="es-t">Haben Sie Fragen, rufen Sie uns an.</span> (= Wenn Sie Fragen haben, …)</div>`},
 {t:'mc',q:'Ausländer aus EU-Ländern dürfen bei Kommunalwahlen wählen, ___ sie hier gemeldet sind.',opts:['sofern','ohne dass','anstatt'],a:0},
 {t:'mc',q:'___ ich weiß, braucht man dafür 1000 Unterschriften.',opts:['Soweit','Falls','Indem'],a:0},
 {t:'gap',q:'Gegen den ___ der Behörde kann man innerhalb eines Monats Widerspruch einlegen. (notificação)',a:['Bescheid']},
 {t:'gap',q:'Die Wahl___ war dieses Mal sehr hoch: 78 Prozent. (participação)',a:['beteiligung']},
 {t:'read',title:'Leitura: Eine Petition für mehr Radwege',text:`Anfang des Jahres starteten zwei Studentinnen aus Frankfurt eine Online-Petition für sichere Radwege. Innerhalb von drei Monaten unterschrieben mehr als 40.000 Menschen – weit mehr, als die beiden erwartet hatten. Daraufhin musste sich der Stadtrat mit dem Thema beschäftigen.
„Wir haben gezeigt, dass man etwas verändern kann, indem man sich organisiert“, sagt Initiatorin Hanna Weiß. Anstatt nur zu klagen, hätten sie konkrete Vorschläge gemacht und Gespräche mit allen Parteien geführt.
Nach langen Diskussionen einigten sich Regierung und Opposition auf einen Kompromiss: Bis 2028 sollen 50 Kilometer neue Radwege entstehen, sofern der Haushalt es erlaubt. Kritikern geht das nicht weit genug.`,de:`No começo do ano, duas estudantes de Frankfurt lançaram uma petição online por ciclovias seguras. Em três meses, mais de 40.000 pessoas assinaram – muito mais do que as duas esperavam. Com isso, a Câmara Municipal teve de tratar do assunto.\n„Mostramos que dá para mudar algo se organizando“, diz a idealizadora Hanna Weiß. Em vez de só reclamar, elas teriam feito propostas concretas e conversado com todos os partidos.\nDepois de longas discussões, governo e oposição chegaram a um meio-termo: até 2028 devem surgir 50 quilômetros de novas ciclovias, desde que o orçamento permita. Para os críticos, isso não vai longe o suficiente.`},
 {t:'mc',q:'Was war das Ergebnis der Petition?',opts:['Der Stadtrat musste das Thema behandeln.','Alle Autos wurden verboten.','Die Studentinnen wurden Abgeordnete.'],a:0},
 {t:'mc',q:'Wie haben die Initiatorinnen gearbeitet?',opts:['mit konkreten Vorschlägen und Gesprächen','nur mit Klagen vor Gericht','ohne andere Menschen'],a:0},
 {t:'mc',q:'Unter welcher Bedingung werden die Radwege gebaut?',opts:['sofern genug Geld im Haushalt ist','falls es nicht regnet','ohne Bedingung'],a:0}
]},
{id:'l4',title:'Escrever: recurso a um órgão público',desc:'Widerspruch gegen einen Bescheid (ca. 120 Wörter)',steps:[
 {t:'read',title:'Leitura: Bescheid der Stadt',text:`Sehr geehrter Herr Souza,
für das Parken Ihres Fahrzeugs im Halteverbot in der Leipziger Straße am 14. März um 9:20 Uhr wird ein Verwarnungsgeld von 55 Euro festgesetzt. Bitte überweisen Sie den Betrag innerhalb von zwei Wochen. Gegen diesen Bescheid können Sie innerhalb eines Monats schriftlich Widerspruch einlegen.
Mit freundlichen Grüßen
Ordnungsamt der Stadt Frankfurt am Main`,de:`Prezado Sr. Souza,\npelo estacionamento do seu veículo em local proibido na Leipziger Straße em 14 de março às 9h20, fica estabelecida uma multa de 55 euros. Por favor, transfira o valor em até duas semanas. Contra esta notificação, o senhor pode interpor recurso por escrito em até um mês.\nAtenciosamente,\nDepartamento de Ordem Pública da Cidade de Frankfurt am Main`},
 {t:'mc',q:'Wie lange hat Lucas Zeit für einen Widerspruch?',opts:['einen Monat','zwei Wochen','eine Woche'],a:0},
 {t:'mc',q:'Warum soll Lucas zahlen?',opts:['Er hat im Halteverbot geparkt.','Er ist zu schnell gefahren.','Er hat keine Steuern bezahlt.'],a:0},
 {t:'info',title:'Escrever um Widerspruch',html:`<table><tr><td>Assunto</td><td class="es-t">Widerspruch gegen Ihren Bescheid vom 20. März, Aktenzeichen 4711/26</td></tr>
 <tr><td>Introdução</td><td class="es-t">hiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein.</td></tr>
 <tr><td>Motivo</td><td class="es-t">Zur Begründung möchte ich Folgendes anführen: …</td></tr>
 <tr><td>Provas</td><td class="es-t">Als Nachweis lege ich … bei.</td></tr>
 <tr><td>Pedido</td><td class="es-t">Ich bitte Sie daher, den Bescheid aufzuheben.</td></tr></table>`},
 {t:'free',task:'Escreva um Widerspruch (~120 palavras) contra a multa: 1) assunto e referência, 2) motivo (por exemplo: o carro não era seu / a placa de proibição só foi colocada no dia / você estava descarregando uma mudança com autorização), 3) provas, 4) pedido formal. Use pelo menos um conector desta unidade (indem, ohne dass, anstatt, sofern …).',hint:'Widerspruch gegen Ihren Bescheid vom … Sehr geehrte Damen und Herren, hiermit lege ich … Zur Begründung … ohne dass … Als Nachweis lege ich … bei. Ich bitte Sie daher, … Mit freundlichen Grüßen',focus:'formelle Sprache, Konnektoren, Nominalstil',model:'Widerspruch gegen Ihren Bescheid vom 20. März, Aktenzeichen 4711/26\nSehr geehrte Damen und Herren,\nhiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein.\nZur Begründung möchte ich Folgendes anführen: Am 14. März habe ich einem Freund beim Umzug in die Leipziger Straße 12 geholfen. Für das Parken während des Umzugs hatte er bei Ihnen eine Halteverbotszone beantragt und genehmigt bekommen. Trotzdem wurde mein Fahrzeug verwarnt, ohne dass die Genehmigung berücksichtigt wurde. Offenbar hat die Kontrolleurin das Schild am Fahrzeug übersehen.\nAls Nachweis lege ich eine Kopie der Genehmigung sowie zwei Fotos bei.\nIch bitte Sie daher, den Bescheid aufzuheben. Sofern Sie weitere Unterlagen benötigen, stehe ich Ihnen gern zur Verfügung.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Konnektoren</h3><p class="es-t">indem man widerspricht · ohne den Vertrag zu lesen · ohne dass wir informiert wurden · anstatt zu klagen · anstatt dass die Stadt hilft · falls · sofern · soweit ich weiß</p>
<h3>Recht</h3><p class="es-t">das Gericht · der Anwalt · klagen · das Urteil · schuldig · der Zeuge · zuständig · der Widerspruch · der Bescheid</p>
<h3>Beteiligung</h3><p class="es-t">die Petition · unterschreiben · die Wahlbeteiligung · die Opposition · die Koalition · die Behörde</p>`});

/* ================= KAPITEL 46 · STADT DER ZUKUNFT ================= */
LANGS.de.course.units.push({id:'k46',n:'46',level:'B2',title:'Stadt der Zukunft',sub:'Moradia, planejamento urbano e mobilidade · orações relativas com wer, was, wo(r)- (Wer …, der … · alles, was … · etwas, worüber …) · apresentação com prós e contras',
goals:['Über Wohnungsmarkt, Stadtplanung und Mobilität sprechen','Relativsätze mit wer, was und wo(r)- (Wer zu spät kommt, … · alles, was … · etwas, worauf …)','Vor- und Nachteile abwägen und einen kurzen Vortrag halten','Einen Bericht über ein Stadtprojekt verstehen'],
situacion:{title:'Workshop de planejamento urbano',npc:'Herr Demir',scene:'A prefeitura de Frankfurt organiza um workshop com moradores sobre o futuro de um antigo terreno industrial. O planejador urbano Sr. Demir modera o seu grupo.',role:'Du bist Herr Can Demir, Stadtplaner bei der Stadt Frankfurt. Du siezt. Du moderierst einen Bürgerworkshop: Auf einem alten Industriegelände sollen bis 2035 Wohnungen für 3000 Menschen entstehen. Frag Lucas, was ihm in einem neuen Stadtviertel wichtig wäre (bezahlbarer Wohnraum, Grünflächen, Nahverkehr, Carsharing, Schulen, Läden), lass ihn Prioritäten setzen und spiele Zielkonflikte durch (mehr Grün = weniger Wohnungen, autofrei = Probleme für Handwerker). Benutze Relativsätze mit wer/was/wo(r)- (Wer hier wohnt, … · alles, was … · etwas, worauf …). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Diga o que é importante para você num bairro novo, justifique as prioridades e encontre soluções para os conflitos de objetivos.'},
placement:[
 {t:'mc',q:'___ in der Innenstadt wohnt, braucht kein Auto.',opts:['Wer','Der','Was'],a:0},
 {t:'mc',q:'Das ist alles, ___ ich weiß.',opts:['was','das','welches'],a:0},
 {t:'mc',q:'Es gibt etwas, ___ ich mich sehr freue.',opts:['worauf','auf das','wo'],a:0},
 {t:'mc',q:'Die Mieten steigen ständig, ___ viele Familien aus der Stadt vertreibt.',opts:['was','das','die'],a:0},
 {t:'gap',q:'Viele Menschen ___ täglich von Darmstadt nach Frankfurt. (fazem o trajeto casa-trabalho)',a:['pendeln']},
 {t:'mc',q:'„acessível (preço)“',opts:['bezahlbar','bezahlt','zahlreich'],a:0}],
lessons:[
{id:'l1',title:'Moradia e cidade',desc:'bezahlbar, der Leerstand, die Gentrifizierung …',steps:[
 {t:'vocab',title:'Mercado imobiliário e cidade',items:[['der Wohnungsmarkt','o mercado imobiliário'],['der Wohnraum','o espaço habitacional, as moradias'],['bezahlbar','acessível (de preço)'],['die Sozialwohnung','a moradia social'],['der Leerstand','os imóveis vazios'],['die Gentrifizierung','a gentrificação'],['verdrängen','expulsar, deslocar'],['die Stadtplanung','o planejamento urbano'],['das Stadtviertel','o bairro'],['die Infrastruktur','a infraestrutura'],['die Grünfläche','a área verde'],['die Lebensqualität','a qualidade de vida'],['das Eigentum','a propriedade'],['die Eigentumswohnung','o apartamento próprio'],['der Makler / die Maklerin','o corretor / a corretora'],['die Provision','a comissão']]},
 {t:'mc',q:'In Frankfurt finden viele Familien keinen ___ Wohnraum.',opts:['bezahlbaren','bezahlten','verdrängten'],a:0},
 {t:'mc',q:'Wenn reiche Menschen in ein Viertel ziehen und die Mieten steigen, spricht man von ___.',opts:['Gentrifizierung','Infrastruktur','Leerstand'],a:0},
 {t:'gap',q:'Viele alte Bewohner werden aus dem Viertel ___. (expulsos)',a:['verdrängt']},
 {t:'match',q:'Ligue.',pairs:[['der Leerstand','os imóveis vazios'],['die Grünfläche','a área verde'],['das Eigentum','a propriedade'],['die Lebensqualität','a qualidade de vida'],['der Makler','o corretor']]},
 {t:'tr',de:'O planejamento urbano precisa de mais áreas verdes.',a:['Die Stadtplanung braucht mehr Grünflächen.']},
 {t:'speak',es:'Trotz steigender Mieten möchte ich in der Stadt wohnen, weil die Lebensqualität hier für mich einfach höher ist.',de:'Apesar dos aluguéis em alta, quero morar na cidade, porque aqui a qualidade de vida para mim é simplesmente maior.',tip:'<i>trotz</i> + genitivo: <i>steigender Mieten</i> (plural sem artigo).'}
]},
{id:'l2',title:'Orações relativas com wer, was, wo(r)-',desc:'Wer …, (der) … · alles, was … · etwas, worüber …',steps:[
 {t:'info',title:'wer, was e wo(r)-',html:`<p><b>wer</b> = quem (qualquer pessoa que). A segunda parte pode começar com <i>der / dem / den</i> (às vezes omitido):</p>
 <table><tr><td class="es-t">Wer in der Stadt wohnt, (der) braucht kein Auto.</td><td>Quem mora na cidade não precisa de carro.</td></tr>
 <tr><td class="es-t">Wem die Mieten zu hoch sind, dem bleibt nur das Umland.</td><td>Para quem acha os aluguéis altos demais, só resta morar nos arredores.</td></tr></table>
 <p><b>was</b> depois de <i>alles, etwas, nichts, vieles, das</i>, depois de <b>superlativos</b> e para se referir a uma <b>frase inteira</b>:</p>
 <table><tr><td class="es-t">Das ist alles, was ich weiß.</td><td>Isso é tudo o que eu sei.</td></tr>
 <tr><td class="es-t">Das ist das Beste, was mir passieren konnte.</td><td>Foi a melhor coisa que podia me acontecer.</td></tr>
 <tr><td class="es-t">Die Miete steigt, was mich sehr ärgert.</td><td>O aluguel sobe, o que me irrita muito.</td></tr></table>
 <p>Com verbos com preposição, <b>was</b> vira <b>wo(r)- + preposição</b>:</p>
 <table><tr><td class="es-t">Es gibt etwas, worauf ich mich freue.</td><td>Há algo pelo qual estou ansioso.</td></tr>
 <tr><td class="es-t">Das ist alles, wofür ich mich interessiere.</td><td>Isso é tudo o que me interessa.</td></tr></table>
 <div class="ex">Para lugares também se usa <b>wo</b>: <span class="es-t">die Stadt, wo ich wohne</span> (= in der ich wohne).</div>`},
 {t:'mc',q:'___ keine Wohnung findet, muss oft pendeln.',opts:['Wer','Der','Wen'],a:0},
 {t:'mc',q:'Das ist das Schönste, ___ ich je gesehen habe.',opts:['was','das','wo'],a:0},
 {t:'mc',q:'Der Bus kam 30 Minuten zu spät, ___ alle geärgert hat.',opts:['was','der','das'],a:0},
 {t:'mc',q:'Gibt es etwas, ___ Sie sich beschweren möchten?',opts:['worüber','über das','was'],a:0},
 {t:'gap',q:'Nichts, ___ er sagt, stimmt. (pronome relativo)',a:['was']},
 {t:'gap',q:'Das ist genau das, ___ ich gewartet habe. (warten auf)',a:['worauf']},
 {t:'gap',q:'___ das Viertel gefällt, der sollte schnell eine Wohnung suchen. (quem)',a:['Wem']},
 {t:'order',es:'Wer mit dem Rad zur Arbeit fährt spart Geld und bleibt fit',de:'Quem vai de bicicleta para o trabalho economiza dinheiro e se mantém em forma.'},
 {t:'tr',de:'Isso é tudo o que preciso.',a:['Das ist alles, was ich brauche.']}
]},
{id:'l3',title:'Mobilidade do futuro',desc:'pendeln, der Nahverkehr, das Lastenrad …',steps:[
 {t:'vocab',title:'Mobilidade',items:[['pendeln','fazer o trajeto casa-trabalho'],['der Pendler / die Pendlerin','quem se desloca diariamente para o trabalho'],['der öffentliche Nahverkehr (ÖPNV)','o transporte público'],['das Carsharing','o compartilhamento de carros'],['das Lastenrad','a bicicleta de carga'],['die Elektromobilität','a mobilidade elétrica'],['die Ladestation','o ponto de recarga'],['autonom','autônomo'],['vernetzt','conectado (em rede)'],['die Verkehrswende','a transição da mobilidade'],['der Ausbau','a ampliação'],['ausbauen','ampliar, expandir']]},
 {t:'read',title:'Leitura: Superblocks in Barcelona',text:`In Barcelona werden seit 2016 sogenannte Superblocks eingerichtet: Jeweils neun Häuserblocks werden zu einer Einheit zusammengefasst. Hineinfahren darf nur, wer dort wohnt oder etwas liefert – und auch das nur mit zehn Stundenkilometern. Wo früher vier Spuren Verkehr waren, stehen heute Bänke, Bäume und Spielplätze.
Was als Experiment im Viertel Poblenou begann, gilt inzwischen international als Vorbild. Delegationen aus Japan, Kanada und Südkorea besuchen die Stadt regelmäßig. „Das Wichtigste, was wir gelernt haben: Man muss die Menschen früh beteiligen, bevor man etwas verändert“, sagt eine Stadtplanerin. Laut einer Studie ist der Lärm in den Superblocks deutlich gesunken.
Kritiker weisen allerdings darauf hin, dass sich der Verkehr in die Nachbarstraßen verlagert und die Mieten in den beliebten Vierteln stark steigen. Wer wenig verdient, kann sich das Leben dort kaum noch leisten.`,de:`Em Barcelona, desde 2016, estão sendo criados os chamados superquarteirões: cada nove quarteirões formam uma unidade. Só pode entrar de carro quem mora ali ou faz entregas – e mesmo assim só a dez quilômetros por hora. Onde antes havia quatro faixas de trânsito, hoje há bancos, árvores e parquinhos.\nO que começou como experimento no bairro de Poblenou é hoje considerado um modelo internacional. Delegações do Japão, do Canadá e da Coreia do Sul visitam a cidade regularmente. „A coisa mais importante que aprendemos: é preciso envolver as pessoas cedo, antes de mudar algo“, diz uma urbanista. Segundo um estudo, o barulho nos superquarteirões diminuiu bastante.\nCríticos apontam, porém, que o trânsito se desloca para as ruas vizinhas e que os aluguéis nos bairros mais procurados sobem muito. Quem ganha pouco mal consegue pagar a vida ali.`},
 {t:'mc',q:'Wer darf mit dem Auto in einen Superblock fahren?',opts:['nur Anwohner und Lieferverkehr','alle, aber nur nachts','niemand'],a:0},
 {t:'mc',q:'Was hat man laut der Stadtplanerin gelernt?',opts:['Man muss die Menschen früh beteiligen.','Autos sind immer schlecht.','Man braucht keine Spielplätze.'],a:0},
 {t:'mc',q:'Was kritisieren manche?',opts:['Der Verkehr verlagert sich in andere Straßen.','Es gibt zu viele Bänke.','Die Straßen sind zu laut.'],a:0},
 {t:'gap',q:'Die Stadt will das Radwegenetz ___. (ampliar)',a:['ausbauen']},
 {t:'tr',de:'Muitas pessoas que vão e voltam do trabalho ficam todo dia no engarrafamento.',a:['Viele Pendler stehen jeden Tag im Stau.','Viele Pendler stehen täglich im Stau.']}
]},
{id:'l4',title:'Falar: prós e contras',desc:'Kurzvortrag „Stadt oder Land?“',steps:[
 {t:'info',title:'Pesar vantagens e desvantagens',html:`<table><tr><td class="es-t">Ein großer Vorteil ist, dass … · Positiv ist außerdem, dass …</td><td>Uma grande vantagem é que … · Também é positivo que …</td></tr>
 <tr><td class="es-t">Ein Nachteil ist allerdings … · Problematisch finde ich, dass …</td><td>Uma desvantagem, porém, é … · Acho problemático que …</td></tr>
 <tr><td class="es-t">Bei uns in Brasilien ist es so, dass … · Im Vergleich zu Deutschland …</td><td>No meu país é assim: … · Em comparação com a Alemanha …</td></tr>
 <tr><td class="es-t">Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …</td><td>Pesando prós e contras, chego à conclusão de que …</td></tr></table>`},
 {t:'vocab',title:'Argumentar',items:[['der Vorteil','a vantagem'],['der Nachteil','a desvantagem'],['abwägen','pesar, ponderar'],['zu dem Schluss kommen','chegar à conclusão'],['überwiegen','predominar, prevalecer'],['einerseits … andererseits','por um lado … por outro']]},
 {t:'mc',q:'Sie möchten am Ende eines Vortrags Ihre Meinung sagen. Was passt?',opts:['Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …','Ein Nachteil ist allerdings …','Bei uns ist es so, dass …'],a:0},
 {t:'gap',q:'Für mich ___ die Vorteile des Stadtlebens. (predominam)',a:['überwiegen']},
 {t:'speak',es:'Ein großer Vorteil der Stadt ist, dass man alles mit Bus und Bahn erreichen kann. Ein Nachteil sind allerdings die hohen Mieten.',de:'Uma grande vantagem da cidade é que dá para chegar a tudo de ônibus e trem. Uma desvantagem, porém, são os aluguéis altos.',tip:'<i>erreichen</i> = alcançar, chegar a (acusativo).'},
 {t:'free',task:'Prepare por escrito uma apresentação curta (~150 palavras) sobre o tema „Wohnen in der Stadt oder auf dem Land?“: 1) apresente o tema, 2) conte a sua experiência, 3) como é no seu país, 4) vantagens e desvantagens, 5) sua opinião e conclusão. Use pelo menos uma oração com wer ou was.',hint:'Ich möchte heute über … sprechen. Ich selbst wohne … Bei uns in … Ein großer Vorteil ist, dass … Ein Nachteil ist allerdings … Wer …, … Wenn ich abwäge, komme ich zu dem Schluss, dass …',focus:'Vortragsstruktur, Relativsätze mit wer/was, Vor- und Nachteile',model:'Ich möchte heute über das Thema „Wohnen in der Stadt oder auf dem Land?“ sprechen.\nIch selbst bin in São Paulo aufgewachsen, einer riesigen Stadt, und wohne jetzt in Frankfurt. Bei uns in Brasilien ziehen immer noch viele Menschen vom Land in die großen Städte, weil es dort mehr Arbeit gibt.\nEin großer Vorteil der Stadt ist, dass man fast alles zu Fuß oder mit Bus und Bahn erreichen kann. Außerdem gibt es ein riesiges kulturelles Angebot. Ein Nachteil sind allerdings die hohen Mieten, was besonders für Familien ein Problem ist. Wer auf dem Land wohnt, hat dagegen mehr Platz und Natur, braucht aber oft ein Auto.\nWenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass die Stadt für mich im Moment besser passt. Mit Kindern würde ich aber vielleicht anders entscheiden.\nVielen Dank für Ihre Aufmerksamkeit.'}
]}],
resumen:`<h3>Relativsätze mit wer / was / wo(r)-</h3><p class="es-t">Wer in der Stadt wohnt, braucht kein Auto. · Das ist alles, was ich weiß. · das Beste, was … · Die Miete steigt, was mich ärgert. · etwas, worauf ich mich freue · die Stadt, wo ich wohne</p>
<h3>Stadt & Mobilität</h3><p class="es-t">bezahlbarer Wohnraum · die Gentrifizierung · verdrängen · pendeln · der Nahverkehr · das Lastenrad · ausbauen</p>
<h3>Vortrag</h3><p class="es-t">Ein großer Vorteil ist, dass … · Ein Nachteil ist allerdings … · Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …</p>`});

/* ================= KAPITEL 47 · LEBENSWEGE ================= */
LANGS.de.course.units.push({id:'k47',n:'47',level:'B2',title:'Lebenswege',sub:'Emigrar, recomeçar, identidade · hätte … machen sollen (arrependimento com modal) · conectores de texto (folglich, daraufhin, stattdessen …) · olhar para trás',
goals:['Über Lebensentscheidungen, Auswanderung und Identität sprechen','Konjunktiv II der Vergangenheit mit Modalverb: Ich hätte früher Deutsch lernen sollen.','Texte verknüpfen: folglich, daraufhin, stattdessen, zudem, dennoch, nämlich','Einen persönlichen Rückblick schreiben'],
situacion:{title:'Entrevista para o podcast',npc:'Sophie',scene:'A Sophie faz um podcast sobre pessoas que recomeçaram a vida em outro país. Ela entrevista você sobre os seus três anos na Alemanha.',role:'Du bist Sophie, Journalistin und Podcasterin („Neuanfang – Geschichten vom Ankommen“). Du duzt, weil der Podcast locker ist. Du interviewst Lucas über seine drei Jahre in Deutschland: Warum ist er ausgewandert? Was war der schwierigste Moment, was der schönste? Was würde er heute anders machen (Ich hätte … sollen)? Wie hat sich seine Identität verändert – fühlt er sich mehr brasilianisch, deutsch oder beides? Was rät er Menschen, die auswandern wollen? Hak nach, wenn Antworten zu kurz sind. Benutze Textkonnektoren (daraufhin, stattdessen, dennoch). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Conte a sua trajetória com detalhes, fale de um arrependimento (hätte … sollen) e dê um conselho para quem quer emigrar.'},
placement:[
 {t:'mc',q:'Ich ___ früher mit dem Deutschlernen anfangen sollen.',opts:['hätte','wäre','würde'],a:0},
 {t:'mc',q:'Sie hätte den Job nicht annehmen ___.',opts:['sollen','gesollt','zu sollen'],a:0},
 {t:'mc',q:'Er bekam ein Jobangebot in Berlin. ___ kündigte er seine Wohnung.',opts:['Daraufhin','Stattdessen','Nämlich'],a:0},
 {t:'mc',q:'Ich wollte Medizin studieren. ___ habe ich eine Ausbildung gemacht.',opts:['Stattdessen','Folglich','Zudem'],a:0},
 {t:'gap',q:'Viele Menschen ___ jedes Jahr nach Kanada aus. (emigram)',a:['wandern']},
 {t:'mc',q:'„olhando para trás, em retrospecto“',opts:['im Nachhinein','im Voraus','im Gegenteil'],a:0}],
lessons:[
{id:'l1',title:'Recomeçar',desc:'auswandern, der Neuanfang, die Wurzeln …',steps:[
 {t:'vocab',title:'Emigrar e recomeçar',items:[['auswandern','emigrar'],['die Auswanderung','a emigração'],['einwandern','imigrar'],['der Neuanfang','o recomeço'],['der Wendepunkt','o ponto de virada'],['sich anpassen an','adaptar-se a'],['die Anpassung','a adaptação'],['die Wurzeln (Pl.)','as raízes'],['die Identität','a identidade'],['zweisprachig','bilíngue'],['die Mehrsprachigkeit','o multilinguismo'],['die Zugehörigkeit','o pertencimento'],['die Fremde','o estrangeiro (lugar distante)'],['vertraut','familiar, conhecido'],['der Kulturschock','o choque cultural']]},
 {t:'mc',q:'Der Umzug nach Deutschland war ein ___ in meinem Leben.',opts:['Wendepunkt','Kulturschock','Wurzeln'],a:0},
 {t:'mc',q:'Ihre Kinder sprechen Deutsch und Portugiesisch – sie wachsen ___ auf.',opts:['zweisprachig','fremd','vertraut'],a:0},
 {t:'gap',q:'Am Anfang war alles fremd, heute ist mir die Stadt ___. (familiar)',a:['vertraut']},
 {t:'match',q:'Ligue.',pairs:[['auswandern','emigrar'],['der Neuanfang','o recomeço'],['die Wurzeln','as raízes'],['die Zugehörigkeit','o pertencimento'],['sich anpassen','adaptar-se']]},
 {t:'tr',de:'Foi difícil me adaptar ao clima.',a:['Es war schwierig, mich an das Klima anzupassen.','Es war schwer, mich an das Klima anzupassen.']},
 {t:'speak',es:'Obwohl ich mich gut angepasst habe, spüre ich meine Wurzeln heute stärker als früher.',de:'Embora eu tenha me adaptado bem, hoje sinto as minhas raízes com mais força do que antes.',tip:'<i>spüren</i> = sentir (perceber).'}
]},
{id:'l2',title:'Arrependimentos: hätte … sollen',desc:'Ich hätte früher anfangen sollen. · Du hättest es sagen können.',steps:[
 {t:'info',title:'Konjunktiv II passado com modal',html:`<p>Para falar de algo que <b>deveria / poderia ter acontecido</b> (mas não aconteceu): <b>hätte</b> + infinitivo + <b>modal no infinitivo</b> (no final):</p>
 <table><tr><td class="es-t">Ich hätte früher Deutsch lernen sollen.</td><td>Eu deveria ter aprendido alemão antes.</td></tr>
 <tr><td class="es-t">Du hättest mich anrufen können!</td><td>Você podia ter me ligado!</td></tr>
 <tr><td class="es-t">Wir hätten nicht so viel bezahlen müssen.</td><td>Não teríamos precisado pagar tanto.</td></tr></table>
 <div class="ex">Nunca com particípio do modal: <span class="es-t">Ich hätte kommen sollen</span>, não <i>gesollt</i>. Em oração subordinada, <b>hätte</b> vem antes dos dois infinitivos: <span class="es-t">…, dass ich früher hätte kommen sollen.</span></div>`},
 {t:'mc',q:'Ich habe den Zug verpasst. Ich ___ früher losgehen sollen.',opts:['hätte','habe','wäre'],a:0},
 {t:'mc',q:'Warum hast du nichts gesagt? Du hättest mich ___!',opts:['fragen können','gefragt können','fragen gekonnt'],a:0},
 {t:'mc',q:'Ich weiß, dass ich mehr ___.',opts:['hätte üben sollen','üben sollen hätte','hätte geübt sollen'],a:0},
 {t:'gap',q:'Wir hätten die Wohnung nicht nehmen ___. (dever – modal)',a:['sollen']},
 {t:'gap',q:'Sie hätte länger bleiben ___, aber sie wollte nicht. (poder – modal)',a:['können']},
 {t:'order',es:'Im Nachhinein hätte ich mich besser auf den Winter vorbereiten sollen',alt:['Ich hätte mich im Nachhinein besser auf den Winter vorbereiten sollen'],de:'Em retrospecto, eu deveria ter me preparado melhor para o inverno.'},
 {t:'tr',de:'Você deveria ter me contado isso.',a:['Du hättest mir das sagen sollen.','Das hättest du mir sagen sollen.','Du hättest mir das erzählen sollen.']},
 {t:'speak',es:'Im Nachhinein hätte ich mir mehr Zeit für die Wohnungssuche nehmen sollen.',de:'Olhando para trás, eu deveria ter tirado mais tempo para procurar apartamento.',tip:'<i>sich Zeit nehmen für</i> = tirar tempo para.'}
]},
{id:'l3',title:'Conectores de texto',desc:'folglich, daraufhin, stattdessen, zudem, dennoch, nämlich',steps:[
 {t:'info',title:'Ligar frases num texto',html:`<p>Estes conectores ficam na <b>posição 1</b> (o verbo vem logo depois) – exceto <b>nämlich</b>, que fica depois do verbo:</p>
 <table><tr><th>conector</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>folglich / somit</b></td><td>consequentemente</td><td class="es-t">Die Mieten stiegen stark. Folglich zogen viele weg.</td></tr>
 <tr><td><b>daraufhin</b></td><td>em seguida, em reação a isso</td><td class="es-t">Er bekam die Zusage. Daraufhin kündigte er.</td></tr>
 <tr><td><b>stattdessen</b></td><td>em vez disso</td><td class="es-t">Ich wollte nach London. Stattdessen bin ich in Frankfurt gelandet.</td></tr>
 <tr><td><b>zudem / außerdem</b></td><td>além disso</td><td class="es-t">Die Stelle war gut bezahlt. Zudem gab es Homeoffice.</td></tr>
 <tr><td><b>dennoch</b></td><td>mesmo assim (= trotzdem)</td><td class="es-t">Der Anfang war hart. Dennoch habe ich nie aufgegeben.</td></tr>
 <tr><td><b>nämlich</b></td><td>é que, pois (explica)</td><td class="es-t">Ich bin müde. Ich habe nämlich kaum geschlafen.</td></tr></table>`},
 {t:'vocab',title:'Conectores',items:[['folglich','consequentemente'],['somit','assim, portanto'],['daraufhin','em seguida, em reação a isso'],['stattdessen','em vez disso'],['zudem','além disso'],['dennoch','mesmo assim'],['nämlich','é que, pois'],['im Nachhinein','em retrospecto'],['rückblickend','olhando para trás']]},
 {t:'mc',q:'Ich habe keine Wohnung gefunden. ___ habe ich zuerst bei Freunden gewohnt.',opts:['Folglich','Dennoch','Nämlich'],a:0},
 {t:'mc',q:'Ich komme heute nicht. Ich bin ___ krank.',opts:['nämlich','daraufhin','stattdessen'],a:0},
 {t:'mc',q:'Die Prüfung war sehr schwer. ___ hat sie bestanden.',opts:['Dennoch','Folglich','Zudem'],a:0},
 {t:'mc',q:'Der Chef kritisierte das Projekt. ___ änderte das Team den Plan.',opts:['Daraufhin','Nämlich','Stattdessen'],a:0},
 {t:'gap',q:'Ich wollte eigentlich Jura studieren. ___ habe ich Informatik gewählt. (em vez disso)',a:['Stattdessen']},
 {t:'gap',q:'Die Wohnung ist hell und groß. ___ liegt sie zentral. (além disso – z…)',a:['Zudem']},
 {t:'tr',de:'O começo foi difícil. Mesmo assim, eu fiquei. (dennoch)',a:['Der Anfang war schwierig. Dennoch bin ich geblieben.','Der Anfang war schwer. Dennoch bin ich geblieben.']}
]},
{id:'l4',title:'Escrever: olhar para trás',desc:'Blogbeitrag „Drei Jahre in Deutschland“ (ca. 180 Wörter)',steps:[
 {t:'read',title:'Leitura: Mein Weg – ein Gastbeitrag',text:`Vor acht Jahren bin ich aus Kerala in Indien nach Stuttgart gekommen, um als Pflegekraft zu arbeiten. Rückblickend war das die mutigste Entscheidung meines Lebens.
Die ersten Monate waren hart. Ich verstand kaum ein Wort, wenn die Kolleginnen Schwäbisch sprachen, und im Winter wurde es schon um halb fünf dunkel. Ich hätte mich besser vorbereiten sollen – nicht nur auf die Sprache, sondern auch auf die Einsamkeit. Dennoch habe ich nie ans Aufgeben gedacht.
Der Wendepunkt kam, als ich in einem Chor anfing. Dort lernte ich Menschen kennen, die mich nicht als „die Neue aus Indien“ sahen, sondern einfach als Priya. Daraufhin wurde auch mein Deutsch schnell besser.
Heute leite ich ein Team von zwölf Pflegekräften. Meine Kinder sind zweisprachig und lachen über meinen Akzent. Bin ich Inderin oder Deutsche? Ich habe aufgehört, mich zu entscheiden. Ich bin nämlich beides.`,de:`Há oito anos vim de Kerala, na Índia, para Stuttgart para trabalhar como profissional de enfermagem. Olhando para trás, foi a decisão mais corajosa da minha vida.\nOs primeiros meses foram duros. Eu mal entendia uma palavra quando as colegas falavam suábio, e no inverno escurecia já às quatro e meia. Eu deveria ter me preparado melhor – não só para a língua, mas também para a solidão. Mesmo assim, nunca pensei em desistir.\nO ponto de virada veio quando comecei num coral. Lá conheci pessoas que não me viam como „a nova da Índia“, mas simplesmente como Priya. Em seguida, o meu alemão também melhorou rápido.\nHoje lidero uma equipe de doze profissionais de enfermagem. Meus filhos são bilíngues e riem do meu sotaque. Sou indiana ou alemã? Parei de escolher. É que sou as duas coisas.`},
 {t:'mc',q:'Was bereut Priya?',opts:['Sie hätte sich besser vorbereiten sollen.','Sie hätte nicht nach Deutschland kommen sollen.','Sie hätte in Indien bleiben sollen.'],a:0},
 {t:'mc',q:'Was war der Wendepunkt?',opts:['Sie fing in einem Chor an.','Sie bekam Kinder.','Sie wurde Teamleiterin.'],a:0},
 {t:'mc',q:'Wie sieht Priya ihre Identität heute?',opts:['Sie fühlt sich als Inderin und Deutsche.','Sie fühlt sich nur deutsch.','Sie weiß nicht, wer sie ist.'],a:0},
 {t:'free',task:'Escreva um texto de blog (~180 palavras) sobre a sua trajetória (real ou a do curso: três anos na Alemanha): 1) por que você tomou a decisão, 2) o começo e as dificuldades, 3) um ponto de virada, 4) algo que você deveria ter feito diferente (hätte … sollen), 5) quem você é hoje e um conselho. Use pelo menos três conectores (daraufhin, dennoch, stattdessen, zudem, nämlich …).',hint:'Vor drei Jahren … Rückblickend … Die ersten Monate … Ich hätte … sollen. Dennoch … Der Wendepunkt kam, als … Daraufhin … Heute … Mein Rat: …',focus:'Konjunktiv II Vergangenheit mit Modalverb, Textkonnektoren, Präteritum',model:'Vor drei Jahren habe ich in São Paulo meinen sicheren Job gekündigt und bin nach Frankfurt gezogen. Ich wollte nämlich nicht nur Software entwickeln, sondern auch eine neue Kultur kennenlernen. Rückblickend war das die beste Entscheidung meines Lebens.\nDie ersten Monate waren allerdings schwierig. Ich verstand die Kollegen in der Kaffeeküche kaum, und die Wohnungssuche war ein Albtraum. Im Nachhinein hätte ich schon in Brasilien intensiver Deutsch lernen sollen. Dennoch habe ich nie ans Zurückgehen gedacht.\nDer Wendepunkt kam, als ich in eine WG mit Tom gezogen bin. Er hat mich zu seinen Freunden mitgenommen und mich nur auf Deutsch korrigiert – manchmal ziemlich streng. Daraufhin habe ich zum ersten Mal einen ganzen Abend auf Deutsch verstanden.\nHeute fühle ich mich in Frankfurt zu Hause, vermisse aber immer noch das Essen meiner Mutter. Zudem habe ich gelernt, dass man sich nicht zwischen zwei Ländern entscheiden muss.\nMein Rat: Sucht euch von Anfang an Kontakte außerhalb der Arbeit – stattdessen nur Netflix zu schauen, hilft nicht!'}
]}],
resumen:`<h3>hätte … sollen / können / müssen</h3><p class="es-t">Ich hätte früher Deutsch lernen sollen. · Du hättest mich anrufen können! · …, dass ich früher hätte kommen sollen.</p>
<h3>Textkonnektoren</h3><p class="es-t">folglich · somit · daraufhin · stattdessen · zudem · dennoch · nämlich (depois do verbo) · im Nachhinein · rückblickend</p>
<h3>Lebenswege</h3><p class="es-t">auswandern · der Neuanfang · der Wendepunkt · sich anpassen an · die Wurzeln · die Identität · zweisprachig · vertraut</p>`});

/* ================= KAPITEL 48 · PRÜFUNGSTRAINING B2 ================= */
LANGS.de.course.units.push({id:'k48',n:'48',level:'B2',title:'Prüfungstraining B2',sub:'Simulado no formato da prova B2 do Goethe-Institut: ler, ouvir, escrever, falar · palavras importantes para a prova',
goals:['Lesen: Meinungen, Zeitungsartikel, Lückentext, Stellungnahmen, Regeln (5 Teile)','Hören: kurze Texte, Interview, Diskussion, Vortrag (4 Teile)','Schreiben: Forumsbeitrag (~150 Wörter) und formelle Nachricht (~100 Wörter)','Sprechen: Vortrag halten, auf Fragen reagieren, ein Thema diskutieren','Wichtige Wörter für die Prüfung: berücksichtigen, sich auswirken auf, erheblich …'],
situacion:{title:'Prova oral B2 (simulação)',npc:'Prüfer',scene:'Prova oral do nível B2. O examinador conduz as duas partes; a sua parceira de prova se chama Nina.',role:'Du bist Prüfer bei einer mündlichen Deutschprüfung B2 (Goethe-Format). Du siezt. Teil 1: Bitte Lucas, einen Vortrag zum Thema „Sollte das Studium in Deutschland Gebühren kosten?“ zu halten (Situation in Deutschland und in seinem Land, Vor- und Nachteile, eigene Meinung). Hör zu, ohne zu unterbrechen, und stell danach eine Nachfrage. Teil 2: Spiel die Partnerin Nina (du siezt auch in dieser Rolle) und diskutiere mit Lucas die Frage „Sollten Handys in Restaurants verboten werden?“. Vertritt eine andere Meinung als er, bring Argumente und reagiere auf seine. Achte darauf, dass er Gründe nennt, widerspricht und am Ende ein Fazit zieht. Sprich natürliches Deutsch auf B2-Niveau.',goal:'Faça uma apresentação estruturada (~4 min), responda à pergunta e discuta com a Nina defendendo a sua opinião.'},
placement:[
 {t:'mc',q:'In der B2-Prüfung schreiben Sie einen Forumsbeitrag mit ca. …',opts:['150 Wörtern','40 Wörtern','400 Wörtern'],a:0},
 {t:'mc',q:'Wie leiten Sie in einer Diskussion einen Widerspruch höflich ein?',opts:['Da muss ich Ihnen widersprechen, weil …','Das ist Quatsch.','Sie haben keine Ahnung.'],a:0},
 {t:'mc',q:'Das Gesetz wirkt sich negativ ___ die Mieter aus.',opts:['auf','an','über'],a:0},
 {t:'gap',q:'Bei der Planung müssen alle Wünsche ___ werden. (levados em conta)',a:['berücksichtigt']}],
lessons:[
{id:'l1',title:'Ler (Lesen)',desc:'5 partes: opiniões, artigo, texto com lacunas, posicionamentos, regras',steps:[
 {t:'info',title:'A prova B2 do Goethe-Institut',html:`<p>A prova <b>Goethe-Zertifikat B2</b> tem quatro módulos (podem ser feitos separadamente):</p>
 <table><tr><th>módulo</th><th>duração</th><th>o que é</th></tr>
 <tr><td>Lesen (ler)</td><td>65 min</td><td>5 partes: opiniões de várias pessoas, artigo de jornal, texto em que faltam frases, posicionamentos sobre um tema, regras/instruções</td></tr>
 <tr><td>Hören (ouvir)</td><td>~40 min</td><td>4 partes: textos curtos (avisos, mensagens), entrevista, discussão, palestra</td></tr>
 <tr><td>Schreiben (escrever)</td><td>75 min</td><td>texto de opinião num fórum (<b>~150 palavras</b>) e mensagem formal (<b>~100 palavras</b>)</td></tr>
 <tr><td>Sprechen (falar)</td><td>~15 min (+ 15 min de preparação)</td><td>em dupla: apresentação (~4 min) com perguntas e uma discussão</td></tr></table>
 <div class="ex">Para passar: <b>60 %</b> em cada módulo. Os textos abaixo são simulados próprios no estilo da prova.</div>`},
 {t:'read',kind:'Lesen · Teil 1',title:'Forum: Ein Jahr Sabbatical – Erfahrungen',text:`Martina, 44: Nach 20 Jahren im Büro habe ich mir ein Jahr Auszeit genommen und bin mit dem Fahrrad durch Südamerika gefahren. Finanziell war das nur möglich, weil ich drei Jahre lang auf einen Teil meines Gehalts verzichtet habe. Bereut habe ich es keine Sekunde – auch wenn die Rückkehr in den Alltag schwerer war als gedacht.
Henrik, 37: Mein Arbeitgeber war anfangs skeptisch. Dennoch hat er zugestimmt, sofern ich vorher einen Kollegen einarbeite. Ich habe das Jahr genutzt, um eine Weiterbildung zu machen. Heute habe ich eine bessere Position – davon profitiert also auch die Firma.
Dana, 51: Ein Sabbatical klingt toll, ist aber für viele Menschen unrealistisch. Wer alleinerziehend ist oder einen kleinen Betrieb hat, kann sich ein Jahr ohne Einkommen schlicht nicht leisten. Ich finde, man sollte lieber über kürzere Arbeitszeiten für alle sprechen.`,de:`Martina, 44: Depois de 20 anos no escritório, tirei um ano de pausa e atravessei a América do Sul de bicicleta. Financeiramente, isso só foi possível porque abri mão de parte do meu salário durante três anos. Não me arrependi nem por um segundo – mesmo que a volta à rotina tenha sido mais difícil do que eu pensava.\nHenrik, 37: Meu empregador no início estava cético. Mesmo assim concordou, desde que eu treinasse um colega antes. Usei o ano para fazer uma formação. Hoje tenho um cargo melhor – então a empresa também se beneficia.\nDana, 51: Um sabático parece ótimo, mas para muitas pessoas não é realista. Quem cria os filhos sozinho ou tem uma pequena empresa simplesmente não pode se dar ao luxo de um ano sem renda. Acho que seria melhor falar sobre jornadas de trabalho menores para todos.`},
 {t:'match',kind:'Lesen · Teil 1',q:'Quem diz isso? (Martina, Henrik ou Dana)',pairs:[['Die Zeit danach war nicht einfach.','Martina'],['Auch der Arbeitgeber hatte einen Vorteil.','Henrik'],['Nicht jeder kann sich so etwas leisten.','Dana']]},
 {t:'mc',kind:'Lesen · Teil 1',q:'Wie hat Martina ihr Sabbatical finanziert?',opts:['Sie hat vorher auf einen Teil ihres Gehalts verzichtet.','Ihr Arbeitgeber hat alles bezahlt.','Sie hat unterwegs gearbeitet.'],a:0},
 {t:'read',kind:'Lesen · Teil 2',title:'Zeitungsartikel: Die Rückkehr der Nachtzüge',text:`Lange galten Nachtzüge in Europa als Auslaufmodell: zu langsam, zu teuer, zu unbequem. Viele Verbindungen wurden in den 2010er-Jahren eingestellt. Inzwischen erleben sie eine überraschende Renaissance. Angesichts der Klimadebatte suchen immer mehr Reisende nach Alternativen zum Flugzeug – und entdecken dabei das Schlafwagenabteil neu.
Die österreichische Bahn hat ihr Nachtzugnetz in den letzten Jahren erheblich ausgebaut, und neue private Anbieter verbinden Städte wie Berlin, Brüssel und Prag. Die Auslastung liegt auf vielen Strecken bei über 80 Prozent.
Dennoch ist der Erfolg keineswegs gesichert. Der Betrieb ist teuer, da die Züge nachts nur einmal fahren und tagsüber meist stillstehen. Zudem fehlen moderne Wagen; Bestellungen dauern oft Jahre. Fachleute fordern deshalb, dass die Politik Nachtzüge finanziell stärker unterstützt – etwa durch niedrigere Gebühren für die Nutzung der Schienen.`,de:`Por muito tempo, os trens noturnos na Europa foram vistos como um modelo ultrapassado: lentos demais, caros demais, desconfortáveis demais. Muitas linhas foram suspensas nos anos 2010. Hoje vivem um renascimento surpreendente. Diante do debate climático, cada vez mais viajantes procuram alternativas ao avião – e redescobrem a cabine-leito.\nA ferrovia austríaca ampliou consideravelmente sua rede de trens noturnos nos últimos anos, e novas empresas privadas ligam cidades como Berlim, Bruxelas e Praga. A ocupação passa de 80 por cento em muitas linhas.\nMesmo assim, o sucesso não está nada garantido. A operação é cara, já que os trens só fazem uma viagem por noite e durante o dia geralmente ficam parados. Além disso, faltam vagões modernos; encomendas muitas vezes levam anos. Por isso, especialistas exigem que a política apoie mais os trens noturnos financeiramente – por exemplo, com taxas menores pelo uso dos trilhos.`},
 {t:'mc',kind:'Lesen · Teil 2',q:'Warum werden Nachtzüge wieder beliebter?',opts:['Viele Menschen wollen weniger fliegen.','Sie sind billiger als Flüge.','Sie sind schneller geworden.'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Warum ist der Betrieb teuer?',opts:['Die Züge werden tagsüber kaum genutzt.','Die Fahrkarten sind zu billig.','Es gibt zu wenige Reisende.'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Was fordern Fachleute?',opts:['mehr finanzielle Unterstützung durch die Politik','höhere Preise','weniger Strecken'],a:0},
 {t:'read',kind:'Lesen · Teil 3',title:'Text mit Lücken: Lernen im Schlaf?',text:`Kann man im Schlaf Vokabeln lernen? Diese Frage beschäftigt Forscher seit Jahrzehnten. (1) ___ Eine Studie aus der Schweiz hat jedoch gezeigt, dass das Gehirn im Schlaf durchaus arbeitet. Die Versuchspersonen lernten abends niederländische Wörter. (2) ___ Am nächsten Morgen erinnerten sich diejenigen, die die Wörter im Schlaf noch einmal gehört hatten, deutlich besser. Die Forscher betonen allerdings, dass man nur festigen kann, was man vorher bewusst gelernt hat.`,de:`Dá para aprender vocabulário dormindo? Essa pergunta ocupa pesquisadores há décadas. (1) ___ Um estudo da Suíça mostrou, porém, que o cérebro trabalha, sim, durante o sono. Os participantes aprenderam palavras em holandês à noite. (2) ___ Na manhã seguinte, aqueles que tinham ouvido as palavras de novo durante o sono se lembravam bem melhor. Os pesquisadores enfatizam, porém, que só se consegue fixar o que se aprendeu antes conscientemente.`},
 {t:'mc',kind:'Lesen · Teil 3',q:'Welcher Satz passt in Lücke (1)?',opts:['Lange glaubte man, dass das unmöglich sei.','Die Wörter waren sehr einfach.','Danach gingen alle nach Hause.'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Welcher Satz passt in Lücke (2)?',opts:['Während einige danach schliefen, wurden ihnen die Wörter leise vorgespielt.','Lange glaubte man, dass das unmöglich sei.','Niederländisch ist eine schwere Sprache.'],a:0},
 {t:'read',kind:'Lesen · Teil 4',title:'Stellungnahmen: Sollte Wählen ab 16 erlaubt sein?',text:`a) Jugendliche sind von politischen Entscheidungen – etwa beim Klimaschutz oder in der Bildung – am längsten betroffen. Folglich sollten sie auch mitbestimmen dürfen. (Lena, 17)
b) Mit 16 darf man nicht einmal einen Vertrag ohne die Eltern unterschreiben. Warum sollte man dann über die Regierung entscheiden? (Gerd, 63)
c) Erfahrungen aus Österreich zeigen, dass die Wahlbeteiligung junger Erstwähler sogar höher ist, sofern Schulen vorher gut informieren. (Dr. Aydın, Politologin)
d) Ich bin grundsätzlich dafür, aber dann muss politische Bildung in der Schule viel ernster genommen werden. Anstatt nur Daten auswendig zu lernen, sollten wir echte Debatten führen. (Jan Weber, Lehrer)`,de:`a) Os jovens são os afetados por mais tempo por decisões políticas – por exemplo, na proteção do clima ou na educação. Consequentemente, também deveriam poder participar das decisões. (Lena, 17)\nb) Com 16 anos não se pode nem assinar um contrato sem os pais. Por que então decidir sobre o governo? (Gerd, 63)\nc) Experiências da Áustria mostram que a participação de quem vota pela primeira vez é até maior, desde que as escolas informem bem antes. (Dra. Aydın, cientista política)\nd) Sou a favor em princípio, mas então a educação política na escola precisa ser levada muito mais a sério. Em vez de só decorar datas, deveríamos fazer debates de verdade. (Jan Weber, professor)`},
 {t:'match',kind:'Lesen · Teil 4',q:'Qual posição combina?',pairs:[['dagegen: Jugendliche sind noch nicht volljährig','b) Gerd'],['dafür, aber nur mit besserem Unterricht','d) Jan Weber'],['bringt Daten aus einem anderen Land','c) Dr. Aydın'],['dafür, weil Junge lange betroffen sind','a) Lena']]},
 {t:'read',kind:'Lesen · Teil 5',title:'Regeln: Nutzung des Coworking-Space „Werkbank“',text:`§ 1 Zugang: Mitglieder erhalten eine Chipkarte, mit der sie die Räume rund um die Uhr betreten können. Die Weitergabe der Karte an Dritte ist nicht gestattet.
§ 2 Arbeitsplätze: Feste Schreibtische sind gekennzeichnet. Flexible Plätze sind abends zu räumen; persönliche Gegenstände, die über Nacht liegen bleiben, werden ins Fundfach gelegt.
§ 3 Telefonate: Längere Gespräche und Videokonferenzen sind ausschließlich in den Telefonboxen zu führen.
§ 4 Gäste: Besucher sind willkommen, sofern sie sich am Empfang anmelden. Für Gäste, die länger als zwei Stunden bleiben, wird eine Tagespauschale von 15 Euro berechnet.
§ 5 Kündigung: Die Mitgliedschaft kann mit einer Frist von einem Monat zum Monatsende gekündigt werden.`,de:`§ 1 Acesso: os membros recebem um cartão com chip com o qual podem entrar nas salas 24 horas por dia. É proibido repassar o cartão a terceiros.\n§ 2 Postos de trabalho: mesas fixas são identificadas. Lugares flexíveis devem ser desocupados à noite; objetos pessoais deixados durante a noite vão para os achados e perdidos.\n§ 3 Telefonemas: conversas longas e videoconferências devem ser feitas exclusivamente nas cabines telefônicas.\n§ 4 Visitantes: são bem-vindos, desde que se registrem na recepção. Para visitantes que ficam mais de duas horas, cobra-se uma diária de 15 euros.\n§ 5 Cancelamento: a associação pode ser cancelada com aviso prévio de um mês, para o fim do mês.`},
 {t:'mc',kind:'Lesen · Teil 5',q:'Ihr Kollege möchte Sie am Nachmittag drei Stunden besuchen. Was gilt?',opts:['Er muss sich anmelden und es kostet 15 Euro.','Gäste sind nicht erlaubt.','Er kann Ihre Chipkarte benutzen.'],a:0},
 {t:'mc',kind:'Lesen · Teil 5',q:'Sie haben eine Videokonferenz. Wo führen Sie sie?',opts:['in einer Telefonbox','an Ihrem Schreibtisch','am Empfang'],a:0},
 {t:'mc',kind:'Lesen · Teil 5',q:'Welche Überschrift passt zu § 2?',opts:['Ordnung am Platz','Kosten für Besucher','Sicherheit der Karte'],a:0}
]},
{id:'l2',title:'Ouvir (Hören)',desc:'4 partes: textos curtos, entrevista, discussão, palestra',steps:[
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Ansage im Radio',intro:'Ouça o aviso de trânsito no rádio.',text:`Und nun die Verkehrsmeldungen: Auf der A5 zwischen Frankfurt-Westkreuz und Darmstadt kommt es wegen eines Unfalls zu zwölf Kilometern Stau. Die linke Spur ist gesperrt. Bitte fahren Sie, wenn möglich, über die A67 aus. Außerdem fallen wegen Bauarbeiten am Wochenende alle S-Bahnen zwischen Hauptbahnhof und Flughafen aus; es fahren Ersatzbusse im 15-Minuten-Takt.`,de:`E agora as notícias de trânsito: na A5, entre Frankfurt-Westkreuz e Darmstadt, há doze quilômetros de engarrafamento por causa de um acidente. A faixa da esquerda está bloqueada. Se possível, desviem pela A67. Além disso, por causa de obras no fim de semana, todos os trens S-Bahn entre a estação central e o aeroporto estão cancelados; ônibus substitutos circulam a cada 15 minutos.`},
 {t:'mc',kind:'Hören · Teil 1',q:'Wie kommt man am Wochenende vom Hauptbahnhof zum Flughafen?',opts:['mit Ersatzbussen','mit der S-Bahn','gar nicht'],a:0},
 {t:'mc',kind:'Hören · Teil 1',q:'Richtig oder falsch? Auf der A5 sind alle Spuren gesperrt.',opts:['falsch','richtig'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Interview: Eine Bäckerin gegen die Lebensmittelverschwendung',intro:'Ouça a entrevista com a padeira Katja Roth.',text:`– Frau Roth, Sie verkaufen in Ihrer Bäckerei Brot vom Vortag zum halben Preis. Wie kam es dazu?
– Ehrlich gesagt aus Frust. Wir haben jeden Abend kistenweise Brot weggeworfen, das noch völlig in Ordnung war. Das konnte ich irgendwann nicht mehr mit ansehen.
– Und wie reagieren die Kunden?
– Am Anfang waren viele skeptisch, als ob altes Brot etwas Schlechtes wäre. Heute haben wir Stammkunden, die gezielt morgens kommen, um es zu kaufen. Mittags ist meistens alles weg.
– Lohnt sich das wirtschaftlich?
– Wir verdienen pro Brot natürlich weniger. Dafür produzieren wir inzwischen genauer, weil wir besser wissen, was gebraucht wird. Unterm Strich ist der Gewinn sogar leicht gestiegen.
– Was wünschen Sie sich von der Politik?
– Dass Betriebe, die Lebensmittel spenden, weniger Bürokratie haben. Im Moment ist das Spenden oft komplizierter als das Wegwerfen.`,de:`– Sra. Roth, na sua padaria a senhora vende pão do dia anterior pela metade do preço. Como isso começou?\n– Sinceramente, por frustração. Toda noite jogávamos fora caixas de pão que ainda estava perfeitamente bom. Uma hora eu não aguentei mais ver aquilo.\n– E como os clientes reagem?\n– No começo muitos estavam céticos, como se pão do dia anterior fosse algo ruim. Hoje temos clientes fixos que vêm de manhã de propósito para comprá-lo. Ao meio-dia geralmente acabou tudo.\n– Isso compensa economicamente?\n– Ganhamos menos por pão, claro. Em compensação, hoje produzimos com mais precisão, porque sabemos melhor o que é necessário. No fim das contas, o lucro até subiu um pouco.\n– O que a senhora espera da política?\n– Que empresas que doam alimentos tenham menos burocracia. No momento, doar muitas vezes é mais complicado do que jogar fora.`},
 {t:'mc',kind:'Hören · Teil 2',q:'Warum hat Frau Roth mit dem Verkauf angefangen?',opts:['Sie wollte nicht mehr so viel Brot wegwerfen.','Ihre Kunden hatten es gefordert.','Ein Gesetz verlangte es.'],a:0},
 {t:'mc',kind:'Hören · Teil 2',q:'Wie hat sich der Gewinn entwickelt?',opts:['Er ist leicht gestiegen.','Er ist stark gesunken.','Er ist gleich geblieben.'],a:0},
 {t:'mc',kind:'Hören · Teil 2',q:'Was wünscht sie sich von der Politik?',opts:['weniger Bürokratie beim Spenden','höhere Brotpreise','Verbote für Supermärkte'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Diskussion: Vier Tage Schule?',intro:'Ouça a discussão. Quem diz o quê: a moderadora, a Sra. Kraus (diretora de escola) ou o Sr. Petersen (associação de pais)?',text:`Moderatorin: Wegen des Lehrermangels testen einige Schulen eine Vier-Tage-Woche. Frau Kraus, ist das eine Lösung?
Frau Kraus: Kurzfristig ja. Wir haben schlicht nicht genug Personal. Anstatt dass ständig Stunden ausfallen, planen wir lieber verlässlich vier volle Tage – und am fünften Tag lernen die Schüler selbstständig mit digitalen Aufgaben.
Herr Petersen: Das klingt gut, aber wer betreut denn die Kinder am fünften Tag? Viele Eltern arbeiten Vollzeit. Für Familien, die sich keine Betreuung leisten können, wird das zu einem echten Problem.
Moderatorin: Und lernen die Kinder genauso viel?
Frau Kraus: Erste Ergebnisse sind gemischt. Ältere Schüler kommen gut zurecht, jüngere brauchen dagegen mehr Unterstützung.
Herr Petersen: Genau das ist mein Punkt. Die Ungleichheit wird größer. Die Politik müsste endlich mehr Lehrkräfte ausbilden, statt die Schule zu verkürzen.`,de:`Moderadora: Por causa da falta de professores, algumas escolas testam a semana de quatro dias. Sra. Kraus, é uma solução?\nSra. Kraus: A curto prazo, sim. Simplesmente não temos pessoal suficiente. Em vez de aulas serem canceladas o tempo todo, preferimos planejar quatro dias completos de forma confiável – e no quinto dia os alunos estudam sozinhos com tarefas digitais.\nSr. Petersen: Parece bom, mas quem cuida das crianças no quinto dia? Muitos pais trabalham em tempo integral. Para famílias que não podem pagar quem cuide, isso vira um problema real.\nModeradora: E as crianças aprendem o mesmo tanto?\nSra. Kraus: Os primeiros resultados são mistos. Alunos mais velhos se viram bem, já os mais novos precisam de mais apoio.\nSr. Petersen: Exatamente esse é o meu ponto. A desigualdade aumenta. A política deveria finalmente formar mais professores, em vez de encurtar a escola.`},
 {t:'match',kind:'Hören · Teil 3',q:'Quem diz isso?',pairs:[['Lieber planbar vier Tage als ständiger Ausfall.','Frau Kraus'],['Die Betreuung am fünften Tag ist unklar.','Herr Petersen'],['Lernen die Schüler genauso viel?','Moderatorin']]},
 {t:'mc',kind:'Hören · Teil 3',q:'Welche Schüler brauchen laut Frau Kraus mehr Hilfe?',opts:['die jüngeren','die älteren','alle gleich'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 4',title:'Vortrag: Warum wir Entscheidungen aufschieben',intro:'Ouça a palestra da psicóloga Dra. Meyer.',text:`Guten Abend, meine Damen und Herren. Wer kennt das nicht: Die Steuererklärung liegt seit Wochen auf dem Tisch, und stattdessen putzen wir lieber die Fenster. Dieses Verhalten nennt man Prokrastination.
Lange hat man geglaubt, dass dahinter einfach Faulheit oder schlechtes Zeitmanagement steckt. Neuere Studien zeigen jedoch etwas anderes: Wir schieben vor allem Aufgaben auf, die unangenehme Gefühle auslösen – Angst vor Fehlern, Langeweile oder Unsicherheit. Das Aufschieben ist also eine Art, kurzfristig mit Gefühlen umzugehen.
Was hilft? Erstens: Aufgaben in sehr kleine Schritte teilen. „Steuererklärung machen“ ist zu groß; „Belege sortieren, zehn Minuten“ ist machbar. Zweitens: sich selbst gegenüber freundlich sein. Wer sich für das Aufschieben verurteilt, schiebt erfahrungsgemäß noch mehr auf. Und drittens: einen festen Zeitpunkt planen – am besten dann, wenn man die meiste Energie hat.`,de:`Boa noite, senhoras e senhores. Quem não conhece isso: a declaração de imposto de renda está há semanas na mesa e, em vez disso, preferimos limpar as janelas. Esse comportamento se chama procrastinação.\nPor muito tempo se acreditou que por trás disso havia simplesmente preguiça ou má gestão do tempo. Estudos mais recentes mostram, porém, outra coisa: adiamos sobretudo tarefas que despertam sentimentos desagradáveis – medo de errar, tédio ou insegurança. Adiar é, portanto, uma forma de lidar com sentimentos a curto prazo.\nO que ajuda? Primeiro: dividir as tarefas em passos bem pequenos. „Fazer a declaração“ é grande demais; „organizar os comprovantes, dez minutos“ é viável. Segundo: ser gentil consigo mesmo. Quem se condena por adiar, segundo a experiência, adia ainda mais. E terceiro: marcar um horário fixo – de preferência quando se tem mais energia.`},
 {t:'mc',kind:'Hören · Teil 4',q:'Was ist laut neueren Studien die Hauptursache für Prokrastination?',opts:['unangenehme Gefühle','Faulheit','zu wenig Zeit'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Was passiert, wenn man sich selbst verurteilt?',opts:['Man schiebt noch mehr auf.','Man wird schneller fertig.','Man hat mehr Energie.'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Welcher Tipp wird genannt?',opts:['Aufgaben in kleine Schritte teilen','abends arbeiten','alles auf einmal erledigen'],a:0}
]},
{id:'l3',title:'Escrever (Schreiben)',desc:'fórum (~150 palavras) · mensagem formal (~100 palavras)',steps:[
 {t:'info',title:'Schreiben – como é',html:`<table><tr><th>parte</th><th>tempo</th><th>tarefa</th></tr>
 <tr><td>Teil 1</td><td>50 min</td><td>texto de opinião num fórum (<b>~150 palavras</b>): você escolhe <b>um de dois temas</b> e trata <b>4 pontos</b> (opinião, motivos, vantagens/desvantagens, alternativas, experiência …)</td></tr>
 <tr><td>Teil 2</td><td>25 min</td><td>mensagem formal (<b>~100 palavras</b>) para um superior, professor, órgão …: pedir algo, reclamar, propor, justificar</td></tr></table>
 <div class="ex">Conta: todos os pontos tratados, <b>texto coeso</b> (Konnektoren: zudem, folglich, dennoch, einerseits … andererseits), vocabulário variado, registro adequado (Sie, fórmulas de cortesia).</div>`},
 {t:'free',kind:'Schreiben · Teil 1',task:'Num fórum online se discute: „Sollten Unternehmen ihren Mitarbeitenden eine Vier-Tage-Woche anbieten?“ Escreva a sua opinião (~150 palavras): 1) dê a sua opinião, 2) explique vantagens para empregados e empresas, 3) mostre possíveis problemas, 4) proponha uma alternativa ou uma solução.',hint:'Meiner Ansicht nach … Ein großer Vorteil ist, dass … Zudem … Allerdings darf man nicht vergessen, dass … Folglich … Anstatt … zu …, könnte man … Zusammenfassend …',focus:'Argumentation, Konnektoren, Nominalstil, Konjunktiv II',model:'Meiner Ansicht nach sollten Unternehmen eine Vier-Tage-Woche zumindest ausprobieren.\nEin großer Vorteil für die Mitarbeitenden ist mehr Zeit für Familie, Erholung und Hobbys. Wer ausgeruht ist, arbeitet konzentrierter und ist seltener krank. Zudem können Firmen, die eine Vier-Tage-Woche anbieten, angesichts des Fachkräftemangels leichter neues Personal gewinnen.\nAllerdings darf man nicht vergessen, dass dieses Modell nicht für alle Branchen passt. In Krankenhäusern oder Bäckereien muss jeden Tag jemand da sein. Folglich bräuchte man dort mehr Personal, was hohe Kosten verursacht. Außerdem besteht die Gefahr, dass man an vier Tagen genauso viel schaffen muss wie vorher an fünf.\nAnstatt allen dasselbe Modell vorzuschreiben, könnte man flexible Lösungen finden – zum Beispiel ein Konto für Arbeitszeit, mit dem jeder selbst entscheidet.\nZusammenfassend lässt sich sagen, dass die Vier-Tage-Woche eine Chance ist, wenn man sie an den jeweiligen Betrieb anpasst.'},
 {t:'free',kind:'Schreiben · Teil 2',task:'Você participa de um curso de formação pago pela empresa („Projektmanagement“, 4 sábados). Por motivo de saúde, perdeu dois encontros. Escreva para a organizadora, Sra. Lang (~100 palavras): peça desculpas e explique, pergunte como recuperar o conteúdo, pergunte se ainda pode receber o certificado e proponha uma solução.',hint:'Sehr geehrte Frau Lang, leider … Aus gesundheitlichen Gründen … Ich möchte Sie fragen, ob … Wäre es möglich, dass … Ich könnte … Für eine kurze Rückmeldung wäre ich Ihnen dankbar. Mit freundlichen Grüßen',focus:'formelle Sprache, indirekte Fragen, Konjunktiv II höflich',model:'Sehr geehrte Frau Lang,\nleider konnte ich an den letzten beiden Terminen des Kurses „Projektmanagement“ nicht teilnehmen, da ich krankgeschrieben war. Das tut mir sehr leid, zumal mir der Kurs bisher sehr gut gefallen hat.\nIch möchte Sie daher fragen, ob es möglich ist, die Unterlagen der verpassten Termine zu erhalten. Außerdem wüsste ich gern, ob ich trotz der Fehlzeiten das Zertifikat bekommen kann.\nGern würde ich die Inhalte nacharbeiten und Ihnen eine kurze schriftliche Zusammenfassung schicken. Alternativ könnte ich an einem der Termine im nächsten Kurs teilnehmen.\nFür eine kurze Rückmeldung wäre ich Ihnen sehr dankbar.\nMit freundlichen Grüßen\nLucas Souza'}
]},
{id:'l4',title:'Falar (Sprechen)',desc:'apresentação · discussão',steps:[
 {t:'info',title:'Sprechen – as duas partes',html:`<table><tr><th>parte</th><th>o que fazer</th></tr>
 <tr><td>Teil 1 · ~4 min por pessoa</td><td><b>Apresentação</b> sobre um de dois temas: 1) apresentar o tema e a estrutura, 2) situação no seu país, 3) vantagens e desvantagens, 4) sua opinião, 5) conclusão. Depois: ouvir a apresentação do parceiro, <b>dar feedback e fazer uma pergunta</b>, responder à pergunta do examinador.</td></tr>
 <tr><td>Teil 2 · ~5 min</td><td><b>Discussão</b> com o parceiro sobre uma pergunta polêmica: dar opinião com motivos, reagir aos argumentos, contradizer, concordar em parte e chegar a uma conclusão (não precisa haver acordo).</td></tr></table>`},
 {t:'info',title:'Frases úteis',html:`<table><tr><td>estruturar</td><td class="es-t">Mein Vortrag besteht aus drei Teilen. · Zunächst … Anschließend … Zum Schluss …</td></tr>
 <tr><td>seu país</td><td class="es-t">In meinem Heimatland ist die Situation ganz anders: …</td></tr>
 <tr><td>feedback</td><td class="es-t">Vielen Dank für deinen interessanten Vortrag. Besonders überzeugend fand ich … · Mich würde noch interessieren, …</td></tr>
 <tr><td>discutir</td><td class="es-t">Da bin ich anderer Meinung. · Das mag sein, aber … · Ich gebe dir recht, was … betrifft.</td></tr>
 <tr><td>concluir</td><td class="es-t">Wir sind uns also einig, dass … · Wir sehen das unterschiedlich, aber …</td></tr></table>`},
 {t:'speak',kind:'Sprechen · Teil 1',es:'Mein Vortrag besteht aus drei Teilen: Zunächst beschreibe ich die Situation in meinem Heimatland, anschließend nenne ich Vor- und Nachteile, und zum Schluss sage ich meine Meinung.',de:'A minha apresentação tem três partes: primeiro descrevo a situação no meu país, depois cito vantagens e desvantagens e, por fim, digo a minha opinião.',tip:'Anunciar a estrutura no início dá pontos na prova.'},
 {t:'free',kind:'Sprechen · Teil 1',task:'Prepare por escrito a sua apresentação (~180 palavras) sobre „Sollte das Studium Gebühren kosten?“: tema e estrutura, situação no seu país, vantagens e desvantagens, sua opinião, conclusão.',hint:'Ich möchte über das Thema … sprechen. Mein Vortrag besteht aus … In meinem Heimatland … Ein Vorteil von Studiengebühren wäre … Dagegen spricht … Meiner Meinung nach … Abschließend …',focus:'Vortragsstruktur, Argumentation, Konnektoren',model:'Ich möchte heute über das Thema „Sollte das Studium Gebühren kosten?“ sprechen. Mein Vortrag besteht aus drei Teilen: der Situation in meinem Heimatland, den Vor- und Nachteilen und meiner Meinung.\nIn meinem Heimatland ist die Situation ganz anders als in Deutschland: Die staatlichen Universitäten sind kostenlos, aber sehr schwer zugänglich. Wer keinen Platz bekommt, muss oft an einer teuren privaten Hochschule studieren.\nEin Vorteil von Studiengebühren wäre, dass die Universitäten mehr Geld für Personal und Ausstattung hätten. Zudem würden manche Studierende ihr Studium vielleicht ernster nehmen. Dagegen spricht allerdings, dass junge Menschen aus ärmeren Familien abgeschreckt werden könnten. Folglich würde die Bildung wieder vom Geldbeutel der Eltern abhängen.\nMeiner Meinung nach sollte das Studium deshalb gebührenfrei bleiben. Stattdessen könnte man Unternehmen, die von gut ausgebildeten Fachkräften profitieren, stärker an der Finanzierung beteiligen.\nAbschließend möchte ich sagen: Bildung ist eine Investition in die ganze Gesellschaft. Vielen Dank für Ihre Aufmerksamkeit.'},
 {t:'dialog',kind:'Sprechen · Teil 2',place:'Prüfung',title:'Discussão: celulares proibidos em restaurantes?',scene:'Você e a Nina discutem a pergunta: „Sollten Handys in Restaurants verboten werden?“',lines:[
  {n:'Nina',es:'Ich finde, Handys sollten in Restaurants verboten werden. Überall sieht man Paare, die nicht miteinander reden, sondern nur auf ihr Display starren.',de:'Acho que celulares deveriam ser proibidos em restaurantes. Em todo lugar se veem casais que não conversam, só ficam olhando para a tela.'},
  {you:true,opts:[{es:'Das mag sein, aber ein Verbot geht mir zu weit. Jeder sollte selbst entscheiden dürfen, wie er seinen Abend verbringt.',ok:true},{es:'Nein.',ok:false,why:'Na prova, sempre dê um motivo: <i>Das mag sein, aber …, weil …</i>'}]},
  {n:'Nina',es:'Aber es stört doch auch andere Gäste, wenn jemand laut telefoniert.',de:'Mas também incomoda outros clientes quando alguém fala alto ao telefone.'},
  {you:true,opts:[{es:'Da gebe ich Ihnen recht, was das Telefonieren betrifft. Wie wäre es also mit einer Regel: Handys erlaubt, aber nur lautlos?',ok:true},{es:'Ich gebe Ihnen recht, was das Telefonieren betrifft es.',ok:false,why:'Frase correta: <i>Ich gebe Ihnen recht, was das Telefonieren betrifft.</i> – e depois faça uma proposta.'}]},
  {n:'Nina',es:'Hm, das wäre ein Kompromiss. Und Restaurants, die ganz ohne Handys sein wollen, könnten das ja anbieten.',de:'Hum, isso seria um meio-termo. E restaurantes que quiserem ser totalmente sem celular poderiam oferecer isso.'},
  {you:true,opts:[{es:'Genau. Wir sind uns also einig, dass ein allgemeines Verbot nicht nötig ist, laute Telefonate aber nicht in Restaurants gehören.',ok:true},{es:'Okay, tschüss.',ok:false,why:'Termine a discussão com uma conclusão: <i>Wir sind uns also einig, dass …</i>'}]}]},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Feedback: Obrigado pela sua apresentação interessante. Eu ainda gostaria de saber …',a:['Vielen Dank für deinen interessanten Vortrag. Mich würde noch interessieren, …','Vielen Dank für Ihren interessanten Vortrag. Mich würde noch interessieren, …','Danke für deinen interessanten Vortrag. Mich würde noch interessieren …','Vielen Dank für deinen interessanten Vortrag. Mich würde noch interessieren','Vielen Dank für Ihren interessanten Vortrag. Mich würde noch interessieren']}
]},
{id:'l5',title:'Palavras para a prova',desc:'berücksichtigen, sich auswirken auf, erheblich …',steps:[
 {t:'vocab',title:'Verbos formais',items:[['berücksichtigen','levar em conta'],['sich auswirken auf','ter efeito sobre'],['die Auswirkung','o efeito, o impacto'],['beitragen zu','contribuir para'],['betreffen','dizer respeito a, afetar'],['gewährleisten','garantir'],['erfordern','exigir, requerer'],['ermöglichen','possibilitar'],['bewältigen','dar conta de, superar'],['sich herausstellen','revelar-se, acabar se mostrando'],['zurückführen auf','atribuir a (causa)'],['hervorheben','destacar']]},
 {t:'vocab',title:'Adjetivos e expressões',items:[['erheblich','considerável'],['gering','pequeno, baixo'],['umfassend','abrangente'],['vorhanden','existente, disponível'],['gegebenenfalls (ggf.)','se for o caso'],['beziehungsweise (bzw.)','ou, respectivamente'],['hinsichtlich','com relação a'],['im Hinblick auf','tendo em vista, com relação a'],['darüber hinaus','além disso'],['letztendlich','no fim das contas'],['insgesamt','no total, de modo geral'],['der Aspekt','o aspecto'],['der Zusammenhang','a relação, o contexto']]},
 {t:'mc',q:'Die neue Regel ___ sich positiv auf die Arbeitszeit aus.',opts:['wirkt','trägt','führt'],a:0},
 {t:'mc',q:'Es hat sich ___, dass die Daten falsch waren.',opts:['herausgestellt','hervorgehoben','berücksichtigt'],a:0},
 {t:'mc',q:'Für die Stelle sind gute Englischkenntnisse ___.',opts:['erforderlich','vorhanden','gering'],a:0},
 {t:'gap',q:'Jeder kann zum Klimaschutz ___. (contribuir)',a:['beitragen']},
 {t:'gap',q:'Die Kosten sind ___ höher als geplant. (consideravelmente)',a:['erheblich']},
 {t:'gap',q:'Bitte bringen Sie ___ eine Kopie Ihres Ausweises mit. (se for o caso)',a:['gegebenenfalls','ggf.']},
 {t:'match',q:'Ligue.',pairs:[['gewährleisten','garantir'],['bewältigen','dar conta de'],['zahlreich','numeroso'],['umfassend','abrangente'],['letztendlich','no fim das contas']]},
 {t:'tr',de:'O problema afeta todos os moradores.',a:['Das Problem betrifft alle Bewohner.','Das Problem betrifft alle Anwohner.','Das Problem betrifft alle Einwohner.']}
]}],
resumen:`<h3>Prova B2</h3><p>Lesen 65 min (5 partes) · Hören ~40 min (4 partes) · Schreiben 75 min (fórum ~150 + mensagem formal ~100 palavras) · Sprechen ~15 min (apresentação + discussão). Para passar: 60 % por módulo.</p>
<h3>Redemittel</h3><p class="es-t">Mein Vortrag besteht aus drei Teilen. · In meinem Heimatland … · Das mag sein, aber … · Ich gebe dir recht, was … betrifft. · Wir sind uns also einig, dass …</p>
<h3>Prüfungswörter</h3><p class="es-t">berücksichtigen · sich auswirken auf · beitragen zu · gewährleisten · erheblich · erforderlich · gegebenenfalls · darüber hinaus · letztendlich</p>`});
