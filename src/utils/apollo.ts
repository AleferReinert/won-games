import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getSession } from 'next-auth/react'

interface InitializeOptions {
  initialState?: NormalizedCacheObject | null
  token?: string
}

function createApolloClient(token?: string) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext(async (_, { headers }) => {
    const jwt = token ?? (await getSession())?.jwt ?? ''
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
