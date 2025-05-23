import { AuthCredentials, AuthResponse, LogoutResponse } from './auth.types'
import { loginRepository, logoutRepository, getCurrentUserRepository } from './auth.repository'

export const loginUseCase = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  return await loginRepository(credentials)
}

export const logoutUseCase = async (): Promise<LogoutResponse> => {
  return await logoutRepository()
}

export const getCurrentUserUseCase = async (): Promise<AuthResponse | null> => {
  return await getCurrentUserRepository()
}
