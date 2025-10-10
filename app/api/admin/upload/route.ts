import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File
    const key = formData.get("key") as string

    if (!file || !key) {
      return NextResponse.json({ error: "Missing file or key" }, { status: 400 })
    }

    // Converte o file para buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Gera nome único para o arquivo
    const ext = path.extname(file.name)
    const filename = `${key}-${Date.now()}${ext}`
    const filepath = path.join(process.cwd(), "public", "uploads", filename)

    // Salva o arquivo
    await writeFile(filepath, buffer)

    // URL pública
    const url = `/uploads/${filename}`

    // Salva no banco
    await prisma.image.upsert({
      where: { key },
      update: { url, alt: key },
      create: { key, url, alt: key }
    })

    return NextResponse.json({ url })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
