import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import DefaultTemplate from 'templates/Default/Default'
import Box from 'components/Box/Box'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'
import * as S from './Account.styles'

const nav = [
  {
    icon: <AccountCircle title='My profile' />,
    title: 'My profile',
    link: '/account/profile'
  },
  {
    icon: <CreditCard title='My cards' />,
    title: 'My cards',
    link: '/account/credit-cards'
  },
  {
    icon: <FormatListBulleted title='My orders' />,
    title: 'My orders',
    link: '/account/orders'
  },
  {
    icon: <ExitToApp title='Sign out' />,
    title: 'Sign out',
    link: '/logout'
  }
]

type AccountTemplateProps = {
  activeLink: 'My profile' | 'My cards' | 'My orders'
  children: React.ReactNode
}

const AccountTemplate = ({ activeLink, children }: AccountTemplateProps) => {
  return (
    <DefaultTemplate>
      <Container>
        <Heading line='left' lineColor='secondary'>
          My account
        </Heading>

        <S.Wrapper>
          <S.Nav>
            {nav.map((item, index) => {
              return (
                <S.Item
                  key={index}
                  href={item.link}
                  active={activeLink === item.title}
                >
                  {item.icon}
                  <S.Text aria-hidden>{item.title}</S.Text>
                </S.Item>
              )
            })}
          </S.Nav>
          <S.Children>
            <Box>
              <Heading color='black' line='bottom' size='large'>
                {activeLink}
              </Heading>
              {children}
            </Box>
          </S.Children>
        </S.Wrapper>
      </Container>
    </DefaultTemplate>
  )
}

export default AccountTemplate
