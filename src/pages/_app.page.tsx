import { ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import isPropValid from '@emotion/is-prop-valid'
import { CompanyProvider } from 'contexts/CompanyContext'
import { CartProvider } from 'hooks/useCart'
import { WishlistProvider } from 'hooks/useWishlist'
import type { NextPage } from 'next'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import type { ReactElement, ReactNode } from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode
}

type PageProps = {
  session: Session
  initialApolloState: NormalizedCacheObject
  className?: string
}

type AppPropsWithLayout = AppProps<PageProps> & {
  Component: NextPageWithLayout<PageProps>
}

export default function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const token = pageProps.session?.jwt || ''
  const apolloClient = useApollo(pageProps.initialApolloState, token)

  return (
    <SessionProvider session={pageProps.session}>
      <StyleSheetManager shouldForwardProp={isPropValid} enableVendorPrefixes>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <CompanyProvider>
              <CartProvider>
                <WishlistProvider>
                  <Head>
                    <title>Won Games</title>
                    <link rel='icon' type='image/png' href='/img/favicon.png' />
                    <link rel='shortchut icon' href='/img/icon-512.png' />
                    <link rel='apple-touch-icon' href='/img/icon-512.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <meta name='theme-color' content='#06092B' />
                    <meta name='description' content='Your favorite games are here. Join now and have fun!' />
                  </Head>
                  <GlobalStyles />
                  <NextNProgress
                    color={theme.colors.primary}
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
                  />
                  {getLayout(<Component className={poppins.className} {...pageProps} />)}
                </WishlistProvider>
              </CartProvider>
            </CompanyProvider>
          </ThemeProvider>
        </ApolloProvider>
      </StyleSheetManager>
    </SessionProvider>
  )
}
