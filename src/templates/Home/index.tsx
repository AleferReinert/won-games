import { Container } from 'components/Container'
import * as S from './styles'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

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
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor='secondary' color='black'>
            New Releases
          </Heading>
          <GameCardSlider items={newGames} arrowColor='black' />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor='secondary'>
            Most Populars
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularsGames} />
        </S.SectionMostPopular>

        <S.SectionComingSoon>
          <Heading lineLeft lineColor='secondary'>
            Coming Soon
          </Heading>
          <GameCardSlider items={comingSoonGames} />
          <Highlight {...comingSoonHighlight} />
          <GameCardSlider items={comingSoonMoreGames} />
        </S.SectionComingSoon>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor='secondary'>
            Free Games
          </Heading>
          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
