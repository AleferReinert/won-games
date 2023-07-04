import * as S from './Radio.styles'
import { InputHTMLAttributes } from 'react'

type RadioValue = string | string[] | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  id: string
  name: string
  label?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  id,
  name,
  label,
  labelColor = 'white',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        type='radio'
        id={id}
        onChange={onChange}
        value={value}
        name={name}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={id} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
