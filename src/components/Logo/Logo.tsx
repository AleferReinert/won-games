import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { CompanyProps } from 'utils/fetchCompany'
import { getStrapiMedia } from 'utils/getStrapiMedia'

export interface LogoProps extends ComponentProps<'a'> {
  variant?: 'light' | 'dark' | 'icon'
  width?: number
  company: CompanyProps
}

export const Logo = ({ variant = 'light', width = 200, company, ...props }: LogoProps) => {
  const { logoLight, logoDark, name, logoIcon } = company
  const logo = variant === 'light' ? logoLight : variant === 'dark' ? logoDark : logoIcon

  return (
    <Link
      data-testid='LogoComponent'
      href='/'
      className={`flex relative h-fit ${props.className || ''}`}
      style={{ width: width ? `${width}px` : 'auto' }}
    >
      <Image
        src={getStrapiMedia(logo.url)}
        alt={name}
        width={logo.width}
        height={logo.height}
        className={`${variant === 'dark' ? 'text-theme-gray-950' : 'text-zinc-50'} max-w-full h-auto text-sm text-center overflow-visible whitespace-nowrap`}
      />
    </Link>
  )
}
