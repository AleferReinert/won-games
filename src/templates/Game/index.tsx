import Base from 'templates/Base'
import * as S from './styles'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { Container } from 'components/Container'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

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
      </Container>

      <Showcase
        title='Upcoming'
        highlight={upcomingHighlight}
        games={upcomingGames}
      />
      <Showcase title='You make like this games' games={recommendedGames} />
    </Base>
  )
}

export default Game
