import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Button from 'components/Button/Button'
import CartDropdown from 'components/CartDropdown/CartDropdown'
import Logo from 'components/Logo/Logo'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import UserDropdown from 'components/UserDropdown/UserDropdown'
import { useState } from 'react'
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
        <S.MenuLink href='/games'>Explore</S.MenuLink>
      </S.MenuDesktop>

      <S.NavRight>
        <S.IconWrapper>
          <SearchIcon title='Search' />
        </S.IconWrapper>

        <S.IconWrapper>
          <CartDropdown />
        </S.IconWrapper>

        {!username ? (
          <S.ButtonSignIn>
            <Button size='small' href='/sign-in' asLink>
              Sign in
            </Button>
          </S.ButtonSignIn>
        ) : (
          <UserDropdown username={username} />
        )}
      </S.NavRight>

      <MenuMobile
        menuMobile={menuMobile}
        setMenuMobile={setMenuMobile}
        username={username}
      />
    </S.Wrapper>
  )
}

export default Header
