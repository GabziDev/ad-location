const { NextResponse } = require('next/server');

export const config = {
    matcher: ['/admin-dashboard/:path*', '/user/:path*'],
};

export default async function middleware(req) {
    const { pathname } = req.nextUrl;
    const isAdmin = false;
    const isLogged = false;

    console.log(pathname);

    return NextResponse.redirect(
        new URL('/login', req.nextUrl)
    );
}