import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export async function requireAuth(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    const callbackUrl = encodeURIComponent(context.req.url ?? '/')
    context.res.writeHead(302, { Location: `/sign-in?callbackUrl=${callbackUrl}` })
    context.res.end()
  }

  return { session }
}
