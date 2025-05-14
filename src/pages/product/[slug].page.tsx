import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import Heading from 'components/Heading/Heading'
import { Loading } from 'components/Loading/Loading'
import ProductDetails, { ProductDetailsProps } from 'components/ProductDetails/ProductDetails'
import ProductHeader, { ProductHeaderProps } from 'components/ProductHeader/ProductHeader'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { COMING_SOON } from 'graphql/queries/comingSoon'
import { PRODUCT_BY_SLUG } from 'graphql/queries/productBySlug'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { ComingSoonQuery, ProductBySlugQuery, RecommendedProductsQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
import { highlightMapper, productMapper } from 'utils/mappers'
import * as S from './ProductPage.styles'

export interface ProductPageProps {
  cover: {
    url: string
    alternativeText: string
  }
  productHeader: ProductHeaderProps
  gallery?: GalleryImageProps[]
  description: string
  details: ProductDetailsProps
  comingSoon: ShowcaseProps
  recommended: ShowcaseProps
  session: Session | null
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const session = await getSession(context)
  const apolloClient = initializeApollo()

  const productResponse = await apolloClient.query<ProductBySlugQuery>({
    query: PRODUCT_BY_SLUG,
    variables: { slug: context.params?.slug },
    fetchPolicy: 'no-cache'
  })
  const productsNotFound = productResponse.data.products.data.length === 0
  if (productsNotFound) {
    return { notFound: true }
  }
  const comingSoonResponse = await apolloClient.query<ComingSoonQuery>({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })
  const recommendedProducts = await apolloClient.query<RecommendedProductsQuery>({
    query: RECOMMENDED_PRODUCTS,
    fetchPolicy: 'no-cache'
  })

  const comingSoon = comingSoonResponse.data.showcase.data.attributes.comingSoonProducts
  const recommended = recommendedProducts.data.recommended.data.attributes
  const product = productResponse.data.products.data[0]
  const { cover, name, short_description, price, promotional_price, gallery, description } = product.attributes
  const { developers, release_date, platforms, publisher, rating, categories } = product.attributes
  const props: ProductPageProps = {
    cover: {
      url: getImageUrl(cover.data?.attributes.url) || '/img/default/product-cover.webp',
      alternativeText: cover.data.attributes.alternativeText ?? ''
    },
    productHeader: {
      id: product.id,
      title: name,
      description: short_description,
      price: price,
      promotionalPrice: promotional_price
    },
    gallery: gallery.data.map(({ attributes }) => ({
      src: getImageUrl(attributes.url),
      label: attributes.alternativeText
    })),
    description: description,
    details: {
      developer: developers.data[0]?.attributes.name || '',
      releaseDate: release_date || '',
      platforms: platforms.data.map((platform) => platform.attributes.name),
      publisher: publisher.data?.attributes.name || '',
      rating: rating || '',
      categories: categories.data.map(({ attributes }) => attributes.name)
    },
    comingSoon: {
      title: comingSoon.title,
      highlight: comingSoon.highlight.background.data && highlightMapper(comingSoon.highlight),
      products: productMapper(comingSoonResponse.data.comingSoonProducts)
    },
    recommended: {
      title: recommended.title,
      products: productMapper(recommended.products)
    },
    session
  }

  return { props }
}

const ProductPage = ({
  cover,
  productHeader,
  gallery,
  description,
  details,
  comingSoon,
  recommended
}: ProductPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <Loading />

  return (
    <>
      <S.Cover data-testid='cover'>
        <Image priority src={cover.url} alt={cover.alternativeText} fill aria-hidden={!cover.alternativeText} />
      </S.Cover>

      <S.ProductHeaderWrapper>
        <ProductHeader {...productHeader} />
      </S.ProductHeaderWrapper>

      {gallery && (
        <S.GalleryWrapper>
          <Container>
            <Gallery items={gallery} />
          </Container>
        </S.GalleryWrapper>
      )}

      <S.Description>
        <Container>
          <Heading $line='left' $lineColor='secondary'>
            About game
          </Heading>
          <S.Content data-testid='description' dangerouslySetInnerHTML={{ __html: description }} />
        </Container>
      </S.Description>

      <Container>
        <S.ProductDetailsWrapper>
          <ProductDetails {...details} />
        </S.ProductDetailsWrapper>
        <Divider />
      </Container>

      <Showcase data-cy='comingSoon' {...comingSoon} />
      <Showcase data-cy='recommendedProducts' {...recommended} />
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default ProductPage
