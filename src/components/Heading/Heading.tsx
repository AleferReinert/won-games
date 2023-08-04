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
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({
  children,
  color = 'white',
  size = 'xlarge',
  line,
  lineColor = 'primary',
  lineBottomSize = 'large',
  as = 'h2'
}: HeadingProps) => {
  return (
    <S.Wrapper
      color={color}
      line={line}
      size={size}
      lineColor={lineColor}
      lineBottomSize={lineBottomSize}
      as={as}
    >
      {children}
    </S.Wrapper>
  )
}

export default Heading
