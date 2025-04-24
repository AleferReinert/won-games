import { ApolloClient, NormalizedCacheObject, createHttpLink } from '@apollo/client'
import { Session } from 'next-auth'
import { useMemo } from 'react'
import { apolloCache } from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      headers: {
        authorization: session?.jwt ? `Bearer ${session.jwt}` : ''
      }
    }),
    cache: apolloCache
  })
}

interface initializeApolloProps {
  initialState?: null
  session?: Session | null
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
