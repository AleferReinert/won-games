import Heading from 'components/Heading/Heading'
import Logo from 'components/Logo/Logo'
import { CompanyContext } from 'contexts/CompanyContext'
import Link from 'next/link'
import { useContext } from 'react'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'
import * as S from './Footer.styles'

const Footer = () => {
  const { name, email, phone, socialLinks, street, number, city, state, zipcode, country, complement } =
    useContext(CompanyContext)
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <Logo variant='dark' />
      <S.Content>
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
                <Link href='/products'>Explore</Link>
              </li>
            </ul>
          </nav>
        </S.Column>

        <S.Column aria-labelledby='social-media'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Follow Us
          </Heading>
          <nav id='social-media'>
            <ul>
              {socialLinks?.map((social) => {
                return (
                  <li key={social.name}>
                    <a href={social.url} target='_blank' rel='noopener noreferrer'>
                      {social.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </S.Column>

        <S.Column aria-label='contact'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Contact
          </Heading>
          <a href={`mailto:${email}`} aria-label='email' target='_blank' rel='noopener noreferrer'>
            {email}
          </a>
          <a href={`tel:${phone}`} aria-label='phone' target='_blank' rel='noopener noreferrer'>
            {formatPhoneNumber(phone)}
          </a>
        </S.Column>

        <S.Column aria-label='address'>
          <Heading color='black' size='medium' $line='bottom' $lineColor='secondary'>
            Address
          </Heading>
          <S.Address>
            <span>
              {number} {street}, {complement}
            </span>
            <span>
              {city}, {state} {zipcode}
            </span>

            <span>{country}</span>
          </S.Address>
        </S.Column>
      </S.Content>

      <S.Copyright aria-label='copyright'>
        {name} {currentYear} © All rights reserved.
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
