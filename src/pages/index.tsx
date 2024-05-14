import { BannerProps } from 'components/Banner/Banner'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import Showcase from 'components/Showcase/Showcase'
import { GET_PAGE_HOME } from 'graphql/queries/getPageHome'
import {
  BannerEntityResponseCollection,
  GameEntityResponseCollection,
  GameRelationResponseCollection,
  HomeEntity
} from 'graphql/types'
import { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import { bannerMapper, highlightMapper, productMapper } from 'utils/mappers'
import * as S from './Home.styles'

export interface HomeTemplateProps {
  banners: BannerProps[]
  newsSectionTitle: string
  newsSectionProducts: ProductProps[]
  mostPopularsSectionTitle: string
  mostPopularsSectionHighlight: HighlightProps
  mostPopularsSectionProducts: ProductProps[]
  comingSoonSectionTitle: string
  comingSoonSectionHighlight: HighlightProps
  comingSoonSectionProducts: ProductProps[]
  freeSectionTitle: string
  freeSectionHighlight: HighlightProps
  freeSectionProducts: ProductProps[]
}

export interface HomeProps {
  banners: BannerEntityResponseCollection
  newGames: GameEntityResponseCollection
  comingSoonGames: GameEntityResponseCollection
  mostPopularGames: GameRelationResponseCollection
  freeGames: GameEntityResponseCollection
  showcases: { data: HomeEntity }
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<HomeProps>({
    query: GET_PAGE_HOME,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) }
  })

  const { banners, newGames, comingSoonGames, freeGames, showcases } = data
  const {
    newGames: newsSection,
    mostPopularGames: mostPopularsSection,
    comingSoonGames: comingSoonSection,
    freeGames: freeSection
  } = showcases.data.attributes

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      newsSectionTitle: newsSection.title,
      newsSectionProducts: productMapper(newGames),
      mostPopularsSectionTile: mostPopularsSection.title,
      mostPopularsSectionHighlight: highlightMapper(
        mostPopularsSection.highlight
      ),
      mostPopularsSectionProducts: productMapper(mostPopularsSection.games),
      comingSoonSectionTitle: comingSoonSection.title,
      comingSoonSectionHighlight: highlightMapper(comingSoonSection.highlight),
      comingSoonSectionProducts: productMapper(comingSoonGames),
      freeSectionTitle: freeSection.title,
      freeSectionHighlight: highlightMapper(freeSection.highlight),
      freeSectionProducts: productMapper(freeGames)
    }
  }
}
export default function Index({
  banners,
  newsSectionTitle,
  newsSectionProducts,
  mostPopularsSectionTitle,
  mostPopularsSectionHighlight,
  mostPopularsSectionProducts,
  comingSoonSectionTitle,
  comingSoonSectionHighlight,
  comingSoonSectionProducts,
  freeSectionTitle,
  freeSectionHighlight,
  freeSectionProducts
}: HomeTemplateProps) {
  return (
    <>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase
          title={newsSectionTitle}
          products={newsSectionProducts}
          arrowColor='black'
        />
      </S.SectionNews>

      <Showcase
        title={mostPopularsSectionTitle}
        highlight={mostPopularsSectionHighlight}
        products={mostPopularsSectionProducts}
      />

      <Showcase
        title={comingSoonSectionTitle}
        highlight={comingSoonSectionHighlight}
        products={comingSoonSectionProducts}
      />

      <Showcase
        title={freeSectionTitle}
        highlight={freeSectionHighlight}
        products={freeSectionProducts}
      />
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
