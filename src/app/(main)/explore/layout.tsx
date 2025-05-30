import { NormalizedCacheObject } from '@apollo/client'
import { Container } from 'components/Container/Container'
import { Filter, FilterOptionsProps } from 'components/Filter/Filter'
import { FilterTags } from 'components/FilterTags/FilterTags'
import { CATEGORIES } from 'graphql/queries/categories'
import { PLATFORMS } from 'graphql/queries/platforms'
import { FilterProvider } from 'hooks/useFilter'
import { Metadata } from 'next'
import { CategoriesQuery, PlatformsQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { generateFilterOptions } from 'utils/filterOptions'

export const metadata: Metadata = {
  title: 'Explore'
}

export const productsLimit = 9

interface ExploreProps {
  initialApolloState: NormalizedCacheObject | null
  filterOptions: FilterOptionsProps[]
}

interface ExploreLayoutProps {
  children: React.ReactNode
}

async function fetchProducts(): Promise<ExploreProps> {
  const apolloClient = initializeApollo()
  const platforms = await apolloClient.query<PlatformsQuery>({ query: PLATFORMS })
  const categories = await apolloClient.query<CategoriesQuery>({ query: CATEGORIES })
  const filterOptions = generateFilterOptions({ platforms: platforms.data, categories: categories.data })

  return {
    initialApolloState: apolloClient.cache.extract(),
    filterOptions
  }
}

export default async function LayoutExplore({ children }: ExploreLayoutProps) {
  const { filterOptions } = await fetchProducts()

  return (
    <FilterProvider filterOptions={filterOptions}>
      <Container data-testid='ExplorePage'>
        <div className='lg:grid lg:gap-8 lg:grid-cols-[220px_auto]'>
          <Filter />

          <div>
            <FilterTags />
            {children}
          </div>
        </div>
      </Container>
    </FilterProvider>
  )
}
