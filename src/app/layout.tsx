import type { Metadata, Viewport } from 'next'
import { getServerSession } from 'next-auth'
import { Poppins } from 'next/font/google'
import { authOptions } from './api/auth/[...nextauth]/route'
import './globals.css'
import Providers from './Providers'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Won Games',
    template: 'Won Games - %s'
  },
  manifest: '/manifest.json'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06092B'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='pt-br' className={poppins.className}>
      <head />
      <body className='bg-theme-gray-900 overflow-x-hidden font-sans flex flex-col justify-between h-screen'>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  )
}
