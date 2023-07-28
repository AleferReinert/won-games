import CartItem, { CartItemProps } from 'components/CartItem/CartItem'
import * as S from './CartItemList.styles'

export type CartItemListProps = {
  cartItems: CartItemProps[]
  total: string
}

const CartItemList = ({ cartItems, total }: CartItemListProps) => {
  return (
    <S.Wrapper aria-label='cart list'>
      <S.List>
        {cartItems.map((game, index) => (
          <CartItem key={index} {...game} />
        ))}
      </S.List>
      <S.Footer>
        Total:
        <S.PriceTotal aria-label='total price'>{total}</S.PriceTotal>
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartItemList
