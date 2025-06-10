import { Metadata } from 'next'
import { ReactNode } from 'react'

const title = 'Forgot Password'
const description = 'Forgot your password? Enter your email to get a reset link for your game store account.'
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: `${process.env.NEXTAUTH_URL}/forgot-password`,
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

interface ForgotPasswordLayoutProps {
  children: ReactNode
}

export default function ForgotPasswordLayout({ children }: ForgotPasswordLayoutProps) {
  return <>{children}</>
}
