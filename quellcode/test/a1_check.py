"""Wortschatz-Abdeckung eines Kurses gegen eine Referenzliste (z. B. Goethe-Zertifikat A1 Wortliste).
Die Liste liegt nur lokal in quellcode/quellen/ (nicht im Repo): JSON-Liste mit Einträgen wie "der Bahnhof", "abholen", "all-".
Quelle Goethe A1: https://www.goethe.de/pro/relaunch/prf/ca/A1_SD1_Wortliste_02.pdf
  python3 test/a1_check.py [--kurs de] [--liste quellen/goethe_a1_woerter.json] [--fehlend]
Zählt pro Kapitel: Wörter aus der Liste, die als Vokabel gelernt werden (aktiv), und Wörter, die nur in Texten vorkommen (passiv)."""
import json, re, sys, pathlib
Q = pathlib.Path(__file__).resolve().parent.parent
a = sys.argv[1:]
def opt(n, d):
    if n in a: i = a.index(n); v = a[i + 1]; del a[i:i + 2]; return v
    return d
kurs = opt('--kurs', 'de'); liste = opt('--liste', 'quellen/goethe_a1_woerter.json'); fehlend = '--fehlend' in a
ref = json.load(open(Q / liste, encoding='utf-8'))
src = ''.join(p.read_text(encoding='utf-8') for p in sorted((Q / 'src' / kurs).glob('c_*.js')))
chapters = re.split(r"\.units\.push\(\{id:'", src)[1:]
key = lambda w: re.sub(r'^(der|die|das)\s+', '', w).rstrip('-').split('/')[0].lower()
def stems(w):
    k = key(w); out = {k}
    for suf in ('en', 'n', 'e'):
        if k.endswith(suf) and len(k) - len(suf) >= 3: out.add(k[:-len(suf)])
    return out
def has(tokens, w):
    st = stems(w); return any(t == s or (len(s) >= 4 and t.startswith(s)) for t in tokens for s in st)
seen_act, seen_pas = set(), set()
for ch in chapters:
    cid = ch[:ch.index("'")]
    vocab = ' '.join(re.findall(r"\[\s*'([^']+)'\s*,\s*'[^']*'", ch)).lower()
    vt = set(re.findall(r'[a-zäöüß]+', vocab)); tt = set(re.findall(r'[a-zäöüß]+', ch.lower()))
    act = {w for w in ref if has(vt, w)} - seen_act; pas = {w for w in ref if has(tt, w)} - seen_pas - act - seen_act
    seen_act |= act; seen_pas |= pas
    print(f'{cid}: +{len(act)} aktiv, +{len(pas)} passiv')
pas_only = seen_pas - seen_act
print(f'Gesamt: {len(seen_act)} von {len(ref)} als Vokabel gelernt, {len(pas_only)} nur in Texten, {len(ref) - len(seen_act) - len(pas_only)} fehlen noch')
if fehlend: print('Fehlend:', ', '.join(w for w in ref if w not in seen_act and w not in seen_pas))
