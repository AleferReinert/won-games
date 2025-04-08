import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Product, { ProductProps } from 'components/Product/Product'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import type { GetServerSidePropsContext } from 'next'
import * as S from 'pages/wishlist/WishlistPage.styles'
import type { ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import { requireAuth } from 'utils/requireAuth'
import type { NextPageWithLayout } from '../_app'

export interface WishlistPageProps {
  wishlistProducts?: ProductProps[]
  recommendedSection: ShowcaseProps
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  const apolloClient = initializeApollo({})
  const { data } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS
  })
  const { title, highlight, games } = data.recommended.data.attributes.showcase

  return {
    props: {
      wishlistProducts: [],
      recommendedSection: {
        title,
        highlight: highlightMapper(highlight),
        products: productMapper(games)
      },
      session
    }
  }
}

const WishlistPage = ({ wishlistProducts, recommendedSection }: WishlistPageProps & NextPageWithLayout) => {
  const emptyWishlist = !wishlistProducts || !wishlistProducts.length

  return (
    <div data-testid='WishlistPageComponent'>
      <Container>
        <Heading $line='left' $lineColor='secondary' as='h1'>
          Wishlist
        </Heading>

        {emptyWishlist ? (
          <Empty title='Your wishlist is empty' $description='Games added to your wishlist will appear here.' />
        ) : (
          <S.WrapperWishlistGames>
            {wishlistProducts?.map((product, index) => (
              <Product
                key={'wishlist-' + index}
                id={product.id}
                title={product.title}
                developer={product.developer}
                img={product.img}
                price={product.price}
                slug={product.slug}
              />
            ))}
          </S.WrapperWishlistGames>
        )}
        <Divider />
      </Container>

      <Showcase
        title={recommendedSection.title}
        highlight={recommendedSection.highlight}
        products={recommendedSection.products}
      />
    </div>
  )
}

WishlistPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default WishlistPage
