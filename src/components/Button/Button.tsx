import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './Button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  full?: boolean
  icon?: ReactNode
  variant?: 'primary' | 'link'
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  full = false,
  icon,
  variant = 'primary',
  as,
  ...props
}: ButtonProps) => {
  const options = { size, full, icon, variant, as, ...props }
  const content = (
    <>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </>
  )
  return (
    <>
      {as == 'a' ? (
        <S.WrapperAsLink {...options}>{content}</S.WrapperAsLink>
      ) : (
        <S.Wrapper {...options}>{content}</S.Wrapper>
      )}
    </>
  )
}

export default Button
