import { BannerProps } from 'components/Banner/Banner'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import { HighlightProps } from 'components/Highlight/Highlight'
import HighlightMock from 'components/Highlight/mock'
import { ProductProps } from 'components/Product/Product'
import gamesMock from 'components/ProductSlider/mock'
import Showcase from 'components/Showcase/Showcase'
import { GET_PAGE_HOME } from 'graphql/queries/getPageHome'
import { BannerEntityResponseCollection } from 'graphql/types'
import { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import * as S from './Home.styles'

export interface HomeTemplateProps {
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

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_PAGE_HOME,
    variables: { limit: 9 }
  })

  const banners: BannerEntityResponseCollection = data.banners

  return {
    props: {
      revalidate: 60,
      banners: banners.data.map(({ attributes: banner }) => ({
        img: 'http://localhost:1337' + banner.image.data.attributes.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button.label,
        buttonLink: banner.button.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonSize: banner.ribbon.size,
          ribbonColor: banner.ribbon.color
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularsGames: gamesMock,
      comingSoonGames: gamesMock,
      comingSoonHighlight: HighlightMock,
      comingSoonMoreGames: gamesMock,
      freeHighlight: HighlightMock,
      freeGames: gamesMock
    }
  }
}
export default function Index({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularsGames,
  comingSoonGames,
  comingSoonHighlight,
  comingSoonMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) {
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

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
