import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Product from 'components/Product/Product'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import Skeleton from 'components/Skeleton/Skeleton'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { useWishlist } from 'hooks/useWishlist'
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
  recommendedShowcase: ShowcaseProps
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  if (!session) return { props: {} }

  const apolloClient = initializeApollo({ session })
  const responseRecommended = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS
  })
  const { title, highlight, products } = responseRecommended.data.recommended.data.attributes

  return {
    props: {
      recommendedShowcase: {
        title,
        highlight: highlightMapper(highlight),
        products: productMapper(products)
      }
    }
  }
}

const WishlistPage = ({ recommendedShowcase }: WishlistPageProps & NextPageWithLayout) => {
  const { products: wishlistProducts, loading } = useWishlist()
  const products = productMapper({ data: wishlistProducts })

  return (
    <div data-testid='WishlistPageComponent'>
      <Container>
        <Heading $line='left' $lineColor='secondary' as='h1'>
          Wishlist
        </Heading>

        <S.WrapperWishlist>
          {loading ? (
            <>
              <Skeleton width='100%' height={235} />
              <Skeleton width='100%' height={235} />
            </>
          ) : (
            products.length &&
            products.map((product) => {
              return (
                <Product
                  key={'wishlist-' + product.id}
                  id={product.id}
                  title={product.title}
                  developer={product.developer}
                  img={product.img}
                  price={product.price}
                  slug={product.slug}
                />
              )
            })
          )}
        </S.WrapperWishlist>

        {!loading && products.length === 0 && (
          <Empty title='Your wishlist is empty' $description='Games added to your wishlist will appear here.' />
        )}
        <Divider />
      </Container>

      <Showcase
        title={recommendedShowcase.title}
        highlight={recommendedShowcase.highlight}
        products={recommendedShowcase.products}
      />
    </div>
  )
}

WishlistPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default WishlistPage
