import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession, Session } from 'next-auth'
import { redirect } from 'next/navigation'

// Optional session to set session in Storybook
export async function requireAuth(session: Session | undefined): Promise<{ serverSession: Session }> {
  if (session && session.user?.email) {
    return { serverSession: session }
  }

  const serverSession = await getServerSession(authOptions)

  if (!serverSession) {
    redirect('/sign-in')
  }
  return { serverSession }
}
