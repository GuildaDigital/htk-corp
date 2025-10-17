import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { action, email, password } = await request.json()

    if (action === "create-admin") {
      // Create admin user
      const hashedPassword = await bcrypt.hash(password, 10)
      
      const user = await prisma.user.upsert({
        where: { email },
        update: { password: hashedPassword },
        create: {
          email,
          password: hashedPassword,
          name: email.split("@")[0],
          role: "admin",
          approved: true
        }
      })

      return NextResponse.json({ 
        success: true, 
        message: `Admin ${email} criado/atualizado com sucesso`,
        user: { id: user.id, email: user.email }
      })
    }

    if (action === "seed-elements") {
      // Seed editable elements
      const elements = [
        // Navigation
        { key: "nav.logo", content: "HTK", section: "nav", elementType: "text", textColor: "text-white", fontWeight: "font-bold", fontSize: "text-2xl" },
        { key: "nav.cta", content: "Fale com especialista →", section: "nav", elementType: "button", textColor: "text-white", bgColor: "bg-harteck-red", padding: "px-6 py-2", hover: "hover:bg-harteck-red-light" },
        
        // Hero Section
        { key: "hero.title", content: "Performance que existe fora do PowerPoint.", section: "hero", elementType: "heading", fontSize: "text-6xl", fontWeight: "font-bold", textColor: "text-white", lineHeight: "leading-tight" },
        { key: "hero.subtitle", content: "Computadores de alta performance para quem precisa de resultados reais, não de especulação.", section: "hero", elementType: "paragraph", fontSize: "text-xl", textColor: "text-gray-400", margin: "mt-6" },
        { key: "hero.cta", content: "Agende uma consultoria técnica →", section: "hero", elementType: "button", bgColor: "bg-harteck-red", textColor: "text-white", padding: "px-8 py-4", fontSize: "text-lg", fontWeight: "font-medium", hover: "hover:bg-harteck-red-light", transition: "transition-colors" },
        
        // Credibility Section
        { key: "credibility.title", content: "Performance comprovada", section: "credibility", elementType: "heading", fontSize: "text-4xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "credibility.stat1.number", content: "50+", section: "credibility", elementType: "text", fontSize: "text-5xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        { key: "credibility.stat1.label", content: "Builds entregues", section: "credibility", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "credibility.stat2.number", content: "98%", section: "credibility", elementType: "text", fontSize: "text-5xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        { key: "credibility.stat2.label", content: "Taxa de satisfação", section: "credibility", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "credibility.stat3.number", content: "24/7", section: "credibility", elementType: "text", fontSize: "text-5xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        { key: "credibility.stat3.label", content: "Suporte técnico", section: "credibility", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        
        // Showcase Section
        { key: "showcase.title", content: "Builds que impressionam", section: "showcase", elementType: "heading", fontSize: "text-4xl", fontWeight: "font-bold", textColor: "text-white", margin: "mb-12" },
        { key: "showcase.pc1.name", content: "Gaming Beast", section: "showcase", elementType: "heading", fontSize: "text-2xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "showcase.pc1.specs", content: "RTX 4090 • i9-14900K • 64GB DDR5", section: "showcase", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "showcase.pc1.price", content: "R$ 25.990", section: "showcase", elementType: "text", fontSize: "text-3xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        { key: "showcase.pc2.name", content: "AI Powerhouse", section: "showcase", elementType: "heading", fontSize: "text-2xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "showcase.pc2.specs", content: "RTX 4080 • Ryzen 9 7950X • 128GB DDR5", section: "showcase", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "showcase.pc2.price", content: "R$ 32.990", section: "showcase", elementType: "text", fontSize: "text-3xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        
        // Manifesto Section
        { key: "manifesto.title", content: "O que nos move", section: "manifesto", elementType: "heading", fontSize: "text-4xl", fontWeight: "font-bold", textColor: "text-white", margin: "mb-8" },
        { key: "manifesto.text", content: "Na HTK Corp, não vendemos promessas. Vendemos performance real, testada e garantida. Cada componente é escolhido criteriosamente, cada build passa por stress tests rigorosos.", section: "manifesto", elementType: "paragraph", fontSize: "text-xl", textColor: "text-gray-400", lineHeight: "leading-relaxed" },
        
        // CTA Final
        { key: "cta.final.title", content: "Pronto para performance real?", section: "cta", elementType: "heading", fontSize: "text-5xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "cta.final.subtitle", content: "Agende uma consultoria técnica gratuita", section: "cta", elementType: "text", fontSize: "text-xl", textColor: "text-gray-400", margin: "mt-4" },
        { key: "cta.final.button", content: "Falar com especialista →", section: "cta", elementType: "button", bgColor: "bg-harteck-red", textColor: "text-white", padding: "px-8 py-4", fontSize: "text-lg", fontWeight: "font-medium", hover: "hover:bg-harteck-red-light" },
        
        // Footer
        { key: "footer.tagline", content: "Performance que existe fora do PowerPoint.", section: "footer", elementType: "text", fontSize: "text-sm", textColor: "text-gray-500" },
        { key: "footer.copyright", content: "© 2025 HTK Corp. Todos os direitos reservados.", section: "footer", elementType: "text", fontSize: "text-sm", textColor: "text-gray-600" }
      ]

      for (const element of elements) {
        await prisma.editableElement.upsert({
          where: { key: element.key },
          update: element,
          create: element
        })
      }

      return NextResponse.json({ 
        success: true, 
        message: `${elements.length} elementos criados/atualizados com sucesso` 
      })
    }

    return NextResponse.json({ error: "Action inválida" }, { status: 400 })
  } catch (error) {
    console.error("Seed error:", error)
    return NextResponse.json({ 
      error: "Erro ao executar seed", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 })
  }
}