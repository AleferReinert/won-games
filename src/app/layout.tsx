import type { Metadata, Viewport } from 'next'
import { getServerSession } from 'next-auth'
import { Poppins } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { fetchCompany } from 'utils/fetchCompany'
import { authOptions } from './api/auth/[...nextauth]/route'
import './globals.css'
import Providers from './Providers'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export async function generateMetadata(): Promise<Metadata> {
  const { name, description } = await fetchCompany()
  return {
    title: {
      default: name,
      template: `${name} - %s`
    },
    manifest: '/manifest.json',
    description,
    openGraph: {
      type: 'website',
      url: process.env.NEXTAUTH_URL,
      title: name,
      description,
      images: `${process.env.NEXTAUTH_URL}/img/social-share.webp`
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: `${process.env.NEXTAUTH_URL}/img/social-share.webp`
    }
  }
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
        <NextTopLoader color='#f231a5' height={4} showSpinner={false} />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  )
}
