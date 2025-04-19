import { AccountCircle, ExitToApp, FormatListBulleted } from '@styled-icons/material-outlined'
import Box from 'components/Box/Box'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'
import { signOut } from 'next-auth/react'
import { ReactNode } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import * as S from './Account.styles'

const nav = [
  {
    icon: <AccountCircle aria-hidden role='img' />,
    title: 'My profile',
    link: '/account/profile'
  },
  {
    icon: <FormatListBulleted aria-hidden role='img' />,
    title: 'My orders',
    link: '/account/orders'
  },
  {
    icon: <ExitToApp aria-hidden role='img' />,
    title: 'Logout',
    link: '/'
  }
]

interface AccountTemplateProps {
  activeLink: 'My profile' | 'My cards' | 'My orders'
  children: ReactNode
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
            {nav.map((item) => {
              return (
                <S.Item
                  key={item.title}
                  href={item.link}
                  active={activeLink === item.title}
                  onClick={() => {
                    item.title === 'Logout' && signOut()
                  }}
                >
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
