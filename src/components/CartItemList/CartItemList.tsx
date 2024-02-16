import CartItem, { CartItemProps } from 'components/CartItem/CartItem'
import Button from 'components/Button/Button'
import Empty from 'components/Empty/Empty'
import * as S from './CartItemList.styles'

export type CartItemListProps = {
  cartItems?: CartItemProps[]
  total?: string
  button?: boolean
}

const CartItemList = ({
  cartItems = [],
  total,
  button = false
}: CartItemListProps) => {
  return (
    <S.Wrapper aria-label='cart list'>
      <S.List>
        {cartItems && cartItems.length > 0 ? (
          <>
            {cartItems.map((game, index) => (
              <CartItem key={index} {...game} />
            ))}

            <S.Footer>
              {button ? '' : 'Total:'}
              <S.PriceTotal aria-label='total price'>{total}</S.PriceTotal>
              {button ? (
                <Button as='a' href='/cart'>
                  Buy it now
                </Button>
              ) : (
                ''
              )}
            </S.Footer>
          </>
        ) : (
          <Empty
            title='Your cart is empty'
            description='Go back to the store and explore great games and offers.'
            invertedColors
            small
          />
        )}
      </S.List>
    </S.Wrapper>
  )
}

export default CartItemList
