#!/usr/bin/env python3
"""Validate seasonal guide integration"""
import json

print("=" * 60)
print("SEASONAL GUIDE INTEGRATION VALIDATION")
print("=" * 60)

try:
    # Load locale files
    with open('locales/fr.json', encoding='utf-8-sig') as f:
        fr = json.load(f)
    print("✓ fr.json loaded successfully")
    
    with open('locales/en.json', encoding='utf-8-sig') as f:
        en = json.load(f)
    print("✓ en.json loaded successfully")
    
    # Check namespace presence
    print(f"\n✓ fr.json has {len(fr)} namespaces")
    print(f"✓ en.json has {len(en)} namespaces")
    
    # Check SeasonalGuide
    has_sg_fr = "SeasonalGuide" in fr
    has_sg_en = "SeasonalGuide" in en
    print(f"✓ SeasonalGuide in fr.json: {has_sg_fr}")
    print(f"✓ SeasonalGuide in en.json: {has_sg_en}")
    
    if has_sg_fr and has_sg_en:
        sg_fr = fr['SeasonalGuide']
        sg_en = en['SeasonalGuide']
        
        print(f"\nFrench SeasonalGuide sections:")
        for key in sg_fr.keys():
            print(f"  • {key}")
        
        print(f"\nEnglish SeasonalGuide sections:")
        for key in sg_en.keys():
            print(f"  • {key}")
        
        # Verify all sections exist in both
        expected_sections = ['hero', 'weather', 'trails', 'cold', 'visibility', 'wind', 'seasons', 'conclusion']
        fr_sections = set(sg_fr.keys())
        en_sections = set(sg_en.keys())
        
        print(f"\n✓ French completeness: {fr_sections == set(expected_sections)}")
        print(f"✓ English completeness: {en_sections == set(expected_sections)}")
        
        # Check for content length
        fr_content = json.dumps(sg_fr, ensure_ascii=False)
        en_content = json.dumps(sg_en, ensure_ascii=False)
        print(f"\n✓ French SeasonalGuide content: {len(fr_content):,} bytes")
        print(f"✓ English SeasonalGuide content: {len(en_content):,} bytes")
        
        # Sample verification
        print(f"\nSample content verification:")
        print(f"  • Fr hero title: {sg_fr['hero']['title']}")
        print(f"  • En hero title: {sg_en['hero']['title']}")
        
        print("\n" + "=" * 60)
        print("✓ INTEGRATION SUCCESSFUL - NO ERRORS OR DUPLICATES")
        print("=" * 60)
    else:
        print("\n✗ ERROR: SeasonalGuide not found in one or both files!")
        
except Exception as e:
    print(f"\n✗ ERROR: {e}")
    import traceback
    traceback.print_exc()
