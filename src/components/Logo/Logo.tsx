import { CompanyContext } from 'contexts/CompanyContext'
import Image from 'next/image'
import { useContext } from 'react'
import * as S from './Logo.styles'

export interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
  $withoutText?: boolean
}

const Logo = ({ variant = 'light', size = 'medium', $withoutText = false }: LogoProps) => {
  const { logoLight, logoDark, name } = useContext(CompanyContext)
  const logo = variant === 'light' ? logoLight : logoDark

  return (
    <S.Wrapper variant={variant} size={size} $withoutText={$withoutText} data-testid='LogoComponent' href='/'>
      <Image src={logo.url} alt={name} width={logo.width} height={logo.height} />
    </S.Wrapper>
  )
}

export default Logo
