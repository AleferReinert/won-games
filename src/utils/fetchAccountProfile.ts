import { PROFILE } from 'graphql/queries/profile'
import { Session } from 'next-auth'
import { ProfileQuery, ProfileQueryVariables } from 'types/generated'
import { initializeApollo } from './apollo'

interface AccountProfileProps {
  username: string
  email: string
}

export async function fetchAccountProfile(session: Session): Promise<AccountProfileProps> {
  const apolloClient = initializeApollo({ token: session.jwt })
  const { data } = await apolloClient.query<ProfileQuery, ProfileQueryVariables>({
    query: PROFILE,
    variables: { identifier: session.id! }
  })

  return {
    username: data.usersPermissionsUser.data.attributes.username,
    email: data.usersPermissionsUser.data.attributes.email
  }
}
