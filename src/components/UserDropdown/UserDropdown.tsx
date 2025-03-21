import { ChevronDown as ChevronDownIcon, Exit as ExitIcon, Heart as HeartIcon } from '@styled-icons/boxicons-regular'
import { AccountCircle as AccountCircleIcon } from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown/Dropdown'
import Link from 'next/link'
import * as S from './UserDropdown.styles'

type UserDropdownProps = {
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
            <AccountCircleIcon />
            My account
          </Link>
          <Link href='/wishlist'>
            <HeartIcon />
            Wishlist
          </Link>
          <Link href='/logout'>
            <ExitIcon />
            Logout
          </Link>
        </S.Nav>
      </Dropdown>
    </S.Wrapper>
  )
}

export default UserDropdown
