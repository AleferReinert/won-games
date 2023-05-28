import { ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
