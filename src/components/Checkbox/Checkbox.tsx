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
  const [checkedStatus, setCheckedStatus] = useState(isChecked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedStatus(e.target.checked)
    onCheck?.(e.target.checked)
  }

  return (
    <S.Wrapper>
      <S.Input type='checkbox' id={id} onChange={handleChange} checked={checkedStatus} value={value} {...props} />
      {label && (
        <S.Label htmlFor={id} $labelColor={$labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
