import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Button from 'components/Button/Button'
import CartDropdown from 'components/CartDropdown/CartDropdown'
import Logo from 'components/Logo/Logo'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import Skeleton from 'components/Skeleton/Skeleton'
import UserDropdown from 'components/UserDropdown/UserDropdown'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import * as S from './Header.styles'

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const { status } = useSession()
  const [showSearch, setShowSearch] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleShowSearch() {
    searchInputRef.current && !showSearch ? (searchInputRef.current.value = '') : ''
    setShowSearch(!showSearch)
    if (!showSearch) {
      searchInputRef.current?.focus()
    }
  }

  function searchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (searchInputRef.current?.value) {
      const currentParams = new URLSearchParams(window.location.search)
      currentParams.set('search', searchInputRef.current.value)
      router.push(`/products?${currentParams.toString()}`)
    }
  }

  return (
    <S.Wrapper>
      <S.OpenMenu onClick={() => setMenuMobile(true)} title='Open menu' aria-label='Open menu'>
        <S.IconWrapper>
          <MenuIcon role='img' aria-hidden width={24} height={24} />
        </S.IconWrapper>
      </S.OpenMenu>

      <S.LogoWrapper $isOpen={showSearch}>
        <Logo />
      </S.LogoWrapper>

      <S.MenuDesktop>
        <S.MenuLink href='/'>Home</S.MenuLink>
        <S.MenuLink href='/products'>Explore</S.MenuLink>
      </S.MenuDesktop>

      <S.NavRight>
        <S.SearchWrapper $isOpen={showSearch} onSubmit={searchSubmit}>
          <input ref={searchInputRef} type='search' placeholder='Search games...' autoFocus />
          <S.IconWrapper>
            <button title='Search' aria-label='Search' onClick={handleShowSearch}>
              <SearchIcon role='img' aria-hidden width={24} height={24} />
            </button>
          </S.IconWrapper>
        </S.SearchWrapper>

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
