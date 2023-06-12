import { Container } from 'components/Container'
import * as S from './styles'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

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
        <Showcase title='New Releases' games={newGames} />
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

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
