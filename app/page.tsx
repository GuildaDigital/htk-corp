import { getElements, buildClassName, getContent } from '@/lib/getElements'

export default async function Home() {
  // SSR: Busca elementos do banco no servidor
  const elements = await getElements()

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-harteck-red/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={buildClassName(elements['nav.logo']) || "text-2xl font-bold tracking-tight animate-fade-in"}>
            {getContent(elements['nav.logo'], 'HTK')} <span className="text-harteck-red">{getContent(elements['nav.logo.accent'], 'CORP')}</span>
          </div>
          <button className={buildClassName(elements['nav.button']) || "px-6 py-2 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-harteck-red/50"}>
            {getContent(elements['nav.button'], 'Consultoria Técnica')}
          </button>
        </div>
      </nav>

      {/* Hero Section com Gradiente */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Gradiente de fundo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-harteck-red/10 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.05),transparent_50%)]"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className={buildClassName(elements['hero.title']) || "text-6xl md:text-8xl font-bold leading-tight tracking-tight animate-slide-up"}>
            {getContent(elements['hero.title'], 'Performance que existe')}
            <br />
            <span className={buildClassName(elements['hero.subtitle']) || "text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400"}>
              {getContent(elements['hero.subtitle'], 'fora do PowerPoint.')}
            </span>
          </h1>
          <p className={buildClassName(elements['hero.description']) || "text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up"} style={{animationDelay: '0.2s'}}>
            {getContent(elements['hero.description'], 'Computadores de alta performance construídos por quem quebra recordes mundiais de overclock. Não vendemos especificações. Entregamos sistemas validados, afinados, provados.')}
          </p>
          <button className={buildClassName(elements['hero.cta']) || "mt-8 px-10 py-5 bg-harteck-red text-white text-lg font-medium hover:bg-harteck-red-light transition-all duration-300 hover:scale-105 shadow-2xl shadow-harteck-red/30 hover:shadow-harteck-red/50 animate-pulse-glow"}>
            {getContent(elements['hero.cta'], 'Agende uma consultoria técnica →')}
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-harteck-red/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-harteck-red rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="relative border-y border-harteck-red/20 bg-harteck-red/5 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-harteck-red/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group cursor-default animate-slide-in-left">
              <span className="text-harteck-red font-bold text-2xl group-hover:scale-125 inline-block transition-transform">●</span>
              <p className={buildClassName(elements['credibility.1']) || "text-sm text-gray-400 mt-2 group-hover:text-white transition-colors"}>
                {getContent(elements['credibility.1'], 'Multi-recordista mundial em overclock')}
              </p>
            </div>
            <div className="group cursor-default animate-slide-up" style={{animationDelay: '0.1s'}}>
              <span className="text-harteck-red font-bold text-2xl group-hover:scale-125 inline-block transition-transform">●</span>
              <p className={buildClassName(elements['credibility.2']) || "text-sm text-gray-400 mt-2 group-hover:text-white transition-colors"}>
                {getContent(elements['credibility.2'], 'Maior modder de GPUs do mundo')}
              </p>
            </div>
            <div className="group cursor-default animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <span className="text-harteck-red font-bold text-2xl group-hover:scale-125 inline-block transition-transform">●</span>
              <p className={buildClassName(elements['credibility.3']) || "text-sm text-gray-400 mt-2 group-hover:text-white transition-colors"}>
                {getContent(elements['credibility.3'], '15+ anos refinando performance extrema')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase de PCs - Nova seção */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-harteck-red/5 to-black"></div>

        <div className="relative max-w-7xl mx-auto">
          <h2 className={buildClassName(elements['showcase.title']) || "text-5xl md:text-6xl font-bold mb-20 text-center"}>
            {getContent(elements['showcase.title'], 'Máquinas que')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light">{getContent(elements['showcase.title.accent'], 'definem recordes')}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* PC Gaming - Placeholder */}
            <div className="group relative overflow-hidden border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:shadow-2xl hover:shadow-harteck-red/20 bg-gradient-to-br from-black via-harteck-red/5 to-black">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
                <div className="relative z-10 text-center space-y-4 p-8">
                  <div className="text-6xl mb-4">🎮</div>
                  <div className={buildClassName(elements['pc.gaming.title']) || "text-xl font-bold text-harteck-red"}>
                    {getContent(elements['pc.gaming.title'], 'GAMING BEAST')}
                  </div>
                  <div className={buildClassName(elements['pc.gaming.specs']) || "text-sm text-gray-400"}>
                    {getContent(elements['pc.gaming.specs'], 'RTX 5090 | i9-14900KS OC @ 6.2GHz')}
                  </div>
                  <div className="text-xs text-gray-500 mt-4">[Imagem do PC Gaming Premium]</div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-harteck-red/20 to-transparent"></div>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <p className={buildClassName(elements['pc.gaming.features']) || "text-gray-400 text-sm"}>
                  {getContent(elements['pc.gaming.features'], 'Cooling custom loop | Silent operation | 360Hz ready')}
                </p>
              </div>
            </div>

            {/* PC Workstation - Placeholder */}
            <div className="group relative overflow-hidden border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:shadow-2xl hover:shadow-harteck-red/20 bg-gradient-to-br from-black via-harteck-red/5 to-black">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
                <div className="relative z-10 text-center space-y-4 p-8">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className={buildClassName(elements['pc.ai.title']) || "text-xl font-bold text-harteck-red"}>
                    {getContent(elements['pc.ai.title'], 'AI POWERHOUSE')}
                  </div>
                  <div className={buildClassName(elements['pc.ai.specs']) || "text-sm text-gray-400"}>
                    {getContent(elements['pc.ai.specs'], '4x RTX 4090 | AMD Threadripper PRO')}
                  </div>
                  <div className="text-xs text-gray-500 mt-4">[Imagem do PC AI/ML Workstation]</div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-harteck-red/20 to-transparent"></div>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <p className={buildClassName(elements['pc.ai.features']) || "text-gray-400 text-sm"}>
                  {getContent(elements['pc.ai.features'], '256GB ECC RAM | NVMe RAID | 24/7 validated')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="relative max-w-4xl mx-auto space-y-12">
          <h2 className={buildClassName(elements['manifesto.title']) || "text-4xl md:text-5xl font-bold leading-tight"}>
            {getContent(elements['manifesto.title'], 'Nós acreditamos que computadores não são')} <span className="text-harteck-red">{getContent(elements['manifesto.title.accent'], 'caixinhas com peças')}</span>.
          </h2>
          <p className={buildClassName(elements['manifesto.text1']) || "text-2xl text-gray-400 leading-relaxed"}>
            {getContent(elements['manifesto.text1'], 'São instrumentos de precisão.')}
          </p>
          <p className={buildClassName(elements['manifesto.text2']) || "text-xl text-gray-400 leading-relaxed"}>
            {getContent(elements['manifesto.text2'], 'Acreditamos que performance não se compra: se constrói, se valida, se prova.')}
          </p>
          <p className={buildClassName(elements['manifesto.text3']) || "text-xl text-gray-400 leading-relaxed"}>
            {getContent(elements['manifesto.text3'], 'Fomos formados na bancada — onde números são medidos, não prometidos.')}
          </p>
          <p className={buildClassName(elements['manifesto.text4']) || "text-xl text-gray-400 leading-relaxed"}>
            {getContent(elements['manifesto.text4'], 'É por isso que cada máquina da Harteck nasce com três princípios:')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="group space-y-4 p-6 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-300 hover:bg-harteck-red/5 cursor-default">
              <div className="text-7xl font-bold text-harteck-red/20 group-hover:text-harteck-red/40 transition-colors">01</div>
              <h3 className={buildClassName(elements['manifesto.principle1.title']) || "text-xl font-bold group-hover:text-harteck-red transition-colors"}>
                {getContent(elements['manifesto.principle1.title'], 'Escolha cirúrgica de componentes')}
              </h3>
              <p className={buildClassName(elements['manifesto.principle1.desc']) || "text-gray-400 group-hover:text-gray-300 transition-colors"}>
                {getContent(elements['manifesto.principle1.desc'], 'Não é hype; é engenharia.')}
              </p>
            </div>
            <div className="group space-y-4 p-6 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-300 hover:bg-harteck-red/5 cursor-default">
              <div className="text-7xl font-bold text-harteck-red/20 group-hover:text-harteck-red/40 transition-colors">02</div>
              <h3 className={buildClassName(elements['manifesto.principle2.title']) || "text-xl font-bold group-hover:text-harteck-red transition-colors"}>
                {getContent(elements['manifesto.principle2.title'], 'Integração meticulosa')}
              </h3>
              <p className={buildClassName(elements['manifesto.principle2.desc']) || "text-gray-400 group-hover:text-gray-300 transition-colors"}>
                {getContent(elements['manifesto.principle2.desc'], 'Hardware, firmware e software afinados como um único sistema.')}
              </p>
            </div>
            <div className="group space-y-4 p-6 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-300 hover:bg-harteck-red/5 cursor-default">
              <div className="text-7xl font-bold text-harteck-red/20 group-hover:text-harteck-red/40 transition-colors">03</div>
              <h3 className={buildClassName(elements['manifesto.principle3.title']) || "text-xl font-bold group-hover:text-harteck-red transition-colors"}>
                {getContent(elements['manifesto.principle3.title'], 'Validação em carga real')}
              </h3>
              <p className={buildClassName(elements['manifesto.principle3.desc']) || "text-gray-400 group-hover:text-gray-300 transition-colors"}>
                {getContent(elements['manifesto.principle3.desc'], 'Benchmarks, stress, telemetria e ajustes finos até o último MHz estável.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-harteck-red/10 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_60%)]"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className={buildClassName(elements['cta.title']) || "text-5xl md:text-7xl font-bold leading-tight"}>
            {getContent(elements['cta.title'], 'Pronto para')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red via-harteck-red-light to-harteck-red animate-pulse">{getContent(elements['cta.title.accent'], 'performance real')}</span>?
          </h2>
          <p className={buildClassName(elements['cta.subtitle']) || "text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"}>
            {getContent(elements['cta.subtitle'], 'Agende uma consultoria técnica gratuita. Vamos entender sua necessidade e construir a máquina exata para seu caso de uso.')}
          </p>
          <button className={buildClassName(elements['cta.button']) || "mt-12 px-12 py-6 bg-harteck-red text-white text-xl font-bold hover:bg-harteck-red-light transition-all duration-300 hover:scale-110 shadow-2xl shadow-harteck-red/40 hover:shadow-harteck-red/60 animate-pulse-glow"}>
            {getContent(elements['cta.button'], 'Falar com especialista →')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-harteck-red/20 py-12 px-6 bg-gradient-to-b from-harteck-red/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className={buildClassName(elements['footer.brand']) || "text-3xl font-bold"}>
              {getContent(elements['footer.brand'], 'HTK')} <span className="text-harteck-red">{getContent(elements['footer.brand.accent'], 'CORP')}</span>
            </div>
            <p className={buildClassName(elements['footer.division']) || "text-gray-400 text-sm"}>
              {getContent(elements['footer.division'], 'Uma divisão Harteck')}
            </p>
            <p className={buildClassName(elements['footer.tagline']) || "text-gray-500 text-sm"}>
              {getContent(elements['footer.tagline'], 'Teclab | Overclock & Modding desde 2010')}
            </p>
            <div className={buildClassName(elements['footer.motto']) || "pt-6 text-xs text-gray-600"}>
              {getContent(elements['footer.motto'], 'Performance validada. Números medidos. Recordes quebrados.')}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
