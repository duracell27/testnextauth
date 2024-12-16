// export { auth as middleware } from "@/auth"

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "./auth"


//сюди вписати протектед роути
const protectedRoutes = ['/admin']

export default async function middleware(request: NextRequest) {
    const session = await auth()

    const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

    if (!session?.user && isProtectedRoute) {
        const absoluteURL = new URL("/", request.nextUrl.origin)

        return NextResponse.redirect(absoluteURL.toString())
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}