import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './Button.styles'

export interface ButtonProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  $full?: boolean
  icon?: ReactNode
  $variant?: 'primary' | 'link'
  asLink?: boolean
}

export type ButtonConditionalProps = ButtonProps &
  (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>)

const Button = ({
  children,
  size = 'medium',
  $full = false,
  $variant = 'primary',
  asLink = false,
  ...props
}: ButtonConditionalProps) => {
  const options = { size, $full, $variant, ...props }

  return (
    <S.Wrapper as={asLink ? 'a' : 'button'} {...options}>
      {children}
    </S.Wrapper>
  )
}

export default Button
