'use client'

import { useEffect, useState } from 'react'

interface ImageData {
  url: string
  alt: string
}

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({})
  const [images, setImages] = useState<Record<string, ImageData>>({})

  useEffect(() => {
    // Buscar conteúdo
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(console.error)

    // Buscar imagens
    fetch('/api/images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(console.error)
  }, [])

  // Valores padrão caso o banco esteja vazio
  const getContent = (key: string, defaultValue: string) => {
    return content[key] || defaultValue
  }

  const getImage = (key: string) => {
    return images[key] || null
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-harteck-red/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight animate-fade-in">
            HTK <span className="text-harteck-red">CORP</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
            <a
              href={getContent('hero.cta_link', '#agendar')}
              className="px-6 py-2 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-harteck-red/50"
            >
              {getContent('hero.cta', 'Agendar Consultoria')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Corporate Premium */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Gradiente de fundo sutil e elegante */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.05),transparent_50%)]"></div>

        {/* Grid pattern overlay minimalista */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200">
              {getContent('corporate.hero.title', 'Tecnologia que não compromete sua operação.')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up whitespace-pre-line" style={{animationDelay: '0.2s'}}>
            {getContent('corporate.hero.subtitle', 'Workstations corporativas construídas sob medida para empresas que não podem parar.\nSuporte 24/7 na Grande São Paulo. Máquina reserva durante manutenção.')}
          </p>
          <a
            href={getContent('corporate.hero.cta_link', '#agendar')}
            className="inline-block mt-8 px-10 py-5 bg-harteck-red text-white text-lg font-medium hover:bg-harteck-red-light transition-all duration-300 hover:scale-105 shadow-2xl shadow-harteck-red/30 hover:shadow-harteck-red/50"
          >
            {getContent('corporate.hero.cta', 'Agendar visita técnica →')}
          </a>

          {/* Trust indicators */}
          <div className="pt-12 flex justify-center gap-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-harteck-red text-xl">✓</span>
              <span>Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-harteck-red text-xl">✓</span>
              <span>Grande São Paulo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-harteck-red text-xl">✓</span>
              <span>Máquina reserva inclusa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Bar - Corporate Focus */}
      <section className="relative border-y border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group cursor-default animate-slide-in-left">
              <div className="text-4xl font-bold text-white mb-2">&lt;2h</div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Tempo médio de resposta em emergências</p>
            </div>
            <div className="group cursor-default animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Uptime garantido com máquina reserva</p>
            </div>
            <div className="group cursor-default animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Anos de experiência em hardware crítico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Solução - O diferencial estético */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Você investiu milhões no seu espaço.
            </h2>
            <p className="text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Por que aceitar uma <span className="text-white font-semibold">torre genérica</span> que desvaloriza o ambiente?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Problema */}
            <div className="p-8 border border-red-900/30 bg-red-950/10">
              <h3 className="text-2xl font-bold mb-6 text-red-400">O problema comum</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✕</span>
                  <span>Gabinetes industriais que não conversam com seu projeto arquitetônico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✕</span>
                  <span>Suporte técnico por ticket, sem rosto, sem garantia de tempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✕</span>
                  <span>Operação parada por dias aguardando peças ou diagnóstico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-1">✕</span>
                  <span>Hardware "bom o suficiente" que envelhece em 2 anos</span>
                </li>
              </ul>
            </div>

            {/* Solução HTK */}
            <div className="p-8 border border-harteck-red/30 bg-harteck-red/5">
              <h3 className="text-2xl font-bold mb-6 text-harteck-red">A abordagem HTK</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-xl mt-1">✓</span>
                  <span><strong>Estética sob medida:</strong> gabinetes customizados que complementam seu ambiente premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-xl mt-1">✓</span>
                  <span><strong>Especialista dedicado:</strong> você tem o contato direto de quem construiu sua máquina</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-xl mt-1">✓</span>
                  <span><strong>Máquina reserva:</strong> garantia sem downtime — retiramos e deixamos backup no local</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-xl mt-1">✓</span>
                  <span><strong>Componentes top-tier:</strong> hardware profissional que dura 5+ anos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sua clínica, escritório ou indústria merece tecnologia à altura do seu padrão.
              <br/><span className="text-white font-semibold">Nós construímos isso.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Segmentos Atendidos */}
      <section className="relative py-32 px-6 bg-black border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Soluções para <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light">ambientes exigentes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clínicas e Consultórios */}
            <div className="group relative overflow-hidden border border-gray-800 p-8 hover:border-harteck-red/50 transition-all duration-500 bg-gradient-to-b from-gray-900 to-black hover:scale-105">
              <div className="text-5xl mb-6">🏥</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-harteck-red transition-colors">Clínicas e Consultórios</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                Equipamentos silenciosos, esteticamente integrados e que rodam softwares médicos sem travamento.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Operação silenciosa para ambientes clínicos</li>
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Design discreto que valoriza o ambiente</li>
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Suporte on-site para não interromper atendimento</li>
              </ul>
            </div>

            {/* Escritórios de Advocacia/Arquitetura */}
            <div className="group relative overflow-hidden border border-gray-800 p-8 hover:border-harteck-red/50 transition-all duration-500 bg-gradient-to-b from-gray-900 to-black hover:scale-105">
              <div className="text-5xl mb-6">⚖️</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-harteck-red transition-colors">Escritórios Premium</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                Para advocacias e arquiteturas que investem em ambientes sofisticados e precisam de tecnologia à altura.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Gabinetes customizados em cores/materiais premium</li>
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Performance para renderização e multitarefas pesadas</li>
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Garantia sem indisponibilidade operacional</li>
              </ul>
            </div>

            {/* Pequenas Indústrias/Labs */}
            <div className="group relative overflow-hidden border border-gray-800 p-8 hover:border-harteck-red/50 transition-all duration-500 bg-gradient-to-b from-gray-900 to-black hover:scale-105">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-harteck-red transition-colors">Indústria & Labs</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                Workstations industriais para CAD, simulação, automação e controle de processos críticos.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Hardware validado 24/7 para operação contínua</li>
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Componentes ECC para zero margem de erro</li>
                <li className="flex items-center gap-2"><span className="text-harteck-red">→</span> Suporte emergencial em menos de 2 horas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial do Suporte 24/7 */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black via-harteck-red/5 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Suporte que <span className="text-harteck-red">não existe</span> no mercado nacional
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Inspirado nos melhores SLAs corporativos internacionais, adaptado para a realidade da Grande São Paulo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-harteck-red/10 border border-harteck-red/30 flex items-center justify-center text-2xl font-bold text-harteck-red flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Contato direto com especialista</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sem call center. Você tem o WhatsApp e telefone do técnico responsável pela sua máquina.
                    <span className="text-white font-semibold"> Resposta em minutos, não em dias.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-harteck-red/10 border border-harteck-red/30 flex items-center justify-center text-2xl font-bold text-harteck-red flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Atendimento on-site em até 2 horas</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Grande São Paulo: atendimento presencial emergencial garantido.
                    <span className="text-white font-semibold"> Seu tempo é valioso demais para esperar.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-harteck-red/10 border border-harteck-red/30 flex items-center justify-center text-2xl font-bold text-harteck-red flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Máquina reserva durante manutenção</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Se o reparo exige retirada do equipamento, deixamos uma máquina equivalente no local.
                    <span className="text-white font-semibold"> Zero downtime operacional.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-harteck-red/10 border border-harteck-red/30 flex items-center justify-center text-2xl font-bold text-harteck-red flex-shrink-0">
                  04
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Manutenção preventiva trimestral</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Visitas agendadas para limpeza, atualização e verificação térmica/elétrica.
                    <span className="text-white font-semibold"> Problemas resolvidos antes de acontecerem.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 border border-harteck-red/30 bg-harteck-red/5 text-center">
            <p className="text-xl text-gray-300">
              <span className="text-harteck-red font-bold">Garantia que importa:</span> enquanto sua máquina estiver em manutenção,
              sua operação continua rodando com nosso backup. Sem burocacia, sem espera.
            </p>
          </div>
        </div>
      </section>

      {/* Customização Estética - Argumento premium */}
      <section className="relative py-32 px-6 bg-black border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Tecnologia que <span className="text-harteck-red">respeita</span> seu investimento estético
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Você contratou os melhores arquitetos. Investiu em móveis planejados, iluminação cênica, acabamentos premium.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                E aí coloca uma <span className="text-white font-semibold">torre preta genérica</span> de R$ 5 mil que parece uma máquina de lan house?
              </p>
              <p className="text-xl text-white leading-relaxed font-semibold">
                Nós não aceitamos isso.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-harteck-red/20 bg-gradient-to-br from-harteck-red/5 to-transparent">
              <h3 className="text-2xl font-bold text-harteck-red">Customização total</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-2xl">→</span>
                  <span><strong>Gabinetes sob medida:</strong> cores, texturas e materiais alinhados ao seu projeto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-2xl">→</span>
                  <span><strong>Acabamento premium:</strong> alumínio escovado, aço inox, pintura automotiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-2xl">→</span>
                  <span><strong>Operação silenciosa:</strong> cooling customizado para ambientes corporativos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-harteck-red text-2xl">→</span>
                  <span><strong>Design discreto ou statement:</strong> você decide se quer invisibilidade ou protagonismo</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic pt-4 border-t border-gray-800">
                Trabalhamos junto ao seu arquiteto/designer para garantir integração perfeita.
              </p>
            </div>
          </div>

          <div className="text-center p-10 bg-gradient-to-r from-transparent via-harteck-red/10 to-transparent border-y border-harteck-red/20">
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              "Se você investiu <span className="text-white font-bold">R$ 500 mil</span> no seu escritório,
              por que aceitar um computador que <span className="text-harteck-red font-bold">desvaloriza</span> o ambiente?"
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona - Processo */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Como construímos sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light">solução</span>
          </h2>

          <div className="space-y-12">
            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 border border-gray-800 hover:border-harteck-red/50 transition-all duration-500 bg-black/50">
              <div className="md:col-span-2 text-6xl font-bold text-harteck-red/40 group-hover:text-harteck-red transition-colors">01</div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Visita técnica gratuita</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300">
                  Vamos até você entender seu caso de uso, volume de operação, restrições de espaço e integração estética necessária.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 border border-gray-800 hover:border-harteck-red/50 transition-all duration-500 bg-black/50">
              <div className="md:col-span-2 text-6xl font-bold text-harteck-red/40 group-hover:text-harteck-red transition-colors">02</div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Projeto técnico personalizado</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300">
                  Especificação exata de hardware, configuração térmica, escolha estética e proposta de SLA. Transparência total nos custos.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 border border-gray-800 hover:border-harteck-red/50 transition-all duration-500 bg-black/50">
              <div className="md:col-span-2 text-6xl font-bold text-harteck-red/40 group-hover:text-harteck-red transition-colors">03</div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Construção e validação</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300">
                  Montagem artesanal, stress test de 72h, instalação do sistema operacional otimizado e dos seus softwares críticos.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 border border-gray-800 hover:border-harteck-red/50 transition-all duration-500 bg-black/50">
              <div className="md:col-span-2 text-6xl font-bold text-harteck-red/40 group-hover:text-harteck-red transition-colors">04</div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Entrega e onboarding</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300">
                  Instalação no local, treinamento da equipe, documentação completa de hardware e início do suporte 24/7 dedicado.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-400">
              Tempo típico do projeto completo: <span className="text-white font-bold">2 a 3 semanas</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Casos */}
      <section className="relative py-32 px-6 bg-black border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Construído por quem <span className="text-harteck-red">prova</span> competência
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Não somos integradores comuns. Somos especialistas em hardware extremo que aplicam precisão de overclock mundial em soluções corporativas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 bg-gradient-to-b from-gray-900 to-black text-center space-y-4">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold">Recordes Mundiais de Overclock</h3>
              <p className="text-gray-400 text-sm">
                Nosso fundador detém múltiplos recordes internacionais. Se sabemos extrair 7GHz de uma CPU com nitrogênio líquido,
                imagine o que fazemos em operação 24/7.
              </p>
            </div>

            <div className="p-8 border border-gray-800 bg-gradient-to-b from-gray-900 to-black text-center space-y-4">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold">Maior Modder de GPUs do Mundo</h3>
              <p className="text-gray-400 text-sm">
                Modificação física de placas de vídeo para performance extrema.
                Essa engenharia reversa se traduz em diagnóstico cirúrgico quando algo falha.
              </p>
            </div>

            <div className="p-8 border border-gray-800 bg-gradient-to-b from-gray-900 to-black text-center space-y-4">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold">15+ Anos em Hardware Crítico</h3>
              <p className="text-gray-400 text-sm">
                De bancadas de overclock a workstations profissionais.
                Entendemos hardware no nível que só quem quebra e reconstrói componentes consegue.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-harteck-red/5 via-harteck-red/10 to-harteck-red/5 border border-harteck-red/20">
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
              <span className="text-harteck-red font-bold">Por que isso importa?</span> Porque quando sua workstation apresentar instabilidade,
              não será um técnico de suporte lendo manual — será quem entende silício, firmware e física térmica resolvendo em minutos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final - Agendar Visita */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black via-harteck-red/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_60%)]"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            {getContent('corporate.cta.title', 'Pronto para tecnologia sem compromisso?')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {getContent('corporate.cta.subtitle', 'Agende uma visita técnica gratuita. Vamos entender sua operação e propor a solução exata — sem downtime, sem surpresas, sem improvisação.')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a
              href={getContent('corporate.cta.primary_link', 'https://wa.me/5511999999999')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-harteck-red text-white text-xl font-bold hover:bg-harteck-red-light transition-all duration-300 hover:scale-110 shadow-2xl shadow-harteck-red/40 hover:shadow-harteck-red/60"
            >
              {getContent('corporate.cta.primary_button', 'Agendar visita técnica →')}
            </a>

            <a
              href="#contato"
              className="inline-block px-12 py-6 border-2 border-gray-600 text-white text-xl font-bold hover:border-harteck-red hover:text-harteck-red transition-all duration-300"
            >
              Ou envie uma mensagem
            </a>
          </div>

          <p className="text-sm text-gray-500 pt-8">
            Atendimento exclusivo para Grande São Paulo • Visita sem compromisso
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="relative border-t border-gray-800 py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4">HTK <span className="text-harteck-red">CORP</span></div>
              <p className="text-gray-400 text-sm mb-4">
                Workstations corporativas de alto padrão para empresas que não podem parar.
              </p>
              <p className="text-gray-500 text-xs">
                Uma divisão <span className="text-harteck-red font-semibold">Harteck</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Contato</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>WhatsApp: (11) 9.9999-9999</li>
                <li>Email: contato@htk.tec.br</li>
                <li>Atendimento 24/7 para clientes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Área de Atuação</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Grande São Paulo</li>
                <li>Atendimento emergencial em até 2h</li>
                <li>Visitas técnicas sem custo</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs text-gray-600">
              Performance validada. Suporte garantido. Estética integrada.
            </p>
            <p className="text-xs text-gray-700 mt-2">
              Teclab | Overclock & Hardware Engineering desde 2010
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
