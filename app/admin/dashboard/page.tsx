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
  const [inviteEmail, setInviteEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

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

      {/* Invites Section */}
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
    </div>
  )
}
