import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { CartItemProps } from 'components/CartItem/CartItem'
import { CreditCardProps } from 'components/CreditCard/CreditCard'
import { HighlightProps } from 'components/Highlight/Highlight'
import { Info } from '@styled-icons/material-outlined/Info'
import { ProductProps } from 'components/Product/Product'
import Base from 'templates/Default/Default'
import CartItemList from 'components/CartItemList/CartItemList'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'
import PaymentOptions from 'components/PaymentOptions/PaymentOptions'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Link from 'next/link'
import Showcase from 'components/Showcase/Showcase'
import highlightMock from 'components/Highlight/mock'
import productSliderMock from 'components/ProductSlider/mock'
import cartItemsMock from 'components/CartItemList/mock'
import creditCardsMock from 'components/PaymentOptions/mock'
import * as S from './cart.styles'

type CartPageProps = {
  cartItems: CartItemProps[]
  total: string
  creditCards: CreditCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: ProductProps[]
}

export async function getServerSideProps() {
  return {
    props: {
      cartItems: cartItemsMock,
      total: '$530',
      creditCards: creditCardsMock,
      recommendedHighlight: highlightMock,
      recommendedGames: productSliderMock
    }
  }
}

const CartPage = (props: CartPageProps & NextPageWithLayout) => {
  const handlePayment = () => ({})
  const emptyCart =
    typeof props.cartItems === 'undefined' || props.cartItems.length === 0

  return (
    <>
      <Container>
        <Heading line='left' lineColor='secondary'>
          My cart
        </Heading>

        {emptyCart ? (
          <Empty
            title='Your cart is empty'
            description='Go back to the store and explore great games and offers.'
            label='Home'
            link='/'
          />
        ) : (
          <>
            <S.Content>
              <CartItemList cartItems={props.cartItems} total={props.total} />

              <PaymentOptions
                creditCards={props.creditCards}
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
        title='You make like these games'
        highlight={props.recommendedHighlight}
        games={props.recommendedGames}
      />
    </>
  )
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default CartPage
