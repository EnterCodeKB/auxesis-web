import { NextResponse } from "next/server";

export function middleware(req) {
  const authenticated = req.cookies.get("authenticated");

  if (!authenticated && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
