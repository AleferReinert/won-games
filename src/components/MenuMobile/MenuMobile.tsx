import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from 'components/Button/Button'
import { useLogout } from 'hooks/useLogout'
import { useSession } from 'next-auth/react'
import { Dispatch, SetStateAction } from 'react'
import * as S from './MenuMobile.styles'

interface MenuMobileProps {
  menuMobile: boolean
  setMenuMobile: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({ menuMobile, setMenuMobile }: MenuMobileProps) => {
  const { status } = useSession()
  const { logout } = useLogout()
  const closeMenu = () => setMenuMobile(false)

  return (
    <S.MenuMobile aria-label='Menu mobile' aria-hidden={!menuMobile} data-testid='MenuMobileComponent'>
      <S.CloseMenu aria-label='Close menu' title='Close menu' onClick={() => setMenuMobile(false)}>
        <CloseIcon role='img' aria-hidden width={24} height={24} />
      </S.CloseMenu>

      <S.MenuNav>
        <S.MenuLink href='/' onClick={closeMenu}>
          Home
        </S.MenuLink>
        <S.MenuLink href='/products' onClick={closeMenu}>
          Explore
        </S.MenuLink>
        {status === 'authenticated' && (
          <>
            <S.MenuLink href='/account/profile' onClick={closeMenu}>
              My account
            </S.MenuLink>
            <S.MenuLink href='/wishlist' onClick={closeMenu}>
              Wishlist
            </S.MenuLink>
            <S.MenuLink href='/' onClick={logout}>
              Logout
            </S.MenuLink>
          </>
        )}
      </S.MenuNav>

      {status === 'unauthenticated' && (
        <S.AuthBox>
          <S.LogInNow>
            <Button size='large' asLink href='/sign-in' onClick={closeMenu}>
              Log in
            </Button>
          </S.LogInNow>
          <span>or</span>
          <S.SignUp>
            <Button $variant='link' size='large' asLink href='/sign-up' onClick={closeMenu}>
              Sign up
            </Button>
          </S.SignUp>
        </S.AuthBox>
      )}
    </S.MenuMobile>
  )
}

export default MenuMobile
