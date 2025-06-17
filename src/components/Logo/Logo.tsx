'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, useState } from 'react'
import { CompanyProps } from 'utils/fetchCompany'
import { getStrapiMedia } from 'utils/getStrapiMedia'

export interface LogoProps extends ComponentProps<'a'> {
  variant?: 'light' | 'dark' | 'icon'
  width: number
  height: number
  company: CompanyProps
}

export const Logo = ({ variant = 'light', width, height, company, ...props }: LogoProps) => {
  const { logoLight, logoDark, name, logoIcon } = company
  const logo = variant === 'light' ? logoLight : variant === 'dark' ? logoDark : logoIcon
  const [loading, setLoading] = useState(true)

  return (
    <Link data-testid='LogoComponent' href='/' className={`inline-block min-w-max ${props.className || ''}`}>
      <Image
        priority
        src={getStrapiMedia(logo.url)}
        alt={name}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        className={`${variant === 'dark' ? 'text-theme-gray-900' : 'text-zinc-50'} 
				${loading ? 'opacity-0' : 'opacity-100'}
				text-sm text-center transition ease-in-out duration-300`}
      />
    </Link>
  )
}
