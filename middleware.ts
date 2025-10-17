import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")
  const isLoginPage = req.nextUrl.pathname === "/admin/login"

  if (isAdminRoute && !isLoginPage && !req.auth) {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }

  if (isLoginPage && req.auth) {
    return NextResponse.redirect(new URL("/admin/editor", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*"],
  runtime: 'nodejs' // Força uso do Node.js runtime para suportar Prisma e bcrypt
}
