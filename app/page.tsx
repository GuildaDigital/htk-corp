export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-harteck-red/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight animate-fade-in">
            HTK <span className="text-harteck-red">CORP</span>
          </div>
          <button className="px-6 py-2 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-harteck-red/50">
            Consultoria Técnica
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
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight animate-slide-up">
            Performance que existe
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
              fora do PowerPoint.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Computadores de alta performance construídos por quem quebra <span className="text-harteck-red font-semibold">recordes mundiais</span> de overclock.
            <br />
            Não vendemos especificações. Entregamos sistemas <span className="text-white font-semibold">validados, afinados, provados</span>.
          </p>
          <button className="mt-8 px-10 py-5 bg-harteck-red text-white text-lg font-medium hover:bg-harteck-red-light transition-all duration-300 hover:scale-105 shadow-2xl shadow-harteck-red/30 hover:shadow-harteck-red/50 animate-pulse-glow">
            Agende uma consultoria técnica →
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
              <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">Multi-recordista mundial em overclock</p>
            </div>
            <div className="group cursor-default animate-slide-up" style={{animationDelay: '0.1s'}}>
              <span className="text-harteck-red font-bold text-2xl group-hover:scale-125 inline-block transition-transform">●</span>
              <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">Maior modder de GPUs do mundo</p>
            </div>
            <div className="group cursor-default animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <span className="text-harteck-red font-bold text-2xl group-hover:scale-125 inline-block transition-transform">●</span>
              <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">15+ anos refinando performance extrema</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase de PCs - Nova seção */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-harteck-red/5 to-black"></div>

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            Máquinas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light">definem recordes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* PC Gaming - Placeholder */}
            <div className="group relative overflow-hidden border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:shadow-2xl hover:shadow-harteck-red/20 bg-gradient-to-br from-black via-harteck-red/5 to-black">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder para imagem */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
                <div className="relative z-10 text-center space-y-4 p-8">
                  <div className="text-6xl mb-4">🎮</div>
                  <div className="text-xl font-bold text-harteck-red">GAMING BEAST</div>
                  <div className="text-sm text-gray-400">RTX 5090 | i9-14900KS OC @ 6.2GHz</div>
                  <div className="text-xs text-gray-500 mt-4">[Imagem do PC Gaming Premium]</div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-harteck-red/20 to-transparent"></div>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-400 text-sm">Cooling custom loop | Silent operation | 360Hz ready</p>
              </div>
            </div>

            {/* PC Workstation - Placeholder */}
            <div className="group relative overflow-hidden border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:shadow-2xl hover:shadow-harteck-red/20 bg-gradient-to-br from-black via-harteck-red/5 to-black">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
                <div className="relative z-10 text-center space-y-4 p-8">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-xl font-bold text-harteck-red">AI POWERHOUSE</div>
                  <div className="text-sm text-gray-400">4x RTX 4090 | AMD Threadripper PRO</div>
                  <div className="text-xs text-gray-500 mt-4">[Imagem do PC AI/ML Workstation]</div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-harteck-red/20 to-transparent"></div>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-400 text-sm">256GB ECC RAM | NVMe RAID | 24/7 validated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="relative max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Nós acreditamos que computadores não são <span className="text-harteck-red">caixinhas com peças</span>.
          </h2>
          <p className="text-2xl text-gray-400 leading-relaxed">
            São <span className="text-white font-semibold">instrumentos de precisão</span>.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            Acreditamos que performance não se compra: <span className="text-white font-medium">se constrói, se valida, se prova</span>.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            Fomos formados na <span className="text-harteck-red font-semibold">bancada</span> — onde números são medidos, não prometidos.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            É por isso que cada máquina da Harteck nasce com três princípios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="group space-y-4 p-6 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-300 hover:bg-harteck-red/5 cursor-default">
              <div className="text-7xl font-bold text-harteck-red/20 group-hover:text-harteck-red/40 transition-colors">01</div>
              <h3 className="text-xl font-bold group-hover:text-harteck-red transition-colors">Escolha cirúrgica de componentes</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Não é hype; é engenharia.</p>
            </div>
            <div className="group space-y-4 p-6 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-300 hover:bg-harteck-red/5 cursor-default">
              <div className="text-7xl font-bold text-harteck-red/20 group-hover:text-harteck-red/40 transition-colors">02</div>
              <h3 className="text-xl font-bold group-hover:text-harteck-red transition-colors">Integração meticulosa</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Hardware, firmware e software afinados como um único sistema.</p>
            </div>
            <div className="group space-y-4 p-6 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-300 hover:bg-harteck-red/5 cursor-default">
              <div className="text-7xl font-bold text-harteck-red/20 group-hover:text-harteck-red/40 transition-colors">03</div>
              <h3 className="text-xl font-bold group-hover:text-harteck-red transition-colors">Validação em carga real</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Benchmarks, stress, telemetria e ajustes finos até o último MHz estável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Técnico */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-harteck-red/5 via-harteck-red/10 to-harteck-red/5 border-y border-harteck-red/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            O que nos separa <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red via-harteck-red-light to-harteck-red">do mercado</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group space-y-6 p-8 bg-black/50 border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-harteck-red/20 cursor-default">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Overclock Multi-Recordista Mundial</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Nosso fundador não lê sobre overclock. Ele <span className="text-harteck-red font-semibold">define os recordes</span>.
                Cada CPU e GPU passa por afinação manual para extrair performance estável máxima.
              </p>
            </div>
            <div className="group space-y-6 p-8 bg-black/50 border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-harteck-red/20 cursor-default">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Modding Extremo de Hardware</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Do BIOS modificado às <span className="text-harteck-red font-semibold">alterações físicas</span> em placas de vídeo.
                Você não encontrará esse nível de customização em nenhum outro integrador.
              </p>
            </div>
            <div className="group space-y-6 p-8 bg-black/50 border border-harteck-red/30 hover:border-harteck-red transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-harteck-red/20 cursor-default">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold group-hover:text-harteck-red transition-colors">Afinação Cirúrgica do Windows</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Sistema operacional otimizado ao <span className="text-harteck-red font-semibold">nível de kernel</span>.
                Latência reduzida. Processos desnecessários eliminados. Apenas performance pura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>

        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Para quem constrói <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light">o impossível</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gaming Extremo */}
            <div className="group relative overflow-hidden border border-harteck-red/20 p-8 hover:border-harteck-red transition-all duration-500 bg-black/50 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-harteck-red/30">
              <div className="absolute inset-0 bg-gradient-to-br from-harteck-red/0 to-harteck-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🎮</div>
                <h3 className="text-2xl font-bold mb-4 text-harteck-red group-hover:text-harteck-red-light transition-colors">Gaming Extremo</h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  Para o competitivo que mede vitórias em milissegundos.
                  Para o entusiasta que exige o topo absoluto.
                </p>
                <ul className="space-y-3 text-sm text-gray-400 group-hover:text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> FPS consistente acima de 360Hz</li>
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Latência sub-1ms</li>
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Cooling silencioso mesmo sob carga extrema</li>
                </ul>
              </div>
            </div>

            {/* Workstation AI/ML */}
            <div className="group relative overflow-hidden border border-harteck-red/20 p-8 hover:border-harteck-red transition-all duration-500 bg-black/50 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-harteck-red/30">
              <div className="absolute inset-0 bg-gradient-to-br from-harteck-red/0 to-harteck-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-harteck-red group-hover:text-harteck-red-light transition-colors">Workstation AI/ML</h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  Para quem treina modelos localmente.
                  Para quem não pode esperar o cloud responder.
                </p>
                <ul className="space-y-3 text-sm text-gray-400 group-hover:text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Multi-GPU otimizado para CUDA/ROCm</li>
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Throughput validado em cargas reais</li>
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Estabilidade térmica 24/7</li>
                </ul>
              </div>
            </div>

            {/* Enterprise Performance */}
            <div className="group relative overflow-hidden border border-harteck-red/20 p-8 hover:border-harteck-red transition-all duration-500 bg-black/50 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-harteck-red/30">
              <div className="absolute inset-0 bg-gradient-to-br from-harteck-red/0 to-harteck-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold mb-4 text-harteck-red group-hover:text-harteck-red-light transition-colors">Enterprise Performance</h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  Para empresas onde downtime custa seis dígitos.
                  Para operações que exigem confiabilidade inabalável.
                </p>
                <ul className="space-y-3 text-sm text-gray-400 group-hover:text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Componentes enterprise-grade testados individualmente</li>
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Redundância térmica e elétrica</li>
                  <li className="flex items-center gap-2"><span className="text-harteck-red text-xl">→</span> Suporte técnico direto com quem construiu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-harteck-red/5 via-black to-harteck-red/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Como construímos <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red to-harteck-red-light">performance</span>
          </h2>

          <div className="space-y-16">
            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-500 hover:bg-harteck-red/5 cursor-default">
              <div className="md:col-span-2 text-7xl font-bold text-harteck-red/30 group-hover:text-harteck-red/60 transition-colors">01</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-harteck-red transition-colors">Seleção</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                  Cada componente é testado individualmente.
                  <span className="text-white font-semibold"> Silicon lottery</span> não é sorte quando você mede cada chip.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-500 hover:bg-harteck-red/5 cursor-default">
              <div className="md:col-span-2 text-7xl font-bold text-harteck-red/30 group-hover:text-harteck-red/60 transition-colors">02</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-harteck-red transition-colors">Integração</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                  Montagem com <span className="text-white font-semibold">ferramentas de precisão</span>.
                  Thermal pads customizados. Paste application validada termicamente.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-500 hover:bg-harteck-red/5 cursor-default">
              <div className="md:col-span-2 text-7xl font-bold text-harteck-red/30 group-hover:text-harteck-red/60 transition-colors">03</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-harteck-red transition-colors">Validação</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                  <span className="text-harteck-red font-bold">72h</span> de stress sob monitoramento.
                  Se não passa, não sai.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 border border-harteck-red/20 hover:border-harteck-red/50 transition-all duration-500 hover:bg-harteck-red/5 cursor-default">
              <div className="md:col-span-2 text-7xl font-bold text-harteck-red/30 group-hover:text-harteck-red/60 transition-colors">04</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-harteck-red transition-colors">Entrega</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                  <span className="text-white font-semibold">Documentação completa</span> de testes.
                  Você sabe exatamente o que está recebendo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-harteck-red/10 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_60%)]"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-harteck-red via-harteck-red-light to-harteck-red animate-pulse">performance real</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Agende uma <span className="text-white font-semibold">consultoria técnica gratuita</span>.
            <br />
            Vamos entender sua necessidade e construir a máquina exata para seu caso de uso.
          </p>
          <button className="mt-12 px-12 py-6 bg-harteck-red text-white text-xl font-bold hover:bg-harteck-red-light transition-all duration-300 hover:scale-110 shadow-2xl shadow-harteck-red/40 hover:shadow-harteck-red/60 animate-pulse-glow">
            Falar com especialista →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-harteck-red/20 py-12 px-6 bg-gradient-to-b from-harteck-red/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold">HTK <span className="text-harteck-red">CORP</span></div>
            <p className="text-gray-400 text-sm">Uma divisão <span className="text-harteck-red font-semibold">Harteck</span></p>
            <p className="text-gray-500 text-sm">Teclab | Overclock & Modding desde 2010</p>
            <div className="pt-6 text-xs text-gray-600">
              Performance validada. Números medidos. Recordes quebrados.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
