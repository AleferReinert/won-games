import { CompanyContext } from 'contexts/CompanyContext'
import Image from 'next/image'
import { useContext } from 'react'
import * as S from './Logo.styles'

export interface LogoProps {
  variant?: 'light' | 'dark' | 'icon'
  width?: number
}

const Logo = ({ variant = 'light', width = 200 }: LogoProps) => {
  const { logoLight, logoDark, name, logoIcon } = useContext(CompanyContext)
  const logo = variant === 'light' ? logoLight : variant === 'dark' ? logoDark : logoIcon

  return (
    <S.Wrapper width={width} data-testid='LogoComponent' href='/'>
      <Image src={logo.url} alt={name} width={logo.width} height={logo.height} />
    </S.Wrapper>
  )
}

export default Logo
