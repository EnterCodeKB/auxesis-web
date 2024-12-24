import { NextResponse } from "next/server";

export function middleware(req) {
  const authenticated = req.cookies.get("authenticated");

  // Redirect to login only for admin routes, e.g., "/admin"
  if (!authenticated && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
