import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse } from 'next/server';

const guestOnlyRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const isGuestOnlyRoute = guestOnlyRoutes.includes(request.nextUrl.pathname);

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie && !isGuestOnlyRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
