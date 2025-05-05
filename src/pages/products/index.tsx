import { NormalizedCacheObject, useQuery } from '@apollo/client'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Container from 'components/Container/Container'
import Empty from 'components/Empty/Empty'
import Filter from 'components/Filter/Filter'
import FilterTags from 'components/FilterTags/FilterTags'
import { Loading } from 'components/Loading/Loading'
import Product from 'components/Product/Product'
import { PRODUCTS } from 'graphql/queries/products'
import { FilterProvider, useFilter } from 'hooks/useFilter'
import { GetServerSidePropsContext } from 'next'
import * as S from 'pages/products/ProductsPage.styles'
import { type ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { ProductsQuery, ProductsQueryVariables } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
import { queryStringToGraphqlFilters } from 'utils/queryStringToGraphqlFilters'

export const productsLimit = 9

interface ProductsPageProps {
  initialApolloState: NormalizedCacheObject | null
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo({})

  await apolloClient.query<ProductsQuery, Pick<ProductsQueryVariables, 'limit'>>({
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query
      })
    }
  })
  const props: ProductsPageProps = {
    initialApolloState: apolloClient.cache.extract()
  }
  return { props }
}

const ProductsPage = () => {
  const { urlQueryParams } = useFilter()
  const { data, fetchMore, loading } = useQuery<ProductsQuery>(PRODUCTS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: urlQueryParams
      })
    }
  })
  const loadMore = () => {
    fetchMore({
      variables: {
        start: data?.products.data.length || 0,
        limit: productsLimit
      }
    })
  }
  const products = data?.products.data || []
  const allProductsLoaded = products.length >= (data?.products.meta.pagination.total || 0)
  const hasProducts = products.length > 0
  const showEmpty = !loading && !hasProducts
  const showShowMore = hasProducts && !loading && !allProductsLoaded

  return (
    <FilterProvider>
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
            </S.Products>

            {showEmpty && (
              <Empty title='No results found' $description="Sorry, we couldn't find any results for your search." />
            )}

            {loading && <Loading />}

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
