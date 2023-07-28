import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Base/Base'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Product, { ProductProps } from 'components/Product/Product'
import Heading from 'components/Heading/Heading'
import Showcase from 'components/Showcase/Showcase'
import highlightMock from 'components/Highlight/mock'
import productsMock from 'components/ProductSlider/mock'
import * as S from './Wishlist.styles'

export type WishlistTemplateProps = {
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

const Wishlist = (props: WishlistTemplateProps) => {
  const emptyWishlist =
    typeof props.wishlistGames === 'undefined' ||
    props.wishlistGames.length === 0

  return (
    <Base>
      <Container>
        <Heading line='left' lineColor='secondary'>
          Wishlist
        </Heading>

        {emptyWishlist ? (
          <Empty
            title='Your wishlist is empty'
            description='Games added to your wishlist will appear here.'
            link='/'
            label='Go back to store'
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
    </Base>
  )
}

export default Wishlist
