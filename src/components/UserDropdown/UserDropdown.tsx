import { ChevronDown as ChevronDownIcon, Exit as ExitIcon, Heart as HeartIcon } from '@styled-icons/boxicons-regular'
import { AccountCircle as AccountCircleIcon } from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown/Dropdown'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import * as S from './UserDropdown.styles'

const UserDropdown = () => {
  const { data: session } = useSession()

  return (
    <S.Wrapper data-testid='UserDropdownComponent'>
      <Dropdown
        button={
          <>
            <AccountCircleIcon aria-hidden />
            <S.Username>{session?.user?.name}</S.Username>
            <ChevronDownIcon aria-hidden role='img' width={24} height={24} />
          </>
        }
        buttonLabel='My account'
      >
        <S.Nav>
          <Link href='/account/profile'>
            <AccountCircleIcon aria-hidden />
            My account
          </Link>
          <Link href='/wishlist'>
            <HeartIcon aria-hidden />
            Wishlist
          </Link>
          <Link href='/' onClick={() => void signOut()}>
            <ExitIcon aria-hidden />
            Logout
          </Link>
        </S.Nav>
      </Dropdown>
    </S.Wrapper>
  )
}

export default UserDropdown
