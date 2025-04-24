import { DefaultSession, DefaultUser } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface User extends DefaultUser {
    username: string
    jwt: string
  }

  interface Session extends DefaultSession {
    jwt: string
    id?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    username: string
    jwt: string
  }
}
