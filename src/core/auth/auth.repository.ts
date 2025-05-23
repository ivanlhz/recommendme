import { AuthCredentials, AuthResponse, LogoutResponse } from './auth.types'
import { mockCurrentUser } from '@/mocks/recommendation.mock'

const DEMO_EMAIL = 'demo@demo.com'
const DEMO_PASSWORD = '123456'
const DEMO_TOKEN = 'demo-bearer-token'

export const loginRepository = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  if (credentials.email === DEMO_EMAIL && credentials.password === DEMO_PASSWORD) {
    // Guardar token en cookies para que el middleware lo lea
    if (typeof window !== 'undefined') {
      document.cookie = `auth_token=${DEMO_TOKEN}; path=/`;
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
    document.cookie = 'auth_token=; Max-Age=0; path=/';
  }
  return { success: true }
}

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
}

export const getCurrentUserRepository = async (): Promise<AuthResponse | null> => {
  if (typeof window !== 'undefined') {
    const token = getCookie('auth_token');
    if (token === DEMO_TOKEN) {
      return {
        user: { ...mockCurrentUser, email: DEMO_EMAIL },
        token: DEMO_TOKEN,
      }
    }
  }
  return null;
}
