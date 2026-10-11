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
 {t:'vocab',title:'Esporte',items:[['joggen','correr (cooper)'],['trainieren','treinar'],['das Training','o treino'],['das Fitnessstudio','a academia'],['der Verein','o clube / a associação'],['die Mannschaft','o time'],['das Spiel','o jogo'],['der Ball','a bola'],['Fußball spielen','jogar futebol'],['Rad fahren','andar de bicicleta'],['der Berg','a montanha'],['fit','em forma'],['die Bewegung','o movimento / a atividade física'],['gesund','saudável'],['ungesund','não saudável'],['das Gewicht','o peso'],['abnehmen','emagrecer; diminuir'],['zunehmen','engordar; aumentar']]},
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
 {t:'vocab',title:'Saúde',items:[['die Krankheit','a doença'],['die Erkältung','o resfriado'],['die Grippe','a gripe'],['der Husten','a tosse'],['husten','tossir'],['das Fieber','a febre'],['die Halsschmerzen (Pl.)','a dor de garganta'],['die Apotheke','a farmácia'],['das Medikament','o remédio'],['die Tablette','o comprimido'],['der Hustensaft','o xarope para tosse'],['das Rezept','a receita'],['die Praxis','o consultório'],['die Sprechstunde','o horário de atendimento'],['der Zahnarzt / die Zahnärztin','o dentista / a dentista'],['der Unfall','o acidente'],['die Verletzung','o ferimento'],['der Krankenwagen','a ambulância'],['der Notruf','a chamada de emergência'],['das Krankenhaus','o hospital']]},
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

/* ================= KAPITEL 16 · UNTERWEGS & URLAUB ================= */
LANGS.de.course.units.push({id:'k16',n:'16',level:'A2',title:'Unterwegs & Urlaub',sub:'Planejar viagens · hospedagem · natureza e tempo · Präteritum dos modais: konnte, musste, wollte · no carro',
goals:['Eine Reise planen: verreisen, die Unterkunft, die Ermäßigung','Präteritum der Modalverben: Ich konnte nicht kommen, ich musste arbeiten.','Natur und Wetter: der Wald, der Strand, bewölkt, das Gewitter','Mit dem Auto: die Werkstatt, der Reifen, die Kreuzung','Durchsagen am Bahnhof verstehen','Eine Postkarte / Nachricht aus dem Urlaub schreiben'],
situacion:{title:'Na recepção do albergue',npc:'Rezeptionist',scene:'Você chega com um amigo a um albergue (Jugendherberge) em Hamburgo. Vocês reservaram duas camas para duas noites.',role:'Du arbeitest an der Rezeption einer Jugendherberge in Hamburg, freundlich und locker. Du duzt die Gäste. Frag nach dem Namen und der Buchung, erkläre: Frühstück 7–10 Uhr, Bettwäsche kostet 5 Euro extra, Studenten bekommen eine Ermäßigung. Empfiehl einen kostenlosen Rundgang durch den Hafen um 11 Uhr. Sprich einfaches Deutsch (A2), benutze auch Präteritum (war, konnte, musste).',goal:'Faça o check-in, pergunte pelo café da manhã e por descontos e informe-se sobre o passeio grátis.'},
placement:[
 {t:'mc',q:'„Eu não pude vir ontem.“',opts:['Ich konnte gestern nicht kommen.','Ich könnte gestern nicht kommen.','Ich kannte gestern nicht kommen.'],a:0},
 {t:'gap',q:'Letzte Woche ___ ich viel arbeiten. (müssen – Präteritum)',a:['musste']},
 {t:'mc',q:'Der Himmel ist grau, die Sonne scheint nicht. Es ist ___.',opts:['bewölkt','trocken','nass'],a:0},
 {t:'mc',q:'Mein Auto ist kaputt. Ich bringe es in die ___.',opts:['Werkstatt','Unterkunft','Kreuzung'],a:0},
 {t:'mc',q:'„Estudantes têm desconto.“',opts:['Studenten bekommen eine Ermäßigung.','Studenten bekommen einen Rabattschein.','Studenten sind kostenlos.'],a:0},
 {t:'gap',q:'Als Kind ___ ich Pilot werden. (wollen – Präteritum)',a:['wollte']}],
lessons:[
{id:'l1',title:'Planejar a viagem',desc:'verreisen · die Unterkunft · die Ermäßigung',steps:[
 {t:'vocab',title:'Viajar',items:[['verreisen','viajar (sair de viagem)'],['die Unterkunft','a hospedagem'],['die Jugendherberge','o albergue da juventude'],['der Campingplatz','o camping'],['das Zelt','a barraca'],['der Rucksack','a mochila'],['der Rundgang','o passeio a pé (guiado)'],['die Tour','o passeio / o tour'],['der Tourist / die Touristin','o turista / a turista'],['der Stadtplan','o mapa da cidade'],['die Hauptstadt','a capital'],['die Ermäßigung','o desconto'],['kostenlos','gratuito'],['die Grenze','a fronteira'],['der Reisepass','o passaporte'],]},
 {t:'mc',q:'Wir haben wenig Geld. Wir übernachten in einer ___.',opts:['Jugendherberge','Hauptstadt','Grenze'],a:0},
 {t:'mc',q:'Der Eintritt ins Museum ist am Sonntag ___. Man muss nichts bezahlen.',opts:['kostenlos','teuer','ermäßigt'],a:0},
 {t:'gap',q:'Mit dem Studentenausweis bekommst du eine ___. (desconto)',a:['Ermäßigung']},
 {t:'match',q:'Ligue.',pairs:[['das Zelt','a barraca'],['der Rucksack','a mochila'],['der Stadtplan','o mapa da cidade'],['die Unterkunft','a hospedagem'],['die Grenze','a fronteira']]},
 {t:'read',title:'Leitura: Ein Wochenende in Hamburg',text:`Hamburg für junge Leute: Übernachten Sie in der Jugendherberge am Hafen – ab 29 € pro Nacht mit Frühstück. Studenten bekommen 10 % Ermäßigung. Jeden Tag um 11 Uhr gibt es einen kostenlosen Rundgang durch die Speicherstadt (auf Deutsch und Englisch). Eine Hafenrundfahrt mit dem Schiff kostet 20 €. Tipp: Mit der Hamburg-Card fahren Sie mit Bus und Bahn kostenlos und bezahlen in vielen Museen weniger.`,de:`Hamburgo para jovens: pernoite no albergue no porto – a partir de 29 € por noite com café da manhã. Estudantes têm 10 % de desconto. Todo dia às 11h tem um passeio a pé gratuito pela Speicherstadt (em alemão e inglês). Um passeio de barco pelo porto custa 20 €. Dica: com o Hamburg-Card você anda de ônibus e trem de graça e paga menos em muitos museus.`},
 {t:'mc',q:'Was kostet der Rundgang durch die Speicherstadt?',opts:['nichts','29 €','20 €'],a:0},
 {t:'mc',q:'Was bekommt man mit der Hamburg-Card?',opts:['kostenlose Fahrten mit Bus und Bahn','ein kostenloses Zimmer','eine kostenlose Hafenrundfahrt'],a:0},
 {t:'tr',de:'Nós vamos viajar no verão.',a:['Wir verreisen im Sommer.','Im Sommer verreisen wir.']}
]},
{id:'l2',title:'Eu tive que … – modais no passado',desc:'konnte, musste, wollte, durfte, sollte',steps:[
 {t:'info',title:'Präteritum dos verbos modais',html:`<p>No passado, os verbos modais quase sempre usam o <b>Präteritum</b> (não o Perfekt). Sem trema e com <b>-te</b>:</p>
 <table><tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>dürfen</th><th>sollen</th></tr>
 <tr><td>ich / er / sie</td><td class="es-t">konnte</td><td class="es-t">musste</td><td class="es-t">wollte</td><td class="es-t">durfte</td><td class="es-t">sollte</td></tr>
 <tr><td>du</td><td class="es-t">konntest</td><td class="es-t">musstest</td><td class="es-t">wolltest</td><td class="es-t">durftest</td><td class="es-t">solltest</td></tr>
 <tr><td>wir / sie / Sie</td><td class="es-t">konnten</td><td class="es-t">mussten</td><td class="es-t">wollten</td><td class="es-t">durften</td><td class="es-t">sollten</td></tr></table>
 <div class="ex"><span class="es-t">Ich <b>konnte</b> gestern nicht kommen, ich <b>musste</b> arbeiten.</span> = Ontem não pude vir, tive que trabalhar.</div>
 <div class="ojo">Cuidado: <span class="es-t">ich konnte</span> (pude) ≠ <span class="es-t">ich könnte</span> (poderia – pedido educado, cap. 14).</div>`},
 {t:'mc',q:'Warum warst du nicht auf der Party? – Ich ___ arbeiten.',opts:['musste','muss','müsste'],a:0},
 {t:'mc',q:'Als Kind ___ ich nicht allein in die Stadt fahren.',opts:['durfte','darf','dürfte'],a:0},
 {t:'gap',q:'Wir ___ den Zug nicht nehmen, er war voll. (können)',a:['konnten']},
 {t:'gap',q:'___ du nicht zum Arzt gehen? (sollen – Präteritum, du)',a:['Solltest']},
 {t:'gap',q:'Lucas ___ eigentlich nach Berlin fahren, aber es gab keine Tickets mehr. (wollen)',a:['wollte']},
 {t:'order',es:'Im Urlaub konnten wir jeden Tag schwimmen',de:'Nas férias pudemos nadar todo dia.'},
 {t:'tr',de:'Ontem eu não pude dormir.',a:['Gestern konnte ich nicht schlafen.','Ich konnte gestern nicht schlafen.']},
 {t:'tr',de:'Nós tivemos que esperar duas horas.',a:['Wir mussten zwei Stunden warten.']},
 {t:'speak',es:'Letztes Jahr wollte ich nach Italien fahren, aber ich musste arbeiten.',de:'No ano passado eu queria ir para a Itália, mas tive que trabalhar.',tip:'<i>wollte</i>, <i>musste</i> – sem trema no passado.'}
]},
{id:'l3',title:'Natureza e tempo',desc:'der Wald, der Strand, bewölkt, das Gewitter',steps:[
 {t:'vocab',title:'Natureza e tempo',items:[['die Natur','a natureza'],['die Landschaft','a paisagem'],['der Wald','a floresta'],['der Fluss','o rio'],['die Insel','a ilha'],['der Strand','a praia'],['das Schiff','o navio / o barco'],['der Himmel','o céu'],['bewölkt','nublado'],['das Gewitter','a tempestade (com trovões)'],['der Sturm','a tempestade (vento)'],['nass','molhado'],['trocken','seco'],['die Temperatur','a temperatura'],['vorsichtig','cuidadoso'],['das Tier','o animal'],['der Vogel','o pássaro']]},
 {t:'mc',q:'Es regnet und es donnert. Es gibt ein ___.',opts:['Gewitter','Wolke','Strand'],a:0},
 {t:'mc',q:'Nach dem Regen ist die Straße ___.',opts:['nass','trocken','bewölkt'],a:0},
 {t:'gap',q:'Am Wochenende sind wir im ___ gewandert. Da gibt es viele Bäume. (floresta)',a:['Wald']},
 {t:'match',q:'Ligue.',pairs:[['der Strand','a praia'],['die Insel','a ilha'],['der Fluss','o rio'],['der Vogel','o pássaro'],['der Himmel','o céu']]},
 {t:'read',hideText:true,title:'Ouvir: Wetterbericht',intro:'Ouça a previsão do tempo para o fim de semana.',text:`Und jetzt das Wetter für das Wochenende. Am Samstag ist es im Norden bewölkt, aber trocken, bei 18 Grad. Im Süden scheint die Sonne, bis 25 Grad. Am Sonntag kommen von Westen Gewitter, vor allem am Nachmittag. Bitte seien Sie vorsichtig, wenn Sie in den Bergen wandern. Am Montag wird es kühler: nur noch 14 Grad und viel Regen.`,de:`E agora o tempo para o fim de semana. No sábado, no norte, fica nublado, mas seco, com 18 graus. No sul faz sol, até 25 graus. No domingo chegam tempestades do oeste, principalmente à tarde. Por favor, tenham cuidado se forem fazer trilha nas montanhas. Na segunda esfria: só 14 graus e muita chuva.`},
 {t:'mc',q:'Wie ist das Wetter am Samstag im Norden?',opts:['bewölkt, aber trocken','sonnig und 25 Grad','Gewitter'],a:0},
 {t:'mc',q:'Wann soll man in den Bergen vorsichtig sein?',opts:['am Sonntagnachmittag','am Samstagmorgen','am Montag'],a:0},
 {t:'tr',de:'Amanhã vai ficar nublado.',a:['Morgen ist es bewölkt.','Morgen wird es bewölkt.']}
]},
{id:'l4',title:'De carro e de trem',desc:'die Werkstatt, der Reifen · Durchsagen · Urlaubsgrüße',steps:[
 {t:'vocab',title:'No caminho',items:[['der Wagen','o carro'],['der Reifen','o pneu'],['die Werkstatt','a oficina'],['die Panne','a pane / o defeito'],['die Kreuzung','o cruzamento'],['tanken','abastecer'],['die Tankstelle','o posto de gasolina'],['der Motorroller','a scooter'],['der Stau','o engarrafamento'],['die Durchsage','o aviso (alto-falante)'],['die Abfahrt','a partida']]},
 {t:'read',hideText:true,title:'Ouvir: Durchsage am Bahnhof',intro:'Você está na estação de Frankfurt e quer pegar o trem para Hamburgo.',text:`Achtung an Gleis 7: Der ICE 576 nach Hamburg, Abfahrt 14:12 Uhr, hat heute etwa 20 Minuten Verspätung. Der Zug fährt heute ausnahmsweise von Gleis 9. Reisende nach Hannover steigen bitte in Kassel in den Regionalexpress um. Wir bitten um Entschuldigung.`,de:`Atenção na plataforma 7: o ICE 576 para Hamburgo, partida 14h12, está hoje com cerca de 20 minutos de atraso. O trem sai hoje excepcionalmente da plataforma 9. Passageiros para Hannover, por favor, troquem em Kassel para o Regional-Express. Pedimos desculpas.`},
 {t:'mc',q:'Von welchem Gleis fährt der Zug nach Hamburg heute?',opts:['Gleis 9','Gleis 7','Gleis 14'],a:0},
 {t:'mc',q:'Wann fährt der Zug ungefähr ab?',opts:['um 14:32 Uhr','um 14:12 Uhr','um 13:52 Uhr'],a:0},
 {t:'dialog',place:'Werkstatt',title:'Na oficina',scene:'O pneu do carro da Jana furou. Você leva o carro à oficina.',lines:[
  {n:'Mechaniker',es:'Guten Tag! Was ist denn mit dem Wagen?',de:'Bom dia! O que houve com o carro?'},
  {you:true,opts:[{es:'Guten Tag. Ein Reifen ist kaputt. Könnten Sie ihn heute noch reparieren?',ok:true},{es:'Guten Tag. Der Wagen hat Reifen.',ok:false,why:'Diga o problema: <i>Ein Reifen ist kaputt.</i>'}]},
  {n:'Mechaniker',es:'Heute wird es schwierig. Morgen um zehn ist er fertig.',de:'Hoje vai ser difícil. Amanhã às dez fica pronto.'},
  {you:true,opts:[{es:'Okay, das passt. Was kostet das ungefähr?',ok:true},{es:'Okay, ich passe morgen.',ok:false,why:'<i>Das passt (mir).</i> – a pessoa não „passt“.'}]},
  {n:'Mechaniker',es:'Ein neuer Reifen kostet etwa 90 Euro.',de:'Um pneu novo custa uns 90 euros.'},
  {you:true,opts:[{es:'Gut, dann bis morgen. Auf Wiedersehen!',ok:true},{es:'Gut, dann bis gestern!',ok:false,why:'Amanhã = <i>morgen</i>.'}]}]},
 {t:'free',task:'Você está de férias. Escreva uma mensagem (~30–40 palavras) para a Jana: 1) onde você está e com quem, 2) como está o tempo, 3) o que você fez / não pôde fazer (konnte, musste, wollte).',hint:'Hallo Jana, liebe Grüße aus …! Ich bin mit … hier. Das Wetter ist … Gestern wollten wir …, aber … Wir konnten … Bis bald!',focus:'Präteritum der Modalverben, Wetter, Perfekt',model:'Hallo Jana,\nliebe Grüße aus Hamburg! Ich bin mit Tom hier. Das Wetter ist leider bewölkt, aber trocken. Gestern wollten wir eine Hafenrundfahrt machen, aber es gab ein Gewitter. Wir konnten nur ins Museum gehen.\nBis bald!\nLucas'}
]}],
resumen:`<h3>Präteritum dos modais (sem trema)</h3><table><tr><td class="es-t">konnte · musste · wollte · durfte · sollte</td></tr><tr><td class="es-t">ich konnte, du konntest, wir konnten</td></tr></table><p>Cuidado: <span class="es-t">konnte</span> (pude) ≠ <span class="es-t">könnte</span> (poderia).</p>
<h3>Viagem</h3><p class="es-t">verreisen · die Unterkunft · die Jugendherberge · übernachten · die Ermäßigung · kostenlos · der Rundgang</p>
<h3>Tempo</h3><p class="es-t">bewölkt · das Gewitter · der Sturm · nass · trocken · minus 5 Grad</p>
<h3>Carro</h3><p class="es-t">die Werkstatt · der Reifen · die Panne · tanken · der Stau</p>`});

/* ================= KAPITEL 17 · EINKAUFEN & KLEIDUNG ================= */
LANGS.de.course.units.push({id:'k17',n:'17',level:'A2',title:'Einkaufen & Kleidung',sub:'Roupas e acessórios · terminações dos adjetivos · comparar: besser, am besten · drogaria e lavanderia · trocar produtos',
goals:['Kleidung und Accessoires: die Jeans, der Anzug, die Brille','Adjektivendungen: der neue Mantel, ein neuer Mantel','Vergleichen: billiger als, so teuer wie, am günstigsten','In der Drogerie und in der Reinigung','Etwas umtauschen oder reklamieren'],
situacion:{title:'Trocar uma jaqueta',npc:'Verkäuferin',scene:'Você comprou uma jaqueta ontem, mas em casa percebeu que ela é pequena demais. Você volta à loja com o comprovante.',role:'Du bist Verkäuferin in einem Kleidungsgeschäft in Frankfurt, freundlich. Du siezt. Frag, was das Problem ist und ob der Kunde den Kassenbon hat. Biete eine größere Größe oder eine andere Farbe an; Geld zurück gibt es nur mit Kassenbon innerhalb von 14 Tagen. Benutze Adjektive mit Endungen und Vergleiche (größer, bequemer). Sprich einfaches Deutsch (A2).',goal:'Explique o problema, peça para trocar por um tamanho maior e pergunte se dá para receber o dinheiro de volta.'},
placement:[
 {t:'mc',q:'Ich suche einen ___ Mantel.',opts:['warmen','warme','warmer'],a:0},
 {t:'mc',q:'Der ___ Pullover gefällt mir.',opts:['blaue','blauen','blauer'],a:0},
 {t:'mc',q:'Die Jeans ist ___ als die Hose.',opts:['billiger','billig','am billigsten'],a:0},
 {t:'gap',q:'Dieses Geschäft ist am ___. (gut – Superlativ)',a:['besten']},
 {t:'mc',q:'Die Hose ist zu klein. Ich möchte sie ___.',opts:['umtauschen','umziehen','umsteigen'],a:0},
 {t:'mc',q:'Wo kauft man Seife und Creme?',opts:['in der Drogerie','in der Reinigung','in der Werkstatt'],a:0}],
lessons:[
{id:'l1',title:'Roupas e acessórios',desc:'die Jeans, der Anzug, die Brille … · eng, bequem',steps:[
 {t:'vocab',title:'Roupas e acessórios',items:[['die Jeans','o jeans'],['der Anzug','o terno'],['der Stiefel','a bota'],['der Gürtel','o cinto'],['die Kette','o colar / a corrente'],['der Ring','o anel'],['die Brille','os óculos'],['der Schirm','o guarda-chuva'],['das Paar','o par'],['eng','apertado'],['bequem','confortável'],['weich','macio'],['hart','duro'],['dünn','fino'],['dick','grosso / gordo'],['bunt','colorido'],['gestreift','listrado'],['kariert','xadrez']]},
 {t:'mc',q:'Die Schuhe sind zu ___. Sie tun mir weh.',opts:['eng','weit','bunt'],a:0},
 {t:'mc',q:'Ich habe ein neues ___ Stiefel gekauft.',opts:['Paar','Ring','Anzug'],a:0},
 {t:'mc',q:'Lucas kann ohne ___ nicht gut lesen.',opts:['Brille','Kette','Geldbörse'],a:0},
 {t:'match',q:'Ligue.',pairs:[['der Anzug','o terno'],['der Schirm','o guarda-chuva'],['bequem','confortável'],['gestreift','listrado'],['die Geldbörse','a carteira']]},
 {t:'gap',q:'Für das Vorstellungsgespräch trägt Lucas einen ___. (terno)',a:['Anzug']},
 {t:'tr',de:'Este casaco é muito confortável.',a:['Diese Jacke ist sehr bequem.','Die Jacke ist sehr bequem.']},
 {t:'speak',es:'Die Jeans ist zu eng. Haben Sie die auch eine Nummer größer?',de:'O jeans está apertado demais. Vocês têm um número maior?',tip:'<i>eine Nummer größer</i> = um número maior.'}
]},
{id:'l2',title:'Terminações dos adjetivos',desc:'der neue Mantel · ein neuer Mantel',steps:[
 {t:'info',title:'Adjetivo antes do substantivo',html:`<p>Antes do substantivo, o adjetivo ganha uma terminação. No A2 basta saber o nominativo e o acusativo:</p>
 <table><tr><th></th><th>com der/die/das</th><th>com ein/eine/kein</th></tr>
 <tr><td>masc. (nom.)</td><td class="es-t">der neu<b>e</b> Mantel</td><td class="es-t">ein neu<b>er</b> Mantel</td></tr>
 <tr><td>masc. (acus.)</td><td class="es-t">den neu<b>en</b> Mantel</td><td class="es-t">einen neu<b>en</b> Mantel</td></tr>
 <tr><td>fem.</td><td class="es-t">die neu<b>e</b> Jacke</td><td class="es-t">eine neu<b>e</b> Jacke</td></tr>
 <tr><td>neutro</td><td class="es-t">das neu<b>e</b> Hemd</td><td class="es-t">ein neu<b>es</b> Hemd</td></tr>
 <tr><td>plural</td><td class="es-t">die neu<b>en</b> Schuhe</td><td class="es-t">keine neu<b>en</b> Schuhe</td></tr></table>
 <div class="ex">Dica: depois de <b>ein</b> sem terminação, o adjetivo „mostra“ o gênero: ein neu<b>er</b> (der), ein neu<b>es</b> (das).</div>
 <div class="ojo">Depois de <b>sein</b>, sem terminação: <span class="es-t">Der Mantel ist neu.</span></div>`},
 {t:'mc',q:'Wie findest du den ___ Rock?',opts:['roten','rote','roter'],a:0},
 {t:'mc',q:'Das ist ein ___ Hemd.',opts:['schönes','schöne','schönen'],a:0},
 {t:'mc',q:'Ich brauche eine ___ Brille.',opts:['neue','neuen','neuer'],a:0},
 {t:'gap',q:'Ich kaufe einen ___ Schirm. (groß)',a:['großen']},
 {t:'gap',q:'Die ___ Stiefel sind sehr bequem. (schwarz)',a:['schwarzen']},
 {t:'gap',q:'Mein Bruder trägt immer ein ___ T-Shirt. (bunt)',a:['buntes']},
 {t:'order',es:'Ich suche eine warme Jacke für den Winter',de:'Procuro um casaco quente para o inverno.'},
 {t:'tr',de:'Eu gosto do vestido azul.',a:['Mir gefällt das blaue Kleid.','Das blaue Kleid gefällt mir.']}
]},
{id:'l3',title:'Comparar',desc:'billiger als · so teuer wie · am günstigsten',steps:[
 {t:'vocab',title:'Comprar e comparar',items:[['die Qualität','a qualidade'],['das Produkt','o produto'],['der Unterschied','a diferença'],['verschieden','diferente / variado'],['der Flohmarkt','o brechó / a feira de usados'],['reduziert','com desconto (remarcado)'],['umtauschen','trocar (produto)'],['der Kassenbon','o cupom fiscal'],['reklamieren','reclamar (produto)']]},
 {t:'info',title:'Comparativo e superlativo',html:`<table><tr><th>normal</th><th>comparativo (+er)</th><th>superlativo</th></tr>
 <tr><td class="es-t">billig</td><td class="es-t">billig<b>er</b></td><td class="es-t">am billig<b>sten</b></td></tr>
 <tr><td class="es-t">schön</td><td class="es-t">schön<b>er</b></td><td class="es-t">am schön<b>sten</b></td></tr>
 <tr><td class="es-t">alt / groß / warm</td><td class="es-t">ä<b>lter</b> / grö<b>ßer</b> / wä<b>rmer</b></td><td class="es-t">am ältesten / am größten / am wärmsten</td></tr>
 <tr><td class="es-t">gut</td><td class="es-t"><b>besser</b></td><td class="es-t">am <b>besten</b></td></tr>
 <tr><td class="es-t">gern</td><td class="es-t"><b>lieber</b></td><td class="es-t">am <b>liebsten</b></td></tr>
 <tr><td class="es-t">viel</td><td class="es-t"><b>mehr</b></td><td class="es-t">am <b>meisten</b></td></tr></table>
 <div class="ex"><span class="es-t">Die Jeans ist billiger <b>als</b> die Hose.</span> (diferente) · <span class="es-t">Die Jeans ist <b>so</b> teuer <b>wie</b> die Hose.</span> (igual)</div>`},
 {t:'mc',q:'Der Mantel kostet 120 €, die Jacke 80 €. Die Jacke ist ___ als der Mantel.',opts:['billiger','teurer','so billig'],a:0},
 {t:'mc',q:'Welcher Pullover gefällt dir ___?',opts:['am besten','am guten','besser als'],a:0},
 {t:'gap',q:'Mein Bruder ist zwei Jahre ___ als ich. (alt)',a:['älter']},
 {t:'gap',q:'Diese Schuhe sind genauso bequem ___ meine alten.',a:['wie']},
 {t:'gap',q:'Ich trinke lieber Tee, aber am ___ trinke ich Kaffee. (gern)',a:['liebsten']},
 {t:'read',title:'Leitura: Drei Angebote',text:`A) Kaufhaus Zentrum: Winterjacke, sehr warm, gute Qualität – statt 149 € jetzt 99 €.
B) Sportgeschäft Aktiv: Regenjacke, leicht und bequem, in vielen Farben – 69 €.
C) Flohmarkt am Mainufer (jeden Samstag): Jacken, Mäntel und Stiefel, gebraucht, ab 10 €. Umtauschen geht leider nicht.`,de:`A) Loja de departamentos Zentrum: jaqueta de inverno, muito quente, boa qualidade – de 149 € por 99 €.
B) Loja de esportes Aktiv: jaqueta de chuva, leve e confortável, em muitas cores – 69 €.
C) Feira de usados à beira do Meno (todo sábado): jaquetas, casacos e botas, usados, a partir de 10 €. Infelizmente não é possível trocar.`},
 {t:'mc',q:'Wo ist eine Jacke am billigsten?',opts:['auf dem Flohmarkt','im Kaufhaus Zentrum','im Sportgeschäft'],a:0},
 {t:'mc',q:'Wo kann man die Jacke nicht umtauschen?',opts:['auf dem Flohmarkt','im Kaufhaus','im Sportgeschäft'],a:0},
 {t:'tr',de:'O vermelho é mais bonito que o preto.',a:['Der rote ist schöner als der schwarze.','Das rote ist schöner als das schwarze.','Die rote ist schöner als die schwarze.']}
]},
{id:'l4',title:'Drogaria, lavanderia e trocas',desc:'die Seife, die Creme · die Reinigung · umtauschen',steps:[
 {t:'vocab',title:'Drogaria e lavanderia',items:[['die Drogerie','a drogaria (higiene e cosméticos)'],['die Kosmetik','os cosméticos'],['die Creme','o creme'],['die Seife','o sabonete'],['das Shampoo','o xampu'],['die Zahnpasta','a pasta de dente'],['das Parfüm','o perfume'],['das Handtuch','a toalha'],['die Reinigung','a lavanderia (lavagem a seco)'],['die Wäsche','a roupa (para lavar)'],['waschen','lavar'],['schmutzig','sujo'],['sauber','limpo'],['der Fleck','a mancha'],['ändern','mudar / ajustar']]},
 {t:'mc',q:'Mein Anzug ist schmutzig. Ich bringe ihn in die ___.',opts:['Reinigung','Drogerie','Werkstatt'],a:0},
 {t:'mc',q:'Die Hose ist zu lang. Die Schneiderin kann sie ___.',opts:['ändern','umtauschen','waschen'],a:0},
 {t:'dialog',place:'Geschäft',title:'Trocar a jaqueta',scene:'Você comprou uma jaqueta ontem, mas ela é pequena demais.',lines:[
  {n:'Verkäuferin',es:'Guten Tag, kann ich Ihnen helfen?',de:'Bom dia, posso ajudar?'},
  {you:true,opts:[{es:'Ja, ich habe gestern diese Jacke gekauft. Sie ist leider zu eng.',ok:true},{es:'Ja, ich habe gestern diese Jacke gekauft. Er ist zu eng.',ok:false,why:'<i>die Jacke</i> → pronome <b>sie</b>.'}]},
  {n:'Verkäuferin',es:'Haben Sie den Kassenbon?',de:'O senhor tem o cupom fiscal?'},
  {you:true,opts:[{es:'Ja, hier ist er. Kann ich die Jacke in einer größeren Größe umtauschen?',ok:true},{es:'Ja, hier ist er. Kann ich die Jacke umziehen?',ok:false,why:'Trocar produto = <i>umtauschen</i>; <i>umziehen</i> = mudar de casa / trocar de roupa.'}]},
  {n:'Verkäuferin',es:'Natürlich. In L haben wir sie nur noch in Grau. Ist das okay?',de:'Claro. Em G só temos em cinza. Tudo bem?'},
  {you:true,opts:[{es:'Grau finde ich sogar schöner. Danke!',ok:true},{es:'Grau finde ich sogar schönste.',ok:false,why:'Comparação: <i>schöner</i>; superlativo seria <i>am schönsten</i>.'}]}]},
 {t:'free',task:'Você comprou um produto pela internet e ele chegou com defeito. Escreva uma e-mail curta (~30–40 palavras) para a loja: 1) o que você comprou e quando, 2) qual é o problema, 3) o que você quer (trocar ou o dinheiro de volta).',hint:'Sehr geehrte Damen und Herren, am … habe ich … gekauft. Leider … Ich möchte … umtauschen / Bitte schicken Sie mir … Mit freundlichen Grüßen',focus:'Perfekt, Adjektivendungen, weil, höfliche Bitte',model:'Sehr geehrte Damen und Herren,\nam 3. März habe ich bei Ihnen eine schwarze Regenjacke gekauft. Leider ist der Reißverschluss kaputt. Ich möchte die Jacke gern umtauschen. Könnten Sie mir bitte eine neue Jacke schicken?\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Terminações dos adjetivos</h3><table><tr><td></td><td>der/die/das</td><td>ein/eine</td></tr><tr><td>masc. nom.</td><td class="es-t">der neue Mantel</td><td class="es-t">ein neuer Mantel</td></tr><tr><td>masc. acus.</td><td class="es-t">den neuen Mantel</td><td class="es-t">einen neuen Mantel</td></tr><tr><td>fem.</td><td class="es-t">die neue Jacke</td><td class="es-t">eine neue Jacke</td></tr><tr><td>neutro</td><td class="es-t">das neue Hemd</td><td class="es-t">ein neues Hemd</td></tr><tr><td>plural</td><td class="es-t">die neuen Schuhe</td><td class="es-t">keine neuen Schuhe</td></tr></table>
<h3>Comparar</h3><p class="es-t">billiger als · so teuer wie · am billigsten · gut – besser – am besten · gern – lieber – am liebsten · viel – mehr – am meisten</p>
<h3>Trocar</h3><p class="es-t">Kann ich das umtauschen? · Hier ist der Kassenbon. · Eine Nummer größer, bitte.</p>`});

/* ================= KAPITEL 18 · FESTE & ESSEN ================= */
LANGS.de.course.units.push({id:'k18',n:'18',level:'A2',title:'Feste & Essen',sub:'Festas e presentes · dativo: Wem schenkst du …? · verbos com dativo · cozinhar · wenn (quando/se)',
goals:['Feste in Deutschland: Geburtstag, Hochzeit, Weihnachten, Silvester','Dativ: Ich schenke meiner Mutter ein Buch.','Verben mit Dativ: helfen, danken, gratulieren, gehören, schmecken','In der Küche: der Topf, die Gabel, scharf','Nebensätze mit wenn','Ein Festival / eine Feier organisieren'],
situacion:{title:'Planejar um presente',npc:'Tom',scene:'O aniversário de 30 anos da Jana é no sábado. Você e o Tom, seu ex-colega de apartamento, combinam o presente e a festa.',role:'Du bist Tom, Lucas’ Freund und ehemaliger Mitbewohner in Frankfurt, locker und lustig. Du duzt. Ihr plant ein Geschenk für Janas 30. Geburtstag am Samstag. Mach Vorschläge (ein Buch, Konzertkarten, ein Kochkurs), frag Lucas nach seiner Meinung und wer was organisiert. Benutze Dativ (Wir schenken ihr …) und wenn-Sätze. Sprich einfaches Deutsch (A2).',goal:'Proponha um presente, diga o que vocês dão a ela (ihr …) e combine quem organiza o quê.'},
placement:[
 {t:'mc',q:'Ich schenke ___ Mutter Blumen.',opts:['meiner','meine','meinen'],a:0},
 {t:'mc',q:'Kannst du ___ helfen?',opts:['mir','mich','ich'],a:0},
 {t:'gap',q:'Wir gratulieren ___ zum Geburtstag. (du)',a:['dir']},
 {t:'mc',q:'___ ich Zeit habe, koche ich gern.',opts:['Wenn','Dass','Denn'],a:0},
 {t:'mc',q:'Wem gehört das Handy? – Es gehört ___.',opts:['ihm','ihn','er'],a:0},
 {t:'mc',q:'Das Essen ist sehr ___. Ich brauche Wasser!',opts:['scharf','süß','weich'],a:0}],
lessons:[
{id:'l1',title:'Festas',desc:'Geburtstag, Hochzeit, Weihnachten · Glückwünsche',steps:[
 {t:'vocab',title:'Festas',items:[['die Feier','a comemoração'],['Weihnachten','o Natal'],['Ostern','a Páscoa'],['Silvester','o réveillon'],['Neujahr','o Ano-Novo'],['schenken','dar de presente'],['der Wunsch','o desejo'],['wünschen','desejar'],['die Torte','a torta / o bolo de festa'],['die Süßigkeiten (Pl.)','os doces'],['die Kerze','a vela'],['der Gast','o convidado'],['organisieren','organizar'],['stattfinden','acontecer / ser realizado'],['das Festival','o festival'],['die Band','a banda'],['der Fan','o fã'],['das Plakat','o cartaz']]},
 {t:'info',title:'Felicitações',html:`<table><tr><td class="es-t">Herzlichen Glückwunsch zum Geburtstag!</td><td>Feliz aniversário!</td></tr>
 <tr><td class="es-t">Alles Gute!</td><td>Tudo de bom!</td></tr>
 <tr><td class="es-t">Frohe Weihnachten!</td><td>Feliz Natal!</td></tr>
 <tr><td class="es-t">Frohe Ostern!</td><td>Feliz Páscoa!</td></tr>
 <tr><td class="es-t">Guten Rutsch (ins neue Jahr)!</td><td>Boas entradas! (antes do réveillon)</td></tr>
 <tr><td class="es-t">Frohes neues Jahr!</td><td>Feliz Ano-Novo!</td></tr></table>
 <div class="ojo">Na Alemanha dá azar dar parabéns <b>antes</b> do dia do aniversário! E quem faz aniversário muitas vezes leva bolo para o trabalho.</div>`},
 {t:'mc',q:'Am 31. Dezember sagt man: ___',opts:['Guten Rutsch!','Frohe Ostern!','Gute Besserung!'],a:0},
 {t:'mc',q:'Das Konzert ___ am Samstag im Park ___.',opts:['findet … statt','ist … statt','macht … statt'],a:0},
 {t:'gap',q:'Ich ___ dir alles Gute zum Geburtstag! (desejar)',a:['wünsche']},
 {t:'match',q:'Ligue.',pairs:[['die Hochzeit','o casamento'],['die Kerze','a vela'],['die Torte','o bolo de festa'],['Silvester','o réveillon'],['der Gast','o convidado']]},
 {t:'read',title:'Leitura: Mainfest',text:`Am ersten Augustwochenende findet am Mainufer wieder das große Mainfest statt. Von Freitag bis Montag spielen über 30 Bands, auch für Kinder gibt es viel Programm. Der Eintritt ist frei. Am Samstag um 22 Uhr gibt es ein Feuerwerk über dem Fluss. Tipp: Kommen Sie mit Bus und Bahn – Parkplätze gibt es kaum. Fans der Band „Die Frankfurter“ aufgepasst: Das Konzert am Sonntag beginnt schon um 18 Uhr!`,de:`No primeiro fim de semana de agosto acontece de novo, à beira do Meno, a grande festa Mainfest. De sexta a segunda tocam mais de 30 bandas, e também tem muita programação para crianças. A entrada é grátis. No sábado às 22h tem fogos de artifício sobre o rio. Dica: venha de ônibus e trem – quase não há vagas para estacionar. Fãs da banda „Die Frankfurter“, atenção: o show no domingo já começa às 18h!`},
 {t:'mc',q:'Was kostet der Eintritt zum Mainfest?',opts:['nichts','30 Euro','18 Euro'],a:0},
 {t:'mc',q:'Wann gibt es das Feuerwerk?',opts:['am Samstag um 22 Uhr','am Sonntag um 18 Uhr','am Freitag um 22 Uhr'],a:0},
 {t:'tr',de:'Feliz aniversário!',a:['Herzlichen Glückwunsch zum Geburtstag!','Alles Gute zum Geburtstag!']}
]},
{id:'l2',title:'Wem? – o dativo',desc:'Ich schenke meiner Mutter … · helfen, danken, gehören',steps:[
 {t:'info',title:'Quem recebe? → dativo',html:`<p>Com <b>schenken, geben, schicken, zeigen, erklären</b> existem duas pessoas/coisas: <b>quem recebe</b> (dativo) e <b>o quê</b> (acusativo):</p>
 <div class="ex"><span class="es-t">Ich schenke <b>meiner Mutter</b> (Wem?) <b>einen Schal</b> (Was?).</span></div>
 <table><tr><th></th><th>artigo (dativo)</th><th>pronome (dativo)</th></tr>
 <tr><td>masc. / neutro</td><td class="es-t">dem / einem / meinem Vater</td><td class="es-t">ihm</td></tr>
 <tr><td>fem.</td><td class="es-t">der / einer / meiner Mutter</td><td class="es-t">ihr</td></tr>
 <tr><td>plural</td><td class="es-t">den / meinen Eltern (+n)</td><td class="es-t">ihnen</td></tr></table>
 <p>Pronomes: <span class="es-t">mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</span>.</p>
 <p>Alguns verbos sempre pedem dativo: <span class="es-t">helfen, danken, gratulieren, gehören, gefallen, schmecken, passen, antworten</span>.</p>
 <div class="ex"><span class="es-t">Kannst du <b>mir</b> helfen?</span> · <span class="es-t">Das Buch gehört <b>ihm</b>.</span> · <span class="es-t">Wir gratulieren <b>dir</b>!</span></div>`},
 {t:'mc',q:'Was schenkst du ___ Bruder?',opts:['deinem','deinen','dein'],a:0},
 {t:'mc',q:'Jana hat Geburtstag. Wir schenken ___ Konzertkarten.',opts:['ihr','sie','ihm'],a:0},
 {t:'gap',q:'Ich danke ___ für die Einladung! (Sie – formal)',a:['Ihnen']},
 {t:'gap',q:'Wem gehört der Rucksack? – Er gehört ___. (eu)',a:['mir']},
 {t:'gap',q:'Ich zeige ___ Eltern die Fotos. (meine – dativo plural)',a:['meinen']},
 {t:'order',es:'Kannst du mir bitte das Salz geben',de:'Você pode me passar o sal, por favor?'},
 {t:'tr',de:'Eu dou um livro para o meu pai.',a:['Ich schenke meinem Vater ein Buch.','Ich gebe meinem Vater ein Buch.']},
 {t:'tr',de:'A sopa está gostosa para você? (informal)',a:['Schmeckt dir die Suppe?']}
]},
{id:'l3',title:'Na cozinha – wenn',desc:'der Topf, das Messer, scharf · Nebensätze mit wenn',steps:[
 {t:'vocab',title:'Cozinha e louça',items:[['das Gericht','o prato (comida)'],['die Portion','a porção'],['scharf','apimentado / afiado'],['das Rindfleisch','a carne de boi'],['die Bohne','o feijão'],['die Zitrone','o limão'],['das Eis','o sorvete / o gelo'],['der Teller','o prato (louça)'],['die Gabel','o garfo'],['das Messer','a faca'],['der Löffel','a colher'],['der Topf','a panela'],['die Pfanne','a frigideira'],['das Geschirr','a louça'],['abwaschen','lavar a louça'],['probieren','provar'],['schneiden','cortar'],]},
 {t:'info',title:'wenn',html:`<p><b>wenn</b> = quando (algo que se repete) / se (condição). O verbo vai para o <b>final</b>:</p>
 <div class="ex"><span class="es-t">Ich koche brasilianisch, <b>wenn</b> Freunde zu Besuch <b>kommen</b>.</span></div>
 <div class="ex"><span class="es-t"><b>Wenn</b> du Zeit <b>hast</b>, <b>kannst</b> du mir helfen.</span> – começando com <b>wenn</b>, a segunda parte começa com o verbo.</div>
 <div class="ojo">Para uma vez só no passado se usa <b>als</b> (B1). No A2 basta <b>wenn</b> para o presente e para „sempre que“.</div>`},
 {t:'mc',q:'___ es regnet, bleiben wir zu Hause.',opts:['Wenn','Weil','Dass'],a:0},
 {t:'mc',q:'Wenn ich müde bin, ___',opts:['trinke ich einen Kaffee.','ich trinke einen Kaffee.','ich einen Kaffee trinke.'],a:0},
 {t:'gap',q:'Feijoada ist ein brasilianisches ___ mit Bohnen und Fleisch. (prato)',a:['Gericht']},
 {t:'gap',q:'Kannst du nach dem Essen das Geschirr ___? (lavar a louça)',a:['abwaschen']},
 {t:'match',q:'Ligue.',pairs:[['der Löffel','a colher'],['die Gabel','o garfo'],['das Messer','a faca'],['der Topf','a panela'],['der Teller','o prato (louça)']]},
 {t:'read',title:'Leitura: Lucas kocht für seine Kollegen',text:`Wenn Lucas Heimweh hat, kocht er Feijoada. Für sein Team hat er am Freitag einen großen Topf mitgebracht: schwarze Bohnen, Rindfleisch, Wurst, dazu Reis und Orangen. „Das Gericht ist nicht scharf“, hat er gesagt, „aber es ist sehr schwer – nach einer Portion möchte man schlafen!“ Jana hat zweimal genommen. Frau Hoffmann wollte das Rezept haben. Nur Herr Albers hat nichts gegessen, weil er kein Fleisch isst.`,de:`Quando o Lucas está com saudade de casa, ele cozinha feijoada. Para a equipe dele, na sexta ele levou uma panela grande: feijão-preto, carne de boi, linguiça, com arroz e laranja. „O prato não é apimentado“, ele disse, „mas é muito pesado – depois de uma porção a gente quer dormir!“ A Jana repetiu. A Sra. Hoffmann quis a receita. Só o Sr. Albers não comeu nada, porque não come carne.`},
 {t:'mc',q:'Wann kocht Lucas Feijoada?',opts:['wenn er Heimweh hat','jeden Freitag','wenn er Geburtstag hat'],a:0},
 {t:'mc',q:'Warum hat Herr Albers nichts gegessen?',opts:['Er isst kein Fleisch.','Das Essen war zu scharf.','Er war nicht da.'],a:0},
 {t:'tr',de:'Quando faz sol, eu como sorvete.',a:['Wenn die Sonne scheint, esse ich ein Eis.','Wenn die Sonne scheint, esse ich Eis.','Ich esse ein Eis, wenn die Sonne scheint.','Ich esse Eis, wenn die Sonne scheint.']}
]},
{id:'l4',title:'Ler e escrever: convite de aniversário',desc:'Einladung schreiben · Zu- und Absage',steps:[
 {t:'read',title:'Leitura: Einladung zum 30.',text:`Liebe Freundinnen und Freunde,
ich werde 30 – und das möchte ich mit euch feiern! Die Party findet am Samstag, den 12. Oktober, ab 20 Uhr im Café Lindenblatt statt (Berger Straße 88). Für Essen ist gesorgt, aber über eine Flasche Wein oder Saft freue ich mich. Bitte keine Geschenke – wenn ihr mir etwas schenken wollt, gebt etwas in die Spendenbox für das Tierheim.
Sagt mir bitte bis Mittwoch Bescheid, ob ihr kommt.
Eure Jana`,de:`Queridas amigas e queridos amigos,
vou fazer 30 – e quero comemorar com vocês! A festa acontece no sábado, 12 de outubro, a partir das 20h, no Café Lindenblatt (Berger Straße 88). A comida está garantida, mas uma garrafa de vinho ou suco me deixa feliz. Por favor, nada de presentes – se vocês quiserem me dar algo, coloquem algo na caixa de doação para o abrigo de animais.
Por favor, me avisem até quarta-feira se vocês vêm.
Beijos, Jana`},
 {t:'mc',q:'Was soll man mitbringen?',opts:['etwas zu trinken','ein Geschenk','etwas zu essen'],a:0},
 {t:'mc',q:'Was möchte Jana statt Geschenken?',opts:['Geld für das Tierheim','Blumen','Konzertkarten'],a:0},
 {t:'mc',q:'Bis wann soll man Bescheid sagen?',opts:['bis Mittwoch','bis Samstag','bis zum 12. Oktober'],a:0},
 {t:'free',task:'Responda ao convite da Jana (~30–40 palavras): 1) dê os parabéns e agradeça, 2) diga se você vai e com quem / ou por que não pode, 3) diga o que você leva.',hint:'Liebe Jana, vielen Dank für die Einladung! Ich komme gern / Leider kann ich nicht, weil … Ich bringe … mit. Wenn du Hilfe brauchst, … Bis Samstag! / Alles Gute!',focus:'Dativ (dir, ihr), wenn, weil, Glückwünsche',model:'Liebe Jana,\nvielen Dank für die Einladung! Natürlich komme ich gern – ich bringe Tom mit, wenn das okay ist. Wir bringen eine Flasche Wein und brasilianische Süßigkeiten mit. Wenn du Hilfe brauchst, sag Bescheid!\nBis Samstag,\nLucas'}
]}],
resumen:`<h3>Dativo (Wem?)</h3><table><tr><td>masc./neutro</td><td class="es-t">dem / einem / meinem – ihm</td></tr><tr><td>fem.</td><td class="es-t">der / einer / meiner – ihr</td></tr><tr><td>plural</td><td class="es-t">den / meinen …-n – ihnen</td></tr></table>
<p class="es-t">Ich schenke meiner Mutter einen Schal. · mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</p>
<p>Verbos com dativo: <span class="es-t">helfen, danken, gratulieren, gehören, gefallen, schmecken, passen, antworten</span></p>
<h3>wenn (verbo no final)</h3><p class="es-t">Wenn du Zeit hast, kannst du mir helfen. · Ich koche, wenn Freunde kommen.</p>
<h3>Felicitações</h3><p class="es-t">Herzlichen Glückwunsch! · Alles Gute! · Frohe Weihnachten! · Guten Rutsch! · Frohes neues Jahr!</p>`});

/* ================= KAPITEL 19 · ARBEIT & BEWERBUNG ================= */
LANGS.de.course.units.push({id:'k19',n:'19',level:'A2',title:'Arbeit & Bewerbung',sub:'Formação e experiência · currículo · entrevista de emprego · perguntas indiretas: ob, wann, wo … · ab, bis, nach, während',
goals:['Ausbildung, Studium, Berufserfahrung beschreiben','Ein Lebenslauf: von … bis …, nach dem Studium','Indirekte Fragen: Können Sie mir sagen, ob / wann …?','Ein Vorstellungsgespräch','Ziele und Träume im Beruf'],
situacion:{title:'Entrevista de emprego',npc:'Frau Neumann',scene:'Você se candidatou a uma vaga de desenvolvedor numa empresa em Mainz. A entrevista é por vídeo.',role:'Du bist Frau Neumann, Personalchefin einer IT-Firma in Mainz, freundlich und professionell. Du siezt. Frag nach Ausbildung, Berufserfahrung, Deutschkenntnissen und warum er die Stelle möchte. Beantworte seine Fragen zu Arbeitszeit, Homeoffice und Gehalt kurz. Sprich einfaches Deutsch (A2), benutze indirekte Fragen (Können Sie mir sagen, …?).',goal:'Fale da sua formação e experiência, explique por que quer a vaga e faça duas perguntas indiretas (Können Sie mir sagen, ob …?).'},
placement:[
 {t:'mc',q:'Können Sie mir sagen, ___',opts:['wann der Kurs beginnt?','wann beginnt der Kurs?','beginnt der Kurs wann?'],a:0},
 {t:'mc',q:'Ich weiß nicht, ___ ich die Stelle bekomme.',opts:['ob','wenn','dass'],a:0},
 {t:'mc',q:'„a experiência profissional“',opts:['die Berufserfahrung','die Berufsausbildung','das Berufsziel'],a:0},
 {t:'gap',q:'___ dem Studium habe ich ein Praktikum gemacht. (depois de)',a:['Nach']},
 {t:'mc',q:'Von 2018 ___ 2022 habe ich in São Paulo gearbeitet.',opts:['bis','ab','seit'],a:0},
 {t:'mc',q:'„Eu tenho bons conhecimentos de inglês.“',opts:['Ich habe gute Englischkenntnisse.','Ich habe gute Englischwissen.','Ich kenne gut Englisch.'],a:0}],
lessons:[
{id:'l1',title:'Formação e experiência',desc:'die Ausbildung, das Zeugnis, die Erfahrung …',steps:[
 {t:'vocab',title:'Formação',items:[['die Ausbildung','a formação técnica / o curso profissionalizante'],['die Universität','a universidade'],['das Fach','a matéria / a disciplina'],['der Abschluss','a formatura / o diploma'],['das Zeugnis','o boletim / o certificado'],['die Erfahrung','a experiência'],['die Berufserfahrung','a experiência profissional'],['die Kenntnisse (Pl.)','os conhecimentos'],['der Lebenslauf','o currículo'],['die Bewerbung','a candidatura'],['sich bewerben','candidatar-se'],['das Vorstellungsgespräch','a entrevista de emprego'],['das Gehalt','o salário'],['der Vertrag','o contrato'],['das Projekt','o projeto'],['beenden','terminar / concluir'],['versuchen','tentar'],['der Rentner / die Rentnerin','o aposentado / a aposentada']]},
 {t:'mc',q:'Nach der Schule hat Jana eine ___ als Bankkauffrau gemacht.',opts:['Ausbildung','Universität','Kenntnisse'],a:0},
 {t:'mc',q:'Für die Bewerbung brauche ich einen ___ und meine Zeugnisse.',opts:['Lebenslauf','Vertrag','Abschluss'],a:0},
 {t:'gap',q:'Lucas hat sich bei einer Firma in Mainz ___. (sich bewerben – Perfekt)',a:['beworben']},
 {t:'match',q:'Ligue.',pairs:[['das Gehalt','o salário'],['der Vertrag','o contrato'],['das Zeugnis','o certificado'],['die Erfahrung','a experiência'],['versuchen','tentar']]},
 {t:'info',title:'Tempo no currículo',html:`<table><tr><td class="es-t">von 2015 <b>bis</b> 2019</td><td>de 2015 a 2019</td></tr>
 <tr><td class="es-t"><b>seit</b> 2023</td><td>desde 2023 (e continua)</td></tr>
 <tr><td class="es-t"><b>ab</b> 1. März</td><td>a partir de 1º de março</td></tr>
 <tr><td class="es-t"><b>nach</b> dem Studium</td><td>depois da faculdade (+ dativo)</td></tr>
 <tr><td class="es-t"><b>vor</b> der Ausbildung</td><td>antes da formação (+ dativo)</td></tr>
 <tr><td class="es-t"><b>während</b> des Studiums</td><td>durante a faculdade</td></tr></table>`},
 {t:'gap',q:'Ich kann ___ dem 1. Juni anfangen. (a partir de)',a:['ab']},
 {t:'gap',q:'___ 2023 arbeite ich in Frankfurt. (desde)',a:['Seit']},
 {t:'tr',de:'Depois da faculdade eu trabalhei dois anos em São Paulo.',a:['Nach dem Studium habe ich zwei Jahre in São Paulo gearbeitet.']}
]},
{id:'l2',title:'Perguntas indiretas',desc:'Können Sie mir sagen, ob / wann …?',steps:[
 {t:'info',title:'Perguntas indiretas',html:`<p>Para perguntar de forma mais educada, comece com <span class="es-t">Können Sie mir sagen, …? / Wissen Sie, …? / Ich möchte wissen, …</span> – e o verbo vai para o <b>final</b>:</p>
 <table><tr><td class="es-t">Wann beginnt die Arbeit?</td><td class="es-t">Können Sie mir sagen, <b>wann</b> die Arbeit <b>beginnt</b>?</td></tr>
 <tr><td class="es-t">Wo ist das Büro?</td><td class="es-t">Wissen Sie, <b>wo</b> das Büro <b>ist</b>?</td></tr>
 <tr><td class="es-t">Gibt es Homeoffice?</td><td class="es-t">Ich möchte wissen, <b>ob</b> es Homeoffice <b>gibt</b>.</td></tr></table>
 <div class="ex">Perguntas com sim/não → <b>ob</b> (= se). Perguntas com W- → a palavra W fica: <b>wann, wo, wie, was, warum, wie viel</b> …</div>
 <div class="ojo"><b>ob</b> = „se“ (pergunta) · <b>wenn</b> = „se / quando“ (condição). <span class="es-t">Ich weiß nicht, ob er kommt.</span> ≠ <span class="es-t">Wenn er kommt, …</span></div>`},
 {t:'mc',q:'Wissen Sie, ___ die Stelle noch frei ist?',opts:['ob','wenn','wann ist'],a:0},
 {t:'mc',q:'Können Sie mir sagen, wie viel ___?',opts:['man hier verdient','verdient man hier','man verdient hier'],a:0},
 {t:'gap',q:'Ich möchte wissen, ___ ich im Homeoffice arbeiten kann. (se)',a:['ob']},
 {t:'gap',q:'Können Sie mir sagen, wann das Gespräch ___? (beginnen)',a:['beginnt']},
 {t:'order',es:'Wissen Sie wo die Personalabteilung ist',de:'O senhor sabe onde fica o departamento de pessoal?'},
 {t:'tr',de:'O senhor pode me dizer quando eu posso começar?',a:['Können Sie mir sagen, wann ich anfangen kann?','Können Sie mir sagen, wann ich beginnen kann?']},
 {t:'tr',de:'Eu não sei se ele vem.',a:['Ich weiß nicht, ob er kommt.']},
 {t:'speak',es:'Können Sie mir sagen, ob ich auch im Homeoffice arbeiten kann?',de:'O senhor pode me dizer se eu também posso trabalhar em home office?',tip:'Pergunta de sim/não → <b>ob</b>, verbo no final: <i>kann</i>.'}
]},
{id:'l3',title:'A entrevista',desc:'Vorstellungsgespräch · Ziele und Träume',steps:[
 {t:'vocab',title:'Na entrevista',items:[['die Situation','a situação'],['der Stress','o estresse'],['stressig','estressante'],['das Ziel','o objetivo / a meta'],['unbedingt','de qualquer jeito / sem falta'],['notwendig','necessário'],['nützlich','útil'],['freiwillig','voluntário'],['beraten','aconselhar / dar consultoria'],['die Stärke','o ponto forte'],['die Schwäche','o ponto fraco'],['zuverlässig','confiável'],['flexibel','flexível'],['im Team arbeiten','trabalhar em equipe']]},
 {t:'dialog',place:'Videocall',title:'Entrevista de emprego',scene:'A Sra. Neumann, da área de RH, entrevista você para uma vaga em Mainz.',lines:[
  {n:'Frau Neumann',es:'Guten Tag, Herr Souza. Erzählen Sie doch bitte kurz etwas über sich.',de:'Boa tarde, Sr. Souza. Conte, por favor, um pouco sobre o senhor.'},
  {you:true,opts:[{es:'Gern. Ich habe in São Paulo Informatik studiert und dann drei Jahre als Programmierer gearbeitet. Seit 2023 lebe ich in Frankfurt.',ok:true},{es:'Gern. Ich studiere Informatik in São Paulo seit drei Jahre.',ok:false,why:'Fale da formação no passado (Perfekt) e use <i>seit</i> + dativo: <i>seit drei Jahren</i>.'}]},
  {n:'Frau Neumann',es:'Warum möchten Sie bei uns arbeiten?',de:'Por que o senhor quer trabalhar conosco?'},
  {you:true,opts:[{es:'Weil Ihre Projekte sehr interessant sind und ich gern im Team arbeite.',ok:true},{es:'Weil das Gehalt ist gut.',ok:false,why:'Depois de <i>weil</i> o verbo vai para o final – e é melhor falar dos projetos 😉'}]},
  {n:'Frau Neumann',es:'Haben Sie noch Fragen an uns?',de:'O senhor tem mais perguntas para nós?'},
  {you:true,opts:[{es:'Ja. Können Sie mir sagen, ob man auch im Homeoffice arbeiten kann?',ok:true},{es:'Ja. Kann man im Homeoffice arbeiten, können Sie mir sagen?',ok:false,why:'Pergunta indireta: <i>Können Sie mir sagen, <b>ob</b> man … arbeiten <b>kann</b>?</i>'}]}]},
 {t:'mc',q:'Was ist eine Stärke?',opts:['Ich bin zuverlässig.','Ich komme oft zu spät.','Ich arbeite nicht gern im Team.'],a:0},
 {t:'gap',q:'Mein ___ ist es, in zwei Jahren Teamleiter zu sein. (objetivo)',a:['Ziel']},
 {t:'mc',q:'„Ich möchte unbedingt in Deutschland bleiben.“ bedeutet:',opts:['Ich möchte sehr gern / auf jeden Fall bleiben.','Ich möchte vielleicht bleiben.','Ich möchte nicht bleiben.'],a:0},
 {t:'tr',de:'Meu ponto forte é que eu sou flexível.',a:['Meine Stärke ist, dass ich flexibel bin.']}
]},
{id:'l4',title:'Ler e escrever: anúncio e candidatura',desc:'Stellenanzeige · kurze Bewerbung per E-Mail',steps:[
 {t:'read',title:'Leitura: Stellenanzeige',text:`Wir suchen ab sofort eine/n Softwareentwickler/in (Vollzeit, 40 Std./Woche).
Ihre Aufgaben: Sie entwickeln Apps für unsere Kunden und arbeiten in einem internationalen Team.
Sie haben: ein abgeschlossenes Studium (Informatik oder ähnlich), mindestens zwei Jahre Berufserfahrung, gute Englischkenntnisse. Deutschkenntnisse (A2/B1) sind nützlich, aber nicht notwendig.
Wir bieten: ein gutes Gehalt, flexible Arbeitszeiten, zwei Tage Homeoffice pro Woche und einen kostenlosen Deutschkurs.
Bewerbung bitte per E-Mail an jobs@appwerk-mainz.de`,de:`Procuramos a partir de agora um(a) desenvolvedor(a) de software (tempo integral, 40 h/semana).
Suas tarefas: você desenvolve apps para nossos clientes e trabalha numa equipe internacional.
Você tem: faculdade concluída (informática ou similar), pelo menos dois anos de experiência profissional, bom inglês. Conhecimentos de alemão (A2/B1) são úteis, mas não necessários.
Oferecemos: um bom salário, horários flexíveis, dois dias de home office por semana e um curso de alemão gratuito.
Candidatura por e-mail para jobs@appwerk-mainz.de`},
 {t:'mc',q:'Muss man gut Deutsch sprechen?',opts:['Nein, das ist nicht notwendig.','Ja, man braucht B1.','Ja, man braucht C1.'],a:0},
 {t:'mc',q:'Wie viele Tage kann man zu Hause arbeiten?',opts:['zwei Tage pro Woche','jeden Tag','gar nicht'],a:0},
 {t:'mc',q:'Richtig oder falsch? Die Firma bezahlt einen Deutschkurs.',opts:['richtig','falsch'],a:0},
 {t:'free',task:'Escreva uma e-mail curta de candidatura (~40 palavras) para o anúncio: 1) para qual vaga você se candidata, 2) sua formação e experiência, 3) a partir de quando você pode começar.',hint:'Sehr geehrte Damen und Herren, ich bewerbe mich für die Stelle als … Ich habe … studiert und … Jahre als … gearbeitet. Ich kann ab … anfangen. Mit freundlichen Grüßen',focus:'Perfekt, Zeitangaben (seit, ab, von … bis), formelle E-Mail',model:'Sehr geehrte Damen und Herren,\nich bewerbe mich für die Stelle als Softwareentwickler. Ich habe in São Paulo Informatik studiert und vier Jahre als Programmierer gearbeitet. Seit 2023 lebe ich in Frankfurt. Ich kann ab dem 1. Mai anfangen.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Tempo</h3><p class="es-t">von … bis … · seit 2023 · ab 1. März · nach dem Studium · vor der Ausbildung · während des Studiums</p>
<h3>Perguntas indiretas (verbo no final)</h3><table><tr><td class="es-t">Können Sie mir sagen, wann die Arbeit beginnt?</td></tr><tr><td class="es-t">Ich möchte wissen, ob es Homeoffice gibt.</td></tr></table><p><b>ob</b> = se (pergunta sim/não) · <b>wenn</b> = se/quando (condição)</p>
<h3>Candidatura</h3><p class="es-t">der Lebenslauf · die Bewerbung · sich bewerben (hat sich beworben) · das Vorstellungsgespräch · die Berufserfahrung · die Kenntnisse</p>`});

/* ================= KAPITEL 20 · ÄMTER, POST & BANK ================= */
LANGS.de.course.units.push({id:'k20',n:'20',level:'A2',title:'Ämter, Post & Bank',sub:'Órgãos públicos · formulários · correio · banco · achados e perdidos · verbos com preposição: warten auf, denken an …',
goals:['Auf dem Amt: das Formular, unterschreiben, die Gebühr','Post und Pakete: der Empfänger, abholen, bestätigen','Bank: das Konto, überweisen, die Karte sperren','Verben mit Präposition: warten auf, denken an, sich kümmern um','Etwas verloren: das Fundbüro'],
situacion:{title:'No Bürgeramt',npc:'Sachbearbeiterin',scene:'Você precisa fazer o registro do novo endereço (Ummeldung) no Bürgeramt depois da mudança.',role:'Du bist Sachbearbeiterin im Bürgeramt Frankfurt, sachlich, aber geduldig. Du siezt. Frag nach Ausweis/Pass, Wohnungsgeberbestätigung (Bestätigung vom Vermieter) und dem Datum des Einzugs. Erkläre, dass er das Formular unterschreiben muss und dass die Ummeldung kostenlos ist. Wenn ein Dokument fehlt: Er soll einen neuen Termin online buchen. Sprich einfaches Deutsch (A2).',goal:'Explique que você se mudou, entregue os documentos, pergunte se precisa pagar e o que fazer se faltar um documento.'},
placement:[
 {t:'mc',q:'Ich warte ___ den Bus.',opts:['auf','für','an'],a:0},
 {t:'mc',q:'„Por favor, assine aqui.“',opts:['Bitte unterschreiben Sie hier.','Bitte schreiben Sie unter hier.','Bitte unterschrift hier.'],a:0},
 {t:'gap',q:'Ich denke oft ___ meine Familie in Brasilien.',a:['an']},
 {t:'mc',q:'Meine Kreditkarte ist weg. Ich muss sie ___.',opts:['sperren','überweisen','unterschreiben'],a:0},
 {t:'mc',q:'Wo fragt man nach einer verlorenen Tasche?',opts:['im Fundbüro','im Bürgeramt','in der Reinigung'],a:0},
 {t:'gap',q:'Kannst du dich ___ die Katze kümmern? (cuidar de)',a:['um']}],
lessons:[
{id:'l1',title:'Órgãos públicos e formulários',desc:'das Formular, unterschreiben, die Gebühr',steps:[
 {t:'vocab',title:'No órgão público',items:[['das Amt','o órgão público / a repartição'],['das Bürgeramt','o centro de atendimento ao cidadão'],['die Behörde','a autoridade / o órgão'],['die Anmeldung','o registro / a inscrição'],['ummelden','atualizar o registro (endereço)'],['die Aufenthaltserlaubnis','a autorização de residência'],['die Gebühr','a taxa'],['die Wartenummer','a senha (fila)'],['der Zettel','o papelzinho / o bilhete'],['notieren','anotar'],['die Erlaubnis','a permissão'],['das Stockwerk','o andar']]},
 {t:'mc',q:'Bitte füllen Sie das ___ aus und unterschreiben Sie unten.',opts:['Formular','Stockwerk','Amt'],a:0},
 {t:'mc',q:'Mein Pass ist nur noch bis März ___.',opts:['gültig','kostenlos','notwendig'],a:0},
 {t:'gap',q:'Für den neuen Ausweis muss man eine ___ von 37 Euro bezahlen. (taxa)',a:['Gebühr']},
 {t:'match',q:'Ligue.',pairs:[['die Unterschrift','a assinatura'],['der Zettel','o papelzinho'],['notieren','anotar'],['das Stockwerk','o andar']]},
 {t:'read',hideText:true,title:'Ouvir: Im Bürgeramt',intro:'Você está esperando no Bürgeramt. Ouça o aviso.',text:`Liebe Kundinnen und Kunden, bitte ziehen Sie am Eingang eine Wartenummer. Für Ausweise und Pässe gehen Sie bitte in den zweiten Stock, Zimmer 204. Ummeldungen machen wir im Erdgeschoss. Bitte haben Sie alle Dokumente bereit: Ihren Ausweis oder Pass und die Bestätigung von Ihrem Vermieter. Heute schließen wir schon um 13 Uhr.`,de:`Prezados clientes, por favor peguem uma senha na entrada. Para carteiras de identidade e passaportes, vão ao segundo andar, sala 204. Atualizações de endereço fazemos no térreo. Por favor, tenham todos os documentos em mãos: sua identidade ou passaporte e a declaração do seu locador. Hoje fechamos já às 13h.`},
 {t:'mc',q:'Wo macht man die Ummeldung?',opts:['im Erdgeschoss','im zweiten Stock','in Zimmer 204'],a:0},
 {t:'mc',q:'Was braucht man für die Ummeldung?',opts:['den Pass und die Bestätigung vom Vermieter','nur eine Wartenummer','ein Foto'],a:0},
 {t:'tr',de:'Onde eu tenho que assinar?',a:['Wo muss ich unterschreiben?']}
]},
{id:'l2',title:'Correio e banco',desc:'der Empfänger, abholen · das Konto, überweisen',steps:[
 {t:'vocab',title:'Correio e banco',items:[['der Empfänger / die Empfängerin','o destinatário / a destinatária'],['die Sendung','a encomenda / o programa (TV, rádio)'],['die Sendungsnummer','o código de rastreio'],['bestätigen','confirmar'],['die Bestätigung','a confirmação'],['die Filiale','a agência / a filial'],['die Überweisung','a transferência'],['abheben','sacar (dinheiro)'],['der Geldautomat','o caixa eletrônico'],['die Kreditkarte','o cartão de crédito'],['sperren','bloquear'],['die Geheimzahl','a senha (PIN)'],['der Kredit','o empréstimo'],['kriegen','receber / conseguir (coloquial)'],['drücken','apertar']]},
 {t:'mc',q:'Ich habe die Miete schon ___.',opts:['überwiesen','abgehoben','gesperrt'],a:0},
 {t:'mc',q:'Am ___ kann man Geld abheben.',opts:['Geldautomaten','Empfänger','Kredit'],a:0},
 {t:'gap',q:'Meine Karte ist gestohlen! Ich muss sie sofort ___. (bloquear)',a:['sperren']},
 {t:'mc',q:'„Ich hab ein Paket gekriegt.“ – kriegen ist hier:',opts:['bekommen (umgangssprachlich)','schicken','öffnen'],a:0},
 {t:'dialog',place:'Post',title:'Buscar um pacote',scene:'Você não estava em casa e recebeu um aviso: o pacote está na agência dos correios.',lines:[
  {n:'Mitarbeiter',es:'Guten Tag, was kann ich für Sie tun?',de:'Bom dia, como posso ajudar?'},
  {you:true,opts:[{es:'Guten Tag, ich möchte ein Paket abholen. Hier ist die Benachrichtigung.',ok:true},{es:'Guten Tag, ich möchte ein Paket abheben.',ok:false,why:'<i>abheben</i> = sacar dinheiro. Pacote → <i>abholen</i>.'}]},
  {n:'Mitarbeiter',es:'Danke. Haben Sie Ihren Ausweis dabei?',de:'Obrigado. O senhor está com sua identidade?'},
  {you:true,opts:[{es:'Ja, hier ist mein Pass.',ok:true},{es:'Ja, ich bin mein Pass.',ok:false,why:'<i>Hier ist mein Pass.</i>'}]},
  {n:'Mitarbeiter',es:'Gut. Bitte unterschreiben Sie hier. – So, hier ist Ihr Paket.',de:'Certo. Por favor, assine aqui. – Pronto, aqui está seu pacote.'},
  {you:true,opts:[{es:'Vielen Dank! Schönen Tag noch!',ok:true},{es:'Bitte schön!',ok:false,why:'Quem agradece é você: <i>Vielen Dank!</i>'}]}]},
 {t:'tr',de:'Eu gostaria de abrir uma conta.',a:['Ich möchte ein Konto eröffnen.','Ich möchte gern ein Konto eröffnen.','Ich würde gern ein Konto eröffnen.']},
 {t:'tr',de:'Você pode confirmar o horário?',a:['Kannst du den Termin bestätigen?','Können Sie den Termin bestätigen?']}
]},
{id:'l3',title:'Verbos com preposição',desc:'warten auf, denken an, sich kümmern um …',steps:[
 {t:'info',title:'Verbos com preposição fixa',html:`<p>Muitos verbos alemães vêm com uma preposição fixa – é melhor aprender juntos:</p>
 <table><tr><td class="es-t">warten <b>auf</b> + Akk.</td><td>esperar por</td><td class="es-t">Ich warte auf den Bus.</td></tr>
 <tr><td class="es-t">denken <b>an</b> + Akk.</td><td>pensar em</td><td class="es-t">Ich denke an dich.</td></tr>
 <tr><td class="es-t">sich freuen <b>auf</b> + Akk.</td><td>estar ansioso por</td><td class="es-t">Ich freue mich auf den Urlaub.</td></tr>
 <tr><td class="es-t">sich freuen <b>über</b> + Akk.</td><td>ficar feliz com</td><td class="es-t">Ich freue mich über das Geschenk.</td></tr>
 <tr><td class="es-t">sich kümmern <b>um</b> + Akk.</td><td>cuidar de</td><td class="es-t">Sie kümmert sich um die Kinder.</td></tr>
 <tr><td class="es-t">sprechen <b>über</b> + Akk.</td><td>falar sobre</td><td class="es-t">Wir sprechen über das Projekt.</td></tr>
 <tr><td class="es-t">sich interessieren <b>für</b> + Akk.</td><td>interessar-se por</td><td class="es-t">Er interessiert sich für Kunst.</td></tr>
 <tr><td class="es-t">fragen <b>nach</b> + Dat.</td><td>perguntar por</td><td class="es-t">Er fragt nach dem Weg.</td></tr>
 <tr><td class="es-t">sich anmelden <b>für</b> + Akk.</td><td>inscrever-se em</td><td class="es-t">Ich melde mich für den Kurs an.</td></tr></table>
 <div class="ojo">A preposição em português muitas vezes é outra: „pensar <b>em</b>“ = denken <b>an</b>, „esperar <b>por</b>“ = warten <b>auf</b>.</div>`},
 {t:'mc',q:'Wir warten schon seit einer Stunde ___ das Paket.',opts:['auf','für','an'],a:0},
 {t:'mc',q:'Interessierst du dich ___ Fußball?',opts:['für','über','an'],a:0},
 {t:'gap',q:'Ich freue mich ___ deinen Besuch nächste Woche! (futuro)',a:['auf']},
 {t:'gap',q:'Wer kümmert sich ___ die Pflanzen, wenn du im Urlaub bist?',a:['um']},
 {t:'gap',q:'Ein Tourist hat ___ dem Weg zum Bahnhof gefragt.',a:['nach']},
 {t:'order',es:'Im Meeting haben wir über das neue Projekt gesprochen',de:'Na reunião falamos sobre o novo projeto.'},
 {t:'tr',de:'Eu penso muito na minha família.',a:['Ich denke oft an meine Familie.','Ich denke viel an meine Familie.']},
 {t:'tr',de:'Ela cuida da mãe dela.',a:['Sie kümmert sich um ihre Mutter.']}
]},
{id:'l4',title:'Achados e perdidos',desc:'das Fundbüro · Verlustmeldung',steps:[
 {t:'vocab',title:'Perdi algo',items:[['das Fundbüro','os achados e perdidos'],['die Fundsachen (Pl.)','os objetos achados'],['verlieren','perder'],['finden','achar'],['die Geldbörse','a carteira'],['die Webseite','o site'],['der Service','o atendimento / o serviço'],['die Mailbox','a caixa postal (celular)'],['informieren','informar'],['zumachen','fechar']]},
 {t:'read',title:'Leitura: Fundbüro Frankfurt',text:`Sie haben etwas in Bus oder Bahn verloren? Melden Sie es online auf unserer Webseite oder kommen Sie ins Fundbüro (Mainzer Landstraße 323, Erdgeschoss). Öffnungszeiten: Montag bis Freitag 8 bis 15 Uhr, Donnerstag bis 18 Uhr. Am Wochenende machen wir zu. Bitte bringen Sie Ihren Ausweis mit. Für Fundsachen bis 50 Euro Wert bezahlen Sie eine Gebühr von 5 Euro. Wir informieren Sie per E-Mail, wenn wir Ihre Sache gefunden haben.`,de:`Você perdeu algo no ônibus ou no trem? Comunique online no nosso site ou venha aos achados e perdidos (Mainzer Landstraße 323, térreo). Horário: segunda a sexta das 8h às 15h, quinta até as 18h. No fim de semana fechamos. Por favor, traga sua identidade. Para objetos de até 50 euros de valor você paga uma taxa de 5 euros. Nós informamos por e-mail quando acharmos o seu objeto.`},
 {t:'mc',q:'Wann kann man am Donnerstag ins Fundbüro gehen?',opts:['von 8 bis 18 Uhr','von 8 bis 15 Uhr','gar nicht'],a:0},
 {t:'mc',q:'Wie erfährt man, dass die Sache gefunden wurde?',opts:['per E-Mail','per Brief','auf der Mailbox'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Samstag ist das Fundbüro geöffnet.',opts:['falsch','richtig'],a:0},
 {t:'free',task:'Você esqueceu a mochila no trem. Escreva uma mensagem curta (~30–40 palavras) para os achados e perdidos: 1) o que você perdeu e onde/quando, 2) como é a mochila e o que tinha dentro, 3) como podem entrar em contato com você.',hint:'Sehr geehrte Damen und Herren, am … habe ich im Zug … meinen Rucksack verloren. Er ist … Darin waren … Bitte informieren Sie mich per E-Mail / unter der Nummer … Mit freundlichen Grüßen',focus:'Perfekt, Adjektivendungen, Präpositionen, formelle Nachricht',model:'Sehr geehrte Damen und Herren,\nam Montag habe ich im Zug von Frankfurt nach Mainz meinen Rucksack verloren. Er ist schwarz und ziemlich groß. Darin waren mein Laptop und ein blauer Schirm. Bitte informieren Sie mich per E-Mail oder unter 0151 234 567.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Órgãos públicos</h3><p class="es-t">das Formular ausfüllen · unterschreiben · die Gebühr · der Ausweis · gültig · ummelden · die Wartenummer</p>
<h3>Correio e banco</h3><p class="es-t">ein Paket abholen · der Empfänger · das Konto · Geld überweisen / abheben · die Karte sperren</p>
<h3>Verbos com preposição</h3><table><tr><td class="es-t">warten auf · denken an · sich freuen auf/über · sich kümmern um · sprechen über · sich interessieren für · fragen nach · sich anmelden für</td></tr></table>`});

/* ================= KAPITEL 21 · FREIZEIT, KULTUR & MEDIEN ================= */
LANGS.de.course.units.push({id:'k21',n:'21',level:'A2',title:'Freizeit, Kultur & Medien',sub:'Teatro, arte, música · TV, revistas, internet · jemand, niemand, etwas, nichts, überall · welch- / was für ein',
goals:['Kultur: das Theater, die Ausstellung, das Instrument','Medien: die Sendung, die Zeitschrift, surfen, chatten','Meinungen: spannend, langweilig, berühmt, beliebt','jemand / niemand / etwas / nichts / überall / nirgends','Welcher Film? – Was für ein Film?','Einen Freizeittipp geben'],
situacion:{title:'O que vamos fazer no sábado?',npc:'Jana',scene:'Você e a Jana querem sair no sábado. Cada um tem uma ideia diferente.',role:'Du bist Jana, Lucas’ Kollegin und Freundin in Frankfurt, sportlich und kulturinteressiert. Du duzt. Schlag eine Ausstellung im Städel-Museum vor, Lucas mag vielleicht lieber Kino oder ein Konzert. Diskutiert: Was ist spannend, was langweilig? Was für eine Ausstellung? Wann, wo, wie teuer? Am Ende einigt ihr euch. Benutze jemand/niemand/etwas/nichts und „Was für ein …?“. Sprich einfaches Deutsch (A2).',goal:'Proponha uma atividade, dê sua opinião (spannend, langweilig …), pergunte „Was für …?“ e cheguem a um acordo.'},
placement:[
 {t:'mc',q:'Ist ___ zu Hause? – Nein, niemand.',opts:['jemand','etwas','nichts'],a:0},
 {t:'mc',q:'___ Film möchtest du sehen? – Den neuen Krimi.',opts:['Welchen','Welcher','Was für'],a:0},
 {t:'mc',q:'Ich habe ___ gehört, die Musik war zu laut.',opts:['nichts','niemand','nirgends'],a:0},
 {t:'gap',q:'___ für eine Zeitschrift liest du? (Was)',a:['Was']},
 {t:'mc',q:'Der Film war so ___, ich bin fast eingeschlafen.',opts:['langweilig','spannend','aufregend'],a:0},
 {t:'mc',q:'„O ator é muito famoso.“',opts:['Der Schauspieler ist sehr berühmt.','Der Schauspieler ist sehr beliebt.','Der Schauspieler ist sehr bekannt gemacht.'],a:0}],
lessons:[
{id:'l1',title:'Cultura e opiniões',desc:'das Theater, die Ausstellung · spannend, berühmt',steps:[
 {t:'vocab',title:'Cultura',items:[['das Theater','o teatro'],['die Oper','a ópera'],['die Kunst','a arte'],['die Ausstellung','a exposição'],['das Instrument','o instrumento'],['das Klavier','o piano'],['die Gitarre','o violão / a guitarra'],['der Schauspieler / die Schauspielerin','o ator / a atriz'],['spannend','emocionante / com suspense'],['langweilig','chato'],['aufregend','empolgante'],['berühmt','famoso'],['beliebt','popular / querido'],['fantastisch','fantástico'],['furchtbar','horrível'],['komisch','engraçado / estranho']]},
 {t:'mc',q:'Im Städel-Museum gibt es eine neue ___ mit Bildern von Picasso.',opts:['Ausstellung','Sendung','Zeitschrift'],a:0},
 {t:'mc',q:'Der Krimi war so ___ – ich wollte wissen, wer der Mörder ist!',opts:['spannend','langweilig','furchtbar'],a:0},
 {t:'gap',q:'Jana spielt seit zehn Jahren ___. Sie hat ein Klavier zu Hause. (piano)',a:['Klavier']},
 {t:'match',q:'Ligue.',pairs:[['berühmt','famoso'],['beliebt','popular'],['langweilig','chato'],['komisch','engraçado / estranho'],['der Eintritt','a entrada']]},
 {t:'info',title:'Welcher? – Was für ein?',html:`<table><tr><td class="es-t"><b>Welcher</b> Film? – <b>Der</b> neue Krimi.</td><td>Qual (de um grupo conhecido)? → resposta com <b>der/die/das</b></td></tr>
 <tr><td class="es-t"><b>Was für ein</b> Film? – <b>Ein</b> Krimi.</td><td>Que tipo de …? → resposta com <b>ein/eine</b></td></tr></table>
 <div class="ex"><span class="es-t">welcher / welche / welches</span> mudam como <i>der/die/das</i>: <span class="es-t">Welchen Film siehst du?</span> · <span class="es-t">Was für eine Ausstellung ist das?</span></div>`},
 {t:'mc',q:'___ Musik hörst du gern? – Rock und Samba.',opts:['Was für','Welche','Welcher'],a:0},
 {t:'mc',q:'___ Jacke gehört dir, die rote oder die blaue?',opts:['Welche','Was für eine','Welcher'],a:0},
 {t:'tr',de:'Que tipo de filme você gosta de ver?',a:['Was für Filme siehst du gern?','Was für einen Film siehst du gern?','Was für Filme schaust du gern?']}
]},
{id:'l2',title:'Mídia',desc:'die Sendung, die Zeitschrift, surfen, chatten',steps:[
 {t:'vocab',title:'Mídia',items:[['das Programm','a programação'],['die Nachrichten (Pl.)','o noticiário'],['die Zeitschrift','a revista'],['der Titel','o título'],['das Interview','a entrevista'],['der Bericht','a reportagem'],['berichten','relatar'],['das Blog','o blog'],['surfen','navegar (internet) / surfar'],['chatten','conversar online'],['der Witz','a piada'],['das Rätsel','o enigma / as palavras cruzadas'],['das Quiz','o quiz'],['die Kamera','a câmera'],['das Comic','a história em quadrinhos']]},
 {t:'mc',q:'Um 20 Uhr kommen im Fernsehen die ___.',opts:['Nachrichten','Rätsel','Comics'],a:0},
 {t:'mc',q:'Abends ___ Lucas mit seiner Familie in Brasilien.',opts:['chattet','surft','berichtet'],a:0},
 {t:'gap',q:'Im Zug lese ich gern eine ___. (revista)',a:['Zeitschrift']},
 {t:'read',title:'Leitura: Fernsehprogramm',text:`20:00 Tagesschau – Nachrichten
20:15 Tatort: „Tod am Main“ – Krimi aus Frankfurt. Kommissarin Weber sucht einen Mörder in der Bankenwelt. Sehr spannend!
21:45 Wer weiß es? – Das große Quiz mit Fragen aus Sport, Kunst und Geschichte.
22:30 Musik am Abend – Interview mit der berühmten Sängerin Lena Hoffmann und Live-Konzert.
23:45 Comedy-Nacht – die besten Witze des Jahres`,de:`20:00 Tagesschau – noticiário
20:15 Tatort: „Morte no Meno“ – série policial de Frankfurt. A comissária Weber procura um assassino no mundo dos bancos. Muito emocionante!
21:45 Wer weiß es? – o grande quiz com perguntas de esporte, arte e história.
22:30 Música à noite – entrevista com a famosa cantora Lena Hoffmann e show ao vivo.
23:45 Noite de comédia – as melhores piadas do ano`},
 {t:'mc',q:'Sie möchten etwas lachen. Was sehen Sie?',opts:['Comedy-Nacht','Tatort','Tagesschau'],a:0},
 {t:'mc',q:'Wann gibt es ein Interview?',opts:['um 22:30 Uhr','um 20:15 Uhr','um 21:45 Uhr'],a:0},
 {t:'tr',de:'Eu leio as notícias na internet.',a:['Ich lese die Nachrichten im Internet.']}
]},
{id:'l3',title:'Alguém, ninguém, algo, nada',desc:'jemand, niemand, etwas, nichts, überall, nirgends',steps:[
 {t:'info',title:'Pronomes indefinidos',html:`<table><tr><th>pessoas</th><th>coisas</th><th>lugares</th></tr>
 <tr><td class="es-t">jemand = alguém</td><td class="es-t">etwas = algo</td><td class="es-t">irgendwo = em algum lugar</td></tr>
 <tr><td class="es-t">niemand = ninguém</td><td class="es-t">nichts = nada</td><td class="es-t">nirgends = em lugar nenhum</td></tr>
 <tr><td class="es-t">alle = todos</td><td class="es-t">alles = tudo</td><td class="es-t">überall = em todo lugar</td></tr></table>
 <div class="ojo">Em alemão só existe <b>uma</b> negação: <span class="es-t">Ich habe <b>nichts</b> gesehen.</span> = Eu não vi nada. (nunca „nicht nichts“!)</div>
 <div class="ex"><span class="es-t">Hast du etwas gegessen? – Nein, nichts.</span> · <span class="es-t">Ist jemand da? – Nein, niemand.</span></div>`},
 {t:'mc',q:'Ich habe meinen Schlüssel gesucht, aber ich habe ihn ___ gefunden.',opts:['nirgends','niemand','nichts'],a:0},
 {t:'mc',q:'Hat ___ meine Brille gesehen?',opts:['jemand','etwas','überall'],a:0},
 {t:'gap',q:'Im Kino war ___ – der Film war furchtbar. (ninguém)',a:['niemand']},
 {t:'gap',q:'Möchtest du ___ trinken? (algo)',a:['etwas']},
 {t:'gap',q:'In Frankfurt gibt es ___ Baustellen. (em todo lugar)',a:['überall']},
 {t:'tr',de:'Eu não entendi nada.',a:['Ich habe nichts verstanden.']},
 {t:'tr',de:'Alguém pode me ajudar?',a:['Kann mir jemand helfen?']},
 {t:'speak',es:'Ich habe überall gesucht, aber ich habe meinen Schlüssel nirgends gefunden.',de:'Procurei em todo lugar, mas não achei minha chave em lugar nenhum.',tip:'Só uma negação: <i>nirgends</i> – sem <i>nicht</i>.'}
]},
{id:'l4',title:'Ouvir e escrever: dica de lazer',desc:'Radiotipp · Nachricht an einen Freund',steps:[
 {t:'vocab',title:'Lazer',items:[['der Zoo','o zoológico'],['der Zirkus','o circo'],['das Pferd','o cavalo'],['der Sportplatz','o campo de esportes'],['der Volleyball','o vôlei'],['der Basketball','o basquete'],['der Ski','o esqui'],['basteln','fazer trabalhos manuais'],['der Wettbewerb','a competição / o concurso']]},
 {t:'read',hideText:true,title:'Ouvir: Freizeittipps im Radio',intro:'Ouça as dicas de fim de semana da rádio.',text:`Und hier unsere Tipps fürs Wochenende! Für Familien: Am Samstag gibt es im Zoo ein großes Fest – Kinder unter zwölf Jahren haben freien Eintritt, und um 15 Uhr dürfen sie auf Pferden reiten. Für Sportfans: Am Sonntag findet am Sportplatz Bornheim ein Volleyball-Wettbewerb statt. Jeder darf mitspielen, Anmeldung bis Freitag. Und für alle, die gern basteln: Die Stadtbibliothek bietet am Samstag von 10 bis 13 Uhr einen kostenlosen Workshop an.`,de:`E aqui as nossas dicas para o fim de semana! Para famílias: no sábado tem uma grande festa no zoológico – crianças com menos de doze anos não pagam entrada, e às 15h elas podem andar a cavalo. Para os fãs de esporte: no domingo acontece no campo de Bornheim uma competição de vôlei. Todo mundo pode jogar, inscrição até sexta. E para todos que gostam de trabalhos manuais: a biblioteca municipal oferece no sábado das 10h às 13h um workshop gratuito.`},
 {t:'mc',q:'Wer bezahlt im Zoo keinen Eintritt?',opts:['Kinder unter zwölf Jahren','alle Familien','Sportfans'],a:0},
 {t:'mc',q:'Bis wann muss man sich für den Volleyball-Wettbewerb anmelden?',opts:['bis Freitag','bis Samstag','bis Sonntag'],a:0},
 {t:'mc',q:'Was kostet der Workshop in der Bibliothek?',opts:['nichts','5 Euro','12 Euro'],a:0},
 {t:'free',task:'Escreva uma mensagem (~30–40 palavras) para o Tom: 1) proponha uma das atividades do rádio, 2) diga por que você acha interessante, 3) combine hora e lugar para se encontrarem.',hint:'Hallo Tom, hast du am … Zeit? Am Sonntag gibt es … Ich finde das …, weil … Wollen wir uns um … am … treffen? Bis dann!',focus:'Vorschläge machen, weil/wenn, Zeit- und Ortsangaben',model:'Hallo Tom,\nhast du am Sonntag Zeit? Am Sportplatz Bornheim gibt es einen Volleyball-Wettbewerb. Ich finde das super, weil jeder mitspielen darf. Wollen wir uns um zehn Uhr vor dem Sportplatz treffen? Ich melde uns bis Freitag an.\nBis dann!\nLucas'}
]}],
resumen:`<h3>Cultura e opinião</h3><p class="es-t">das Theater · die Ausstellung · das Instrument · spannend · langweilig · aufregend · berühmt · beliebt · komisch</p>
<h3>Welcher? – Was für ein?</h3><p class="es-t">Welcher Film? – Der neue Krimi. · Was für ein Film? – Ein Krimi.</p>
<h3>Indefinidos (uma só negação!)</h3><table><tr><td class="es-t">jemand – niemand – alle</td></tr><tr><td class="es-t">etwas – nichts – alles</td></tr><tr><td class="es-t">irgendwo – nirgends – überall</td></tr></table>`});

/* ================= KAPITEL 22 · MENSCHEN & BEZIEHUNGEN ================= */
LANGS.de.course.units.push({id:'k22',n:'22',level:'A2',title:'Menschen & Beziehungen',sub:'Descrever pessoas · caráter · família e filhos · dar opinião, concordar e discordar · conselhos: Du solltest …',
goals:['Personen beschreiben: Aussehen und Charakter','Familie und Kinder: der Kindergarten, das Taschengeld','Meinung sagen: Ich bin einverstanden. Das ist mir egal.','Ratschläge geben: Du solltest … (Konjunktiv II von sollen)','Früher und heute: damals'],
situacion:{title:'Conselho para um amigo',npc:'Tom',scene:'O Tom está nervoso: ele vai conhecer os pais da namorada no domingo e pede conselhos a você.',role:'Du bist Tom, Lucas’ Freund in Frankfurt. Du duzt. Du bist nervös, weil du am Sonntag die Eltern deiner Freundin Lea kennenlernst. Der Vater ist sehr streng, die Mutter sehr nett. Frag Lucas um Rat (Was soll ich anziehen? Was soll ich mitbringen? Worüber soll ich reden?). Reagiere auf seine Ratschläge mit „Ich bin einverstanden“ oder „Das finde ich nicht so gut, weil …“. Sprich einfaches Deutsch (A2).',goal:'Dê ao Tom pelo menos três conselhos com „Du solltest …“ e reaja às dúvidas dele.'},
placement:[
 {t:'mc',q:'„Você deveria dormir mais.“',opts:['Du solltest mehr schlafen.','Du sollst mehr schlafen.','Du solltest mehr schläfst.'],a:0},
 {t:'mc',q:'Mein Chef ist sehr ___. Wir dürfen nie zu spät kommen.',opts:['streng','faul','blond'],a:0},
 {t:'mc',q:'Wollen wir Pizza bestellen? – ___',opts:['Ja, einverstanden!','Ja, ich bin einverstehen.','Ja, das ist mir einverstanden.'],a:0},
 {t:'gap',q:'Kino oder Theater? – Das ist mir ___. (tanto faz)',a:['egal']},
 {t:'mc',q:'„Naquela época eu morava em São Paulo.“',opts:['Damals habe ich in São Paulo gewohnt.','Dann habe ich in São Paulo gewohnt.','Damit habe ich in São Paulo gewohnt.'],a:0},
 {t:'mc',q:'Lena ist ___. Im Juni bekommt sie ein Baby.',opts:['schwanger','schwach','streng'],a:0}],
lessons:[
{id:'l1',title:'Descrever pessoas',desc:'Aussehen und Charakter',steps:[
 {t:'vocab',title:'Aparência e caráter',items:[['das Gesicht','o rosto'],['blond','loiro'],['stark','forte'],['schwach','fraco'],['sympathisch','simpático'],['nett','legal / gentil'],['klug','inteligente / esperto'],['intelligent','inteligente'],['faul','preguiçoso'],['fleißig','esforçado / trabalhador'],['streng','rígido / severo'],['nervös','nervoso'],['ehrlich','honesto'],['blöd','bobo / chato (coloquial)'],['reich','rico'],['arm','pobre'],['lügen','mentir'],['die Lüge','a mentira'],['wahr','verdadeiro']]},
 {t:'mc',q:'Jana hilft immer allen. Sie ist sehr ___.',opts:['nett','faul','blöd'],a:0},
 {t:'mc',q:'Mein Bruder macht nie seine Hausaufgaben. Er ist ___.',opts:['faul','fleißig','streng'],a:0},
 {t:'gap',q:'Das ist nicht ___! Du lügst! (verdadeiro)',a:['wahr']},
 {t:'match',q:'Opostos.',pairs:[['stark','schwach'],['reich','arm'],['faul','fleißig'],['nervös','ruhig'],['die Wahrheit','die Lüge']]},
 {t:'read',title:'Leitura: Meine neue Kollegin',text:`Seit Montag haben wir eine neue Kollegin im Team: Mira. Sie ist Mitte zwanzig, hat lange blonde Haare und ein sehr freundliches Gesicht. Mira kommt aus Polen und spricht fantastisch Deutsch – viel besser als ich! Sie ist klug und sehr fleißig, aber auch lustig: In der Pause erzählt sie die besten Witze. Nur am Morgen ist sie ein bisschen nervös, weil sie noch nicht alle Kollegen kennt. Ich finde sie total sympathisch.`,de:`Desde segunda temos uma colega nova na equipe: a Mira. Ela tem uns vinte e cinco anos, cabelo loiro comprido e um rosto muito simpático. A Mira vem da Polônia e fala alemão fantasticamente – muito melhor que eu! Ela é inteligente e muito esforçada, mas também engraçada: no intervalo ela conta as melhores piadas. Só de manhã ela fica um pouco nervosa, porque ainda não conhece todos os colegas. Eu acho ela super simpática.`},
 {t:'mc',q:'Wie sieht Mira aus?',opts:['Sie hat lange blonde Haare.','Sie hat kurze schwarze Haare.','Sie trägt eine Brille.'],a:0},
 {t:'mc',q:'Warum ist Mira am Morgen nervös?',opts:['Sie kennt noch nicht alle Kollegen.','Ihr Deutsch ist schlecht.','Sie ist faul.'],a:0},
 {t:'tr',de:'Meu chefe é rígido, mas justo.',a:['Mein Chef ist streng, aber fair.','Meine Chefin ist streng, aber fair.']},
 {t:'speak',es:'Meine beste Freundin ist sehr sympathisch, klug und ehrlich.',de:'Minha melhor amiga é muito simpática, inteligente e honesta.',tip:'Depois de <i>ist</i>: adjetivo <b>sem</b> terminação.'}
]},
{id:'l2',title:'Família e filhos',desc:'der Kindergarten, das Taschengeld, der Haushalt',steps:[
 {t:'vocab',title:'Família e casa',items:[['der Ehepartner / die Ehepartnerin','o cônjuge'],['schwanger','grávida'],['der Babysitter / die Babysitterin','a babá / o babá'],['der Kindergarten','o jardim de infância'],['das Taschengeld','a mesada'],['der Haushalt','as tarefas de casa'],['putzen','limpar / faxinar'],['leihen','emprestar / pegar emprestado'],['streiten','brigar / discutir'],['sich verstehen','dar-se bem'],['erziehen','educar (filhos)'],['zuhören','escutar (com atenção)'],['reden','conversar / falar']]},
 {t:'mc',q:'Die Kinder sind von 8 bis 14 Uhr im ___.',opts:['Kindergarten','Haushalt','Taschengeld'],a:0},
 {t:'mc',q:'Kannst du mir 20 Euro ___? Ich gebe sie dir morgen zurück.',opts:['leihen','putzen','zuhören'],a:0},
 {t:'gap',q:'Am Samstag ___ wir immer die ganze Wohnung. (putzen)',a:['putzen']},
 {t:'gap',q:'Lucas und Tom ___ sich sehr gut. (sich verstehen)',a:['verstehen']},
 {t:'read',hideText:true,title:'Ouvir: Gespräch über Taschengeld',intro:'Ouça a conversa entre duas mães no parquinho.',text:`– Sag mal, Sabine, wie viel Taschengeld bekommt eigentlich deine Tochter? – Lina ist jetzt zehn, sie bekommt 15 Euro im Monat. Dafür muss sie aber auch im Haushalt helfen: Sie räumt ihr Zimmer auf und bringt den Müll runter. – 15 Euro? Mein Sohn will 20, weil seine Freunde so viel bekommen. – Das finde ich ein bisschen viel. Aber am wichtigsten ist, dass die Kinder lernen, mit Geld umzugehen.`,de:`– Fala aí, Sabine, quanto de mesada a sua filha recebe? – A Lina tem dez anos agora, ela recebe 15 euros por mês. Mas em troca ela tem que ajudar nas tarefas de casa: arruma o quarto e leva o lixo para baixo. – 15 euros? Meu filho quer 20, porque os amigos dele recebem isso. – Acho um pouco demais. Mas o mais importante é que as crianças aprendam a lidar com dinheiro.`},
 {t:'mc',q:'Wie viel Taschengeld bekommt Lina?',opts:['15 Euro im Monat','20 Euro im Monat','10 Euro in der Woche'],a:0},
 {t:'mc',q:'Was macht Lina im Haushalt?',opts:['Sie räumt ihr Zimmer auf und bringt den Müll runter.','Sie kocht und putzt das Bad.','Sie geht einkaufen.'],a:0},
 {t:'tr',de:'Você pode me emprestar sua bicicleta?',a:['Kannst du mir dein Fahrrad leihen?','Kannst du mir dein Rad leihen?']}
]},
{id:'l3',title:'Opinião e conselhos',desc:'einverstanden, egal · Du solltest …',steps:[
 {t:'vocab',title:'Opinião',items:[['die Meinung','a opinião'],['meiner Meinung nach','na minha opinião'],['einverstanden','de acordo'],['egal','tanto faz'],['der Vorschlag','a sugestão / a proposta'],['vorschlagen','sugerir'],['die Ahnung','a noção / a ideia'],['Keine Ahnung!','Não faço ideia!'],['raten','aconselhar / adivinhar'],['der Rat','o conselho'],['wahrscheinlich','provavelmente'],['besonders','especialmente'],['wenigstens','pelo menos']]},
 {t:'info',title:'Concordar, discordar e aconselhar',html:`<table><tr><th>concordar</th><th>discordar</th></tr>
 <tr><td class="es-t">Ich bin einverstanden.</td><td class="es-t">Da bin ich anderer Meinung.</td></tr>
 <tr><td class="es-t">Das finde ich auch.</td><td class="es-t">Das finde ich nicht so gut, weil …</td></tr>
 <tr><td class="es-t">Gute Idee!</td><td class="es-t">Ich weiß nicht …</td></tr></table>
 <p><b>Conselho</b> com <span class="es-t">sollte</span> (Konjunktiv II de <i>sollen</i>):</p>
 <table><tr><td class="es-t">ich / er / sie sollte</td><td class="es-t">du solltest</td><td class="es-t">wir / sie / Sie sollten</td></tr></table>
 <div class="ex"><span class="es-t">Du <b>solltest</b> mehr schlafen.</span> = Você deveria dormir mais. · <span class="es-t">An deiner Stelle würde ich …</span> = No seu lugar, eu …</div>`},
 {t:'mc',q:'Du bist immer müde. Du ___ früher ins Bett gehen.',opts:['solltest','sollst','sollte'],a:0},
 {t:'mc',q:'Wollen wir am Samstag wandern? – ___',opts:['Gute Idee, ich bin einverstanden!','Gute Idee, ich bin egal!','Ich habe keine Meinung nach.'],a:0},
 {t:'gap',q:'Weißt du, wann der Bus kommt? – Keine ___! (ideia)',a:['Ahnung']},
 {t:'gap',q:'Ihr ___ unbedingt das Museum besuchen! (sollen – conselho, ihr)',a:['solltet']},
 {t:'dialog',place:'Café',title:'Conselho para o Tom',scene:'O Tom vai conhecer os pais da namorada no domingo e está nervoso.',lines:[
  {n:'Tom',es:'Am Sonntag lerne ich Leas Eltern kennen. Ich bin so nervös! Was soll ich machen?',de:'No domingo vou conhecer os pais da Lea. Estou tão nervoso! O que eu faço?'},
  {you:true,opts:[{es:'Du solltest pünktlich sein und Blumen für ihre Mutter mitbringen.',ok:true},{es:'Du sollst pünktlich sein.',ok:false,why:'Para conselho, o mais educado é <i>Du <b>solltest</b> …</i>'}]},
  {n:'Tom',es:'Und worüber soll ich mit ihrem Vater reden? Er ist sehr streng.',de:'E sobre o que eu falo com o pai dela? Ele é muito rígido.'},
  {you:true,opts:[{es:'Frag ihn doch nach seinem Hobby. Lea sagt, er liebt Fußball, oder?',ok:true},{es:'Das ist mir egal.',ok:false,why:'O Tom pediu ajuda – <i>Das ist mir egal</i> soa grosseiro aqui.'}]},
  {n:'Tom',es:'Stimmt! Und vielleicht sollte ich einen Anzug tragen?',de:'Verdade! E talvez eu devesse usar um terno?'},
  {you:true,opts:[{es:'Na ja, ein Anzug ist vielleicht zu viel. Ein schönes Hemd reicht wahrscheinlich.',ok:true},{es:'Ja, ich bin einverstehen.',ok:false,why:'A forma certa é <i>einverstanden</i> – e aqui talvez valha discordar com educação.'}]}]},
 {t:'tr',de:'Na minha opinião, você deveria aprender mais alemão.',a:['Meiner Meinung nach solltest du mehr Deutsch lernen.']}
]},
{id:'l4',title:'Antes e hoje',desc:'damals · früher – heute · E-Mail an einen alten Freund',steps:[
 {t:'vocab',title:'Tempo',items:[['damals','naquela época'],['zuletzt','por último / da última vez'],['vorgestern','anteontem'],['übermorgen','depois de amanhã'],['aktuell','atual'],['direkt','direto / diretamente'],['das Ding','a coisa / o troço']]},
 {t:'read',title:'Leitura: Früher und heute',text:`Früher habe ich in São Paulo mit meinen Eltern und meiner Schwester gewohnt. Damals hatte ich kein Auto und bin jeden Tag zwei Stunden mit dem Bus zur Uni gefahren. Heute wohne ich allein in Frankfurt und fahre mit dem Fahrrad ins Büro – nur zehn Minuten! Früher war ich ziemlich schüchtern, heute rede ich viel mehr, auch auf Deutsch. Was ich vermisse? Das Essen von meiner Mutter, das Wetter und natürlich meine Freunde.`,de:`Antigamente eu morava em São Paulo com meus pais e minha irmã. Naquela época eu não tinha carro e ia todo dia duas horas de ônibus para a faculdade. Hoje moro sozinho em Frankfurt e vou de bicicleta para o escritório – só dez minutos! Antes eu era bem tímido, hoje falo muito mais, também em alemão. Do que eu sinto falta? Da comida da minha mãe, do clima e, claro, dos meus amigos.`},
 {t:'mc',q:'Wie ist Lucas früher zur Uni gefahren?',opts:['mit dem Bus','mit dem Fahrrad','mit dem Auto'],a:0},
 {t:'mc',q:'Was hat sich bei Lucas geändert?',opts:['Er redet heute mehr.','Er ist heute schüchterner.','Er wohnt heute mit seiner Schwester.'],a:0},
 {t:'free',task:'Escreva uma e-mail (~40 palavras) para um amigo antigo do Brasil: 1) como era a sua vida antes (damals / früher), 2) como ela é hoje, 3) faça uma pergunta sobre a vida dele.',hint:'Lieber …, wie geht es dir? Früher habe ich …, damals war ich … Heute … Und du? Was machst du …? Viele Grüße',focus:'Perfekt/Präteritum (war, hatte), damals – heute, Fragen',model:'Lieber Rafael,\nwie geht es dir? Früher habe ich bei meinen Eltern gewohnt, damals war ich noch Student. Heute arbeite ich als Programmierer in Frankfurt und habe eine eigene Wohnung. Und du? Spielst du immer noch Fußball?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Caráter</h3><p class="es-t">nett · sympathisch · klug · fleißig · faul · streng · nervös · ruhig · ehrlich</p>
<h3>Opinião</h3><p class="es-t">Meiner Meinung nach … · Ich bin einverstanden. · Da bin ich anderer Meinung. · Das ist mir egal. · Keine Ahnung!</p>
<h3>Conselho: sollte</h3><p class="es-t">ich sollte · du solltest · er sollte · wir sollten · ihr solltet · sie/Sie sollten</p><p class="es-t">Du solltest mehr schlafen. · An deiner Stelle würde ich …</p>
<h3>Antes e hoje</h3><p class="es-t">früher · damals · heute · vorgestern · übermorgen</p>`});

/* ================= KAPITEL 23 · LERNEN & ZUKUNFT ================= */
LANGS.de.course.units.push({id:'k23',n:'23',level:'A2',title:'Lernen & Zukunft',sub:'Escola e cursos · na sala de aula · futuro com werden · planos e sonhos',
goals:['Schule und Kurs: die Tafel, das Heft, übersetzen','Im Unterricht: in Gruppen arbeiten, raten, zuhören','Zukunft mit werden: Ich werde … machen.','Pläne mit Zeitangaben: übermorgen, nächstes Jahr','Über Pläne und Träume schreiben'],
situacion:{title:'Planos para o futuro',npc:'Herr Yilmaz',scene:'No fim do curso de alemão, o seu professor conversa com cada aluno sobre os planos para o próximo ano.',role:'Du bist Herr Yilmaz, Deutschlehrer an einer Volkshochschule in Frankfurt, freundlich und motivierend. Du duzt die Kursteilnehmer. Frag Lucas: Was hat dir im Kurs gefallen? Was war schwer? Was wirst du nächstes Jahr machen – B1-Kurs, Prüfung, neuer Job? Benutze Futur mit werden und wenn-Sätze. Sprich einfaches Deutsch (A2).',goal:'Conte o que foi fácil e difícil no curso e diga pelo menos três planos com „Ich werde …“.'},
placement:[
 {t:'mc',q:'„Eu vou fazer a prova no ano que vem.“',opts:['Ich werde nächstes Jahr die Prüfung machen.','Ich werde nächstes Jahr die Prüfung mache.','Ich wird nächstes Jahr die Prüfung machen.'],a:0},
 {t:'gap',q:'Morgen ___ es regnen. (werden)',a:['wird']},
 {t:'mc',q:'Der Lehrer schreibt an die ___.',opts:['Tafel','Schere','Reihe'],a:0},
 {t:'mc',q:'Kannst du diesen Satz ins Portugiesische ___?',opts:['übersetzen','übernachten','überweisen'],a:0},
 {t:'mc',q:'„depois de amanhã“',opts:['übermorgen','vorgestern','morgen früh'],a:0},
 {t:'gap',q:'Bist du gut auf die Prüfung ___? (vorbereiten – particípio)',a:['vorbereitet']}],
lessons:[
{id:'l1',title:'Na sala de aula',desc:'die Tafel, das Heft, übersetzen …',steps:[
 {t:'vocab',title:'Escola e curso',items:[['die Tafel','o quadro (lousa)'],['das Heft','o caderno'],['das Blatt','a folha'],['die Schere','a tesoura'],['der Kurs','o curso'],['die Hausaufgabe','o dever de casa'],['die Gruppe','o grupo'],['die Reihe','a fila / a vez'],['Ich bin an der Reihe.','É a minha vez.'],['übersetzen','traduzir'],['erklären','explicar'],['wiederholen','repetir / revisar'],['die Cafeteria','a cafeteria'],['wach','acordado'],['vorbereitet','preparado']]},
 {t:'mc',q:'Bitte arbeitet in ___ zu dritt.',opts:['Gruppen','Reihen','Heften'],a:0},
 {t:'mc',q:'Wer ist jetzt an der ___? – Lucas, du!',opts:['Reihe','Tafel','Gruppe'],a:0},
 {t:'gap',q:'Kannst du das bitte noch einmal ___? Ich habe es nicht verstanden. (explicar)',a:['erklären']},
 {t:'match',q:'Ligue.',pairs:[['die Tafel','o quadro'],['das Heft','o caderno'],['die Schere','a tesoura'],['übersetzen','traduzir'],['wach','acordado']]},
 {t:'info',title:'Frases úteis na aula',html:`<table><tr><td class="es-t">Wie sagt man … auf Deutsch?</td><td>Como se diz … em alemão?</td></tr>
 <tr><td class="es-t">Was bedeutet …?</td><td>O que significa …?</td></tr>
 <tr><td class="es-t">Können Sie das bitte wiederholen?</td><td>Pode repetir, por favor?</td></tr>
 <tr><td class="es-t">Können Sie das bitte an die Tafel schreiben?</td><td>Pode escrever no quadro, por favor?</td></tr>
 <tr><td class="es-t">Ich habe eine Frage.</td><td>Tenho uma pergunta.</td></tr></table>`},
 {t:'tr',de:'O que significa „Feierabend“?',a:['Was bedeutet „Feierabend“?','Was bedeutet Feierabend?']},
 {t:'tr',de:'Você pode traduzir o texto?',a:['Kannst du den Text übersetzen?','Können Sie den Text übersetzen?']}
]},
{id:'l2',title:'O futuro com werden',desc:'Ich werde … machen.',steps:[
 {t:'info',title:'Futur I: werden + infinitivo',html:`<p>Para planos e previsões: <b>werden</b> (posição 2) + <b>infinitivo</b> (no final):</p>
 <table><tr><td>ich</td><td class="es-t">werde</td></tr><tr><td>du</td><td class="es-t">wirst</td></tr><tr><td>er / sie / es</td><td class="es-t">wird</td></tr><tr><td>wir</td><td class="es-t">werden</td></tr><tr><td>ihr</td><td class="es-t">werdet</td></tr><tr><td>sie / Sie</td><td class="es-t">werden</td></tr></table>
 <div class="ex"><span class="es-t">Ich <b>werde</b> nächstes Jahr die B1-Prüfung <b>machen</b>.</span> · <span class="es-t">Morgen <b>wird</b> es <b>regnen</b>.</span></div>
 <div class="ojo">Na conversa, os alemães usam muitas vezes o <b>presente</b> + expressão de tempo: <span class="es-t">Morgen fahre ich nach Berlin.</span> O <i>werden</i> deixa a frase mais firme (plano, promessa, previsão).</div>`},
 {t:'mc',q:'Nächsten Sommer ___ wir nach Brasilien fliegen.',opts:['werden','wird','werdet'],a:0},
 {t:'mc',q:'Ich werde dich morgen ___.',opts:['anrufen','anrufe','angerufen'],a:0},
 {t:'gap',q:'___ du am Wochenende arbeiten? (werden)',a:['Wirst']},
 {t:'gap',q:'Jana ___ im Herbst eine Ausbildung zur Grafikerin anfangen. (werden)',a:['wird']},
 {t:'order',es:'Ich werde übermorgen die Hausaufgaben machen',de:'Vou fazer o dever de casa depois de amanhã.'},
 {t:'tr',de:'Amanhã vai fazer sol.',a:['Morgen wird die Sonne scheinen.','Morgen scheint die Sonne.']},
 {t:'tr',de:'Nós vamos nos mudar no ano que vem.',a:['Wir werden nächstes Jahr umziehen.','Nächstes Jahr werden wir umziehen.','Nächstes Jahr ziehen wir um.']},
 {t:'speak',es:'Nächstes Jahr werde ich einen B1-Kurs machen und vielleicht die Prüfung schreiben.',de:'No ano que vem vou fazer um curso B1 e talvez fazer a prova.',tip:'<i>werde</i> na posição 2, os infinitivos no final.'}
]},
{id:'l3',title:'Planos e sonhos',desc:'unternehmen, der Traum, wahrscheinlich',steps:[
 {t:'vocab',title:'Planos',items:[['unternehmen','fazer (programa) / empreender'],['der Plan','o plano'],['planen','planejar'],['der Traum','o sonho'],['träumen','sonhar'],['bauen','construir'],['der Apparat','o aparelho'],['der Fotoapparat','a câmera fotográfica'],['drinnen','dentro (de casa)'],['drüben','do outro lado / lá'],['vorwärts','para a frente'],['sicher','com certeza / seguro']]},
 {t:'mc',q:'Was wollen wir am Wochenende ___? – Wandern!',opts:['unternehmen','bauen','träumen'],a:0},
 {t:'mc',q:'Es regnet. Wir bleiben lieber ___.',opts:['drinnen','drüben','vorwärts'],a:0},
 {t:'gap',q:'Mein ___ ist ein kleines Haus am Meer. (sonho)',a:['Traum']},
 {t:'mc',q:'„Ich komme wahrscheinlich.“ bedeutet:',opts:['Ich komme sehr wahrscheinlich, aber nicht 100 %.','Ich komme auf keinen Fall.','Ich komme bestimmt nicht.'],a:0},
 {t:'read',title:'Leitura: Pläne für das nächste Jahr',text:`Wir haben im Deutschkurs gefragt: Was werdet ihr nächstes Jahr machen?
Mira (Polen): „Ich werde die B1-Prüfung machen, weil ich in einer Klinik arbeiten möchte.“
Ahmed (Syrien): „Wahrscheinlich werde ich eine Ausbildung als Elektriker anfangen. Und ich will den Führerschein machen.“
Lucas (Brasilien): „Ich werde weiter Deutsch lernen und vielleicht ein Haus bauen – nein, Spaß! Aber ich werde sicher meine Familie in São Paulo besuchen.“`,de:`Perguntamos no curso de alemão: o que vocês vão fazer no ano que vem?
Mira (Polônia): „Vou fazer a prova B1, porque quero trabalhar numa clínica.“
Ahmed (Síria): „Provavelmente vou começar uma formação de eletricista. E quero tirar a carteira de motorista.“
Lucas (Brasil): „Vou continuar aprendendo alemão e talvez construir uma casa – não, brincadeira! Mas com certeza vou visitar minha família em São Paulo.“`},
 {t:'mc',q:'Warum möchte Mira die B1-Prüfung machen?',opts:['Sie möchte in einer Klinik arbeiten.','Sie möchte studieren.','Sie möchte nach Polen zurück.'],a:0},
 {t:'mc',q:'Was wird Lucas sicher machen?',opts:['seine Familie besuchen','ein Haus bauen','eine Ausbildung anfangen'],a:0},
 {t:'tr',de:'Provavelmente eu vou viajar no verão.',a:['Wahrscheinlich werde ich im Sommer verreisen.','Ich werde im Sommer wahrscheinlich verreisen.','Wahrscheinlich verreise ich im Sommer.']}
]},
{id:'l4',title:'Escrever: meus planos',desc:'Ein Text über Pläne und Ziele',steps:[
 {t:'info',title:'Escrever sobre planos',html:`<table><tr><td class="es-t">Nächstes Jahr werde ich …</td><td>No ano que vem vou …</td></tr>
 <tr><td class="es-t">Mein Ziel ist es, …</td><td>Meu objetivo é …</td></tr>
 <tr><td class="es-t">Ich möchte unbedingt …</td><td>Quero muito …</td></tr>
 <tr><td class="es-t">Wenn ich genug Geld habe, …</td><td>Se eu tiver dinheiro suficiente, …</td></tr>
 <tr><td class="es-t">Vielleicht / Wahrscheinlich …</td><td>Talvez / Provavelmente …</td></tr></table>`},
 {t:'free',task:'Escreva um pequeno texto (~40–50 palavras) para o jornal do curso: „Meine Pläne für das nächste Jahr“. 1) estudos / trabalho, 2) viagens ou família, 3) um sonho.',hint:'Nächstes Jahr werde ich … Mein Ziel ist es, … Wenn ich Zeit habe, … Mein großer Traum ist …',focus:'Futur mit werden, wenn/weil, Zeitangaben',model:'Nächstes Jahr werde ich einen B1-Kurs machen, weil ich im Job mehr Deutsch sprechen möchte. Im Sommer werde ich wahrscheinlich nach São Paulo fliegen und meine Familie besuchen. Wenn ich genug Geld habe, kaufe ich mir ein Fahrrad für Touren. Mein großer Traum ist eine Reise durch ganz Europa.'}
]}],
resumen:`<h3>Na aula</h3><p class="es-t">die Tafel · das Heft · das Blatt · die Gruppe · Ich bin an der Reihe. · übersetzen · erklären · wiederholen</p>
<h3>Futur I: werden + infinitivo</h3><table><tr><td class="es-t">ich werde · du wirst · er wird · wir werden · ihr werdet · sie/Sie werden</td></tr></table><p class="es-t">Ich werde nächstes Jahr die Prüfung machen. · Morgen wird es regnen.</p>
<h3>Tempo</h3><p class="es-t">vorgestern · gestern · heute · morgen · übermorgen · nächstes Jahr · wahrscheinlich · vielleicht · sicher</p>`});

/* ================= KAPITEL 24 · PRÜFUNGSTRAINING A2 ================= */
LANGS.de.course.units.push({id:'k24',n:'24',level:'A2',title:'Prüfungstraining A2',sub:'Simulado no formato da prova A2 do Goethe-Institut: ler, ouvir, escrever, falar',
goals:['Lesen: Zeitungstext, Informationstafel, E-Mail, Anzeigen','Hören: Radio, Gespräche, Ansagen, Interview','Schreiben: SMS (20–30 Wörter) und E-Mail (30–40 Wörter)','Sprechen: Fragen zur Person, über sich erzählen, gemeinsam etwas planen'],
situacion:{title:'Prova oral (simulação)',npc:'Prüfer',scene:'Prova oral do nível A2. O examinador conduz as três partes; a sua parceira de prova se chama Ana.',role:'Du bist Prüfer bei einer mündlichen Deutschprüfung A2. Du siezt. Teil 1: Stell Fragen zur Person mit Stichwörtern (Geburtstag? Wohnort? Beruf? Hobbys? Familie?). Teil 2: Bitte die Person, über das Thema „Wochenende“ zu erzählen (Was machen Sie am Wochenende? Mit wem? Was haben Sie letztes Wochenende gemacht? Was machen Sie nicht gern?). Teil 3: Spiel die Partnerin Ana: Ihr wollt zusammen eine Freundin im Krankenhaus besuchen und müsst einen Termin am Samstag finden (du hast von 9–11 Uhr Sport und ab 15 Uhr Besuch). Sprich klar und einfach (A2).',goal:'Responda às perguntas pessoais, conte sobre o seu fim de semana (presente e passado) e combine um horário com a Ana.'},
placement:[
 {t:'mc',q:'In der Prüfung schreiben Sie eine SMS mit ca. …',opts:['20–30 Wörtern','100 Wörtern','5 Wörtern'],a:0},
 {t:'mc',q:'Sie müssen einen Termin finden. Was sagen Sie?',opts:['Passt es dir um elf Uhr?','Ich passe um elf Uhr.','Um elf Uhr bin ich passend.'],a:0},
 {t:'mc',q:'Schild im Kaufhaus: „Damenmode – 2. Stock“. Wo kaufen Sie einen Rock?',opts:['im 2. Stock','im Erdgeschoss','im Untergeschoss'],a:0},
 {t:'gap',q:'Letztes Wochenende ___ ich meine Freunde besucht. (haben)',a:['habe']}],
lessons:[
{id:'l1',title:'Ler (Lesen)',desc:'4 partes: artigo, painel, e-mail, anúncios',steps:[
 {t:'info',title:'A prova A2 do Goethe-Institut',html:`<p>A prova <b>Goethe-Zertifikat A2</b> tem quatro partes:</p>
 <table><tr><th>parte</th><th>duração</th><th>o que é</th></tr>
 <tr><td>Lesen (ler)</td><td>~30 min</td><td>4 partes: artigo de jornal, painel de informações, e-mail, anúncios</td></tr>
 <tr><td>Hören (ouvir)</td><td>~30 min</td><td>4 partes: rádio e avisos, conversas, telefonemas, entrevista</td></tr>
 <tr><td>Schreiben (escrever)</td><td>~30 min</td><td>SMS (20–30 palavras) e e-mail (30–40 palavras), cada uma com 3 pontos</td></tr>
 <tr><td>Sprechen (falar)</td><td>~15 min</td><td>perguntas sobre você, contar sobre você, planejar algo com outra pessoa</td></tr></table>
 <div class="ex">Para passar: cerca de <b>60 %</b> dos pontos. Os textos abaixo são simulados próprios no estilo da prova.</div>`},
 {t:'read',kind:'Lesen · Teil 1',title:'Zeitungstext: Ein Café für alle',text:`In der Leipziger Straße hat letzten Monat ein besonderes Café aufgemacht: Im „Café Miteinander“ arbeiten Menschen mit und ohne Behinderung zusammen. Die Idee hatte Sandra Klein (42). „Mein Bruder sitzt im Rollstuhl und hat lange keine Arbeit gefunden“, erzählt sie. Heute arbeiten zwölf Personen im Café, sie backen Kuchen, machen Kaffee und bedienen die Gäste. Die Preise sind günstig: Ein Stück Kuchen kostet 2,50 Euro. Am Wochenende gibt es Frühstück bis 14 Uhr. Montags ist das Café geschlossen.`,de:`Na Leipziger Straße abriu no mês passado um café especial: no „Café Miteinander“ trabalham juntas pessoas com e sem deficiência. A ideia foi de Sandra Klein (42). „Meu irmão é cadeirante e por muito tempo não achou trabalho“, ela conta. Hoje doze pessoas trabalham no café: fazem bolos, preparam café e atendem os clientes. Os preços são baixos: uma fatia de bolo custa 2,50 euros. No fim de semana tem café da manhã até as 14h. Às segundas o café fica fechado.`},
 {t:'mc',kind:'Lesen · Teil 1',q:'Warum hatte Sandra Klein die Idee für das Café?',opts:['Ihr Bruder hat keine Arbeit gefunden.','Sie backt gern Kuchen.','Sie hatte kein Geld.'],a:0},
 {t:'mc',kind:'Lesen · Teil 1',q:'Wann kann man am Samstag frühstücken?',opts:['bis 14 Uhr','den ganzen Tag','gar nicht'],a:0},
 {t:'read',kind:'Lesen · Teil 2',title:'Informationstafel: Kaufhaus',text:`Untergeschoss: Lebensmittel · Getränke · Haushalt
Erdgeschoss: Kosmetik · Parfüm · Schmuck · Information
1. Stock: Damenmode · Schuhe · Taschen
2. Stock: Herrenmode · Sportbekleidung
3. Stock: Kinder · Spielwaren · Schreibwaren (Hefte, Stifte)
4. Stock: Elektro · Handys · Computer · Restaurant`,de:`Subsolo: alimentos · bebidas · utilidades domésticas
Térreo: cosméticos · perfumes · joias · informações
1º andar: moda feminina · sapatos · bolsas
2º andar: moda masculina · roupas esportivas
3º andar: infantil · brinquedos · papelaria (cadernos, canetas)
4º andar: eletrônicos · celulares · computadores · restaurante`},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie brauchen ein neues Ladekabel für Ihr Handy.',opts:['4. Stock','Erdgeschoss','Untergeschoss'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie möchten Ihrer Mutter eine Kette schenken.',opts:['Erdgeschoss','1. Stock','3. Stock'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Ihr Sohn braucht Hefte für die Schule.',opts:['3. Stock','Untergeschoss','2. Stock'],a:0},
 {t:'read',kind:'Lesen · Teil 3',title:'E-Mail',text:`Liebe Ana,
vielen Dank für deine Einladung zum Grillen am Samstag! Ich komme sehr gern, aber erst um sieben, weil ich bis sechs arbeiten muss. Soll ich etwas mitbringen? Ich kann einen Kartoffelsalat machen – oder lieber einen Kuchen? Und noch eine Frage: Darf ich meinen Freund Marco mitbringen? Er ist neu in der Stadt und kennt noch niemanden.
Liebe Grüße
Lucas`,de:`Querida Ana,
muito obrigado pelo convite para o churrasco no sábado! Vou com muito prazer, mas só às sete, porque preciso trabalhar até as seis. Devo levar alguma coisa? Posso fazer uma salada de batata – ou prefere um bolo? E mais uma pergunta: posso levar meu amigo Marco? Ele é novo na cidade e ainda não conhece ninguém.
Abraços
Lucas`},
 {t:'mc',kind:'Lesen · Teil 3',q:'Warum kommt Lucas erst um sieben?',opts:['Er muss arbeiten.','Er macht einen Kuchen.','Er holt Marco ab.'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Was möchte Lucas wissen?',opts:['ob er einen Freund mitbringen darf','wo Ana wohnt','wann die Party beginnt'],a:0},
 {t:'read',kind:'Lesen · Teil 4',title:'Anzeigen',text:`a) Gitarrenunterricht für Anfänger – auch online. 1. Stunde kostenlos! Tel. 069 77 21
b) Verkaufe Kinderfahrrad, 20 Zoll, blau, fast neu, 60 €. Nur Abholung.
c) Deutsch-Konversation am Abend: Jeden Mittwoch 19–21 Uhr im Café Lindenblatt, kostenlos, alle Niveaus willkommen.
d) Fahrradwerkstatt sucht Aushilfe für Samstag, 12 €/Stunde, Erfahrung nicht nötig.`,de:`a) Aulas de violão para iniciantes – também online. 1ª aula grátis! Tel. 069 77 21
b) Vendo bicicleta infantil, aro 20, azul, quase nova, 60 €. Só retirada.
c) Conversação em alemão à noite: toda quarta das 19h às 21h no Café Lindenblatt, grátis, todos os níveis são bem-vindos.
d) Oficina de bicicletas procura ajudante para sábado, 12 €/hora, experiência não é necessária.`},
 {t:'mc',kind:'Lesen · Teil 4',q:'Mira möchte nach der Arbeit mehr Deutsch sprechen. Welche Anzeige passt?',opts:['c','a','d'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Ahmed sucht einen Job am Wochenende.',opts:['d','b','c'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Sandra möchte ein Instrument lernen, hat aber wenig Geld.',opts:['a','c','b'],a:0}
]},
{id:'l2',title:'Ouvir (Hören)',desc:'4 partes: rádio, conversas, telefone, entrevista',steps:[
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Radio: Verkehrsmeldung',intro:'Ouça a notícia no rádio.',text:`Und nun die Verkehrsmeldungen: Auf der A5 zwischen Frankfurt-Nord und Bad Homburg gibt es nach einem Unfall zehn Kilometer Stau. Bitte fahren Sie über die B3. In der Frankfurter Innenstadt ist die Zeil am Samstag wegen eines Stadtfests von 10 bis 22 Uhr für Autos gesperrt. Die U-Bahn fährt an diesem Tag alle fünf Minuten.`,de:`E agora as informações de trânsito: na A5, entre Frankfurt-Nord e Bad Homburg, há dez quilômetros de engarrafamento depois de um acidente. Por favor, vá pela B3. No centro de Frankfurt, a Zeil fica fechada para carros no sábado das 10h às 22h por causa de uma festa da cidade. O metrô vai passar a cada cinco minutos nesse dia.`},
 {t:'mc',kind:'Hören · Teil 1',q:'Warum ist die Zeil am Samstag gesperrt?',opts:['wegen eines Stadtfests','wegen eines Unfalls','wegen einer Baustelle'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Gespräch: Was macht Jana wann?',intro:'A Jana conta à mãe sobre a semana dela. O que ela faz em cada dia?',text:`– Na, Jana, wie sieht deine Woche aus? – Voll! Am Montag habe ich abends Yoga, wie immer. Am Dienstag muss ich lange arbeiten, wir haben ein wichtiges Projekt. Mittwoch gehe ich mit Lucas ins Kino – endlich! Und am Donnerstag kommt der Handwerker, weil die Heizung kaputt ist. – Und Freitag? – Freitag habe ich frei, da besuche ich dich!`,de:`– E aí, Jana, como está a sua semana? – Cheia! Na segunda à noite tenho ioga, como sempre. Na terça preciso trabalhar até tarde, temos um projeto importante. Na quarta vou ao cinema com o Lucas – finalmente! E na quinta vem o técnico, porque o aquecimento está quebrado. – E sexta? – Sexta estou de folga, aí vou visitar você!`},
 {t:'match',kind:'Hören · Teil 2',q:'O que a Jana faz em cada dia?',pairs:[['Montag','Yoga'],['Dienstag','lange arbeiten'],['Mittwoch','Kino'],['Donnerstag','Handwerker kommt'],['Freitag','Mutter besuchen']]},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Am Telefon',intro:'Ouça o recado na secretária eletrônica.',text:`Hallo Lucas, hier ist Frau Weber von der Sprachschule. Leider ist Ihr Kurs am Donnerstag ausgefallen, weil die Lehrerin krank ist. Wir machen die Stunde nächste Woche am Dienstag um 18 Uhr nach. Der Raum ist nicht mehr 12, sondern 15, im ersten Stock. Bitte rufen Sie uns kurz zurück, ob Sie kommen können. Danke und bis bald!`,de:`Olá Lucas, aqui é a Sra. Weber da escola de idiomas. Infelizmente a sua aula de quinta foi cancelada porque a professora está doente. Vamos repor a aula na semana que vem, na terça às 18h. A sala não é mais a 12, e sim a 15, no primeiro andar. Por favor, ligue de volta rapidinho para dizer se você pode vir. Obrigada e até logo!`},
 {t:'mc',kind:'Hören · Teil 3',q:'Wann ist die neue Stunde?',opts:['nächsten Dienstag um 18 Uhr','am Donnerstag um 18 Uhr','nächsten Dienstag um 15 Uhr'],a:0},
 {t:'mc',kind:'Hören · Teil 3',q:'Was soll Lucas machen?',opts:['zurückrufen','eine E-Mail schreiben','in Raum 12 gehen'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 4',title:'Interview im Radio',intro:'Ouça a entrevista com uma professora de alemão. Responda: ja ou nein?',text:`– Frau Özdemir, Sie unterrichten seit zwanzig Jahren Deutsch an der Volkshochschule. Was ist für Ihre Kursteilnehmer am schwersten? – Ganz klar: die Artikel, der, die, das. Viele lernen am Anfang die Wörter ohne Artikel, und später ist das ein Problem. – Was raten Sie? – Immer den Artikel mitlernen und viel sprechen, auch mit Fehlern! Ich sage immer: Wer nicht spricht, lernt nicht. – Unterrichten Sie auch online? – Seit der Pandemie ja, aber ich finde den Unterricht im Kursraum schöner.`,de:`– Sra. Özdemir, a senhora dá aulas de alemão há vinte anos na Volkshochschule. O que é mais difícil para os seus alunos? – Sem dúvida: os artigos, der, die, das. Muitos aprendem as palavras sem artigo no começo, e depois isso vira um problema. – O que a senhora aconselha? – Aprender sempre o artigo junto e falar muito, mesmo com erros! Eu sempre digo: quem não fala, não aprende. – A senhora também dá aulas online? – Desde a pandemia, sim, mas acho mais bonita a aula na sala.`},
 {t:'mc',kind:'Hören · Teil 4',q:'Frau Özdemir sagt, die Artikel sind am schwersten. (ja / nein)',opts:['ja','nein'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Man soll nur sprechen, wenn man keine Fehler macht. (ja / nein)',opts:['nein','ja'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Frau Özdemir unterrichtet lieber online. (ja / nein)',opts:['nein','ja'],a:0}
]},
{id:'l3',title:'Escrever (Schreiben)',desc:'SMS · e-mail',steps:[
 {t:'info',title:'Schreiben – como é',html:`<p><b>Teil 1:</b> uma SMS ou mensagem curta para um amigo (<b>20–30 palavras</b>) sobre <b>3 pontos</b>.</p>
 <p><b>Teil 2:</b> uma e-mail mais formal, por exemplo para o professor ou o chefe (<b>30–40 palavras</b>), também com <b>3 pontos</b>.</p>
 <div class="ex">Conta: responder a <b>todos</b> os pontos, saudação e despedida adequadas, frases ligadas (und, aber, weil, dass, deshalb …).</div>`},
 {t:'free',kind:'Schreiben · Teil 1',task:'Você está no ônibus e vai chegar atrasado ao encontro com a sua amiga Lea no cinema. Escreva uma SMS (20–30 palavras): 1) peça desculpas e diga por que vai se atrasar, 2) diga quando você chega, 3) peça que ela já compre os ingressos.',hint:'Hallo Lea, sorry, ich komme … später, weil … Ich bin um … da. Kannst du schon …? Bis gleich!',focus:'weil, Uhrzeit, Bitte mit können, alle 3 Punkte',model:'Hallo Lea,\nsorry, ich komme zwanzig Minuten später, weil der Bus Verspätung hat. Ich bin um Viertel nach acht da. Kannst du schon die Karten kaufen? Ich bezahle dich dann.\nBis gleich!\nLucas'},
 {t:'free',kind:'Schreiben · Teil 2',task:'O seu professor de alemão, o Sr. Yilmaz, organiza uma excursão do curso para Heidelberg no sábado. Escreva para ele (30–40 palavras): 1) agradeça pela organização, 2) diga que você não pode ir e por quê, 3) pergunte o que você precisa estudar para a próxima aula.',hint:'Lieber Herr Yilmaz, vielen Dank für … Leider kann ich am Samstag nicht mitkommen, weil … Könnten Sie mir sagen, was … ? Viele Grüße',focus:'halbformelle E-Mail, weil, indirekte Frage (was/ob …), Konjunktiv II höflich',model:'Lieber Herr Yilmaz,\nvielen Dank, dass Sie den Ausflug nach Heidelberg organisieren! Leider kann ich am Samstag nicht mitkommen, weil meine Schwester aus Brasilien zu Besuch ist. Könnten Sie mir sagen, was ich für die nächste Stunde lernen soll?\nViele Grüße\nLucas Souza'},
 {t:'free',kind:'Schreiben · Teil 1',task:'O seu vizinho, Herr Kaya, perguntou se você pode cuidar das plantas dele. Escreva uma mensagem curta (20–30 palavras): 1) diga que sim, 2) pergunte quando você deve buscar a chave, 3) pergunte com que frequência regar.',hint:'Hallo Herr Kaya, natürlich mache ich das gern! Wann soll ich …? Und wie oft …? Viele Grüße',focus:'Fragen mit W-Wörtern, sollen, Höflichkeit',model:'Hallo Herr Kaya,\nnatürlich kümmere ich mich gern um Ihre Pflanzen! Wann soll ich den Schlüssel abholen? Und wie oft muss ich die Blumen gießen?\nViele Grüße\nLucas'}
]},
{id:'l4',title:'Falar (Sprechen)',desc:'perguntas · contar · planejar juntos',steps:[
 {t:'info',title:'Sprechen – as três partes',html:`<table><tr><th>parte</th><th>o que fazer</th></tr>
 <tr><td>Teil 1</td><td>Você recebe cartões com palavras (ex. <i>Geburtstag?</i>, <i>Wohnort?</i>) e faz perguntas ao seu parceiro – e responde às perguntas dele.</td></tr>
 <tr><td>Teil 2</td><td>Você recebe um tema (ex. <i>Wochenende</i>) com 4 perguntas e <b>conta</b> sobre a sua vida (~1–2 minutos).</td></tr>
 <tr><td>Teil 3</td><td>Vocês dois têm agendas diferentes e precisam <b>combinar</b> um horário para algo juntos.</td></tr></table>`},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Cartão „Geburtstag?“ – pergunte ao parceiro: (Quando é o seu aniversário?)',a:['Wann hast du Geburtstag?','Wann haben Sie Geburtstag?','Wann ist dein Geburtstag?','Wann ist Ihr Geburtstag?']},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Cartão „Sprachen?“ – pergunte: (Que línguas você fala?)',a:['Welche Sprachen sprichst du?','Welche Sprachen sprechen Sie?']},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Cartão „Lieblingsessen?“ – pergunte: (Qual é a sua comida favorita?)',a:['Was ist dein Lieblingsessen?','Was ist Ihr Lieblingsessen?','Was isst du am liebsten?','Was essen Sie am liebsten?']},
 {t:'speak',kind:'Sprechen · Teil 2',es:'Am Wochenende schlafe ich gern lange. Samstags spiele ich Fußball im Verein. Letztes Wochenende bin ich mit Freunden nach Heidelberg gefahren. Ich putze nicht gern die Wohnung.',de:'No fim de semana eu gosto de dormir até tarde. Aos sábados jogo futebol no clube. No último fim de semana fui com amigos para Heidelberg. Não gosto de limpar o apartamento.',tip:'Responda às 4 perguntas do cartão: o que faz, com quem, o que fez no último fim de semana (Perfekt), o que não gosta.'},
 {t:'free',kind:'Sprechen · Teil 2',task:'Tema „Wohnen“: prepare por escrito o que você contaria (~50 palavras): Wo wohnen Sie? Wie ist Ihre Wohnung? Mit wem wohnen Sie? Was gefällt Ihnen (nicht)?',hint:'Ich wohne in … Meine Wohnung ist … Ich wohne allein / mit … Mir gefällt, dass … Nicht so gut finde ich …',focus:'zusammenhängend erzählen, dass/weil, Adjektive, Wo/Wohin',model:'Ich wohne in Frankfurt-Bornheim, im dritten Stock. Meine Wohnung hat zwei Zimmer, eine kleine Küche und einen Balkon. Ich wohne allein. Mir gefällt, dass die Wohnung hell und ruhig ist. Nicht so gut finde ich, dass es keinen Aufzug gibt und die Miete ziemlich hoch ist.'},
 {t:'dialog',kind:'Sprechen · Teil 3',place:'Prüfung',title:'Planejar juntos',scene:'Você e a Ana querem visitar juntos uma amiga no hospital no sábado. Na sua agenda: 10–12h compras, a partir das 18h festa. Encontrem um horário.',lines:[
  {n:'Ana',es:'Wann wollen wir Mira am Samstag im Krankenhaus besuchen? Geht es bei dir um zehn?',de:'Quando vamos visitar a Mira no hospital no sábado? Para você dá às dez?'},
  {you:true,opts:[{es:'Um zehn kann ich leider nicht, da gehe ich einkaufen. Wie wäre es um zwölf?',ok:true},{es:'Nein.',ok:false,why:'Na prova, explique e faça uma contraproposta: <i>Wie wäre es um …?</i>'}]},
  {n:'Ana',es:'Um zwölf habe ich bis eins Sport. Passt es dir um halb zwei?',de:'Ao meio-dia tenho esporte até a uma. Fica bom para você à uma e meia?'},
  {you:true,opts:[{es:'Ja, um halb zwei passt mir gut. Sollen wir Blumen mitbringen?',ok:true},{es:'Ja, um halb zwei passe ich gut.',ok:false,why:'<i>Das passt mir.</i> – com dativo.'}]},
  {n:'Ana',es:'Gute Idee! Ich kaufe die Blumen, und du bringst Schokolade mit?',de:'Boa ideia! Eu compro as flores e você leva chocolate?'},
  {you:true,opts:[{es:'Einverstanden! Dann treffen wir uns um Viertel nach eins vor dem Krankenhaus.',ok:true},{es:'Einverstanden! Dann treffen wir uns.',ok:false,why:'Para fechar bem: diga <b>onde</b> e <b>quando</b> vocês se encontram.'}]}]},
 {t:'info',title:'Parabéns! 🎉',html:`<p>Você chegou ao fim do nível <b>A2</b>! Se você acertou cerca de 60 % deste simulado, você está pronto para a prova <b>Goethe-Zertifikat A2</b> (ou <b>telc Deutsch A2</b>, de formato parecido).</p>
 <div class="ex">Com o A2 você se vira no dia a dia na Alemanha. Próximo passo: <b>B1</b> – o nível que muitas empresas e o visto de residência permanente pedem.</div>`}
]}],
resumen:`<h3>Formato da prova A2</h3><table><tr><td>Lesen</td><td>~30 min · artigo, painel de informações, e-mail, anúncios</td></tr><tr><td>Hören</td><td>~30 min · rádio/avisos, conversa, telefone, entrevista (ja/nein)</td></tr><tr><td>Schreiben</td><td>~30 min · SMS (20–30 palavras) + e-mail (30–40 palavras), 3 pontos cada</td></tr><tr><td>Sprechen</td><td>~15 min · perguntas pessoais, contar sobre um tema, planejar juntos</td></tr></table>
<h3>Planejar juntos</h3><p class="es-t">Geht es bei dir um …? · Wie wäre es um …? · Um … kann ich leider nicht, da … · Das passt mir gut. · Einverstanden! · Treffen wir uns um … vor …</p>`});
