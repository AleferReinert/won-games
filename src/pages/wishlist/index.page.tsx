import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Product from 'components/Product/Product'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import Skeleton from 'components/Skeleton/Skeleton'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { useWishlist } from 'hooks/useWishlist'
import type { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import * as S from 'pages/wishlist/WishlistPage.styles'
import { type ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { RecommendedProductsQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import { requireAuth } from 'utils/requireAuth'
import type { NextPageWithLayout } from '../_app.page'

export interface WishlistPageProps {
  recommendedShowcase: ShowcaseProps
  session: Session | null
}

export const getServerSideProps: GetServerSideProps<WishlistPageProps> = async (context) => {
  const { session } = await requireAuth(context)
  if (!session) return { props: {} as WishlistPageProps }

  const apolloClient = initializeApollo()
  const responseRecommended = await apolloClient.query<RecommendedProductsQuery>({
    query: RECOMMENDED_PRODUCTS
  })
  const { title, highlight, products } = responseRecommended.data.recommended.data.attributes
  const props: WishlistPageProps = {
    recommendedShowcase: {
      title,
      highlight: highlight.background.data && highlightMapper(highlight),
      products: productMapper(products)
    },
    session
  }

  return { props }
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

        <S.WrapperWishlist aria-label='wishlist products'>
          {loading ? (
            <Skeleton width='100%' height={235} />
          ) : (
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

      <Showcase {...recommendedShowcase} />
    </div>
  )
}

WishlistPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default WishlistPage
