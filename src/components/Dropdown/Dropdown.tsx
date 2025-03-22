import { ReactNode, useState } from 'react'
import * as S from './Dropdown.styles'

interface DropdownProps {
  button: ReactNode
  buttonLabel: string
  children: ReactNode
}

const Dropdown = ({ button, buttonLabel, children }: DropdownProps) => {
  const [$state, setState] = useState(false)

  return (
    <S.Wrapper $state={$state}>
      <S.Button title={buttonLabel} aria-label={buttonLabel} onClick={() => setState(!$state)}>
        {button}
      </S.Button>
      <S.Children aria-hidden={!$state}>{children}</S.Children>
    </S.Wrapper>
  )
}

export default Dropdown
