import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated
  const isAuthenticated = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');

  // If not authenticated and accessing protected routes, redirect to login
  if (!isAuthenticated && (pathname.startsWith('/dashboard') || pathname.startsWith('/invoice'))) {
    const loginUrl = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Match the middleware to specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/invoice/:path*'],
};
