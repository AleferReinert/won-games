import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth].page'

export async function requireAuth(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    const callbackUrl = encodeURIComponent(context.req.url ?? '/')
    context.res.writeHead(302, { Location: `/sign-in?callbackUrl=${callbackUrl}` })
    context.res.end()
  }

  return { session }
}
