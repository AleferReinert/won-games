import { ComponentProps, ReactNode } from 'react'
import * as S from './TextField.styles'

export interface TextFieldProps extends ComponentProps<'input'> {
  name: string
  label?: string
  icon?: ReactNode
  $iconPosition?: 'left' | 'right'
  disabled?: boolean
  $errorMessage?: string
  initialValue?: string
}

const TextField = ({
  name,
  label,
  icon,
  $iconPosition = 'left',
  disabled = false,
  $errorMessage,
  // initialValue = '',
  ...props
}: TextFieldProps) => {
  // const [value, setValue] = useState(initialValue)

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.currentTarget.value
  //   setValue(newValue)
  // }

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper $iconPosition={$iconPosition} $errorMessage={$errorMessage}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type='text'
          // onChange={onChange}
          // value={value}
          disabled={disabled}
          autoComplete='off'
          name={name}
          id={name}
          {...props}
        />
      </S.InputWrapper>
      {!!$errorMessage && <S.ErrorMessage>{$errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

export default TextField
