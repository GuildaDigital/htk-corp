"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/admin/editor")
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white">Redirecionando para o editor...</div>
    </div>
  )
}