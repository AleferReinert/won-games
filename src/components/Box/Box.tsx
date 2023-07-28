import { ReactNode } from 'react'
import * as S from './Box.styles'

export type BoxProps = {
  children: ReactNode
  padding?: 'xsmall' | 'small' | 'medium'
}

const Box = ({ children, padding = 'small' }: BoxProps) => {
  return <S.Wrapper padding={padding}>{children}</S.Wrapper>
}

export default Box
