import {
  ApolloClient,
  NormalizedCacheObject,
  createHttpLink
} from '@apollo/client'
import { useMemo } from 'react'
import { apolloCache } from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: 'http://127.0.0.1:1337/graphql'
    }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') {
    return apolloClientGlobal
  }

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  return useMemo(() => initializeApollo(initialState), [initialState])
}
