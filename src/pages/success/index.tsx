import Heading from 'components/Heading/Heading'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'
import { GetServerSideProps } from 'next/types'
import { useEffect, type ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import { RecommendedProductsQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import { requireAuth } from 'utils/requireAuth'
import * as S from './success.styles'

interface SuccessPageProps {
  recommendedShowcase: ShowcaseProps
}

export const getServerSideProps: GetServerSideProps<SuccessPageProps> = async (context) => {
  const { session } = await requireAuth(context)
  if (!session) return { props: {} as SuccessPageProps }

  const apolloClient = initializeApollo({ session })
  const responseRecommended = await apolloClient.query<RecommendedProductsQuery>({
    query: RECOMMENDED_PRODUCTS
  })
  const { title, highlight, products } = responseRecommended.data.recommended.data.attributes
  const props: SuccessPageProps = {
    recommendedShowcase: {
      title,
      highlight: highlightMapper(highlight),
      products: productMapper(products)
    }
  }

  return { props }
}

const SuccessPage = ({ recommendedShowcase }: SuccessPageProps) => {
  const { clearCart } = useCart()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => clearCart(), [])

  return (
    <>
      <S.Wrapper>
        <Heading as='h1'>Your purchase was successful!</Heading>
        <S.Svg alt='' src='/img/success-checked.svg' width={100} height={100} aria-hidden />
        <S.Description>
          Save your payment details by email. <br />
          Your game is now available for download <Link href='/account/orders'>here</Link>.
        </S.Description>
      </S.Wrapper>

      <Showcase {...recommendedShowcase} />
    </>
  )
}

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}

export default SuccessPage
