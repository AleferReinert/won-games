import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { PROFILE } from 'graphql/queries/profile'
import { GetServerSideProps } from 'next/types'
import * as S from 'pages/account/profile/ProfilePage.styles'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { ProfileQuery, ProfileQueryVariables } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { requireAuth } from 'utils/requireAuth'

interface ProfilePageProps {
  username: string
  email: string
}

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (context) => {
  console.log('Entrou no getServerSideProps')
  const { session } = await requireAuth(context)

  if (!session) return { props: {} as ProfilePageProps }
  console.log('getServerSideProps session: ', session)

  const apolloClient = initializeApollo({ token: session.jwt, context })
  const { data } = await apolloClient.query<ProfileQuery, ProfileQueryVariables>({
    query: PROFILE,
    variables: { identifier: session.id! }
  })
  console.log('getServerSideProps data: ', data)

  const props: ProfilePageProps = {
    username: data.usersPermissionsUser.data.attributes.username,
    email: data.usersPermissionsUser.data.attributes.email
  }

  return { props }
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
