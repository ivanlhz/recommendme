import { AuthCredentials, AuthUser, AuthResponse, LogoutResponse } from './auth.types'
import { mockCurrentUser } from '@/mocks/recommendation.mock'

const DEMO_EMAIL = 'demo@demo.com'
const DEMO_PASSWORD = '123456'
const DEMO_TOKEN = 'demo-bearer-token'

export const loginRepository = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  if (credentials.email === DEMO_EMAIL && credentials.password === DEMO_PASSWORD) {
    // Simular guardar token en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', DEMO_TOKEN)
    }
    return {
      user: { ...mockCurrentUser, email: DEMO_EMAIL },
      token: DEMO_TOKEN,
    }
  }
  throw new Error('Credenciales inválidas')
}

export const logoutRepository = async (): Promise<LogoutResponse> => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token')
  }
  return { success: true }
}

export const getCurrentUserRepository = async (): Promise<AuthResponse | null> => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('auth_token')
    if (token === DEMO_TOKEN) {
      return {
        user: { ...mockCurrentUser, email: DEMO_EMAIL },
        token: DEMO_TOKEN,
      }
    }
  }
  return null
}
