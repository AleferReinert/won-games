'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, useState } from 'react'
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
  const [loading, setLoading] = useState(true)

  return (
    <Link
      data-testid='LogoComponent'
      href='/'
      className={`flex relative justify-center h-fit ${props.className || ''}`}
      style={{ width: width ? `${width}px` : 'auto' }}
    >
      <Image
        priority
        src={getStrapiMedia(logo.url)}
        alt={name}
        width={logo.width}
        height={logo.height}
        onLoad={() => setLoading(false)}
        className={`${variant === 'dark' ? 'text-theme-gray-900' : 'text-zinc-50'} 
				${loading ? 'opacity-0' : 'opacity-100'}
				max-w-full h-auto text-sm text-center transition ease-in-out duration-300`}
      />
    </Link>
  )
}
