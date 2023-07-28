import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Base/Base'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Product, { ProductProps } from 'components/Product/Product'
import Heading from 'components/Heading/Heading'
import Showcase from 'components/Showcase/Showcase'
import * as S from './Wishlist.styles'

export type WishlistTemplateProps = {
  wishlistGames?: ProductProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: ProductProps[]
}

const Wishlist = ({
  wishlistGames = [],
  recommendedHighlight,
  recommendedGames
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading line='left' lineColor='secondary'>
          Wishlist
        </Heading>

        {wishlistGames.length > 0 ? (
          <S.WrapperWishlistGames>
            {wishlistGames?.map((game, index) => (
              <Product
                key={'wishlist-' + index}
                title={game.title}
                developer={game.developer}
                img={game.img}
                price={game.price}
              />
            ))}
          </S.WrapperWishlistGames>
        ) : (
          <Empty
            title='Your wishlist is empty'
            description='Games added to your wishlist will appear here.'
            link='/'
            label='Go back to store'
          />
        )}
        <Divider />
      </Container>

      <Showcase
        title='You make like these games'
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Wishlist
