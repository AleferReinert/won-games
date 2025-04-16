import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Product, { ProductProps } from 'components/Product/Product'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { WISHLIST } from 'graphql/queries/wishlist'
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
  wishlistProducts: ProductProps[]
  recommendedShowcase: ShowcaseProps
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  const apolloClient = initializeApollo({})
  const responseWishlist = await apolloClient.query<Pick<Query, 'wishlists'>>({
    query: WISHLIST,
    variables: { userEmail: { eq: session?.user?.email } },
    context: {
      headers: {
        // @ts-expect-error todo: fix
        authorization: `Bearer ${session?.jwt}`
      }
    },
    fetchPolicy: 'no-cache'
  })
  const wishlistProducts = responseWishlist.data.wishlists.data[0]?.attributes.products
  const responseRecommended = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS
  })
  const { title, highlight, products } = responseRecommended.data.recommended.data.attributes

  return {
    props: {
      wishlistProducts: wishlistProducts ? productMapper(wishlistProducts) : [],
      recommendedShowcase: {
        title,
        highlight: highlightMapper(highlight),
        products: productMapper(products)
      },
      session
    }
  }
}

const WishlistPage = ({ wishlistProducts = [], recommendedShowcase }: WishlistPageProps & NextPageWithLayout) => {
  return (
    <div data-testid='WishlistPageComponent'>
      <Container>
        <Heading $line='left' $lineColor='secondary' as='h1'>
          Wishlist
        </Heading>

        {wishlistProducts.length ? (
          <S.WrapperWishlist>
            {wishlistProducts?.map((product) => (
              <Product
                key={'wishlist-' + product.id}
                id={product.id}
                title={product.title}
                developer={product.developer}
                img={product.img}
                price={product.price}
                slug={product.slug}
              />
            ))}
          </S.WrapperWishlist>
        ) : (
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
