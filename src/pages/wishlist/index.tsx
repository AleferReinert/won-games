import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Product, { ProductProps } from 'components/Product/Product'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { GET_RECOMMENDED_PRODUCTS } from 'graphql/queries/getRecommendedProducts'
import * as S from 'pages/wishlist/Wishlist.styles'
import type { ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import type { NextPageWithLayout } from '../_app'

export interface WishlistPageProps {
  wishlistProducts?: ProductProps[]
  recommendedSection: ShowcaseProps
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: GET_RECOMMENDED_PRODUCTS
  })

  const { title, highlight, games } = data.recommended.data.attributes.showcase

  return {
    props: {
      wishlistProducts: [],
      recommendedSection: {
        title,
        highlight: highlightMapper(highlight),
        products: productMapper(games)
      }
    }
  }
}

const WishlistPage = ({
  wishlistProducts,
  recommendedSection
}: WishlistPageProps & NextPageWithLayout) => {
  const emptyWishlist = !wishlistProducts || !wishlistProducts.length

  return (
    <>
      <Container>
        <Heading $line='left' $lineColor='secondary'>
          Wishlist
        </Heading>

        {emptyWishlist ? (
          <Empty
            title='Your wishlist is empty'
            $description='Games added to your wishlist will appear here.'
          />
        ) : (
          <S.WrapperWishlistGames>
            {wishlistProducts?.map((product, index) => (
              <Product
                key={'wishlist-' + index}
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
    </>
  )
}

WishlistPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default WishlistPage
