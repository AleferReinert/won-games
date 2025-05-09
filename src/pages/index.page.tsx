import { BannerProps } from 'components/Banner/Banner'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import Container from 'components/Container/Container'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { PAGE_HOME } from 'graphql/queries/pageHome'
import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { PageHomeQuery, PageHomeQueryVariables } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { bannerMapper, highlightMapper, productMapper } from 'utils/mappers'
import * as S from './Home.styles'

export interface HomeProps {
  banners: BannerProps[]
  newReleasesShowcase: ShowcaseProps
  mostPopularShowcase: ShowcaseProps
  comingSoonShowcase: ShowcaseProps
  freeProductsShowcase: ShowcaseProps
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const apolloClient = initializeApollo()
  const currentDate = new Date().toISOString().slice(0, 10)
  const past30DaysDate = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().slice(0, 10)
  const home = await apolloClient.query<PageHomeQuery, PageHomeQueryVariables>({
    query: PAGE_HOME,
    variables: { limit: 8, currentDate, pastDate: past30DaysDate },
    fetchPolicy: 'no-cache'
  })
  const { newProducts, popularProducts, comingSoonProducts, freeProducts } = home.data.showcases.data.attributes
  const props: HomeProps = {
    banners: bannerMapper(home.data.banners),
    newReleasesShowcase: {
      title: newProducts.title,
      products: productMapper(home.data.newProducts)
    },
    mostPopularShowcase: {
      title: popularProducts.title,
      highlight: popularProducts.highlight.background.data && highlightMapper(popularProducts.highlight),
      products: productMapper(popularProducts.products)
    },
    comingSoonShowcase: {
      title: comingSoonProducts.title,
      highlight: comingSoonProducts.highlight.background.data && highlightMapper(comingSoonProducts.highlight),
      products: productMapper(home.data.comingSoonProducts)
    },
    freeProductsShowcase: {
      title: freeProducts.title,
      highlight: freeProducts.highlight.background.data && highlightMapper(freeProducts.highlight),
      products: productMapper(home.data.freeProducts)
    }
  }

  return { props, revalidate: 60 }
}

export default function Index({
  banners,
  newReleasesShowcase,
  mostPopularShowcase,
  comingSoonShowcase,
  freeProductsShowcase
}: HomeProps) {
  return (
    <>
      {banners.length > 0 && (
        <Container>
          <S.SectionBanner>
            <BannerSlider items={banners} />
          </S.SectionBanner>
        </Container>
      )}

      {newReleasesShowcase.products.length && (
        <S.SectionNews>
          <Showcase data-cy='newReleases' {...newReleasesShowcase} $arrowColor='black' />
        </S.SectionNews>
      )}

      <Showcase data-cy='mostPopular' {...mostPopularShowcase} />
      <Showcase data-cy='comingSoon' {...comingSoonShowcase} />
      <Showcase data-cy='freeProducts' {...freeProductsShowcase} />
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
