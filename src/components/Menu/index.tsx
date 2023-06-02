import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Logo from 'components/Logo'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOPen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan='medium'>
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label='Open menu' />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan='medium'>
        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label='search' />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label='open shopping cart' />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan='medium'>
            <Button size='small'>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOPen} isOpen={isOPen}>
        <CloseIcon aria-label='Close menu' onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href='#'>My account</S.MenuLink>
              <S.MenuLink href='#'>Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size='large'>
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href='#' title='Sign up'>
              Sign up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu