import { BannerProps } from 'components/Banner/Banner'
import { ShowcaseProps } from 'components/Showcase/Showcase'
import { PAGE_HOME } from 'graphql/queries/pageHome'
import { PageHomeQuery, PageHomeQueryVariables } from 'types/generated'
import { initializeApollo } from './apollo'
import { bannerMapper, highlightMapper, productMapper } from './mappers'

export interface HomePageProps {
  banners: BannerProps[]
  newReleasesShowcase: ShowcaseProps
  mostPopularShowcase: ShowcaseProps
  comingSoonShowcase: ShowcaseProps
  freeProductsShowcase: ShowcaseProps
}

export async function fetchHomePage(): Promise<HomePageProps> {
  const apolloClient = initializeApollo({})
  const currentDate = new Date().toISOString().slice(0, 10)
  const past30DaysDate = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().slice(0, 10)

  try {
    const home = await apolloClient.query<PageHomeQuery, PageHomeQueryVariables>({
      query: PAGE_HOME,
      variables: { limit: 8, currentDate, pastDate: past30DaysDate },
      fetchPolicy: 'no-cache'
    })
    const { newProducts, popularProducts, comingSoonProducts, freeProducts } = home.data.showcases.data.attributes

    return {
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
  } catch (error) {
    console.error('Error loading home page:', error)
    throw new Error('Error loading home page')
  }
}
