import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from 'components/Button/Button'
import { Dispatch, SetStateAction } from 'react'
import * as S from './MenuMobile.styles'

type MenuMobileProps = {
  username?: string
  menuMobile: boolean
  setMenuMobile: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({ username, menuMobile, setMenuMobile }: MenuMobileProps) => {
  return (
    <S.MenuMobile aria-label='Menu mobile' aria-hidden={!menuMobile} data-testid='MenuMobileComponent'>
      <S.CloseMenu aria-label='Close menu' title='Close menu' onClick={() => setMenuMobile(false)}>
        <CloseIcon role='img' width={24} height={24} />
      </S.CloseMenu>

      <S.MenuNav>
        <S.MenuLink href='/'>Home</S.MenuLink>
        <S.MenuLink href='/products'>Explore</S.MenuLink>
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
            <Button size='large' asLink href='/sign-in'>
              Log in now
            </Button>
          </S.LogInNow>
          <span>or</span>
          <S.SignUp>
            <Button $variant='link' size='large' asLink href='/sign-up'>
              Sign up
            </Button>
          </S.SignUp>
        </S.AuthBox>
      )}
    </S.MenuMobile>
  )
}

export default MenuMobile
