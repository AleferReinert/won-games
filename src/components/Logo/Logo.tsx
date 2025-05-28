import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { CompanyProps } from 'utils/fetchCompany'

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
      <Image src={logo.url} alt={name} width={logo.width} height={logo.height} className='max-w-full h-auto' />
    </Link>
  )
}
