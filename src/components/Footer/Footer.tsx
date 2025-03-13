import Heading from 'components/Heading/Heading'
import Logo from 'components/Logo/Logo'
import Link from 'next/link'
import * as S from './Footer.styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color='black' />
      <S.Content>
        <S.Column>
          <Heading
            color='black'
            size='medium'
            $line='bottom'
            $lineColor='secondary'
          >
            Contact
          </Heading>
          <a href='mailto:' aria-label='email'>
            support@wongames.gg
          </a>
          <a href='#' aria-label='phone'>
            55 5555-5555
          </a>
        </S.Column>

        <S.Column>
          <Heading
            color='black'
            size='medium'
            $line='bottom'
            $lineColor='secondary'
          >
            Follow Us
          </Heading>
          <nav aria-labelledby='social media'>
            <a
              href='https://facebook.com/wongames'
              target='_blank'
              rel='noopener, noreferrer'
            >
              Facebook
            </a>
            <a
              href='https://instagram.com/wongames'
              target='_blank'
              rel='noopener, noreferrer'
            >
              Instagram
            </a>
            <a
              href='https://twitter.com/wongames'
              target='_blank'
              rel='noopener, noreferrer'
            >
              Twitter
            </a>
            <a
              href='https://youtube.com/wongames'
              target='_blank'
              rel='noopener, noreferrer'
            >
              YouTube
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading
            color='black'
            size='medium'
            $line='bottom'
            $lineColor='secondary'
          >
            Links
          </Heading>
          <nav aria-labelledby='footer resources'>
            <Link href='/'>Home</Link>
            <Link href='/games'>Store</Link>
            <Link href='/search'>Search</Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading
            color='black'
            size='medium'
            $line='bottom'
            $lineColor='secondary'
          >
            Location
          </Heading>
          <S.Address>
            <span>Rua 7 de maio, 555</span>
            <span>Centro, CEP 89123-456</span>
            <span>São Paulo, Brasil</span>
          </S.Address>
        </S.Column>
      </S.Content>

      <S.Copyright aria-label='copyright'>
        Won Games 2023 © All rights reserved.
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
