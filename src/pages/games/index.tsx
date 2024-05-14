import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Container from 'components/Container/Container'
import Empty from 'components/Empty/Empty'
import Filter from 'components/Filter/Filter'
import filterMock from 'components/Filter/mock'
import Product, { ProductProps } from 'components/Product/Product'
import { GET_ALL_GAMES } from 'graphql/queries/getAllGames'
import { Query } from 'graphql/types'
import { GetStaticProps } from 'next'
import * as S from 'pages/games/games.styles'
import { type ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import { NextPageWithLayout } from '../_app'

export type GamesPageProps = {
  products?: ProductProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const {
    data: { games }
  } = await apolloClient.query<Pick<Query, 'games'>>({
    query: GET_ALL_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      products: games.data.map(({ attributes: game }) => ({
        title: game.name,
        developer: game.developers.data.length
          ? game.developers.data[0].attributes.name
          : '', // todo: not is possible set this with required in Strapi, create default
        img: game.cover.data
          ? 'http://localhost:1337' + game.cover.data.attributes.url
          : '',
        price: game.price,
        slug: game.slug
      }))
    }
  }
}

const GamesPage = ({ products }: GamesPageProps & NextPageWithLayout) => {
  const emptyProducts = !products || !products.length

  return (
    <Container>
      <S.Wrapper>
        <Filter items={filterMock} onFilter={() => console.log('onfilter')} />
        <div>
          <S.Games>
            {!emptyProducts &&
              products?.map((item, index) => <Product key={index} {...item} />)}
          </S.Games>
          {emptyProducts ? (
            <Empty
              title='No results found'
              description="Sorry, we couldn't find any results for your search."
            />
          ) : (
            <S.ShowMore>
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
