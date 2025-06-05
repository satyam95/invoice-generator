import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if user is authenticated
  const isAuthenticated =
    req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');

  // Prevent middleware from running on the login page if authenticated
  if (pathname === '/login' && isAuthenticated) {
    const dashboardUrl = new URL('/dashboard', req.nextUrl.origin);
    return NextResponse.redirect(dashboardUrl, { status: 302 });
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!isAuthenticated && (pathname.startsWith('/dashboard') || pathname.startsWith('/invoice'))) {
    const loginUrl = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl, { status: 302 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/invoice/:path*', '/login'],
};
