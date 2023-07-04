import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from 'components/Button/Button'
import Link from 'next/link'
import * as S from './MenuMobile.styles'
import { Dispatch, SetStateAction } from 'react'

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
