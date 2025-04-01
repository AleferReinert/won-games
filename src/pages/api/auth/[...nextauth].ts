import NextAuth, { NextAuthOptions } from 'next-auth'
import Provider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next/types'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Provider({
      credentials: {},
      // @ts-expect-error todo: fix
      async authorize({ email, password }) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
          method: 'POST',
          body: new URLSearchParams({ identifier: email, password })
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error('E-mail or password incorrect')
        }

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        // @ts-expect-error todo: fix
        token.name = user.username
        // @ts-expect-error todo: fix
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    },
    async session({ session, token }) {
      // @ts-expect-error todo: fix
      session.jwt = token.jwt
      // @ts-expect-error todo: fix
      session.id = token.id

      return Promise.resolve(session)
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions)
