from pathlib import Path
import re

p = Path(r'c:\Users\PC\Documents\latanzanie\src\app\[locale]\travel-blogs\climate-zones\page.tsx')
s = p.read_text(encoding='utf-8')
lines = s.split('\n')

# Count div/section opens and closes, track in a stack-like way
open_count = {'div': 0, 'section': 0, 'aside': 0}
close_count = {'div': 0, 'section': 0, 'aside': 0}

for i, line in enumerate(lines, 1):
    # Find opening tags (simple regex)
    for tag in ['div', 'section', 'aside']:
        opens = len(re.findall(fr'<{tag}\b', line))
        closes = len(re.findall(fr'</{tag}>', line))
        open_count[tag] += opens
        close_count[tag] += closes
        
        if opens > 0 or closes > 0:
            print(f"Line {i:3d}: {tag:7s} +{opens} -{closes}  cumul: +{open_count[tag]} -{close_count[tag]}")

print("\n=== Final ===")
for tag in ['div', 'section', 'aside']:
    diff = open_count[tag] - close_count[tag]
    print(f"{tag:7s}: opens={open_count[tag]} closes={close_count[tag]} diff={diff}")
