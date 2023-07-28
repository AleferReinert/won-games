import { ProductProps } from 'components/Product/Product'
import { HighlightProps } from 'components/Highlight/Highlight'
import { Info } from '@styled-icons/material-outlined/Info'
import Base from 'templates/Base/Base'
import CartItemList, {
  CartItemListProps
} from 'components/CartItemList/CartItemList'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'
import PaymentOptions, {
  PaymentOptionsProps
} from 'components/PaymentOptions/PaymentOptions'
import Divider from 'components/Divider/Divider'
import Empty from 'components/Empty/Empty'
import Link from 'next/link'
import Showcase from 'components/Showcase/Showcase'
import * as S from './Cart.styles'

export type CartTemplateProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: ProductProps[]
} & CartItemListProps &
  PaymentOptionsProps

const Cart = ({
  cartItems,
  total,
  creditCards,
  recommendedHighlight,
  recommendedGames
}: CartTemplateProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading line='left' lineColor='secondary'>
          My cart
        </Heading>

        {cartItems.length ? (
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
        ) : (
          <Empty
            title='Your cart is empty'
            description='Go back to the store and explore great games and offers.'
            label='Home'
            link='/'
          />
        )}
        <Divider />
      </Container>

      <Showcase
        title='You make like these games'
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Cart
