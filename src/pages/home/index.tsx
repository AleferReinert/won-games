import { BannerProps } from 'components/Banner/Banner'
import { ProductProps } from 'components/Product/Product'
import { HighlightProps } from 'components/Highlight/Highlight'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import Showcase from 'components/Showcase/Showcase'
import * as S from './Home.styles'

export type HomeTemplateProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  banners: BannerProps[]
  newGames: ProductProps[]
  mostPopularHighlight: HighlightProps
  mostPopularsGames: ProductProps[]
  comingSoonGames: ProductProps[]
  comingSoonHighlight: HighlightProps
  comingSoonMoreGames: ProductProps[]
  freeHighlight: HighlightProps
  freeGames: ProductProps[]
}

const HomePage = ({
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
    <>
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
    </>
  )
}

export default HomePage
