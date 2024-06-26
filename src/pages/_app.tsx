import { ApolloProvider } from '@apollo/client'
import isPropValid from '@emotion/is-prop-valid'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
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

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: () => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const client = useApollo(pageProps.initialApolloState)

  return (
    <StyleSheetManager shouldForwardProp={isPropValid} enableVendorPrefixes>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Won Games</title>
            <link rel='shortchut icon' href='/img/icon-512.png' />
            <link rel='apple-touch-icon' href='/img/icon-512.png' />
            <link rel='manifest' href='/manifest.json' />
            <meta name='theme-color' content='#06092B' />
            <meta
              name='description'
              content='Seus jogos favoritos estão aqui. Acesse agora e divirta-se!'
            />
          </Head>
          <GlobalStyles />
          {getLayout(
            <Component className={poppins.className} {...pageProps} />
          )}
        </ThemeProvider>
      </ApolloProvider>
    </StyleSheetManager>
  )
}
