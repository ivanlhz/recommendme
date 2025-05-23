'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { AuthUser } from '@/core/auth/auth.types'
import { loginUseCase, logoutUseCase, getCurrentUserUseCase } from '@/core/auth/auth.usecases'

interface AuthContextProps {
  user: AuthUser | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const auth = await getCurrentUserUseCase()
      if (auth) {
        setUser(auth.user)
        setToken(auth.token)
      } else {
        setUser(null)
        setToken(null)
      }
      setLoading(false)
    }
    fetchUser()
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const auth = await loginUseCase({ email, password })
      setUser(auth.user)
      setToken(auth.token)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    await logoutUseCase()
    setUser(null)
    setToken(null)
    setLoading(false)
  }

  return (
    <AuthContext value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}
