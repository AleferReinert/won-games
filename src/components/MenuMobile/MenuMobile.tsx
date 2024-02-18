import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from 'components/Button/Button'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import * as S from './MenuMobile.styles'

type MenuMobileProps = {
  username?: string
  menuMobile: boolean
  setMenuMobile: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({
  username,
  menuMobile,
  setMenuMobile
}: MenuMobileProps) => {
  return (
    <S.MenuMobile aria-label='menu mobile' aria-hidden={!menuMobile}>
      <S.CloseMenu aria-label='Close menu' onClick={() => setMenuMobile(false)}>
        <CloseIcon />
      </S.CloseMenu>

      <S.MenuNav>
        <S.MenuLink href='/'>Home</S.MenuLink>
        <S.MenuLink href='/games'>Explore</S.MenuLink>
        {!!username && (
          <>
            <S.MenuLink href='/account/profile'>My account</S.MenuLink>
            <S.MenuLink href='/wishlist'>Wishlist</S.MenuLink>
          </>
        )}
      </S.MenuNav>

      {!username && (
        <S.AuthBox>
          <S.LogInNow>
            <Button size='large' as={Link} href='/sign-in'>
              Log in now
            </Button>
          </S.LogInNow>
          <span>or</span>
          <S.SignUp>
            <Button variant='link' size='large' as={Link} href='/sign-up'>
              Sign up
            </Button>
          </S.SignUp>
        </S.AuthBox>
      )}
    </S.MenuMobile>
  )
}

export default MenuMobile
