import { prisma } from './prisma'

export type EditableElement = {
  id: string
  key: string
  content: string
  fontSize?: string | null
  fontWeight?: string | null
  fontFamily?: string | null
  lineHeight?: string | null
  letterSpacing?: string | null
  textColor?: string | null
  bgColor?: string | null
  padding?: string | null
  margin?: string | null
  display?: string | null
  alignment?: string | null
  animation?: string | null
  transition?: string | null
  hover?: string | null
  customCSS?: string | null
  section?: string | null
  elementType?: string | null
}

// Helper para construir className a partir dos estilos do elemento
export function buildClassName(element: EditableElement | null | undefined): string {
  if (!element) return ''
  
  const classes = [
    element.fontSize,
    element.fontWeight,
    element.fontFamily,
    element.lineHeight,
    element.letterSpacing,
    element.textColor,
    element.bgColor,
    element.padding,
    element.margin,
    element.display,
    element.alignment,
    element.animation,
    element.transition,
    element.hover
  ].filter(Boolean)
  
  return classes.join(' ')
}

// Helper para obter conteúdo com fallback
export function getContent(element: EditableElement | null | undefined, fallback: string = ''): string {
  return element?.content || fallback
}

// Função para buscar todos os elementos (Server-Side)
export async function getElements(): Promise<Record<string, EditableElement>> {
  try {
    const elements = await prisma.editableElement.findMany({
      orderBy: [
        { section: 'asc' },
        { key: 'asc' }
      ]
    })
    
    // Converte array para objeto key-value
    return elements.reduce((acc, element) => {
      acc[element.key] = element as EditableElement
      return acc
    }, {} as Record<string, EditableElement>)
  } catch (error) {
    console.error('Error fetching elements:', error)
    return {}
  }
}

// Função para buscar um elemento específico
export async function getElement(key: string): Promise<EditableElement | null> {
  try {
    const element = await prisma.editableElement.findUnique({
      where: { key }
    })
    return element as EditableElement | null
  } catch (error) {
    console.error(`Error fetching element ${key}:`, error)
    return null
  }
}