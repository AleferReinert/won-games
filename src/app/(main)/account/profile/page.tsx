import { Button } from 'components/Button/Button'
import { TextField } from 'components/TextField/TextField'
import { Metadata } from 'next'
import { Session } from 'next-auth'
import { fetchAccountProfile } from 'utils/fetchAccountProfile'
import { requireAuth } from 'utils/requireAuth'

export const metadata: Metadata = {
  title: 'Profile'
}

export default async function ProfilePage(session?: Session) {
  const { serverSession } = await requireAuth(session)
  const { username, email } = await fetchAccountProfile(serverSession)

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-[repeat(2,_1fr)] [&>div]:mb-0'>
        <TextField name='name' label='Name' defaultValue={username} disabled />
        <TextField type='email' name='email' label='E-mail' defaultValue={email} disabled />
      </div>
      <div className='flex mt-4 flex-col sm:flex-row sm:justify-end md:mt-8'>
        <Button variant='link' asLink href={`/forgot-password?email=${email}`} className='sm:px-0'>
          Reset password
        </Button>
      </div>
    </div>
  )
}
