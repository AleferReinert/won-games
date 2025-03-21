import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Button from 'components/Button/Button'
import CartDropdown from 'components/CartDropdown/CartDropdown'
import Logo from 'components/Logo/Logo'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import UserDropdown from 'components/UserDropdown/UserDropdown'
import { useState } from 'react'
import * as S from './Header.styles'

interface MenuProps {
  username?: string
}

const Header = ({ username }: MenuProps) => {
  const [menuMobile, setMenuMobile] = useState(false)

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

        {username ? (
          <UserDropdown username={username} />
        ) : (
          <S.ButtonSignIn>
            <Button size='small' href='/sign-in' asLink>
              Sign in
            </Button>
          </S.ButtonSignIn>
        )}
      </S.NavRight>

      <MenuMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} username={username} />
    </S.Wrapper>
  )
}

export default Header
