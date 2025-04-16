import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import CartItems from 'components/CartItems/CartItems'
import Dropdown from 'components/Dropdown/Dropdown'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'
import theme from 'styles/theme'
import * as S from './CartDropdown.styles'

const CartDropdown = () => {
  const { totalQuantity } = useCart()

  return (
    <S.Wrapper data-testid='CartDropdownComponent'>
      <div id='desktop'>
        <Dropdown
          button={
            <S.ButtonCart>
              <S.BadgeCart aria-label='Cart items'>{totalQuantity}</S.BadgeCart>
              <ShoppingCartIcon role='img' aria-hidden width={24} height={24} />
            </S.ButtonCart>
          }
          buttonLabel='Shopping cart'
        >
          <CartItems button />
        </Dropdown>
      </div>
      <div id='mobile'>
        <Link href='/cart' title='Shopping cart' aria-label='Shopping cart'>
          <ShoppingCartIcon role='img' aria-hidden width={24} height={24} fill={theme.colors.white} />
        </Link>
      </div>
    </S.Wrapper>
  )
}

export default CartDropdown
