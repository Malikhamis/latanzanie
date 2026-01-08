'use client';

import { useLocale } from 'next-intl';
import AuthorMeta from '@/components/ui/AuthorMeta';
import TOC from '@/components/ui/TOC';
import Link from 'next/link';

type Section = {
  id: string;
  title: string;
  content: string;
};

type ClientWrapperProps = {
  locale: string;
  sections: Section[];
  FR_TITLES: Record<string, string>;
  EN_TITLES: Record<string, string>;
  FR_SECTIONS: Record<string, string>;
  EN_SECTIONS: Record<string, string>;
};

export default function ClientWrapper({
  locale,
  sections,
  FR_TITLES,
  EN_TITLES,
  FR_SECTIONS,
  EN_SECTIONS
}: ClientWrapperProps) {
  const currentLocale = useLocale() || locale;

  function renderContent(content: string, loc: string) {
    // Process 'forêt tropicale' and similar terms
    const forestRegex = /(forêt tropicale|Forêt tropicale|forêt tropicale humide|Forêt tropicale humide)/g;
    let processedContent = content;
    
    // Find all matches and replace with temporary markers
    const matches: { match: string; index: number }[] = [];
    let match;
    let index = 0;
    
    while ((match = forestRegex.exec(processedContent)) !== null) {
      matches.push({
        match: match[0],
        index: match.index
      });
    }
    
    // Process matches in reverse order to maintain correct indices
    for (let i = matches.length - 1; i >= 0; i--) {
      const match = matches[i];
      const before = processedContent.substring(0, match.index);
      const after = processedContent.substring(match.index + match.match.length);
      processedContent = before + `###FOREST_TEMP_LINK_${i}###` + after;
    }
    
    // Split the content by paragraphs
    const paragraphs = processedContent.split('\n\n');
    
    return paragraphs.map((paragraph, i) => {
      if (paragraph.trim().startsWith('>')) {
        // Handle blockquotes
        const blockContent = paragraph.replace(/^>\s?/, '');
        
        // Process temporary markers in blockquote content
        const blockParts = blockContent.split(/(###FOREST_TEMP_LINK_\d+###)/);
        const blockElements = blockParts.map((part, idx) => {
          if (part.startsWith('###FOREST_TEMP_LINK_') && part.endsWith('###')) {
            const indexMatch = part.match(/###FOREST_TEMP_LINK_(\d+)###/);
            const index = indexMatch ? parseInt(indexMatch[1], 10) : 0;
            const originalMatch = matches[index];
            
            return (
              <Link 
                key={`forest-block-${i}-${idx}`} 
                href={`/${loc}/travel-blogs/zones-climatiques-kilimandjaro`} 
                className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
              >
                {originalMatch ? originalMatch.match : 'forêt tropicale'}
              </Link>
            );
          }
          return part;
        });
        
        return <blockquote key={i} className="pl-4 border-l-4 italic">{blockElements}</blockquote>;
      } else {
        // Process temporary markers in paragraph content
        const parts = paragraph.split(/(###FOREST_TEMP_LINK_\d+###)/);
        const elements = parts.map((part, idx) => {
          if (part.startsWith('###FOREST_TEMP_LINK_') && part.endsWith('###')) {
            const indexMatch = part.match(/###FOREST_TEMP_LINK_(\d+)###/);
            const index = indexMatch ? parseInt(indexMatch[1], 10) : 0;
            const originalMatch = matches[index];
            
            return (
              <Link 
                key={`forest-${i}-${idx}`} 
                href={`/${loc}/travel-blogs/zones-climatiques-kilimandjaro`} 
                className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
              >
                {originalMatch ? originalMatch.match : 'forêt tropicale'}
              </Link>
            );
          }
          return part;
        });
        
        return <p key={i} className="my-4">{elements}</p>;
      }
    });
  }

  return (
    <>
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={currentLocale === 'fr' ? 'Expert Matériel' : 'Gear Expert'} date={currentLocale === 'fr' ? 'Décembre 2025' : 'December 2025'} />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC title={currentLocale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={currentLocale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{currentLocale === 'fr' ? FR_TITLES.overview : EN_TITLES.overview}</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">{currentLocale === 'fr' ? 'Choisir les bonnes chaussures pour le Kilimandjaro.' : 'Choosing the right boots for Kilimanjaro.'}</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                {sections.map(s => (
                  <article key={s.id} id={s.id} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
                    <div className="prose max-w-none text-black" style={{ whiteSpace: 'pre-wrap' }}>{renderContent(s.content, currentLocale)}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}