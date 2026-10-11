/* Deutschkurs A2 (Erklärungen auf Portugiesisch) – Kapitel 13–24.
   Orientierung (nur Themen/Wortschatz/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat A2 – Wortliste und Prüfungsziele.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit einem Jahr in Frankfurt, arbeitet bei einer Softwarefirma (Kollegin Jana, Chefin Frau Dr. Hoffmann). */

/* ================= KAPITEL 13 · UMZUG & NEUE WOHNUNG ================= */
LANGS.de.course.units.push({id:'k13',n:'13',level:'A2',title:'Umzug & neue Wohnung',sub:'Mudança · Wo? / Wohin? (preposições de lugar) · stellen/stehen, legen/liegen · dass · regras da casa',
goals:['Über einen Umzug sprechen: Ich bin umgezogen.','Wohin stellen wir das Regal? – In die Ecke.','Wo steht das Regal? – In der Ecke.','stellen/stehen, legen/liegen, hängen','Nebensätze mit dass','Hausordnung, Müll trennen, Nachbarn','Eine Einladung zur Einweihungsparty schreiben'],
situacion:{title:'A nova vizinha',npc:'Frau Becker',scene:'Você acabou de se mudar para um apartamento só seu. Na escada você encontra a vizinha do andar de cima.',role:'Du bist Frau Becker, ca. 60 Jahre, freundliche Nachbarin im 3. Stock in Frankfurt-Bornheim. Du siezt. Begrüß Lucas, frag, wann er eingezogen ist und woher er kommt. Erklär ihm zwei Regeln der Hausordnung (Ruhezeit ab 22 Uhr, Müll trennen: Biomüll, Papier, Gelbe Tonne). Sprich einfaches Deutsch (A2), benutze dass-Sätze.',goal:'Apresente-se, conte quando você se mudou e pergunte sobre as regras da casa (lixo, silêncio).'},
placement:[
 {t:'mc',q:'„Eu me mudei.“',opts:['Ich bin umgezogen.','Ich habe umgezogen.','Ich bin umziehen.'],a:0},
 {t:'mc',q:'Wohin stellen wir den Tisch? – ___',opts:['An das Fenster.','An dem Fenster.','Am Fenster.'],a:0},
 {t:'mc',q:'Wo liegt das Buch? – ___',opts:['Auf dem Tisch.','Auf den Tisch.','Auf der Tisch.'],a:0},
 {t:'gap',q:'Ich ___ das Bild an die Wand. (hängen)',a:['hänge']},
 {t:'mc',q:'Ich finde, ___',opts:['dass die Wohnung zu teuer ist.','dass die Wohnung ist zu teuer.','die Wohnung dass zu teuer ist.'],a:0},
 {t:'mc',q:'„o aluguel com as despesas (água, aquecimento …)“',opts:['die Warmmiete','die Kaltmiete','die Kaution'],a:0}],
lessons:[
{id:'l1',title:'A mudança',desc:'umziehen, einziehen, ausziehen · Perfekt de verbos separáveis',steps:[
 {t:'vocab',title:'Mudança',items:[['der Umzug','a mudança'],['ausziehen','sair (de um apartamento)'],['der Karton','a caixa de papelão'],['einpacken','embalar'],['auspacken','desembalar'],['der Vermieter / die Vermieterin','o locador / a locadora'],['der Mieter / die Mieterin','o inquilino / a inquilina'],['die Kaltmiete','o aluguel (sem despesas)'],['die Warmmiete','o aluguel (com despesas)'],['die Nebenkosten (Pl.)','as despesas (água, aquecimento …)'],['die Kaution','o depósito de garantia'],['der Mietvertrag','o contrato de aluguel'],['das Erdgeschoss','o térreo'],['der Stock','o andar'],['der Aufzug','o elevador'],['der Keller','o porão'],['die Garage','a garagem'],['die Heizung','o aquecimento']]},
 {t:'info',title:'Perfekt dos verbos separáveis',html:`<p>No particípio, o <b>ge-</b> fica <b>entre</b> o prefixo e o verbo:</p>
 <table><tr><td class="es-t">einpacken → eingepackt</td><td class="es-t">Ich habe alles eingepackt.</td></tr>
 <tr><td class="es-t">aufräumen → aufgeräumt</td><td class="es-t">Wir haben die Küche aufgeräumt.</td></tr>
 <tr><td class="es-t">anrufen → angerufen</td><td class="es-t">Hast du den Vermieter angerufen?</td></tr>
 <tr><td class="es-t">umziehen → umgezogen</td><td class="es-t">Ich <b>bin</b> letzte Woche umgezogen.</td></tr>
 <tr><td class="es-t">einziehen → eingezogen</td><td class="es-t">Wann <b>bist</b> du eingezogen?</td></tr></table>
 <div class="ojo"><b>umziehen, einziehen, ausziehen</b> = mudança de lugar → Perfekt com <b>sein</b>.</div>`},
 {t:'mc',q:'Wann ___ du in die neue Wohnung eingezogen?',opts:['bist','hast','ist'],a:0},
 {t:'gap',q:'Ich habe gestern alle Kartons ___. (auspacken)',a:['ausgepackt']},
 {t:'gap',q:'Tom hat mir beim Umzug geholfen. Er hat die schweren Kartons ___. (tragen)',a:['getragen']},
 {t:'mc',q:'Die Wohnung kostet 700 € plus 150 € Nebenkosten. Die ___ ist 850 €.',opts:['Warmmiete','Kaltmiete','Kaution'],a:0},
 {t:'match',q:'Ligue.',pairs:[['der Aufzug','o elevador'],['der Keller','o porão'],['die Kaution','o depósito de garantia'],['einpacken','embalar'],['der Stock','o andar']]},
 {t:'read',title:'Leitura: Eine Nachricht von Lucas',text:`Hallo Mama, hallo Papa!
Endlich habe ich eine eigene Wohnung! Ich bin am Samstag umgezogen. Tom und Jana haben mir geholfen. Wir haben alles in einen Transporter gepackt und sind nach Bornheim gefahren. Die Wohnung ist im dritten Stock, und es gibt keinen Aufzug – die Waschmaschine war sehr schwer! Die Wohnung hat zwei Zimmer, eine kleine Küche und einen Balkon. Die Warmmiete ist 820 Euro. Das ist nicht billig, aber für Frankfurt ist es okay. Fotos schicke ich morgen!
Liebe Grüße, Lucas`,de:`Oi mãe, oi pai!
Finalmente tenho um apartamento só meu! Eu me mudei no sábado. O Tom e a Jana me ajudaram. Colocamos tudo numa van e fomos para Bornheim. O apartamento fica no terceiro andar e não tem elevador – a máquina de lavar estava muito pesada! O apartamento tem dois cômodos, uma cozinha pequena e uma varanda. O aluguel com despesas é 820 euros. Não é barato, mas para Frankfurt está ok. Mando fotos amanhã!
Um abraço, Lucas`},
 {t:'mc',q:'Wer hat Lucas beim Umzug geholfen?',opts:['Tom und Jana','seine Eltern','Frau Hoffmann'],a:0},
 {t:'mc',q:'Richtig oder falsch? Das Haus hat einen Aufzug.',opts:['falsch','richtig'],a:0},
 {t:'tr',de:'Eu me mudei na semana passada.',a:['Ich bin letzte Woche umgezogen.','Letzte Woche bin ich umgezogen.']},
 {t:'speak',es:'Ich bin letzten Samstag umgezogen. Meine Wohnung ist im dritten Stock.',de:'Eu me mudei no sábado passado. Meu apartamento fica no terceiro andar.',tip:'<i>umgezogen</i> – o <b>ge</b> fica no meio.'}
]},
{id:'l2',title:'Wo? ou Wohin?',desc:'preposições de lugar · stellen/stehen, legen/liegen, hängen',steps:[
 {t:'vocab',title:'Móveis e lugares',items:[['das Regal','a estante'],['der Teppich','o tapete'],['der Spiegel','o espelho'],['der Vorhang','a cortina'],['das Bild','o quadro / a imagem'],['die Wand','a parede'],['die Decke','o teto / o cobertor'],['der Boden','o chão'],['stellen','colocar (em pé)'],['stehen','estar (em pé)'],['legen','colocar (deitado)'],['liegen','estar (deitado)'],['hängen','pendurar / estar pendurado'],['über','acima de / sobre'],['unter','embaixo de'],['zwischen','entre'],['hinter','atrás de'],['neben','ao lado de']]},
 {t:'info',title:'Wo? (dativo) – Wohin? (acusativo)',html:`<p>As preposições <span class="es-t">in, an, auf, über, unter, vor, hinter, neben, zwischen</span> usam dois casos:</p>
 <table><tr><th>Wohin? → movimento → <b>acusativo</b></th><th>Wo? → lugar → <b>dativo</b></th></tr>
 <tr><td class="es-t">Ich stelle das Regal in <b>die</b> Ecke.</td><td class="es-t">Das Regal steht in <b>der</b> Ecke.</td></tr>
 <tr><td class="es-t">Ich lege das Buch auf <b>den</b> Tisch.</td><td class="es-t">Das Buch liegt auf <b>dem</b> Tisch.</td></tr>
 <tr><td class="es-t">Ich hänge das Bild an <b>die</b> Wand.</td><td class="es-t">Das Bild hängt an <b>der</b> Wand.</td></tr>
 <tr><td class="es-t">Ich stelle die Lampe neben <b>das</b> Sofa.</td><td class="es-t">Die Lampe steht neben <b>dem</b> Sofa.</td></tr></table>
 <div class="ex">Dativo: der/das → <b>dem</b>, die → <b>der</b>, plural → <b>den</b> (+n): <span class="es-t">zwischen den Fenstern</span>. Contrações: <span class="es-t">in dem → im, an dem → am, in das → ins</span>.</div>
 <div class="ojo"><b>stellen, legen, hängen</b> (ação) → Wohin? → acusativo. <b>stehen, liegen, hängen</b> (estado) → Wo? → dativo.</div>`},
 {t:'mc',q:'Wohin stellst du den Fernseher? – ___ Ecke.',opts:['In die','In der','Im'],a:0},
 {t:'mc',q:'Wo liegt der Schlüssel? – ___ Tisch.',opts:['Auf dem','Auf den','Auf die'],a:0},
 {t:'mc',q:'Ich ___ den Teppich vor das Sofa.',opts:['lege','liege','stelle'],a:0,why:'Tapete fica deitado → <b>legen</b> (ação, acusativo).'},
 {t:'gap',q:'Der Spiegel hängt an ___ Wand. (die)',a:['der']},
 {t:'gap',q:'Ich stelle die Blumen auf ___ Balkon. (der)',a:['den']},
 {t:'gap',q:'Die Katze schläft unter ___ Bett. (das)',a:['dem']},
 {t:'gap',q:'Wir gehen heute Abend ___ Kino. (in + das)',a:['ins']},
 {t:'order',es:'Das Regal steht zwischen dem Fenster und der Tür',de:'A estante fica entre a janela e a porta.'},
 {t:'dialog',place:'Neue Wohnung',title:'Onde fica o quê?',scene:'O Tom ajuda você a arrumar o apartamento novo.',lines:[
  {n:'Tom',es:'So, wohin stellen wir das Regal?',de:'E aí, onde a gente coloca a estante?'},
  {you:true,opts:[{es:'Stell es bitte in die Ecke, neben das Fenster.',ok:true},{es:'Stell es bitte in der Ecke, neben dem Fenster.',ok:false,why:'<i>stellen</i> = movimento → Wohin? → acusativo: <b>in die</b> Ecke, <b>neben das</b> Fenster.'}]},
  {n:'Tom',es:'Okay. Und der Spiegel? Liegt der noch im Flur?',de:'Ok. E o espelho? Ainda está no corredor?'},
  {you:true,opts:[{es:'Ja, er liegt auf dem Boden. Wir hängen ihn an die Wand im Bad.',ok:true},{es:'Ja, er legt auf den Boden.',ok:false,why:'Estado → <b>liegen</b> + dativo: <i>Er liegt auf dem Boden.</i>'}]},
  {n:'Tom',es:'Gute Idee. Dann sind wir fertig – Pizza?',de:'Boa ideia. Aí terminamos – pizza?'},
  {you:true,opts:[{es:'Super, ich lade dich ein!',ok:true},{es:'Ich bin fertig mit dir.',ok:false,why:'<i>Ich bin fertig mit dir</i> soa como „cansei de você“ – cuidado!'}]}]},
 {t:'tr',de:'Eu penduro o quadro na parede.',a:['Ich hänge das Bild an die Wand.']},
 {t:'tr',de:'O livro está em cima da mesa.',a:['Das Buch liegt auf dem Tisch.']}
]},
{id:'l3',title:'Regras da casa e vizinhos',desc:'Hausordnung · Müll trennen · Nebensätze mit dass',steps:[
 {t:'vocab',title:'Morar num prédio',items:[['die Hausordnung','as regras do prédio'],['der Hausmeister / die Hausmeisterin','o zelador / a zeladora'],['der Nachbar / die Nachbarin','o vizinho / a vizinha'],['nebenan','ao lado (vizinho)'],['die Ruhe','o silêncio / a tranquilidade'],['die Ruhezeit','o horário de silêncio'],['stören','incomodar'],['der Müll','o lixo'],['die Mülltonne','a lixeira (grande)'],['trennen','separar'],['der Biomüll','o lixo orgânico'],['das Altpapier','o papel para reciclar'],['das Altglas','o vidro para reciclar'],['das Treppenhaus','a escada (do prédio)'],['der Briefkasten','a caixa de correio'],['die Klingel','a campainha'],['klingeln','tocar a campainha'],['sich beschweren','reclamar']]},
 {t:'info',title:'Frases com dass',html:`<p>Depois de <b>dass</b>, o verbo conjugado vai para o <b>final</b> da frase:</p>
 <div class="ex"><span class="es-t">Die Wohnung ist hell.</span> → <span class="es-t">Ich finde, dass die Wohnung hell <b>ist</b>.</span></div>
 <table><tr><td class="es-t">Ich glaube, dass …</td><td>Eu acho que …</td></tr>
 <tr><td class="es-t">Ich finde, dass …</td><td>Eu acho (opinião) que …</td></tr>
 <tr><td class="es-t">Ich weiß, dass …</td><td>Eu sei que …</td></tr>
 <tr><td class="es-t">Frau Becker sagt, dass …</td><td>A Sra. Becker diz que …</td></tr>
 <tr><td class="es-t">Es ist wichtig, dass …</td><td>É importante que …</td></tr></table>
 <div class="ex">Com modal ou Perfekt: <span class="es-t">…, dass man nach 22 Uhr leise sein <b>muss</b>.</span> · <span class="es-t">…, dass ich gestern zu laut gewesen <b>bin</b>.</span></div>
 <div class="ojo">Antes de <b>dass</b> sempre vem vírgula.</div>`},
 {t:'mc',q:'Frau Becker sagt, dass man den Müll trennen ___.',opts:['muss','muss man','müssen'],a:0},
 {t:'mc',q:'Ich weiß, ___',opts:['dass du am Samstag eine Party machst.','dass du machst am Samstag eine Party.','dass machst du am Samstag eine Party.'],a:0},
 {t:'gap',q:'Es ist wichtig, dass man im Treppenhaus leise ___. (sein)',a:['ist']},
 {t:'order',es:'Ich glaube dass der Hausmeister im Erdgeschoss wohnt',de:'Eu acho que o zelador mora no térreo.'},
 {t:'match',q:'Onde vai o lixo?',pairs:[['die Zeitung','das Altpapier'],['die Bananenschale','der Biomüll'],['die Weinflasche','das Altglas'],['der Joghurtbecher','die Gelbe Tonne']]},
 {t:'read',title:'Leitura: Hausordnung (trecho)',text:`HAUSORDNUNG – Bornheimer Straße 12
1. Ruhezeiten: Bitte seien Sie von 22 bis 7 Uhr und am Sonntag leise.
2. Müll: Bitte trennen Sie den Müll. Papier kommt in die blaue Tonne, Biomüll in die braune Tonne, Verpackungen in die gelbe Tonne. Glas bringen Sie bitte zum Container an der Ecke.
3. Treppenhaus: Fahrräder und Kinderwagen dürfen nicht im Treppenhaus stehen. Bitte stellen Sie sie in den Keller.
4. Bei Problemen mit der Heizung oder dem Wasser rufen Sie bitte den Hausmeister an: Herr Kaya, 069 445 21.`,de:`REGRAS DO PRÉDIO – Bornheimer Straße 12
1. Horários de silêncio: por favor, faça silêncio das 22h às 7h e no domingo.
2. Lixo: por favor, separe o lixo. Papel vai na lixeira azul, orgânico na marrom, embalagens na amarela. O vidro, por favor, leve ao contêiner na esquina.
3. Escada: bicicletas e carrinhos de bebê não podem ficar na escada. Por favor, coloque-os no porão.
4. Em caso de problemas com o aquecimento ou a água, ligue para o zelador: Sr. Kaya, 069 445 21.`},
 {t:'mc',q:'Wohin kommt eine Zeitung?',opts:['in die blaue Tonne','in die gelbe Tonne','zum Container an der Ecke'],a:0},
 {t:'mc',q:'Wo darf Lucas sein Fahrrad abstellen?',opts:['im Keller','im Treppenhaus','vor der Tür'],a:0},
 {t:'mc',q:'Die Heizung ist kaputt. Was macht Lucas?',opts:['Er ruft Herrn Kaya an.','Er schreibt der Vermieterin.','Er bringt sie zum Container.'],a:0},
 {t:'tr',de:'Eu acho que a cozinha é pequena demais.',a:['Ich finde, dass die Küche zu klein ist.','Ich glaube, dass die Küche zu klein ist.']}
]},
{id:'l4',title:'Ler e escrever: festa de inauguração',desc:'Einladung zur Einweihungsparty · Antwort',steps:[
 {t:'vocab',title:'Convites',items:[['die Einweihungsparty','a festa de inauguração (da casa)'],['einladen','convidar'],['die Einladung','o convite'],['feiern','comemorar'],['Bescheid sagen','avisar'],['sich freuen auf','estar ansioso por'],['leider','infelizmente']]},
 {t:'read',title:'Leitura: Einladung',text:`Liebe Nachbarinnen und Nachbarn,
ich bin der Neue im 2. Stock! Ich heiße Lucas und komme aus São Paulo. Am Samstag, den 14. Mai, mache ich ab 19 Uhr eine kleine Einweihungsparty und lade Sie herzlich ein. Es gibt brasilianisches Essen und Musik – aber keine Angst, um 22 Uhr machen wir die Musik leise! Bitte sagen Sie mir bis Donnerstag Bescheid, ob Sie kommen.
Viele Grüße
Lucas Souza (Wohnung 5)`,de:`Queridas vizinhas e queridos vizinhos,
sou o novo morador do 2º andar! Meu nome é Lucas e venho de São Paulo. No sábado, 14 de maio, a partir das 19h, vou dar uma pequena festa de inauguração e convido vocês de coração. Vai ter comida brasileira e música – mas não se preocupem, às 22h a gente abaixa a música! Por favor, me avisem até quinta-feira se vêm.
Abraços
Lucas Souza (apartamento 5)`},
 {t:'mc',q:'Wann beginnt die Party?',opts:['am Samstag um 19 Uhr','am Donnerstag um 19 Uhr','am Samstag um 22 Uhr'],a:0},
 {t:'mc',q:'Was sollen die Nachbarn bis Donnerstag machen?',opts:['Bescheid sagen','Essen mitbringen','die Musik leise machen'],a:0},
 {t:'info',title:'Responder a um convite',html:`<table><tr><th>Sim</th><th>Não</th></tr>
 <tr><td class="es-t">Vielen Dank für die Einladung! Ich komme gern.</td><td class="es-t">Vielen Dank für die Einladung, aber leider kann ich nicht kommen.</td></tr>
 <tr><td class="es-t">Soll ich etwas mitbringen?</td><td class="es-t">Ich bin am Wochenende bei meiner Schwester.</td></tr>
 <tr><td class="es-t">Ich freue mich auf die Party!</td><td class="es-t">Ich wünsche dir viel Spaß!</td></tr></table>`},
 {t:'free',task:'Você recebeu o convite de uma colega para a festa de inauguração dela. Escreva uma resposta (~30–40 palavras): 1) agradeça, 2) diga se vai ou não e por quê, 3) pergunte o que você pode levar ou proponha outro encontro.',hint:'Liebe Jana, vielen Dank für … Ich komme gern / Leider kann ich nicht, denn … Soll ich … mitbringen? Viele Grüße',focus:'Einladung beantworten, denn/weil, Modalverben, Grußformeln',model:'Liebe Jana,\nvielen Dank für die Einladung! Ich komme gern zu deiner Party. Soll ich etwas mitbringen? Ich kann einen Salat machen oder Getränke kaufen. Sag mir bitte Bescheid.\nIch freue mich!\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Mudança (Perfekt com sein)</h3><p class="es-t">Ich bin umgezogen / eingezogen / ausgezogen. · Ich habe alles eingepackt.</p>
<h3>Wo? (dativo) – Wohin? (acusativo)</h3><table><tr><td class="es-t">Ich stelle das Regal in die Ecke.</td><td class="es-t">Das Regal steht in der Ecke.</td></tr><tr><td class="es-t">Ich lege das Buch auf den Tisch.</td><td class="es-t">Das Buch liegt auf dem Tisch.</td></tr><tr><td class="es-t">Ich hänge das Bild an die Wand.</td><td class="es-t">Das Bild hängt an der Wand.</td></tr></table>
<p class="es-t">in · an · auf · über · unter · vor · hinter · neben · zwischen</p>
<h3>dass (verbo no final)</h3><p class="es-t">Ich finde, dass die Wohnung hell ist. · Er sagt, dass man leise sein muss.</p>
<h3>Lixo</h3><p class="es-t">Altpapier (blau) · Biomüll (braun) · Verpackungen (gelb) · Altglas (Container)</p>`});

/* ================= KAPITEL 14 · BÜRO & MEDIEN ================= */
LANGS.de.course.units.push({id:'k14',n:'14',level:'A2',title:'Büro & Medien',sub:'Computador e internet · weil · pedidos educados: Könnten Sie …? · remarcar compromissos · e-mail',
goals:['Computer & Internet: speichern, herunterladen, das Passwort','Gründe nennen mit weil','Höflich bitten: Könnten Sie …? Würden Sie …? Hätten Sie Zeit?','Termine verschieben und absagen','Eine E-Mail an eine Kollegin schreiben'],
situacion:{title:'Problema no computador',npc:'Herr Albers (IT)',scene:'O seu notebook não liga e você tem uma reunião em uma hora. Você liga para o suporte de TI da empresa.',role:'Du bist Herr Albers vom IT-Support einer Softwarefirma in Frankfurt. Du duzt Lucas (in der Firma duzen sich alle). Frag, was nicht funktioniert und seit wann. Gib einfache Tipps (Akku laden, neu starten). Wenn es nicht hilft: Er soll den Laptop vorbeibringen, er bekommt ein Ersatzgerät. Sprich einfaches Deutsch (A2), benutze weil und höfliche Fragen.',goal:'Explique o problema (weil …), peça ajuda com educação (Könntest du …?) e combine quando você leva o notebook.'},
placement:[
 {t:'mc',q:'Ich komme nicht, ___',opts:['weil ich krank bin.','weil ich bin krank.','weil bin ich krank.'],a:0},
 {t:'mc',q:'„O senhor poderia me ajudar?“ (educado)',opts:['Könnten Sie mir helfen?','Können Sie mir hilft?','Konnten Sie mir helfen?'],a:0},
 {t:'gap',q:'Ich habe die Datei auf dem Laptop ___. (speichern – Perfekt)',a:['gespeichert']},
 {t:'mc',q:'„Eu preciso remarcar a reunião.“',opts:['Ich muss das Meeting verschieben.','Ich muss das Meeting schieben weg.','Ich muss das Meeting verschiebe.'],a:0},
 {t:'mc',q:'Warum lernst du Deutsch? – ___',opts:['Weil ich in Deutschland arbeite.','Denn ich in Deutschland arbeite.','Weil ich arbeite in Deutschland.'],a:0},
 {t:'gap',q:'___ Sie am Montag Zeit? (haben – educado)',a:['Hätten']}],
lessons:[
{id:'l1',title:'Computador e internet',desc:'speichern, herunterladen, das Passwort …',steps:[
 {t:'vocab',title:'No computador',items:[['der Laptop','o notebook'],['der Bildschirm','a tela'],['die Tastatur','o teclado'],['die Maus','o mouse'],['die Datei','o arquivo'],['der Ordner','a pasta'],['speichern','salvar'],['löschen','apagar'],['öffnen','abrir'],['schließen','fechar'],['herunterladen','baixar'],['hochladen','enviar (fazer upload)'],['ausdrucken','imprimir'],['das Passwort','a senha'],['sich anmelden','fazer login / se inscrever'],['der Link','o link'],['die Homepage','a página (site)'],['das WLAN','o Wi-Fi'],['der Akku','a bateria'],['aufladen','carregar (bateria)'],['funktionieren','funcionar'],['kaputt','quebrado']]},
 {t:'mc',q:'Mein Akku ist leer. Ich muss den Laptop ___.',opts:['aufladen','herunterladen','löschen'],a:0},
 {t:'mc',q:'Ich habe mein ___ vergessen. Ich kann mich nicht anmelden.',opts:['Passwort','WLAN','Ordner'],a:0},
 {t:'gap',q:'Kannst du mir das Dokument per E-Mail schicken? Dann ___ ich es ___. (ausdrucken)',a:['drucke','aus']},
 {t:'match',q:'Ligue.',pairs:[['speichern','salvar'],['löschen','apagar'],['herunterladen','baixar'],['der Bildschirm','a tela'],['die Datei','o arquivo']]},
 {t:'gap',q:'Oh nein! Ich habe die Datei nicht ___. (speichern – Perfekt)',a:['gespeichert']},
 {t:'order',es:'Klick bitte auf den Link und lade die Datei herunter',de:'Clique no link, por favor, e baixe o arquivo.'},
 {t:'tr',de:'O Wi-Fi não funciona.',a:['Das WLAN funktioniert nicht.']},
 {t:'tr',de:'Eu apaguei o arquivo.',a:['Ich habe die Datei gelöscht.']}
]},
{id:'l2',title:'Por quê? – weil',desc:'Gründe nennen · weil vs. denn',steps:[
 {t:'info',title:'weil',html:`<p><b>weil</b> = porque. Como em <b>dass</b>, o verbo vai para o <b>final</b>:</p>
 <div class="ex"><span class="es-t">Ich komme später, <b>weil</b> der Bus Verspätung <b>hat</b>.</span></div>
 <table><tr><td class="es-t">Warum bist du so müde? – Weil ich schlecht geschlafen <b>habe</b>.</td></tr>
 <tr><td class="es-t">Ich bleibe zu Hause, weil ich arbeiten <b>muss</b>.</td></tr>
 <tr><td class="es-t">Weil das WLAN nicht <b>funktioniert</b>, arbeite ich im Café.</td></tr></table>
 <div class="ojo"><b>denn</b> (A1) também significa „porque“, mas a ordem fica normal: <span class="es-t">…, denn der Bus hat Verspätung.</span> Com <b>weil</b>: <span class="es-t">…, weil der Bus Verspätung hat.</span></div>
 <div class="ex">Se a frase começa com <b>weil</b>, a segunda parte começa com o verbo: <span class="es-t">Weil es regnet, <b>nehme</b> ich den Bus.</span></div>`},
 {t:'mc',q:'Ich arbeite heute im Homeoffice, weil ___',opts:['meine Tochter krank ist.','meine Tochter ist krank.','ist meine Tochter krank.'],a:0},
 {t:'mc',q:'Ich arbeite heute im Homeoffice, denn ___',opts:['meine Tochter ist krank.','meine Tochter krank ist.','krank ist meine Tochter.'],a:0},
 {t:'gap',q:'Lucas lernt viel, weil er die Prüfung bestehen ___. (wollen)',a:['will']},
 {t:'gap',q:'Ich bin zu spät, weil ich den Bus verpasst ___. (haben)',a:['habe']},
 {t:'order',es:'Weil das Wetter schön ist gehen wir in den Park',de:'Como o tempo está bonito, vamos ao parque.'},
 {t:'mc',q:'Warum lernst du Deutsch? – ___',opts:['Weil ich in Frankfurt wohne.','Weil ich wohne in Frankfurt.','Denn ich in Frankfurt wohne.'],a:0},
 {t:'tr',de:'Eu não vou à festa porque tenho que trabalhar. (weil)',a:['Ich gehe nicht zur Party, weil ich arbeiten muss.','Ich komme nicht zur Party, weil ich arbeiten muss.']},
 {t:'speak',es:'Ich lerne Deutsch, weil ich in Frankfurt arbeite und neue Freunde finden möchte.',de:'Eu estudo alemão porque trabalho em Frankfurt e quero fazer novos amigos.',tip:'Depois de <b>weil</b>: verbo no final – <i>arbeite</i>, <i>möchte</i>.'}
]},
{id:'l3',title:'Pedidos educados e compromissos',desc:'Könnten Sie …? · Hätten Sie Zeit? · verschieben, absagen',steps:[
 {t:'vocab',title:'Compromissos',items:[['die Besprechung','a reunião'],['verschieben','remarcar / adiar'],['vereinbaren','combinar'],['passen','servir / ficar bom (horário)'],['dringend','urgente'],['erledigen','resolver / fazer'],['schaffen','conseguir (fazer)'],['Bescheid geben','dar notícia / avisar'],['die Verspätung','o atraso'],['pünktlich','pontual'],['der Kalender','a agenda / o calendário'],['die Ausnahme','a exceção']]},
 {t:'info',title:'Mais educado: Konjunktiv II',html:`<p>Para pedidos educados, o alemão usa formas especiais (Konjunktiv II):</p>
 <table><tr><td class="es-t">Können Sie …? → <b>Könnten</b> Sie mir helfen?</td><td>O senhor poderia me ajudar?</td></tr>
 <tr><td class="es-t">Haben Sie …? → <b>Hätten</b> Sie am Montag Zeit?</td><td>O senhor teria tempo na segunda?</td></tr>
 <tr><td class="es-t"><b>Würden</b> Sie mir bitte die Datei schicken?</td><td>O senhor poderia me mandar o arquivo?</td></tr>
 <tr><td class="es-t">Ich <b>hätte</b> gern einen Termin.</td><td>Eu gostaria de marcar um horário.</td></tr></table>
 <div class="ex">Com <i>du</i>: <span class="es-t">Könntest du …? · Hättest du Zeit? · Würdest du …?</span></div>`},
 {t:'mc',q:'Mais educado: „Schick mir die Datei!“',opts:['Könntest du mir bitte die Datei schicken?','Kannst du mir die Datei schicken!','Konntest du mir die Datei schicken?'],a:0},
 {t:'gap',q:'___ Sie morgen um zehn Uhr Zeit? (haben – educado)',a:['Hätten']},
 {t:'gap',q:'___ du mir bitte helfen? (können – educado)',a:['Könntest']},
 {t:'dialog',place:'Büro',title:'Remarcar a reunião',scene:'Você precisa remarcar a reunião com a sua chefe, a Sra. Hoffmann.',lines:[
  {n:'Frau Hoffmann',es:'Hallo Lucas, wir sehen uns ja um zwei zur Besprechung, oder?',de:'Oi Lucas, a gente se vê às duas na reunião, né?'},
  {you:true,opts:[{es:'Eigentlich wollte ich fragen: Könnten wir die Besprechung verschieben? Ich muss heute um zwei zum Arzt.',ok:true},{es:'Nein, ich komme nicht.',ok:false,why:'Com a chefe: explique e peça de forma educada (<i>Könnten wir …?</i>).'}]},
  {n:'Frau Hoffmann',es:'Kein Problem. Passt es Ihnen morgen um zehn?',de:'Sem problema. Amanhã às dez fica bom para você?'},
  {you:true,opts:[{es:'Ja, morgen um zehn passt mir gut. Vielen Dank!',ok:true},{es:'Ja, morgen um zehn passe ich gut.',ok:false,why:'<i>passen</i> + dativo: <b>Es passt mir</b> – „fica bom para mim“.'}]},
  {n:'Frau Hoffmann',es:'Gut. Und gute Besserung!',de:'Ótimo. E melhoras!'},
  {you:true,opts:[{es:'Danke! Ich schicke Ihnen die Präsentation heute Abend.',ok:true},{es:'Gleichfalls!',ok:false,why:'<i>Gleichfalls</i> = „igualmente“ – não serve para „melhoras“.'}]}]},
 {t:'mc',q:'Passt es dir am Freitag? – ___',opts:['Nein, leider nicht. Am Freitag habe ich keine Zeit.','Nein, ich passe nicht.','Ja, ich passe am Freitag.'],a:0},
 {t:'tr',de:'O senhor poderia me ligar de volta? (educado)',a:['Könnten Sie mich zurückrufen?','Könnten Sie mich bitte zurückrufen?','Würden Sie mich zurückrufen?','Würden Sie mich bitte zurückrufen?']},
 {t:'tr',de:'Eu preciso cancelar o compromisso.',a:['Ich muss den Termin absagen.']}
]},
{id:'l4',title:'Ler e escrever: e-mails no trabalho',desc:'Rundmail lesen · E-Mail an eine Kollegin',steps:[
 {t:'read',title:'Leitura: Rundmail vom IT-Support',text:`Liebe Kolleginnen und Kollegen,
am Freitag, den 20. Juni, bekommen alle Computer ein Update. Bitte speichern Sie bis Donnerstag um 18 Uhr alle Dateien auf dem Server und schalten Sie Ihren Computer nicht aus. Am Freitag können Sie von 8 bis 12 Uhr nicht arbeiten. Ab Montag brauchen Sie ein neues Passwort – Sie bekommen es per SMS. Bei Fragen schreiben Sie bitte an it-support@firma.de oder rufen Sie die Nummer 120 an.
Viele Grüße
Ihr IT-Team`,de:`Queridas colegas e queridos colegas,
na sexta-feira, 20 de junho, todos os computadores vão receber uma atualização. Por favor, salvem todos os arquivos no servidor até quinta-feira às 18h e não desliguem o computador. Na sexta, das 8h às 12h, não vai ser possível trabalhar. A partir de segunda vocês vão precisar de uma senha nova – vocês recebem por SMS. Em caso de dúvidas, escrevam para it-support@firma.de ou liguem para o ramal 120.
Abraços
Equipe de TI`},
 {t:'mc',q:'Was müssen die Mitarbeiter bis Donnerstag machen?',opts:['Dateien auf dem Server speichern','den Computer ausschalten','ein neues Passwort wählen'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Freitag kann man den ganzen Tag nicht arbeiten.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Wie bekommt man das neue Passwort?',opts:['per SMS','per E-Mail','beim IT-Team'],a:0},
 {t:'free',task:'Escreva uma e-mail (~30–40 palavras) para a sua colega Jana: 1) você não pode ir à reunião de quinta, 2) por quê (weil …), 3) proponha um novo horário e peça uma resposta.',hint:'Liebe Jana, leider kann ich am Donnerstag nicht …, weil … Hättest du am … Zeit? Könntest du mir kurz Bescheid geben? Viele Grüße',focus:'weil-Sätze, Konjunktiv II (Hättest du …? Könntest du …?), Terminvorschlag',model:'Liebe Jana,\nleider kann ich am Donnerstag nicht zur Besprechung kommen, weil ich einen Arzttermin habe. Hättest du am Freitag um zehn Uhr Zeit? Könntest du mir bitte kurz Bescheid geben?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>No computador</h3><p class="es-t">speichern · löschen · herunterladen · hochladen · ausdrucken · das Passwort · das WLAN · der Akku</p>
<h3>weil (verbo no final)</h3><p class="es-t">Ich komme später, weil der Bus Verspätung hat. · Weil es regnet, nehme ich den Bus.</p><p>Compare: <span class="es-t">…, denn der Bus hat Verspätung.</span></p>
<h3>Pedidos educados</h3><p class="es-t">Könnten Sie …? · Hätten Sie Zeit? · Würden Sie …? · Ich hätte gern …</p>
<h3>Compromissos</h3><p class="es-t">einen Termin vereinbaren / verschieben / absagen · Passt es Ihnen …? – Ja, das passt mir.</p>`});

/* ================= KAPITEL 15 · GESUNDHEIT & SPORT ================= */
LANGS.de.course.units.push({id:'k15',n:'15',level:'A2',title:'Gesundheit & Sport',sub:'Esporte · verbos reflexivos · seit · na farmácia · emergência',
goals:['Sport & Bewegung: joggen, trainieren, der Verein','Reflexive Verben: sich bewegen, sich fühlen, sich freuen','seit + Dativ: seit drei Tagen','Beim Arzt und in der Apotheke','Im Notfall: 112, der Unfall','Eine SMS: Training absagen'],
situacion:{title:'Na farmácia',npc:'Apothekerin',scene:'Você está resfriado há três dias: tosse, coriza e dor de garganta. Você vai à farmácia.',role:'Du bist Apothekerin in einer Apotheke in Frankfurt, freundlich. Du siezt. Frag: Was fehlt Ihnen? Seit wann? Haben Sie Fieber? Nehmen Sie andere Medikamente? Empfiehl Hustensaft und Halstabletten, erkläre die Dosierung (dreimal täglich nach dem Essen). Wenn es in drei Tagen nicht besser ist: zum Arzt gehen. Sprich einfaches Deutsch (A2).',goal:'Diga o que você tem e desde quando (seit), pergunte como tomar o remédio e quanto custa.'},
placement:[
 {t:'mc',q:'„Eu me sinto mal.“',opts:['Ich fühle mich schlecht.','Ich fühle schlecht.','Ich fühle mir schlecht.'],a:0},
 {t:'gap',q:'Ich habe ___ drei Tagen Husten. (desde)',a:['seit']},
 {t:'mc',q:'Wir freuen ___ auf das Wochenende.',opts:['uns','euch','sich'],a:0},
 {t:'mc',q:'„Ele se machucou.“',opts:['Er hat sich verletzt.','Er ist sich verletzt.','Er hat ihn verletzt.'],a:0},
 {t:'mc',q:'Wo kauft man Medikamente?',opts:['in der Apotheke','in der Praxis','im Krankenwagen'],a:0},
 {t:'gap',q:'Du musst dich mehr ___. (bewegen)',a:['bewegen']}],
lessons:[
{id:'l1',title:'Esporte e movimento',desc:'joggen, trainieren, der Verein …',steps:[
 {t:'vocab',title:'Esporte',items:[['joggen','correr (cooper)'],['trainieren','treinar'],['das Training','o treino'],['das Fitnessstudio','a academia'],['der Verein','o clube / a associação'],['die Mannschaft','o time'],['das Spiel','o jogo'],['verlieren','perder'],['der Ball','a bola'],['Fußball spielen','jogar futebol'],['Rad fahren','andar de bicicleta'],['der Berg','a montanha'],['fit','em forma'],['die Bewegung','o movimento / a atividade física'],['gesund','saudável'],['ungesund','não saudável'],['das Gewicht','o peso'],['abnehmen','emagrecer'],['zunehmen','engordar']]},
 {t:'mc',q:'Lucas spielt jeden Dienstag Fußball. Er ist in einem ___.',opts:['Verein','Fitnessstudio','Berg'],a:0},
 {t:'mc',q:'Unsere Mannschaft hat 3:1 ___. Super!',opts:['gewonnen','verloren','trainiert'],a:0},
 {t:'gap',q:'Ich esse zu viel Schokolade. Ich habe zwei Kilo ___. (zunehmen – Perfekt)',a:['zugenommen']},
 {t:'match',q:'Ligue.',pairs:[['joggen','correr'],['wandern','fazer trilha'],['gewinnen','ganhar'],['die Mannschaft','o time'],['das Fitnessstudio','a academia']]},
 {t:'read',title:'Leitura: Lucas und der Sport',text:`In Brasilien hat Lucas jeden Tag Fußball gespielt. In Frankfurt hatte er am Anfang keine Zeit für Sport, weil er so viel arbeiten musste. Jetzt ist er in einem Fußballverein. Die Mannschaft trainiert dienstags und donnerstags, am Samstag gibt es oft ein Spiel. Lucas sagt: „Im Verein habe ich auch viele Freunde gefunden. Und mein Deutsch ist besser geworden – auf dem Platz spricht niemand Englisch!“`,de:`No Brasil, o Lucas jogava futebol todo dia. Em Frankfurt, no começo, ele não tinha tempo para esporte, porque precisava trabalhar muito. Agora ele está num clube de futebol. O time treina às terças e quintas, e no sábado muitas vezes tem jogo. O Lucas diz: „No clube também fiz muitos amigos. E o meu alemão melhorou – no campo ninguém fala inglês!“`},
 {t:'mc',q:'Warum hatte Lucas am Anfang keine Zeit für Sport?',opts:['Er musste viel arbeiten.','Er war krank.','Es gab keinen Verein.'],a:0},
 {t:'mc',q:'Wann trainiert die Mannschaft?',opts:['dienstags und donnerstags','jeden Tag','nur am Samstag'],a:0},
 {t:'tr',de:'Eu vou à academia duas vezes por semana.',a:['Ich gehe zweimal pro Woche ins Fitnessstudio.','Ich gehe zweimal in der Woche ins Fitnessstudio.']}
]},
{id:'l2',title:'Verbos reflexivos',desc:'sich bewegen, sich fühlen, sich freuen …',steps:[
 {t:'info',title:'sich',html:`<p>Alguns verbos alemães usam um pronome reflexivo (como „se“ em português):</p>
 <table><tr><th></th><th>sich fühlen</th></tr>
 <tr><td>ich</td><td class="es-t">ich fühle <b>mich</b></td></tr><tr><td>du</td><td class="es-t">du fühlst <b>dich</b></td></tr>
 <tr><td>er / sie / es</td><td class="es-t">er fühlt <b>sich</b></td></tr><tr><td>wir</td><td class="es-t">wir fühlen <b>uns</b></td></tr>
 <tr><td>ihr</td><td class="es-t">ihr fühlt <b>euch</b></td></tr><tr><td>sie / Sie</td><td class="es-t">sie fühlen <b>sich</b></td></tr></table>
 <p>Verbos frequentes: <span class="es-t">sich bewegen, sich ausruhen, sich verletzen, sich duschen, sich anziehen, sich beeilen, sich ärgern, sich freuen auf / über, sich interessieren für</span>.</p>
 <div class="ex">Perfekt sempre com <b>haben</b>: <span class="es-t">Ich habe mich verletzt.</span> · Com modal: <span class="es-t">Du musst dich ausruhen.</span></div>
 <div class="ojo">Muitas vezes o português <b>não</b> usa „se“: <span class="es-t">Ich freue mich.</span> = Estou feliz. <span class="es-t">Beeil dich!</span> = Anda logo!</div>`},
 {t:'mc',q:'Wie fühlst du ___ heute?',opts:['dich','dir','sich'],a:0},
 {t:'mc',q:'Wir freuen ___ auf den Urlaub.',opts:['uns','sich','euch'],a:0},
 {t:'gap',q:'Beim Fußball hat Lucas ___ am Knie verletzt.',a:['sich']},
 {t:'gap',q:'Ihr müsst ___ beeilen, der Zug fährt gleich!',a:['euch']},
 {t:'mc',q:'„Interessiert ihr euch für Sport?“ – ___',opts:['Ja, wir interessieren uns sehr für Fußball.','Ja, wir interessieren sich für Fußball.','Ja, wir interessieren für Fußball.'],a:0},
 {t:'order',es:'Nach dem Training ruhe ich mich aus',de:'Depois do treino eu descanso.'},
 {t:'tr',de:'Eu me alegro com o fim de semana. (sich freuen auf)',a:['Ich freue mich auf das Wochenende.','Ich freue mich aufs Wochenende.']},
 {t:'tr',de:'Ele se irrita com o chefe.',a:['Er ärgert sich über den Chef.','Er ärgert sich über seinen Chef.']},
 {t:'speak',es:'Ich bewege mich zu wenig. Ab Montag gehe ich zweimal pro Woche joggen.',de:'Eu me movimento pouco. A partir de segunda vou correr duas vezes por semana.',tip:'<i>ich bewege <b>mich</b></i> – o pronome vem logo depois do verbo.'}
]},
{id:'l3',title:'Médico, farmácia, emergência',desc:'seit + Dativ · in der Apotheke · der Notruf',steps:[
 {t:'vocab',title:'Saúde',items:[['die Erkältung','o resfriado'],['die Grippe','a gripe'],['der Husten','a tosse'],['husten','tossir'],['das Fieber','a febre'],['die Halsschmerzen (Pl.)','a dor de garganta'],['die Apotheke','a farmácia'],['das Medikament','o remédio'],['die Tablette','o comprimido'],['der Hustensaft','o xarope para tosse'],['das Rezept','a receita'],['die Praxis','o consultório'],['die Sprechstunde','o horário de atendimento'],['der Zahnarzt / die Zahnärztin','o dentista / a dentista'],['der Unfall','o acidente'],['die Verletzung','o ferimento'],['der Krankenwagen','a ambulância'],['der Notruf','a chamada de emergência'],['das Krankenhaus','o hospital']]},
 {t:'info',title:'seit e vor',html:`<table><tr><td class="es-t"><b>seit</b> + dativo</td><td>desde / há (e continua)</td><td class="es-t">Ich habe <b>seit</b> drei Tag<b>en</b> Husten.</td></tr>
 <tr><td class="es-t"><b>vor</b> + dativo</td><td>há … (no passado, terminou)</td><td class="es-t">Ich war <b>vor</b> einer Woche beim Arzt.</td></tr></table>
 <div class="ex">Dativo: <span class="es-t">seit einem Tag, seit einer Woche, seit zwei Monaten</span> (plural + <b>-n</b>). <span class="es-t">Seit wann …?</span> = Desde quando …?</div>
 <div class="ojo">Emergência na Alemanha: <b>112</b> (ambulância, bombeiros) · <b>110</b> (polícia). À noite e no fim de semana: o plantão médico <b>116 117</b>.</div>`},
 {t:'mc',q:'Seit wann haben Sie Fieber? – ___',opts:['Seit zwei Tagen.','Vor zwei Tagen.','Seit zwei Tage.'],a:0},
 {t:'gap',q:'Ich wohne ___ einem Jahr in Frankfurt. (desde)',a:['seit']},
 {t:'gap',q:'Ich war ___ einer Woche beim Zahnarzt. (há – passado)',a:['vor']},
 {t:'mc',q:'Es gab einen Unfall, ein Mann ist verletzt. Welche Nummer rufen Sie an?',opts:['112','110','116 117'],a:0},
 {t:'dialog',place:'Apotheke',title:'Na farmácia',scene:'Você está resfriado e vai à farmácia.',lines:[
  {n:'Apothekerin',es:'Guten Tag, was kann ich für Sie tun?',de:'Boa tarde, o que posso fazer pelo senhor?'},
  {you:true,opts:[{es:'Guten Tag. Ich habe seit drei Tagen Husten und Halsschmerzen.',ok:true},{es:'Guten Tag. Ich habe vor drei Tagen Husten.',ok:false,why:'Ainda está com tosse → <b>seit</b> drei Tagen.'}]},
  {n:'Apothekerin',es:'Haben Sie auch Fieber?',de:'O senhor também tem febre?'},
  {you:true,opts:[{es:'Nein, Fieber habe ich nicht. Haben Sie etwas gegen Husten?',ok:true},{es:'Nein, ich habe kein Fieber gemacht.',ok:false,why:'Febre se „tem“: <i>Ich habe kein Fieber.</i>'}]},
  {n:'Apothekerin',es:'Ja, dieser Hustensaft ist gut. Nehmen Sie ihn dreimal täglich nach dem Essen.',de:'Sim, este xarope é bom. Tome três vezes ao dia depois de comer.'},
  {you:true,opts:[{es:'Dreimal täglich nach dem Essen – vielen Dank. Was kostet er?',ok:true},{es:'Danke, ich nehme ihn jeden Tag einmal.',ok:false,why:'Repita a dosagem certa: <i>dreimal täglich</i>.'}]}]},
 {t:'tr',de:'Estou resfriado há uma semana.',a:['Ich bin seit einer Woche erkältet.','Ich habe seit einer Woche eine Erkältung.']},
 {t:'tr',de:'Ligue para a ambulância!',a:['Ruf den Krankenwagen!','Rufen Sie den Krankenwagen!','Ruf einen Krankenwagen!','Rufen Sie einen Krankenwagen!']}
]},
{id:'l4',title:'Ouvir e escrever: saúde',desc:'Ansage der Arztpraxis · SMS: Training absagen',steps:[
 {t:'read',hideText:true,title:'Ouvir: Anrufbeantworter der Praxis',intro:'Você liga para o consultório do seu médico. Ouça a mensagem.',text:`Guten Tag, hier ist die Praxis Dr. Wolf. Leider rufen Sie außerhalb unserer Sprechstunde an. Unsere Sprechzeiten sind Montag bis Freitag von 8 bis 12 Uhr und Montag, Dienstag und Donnerstag auch von 15 bis 18 Uhr. Mittwochnachmittag und Freitagnachmittag ist die Praxis geschlossen. In dringenden Fällen rufen Sie bitte den ärztlichen Bereitschaftsdienst an: 116 117. Im Notfall wählen Sie die 112.`,de:`Bom dia, aqui é o consultório do Dr. Wolf. Infelizmente o senhor está ligando fora do horário de atendimento. Atendemos de segunda a sexta das 8h às 12h e na segunda, terça e quinta também das 15h às 18h. Na quarta à tarde e na sexta à tarde o consultório fica fechado. Em casos urgentes, ligue para o plantão médico: 116 117. Em emergências, disque 112.`},
 {t:'mc',q:'Wann ist die Praxis am Mittwoch geöffnet?',opts:['von 8 bis 12 Uhr','von 15 bis 18 Uhr','gar nicht'],a:0},
 {t:'mc',q:'Freitag, 16 Uhr: Sie fühlen sich sehr schlecht, aber es ist kein Notfall. Wen rufen Sie an?',opts:['116 117','112','die Praxis'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Donnerstagnachmittag ist die Praxis geöffnet.',opts:['richtig','falsch'],a:0},
 {t:'free',task:'Você não pode ir ao treino de futebol hoje. Escreva uma SMS (~20–30 palavras) para o treinador, Mehmet: 1) você não vem, 2) por quê, 3) quando você volta a treinar.',hint:'Hallo Mehmet, ich kann heute leider nicht zum Training kommen, weil … Am … bin ich wieder dabei. Viele Grüße',focus:'weil, seit, reflexive Verben (sich verletzen, sich fühlen), Zeitangaben',model:'Hallo Mehmet,\nich kann heute leider nicht zum Training kommen, weil ich mich am Samstag am Fuß verletzt habe. Nächsten Dienstag bin ich wieder dabei!\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Verbos reflexivos</h3><table><tr><td class="es-t">ich fühle mich · du fühlst dich · er/sie fühlt sich · wir fühlen uns · ihr fühlt euch · sie/Sie fühlen sich</td></tr></table>
<p class="es-t">sich bewegen · sich ausruhen · sich verletzen · sich beeilen · sich freuen auf · sich ärgern über · sich interessieren für</p><p>Perfekt: <span class="es-t">Ich habe mich verletzt.</span></p>
<h3>seit / vor + dativo</h3><p class="es-t">seit drei Tagen (e continua) · vor einer Woche (já passou)</p>
<h3>Emergência</h3><p class="es-t">112 Notruf · 110 Polizei · 116 117 ärztlicher Bereitschaftsdienst</p>`});
