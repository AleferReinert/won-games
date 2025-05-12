import { ReactNode } from 'react'
import * as S from './Alert.styles'

export interface AlertProps {
  $variant?: 'error' | 'success' | 'info' | 'warning'
  children: ReactNode
  $size?: 'small' | 'default'
  $hideBorderLeft?: boolean
}

const Alert = ({ $variant = 'error', children, $size = 'default', $hideBorderLeft }: AlertProps) => {
  return (
    <S.Wrapper>
      <S.Alert $variant={$variant} $size={$size} $hideBorderLeft={$hideBorderLeft} role='alert'>
        {children}
      </S.Alert>
    </S.Wrapper>
  )
}

export default Alert
