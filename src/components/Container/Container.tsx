import { ComponentProps } from 'react'
import * as S from './Container.styles'

const Container = ({ children }: ComponentProps<'div'>) => {
  return <S.Container>{children}</S.Container>
}

export default Container
