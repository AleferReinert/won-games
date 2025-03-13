import { ComponentProps } from 'react'
import * as S from './Box.styles'

export interface BoxProps extends ComponentProps<'div'> {
  $padding?: 'xsmall' | 'small' | 'medium'
}

const Box = ({ $padding = 'small', ...props }: BoxProps) => {
  return <S.Wrapper $padding={$padding}>{props.children}</S.Wrapper>
}

export default Box
