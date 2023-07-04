import * as S from './Ribbon.styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'large'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'large'
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

export default Ribbon
