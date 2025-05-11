import Heading from 'components/Heading/Heading'
import Logo from 'components/Logo/Logo'
import Image from 'next/image'
import * as S from './Auth.styles'

interface AuthTemplateProps {
  title: string
  children: React.ReactNode
}

const AuthTemplate = ({ title, children }: AuthTemplateProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock data-testid='bannerBlock'>
        <Image src='/img/authentication-bg.jpg' alt='' aria-hidden fill data-testid='AuthBackgroundImage' />
        <S.BannerContent>
          <Logo />
          <div>
            <Heading size='huge'>All your favorites games in one place</Heading>
            <S.Description>
              <strong>WON</strong> is the best and most complete gaming platform.
            </S.Description>
          </div>
          <S.BannerFooter>
            <p>Won Games 2023 © Todos os Direitos Reservados</p>
          </S.BannerFooter>
        </S.BannerContent>
      </S.BannerBlock>
      <S.AuthBlock>
        <S.AuthContent>
          <Logo color='black' size='large' />
          <Heading $line='left' $lineColor='secondary' color='black' as='h1'>
            {title}
          </Heading>
          {children}
        </S.AuthContent>
      </S.AuthBlock>
    </S.Wrapper>
  )
}

export default AuthTemplate
