import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 })
    }

    const invite = await prisma.invite.findUnique({
      where: { token }
    })

    if (!invite) {
      return NextResponse.json({ error: "Convite não encontrado" }, { status: 404 })
    }

    if (invite.used) {
      return NextResponse.json({ error: "Convite já utilizado" }, { status: 400 })
    }

    if (new Date() > invite.expiresAt) {
      return NextResponse.json({ error: "Convite expirado" }, { status: 400 })
    }

    return NextResponse.json({ email: invite.email })
  } catch (error) {
    return NextResponse.json({ error: "Failed to validate invite" }, { status: 500 })
  }
}
