import { Container } from 'components/Container/Container'
import { Divider } from 'components/Divider/Divider'
import { Heading } from 'components/Heading/Heading'
import { Showcase } from 'components/Showcase/Showcase'
import { ReactNode } from 'react'
import { fetchRecommendedShowcase } from 'utils/fetchRecommendedShowcase'

interface WishlistLayoutProps {
  children: ReactNode
}

export default async function WishlistLayout({ children }: WishlistLayoutProps) {
  const recommendedProducts = await fetchRecommendedShowcase()

  return (
    <div data-testid='WishlistPageComponent'>
      <Container>
        <Heading line='left' lineColor='secondary' level='h1'>
          Wishlist
        </Heading>

        {children}
        <Divider />
      </Container>

      <Showcase {...recommendedProducts} />
    </div>
  )
}
