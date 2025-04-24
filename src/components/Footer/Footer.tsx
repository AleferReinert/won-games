import Heading from 'components/Heading/Heading'
import Logo from 'components/Logo/Logo'
import Link from 'next/link'
import * as S from './Footer.styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color='black' />
      <S.Content>
        <S.Column aria-label='contact'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Contact
          </Heading>
          <a href='mailto:' aria-label='email'>
            support@wongames.gg
          </a>
          <a href='#' aria-label='phone'>
            55 5555-5555
          </a>
        </S.Column>

        <S.Column aria-labelledby='social-media'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Follow Us
          </Heading>
          <nav id='social-media'>
            <ul>
              <li>
                <a href='https://facebook.com/wongames' target='_blank' rel='noopener noreferrer'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='https://instagram.com/wongames' target='_blank' rel='noopener noreferrer'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://twitter.com/wongames' target='_blank' rel='noopener noreferrer'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://youtube.com/wongames' target='_blank' rel='noopener noreferrer'>
                  YouTube
                </a>
              </li>
            </ul>
          </nav>
        </S.Column>

        <S.Column aria-labelledby='resources'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Links
          </Heading>
          <nav id='resources'>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/products'>Store</Link>
              </li>
              <li>
                <Link href='/search'>Search</Link>
              </li>
            </ul>
          </nav>
        </S.Column>

        <S.Column aria-label='address'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Location
          </Heading>
          <S.Address>
            <span>Rua 7 de maio, 555</span>
            <span>Centro, CEP 89123-456</span>
            <span>São Paulo, Brasil</span>
          </S.Address>
        </S.Column>
      </S.Content>

      <S.Copyright aria-label='copyright'>Won Games 2023 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
