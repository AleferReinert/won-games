import Base from 'templates/Base'
import * as S from './styles'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import Divider from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  wishlistGames?: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  wishlistGames = [],
  recommendedHighlight,
  recommendedGames
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor='secondary'>
          Wishlist
        </Heading>

        {wishlistGames.length > 0 ? (
          <S.WrapperWishlistGames>
            {wishlistGames?.map((game, index) => (
              <GameCard
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
