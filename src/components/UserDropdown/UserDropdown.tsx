import { AccountCircle as AccountCircleIcon } from '@styled-icons/material-outlined'
import {
  ChevronDown as ChevronDownIcon,
  Heart as HeartIcon,
  Exit as ExitIcon
} from '@styled-icons/boxicons-regular'
import Dropdown from 'components/Dropdown/Dropdown'
import Link from 'next/link'
import * as S from './UserDropdown.styles'

type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <S.Wrapper>
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
