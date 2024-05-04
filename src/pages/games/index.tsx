import type { ReactElement } from 'react'
import { NextPageWithLayout } from 'pages/_app'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import Container from 'components/Container/Container'
import DefaultTemplate from 'templates/Default/Default'
import Empty from 'components/Empty/Empty'
import Filter from 'components/Filter/Filter'
import filterMock from '../../components/Filter/mock'
import Product, { ProductProps } from 'components/Product/Product'
import * as S from './games.styles'
import { GameEntityResponseCollection } from 'graphql/types'

export type GamesPageProps = {
  products?: ProductProps[]
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GameEntityResponseCollection>({
    query: QUERY_GAMES,
    variables: { limit: 2 }
  })

  return {
    props: {
      revalidate: 60,
      products: data.data.map((game) => ({
        title: game.attributes.name,
        developer: game.attributes.developers.data[0].attributes.name,
        img:
          game.attributes.cover.data !== null
            ? 'http://localhost:1337' +
              game.attributes.cover.data.attributes.url
            : 'Image not found',
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'usd'
        }).format(game.attributes.price)
      }))
    }
  }
}

const GamesPage = (props: GamesPageProps & NextPageWithLayout) => {
  const emptyProducts =
    typeof props.products === 'undefined' || props.products.length === 0
  return (
    <Container>
      <S.Wrapper>
        <Filter items={filterMock} onFilter={() => console.log('onfilter')} />
        <div>
          <S.Games>
            {props.products?.map((item, index) => (
              <Product key={index} {...item} />
            ))}
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
