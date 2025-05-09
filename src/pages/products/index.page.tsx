import { NormalizedCacheObject, useQuery } from '@apollo/client'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Container from 'components/Container/Container'
import Empty from 'components/Empty/Empty'
import Filter, { FilterOptionsProps } from 'components/Filter/Filter'
import FilterTags from 'components/FilterTags/FilterTags'
import Product from 'components/Product/Product'
import Skeleton from 'components/Skeleton/Skeleton'
import { CATEGORIES } from 'graphql/queries/categories'
import { PLATFORMS } from 'graphql/queries/platforms'
import { PRODUCTS } from 'graphql/queries/products'
import { FilterProvider } from 'hooks/useFilter'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import * as S from 'pages/products/ProductsPage.styles'
import { type ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { CategoriesQuery, PlatformsQuery, ProductsQuery, ProductsQueryVariables } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { generateFilterOptions } from 'utils/filterOptions'
import { getImageUrl } from 'utils/getImageUrl'
import { queryStringToGraphqlFilters } from 'utils/queryStringToGraphqlFilters'

export const productsLimit = 9

interface ProductsPageProps {
  initialApolloState: NormalizedCacheObject | null
  filterOptions: FilterOptionsProps[]
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  await apolloClient.query<ProductsQuery, Pick<ProductsQueryVariables, 'limit'>>({
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query
      })
    }
  })
  const platforms = await apolloClient.query<PlatformsQuery>({ query: PLATFORMS })
  const categories = await apolloClient.query<CategoriesQuery>({ query: CATEGORIES })
  const filterOptions = generateFilterOptions({ platforms: platforms.data, categories: categories.data })

  const props: ProductsPageProps = {
    initialApolloState: apolloClient.cache.extract(),
    filterOptions
  }
  return { props }
}

const ProductsPage = ({ filterOptions }: ProductsPageProps) => {
  const { query } = useRouter()
  const { data, fetchMore, loading } = useQuery<ProductsQuery>(PRODUCTS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query
      })
    }
  })
  const products = data?.products.data || []
  const allProductsLoaded = products.length >= (data?.products.meta.pagination.total || 0)
  const hasProducts = products.length > 0
  const showEmpty = !loading && !hasProducts
  const showShowMore = hasProducts && !loading && !allProductsLoaded
  const loadMore = () => {
    fetchMore({
      variables: {
        start: products.length,
        limit: productsLimit
      }
    })
  }

  return (
    <FilterProvider filterOptions={filterOptions}>
      <Container data-testid='ProductsPage'>
        <S.Wrapper>
          <Filter />

          <div>
            <FilterTags />
            <S.Products data-cy='products'>
              {hasProducts &&
                products.map(({ attributes, id }, index) => {
                  const firstThreeProducts = index < 3

                  return (
                    <Product
                      id={id}
                      key={id}
                      title={attributes.name}
                      developer={attributes.developers.data[0]?.attributes.name || ''}
                      img={getImageUrl(attributes.cover.data.attributes.url) || '/img/defaults/product-default.webp'}
                      imgPriority={firstThreeProducts}
                      price={attributes.price}
                      slug={attributes.slug}
                      promotionalPrice={attributes.promotional_price}
                      ribbonLabel={attributes.ribbon_label}
                    />
                  )
                })}
              {loading && <Skeleton width='100%' height={235} />}
            </S.Products>

            {showEmpty && (
              <Empty title='No results found' $description="Sorry, we couldn't find any results for your search." />
            )}

            {showShowMore && (
              <S.ShowMore onClick={loadMore}>
                <span>Show more</span>
                <KeyboardArrowDown />
              </S.ShowMore>
            )}
          </div>
        </S.Wrapper>
      </Container>
    </FilterProvider>
  )
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
export default ProductsPage
