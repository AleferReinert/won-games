import * as S from './Ribbon.styles'

export interface RibbonProps {
  label: string
  color?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

const Ribbon = ({ label, color = 'primary', size = 'large' }: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size} data-testid='RibbonComponent'>
      {label}
    </S.Wrapper>
  )
}

export default Ribbon
