import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import ProductHeader, {
  ProductHeaderProps
} from 'components/ProductHeader/ProductHeader'
import ProductDetails, {
  ProductDetailsProps
} from 'components/ProductDetails/ProductDetails'
import { ProductProps } from 'components/Product/Product'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Base/Base'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Showcase from 'components/Showcase/Showcase'
import TextContent from 'components/TextContent/TextContent'
import * as S from './Game.styles'

export type GameTemplateProps = {
  cover: string
  productHeader: ProductHeaderProps
  gallery?: GalleryImageProps[]
  description: string
  details: ProductDetailsProps
  upcomingHighlight: HighlightProps
  upcomingGames: ProductProps[]
  recommendedGames: ProductProps[]
}

const Game = ({
  cover,
  productHeader,
  gallery,
  description,
  details,
  upcomingHighlight,
  upcomingGames,
  recommendedGames
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} aria-label='cover' role='img' />
      <S.ProductHeaderWrapper>
        <ProductHeader {...productHeader} />
      </S.ProductHeaderWrapper>

      {!!gallery && (
        <S.GalleryWrapper>
          <Container>
            <Gallery items={gallery} />
          </Container>
        </S.GalleryWrapper>
      )}

      <S.TextContentWrapper>
        <Container>
          <TextContent title='About game' content={description} />
        </Container>
      </S.TextContentWrapper>

      <Container>
        <S.ProductDetailsWrapper>
          <ProductDetails {...details} />
        </S.ProductDetailsWrapper>
        <Divider />
      </Container>

      <Showcase
        title='Upcoming'
        highlight={upcomingHighlight}
        games={upcomingGames}
      />
      <Showcase title='You make like these games' games={recommendedGames} />
    </Base>
  )
}

export default Game
