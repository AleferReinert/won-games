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
        <Image
          src='/img/authentication-bg.jpg'
          alt=''
          aria-hidden
          fill
          data-testid='AuthBackgroundImage'
          priority
          sizes={'(max-width: 1024px) 512px, (max-width: 1280px) 640px, (max-width: 1366px) 683px, 768px'}
        />
        <S.BannerContent>
          <Logo width={126} />
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
          <Logo width={200} variant='dark' />
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
