import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Default/Default'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Product, { ProductProps } from 'components/Product/Product'
import Showcase from 'components/Showcase/Showcase'
import * as S from 'pages/wishlist/Wishlist.styles'
import highlightMock from 'components/Highlight/mock'
import productsMock from 'components/ProductSlider/mock'

export type WishlistPageProps = {
  wishlistGames?: ProductProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: ProductProps[]
}

export async function getStaticProps() {
  return {
    props: {
      wishlistGames: [],
      recommendedHighlight: highlightMock,
      recommendedGames: productsMock
    }
  }
}

const WishlistPage = (props: WishlistPageProps & NextPageWithLayout) => {
  const emptyWishlist =
    typeof props.wishlistGames === 'undefined' ||
    props.wishlistGames.length === 0

  return (
    <>
      <Container>
        <Heading line='left' lineColor='secondary'>
          Wishlist
        </Heading>

        {emptyWishlist ? (
          <Empty
            title='Your wishlist is empty'
            description='Games added to your wishlist will appear here.'
          />
        ) : (
          <S.WrapperWishlistGames>
            {props.wishlistGames?.map((item, index) => (
              <Product
                key={'wishlist-' + index}
                title={item.title}
                developer={item.developer}
                img={item.img}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </S.WrapperWishlistGames>
        )}
        <Divider />
      </Container>

      <Showcase
        title='You make like these games'
        highlight={props.recommendedHighlight}
        games={props.recommendedGames}
      />
    </>
  )
}

WishlistPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default WishlistPage
