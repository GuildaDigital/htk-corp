"use client"

import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

interface ContentItem {
  id: string
  key: string
  value: string
  type: string
}

interface ImageItem {
  id: string
  key: string
  url: string
  alt: string | null
}

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"content" | "images" | "invites">("content")
  const [contents, setContents] = useState<ContentItem[]>([])
  const [images, setImages] = useState<ImageItem[]>([])
  const [inviteEmail, setInviteEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    loadContents()
    loadImages()
  }, [])

  const loadContents = async () => {
    const res = await fetch("/api/admin/content")
    const data = await res.json()
    setContents(data)
  }

  const loadImages = async () => {
    const res = await fetch("/api/admin/images")
    const data = await res.json()
    setImages(data)
  }

  const updateContent = async (key: string, value: string) => {
    await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value, type: "text" })
    })
    loadContents()
  }

  const handleImageUpload = async (key: string, file: File) => {
    setLoading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("key", key)

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData
      })

      if (res.ok) {
        setMessage("Imagem enviada com sucesso!")
        loadImages()
      } else {
        setMessage("Erro ao enviar imagem")
      }
    } catch (error) {
      setMessage("Erro ao enviar imagem")
    } finally {
      setLoading(false)
      setTimeout(() => setMessage(""), 3000)
    }
  }

  const sendInvite = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inviteEmail })
      })

      if (res.ok) {
        setMessage("Convite enviado com sucesso!")
        setInviteEmail("")
      } else {
        const data = await res.json()
        setMessage(data.error || "Erro ao enviar convite")
      }
    } catch (error) {
      setMessage("Erro ao enviar convite")
    } finally {
      setLoading(false)
      setTimeout(() => setMessage(""), 3000)
    }
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-harteck-red/30 bg-black/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            HTK <span className="text-harteck-red">ADMIN</span>
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/admin/editor")}
              className="px-4 py-2 text-sm border border-harteck-red/30 hover:border-harteck-red transition-colors"
            >
              ✨ Editor Visual
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm border border-harteck-red/30 hover:border-harteck-red transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Message */}
      {message && (
        <div className="max-w-7xl mx-auto px-6 mt-4">
          <div className="border border-harteck-red bg-harteck-red/10 p-3 text-sm">
            {message}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex gap-4 border-b border-harteck-red/30">
          <button
            onClick={() => setActiveTab("content")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "content"
                ? "text-harteck-red border-b-2 border-harteck-red"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Conteúdo
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "images"
                ? "text-harteck-red border-b-2 border-harteck-red"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Imagens
          </button>
          <button
            onClick={() => setActiveTab("invites")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "invites"
                ? "text-harteck-red border-b-2 border-harteck-red"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Convites
          </button>
        </div>
      </div>

      {/* Content Tab */}
      {activeTab === "content" && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">Gerenciar Conteúdo</h2>

          <div className="space-y-6">
            {[
              { key: "hero.title", label: "Hero - Título", placeholder: "Performance que existe fora do PowerPoint." },
              { key: "hero.subtitle", label: "Hero - Subtítulo", placeholder: "Computadores de alta performance..." },
              { key: "hero.cta", label: "Hero - Texto do Botão", placeholder: "Agende uma consultoria técnica →" },
              { key: "hero.cta_link", label: "Hero - Link do Botão", placeholder: "https://..." },
              { key: "cta.final_title", label: "CTA Final - Título", placeholder: "Pronto para performance real?" },
              { key: "cta.final_subtitle", label: "CTA Final - Subtítulo", placeholder: "Agende uma consultoria..." },
              { key: "cta.final_button", label: "CTA Final - Botão", placeholder: "Falar com especialista →" },
              { key: "cta.final_link", label: "CTA Final - Link", placeholder: "https://wa.me/..." }
            ].map((item) => (
              <div key={item.key} className="border border-harteck-red/20 p-6 bg-black/50">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {item.label}
                </label>
                <input
                  type="text"
                  placeholder={item.placeholder}
                  defaultValue={contents.find(c => c.key === item.key)?.value || ""}
                  onBlur={(e) => updateContent(item.key, e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Images Tab */}
      {activeTab === "images" && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">Gerenciar Imagens</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { key: "gaming_pc", label: "PC Gaming Beast" },
              { key: "ai_pc", label: "AI Powerhouse" }
            ].map((item) => {
              const currentImage = images.find(img => img.key === item.key)
              return (
                <div key={item.key} className="border border-harteck-red/20 p-6 bg-black/50">
                  <h3 className="text-lg font-bold mb-4">{item.label}</h3>

                  {currentImage?.url && (
                    <div className="mb-4 aspect-[4/3] relative border border-harteck-red/30">
                      <img
                        src={currentImage.url}
                        alt={currentImage.alt || item.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleImageUpload(item.key, file)
                    }}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:border-harteck-red/30 file:bg-black file:text-white hover:file:bg-harteck-red/10 transition-colors"
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Invites Tab */}
      {activeTab === "invites" && (
        <div className="max-w-3xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">Convidar Novo Admin</h2>

          <div className="border border-harteck-red/20 p-6 bg-black/50">
            <p className="text-gray-400 text-sm mb-4">
              Envie um convite por email para adicionar um novo administrador ao sistema.
            </p>

            <div className="flex gap-4">
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="email@exemplo.com"
                className="flex-1 px-4 py-3 bg-black border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
              />
              <button
                onClick={sendInvite}
                disabled={loading || !inviteEmail}
                className="px-6 py-3 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar Convite"}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              O convidado receberá um email com um link para criar sua conta de admin.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
