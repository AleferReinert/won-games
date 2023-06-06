import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
      minimal={minimal}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
