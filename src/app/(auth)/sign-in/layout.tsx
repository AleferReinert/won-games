import { Metadata } from 'next'
import { ReactNode } from 'react'

const title = 'Sign In'
const description = 'Welcome back! Sign in to access your game store account.'
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: `${process.env.NEXTAUTH_URL}/sign-in`,
    title,
    description,
    images: `${process.env.NEXTAUTH_URL}/img/social-share.webp`
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.NEXTAUTH_URL}/img/social-share.webp`
  }
}

interface SignInLayoutProps {
  children: ReactNode
}

export default function SignInLayout({ children }: SignInLayoutProps) {
  return <>{children}</>
}
