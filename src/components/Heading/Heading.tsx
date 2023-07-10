import { ReactNode } from 'react'
import * as S from './Heading.styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge'
  line?: 'left' | 'bottom'
  lineColor?: LineColors
  lineBottomSize?: 'small' | 'medium' | 'large'
}

const Heading = ({
  children,
  color = 'white',
  size = 'xlarge',
  line,
  lineColor = 'primary',
  lineBottomSize = 'large'
}: HeadingProps) => {
  return (
    <S.Wrapper
      color={color}
      line={line}
      size={size}
      lineColor={lineColor}
      lineBottomSize={lineBottomSize}
    >
      {children}
    </S.Wrapper>
  )
}

export default Heading
