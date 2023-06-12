import Logo from 'components/Logo'
import * as S from './styles'
import Heading from 'components/Heading'
import { ReactNode } from 'react'
import Link from 'next/link'

type AuthProps = {
  title: string
  children: ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href='/'>
            <Logo />
          </Link>
          <div>
            <Heading size='huge'>All your favorites games in one place</Heading>
            <S.Description>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Description>
          </div>
          <S.BannerFooter>
            <p>Won Games 2023 © Todos os Direitos Reservados</p>
          </S.BannerFooter>
        </S.BannerContent>
      </S.BannerBlock>
      <S.AuthBlock>
        <S.AuthContent>
          <Link href='/'>
            <Logo color='black' size='large' id='b' />
          </Link>
          <Heading lineLeft lineColor='secondary' size='medium' color='black'>
            {title}
          </Heading>
          {children}
        </S.AuthContent>
      </S.AuthBlock>
    </S.Wrapper>
  )
}

export default Auth