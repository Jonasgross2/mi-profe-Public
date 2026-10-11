/* Deutschkurs B2 (Erklärungen auf Portugiesisch) – Kapitel 37–48.
   Orientierung (nur Themen/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat B2 – Prüfungsziele/Testbeschreibung.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit drei Jahren in Frankfurt, Softwareentwickler (Kollegin Jana, Chefin Frau Dr. Hoffmann, Mitbewohner Tom). */

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
 {t:'gap',q:'Lucas hat vorher Wirtschaft studiert. Er ist ein ___ in der IT. (quem muda de área)',a:['Quereinsteiger']},
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
 <div class="ex">Muitas têm forma <b>passiva</b> com outro verbo: <span class="es-t">eine Frage stellen → in Frage stellen (questionar)</span> · <span class="es-t">zur Diskussion stellen → zur Diskussion stehen</span>.</div>`},
 {t:'vocab',title:'Expressões com substantivo + verbo',items:[['eine Entscheidung treffen','tomar uma decisão'],['Verantwortung übernehmen','assumir a responsabilidade'],['in Frage kommen','ser uma opção'],['in Frage stellen','questionar, pôr em dúvida'],['zur Verfügung stehen','estar à disposição'],['zur Verfügung stellen','pôr à disposição'],['eine Rolle spielen','ter um papel, ser importante'],['in Kontakt treten mit','entrar em contato com'],['Kritik üben an','criticar'],['zum Ausdruck bringen','expressar'],['in Anspruch nehmen','utilizar, tomar (tempo)'],['Maßnahmen ergreifen','tomar medidas'],['in Kraft treten','entrar em vigor'],['einen Beitrag leisten','dar uma contribuição'],['zur Sprache bringen','trazer à tona (um assunto)']]},
 {t:'mc',q:'Das Gesetz ___ am 1. Januar in Kraft.',opts:['tritt','kommt','stellt'],a:0},
 {t:'mc',q:'Das Gehalt ___ für mich nicht die wichtigste Rolle.',opts:['spielt','macht','nimmt'],a:0},
 {t:'mc',q:'Der Kunde hat an unserem Konzept deutlich Kritik ___.',opts:['geübt','gestellt','gemacht'],a:0},
 {t:'gap',q:'Die Firma stellt allen Mitarbeitenden ein Jobticket zur ___.',a:['Verfügung']},
 {t:'gap',q:'Ein Umzug nach München kommt für mich leider nicht in ___.',a:['Frage']},
 {t:'gap',q:'Die Regierung muss endlich Maßnahmen ___. (tomar)',a:['ergreifen']},
 {t:'match',q:'Qual verbo combina?',pairs:[['eine Entscheidung','treffen'],['einen Antrag','stellen'],['einen Beitrag','leisten'],['Rücksicht','nehmen'],['in Kontakt','treten']]},
 {t:'order',es:'Ich möchte das Thema Homeoffice in der nächsten Besprechung zur Sprache bringen',de:'Eu gostaria de trazer o tema home office à tona na próxima reunião.'},
 {t:'tr',de:'A reunião vai tomar muito tempo.',a:['Die Besprechung wird viel Zeit in Anspruch nehmen.','Das Meeting wird viel Zeit in Anspruch nehmen.']},
 {t:'tr',de:'Quem assume a responsabilidade pelo projeto?',a:['Wer übernimmt die Verantwortung für das Projekt?']}
]},
{id:'l3',title:'Na entrevista',desc:'Stärken, Schwächen, Gehalt – höflich und überzeugend',steps:[
 {t:'info',title:'Frases para a entrevista',html:`<table><tr><td class="es-t">Ich bin auf Ihre Stellenausschreibung aufmerksam geworden, weil …</td><td>Fiquei sabendo do seu anúncio porque …</td></tr>
 <tr><td class="es-t">Zu meinen Stärken zählt …</td><td>Entre os meus pontos fortes está …</td></tr>
 <tr><td class="es-t">Ich habe gelernt, mit Druck umzugehen.</td><td>Aprendi a lidar com pressão.</td></tr>
 <tr><td class="es-t">Eine meiner Schwächen ist …, aber ich arbeite daran, indem ich …</td><td>Um dos meus pontos fracos é …, mas trabalho nisso …</td></tr>
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
Bitte senden Sie Ihre Unterlagen mit Gehaltsvorstellung und frühestmöglichem Eintrittstermin an bewerbung@datawerk-frankfurt.de.`,de:`Procuramos a partir de 1º de março uma liderança de equipe de desenvolvimento de software (m/f/d) em tempo integral, por tempo indeterminado.\nSuas tarefas: liderar uma equipe de seis desenvolvedoras e desenvolvedores, planejar projetos junto com nossos clientes e tomar decisões técnicas.\nSeu perfil: graduação completa ou qualificação comparável, pelo menos três anos de experiência profissional, primeira experiência em liderança, conhecimentos muito bons de alemão e inglês.\nOferecemos: horários flexíveis, dois dias de home office por semana, orçamento para formação e passe de transporte.\nEnvie seus documentos com pretensão salarial e data de início mais cedo possível para bewerbung@datawerk-frankfurt.de.`},
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
 {t:'order',es:'Die Folgen dieser Technologie sind heute noch nicht vorhersehbar',de:'As consequências dessa tecnologia ainda não são previsíveis hoje.'},
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
Herr Kaya, Vater: Für mich spielt der Datenschutz eine große Rolle. Wer garantiert, dass die Daten der Kinder nicht weitergegeben werden?`,de:`Tema: Os alunos devem poder usar IA nas tarefas de casa?\nMareike, professora: Vejo isso de forma crítica. Se um programa escreve os textos, as crianças não aprendem mais a pensar por conta própria. Além disso, é difícil perceber qual texto é autêntico.\nLeon_17: Proibir a IA não dá de qualquer forma. A escola deveria nos mostrar como usá-la de forma sensata. No trabalho, mais tarde, também vamos precisar disso.\nSr. Kaya, pai: Para mim, a proteção de dados tem um papel importante. Quem garante que os dados das crianças não serão repassados?`},
 {t:'mc',q:'Was befürchtet Mareike?',opts:['Die Kinder lernen nicht mehr, selbst zu denken.','Die Kinder benutzen zu wenig Technik.','Die Lehrer verlieren ihre Arbeit.'],a:0},
 {t:'mc',q:'Welche Meinung hat Leon_17?',opts:['Man sollte lernen, KI sinnvoll zu nutzen.','KI sollte verboten werden.','Datenschutz ist am wichtigsten.'],a:0},
 {t:'mc',q:'Worum macht sich Herr Kaya Sorgen?',opts:['um die Daten der Kinder','um die Noten','um die Kosten'],a:0},
 {t:'info',title:'Argumentar por escrito',html:`<table><tr><td class="es-t">Meiner Ansicht nach … · Ich bin der Meinung, dass …</td><td>Na minha opinião …</td></tr>
 <tr><td class="es-t">Dafür spricht, dass … · Dagegen spricht, dass …</td><td>A favor fala que … · Contra fala que …</td></tr>
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
situacion:{title:'Discussão no bairro',npc:'Herr Krüger',scene:'Numa reunião do bairro, discute-se se um antigo prédio de escritórios deve virar moradia para idosos ou um centro para jovens. O Sr. Krüger, morador antigo, tem uma opinião forte.',role:'Du bist Herr Krüger, 70 Jahre, seit 40 Jahren im Frankfurter Stadtteil Bockenheim zu Hause. Du siezt. Bei einer Bürgerversammlung diskutierst du mit Lucas: Du willst, dass aus dem alten Bürogebäude Wohnungen für Seniorinnen und Senioren werden (Einsamkeit, steigende Mieten, Altersarmut). Lucas ist eher für ein Jugend- und Begegnungszentrum. Argumentiere engagiert, aber fair, und sei am Ende offen für einen Kompromiss (z. B. ein Mehrgenerationenhaus). Gib auch wieder, was andere gesagt haben (Konjunktiv I: Die Stadträtin hat gesagt, es gebe kein Geld …). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Defenda a sua posição com argumentos, contradiga com educação, cite o que outros disseram e chegue a um meio-termo.'},
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
 {t:'order',es:'Die Forscherin betonte es gebe noch viele offene Fragen',de:'A pesquisadora enfatizou que ainda haveria muitas questões em aberto.'},
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
 {t:'free',task:'Escreva um comentário (~150 palavras) para o jornal do bairro sobre o futuro do prédio: 1) reproduza duas opiniões da reunião (Konjunktiv I: Herr Krüger sagte, …), 2) dê a sua opinião com argumentos, 3) proponha um meio-termo.',hint:'Bei der Bürgerversammlung ging es um … Herr Krüger sagte, viele Rentner könnten … Die Stadträtin erklärte, es gebe … Ich bin der Auffassung, dass … Deshalb schlage ich vor, …',focus:'Konjunktiv I, Argumentation, Konnektoren',model:'Bei der Bürgerversammlung am Dienstag ging es um die Zukunft des alten Bürogebäudes in der Leipziger Straße. Herr Krüger, der seit 40 Jahren im Viertel wohnt, sagte, viele Rentnerinnen und Rentner könnten sich ihre Wohnungen nicht mehr leisten. Die Stadträtin erklärte, es gebe im Moment kein Geld für ein Jugendzentrum.\nIch bin der Auffassung, dass beide Gruppen Unterstützung brauchen. Einsamkeit betrifft nicht nur ältere Menschen, sondern auch viele Jugendliche. Außerdem fehlen im Viertel Orte, an denen sich Menschen unterschiedlichen Alters begegnen.\nDeshalb schlage ich ein Mehrgenerationenhaus vor: In den oberen Etagen könnten bezahlbare Wohnungen für Seniorinnen und Senioren entstehen, im Erdgeschoss ein Café und Räume für Jugendliche. Ehrenamtliche könnten das Programm unterstützen. So würde der Zusammenhalt im Viertel gestärkt.'}
]}],
resumen:`<h3>Konjunktiv I</h3><p class="es-t">er sei · er habe · er werde · er könne · es gebe · Sie sagen, sie hätten keine Zeit. · Er sagt, er habe den Bericht gelesen.</p>
<h3>Zitieren</h3><p class="es-t">behaupten · betonen · mitteilen · laut der Studie · der Studie zufolge</p>
<h3>Diskutieren</h3><p class="es-t">Ich bin der Auffassung, dass … · Da muss ich Ihnen widersprechen. · Davon bin ich nicht überzeugt. · Was halten Sie von einem Kompromiss?</p>`});
