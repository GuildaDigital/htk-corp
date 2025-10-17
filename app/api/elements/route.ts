import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET público - Buscar todos os elementos editáveis (sem autenticação)
// Esta rota será usada pela home page para renderizar conteúdo no servidor
export async function GET() {
  try {
    const elements = await prisma.editableElement.findMany({
      orderBy: [
        { section: 'asc' },
        { key: 'asc' }
      ]
    })
    
    // Retorna um objeto key-value para facilitar o acesso
    const elementsMap = elements.reduce((acc, element) => {
      acc[element.key] = element
      return acc
    }, {} as Record<string, any>)
    
    return NextResponse.json(elementsMap)
  } catch (error) {
    console.error('Error fetching elements:', error)
    return NextResponse.json({}, { status: 200 }) // Retorna objeto vazio em caso de erro
  }
}