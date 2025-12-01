import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const nextIntlMiddleware = createMiddleware(routing);

// Custom middleware wrapper: force root `/` to redirect to `/fr` explicitly.
// This ensures French opens by default when no explicit locale is provided.
export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // If the request is exactly the root, redirect to the French locale root.
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/fr';
    url.search = search;
    return NextResponse.redirect(url);
  }

  // Otherwise defer to next-intl middleware for normal locale handling
  return nextIntlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Handle all locale prefixed paths
    '/(fr|en)/:path*',
    
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // But exclude API routes, static files, and other special paths
    '/((?!api|_next|_vercel|.*\..*).*)'
  ]
};