'use client'
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import { CartProvider } from 'hooks/useCart'
import { WishlistProvider } from 'hooks/useWishlist'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { useApollo } from 'utils/apollo'

type ProvidersProps = {
  children: ReactNode
  session: Session | null
  initialApolloState?: NormalizedCacheObject | null
}

export default function Providers({ children, session = null, initialApolloState = null }: ProvidersProps) {
  const token = session?.jwt || ''
  const apolloClient = useApollo(initialApolloState, token)

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}
