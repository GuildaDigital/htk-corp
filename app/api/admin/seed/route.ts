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
      // Seed editable elements com conteúdo corporativo correto
      const elements = [
        // Navigation
        { key: "nav.logo", content: "HTK", section: "nav", elementType: "text", textColor: "text-white", fontWeight: "font-bold", fontSize: "text-2xl" },
        { key: "nav.logo.accent", content: "CORP", section: "nav", elementType: "text", textColor: "text-harteck-red", fontWeight: "font-bold", fontSize: "text-2xl" },
        { key: "nav.button", content: "Consultoria Técnica", section: "nav", elementType: "button", textColor: "text-white", bgColor: "bg-harteck-red", padding: "px-6 py-2", hover: "hover:bg-harteck-red-light" },
        
        // Hero Section - Conteúdo Corporativo
        { key: "hero.title", content: "Tecnologia que não compromete sua operação.", section: "hero", elementType: "heading", fontSize: "text-6xl md:text-8xl", fontWeight: "font-bold", textColor: "text-white", lineHeight: "leading-tight" },
        { key: "hero.subtitle", content: "", section: "hero", elementType: "text", fontSize: "text-transparent", textColor: "bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400" },
        { key: "hero.description", content: "Workstations corporativas construídas sob medida para empresas que não podem parar. Suporte 24/7 na Grande São Paulo. Máquina reserva durante manutenção.", section: "hero", elementType: "paragraph", fontSize: "text-xl md:text-2xl", textColor: "text-gray-400", lineHeight: "leading-relaxed" },
        { key: "hero.cta", content: "Agende uma consultoria técnica →", section: "hero", elementType: "button", bgColor: "bg-harteck-red", textColor: "text-white", padding: "px-10 py-5", fontSize: "text-lg", fontWeight: "font-medium", hover: "hover:bg-harteck-red-light", transition: "transition-all duration-300" },
        
        // Credibility Bar
        { key: "credibility.1", content: "Multi-recordista mundial em overclock", section: "credibility", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "credibility.2", content: "Maior modder de GPUs do mundo", section: "credibility", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "credibility.3", content: "15+ anos refinando performance extrema", section: "credibility", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        
        // Showcase Section
        { key: "showcase.title", content: "Máquinas que", section: "showcase", elementType: "heading", fontSize: "text-5xl md:text-6xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "showcase.title.accent", content: "definem recordes", section: "showcase", elementType: "text", textColor: "text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light" },
        
        { key: "pc.gaming.title", content: "GAMING BEAST", section: "showcase", elementType: "heading", fontSize: "text-xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        { key: "pc.gaming.specs", content: "RTX 5090 | i9-14900KS OC @ 6.2GHz", section: "showcase", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "pc.gaming.features", content: "Cooling custom loop | Silent operation | 360Hz ready", section: "showcase", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        
        { key: "pc.ai.title", content: "AI POWERHOUSE", section: "showcase", elementType: "heading", fontSize: "text-xl", fontWeight: "font-bold", textColor: "text-harteck-red" },
        { key: "pc.ai.specs", content: "4x RTX 4090 | AMD Threadripper PRO", section: "showcase", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "pc.ai.features", content: "256GB ECC RAM | NVMe RAID | 24/7 validated", section: "showcase", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        
        // Manifesto Section
        { key: "manifesto.title", content: "Nós acreditamos que computadores não são", section: "manifesto", elementType: "heading", fontSize: "text-4xl md:text-5xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "manifesto.title.accent", content: "caixinhas com peças", section: "manifesto", elementType: "text", textColor: "text-harteck-red" },
        { key: "manifesto.text1", content: "São instrumentos de precisão.", section: "manifesto", elementType: "paragraph", fontSize: "text-2xl", textColor: "text-gray-400" },
        { key: "manifesto.text2", content: "Acreditamos que performance não se compra: se constrói, se valida, se prova.", section: "manifesto", elementType: "paragraph", fontSize: "text-xl", textColor: "text-gray-400" },
        { key: "manifesto.text3", content: "Fomos formados na bancada — onde números são medidos, não prometidos.", section: "manifesto", elementType: "paragraph", fontSize: "text-xl", textColor: "text-gray-400" },
        { key: "manifesto.text4", content: "É por isso que cada máquina da Harteck nasce com três princípios:", section: "manifesto", elementType: "paragraph", fontSize: "text-xl", textColor: "text-gray-400" },
        
        { key: "manifesto.principle1.title", content: "Escolha cirúrgica de componentes", section: "manifesto", elementType: "heading", fontSize: "text-xl", fontWeight: "font-bold" },
        { key: "manifesto.principle1.desc", content: "Não é hype; é engenharia.", section: "manifesto", elementType: "text", textColor: "text-gray-400" },
        { key: "manifesto.principle2.title", content: "Integração meticulosa", section: "manifesto", elementType: "heading", fontSize: "text-xl", fontWeight: "font-bold" },
        { key: "manifesto.principle2.desc", content: "Hardware, firmware e software afinados como um único sistema.", section: "manifesto", elementType: "text", textColor: "text-gray-400" },
        { key: "manifesto.principle3.title", content: "Validação em carga real", section: "manifesto", elementType: "heading", fontSize: "text-xl", fontWeight: "font-bold" },
        { key: "manifesto.principle3.desc", content: "Benchmarks, stress, telemetria e ajustes finos até o último MHz estável.", section: "manifesto", elementType: "text", textColor: "text-gray-400" },
        
        // CTA Final
        { key: "cta.title", content: "Pronto para", section: "cta", elementType: "heading", fontSize: "text-5xl md:text-7xl", fontWeight: "font-bold", textColor: "text-white" },
        { key: "cta.title.accent", content: "performance real", section: "cta", elementType: "text", textColor: "text-transparent bg-clip-text bg-gradient-to-r from-harteck-red via-harteck-red-light to-harteck-red" },
        { key: "cta.subtitle", content: "Agende uma consultoria técnica gratuita. Vamos entender sua necessidade e construir a máquina exata para seu caso de uso.", section: "cta", elementType: "paragraph", fontSize: "text-xl md:text-2xl", textColor: "text-gray-400" },
        { key: "cta.button", content: "Falar com especialista →", section: "cta", elementType: "button", bgColor: "bg-harteck-red", textColor: "text-white", padding: "px-12 py-6", fontSize: "text-xl", fontWeight: "font-bold", hover: "hover:bg-harteck-red-light" },
        
        // Footer
        { key: "footer.brand", content: "HTK", section: "footer", elementType: "text", fontSize: "text-3xl", fontWeight: "font-bold" },
        { key: "footer.brand.accent", content: "CORP", section: "footer", elementType: "text", textColor: "text-harteck-red" },
        { key: "footer.division", content: "Uma divisão Harteck", section: "footer", elementType: "text", fontSize: "text-sm", textColor: "text-gray-400" },
        { key: "footer.tagline", content: "Teclab | Overclock & Modding desde 2010", section: "footer", elementType: "text", fontSize: "text-sm", textColor: "text-gray-500" },
        { key: "footer.motto", content: "Performance validada. Números medidos. Recordes quebrados.", section: "footer", elementType: "text", fontSize: "text-xs", textColor: "text-gray-600" }
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