import { ComponentProps, useState } from 'react'
import * as S from './Checkbox.styles'

export interface CheckboxProps extends ComponentProps<'input'> {
  id: string
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  $labelColor?: 'white' | 'black'
  value?: string | string[] | number
}

const Checkbox = ({ id, onCheck, isChecked = false, label, $labelColor = 'white', value, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)
    onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input type='checkbox' id={id} onChange={onChange} checked={checked} value={value} {...props} />
      {label && (
        <S.Label htmlFor={id} $labelColor={$labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
