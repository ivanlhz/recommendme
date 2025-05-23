import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_PATHS = ['/', '/login', '/terms', '/favicon.ico', '/images', '/api']

function isPublic(pathname: string) {
  return PUBLIC_PATHS.some((publicPath) => pathname === publicPath)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (isPublic(pathname)) {
    return NextResponse.next()
  }

  const token = request.cookies.get('auth_token')?.value || request.headers.get('authorization')?.replace('Bearer ', '') || ''

  if (!token || token !== 'demo-bearer-token') {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico|images).*)'],
}
