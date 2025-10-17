"use client"

import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

interface EditableElement {
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

export default function VisualEditor() {
  const router = useRouter()
  const [elements, setElements] = useState<EditableElement[]>([])
  const [selectedElement, setSelectedElement] = useState<EditableElement | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [sectionFilter, setSectionFilter] = useState<string>("all")

  useEffect(() => {
    loadElements()
  }, [])

  const loadElements = async () => {
    try {
      const res = await fetch("/api/admin/elements")
      const data = await res.json()
      setElements(data)
    } catch (error) {
      console.error("Error loading elements:", error)
    }
  }

  const saveElement = async (element: EditableElement) => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/elements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(element)
      })

      if (res.ok) {
        setMessage("✓ Elemento salvo com sucesso!")
        await loadElements()
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("✗ Erro ao salvar elemento")
      }
    } catch (error) {
      setMessage("✗ Erro ao salvar elemento")
    } finally {
      setLoading(false)
    }
  }

  const updateField = (field: keyof EditableElement, value: string) => {
    if (!selectedElement) return
    
    const updated = { ...selectedElement, [field]: value || null }
    setSelectedElement(updated)
  }

  const handleSave = () => {
    if (selectedElement) {
      saveElement(selectedElement)
    }
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/")
  }

  const filteredElements = elements.filter(el => {
    const matchesSearch = el.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         el.content?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSection = sectionFilter === "all" || el.section === sectionFilter
    return matchesSearch && matchesSection
  })

  const sections = Array.from(new Set(elements.map(el => el.section).filter(Boolean)))

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar - Lista de Elementos */}
      <div className="w-80 border-r border-harteck-red/30 bg-black/90 overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-harteck-red/30 sticky top-0 bg-black z-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">
              HTK <span className="text-harteck-red">EDITOR</span>
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => router.push("/admin/dashboard")}
                className="text-xs px-3 py-1 border border-harteck-red/30 hover:border-harteck-red transition-colors"
              >
                📊 Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="text-xs px-3 py-1 border border-harteck-red/30 hover:border-harteck-red transition-colors"
              >
                Sair
              </button>
            </div>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Buscar elemento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none mb-2"
          />

          {/* Section Filter */}
          <select
            value={sectionFilter}
            onChange={(e) => setSectionFilter(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
          >
            <option value="all">Todas as seções</option>
            {sections.map(section => (
              <option key={section} value={section || ''}>{section}</option>
            ))}
          </select>
        </div>

        {/* Elements List */}
        <div className="p-2">
          {filteredElements.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              Nenhum elemento encontrado
            </div>
          ) : (
            filteredElements.map((element) => (
              <button
                key={element.id}
                onClick={() => setSelectedElement(element)}
                className={`w-full text-left p-3 mb-2 border transition-all ${
                  selectedElement?.id === element.id
                    ? "border-harteck-red bg-harteck-red/10"
                    : "border-harteck-red/20 hover:border-harteck-red/50 hover:bg-harteck-red/5"
                }`}
              >
                <div className="text-xs text-harteck-red font-mono mb-1">{element.key}</div>
                <div className="text-sm text-gray-400 truncate">
                  {element.content || "(sem conteúdo)"}
                </div>
                {element.section && (
                  <div className="text-xs text-gray-600 mt-1">
                    📁 {element.section}
                  </div>
                )}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Editor Panel */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl border-b border-harteck-red/30 p-4">
          {message && (
            <div className={`mb-3 p-3 border text-sm ${
              message.startsWith("✓") 
                ? "border-green-500/50 bg-green-500/10 text-green-400"
                : "border-red-500/50 bg-red-500/10 text-red-400"
            }`}>
              {message}
            </div>
          )}

          {selectedElement && (
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">Editando</div>
                <div className="text-lg font-bold font-mono text-harteck-red">
                  {selectedElement.key}
                </div>
              </div>
              <button
                onClick={handleSave}
                disabled={loading}
                className="px-6 py-2 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-colors disabled:opacity-50"
              >
                {loading ? "Salvando..." : "💾 Salvar Alterações"}
              </button>
            </div>
          )}
        </div>

        {/* Editor Content */}
        <div className="p-6">
          {!selectedElement ? (
            <div className="flex items-center justify-center h-96 text-gray-500">
              ← Selecione um elemento para editar
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Conteúdo */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  📝 Conteúdo
                </label>
                <textarea
                  value={selectedElement.content || ""}
                  onChange={(e) => updateField("content", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-harteck-red/30 text-white focus:border-harteck-red outline-none resize-vertical"
                  placeholder="Digite o conteúdo do elemento..."
                />
              </div>

              {/* Tipografia */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">🔤 Tipografia</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Tamanho da Fonte</label>
                    <input
                      type="text"
                      value={selectedElement.fontSize || ""}
                      onChange={(e) => updateField("fontSize", e.target.value)}
                      placeholder="Ex: text-6xl ou 48px"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Peso da Fonte</label>
                    <input
                      type="text"
                      value={selectedElement.fontWeight || ""}
                      onChange={(e) => updateField("fontWeight", e.target.value)}
                      placeholder="Ex: font-bold ou 700"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Família da Fonte</label>
                    <input
                      type="text"
                      value={selectedElement.fontFamily || ""}
                      onChange={(e) => updateField("fontFamily", e.target.value)}
                      placeholder="Ex: font-sans"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Altura da Linha</label>
                    <input
                      type="text"
                      value={selectedElement.lineHeight || ""}
                      onChange={(e) => updateField("lineHeight", e.target.value)}
                      placeholder="Ex: leading-tight ou 1.2"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs text-gray-400 mb-2">Espaçamento entre Letras</label>
                    <input
                      type="text"
                      value={selectedElement.letterSpacing || ""}
                      onChange={(e) => updateField("letterSpacing", e.target.value)}
                      placeholder="Ex: tracking-tight ou 0.05em"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Cores */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">🎨 Cores</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Cor do Texto</label>
                    <input
                      type="text"
                      value={selectedElement.textColor || ""}
                      onChange={(e) => updateField("textColor", e.target.value)}
                      placeholder="Ex: text-white ou #FFFFFF"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Cor de Fundo</label>
                    <input
                      type="text"
                      value={selectedElement.bgColor || ""}
                      onChange={(e) => updateField("bgColor", e.target.value)}
                      placeholder="Ex: bg-black ou #000000"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Espaçamento */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">📏 Espaçamento</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Padding (interno)</label>
                    <input
                      type="text"
                      value={selectedElement.padding || ""}
                      onChange={(e) => updateField("padding", e.target.value)}
                      placeholder="Ex: p-6 ou px-4 py-2"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Margin (externo)</label>
                    <input
                      type="text"
                      value={selectedElement.margin || ""}
                      onChange={(e) => updateField("margin", e.target.value)}
                      placeholder="Ex: mt-8 ou mx-auto"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Layout */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">📐 Layout</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Display</label>
                    <input
                      type="text"
                      value={selectedElement.display || ""}
                      onChange={(e) => updateField("display", e.target.value)}
                      placeholder="Ex: block, flex, inline-block"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Alinhamento</label>
                    <input
                      type="text"
                      value={selectedElement.alignment || ""}
                      onChange={(e) => updateField("alignment", e.target.value)}
                      placeholder="Ex: text-center, items-center"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Efeitos */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">✨ Efeitos</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Animação</label>
                    <input
                      type="text"
                      value={selectedElement.animation || ""}
                      onChange={(e) => updateField("animation", e.target.value)}
                      placeholder="Ex: animate-fade-in"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Transição</label>
                    <input
                      type="text"
                      value={selectedElement.transition || ""}
                      onChange={(e) => updateField("transition", e.target.value)}
                      placeholder="Ex: transition-all duration-300"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Hover (classes ao passar o mouse)</label>
                    <input
                      type="text"
                      value={selectedElement.hover || ""}
                      onChange={(e) => updateField("hover", e.target.value)}
                      placeholder="Ex: hover:bg-harteck-red-light"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">🏷️ Metadata</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Seção</label>
                    <input
                      type="text"
                      value={selectedElement.section || ""}
                      onChange={(e) => updateField("section", e.target.value)}
                      placeholder="Ex: hero, nav, footer"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">Tipo de Elemento</label>
                    <input
                      type="text"
                      value={selectedElement.elementType || ""}
                      onChange={(e) => updateField("elementType", e.target.value)}
                      placeholder="Ex: heading, paragraph, button"
                      className="w-full px-3 py-2 bg-black border border-harteck-red/30 text-sm focus:border-harteck-red outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* CSS Custom */}
              <div className="border border-harteck-red/20 p-6 bg-black/50">
                <h3 className="text-lg font-bold mb-4 text-harteck-red">⚡ CSS Customizado (Avançado)</h3>
                <textarea
                  value={selectedElement.customCSS || ""}
                  onChange={(e) => updateField("customCSS", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-harteck-red/30 text-white font-mono text-sm focus:border-harteck-red outline-none resize-vertical"
                  placeholder="/* CSS customizado aqui ou JSON com estilos */"
                />
              </div>

              {/* Save Button (bottom) */}
              <div className="sticky bottom-0 bg-black/90 backdrop-blur-xl border-t border-harteck-red/30 p-4 -mx-6 -mb-6">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="w-full py-3 bg-harteck-red text-white font-bold hover:bg-harteck-red-light transition-colors disabled:opacity-50"
                >
                  {loading ? "Salvando..." : "💾 Salvar Todas as Alterações"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}