import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { BannerProps } from 'components/Banner/Banner'
import { ProductProps } from 'components/Product/Product'
import { HighlightProps } from 'components/Highlight/Highlight'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import BaseTemplate from 'templates/Base/Base'
import Container from 'components/Container/Container'
import HighlightStory from 'components/Highlight/Highlight.stories'
import Showcase from 'components/Showcase/Showcase'
import * as S from './Home.styles'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/ProductSlider/mock'

type HomeTemplateProps = {
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

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HighlightStory.args,
      mostPopularsGames: gamesMock,
      comingSoonGames: gamesMock,
      comingSoonHighlight: HighlightStory.args,
      comingSoonMoreGames: gamesMock,
      freeHighlight: HighlightStory.args,
      freeGames: gamesMock
    }
  }
}

const HomePage = (props: HomeTemplateProps & NextPageWithLayout) => {
  return (
    <>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={props.banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase
          title='New Releases'
          games={props.newGames}
          arrowColor='black'
        />
      </S.SectionNews>

      <Showcase
        title='Most Populars'
        highlight={props.mostPopularHighlight}
        games={props.mostPopularsGames}
      />

      <S.SectionComingSoon>
        <Showcase title='Coming Soon' games={props.comingSoonGames} />
        <Showcase
          highlight={props.comingSoonHighlight}
          games={props.comingSoonMoreGames}
        />
      </S.SectionComingSoon>

      <Showcase
        title='Free Games'
        highlight={props.freeHighlight}
        games={props.freeGames}
      />
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <BaseTemplate>{page}</BaseTemplate>
}

export default HomePage
