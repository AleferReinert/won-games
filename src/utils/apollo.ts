import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Session } from 'next-auth'
import { useMemo } from 'react'
import { apolloCache } from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

interface initializeApolloProps {
  initialState?: null
  session?: Session | null
}

function createApolloClient(session?: Session | null) {
  const isServer = typeof window === 'undefined'

  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || ''
    const authorization = jwt ? `Bearer ${jwt}` : ''
    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: isServer,
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}

export function initializeApollo({ initialState = null, session = null }: initializeApolloProps) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') {
    return apolloClientGlobal
  }

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null, session?: Session | null) {
  return useMemo(() => initializeApollo({ initialState, session }), [initialState, session])
}
