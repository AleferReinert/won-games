import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './Button.styles'

export type ButtonProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  full?: boolean
  icon?: ReactNode
  variant?: 'primary' | 'link'
  asLink?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  size = 'medium',
  full = false,
  icon,
  variant = 'primary',
  asLink = false,
  ...props
}: ButtonProps) => {
  const options = { size, full, icon, variant, ...props }

  return (
    <S.Wrapper as={asLink ? 'a' : 'button'} {...options}>
      {children}
    </S.Wrapper>
  )
}

export default Button
