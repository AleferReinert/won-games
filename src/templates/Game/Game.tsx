import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo/GameInfo'
import GameDetails, {
  GameDetailsProps
} from 'components/GameDetails/GameDetails'
import { GameCardProps } from 'components/GameCard/GameCard'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Base/Base'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Showcase from 'components/Showcase/Showcase'
import TextContent from 'components/TextContent/TextContent'
import * as S from './Game.styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingHighlight: HighlightProps
  upcomingGames: GameCardProps[]
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
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
      <S.GameInfoWrapper>
        <GameInfo {...gameInfo} />
      </S.GameInfoWrapper>

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
        <S.GameDetailsWrapper>
          <GameDetails {...details} />
        </S.GameDetailsWrapper>
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
