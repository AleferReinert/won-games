import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { useState } from 'react'
import Button from 'components/Button/Button'
import CartDropdown from 'components/CartDropdown/CartDropdown'
import Link from 'next/link'
import Logo from 'components/Logo/Logo'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import * as S from './Header.styles'

type MenuProps = {
  username?: string
}

const Header = ({ username }: MenuProps) => {
  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <S.Wrapper>
      <S.OpenMenu onClick={() => setMenuMobile(true)}>
        <S.IconWrapper>
          <MenuIcon aria-label='open menu' />
        </S.IconWrapper>
      </S.OpenMenu>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MenuDesktop>
        <S.MenuLink href='/'>Home</S.MenuLink>
        <S.MenuLink href='#'>Explore</S.MenuLink>
      </S.MenuDesktop>

      <S.NavRight>
        <S.IconWrapper>
          <SearchIcon aria-label='search' />
        </S.IconWrapper>

        <S.IconWrapper>
          <CartDropdown />
        </S.IconWrapper>

        {!username && (
          <S.ButtonSignIn>
            <Button size='small' href='/sign-in' as={Link}>
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
