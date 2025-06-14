import { Container } from 'components/Container/Container'
import { Showcase } from 'components/Showcase/Showcase'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { fetchRecommendedShowcase } from 'utils/fetchRecommendedShowcase'

interface SuccessLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Your purchase was successful!'
}

export default async function SuccessLayout({ children }: SuccessLayoutProps) {
  const recommendedShowcase = await fetchRecommendedShowcase()

  return (
    <>
      <Container>{children}</Container>
      <Showcase {...recommendedShowcase} />
    </>
  )
}
