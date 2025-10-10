"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        setError("Email ou senha inválidos")
      } else {
        router.push("/admin/dashboard")
        router.refresh()
      }
    } catch (error) {
      setError("Erro ao fazer login")
    } finally {
      setLoading(false)
    }
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
            <p className="text-gray-400 text-sm">Acesso restrito</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="border border-harteck-red bg-harteck-red/10 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/50 border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
                placeholder="seu@email.com"
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
                className="w-full px-4 py-3 bg-black/50 border border-harteck-red/30 text-white focus:border-harteck-red outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-harteck-red text-white font-medium hover:bg-harteck-red-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-harteck-red/30"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            HTK Corp Admin Panel
          </div>
        </div>
      </div>
    </div>
  )
}
