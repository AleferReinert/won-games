import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { CartItemProps } from 'components/CartItem/CartItem'
import CartItemList from 'components/CartItemList/CartItemList'
import Dropdown from 'components/Dropdown/Dropdown'
import Link from 'next/link'
import * as S from './CartDropdown.styles'

interface CartDropdownProps {
  cartItems?: CartItemProps[]
  total?: string
}

const CartDropdown = ({ cartItems, total }: CartDropdownProps) => {
  return (
    <S.Wrapper data-testid='CartDropdownComponent'>
      <div id='desktop'>
        <Dropdown
          button={
            <>
              <S.ButtonCart title='Shopping cart' aria-label='Shopping cart'>
                <S.BadgeCart aria-label='Cart items'>
                  {cartItems && cartItems.length > 0 ? cartItems.length : 0}
                </S.BadgeCart>
                <ShoppingCartIcon role='img' aria-hidden width={24} height={24} />
              </S.ButtonCart>
            </>
          }
        >
          <CartItemList cartItems={cartItems} total={total} button />
        </Dropdown>
      </div>
      <div id='mobile'>
        <Link href='/cart' title='Shopping cart' aria-label='Shopping cart'>
          <ShoppingCartIcon role='img' aria-hidden width={24} height={24} />
        </Link>
      </div>
    </S.Wrapper>
  )
}

export default CartDropdown
