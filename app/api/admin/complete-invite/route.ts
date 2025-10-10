import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    const { token, name, password } = await req.json()

    if (!token || !name || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Valida o convite
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

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10)

    // Cria o usuário
    await prisma.user.create({
      data: {
        email: invite.email,
        password: hashedPassword,
        name,
        role: "admin",
        approved: true, // Já aprovado pois foi convidado
        invitedBy: invite.invitedBy
      }
    })

    // Marca o convite como usado
    await prisma.invite.update({
      where: { id: invite.id },
      data: { used: true }
    })

    return NextResponse.json({ message: "Conta criada com sucesso" })
  } catch (error) {
    console.error("Complete invite error:", error)
    return NextResponse.json({ error: "Failed to create account" }, { status: 500 })
  }
}
