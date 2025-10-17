import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedElements() {
  console.log('🌱 Seeding elements...')

  const elements = [
    // Navigation
    {
      key: 'nav.logo',
      content: 'HTK',
      fontSize: 'text-2xl',
      fontWeight: 'font-bold',
      letterSpacing: 'tracking-tight',
      animation: 'animate-fade-in',
      section: 'nav',
      elementType: 'heading'
    },
    {
      key: 'nav.logo.accent',
      content: 'CORP',
      textColor: 'text-harteck-red',
      section: 'nav',
      elementType: 'heading'
    },
    {
      key: 'nav.button',
      content: 'Consultoria Técnica',
      padding: 'px-6 py-2',
      bgColor: 'bg-harteck-red',
      textColor: 'text-white',
      fontWeight: 'font-medium',
      hover: 'hover:bg-harteck-red-light hover:scale-105 hover:shadow-lg hover:shadow-harteck-red/50',
      transition: 'transition-all duration-300',
      section: 'nav',
      elementType: 'button'
    },

    // Hero Section
    {
      key: 'hero.title',
      content: 'Performance que existe',
      fontSize: 'text-6xl md:text-8xl',
      fontWeight: 'font-bold',
      lineHeight: 'leading-tight',
      letterSpacing: 'tracking-tight',
      animation: 'animate-slide-up',
      section: 'hero',
      elementType: 'heading'
    },
    {
      key: 'hero.subtitle',
      content: 'fora do PowerPoint.',
      textColor: 'text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400',
      section: 'hero',
      elementType: 'heading'
    },
    {
      key: 'hero.description',
      content: 'Computadores de alta performance construídos por quem quebra recordes mundiais de overclock. Não vendemos especificações. Entregamos sistemas validados, afinados, provados.',
      fontSize: 'text-xl md:text-2xl',
      textColor: 'text-gray-400',
      lineHeight: 'leading-relaxed',
      animation: 'animate-slide-up',
      section: 'hero',
      elementType: 'paragraph'
    },
    {
      key: 'hero.cta',
      content: 'Agende uma consultoria técnica →',
      margin: 'mt-8',
      padding: 'px-10 py-5',
      bgColor: 'bg-harteck-red',
      textColor: 'text-white',
      fontSize: 'text-lg',
      fontWeight: 'font-medium',
      hover: 'hover:bg-harteck-red-light hover:scale-105',
      transition: 'transition-all duration-300',
      animation: 'animate-pulse-glow',
      section: 'hero',
      elementType: 'button'
    },

    // Credibility Bar
    {
      key: 'credibility.1',
      content: 'Multi-recordista mundial em overclock',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      margin: 'mt-2',
      hover: 'group-hover:text-white',
      transition: 'transition-colors',
      section: 'credibility',
      elementType: 'paragraph'
    },
    {
      key: 'credibility.2',
      content: 'Maior modder de GPUs do mundo',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      margin: 'mt-2',
      hover: 'group-hover:text-white',
      transition: 'transition-colors',
      section: 'credibility',
      elementType: 'paragraph'
    },
    {
      key: 'credibility.3',
      content: '15+ anos refinando performance extrema',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      margin: 'mt-2',
      hover: 'group-hover:text-white',
      transition: 'transition-colors',
      section: 'credibility',
      elementType: 'paragraph'
    },

    // Showcase
    {
      key: 'showcase.title',
      content: 'Máquinas que',
      fontSize: 'text-5xl md:text-6xl',
      fontWeight: 'font-bold',
      margin: 'mb-20',
      alignment: 'text-center',
      section: 'showcase',
      elementType: 'heading'
    },
    {
      key: 'showcase.title.accent',
      content: 'definem recordes',
      section: 'showcase',
      elementType: 'heading'
    },

    // PC Gaming
    {
      key: 'pc.gaming.title',
      content: 'GAMING BEAST',
      fontSize: 'text-xl',
      fontWeight: 'font-bold',
      textColor: 'text-harteck-red',
      section: 'showcase',
      elementType: 'heading'
    },
    {
      key: 'pc.gaming.specs',
      content: 'RTX 5090 | i9-14900KS OC @ 6.2GHz',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      section: 'showcase',
      elementType: 'paragraph'
    },
    {
      key: 'pc.gaming.features',
      content: 'Cooling custom loop | Silent operation | 360Hz ready',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      section: 'showcase',
      elementType: 'paragraph'
    },

    // PC AI
    {
      key: 'pc.ai.title',
      content: 'AI POWERHOUSE',
      fontSize: 'text-xl',
      fontWeight: 'font-bold',
      textColor: 'text-harteck-red',
      section: 'showcase',
      elementType: 'heading'
    },
    {
      key: 'pc.ai.specs',
      content: '4x RTX 4090 | AMD Threadripper PRO',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      section: 'showcase',
      elementType: 'paragraph'
    },
    {
      key: 'pc.ai.features',
      content: '256GB ECC RAM | NVMe RAID | 24/7 validated',
      fontSize: 'text-sm',
      textColor: 'text-gray-400',
      section: 'showcase',
      elementType: 'paragraph'
    },

    // Manifesto
    {
      key: 'manifesto.title',
      content: 'Nós acreditamos que computadores não são',
      fontSize: 'text-4xl md:text-5xl',
      fontWeight: 'font-bold',
      lineHeight: 'leading-tight',
      section: 'manifesto',
      elementType: 'heading'
    },
    {
      key: 'manifesto.title.accent',
      content: 'caixinhas com peças',
      section: 'manifesto',
      elementType: 'heading'
    },
    {
      key: 'manifesto.text1',
      content: 'São instrumentos de precisão.',
      fontSize: 'text-2xl',
      textColor: 'text-gray-400',
      lineHeight: 'leading-relaxed',
      section: 'manifesto',
      elementType: 'paragraph'
    },
    {
      key: 'manifesto.text2',
      content: 'Acreditamos que performance não se compra: se constrói, se valida, se prova.',
      fontSize: 'text-xl',
      textColor: 'text-gray-400',
      lineHeight: 'leading-relaxed',
      section: 'manifesto',
      elementType: 'paragraph'
    },
    {
      key: 'manifesto.text3',
      content: 'Fomos formados na bancada — onde números são medidos, não prometidos.',
      fontSize: 'text-xl',
      textColor: 'text-gray-400',
      lineHeight: 'leading-relaxed',
      section: 'manifesto',
      elementType: 'paragraph'
    },
    {
      key: 'manifesto.text4',
      content: 'É por isso que cada máquina da Harteck nasce com três princípios:',
      fontSize: 'text-xl',
      textColor: 'text-gray-400',
      lineHeight: 'leading-relaxed',
      section: 'manifesto',
      elementType: 'paragraph'
    },

    // Manifesto Principles
    {
      key: 'manifesto.principle1.title',
      content: 'Escolha cirúrgica de componentes',
      fontSize: 'text-xl',
      fontWeight: 'font-bold',
      hover: 'group-hover:text-harteck-red',
      transition: 'transition-colors',
      section: 'manifesto',
      elementType: 'heading'
    },
    {
      key: 'manifesto.principle1.desc',
      content: 'Não é hype; é engenharia.',
      textColor: 'text-gray-400',
      hover: 'group-hover:text-gray-300',
      transition: 'transition-colors',
      section: 'manifesto',
      elementType: 'paragraph'
    },
    {
      key: 'manifesto.principle2.title',
      content: 'Integração meticulosa',
      fontSize: 'text-xl',
      fontWeight: 'font-bold',
      hover: 'group-hover:text-harteck-red',
      transition: 'transition-colors',
      section: 'manifesto',
      elementType: 'heading'
    },
    {
      key: 'manifesto.principle2.desc',
      content: 'Hardware, firmware e software afinados como um único sistema.',
      textColor: 'text-gray-400',
      hover: 'group-hover:text-gray-300',
      transition: 'transition-colors',
      section: 'manifesto',
      elementType: 'paragraph'
    },
    {
      key: 'manifesto.principle3.title',
      content: 'Validação em carga real',
      fontSize: 'text-xl',
      fontWeight: 'font-bold',
      hover: 'group-hover:text-harteck-red',
      transition: 'transition-colors',
      section: 'manifesto',
      elementType: 'heading'
    },
    {
      key: 'manifesto.principle3.desc',
      content: 'Benchmarks, stress, telemetria e ajustes finos até o último MHz estável.',
      textColor: 'text-gray-400',
      hover: 'group-hover:text-gray-300',
      transition: 'transition-colors',
      section: 'manifesto',
      elementType: 'paragraph'
    },

    // CTA Final
    {
      key: 'cta.title',
      content: 'Pronto para',
      fontSize: 'text-5xl md:text-7xl',
      fontWeight: 'font-bold',
      lineHeight: 'leading-tight',
      section: 'cta',
      elementType: 'heading'
    },
    {
      key: 'cta.title.accent',
      content: 'performance real',
      section: 'cta',
      elementType: 'heading'
    },
    {
      key: 'cta.subtitle',
      content: 'Agende uma consultoria técnica gratuita. Vamos entender sua necessidade e construir a máquina exata para seu caso de uso.',
      fontSize: 'text-xl md:text-2xl',
      textColor: 'text-gray-400',
      lineHeight: 'leading-relaxed',
      section: 'cta',
      elementType: 'paragraph'
    },
    {
      key: 'cta.button',
      content: 'Falar com especialista →',
      margin: 'mt-12',
      padding: 'px-12 py-6',
      bgColor: 'bg-harteck-red',
      textColor: 'text-white',
      fontSize: 'text-xl',
      fontWeight: 'font-bold',
      hover: 'hover:bg-harteck-red-light hover:scale-110',
      transition: 'transition-all duration-300',
      animation: 'animate-pulse-glow',
      section: 'cta',
      elementType: 'button'
    },

    // Footer
    {
      key: 'footer.brand',
      content: 'HTK',
      fontSize: 'text-3xl',
      fontWeight: 'font-bold',
      section: 'footer',
      elementType: 'heading'
    },
    {
      key: 'footer.brand.accent',
      content: 'CORP',
      section: 'footer',
      elementType: 'heading'
    },
    {
      key: 'footer.division',
      content: 'Uma divisão Harteck',
      textColor: 'text-gray-400',
      fontSize: 'text-sm',
      section: 'footer',
      elementType: 'paragraph'
    },
    {
      key: 'footer.tagline',
      content: 'Teclab | Overclock & Modding desde 2010',
      textColor: 'text-gray-500',
      fontSize: 'text-sm',
      section: 'footer',
      elementType: 'paragraph'
    },
    {
      key: 'footer.motto',
      content: 'Performance validada. Números medidos. Recordes quebrados.',
      padding: 'pt-6',
      fontSize: 'text-xs',
      textColor: 'text-gray-600',
      section: 'footer',
      elementType: 'paragraph'
    }
  ]

  for (const element of elements) {
    await prisma.editableElement.upsert({
      where: { key: element.key },
      update: element,
      create: element
    })
    console.log(`✓ ${element.key}`)
  }

  console.log('✅ Seeding completed!')
}

seedElements()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })