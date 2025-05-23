export type AuthCredentials = {
  email: string
  password: string
}

export type AuthUser = {
  name: string
  position: string
  company: string
  avatarUrl: string
  email: string
}

export type AuthToken = string

export type AuthResponse = {
  user: AuthUser
  token: AuthToken
}

export type LogoutResponse = {
  success: boolean
}
