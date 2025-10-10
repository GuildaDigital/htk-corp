"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function AcceptInviteContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [validating, setValidating] = useState(true)
  const [inviteEmail, setInviteEmail] = useState("")

  useEffect(() => {
    if (token) {
      validateToken()
    } else {
      setError("Token inválido")
      setValidating(false)
    }
  }, [token])

  const validateToken = async () => {
    try {
      const res = await fetch(`/api/admin/validate-invite?token=${token}`)
      const data = await res.json()

      if (res.ok) {
        setInviteEmail(data.email)
      } else {
        setError(data.error || "Convite inválido")
      }
    } catch (error) {
      setError("Erro ao validar convite")
    } finally {
      setValidating(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("As senhas não conferem")
      return
    }

    if (password.length < 8) {
      setError("A senha deve ter no mínimo 8 caracteres")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/admin/complete-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, name, password })
      })

      if (res.ok) {
        router.push("/admin/login?registered=true")
      } else {
        const data = await res.json()
        setError(data.error || "Erro ao criar conta")
      }
    } catch (error) {
      setError("Erro ao criar conta")
    } finally {
      setLoading(false)
    }
  }

  if (validating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-harteck-red text-lg">Validando convite...</div>
        </div>
      </div>
    )
  }

  if (error && !inviteEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="max-w-md w-full text-center">
          <div className="border border-harteck-red bg-harteck-red/10 p-6">
            <h2 className="text-xl font-bold mb-2 text-harteck-red">Convite Inválido</h2>
            <p className="text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-harteck-red/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>

      <div className="relative max-w-md w-full">
        <div className="border border-harteck-red/30 bg-black/90 backdrop-blur-xl p-8 shadow-2xl shadow-harteck-red/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              HTK <span className="text-harteck-red">ADMIN</span>
            </h1>
            <p className="text-gray-400 text-sm">Complete seu cadastro</p>
            <p className="text-xs text-gray-500 mt-2">{inviteEmail}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="border border-harteck-red bg-harteck-red/10 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/50 border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-black/50 border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
                placeholder="Mínimo 8 caracteres"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirmar Senha
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-black/50 border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
                placeholder="Repita a senha"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-harteck-red/30"
            >
              {loading ? "Criando conta..." : "Criar Conta Admin"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function AcceptInvite() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-harteck-red text-lg">Carregando...</div>
        </div>
      </div>
    }>
      <AcceptInviteContent />
    </Suspense>
  )
}
