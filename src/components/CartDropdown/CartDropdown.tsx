import { CartItemProps } from 'components/CartItem/CartItem'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import CartItemList from 'components/CartItemList/CartItemList'
import Dropdown from 'components/Dropdown/Dropdown'
import * as S from './CartDropdown.styles'

type CartDropdownProps = {
  cartItems?: CartItemProps[]
  total?: string
}

const CartDropdown = ({ cartItems, total }: CartDropdownProps) => {
  return (
    <S.Wrapper data-testid='cartDropdownComponent'>
      <Dropdown
        button={
          <S.ButtonCart>
            <S.BadgeCart aria-label='Cart items'>
              {cartItems && cartItems.length > 0 ? cartItems.length : 0}
            </S.BadgeCart>
            <ShoppingCartIcon title='Shopping cart' />
          </S.ButtonCart>
        }
      >
        <CartItemList cartItems={cartItems} total={total} button />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
