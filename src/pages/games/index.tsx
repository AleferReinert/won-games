import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import Container from 'components/Container/Container'
import DefaultTemplate from 'templates/Default/Default'
import Empty from 'components/Empty/Empty'
import Filter from 'components/Filter/Filter'
import filterMock from 'components/Filter/mock'
import Product, { ProductProps } from 'components/Product/Product'
import * as S from 'pages/games/games.styles'
import { GameEntity } from 'graphql/generated/types'

export type GamesPageProps = {
  products?: ProductProps[]
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      products: data.games.data.map((game: GameEntity) => ({
        title: game.attributes.name,
        developer: game.attributes.developers.data[0].attributes.name,
        img: game.attributes.cover.data
          ? 'http://localhost:1337' + game.attributes.cover.data.attributes.url
          : '',
        price: game.attributes.price,
        slug: game.attributes.slug
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
            {!emptyProducts &&
              props.products?.map((item, index) => (
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
              <KeyboardArrowDown size={24} />
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
