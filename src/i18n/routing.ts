import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported (prefer French first)
  locales: ['fr', 'en'],

  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Always redirect to the default locale
  localePrefix: 'always'
});