import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Poppins } from '@next/font/google'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
import theme from 'styles/theme'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const client = useApollo(pageProps.initialApolloState)

  return (
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
            content='Boilerplate utilizando TypeScript, React, NextJS e Styled Components.'
          />
        </Head>
        <GlobalStyles />
        {getLayout(<Component className={poppins.className} {...pageProps} />)}
      </ThemeProvider>
    </ApolloProvider>
  )
}
