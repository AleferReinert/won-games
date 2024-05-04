import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import ProductHeader, {
  ProductHeaderProps
} from 'components/ProductHeader/ProductHeader'
import ProductDetails, {
  ProductDetailsProps
} from 'components/ProductDetails/ProductDetails'
import { ProductProps } from 'components/Product/Product'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Default/Default'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Heading from 'components/Heading/Heading'
import Showcase from 'components/Showcase/Showcase'
import productHeaderMock from 'components/ProductHeader/mock'
import galleryMock from 'components/Gallery/mock'
import productDetailsMock from 'components/ProductDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'
import descriptionMock from './mock'
import * as S from './Product.styles'

type ProductPageProps = {
  cover: string
  productHeader: ProductHeaderProps
  gallery?: GalleryImageProps[]
  description: string
  details: ProductDetailsProps
  upcomingHighlight: HighlightProps
  upcomingGames: ProductProps[]
  recommendedGames: ProductProps[]
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover: '/img/games/cyberpunk-1.jpg',
      productHeader: productHeaderMock,
      gallery: galleryMock,
      description: descriptionMock.content,
      details: productDetailsMock,
      upcomingHighlight: highlightMock,
      upcomingGames: gamesMock,
      recommendedGames: gamesMock
    }
  }
}

const ProductPage = (props: ProductPageProps & NextPageWithLayout) => {
  return (
    <>
      <S.Cover src={props.cover} aria-label='cover' role='img' />
      <S.ProductHeaderWrapper>
        <ProductHeader {...props.productHeader} />
      </S.ProductHeaderWrapper>

      {!!props.gallery && (
        <S.GalleryWrapper>
          <Container>
            <Gallery items={props.gallery} />
          </Container>
        </S.GalleryWrapper>
      )}

      <S.Description>
        <Container>
          <Heading line='left' lineColor='secondary'>
            About game
          </Heading>
          <div
            data-testid='description'
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </Container>
      </S.Description>

      <Container>
        <S.ProductDetailsWrapper>
          <ProductDetails {...props.details} />
        </S.ProductDetailsWrapper>
        <Divider />
      </Container>

      <Showcase
        title='Upcoming'
        highlight={props.upcomingHighlight}
        games={props.upcomingGames}
      />
      <Showcase
        title='You make like these games'
        games={props.recommendedGames}
      />
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default ProductPage
