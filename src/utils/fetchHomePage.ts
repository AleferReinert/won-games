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
  const past6MonthsDate = new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().slice(0, 10)

  try {
    const home = await apolloClient.query<PageHomeQuery, PageHomeQueryVariables>({
      query: PAGE_HOME,
      variables: { limit: 8, currentDate, pastDate: past6MonthsDate },
      fetchPolicy: 'no-cache'
    })

    return {
      banners: bannerMapper(home.data.banners),
      newReleasesShowcase: {
        title: home.data.showcases?.newProducts?.title,
        products: productMapper(home.data.newProducts)
      },
      mostPopularShowcase: {
        title: home.data.showcases?.popularProducts?.title,
        highlight:
          home.data.showcases?.popularProducts?.highlight &&
          highlightMapper(home.data.showcases?.popularProducts.highlight),
        products: productMapper(home.data.showcases?.popularProducts?.products)
      },
      comingSoonShowcase: {
        title: home.data.showcases?.comingSoonProducts?.title,
        highlight:
          home.data.showcases?.comingSoonProducts?.highlight &&
          highlightMapper(home.data.showcases?.comingSoonProducts.highlight),
        products: productMapper(home.data.comingSoonProducts)
      },
      freeProductsShowcase: {
        title: home.data.showcases?.freeProducts?.title,
        highlight:
          home.data.showcases?.freeProducts?.highlight && highlightMapper(home.data.showcases?.freeProducts.highlight),
        products: productMapper(home.data.freeProducts)
      }
    }
  } catch (error) {
    console.error('Error loading home page:', error)
    throw new Error('Error loading home page')
  }
}
