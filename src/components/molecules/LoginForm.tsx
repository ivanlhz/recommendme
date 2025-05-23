"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { loginSchema, LoginFormValues } from "@/schemas/login.schema"

import { useRouter } from "next/navigation"

export function LoginForm() {
  const { login, loading } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    setError(null)
    try {
      await login(data.email, data.password)
      router.push("/recommendations")
    } catch (e) {
      setError("Credenciales incorrectas")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="username"
          {...register("email")}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full"
          placeholder="demo@demo.com"
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full"
          placeholder="123456"
        />
        {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
      </div>
      <div className="text-xs text-gray-500 mb-2 text-center">
        Hint: <span className="font-mono">demo@demo.com</span> / <span className="font-mono">123456</span>
      </div>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <button type="submit" className="bg-black text-white py-2 rounded w-full font-semibold hover:bg-gray-900 transition disabled:opacity-50" disabled={loading}>
        {loading ? <span className="animate-pulse">Entrando...</span> : "Entrar"}
      </button>
    </form>
  )
}
