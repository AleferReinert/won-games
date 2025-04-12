import { BannerProps } from 'components/Banner/Banner'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import Showcase from 'components/Showcase/Showcase'
import { PAGE_HOME } from 'graphql/queries/pageHome'
import { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import {
  BannerEntityResponseCollection,
  HomeEntity,
  ProductEntityResponseCollection,
  ProductRelationResponseCollection
} from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { bannerMapper, highlightMapper, productMapper } from 'utils/mappers'
import * as S from './Home.styles'

export interface HomeTemplateProps {
  banners: BannerProps[]
  newShowcaseTitle: string
  newShowcaseProducts: ProductProps[]
  popularShowcaseTitle: string
  popularShowcaseHighlight: HighlightProps
  popularShowcaseProducts: ProductProps[]
  comingSoonShowcaseTitle: string
  comingSoonShowcaseHighlight: HighlightProps
  comingSoonShowcaseProducts: ProductProps[]
  freeShowcaseTitle: string
  freeShowcaseHighlight: HighlightProps
  freeShowcaseProducts: ProductProps[]
}

export interface HomeProps {
  banners: BannerEntityResponseCollection
  newProducts: ProductEntityResponseCollection
  comingSoonProducts: ProductEntityResponseCollection
  mostPopularProducts: ProductRelationResponseCollection
  freeProducts: ProductEntityResponseCollection
  showcases: { data: HomeEntity }
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo({})
  const { data } = await apolloClient.query<HomeProps>({
    query: PAGE_HOME,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })

  const { banners, newProducts, comingSoonProducts, freeProducts, showcases } = data

  const {
    newProducts: newShowcase,
    popularProducts: popularShowcase,
    comingSoonProducts: comingSoonShowcase,
    freeProducts: freeShowcase
  } = showcases.data.attributes

  return {
    revalidate: 60,
    props: {
      banners: bannerMapper(banners),
      newShowcaseTitle: newShowcase.title,
      newShowcaseProducts: productMapper(newProducts),
      popularShowcaseTitle: popularShowcase.title,
      popularShowcaseHighlight: highlightMapper(popularShowcase.highlight),
      popularShowcaseProducts: productMapper(popularShowcase.products),
      comingSoonShowcaseTitle: comingSoonShowcase.title,
      comingSoonShowcaseHighlight: highlightMapper(comingSoonShowcase.highlight),
      comingSoonShowcaseProducts: productMapper(comingSoonProducts),
      freeShowcaseTitle: freeShowcase.title,
      freeShowcaseHighlight: highlightMapper(freeShowcase.highlight),
      freeShowcaseProducts: productMapper(freeProducts)
    }
  }
}
export default function Index({
  banners,
  newShowcaseTitle,
  newShowcaseProducts,
  popularShowcaseTitle,
  popularShowcaseHighlight,
  popularShowcaseProducts,
  comingSoonShowcaseTitle,
  comingSoonShowcaseHighlight,
  comingSoonShowcaseProducts,
  freeShowcaseTitle,
  freeShowcaseHighlight,
  freeShowcaseProducts
}: HomeTemplateProps) {
  return (
    <>
      {banners.length > 0 && (
        <Container>
          <S.SectionBanner>
            <BannerSlider items={banners} />
          </S.SectionBanner>
        </Container>
      )}

      <S.SectionNews>
        <Showcase title={newShowcaseTitle} products={newShowcaseProducts} $arrowColor='black' />
      </S.SectionNews>

      <Showcase title={popularShowcaseTitle} highlight={popularShowcaseHighlight} products={popularShowcaseProducts} />

      <Showcase
        title={comingSoonShowcaseTitle}
        highlight={comingSoonShowcaseHighlight}
        products={comingSoonShowcaseProducts}
      />

      <Showcase title={freeShowcaseTitle} highlight={freeShowcaseHighlight} products={freeShowcaseProducts} />
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
