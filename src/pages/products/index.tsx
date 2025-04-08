import { useQuery } from '@apollo/client'
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
import { Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { queryStringToGraphqlFilters } from 'utils/filter'

export const productsLimit = 3 // todo: aumentar para 9 quando tiver mais produtos

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo({})
  const {
    data: { platforms }
  } = await apolloClient.query<Pick<Query, 'platforms'>>({
    query: PLATFORMS
  })
  const {
    data: { categories }
  } = await apolloClient.query<Pick<Query, 'categories'>>({
    query: CATEGORIES
  })

  const filterOptions: FilterOptionsProps[] = [
    {
      title: 'Price',
      name: 'price',
      type: 'radio',
      fields: [
        { label: 'Under $50', id: 'under-50', value: '50' },
        { label: 'Under $100', id: 'under-100', value: '100' },
        { label: 'Under $150', id: 'under-150', value: '150' },
        { label: 'Under $200', id: 'under-200', value: '200' },
        { label: 'Free', id: 'free', value: '0' }
      ]
    },
    {
      title: 'Sort by',
      name: 'sort',
      type: 'radio',
      fields: [
        {
          label: 'Low to high',
          id: 'low-to-high',
          value: 'price:asc'
        },
        {
          label: 'High to low',
          id: 'high-to-low',
          value: 'price:desc'
        }
      ]
    },
    {
      title: 'Platforms',
      name: 'platforms',
      type: 'checkbox',
      fields:
        platforms.data.map(({ attributes }) => ({
          label: attributes.name,
          id: attributes.slug,
          value: attributes.slug
        })) || []
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'checkbox',
      fields:
        categories.data.map(({ attributes }) => ({
          label: attributes.name,
          id: attributes.slug,
          value: attributes.slug
        })) || []
    }
  ]

  await apolloClient.query<Pick<Query, 'games'>>({
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query,
        filterOptions
      })
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterOptions
    }
  }
}

interface ProductsPageProps {
  filterOptions: FilterOptionsProps[]
}

const ProductsPage = ({ filterOptions }: ProductsPageProps) => {
  const { query, push } = useRouter()
  const { data, fetchMore, loading } = useQuery<Pick<Query, 'games'>>(PRODUCTS, {
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
        start: data?.games.data.length || 0,
        limit: productsLimit
      }
    })
  }

  const products = data?.games.data || []
  const totalProducts = data?.games.meta.pagination.total || 0
  const allProductsLoaded = products.length >= totalProducts

  return (
    <Container data-testid='ProductsPage'>
      <S.Wrapper>
        <Filter filterOptions={filterOptions} initialValues={query} handleFilter={handleFilter} />

        <div>
          <S.Products>
            {products.length > 0 &&
              products?.map(({ attributes, id }, index) => (
                <Product
                  id={id}
                  key={index}
                  title={attributes.name}
                  developer={attributes.developers.data[0]?.attributes.name || ''} //todo: no strapi não da pra colocar required
                  img={
                    attributes.cover?.data ? process.env.NEXT_PUBLIC_API_URL + attributes.cover.data.attributes.url : ''
                  }
                  price={attributes.price}
                  slug={attributes.slug}
                />
              ))}
          </S.Products>
          {products.length === 0 ? (
            <Empty title='No results found' $description="Sorry, we couldn't find any results for your search." />
          ) : loading ? (
            <Loading />
          ) : allProductsLoaded ? null : (
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
