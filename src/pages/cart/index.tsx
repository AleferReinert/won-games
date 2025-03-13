import { Info } from '@styled-icons/material-outlined/Info'
import { CartItemProps } from 'components/CartItem/CartItem'
import CartItemList from 'components/CartItemList/CartItemList'
import cartItemsMock from 'components/CartItemList/mock'
import Container from 'components/Container/Container'
import { CreditCardProps } from 'components/CreditCard/CreditCard'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import PaymentOptions from 'components/PaymentOptions/PaymentOptions'
import creditCardsMock from 'components/PaymentOptions/mock'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { GET_RECOMMENDED_GAMES } from 'graphql/queries/getRecommendedGames'
import { Query } from 'graphql/types'
import Link from 'next/link'
import type { ReactElement } from 'react'
import Default from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import type { NextPageWithLayout } from '../_app'
import * as S from './Cart.styles'

interface CartPageProps {
  cartItems: CartItemProps[]
  total: string
  creditCards: CreditCardProps[]
  recommendedSection: ShowcaseProps
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: GET_RECOMMENDED_GAMES
  })

  const { title, highlight, games } = data.recommended.data.attributes.showcase

  return {
    props: {
      cartItems: cartItemsMock,
      total: '$530',
      creditCards: creditCardsMock,
      recommendedSection: {
        title,
        highlight: highlightMapper(highlight),
        products: productMapper(games)
      }
    }
  }
}

const CartPage = ({
  cartItems,
  total,
  creditCards,
  recommendedSection
}: CartPageProps & NextPageWithLayout) => {
  const handlePayment = () => ({})
  const emptyCart = !cartItems || !cartItems.length

  return (
    <>
      <Container>
        <Heading $line='left' $lineColor='secondary'>
          My cart
        </Heading>

        {emptyCart ? (
          <Empty
            title='Your cart is empty'
            $description='Go back to the store and explore great games and offers.'
          />
        ) : (
          <>
            <S.Content>
              <CartItemList cartItems={cartItems} total={total} />

              <PaymentOptions
                creditCards={creditCards}
                handlePayment={handlePayment}
              />
            </S.Content>
            <S.Info>
              <Info />
              Your purchase is protected by a secure WON platform connection. By
              purchasing from our store you accept and agree with our
              <Link href='/'>terms of use</Link>. After completing the purchase
              You have the right to a refund within a maximum of 30 days,
              without any additional cost as long as the purchased game download
              does not occurred after your purchase.
            </S.Info>
          </>
        )}
        <Divider />
      </Container>

      <Showcase
        title={recommendedSection.title}
        highlight={recommendedSection.highlight}
        products={recommendedSection.products}
      />
    </>
  )
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default CartPage
