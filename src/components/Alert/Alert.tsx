import { ReactNode } from 'react'
import * as S from './Alert.styles'

interface AlertProps {
  variant?: 'error' | 'success' | 'info' | 'warning'
  children: ReactNode
}
const Alert = ({ variant = 'error', children }: AlertProps) => {
  return (
    <S.Wrapper variant={variant} role='alert'>
      <p>{children}</p>
    </S.Wrapper>
  )
}

export default Alert
