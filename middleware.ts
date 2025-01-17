import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUrl = request.nextUrl;
  const response = NextResponse.next();

  response.cookies.set('test', currentUrl.href);

  return response;
}

export const config = {
  matcher: [
    {
      source:
        '/((?!monitoring|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
