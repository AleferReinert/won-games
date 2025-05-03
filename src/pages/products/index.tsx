import { NormalizedCacheObject, useQuery } from '@apollo/client'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Container from 'components/Container/Container'
import Empty from 'components/Empty/Empty'
import Filter, { FilterOptionsProps } from 'components/Filter/Filter'
import { Loading } from 'components/Loading/Loading'
import Product from 'components/Product/Product'
import { CATEGORIES } from 'graphql/queries/categories'
import { PLATFORMS } from 'graphql/queries/platforms'
import { PRODUCTS } from 'graphql/queries/products'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import * as S from 'pages/products/ProductsPage.styles'
import { ParsedUrlQueryInput } from 'querystring'
import { type ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { CategoriesQuery, PlatformsQuery, ProductsQuery, ProductsQueryVariables } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { queryStringToGraphqlFilters } from 'utils/filter'
import { generateFilterOptions } from 'utils/filterOptions'
import { getImageUrl } from 'utils/getImageUrl'

export const productsLimit = 9

interface ProductsPageProps {
  filterOptions: FilterOptionsProps[]
  initialApolloState: NormalizedCacheObject | null
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo({})
  const { data: platforms } = await apolloClient.query<PlatformsQuery>({ query: PLATFORMS })
  const { data: categories } = await apolloClient.query<CategoriesQuery>({ query: CATEGORIES })
  const filterOptions = generateFilterOptions({ platforms, categories })

  await apolloClient.query<ProductsQuery, Pick<ProductsQueryVariables, 'limit'>>({
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query,
        filterOptions
      })
    }
  })
  const props: ProductsPageProps = {
    filterOptions,
    initialApolloState: apolloClient.cache.extract()
  }

  return { props }
}

const ProductsPage = ({ filterOptions }: ProductsPageProps) => {
  const { query, push } = useRouter()
  const { data, fetchMore, loading } = useQuery<ProductsQuery, Pick<ProductsQueryVariables, 'limit'>>(PRODUCTS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query,
        filterOptions
      })
    }
  })

  const handleFilter = (values: ParsedUrlQueryInput) => {
    push({
      pathname: '/products',
      query: values
    })
    return
  }

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
    <Container data-testid='ProductsPage'>
      <S.Wrapper>
        <Filter filterOptions={filterOptions} initialValues={query} handleFilter={handleFilter} />

        <div>
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
  )
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
export default ProductsPage
