import type { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import * as S from './games.styles'
import Filter from 'components/Filter/Filter'
import Container from 'components/Container/Container'
import filterMock from '../../components/Filter/mock'
import Product, { ProductProps } from 'components/Product/Product'
import { NextPageWithLayout } from 'pages/_app'
import productsMock from 'components/ProductSlider/mock'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import Empty from 'components/Empty/Empty'

export type GamesPageProps = {
  products?: ProductProps[]
}

export async function getServerSideProps() {
  return {
    props: {
      products: productsMock
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
