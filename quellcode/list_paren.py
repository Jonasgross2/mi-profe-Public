"""Hilfsskript: deutsche Klammern in Erklärungen (info-html) auflisten – python3 quellcode/list_paren.py"""
import re,glob,pathlib
src=pathlib.Path(__file__).parent/'src'/'es'
DE=re.compile(r'[äöüßÄÖÜ]|\b(ich|du|er|sie|es|wir|ihr|mit|mir|dir|und|nicht|kein|gibt|ist|bin|bist|sind|hat|habe|wird|war|wäre|der|die|das|den|dem|ein|eine|zu|auf|aus|von|für|wenn|dass|ob|man|so|sehr|auch|noch|schon|wie|was|wo|wer|warum)\b')
n=0
for f in sorted(src.glob('c_*.js')):
    if f.name in('c_info_tr.js','c_vocab_freq.js','c_vocab_plus.js','c_stories.js'):continue
    for i,ln in enumerate(f.read_text(encoding='utf-8').split('\n'),1):
        if 'es-t' not in ln:continue
        for m in re.finditer(r'(<span class="es-t">[^<]{0,80}</span>|class="es-t">[^<]{0,80}|<td[^>]*class="es-t"[^>]*>[^<]{0,80})\s*(\(([^()<]{1,60})\))',ln):
            inner=m.group(3)
            if DE.search(inner) and not re.search(r'[¿¡ñ]',inner):
                n+=1;print(f'{f.name}:{i}: {re.sub("<[^>]+>","",m.group(0))[:110]}')
print(n)
