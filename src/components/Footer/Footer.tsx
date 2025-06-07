import { Container } from 'components/Container/Container'
import { FooterColumn } from 'components/FooterColumn/FooterColumn'
import { Logo } from 'components/Logo/Logo'
import Link from 'next/link'
import { CompanyProps } from 'utils/fetchCompany'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'

interface FooterProps {
  company: CompanyProps
}

export const Footer = ({ company }: FooterProps) => {
  const { name, socialLinks, email, phone, number, street, complement, city, state, zipcode, country } = company
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mt-10 pb-4 pt-14 bg-zinc-50 md:[clip-path:polygon(0_0,_100%_14%,_100%_100%,_0_100%)]'>
      <Container>
        <Logo width={107} variant='dark' company={company} />
        <div className='grid gap-8 mt-8 sm:grid-cols-[repeat(2,_1fr)] wrap-anywhere md:grid-cols-[repeat(4,_1fr)] md:wrap-normal'>
          <FooterColumn title='Links'>
            <nav id='resources'>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/explore'>Explore</Link>
                </li>
              </ul>
            </nav>
          </FooterColumn>

          <FooterColumn title='Follow Us'>
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
          </FooterColumn>

          <FooterColumn title='Contact'>
            <a href={`mailto:${email}`} aria-label='email' target='_blank' rel='noopener noreferrer'>
              {email}
            </a>
            <a href={`tel:${phone}`} aria-label='phone' target='_blank' rel='noopener noreferrer'>
              {formatPhoneNumber(phone)}
            </a>
          </FooterColumn>

          <FooterColumn title='Address'>
            <address className='not-italic'>
              <span>
                {number} {street}, {complement}
              </span>
              <span>
                {city}, {state} {zipcode}
              </span>
              <span>{country}</span>
            </address>
          </FooterColumn>
        </div>

        <div aria-label='copyright' className='text-theme-gray-800 text-xs mt-10 mb-8 text-center'>
          {name} {currentYear} © All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
