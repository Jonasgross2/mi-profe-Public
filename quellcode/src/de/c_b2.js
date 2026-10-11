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
 {t:'vocab',title:'Consumo',items:[['der Verbraucher / die Verbraucherin','o consumidor / a consumidora'],['das Konsumverhalten','o comportamento de consumo'],['der Onlinehandel','o comércio online'],['der Händler / die Händlerin','o comerciante'],['die Lieferkette','a cadeia de fornecimento'],['fair gehandelt','de comércio justo'],['die Marke','a marca'],['das Etikett','a etiqueta'],['der Fehlkauf','a compra errada'],['sich verschulden','endividar-se'],['die Gewährleistung','a garantia legal'],['die Erstattung','o reembolso'],['erstatten','reembolsar'],['der Umtausch','a troca'],['verzichten auf','abrir mão de, renunciar a'],['die Wegwerfgesellschaft','a sociedade do descartável']]},
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
 {t:'order',es:'Die Ärztin soll schon lange in dieser Praxis arbeiten',de:'Dizem que a médica trabalha há muito tempo neste consultório.'},
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
 {t:'order',es:'Nach Abschluss der Recherche wurde der Artikel veröffentlicht',de:'Depois de concluída a apuração, o artigo foi publicado.'},
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
