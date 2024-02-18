import { CartItemProps } from 'components/CartItem/CartItem'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import CartItemList from 'components/CartItemList/CartItemList'
import Dropdown from 'components/Dropdown/Dropdown'
import * as S from './CartDropdown.styles'
import Link from 'next/link'

type CartDropdownProps = {
  cartItems?: CartItemProps[]
  total?: string
}

const CartDropdown = ({ cartItems, total }: CartDropdownProps) => {
  return (
    <S.Wrapper data-testid='cartDropdownComponent'>
      <div id='desktop'>
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
      </div>
      <div id='mobile'>
        <Link href='/cart'>
          <ShoppingCartIcon title='Shopping cart' />
        </Link>
      </div>
    </S.Wrapper>
  )
}

export default CartDropdown
