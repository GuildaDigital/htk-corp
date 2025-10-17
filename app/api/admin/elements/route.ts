import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET - Buscar todos os elementos editáveis
export async function GET() {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const elements = await prisma.editableElement.findMany({
      orderBy: [
        { section: 'asc' },
        { key: 'asc' }
      ]
    })
    
    return NextResponse.json(elements)
  } catch (error) {
    console.error('Error fetching elements:', error)
    return NextResponse.json({ error: "Failed to fetch elements" }, { status: 500 })
  }
}

// POST - Criar ou atualizar elemento editável
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await req.json()
    const { key, ...elementData } = data

    // Validar campos obrigatórios
    if (!key || !elementData.content) {
      return NextResponse.json(
        { error: "Key and content are required" }, 
        { status: 400 }
      )
    }

    const element = await prisma.editableElement.upsert({
      where: { key },
      update: elementData,
      create: { key, ...elementData }
    })

    return NextResponse.json(element)
  } catch (error) {
    console.error('Error updating element:', error)
    return NextResponse.json({ error: "Failed to update element" }, { status: 500 })
  }
}

// DELETE - Deletar elemento
export async function DELETE(req: NextRequest) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const key = searchParams.get('key')

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 })
    }

    await prisma.editableElement.delete({
      where: { key }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting element:', error)
    return NextResponse.json({ error: "Failed to delete element" }, { status: 500 })
  }
}