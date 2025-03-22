import * as S from './Ribbon.styles'

export interface RibbonProps {
  text: string
  color?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

const Ribbon = ({ text, color = 'primary', size = 'large' }: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size} data-testid='RibbonComponent'>
      {text}
    </S.Wrapper>
  )
}

export default Ribbon
