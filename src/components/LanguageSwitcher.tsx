'use client';

import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Extract current locale from pathname
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  const currentLocale = pathSegments[0] === 'en' || pathSegments[0] === 'fr' ? pathSegments[0] : 'fr';
  const altLocale = currentLocale === 'fr' ? 'en' : 'fr';

  const switchLocale = () => {
    // Build new path by replacing the locale
    let newPath: string;
    
    if (pathSegments[0] === 'en' || pathSegments[0] === 'fr') {
      // Replace the first segment (locale) with the new locale
      if (pathSegments.length === 1) {
        // If we're at the root of a locale (e.g., /fr or /en)
        newPath = `/${altLocale}`;
      } else {
        // Replace the first segment and keep the rest
        const restOfPath = pathSegments.slice(1).join('/');
        newPath = `/${altLocale}/${restOfPath}`;
      }
    } else {
      // No locale in path, add the new locale at the beginning
      newPath = `/${altLocale}${pathname === '/' ? '' : pathname}`;
    }

    // Ensure the path is correctly formatted
    if (!newPath.startsWith('/')) {
      newPath = `/${newPath}`;
    }
    
    if (newPath === '/') {
      newPath = `/${altLocale}`;
    }

    // Use window.location.assign for navigation
    window.location.assign(newPath);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={switchLocale}
        className="text-sm text-white font-medium transition-colors duration-200 rounded-full w-8 h-8 flex items-center justify-center"
        aria-label={`Switch to ${altLocale === 'fr' ? 'French' : 'English'}`}
      >
        {altLocale.toUpperCase()}
      </button>
    </div>
  );
}