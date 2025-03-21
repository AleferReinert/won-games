import { ChevronDown as ChevronDownIcon, Exit as ExitIcon, Heart as HeartIcon } from '@styled-icons/boxicons-regular'
import { AccountCircle as AccountCircleIcon } from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown/Dropdown'
import Link from 'next/link'
import * as S from './UserDropdown.styles'

interface UserDropdownProps {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <S.Wrapper data-testid='UserDropdownComponent'>
      <Dropdown
        button={
          <>
            <AccountCircleIcon />
            <S.Username>{username}</S.Username>
            <ChevronDownIcon />
          </>
        }
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
          <Link href='/logout'>
            <ExitIcon aria-hidden />
            Logout
          </Link>
        </S.Nav>
      </Dropdown>
    </S.Wrapper>
  )
}

export default UserDropdown
