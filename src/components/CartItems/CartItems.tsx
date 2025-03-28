import Button from 'components/Button/Button'
import CartItem from 'components/CartItem/CartItem'
import Empty from 'components/Empty/Empty'
import { Loading } from 'components/Loading/Loading'
import { useCart } from 'hooks/useCart'
import { formatPrice } from 'utils/formatPrice'
import * as S from './CartItems.styles'

export interface CartItemsProps {
  button?: boolean
}

const CartItems = ({ button = false }: CartItemsProps) => {
  const { cartProducts, totalPrice, loading } = useCart()

  console.log('loading: ', loading)
  return (
    <S.Wrapper aria-label='cart list' data-testid='CartItemsComponent'>
      {loading ? (
        <Loading color='dark' />
      ) : cartProducts.length ? (
        <>
          <S.List>
            {cartProducts.map((game, index) => (
              <CartItem key={index} {...game} />
            ))}
          </S.List>
          <S.Footer>
            {!button && 'Total:'}
            <S.PriceTotal aria-label='total price'>{formatPrice(totalPrice)}</S.PriceTotal>
            {button && (
              <Button asLink href='/cart'>
                Buy it now
              </Button>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title='Your cart is empty'
          $description='Go back to the store and explore great games and offers.'
          $invertedColors
          $small
        />
      )}
    </S.Wrapper>
  )
}

export default CartItems
