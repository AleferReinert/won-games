import { Container } from 'components/Container/Container'
import { Divider } from 'components/Divider/Divider'
import { Heading } from 'components/Heading/Heading'
import { Showcase } from 'components/Showcase/Showcase'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { fetchRecommendedShowcase } from 'utils/fetchRecommendedShowcase'

interface CartLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Cart'
}

export default async function CartLayout({ children }: CartLayoutProps) {
  const recommendedShowcase = await fetchRecommendedShowcase()

  return (
    <div data-testid='CartPage'>
      <Container>
        <Heading line='left' lineColor='secondary' level='h1'>
          My cart
        </Heading>

        {children}
        <Divider />
      </Container>

      <Showcase {...recommendedShowcase} />
    </div>
  )
}
