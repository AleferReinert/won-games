import { ComponentProps } from 'react'
import * as S from './Radio.styles'

type RadioValue = string | string[] | number

export interface RadioProps extends ComponentProps<'input'> {
  id: string
  name: string
  onCheck?: (value?: RadioValue) => void
  label?: string
  $labelColor?: 'white' | 'black'
  value?: RadioValue
}

const Radio = ({ id, name, onCheck, label, $labelColor = 'white', value, ...props }: RadioProps) => {
  const onChange = () => {
    onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input type='radio' id={id} onChange={onChange} value={value} name={name} {...props} />
      {label && (
        <S.Label htmlFor={id} $labelColor={$labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
