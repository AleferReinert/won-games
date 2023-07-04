import * as S from './TextField.styles'
import { useState, InputHTMLAttributes, ReactNode } from 'react'

export type TextFieldProps = {
  onInput?: (value: string) => void
  id: string
  name: string
  label?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  errorMessage?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  name,
  id,
  label,
  icon,
  iconPosition = 'left',
  disabled = false,
  errorMessage,
  initialValue = '',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.InputWrapper iconPosition={iconPosition} errorMessage={errorMessage}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type='text'
          onChange={onChange}
          value={value}
          disabled={disabled}
          autoComplete='off'
          name={name}
          id={id}
          {...props}
        />
      </S.InputWrapper>
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

export default TextField
