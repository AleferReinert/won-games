import { BannerProps } from 'components/Banner/Banner'
import { GameCardProps } from 'components/GameCard/GameCard'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Base/Base'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import Showcase from 'components/Showcase/Showcase'
import * as S from './Home.styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularsGames: GameCardProps[]
  comingSoonGames: GameCardProps[]
  comingSoonHighlight: HighlightProps
  comingSoonMoreGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularsGames,
  comingSoonGames,
  comingSoonHighlight,
  comingSoonMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title='New Releases' games={newGames} arrowColor='black' />
      </S.SectionNews>

      <Showcase
        title='Most Populars'
        highlight={mostPopularHighlight}
        games={mostPopularsGames}
      />

      <S.SectionComingSoon>
        <Showcase title='Coming Soon' games={comingSoonGames} />
        <Showcase highlight={comingSoonHighlight} games={comingSoonMoreGames} />
      </S.SectionComingSoon>

      <Showcase
        title='Free Games'
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
