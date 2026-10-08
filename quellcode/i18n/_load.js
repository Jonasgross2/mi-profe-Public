/* Gemeinsamer Lader für extract.js / extract_extra.js (jsc): lädt Register + alle Dateien eines Kurses.
   Aufruf: jsc <skript> -- <src-Ordner> <kurs> <ausgangssprache> <datei1,datei2,…> [weitere Argumente]
   Danach stehen bereit: KURS, BASE, C (Kurs), PL (Einstufung), ST (Geschichten), RD (Lesetexte), BASE_RX (erkennt Texte in der Ausgangssprache). */
var window=this;var localStorage={getItem:function(){return null}};
var SRC=arguments[0],KURS=arguments[1],BASE=arguments[2],FILES=arguments[3].split(',');
load(SRC+'/core/lang.js');FILES.forEach(function(f){load(SRC+'/'+f);});
var L=LANGS[KURS]||{};var C=L.course&&L.course.units&&L.course.units.length?L.course:window.COURSE;
var PL=L.placement&&L.placement.length?L.placement:(window.PLACEMENT||[]),ST=L.stories&&L.stories.length?L.stories:(window.STORIES||[]),RD=window.READINGS||[];
/* Texte in der Ausgangssprache der Erklärungen erkennen (für Felder, die nicht immer Erklärungen sind) */
var BASE_RX={de:/[äöüßÄÖÜ„“]|\b(der|die|das|den|dem|des|und|ist|nicht|ich|du|er|sie|wir|mit|für|von|zu|zum|zur|ein|eine|einen|auf|im|in|am|an|bei|nach|oder|aber|wie|was|wer|wo|Wie|Was|Wer|Wo|Du|Ich|Er|Sie|heißt|sagt|Satz|Wort|Wörter|man|sein|haben|wird|kann|muss|auch|noch|schon|hier|dort|nur|sehr|gut|Hallo|ja|nein|Tag|Uhr|wenn|dein|deine|mein|meine|weil|dass|ob|dann|wann|warum)\b/,
  pt:/[ãõç]|\b(o|os|as|um|uma|do|da|dos|das|não|com|para|é|em|você|seu|sua|que|isso|mas|também)\b/i,
  en:/\b(the|and|is|are|of|to|in|with|you|your|this|that|what|how|not)\b/i};
