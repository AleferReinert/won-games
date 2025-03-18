import { AccountCircle, CreditCard, ExitToApp, FormatListBulleted } from '@styled-icons/material-outlined'
import Box from 'components/Box/Box'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'
import DefaultTemplate from 'templates/Default/Default'
import * as S from './Account.styles'

const nav = [
  {
    icon: <AccountCircle aria-hidden role='img' />,
    title: 'My profile',
    link: '/account/profile'
  },
  {
    icon: <CreditCard aria-hidden role='img' />,
    title: 'My cards',
    link: '/account/credit-cards'
  },
  {
    icon: <FormatListBulleted aria-hidden role='img' />,
    title: 'My orders',
    link: '/account/orders'
  },
  {
    icon: <ExitToApp aria-hidden role='img' />,
    title: 'Sign out',
    link: '/logout'
  }
]

interface AccountTemplateProps {
  activeLink: 'My profile' | 'My cards' | 'My orders'
  children: React.ReactNode
}

const AccountTemplate = ({ activeLink, children }: AccountTemplateProps) => {
  return (
    <DefaultTemplate>
      <Container>
        <Heading as='h1' $line='left' $lineColor='secondary'>
          My account
        </Heading>

        <S.Wrapper>
          <S.Nav>
            {nav.map((item, index) => {
              return (
                <S.Item key={index} href={item.link} active={activeLink === item.title}>
                  {item.icon}
                  <S.Text>{item.title}</S.Text>
                </S.Item>
              )
            })}
          </S.Nav>
          <S.Children>
            <Box>
              <Heading color='black' $line='bottom' size='large'>
                {activeLink}
              </Heading>
            </Box>
            {children}
          </S.Children>
        </S.Wrapper>
      </Container>
    </DefaultTemplate>
  )
}

export default AccountTemplate
