import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Button from 'components/Button/Button'
import CartDropdown from 'components/CartDropdown/CartDropdown'
import Logo from 'components/Logo/Logo'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import Skeleton from 'components/Skeleton/Skeleton'
import UserDropdown from 'components/UserDropdown/UserDropdown'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import * as S from './Header.styles'

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const { status } = useSession()

  return (
    <S.Wrapper>
      <S.OpenMenu onClick={() => setMenuMobile(true)} title='Open menu' aria-label='Open menu'>
        <S.IconWrapper>
          <MenuIcon role='img' aria-hidden width={24} height={24} />
        </S.IconWrapper>
      </S.OpenMenu>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MenuDesktop>
        <S.MenuLink href='/'>Home</S.MenuLink>
        <S.MenuLink href='/products'>Explore</S.MenuLink>
      </S.MenuDesktop>

      <S.NavRight>
        <S.IconWrapper>
          <button title='Search' aria-label='Search'>
            <SearchIcon role='img' aria-hidden width={24} height={24} />
          </button>
        </S.IconWrapper>

        <S.IconWrapper>
          <CartDropdown />
        </S.IconWrapper>

        {status === 'loading' && <Skeleton width={57} height={30} $rounded />}
        {status === 'authenticated' && <UserDropdown />}
        {status === 'unauthenticated' && (
          <S.ButtonSignIn>
            <Button size='small' href='/sign-in' asLink>
              Sign in
            </Button>
          </S.ButtonSignIn>
        )}
      </S.NavRight>

      <MenuMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
    </S.Wrapper>
  )
}

export default Header
