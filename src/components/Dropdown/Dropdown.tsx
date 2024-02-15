import { ReactNode, useState } from 'react'
import * as S from './Dropdown.styles'

type DropdownProps = {
  button: ReactNode
  content: ReactNode
}

const Dropdown = ({ button, content }: DropdownProps) => {
  const [state, setState] = useState(false)

  return (
    <S.Wrapper state={state}>
      <S.Button onClick={() => setState(!state)}>{button}</S.Button>
      <S.Content aria-hidden={!state}>{content}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
