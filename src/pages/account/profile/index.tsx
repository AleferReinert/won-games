import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { PROFILE } from 'graphql/queries/profile'
import { GetServerSidePropsContext } from 'next/types'
import * as S from 'pages/account/profile/ProfilePage.styles'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { ProfileQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { requireAuth } from 'utils/requireAuth'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  const apolloClient = initializeApollo({ session })
  const { data } = await apolloClient.query<ProfileQuery>({
    query: PROFILE,
    variables: {
      // @ts-expect-error todo: fix
      identifier: session.id
    }
  })
  return {
    props: {
      session,
      username: data.usersPermissionsUser.data.attributes.username,
      email: data.usersPermissionsUser.data.attributes.email
    }
  }
}

interface ProfilePageProps {
  username: string
  email: string
}

const ProfilePage = ({ username, email }: ProfilePageProps) => {
  return (
    <Box>
      <S.Wrapper>
        <S.Form>
          <TextField name='name' label='Name' defaultValue={username} />
          <TextField type='email' name='email' label='E-mail' defaultValue={email} disabled />
        </S.Form>
        <S.Footer>
          <Button $variant='link' asLink href={`/forgot-password?email=${email}`}>
            Reset password
          </Button>
          <Button>Save</Button>
        </S.Footer>
      </S.Wrapper>
    </Box>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My profile'>{page}</AccountTemplate>
}

export default ProfilePage
