import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: "Usuário já existe" }, { status: 400 })
    }

    // Busca o usuário logado
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Gera token único
    const token = crypto.randomBytes(32).toString("hex")
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 7) // Expira em 7 dias

    // Cria o convite
    await prisma.invite.create({
      data: {
        email,
        token,
        invitedBy: currentUser.id,
        expiresAt
      }
    })

    // URL do convite
    const inviteUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/accept-invite?token=${token}`

    // TODO: Enviar email com o link do convite
    // Por enquanto, vamos apenas retornar o link
    console.log(`🔗 Link de convite para ${email}: ${inviteUrl}`)

    return NextResponse.json({
      message: "Convite criado com sucesso",
      inviteUrl // Em produção, isso seria enviado por email
    })
  } catch (error) {
    console.error("Invite error:", error)
    return NextResponse.json({ error: "Failed to create invite" }, { status: 500 })
  }
}
