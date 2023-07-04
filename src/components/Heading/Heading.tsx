import { ReactNode } from 'react'
import * as S from './Heading.styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  line?: 'left' | 'bottom'
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  line,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => {
  return (
    <S.Wrapper color={color} line={line} size={size} lineColor={lineColor}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
