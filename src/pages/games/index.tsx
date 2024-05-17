import { useQuery } from '@apollo/client'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Container from 'components/Container/Container'
import Empty from 'components/Empty/Empty'
import Filter from 'components/Filter/Filter'
import filterMock from 'components/Filter/mock'
import Product from 'components/Product/Product'
import { GET_ALL_GAMES } from 'graphql/queries/getAllGames'
import { Query } from 'graphql/types'
import { GetStaticProps } from 'next'
import * as S from 'pages/games/games.styles'
import { type ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import { baseUrl } from 'utils/mappers'

export const productsLimit = 6

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query<Pick<Query, 'games'>>({
    query: GET_ALL_GAMES,
    variables: { limit: productsLimit }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

const GamesPage = () => {
  const { data, fetchMore } = useQuery<Pick<Query, 'games'>>(GET_ALL_GAMES, {
    variables: { limit: productsLimit } // todo: aumentar para 9 quando tiver mais produtos
  })

  const loadMore = () => {
    fetchMore({
      variables: {
        start: data?.games.data.length || 0,
        limit: productsLimit
      }
    })
  }

  const products = data?.games.data
  const emptyProducts = !products || !products.length

  return (
    <Container>
      <S.Wrapper>
        <Filter items={filterMock} onFilter={() => console.log('onfilter')} />

        <div>
          <S.Games>
            {!emptyProducts &&
              products?.map(({ attributes: product }, index) => (
                <Product
                  key={index}
                  title={product.name}
                  developer={product.developers.data[0]?.attributes.name}
                  img={
                    product.cover.data
                      ? baseUrl + product.cover.data.attributes.url
                      : ''
                  }
                  price={product.price}
                  slug={product.slug}
                />
              ))}
          </S.Games>
          {emptyProducts ? (
            <Empty
              title='No results found'
              description="Sorry, we couldn't find any results for your search."
            />
          ) : (
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

GamesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}

export default GamesPage
