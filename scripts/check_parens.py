from pathlib import Path
p=Path(r'c:\Users\PC\Documents\latanzanie\src\app\[locale]\travel-blogs\climate-zones\page.tsx')
s=p.read_text(encoding='utf-8')
print('lines',len(s.splitlines()))
for ch in ['(',')','{','}','<','>']:
    print(ch, s.count(ch))
# find first position where cumulative parentheses goes negative
cum=0
for i,ch in enumerate(s):
    if ch=='(':
        cum+=1
    elif ch==')':
        cum-=1
    if cum<0:
        print('first negative ) at index',i,'line',s[:i].count('\n')+1)
        break
else:
    print('parentheses never go negative, final cum',cum)
# find first position where cumulative curly braces goes negative
cum=0
for i,ch in enumerate(s):
    if ch=='{': cum+=1
    elif ch=='}': cum-=1
    if cum<0:
        print('first negative } at index',i,'line',s[:i].count('\n')+1)
        break
else:
    print('curly braces final cum',cum)
