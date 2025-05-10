import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth].page'

interface InitializeOptions {
  initialState?: NormalizedCacheObject | null
  token?: string
  context?: GetServerSidePropsContext
}

function createApolloClient(token?: string, context?: GetServerSidePropsContext) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext(async (_, { headers }) => {
    let jwt = token
    if (!jwt && context) {
      const session = await getServerSession(context.req, context.res, authOptions)
      jwt = session?.jwt ?? ''
    }

    return {
      headers: {
        ...headers,
        authorization: jwt ? `Bearer ${jwt}` : ''
      }
    }
  })

  return new ApolloClient<NormalizedCacheObject>({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

export function initializeApollo({ initialState = null, token }: InitializeOptions = {}) {
  const _client = apolloClient ?? createApolloClient(token)

  if (initialState) {
    _client.cache.restore(initialState)
  }

  if (typeof window !== 'undefined') {
    apolloClient = _client
  }

  return _client
}

export function useApollo(initialState: NormalizedCacheObject | null = null) {
  return initializeApollo({ initialState })
}
