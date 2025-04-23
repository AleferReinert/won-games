import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Info } from '@styled-icons/material-outlined/Info'
import CartItems from 'components/CartItems/CartItems'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import Skeleton from 'components/Skeleton/Skeleton'
import StripePaymentForm from 'components/StripePaymentForm/StripePaymentForm'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'
import { GetServerSidePropsContext } from 'next/types'
import { type ReactElement } from 'react'
import Default from 'templates/Default/Default'
import { Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import { requireAuth } from 'utils/requireAuth'
import type { NextPageWithLayout } from '../_app'
import * as S from './CartPage.styles'

export interface CartPageProps {
  recommendedSection: ShowcaseProps
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  if (!session) return { props: {} }

  const apolloClient = initializeApollo({ session })
  const { data } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS
  })

  const { title, highlight, products } = data.recommended.data.attributes

  return {
    props: {
      recommendedSection: {
        title,
        highlight: highlightMapper(highlight),
        products: productMapper(products)
      }
    }
  }
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const CartPage = ({ recommendedSection }: CartPageProps & NextPageWithLayout) => {
  const { cartProducts, loading } = useCart()
  const isCartEmpty = !loading && cartProducts.length === 0

  return (
    <div data-testid='CartPage'>
      <Container>
        <Heading $line='left' $lineColor='secondary' as='h1'>
          My cart
        </Heading>

        {isCartEmpty && (
          <Empty title='Your cart is empty' $description='Go back to the store and explore great games and offers.' />
        )}

        <S.Content>
          {loading ? (
            <>
              <Skeleton width='auto' height={180} />
              <Skeleton width='auto' height={180} />
            </>
          ) : (
            cartProducts.length && (
              <>
                <CartItems />
                <Elements stripe={stripePromise}>
                  <StripePaymentForm />
                </Elements>
              </>
            )
          )}
        </S.Content>

        {!isCartEmpty && (
          <S.Info>
            <Info role='img' aria-hidden width={24} height={24} />
            Your purchase is protected by a secure WON platform connection. By purchasing from our store you accept and
            agree with our <Link href='/'>terms of use</Link>. After completing the purchase You have the right to a
            refund within a maximum of 30 days, without any additional cost as long as the purchased game download does
            not occurred after your purchase.
          </S.Info>
        )}
        <Divider />
      </Container>

      <Showcase
        title={recommendedSection.title}
        highlight={recommendedSection.highlight}
        products={recommendedSection.products}
      />
    </div>
  )
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default CartPage
