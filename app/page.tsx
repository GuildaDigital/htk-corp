export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">HTK CORP</div>
          <button className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors">
            Consultoria Técnica
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            Performance que existe
            <br />
            <span className="text-gray-400">fora do PowerPoint.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Computadores de alta performance construídos por quem quebra recordes mundiais de overclock.
            <br />
            Não vendemos especificações. Entregamos sistemas validados, afinados, provados.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-black text-lg font-medium hover:bg-gray-200 transition-colors">
            Agende uma consultoria técnica →
          </button>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-gray-400">
            <div>Multi-recordista mundial em overclock</div>
            <div>Maior modder de GPUs do mundo</div>
            <div>15+ anos refinando performance extrema</div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Nós acreditamos que computadores não são caixinhas com peças.
          </h2>
          <p className="text-2xl text-gray-400 leading-relaxed">
            São instrumentos de precisão.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            Acreditamos que performance não se compra: <span className="text-white font-medium">se constrói, se valida, se prova</span>.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            Fomos formados na bancada — onde números são medidos, não prometidos.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            É por isso que cada máquina da Harteck nasce com três princípios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-white/10">01</div>
              <h3 className="text-xl font-bold">Escolha cirúrgica de componentes</h3>
              <p className="text-gray-400">Não é hype; é engenharia.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-white/10">02</div>
              <h3 className="text-xl font-bold">Integração meticulosa</h3>
              <p className="text-gray-400">Hardware, firmware e software afinados como um único sistema.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-white/10">03</div>
              <h3 className="text-xl font-bold">Validação em carga real</h3>
              <p className="text-gray-400">Benchmarks, stress, telemetria e ajustes finos até o último MHz estável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Técnico */}
      <section className="py-32 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            O que nos separa do mercado
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Overclock Multi-Recordista Mundial</h3>
              <p className="text-gray-400 leading-relaxed">
                Nosso fundador não lê sobre overclock. Ele define os recordes.
                Cada CPU e GPU passa por afinação manual para extrair performance estável máxima.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Modding Extremo de Hardware</h3>
              <p className="text-gray-400 leading-relaxed">
                Do BIOS modificado às alterações físicas em placas de vídeo.
                Você não encontrará esse nível de customização em nenhum outro integrador.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Afinação Cirúrgica do Windows</h3>
              <p className="text-gray-400 leading-relaxed">
                Sistema operacional otimizado ao nível de kernel.
                Latência reduzida. Processos desnecessários eliminados. Apenas performance pura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Para quem constrói o impossível
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gaming Extremo */}
            <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Gaming Extremo</h3>
              <p className="text-gray-400 mb-6">
                Para o competitivo que mede vitórias em milissegundos.
                Para o entusiasta que exige o topo absoluto.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>→ FPS consistente acima de 360Hz</li>
                <li>→ Latência sub-1ms</li>
                <li>→ Cooling silencioso mesmo sob carga extrema</li>
              </ul>
            </div>

            {/* Workstation AI/ML */}
            <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Workstation AI/ML</h3>
              <p className="text-gray-400 mb-6">
                Para quem treina modelos localmente.
                Para quem não pode esperar o cloud responder.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>→ Multi-GPU otimizado para CUDA/ROCm</li>
                <li>→ Throughput validado em cargas reais</li>
                <li>→ Estabilidade térmica 24/7</li>
              </ul>
            </div>

            {/* Enterprise Performance */}
            <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Enterprise Performance</h3>
              <p className="text-gray-400 mb-6">
                Para empresas onde downtime custa seis dígitos.
                Para operações que exigem confiabilidade inabalável.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>→ Componentes enterprise-grade testados individualmente</li>
                <li>→ Redundância térmica e elétrica</li>
                <li>→ Suporte técnico direto com quem construiu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-32 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Como construímos performance
          </h2>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 text-6xl font-bold text-white/10">01</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-2xl font-bold">Seleção</h3>
                <p className="text-gray-400 text-lg">
                  Cada componente é testado individualmente.
                  Silicon lottery não é sorte quando você mede cada chip.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 text-6xl font-bold text-white/10">02</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-2xl font-bold">Integração</h3>
                <p className="text-gray-400 text-lg">
                  Montagem com ferramentas de precisão.
                  Thermal pads customizados. Paste application validada termicamente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 text-6xl font-bold text-white/10">03</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-2xl font-bold">Validação</h3>
                <p className="text-gray-400 text-lg">
                  72h de stress sob monitoramento.
                  Se não passa, não sai.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 text-6xl font-bold text-white/10">04</div>
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-2xl font-bold">Entrega</h3>
                <p className="text-gray-400 text-lg">
                  Documentação completa de testes.
                  Você sabe exatamente o que está recebendo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold">
            Pronto para performance real?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Agende uma consultoria técnica gratuita.
            Vamos entender sua necessidade e construir a máquina exata para seu caso de uso.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-black text-lg font-medium hover:bg-gray-200 transition-colors">
            Falar com especialista →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold">HTK CORP</div>
            <p className="text-gray-400 text-sm">Uma divisão Harteck</p>
            <p className="text-gray-500 text-sm">Teclab | Overclock & Modding desde 2010</p>
          </div>
        </div>
      </footer>
    </>
  );
}
