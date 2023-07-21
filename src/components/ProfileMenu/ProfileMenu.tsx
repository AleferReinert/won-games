import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import * as S from './ProfileMenu.styles'

export type ProfileMenuProps = {
  activeLink?: 'profile/me' | 'profile/cards' | 'profile/orders'
}

const items = [
  {
    icon: <AccountCircle title='My profile' />,
    text: 'My profile',
    link: 'profile/me'
  },
  {
    icon: <CreditCard title='My cards' />,
    text: 'My cards',
    link: 'profile/cards'
  },
  {
    icon: <FormatListBulleted title='My orders' />,
    text: 'My orders',
    link: 'profile/orders'
  },
  {
    icon: <ExitToApp title='Sign out' />,
    text: 'Sign out',
    link: '/logout'
  }
]

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <S.Item key={index} href={item.link} active={activeLink === item.link}>
          {item.icon}
          <S.Text aria-hidden>{item.text}</S.Text>
        </S.Item>
      ))}
    </S.Wrapper>
  )
}

export default ProfileMenu
