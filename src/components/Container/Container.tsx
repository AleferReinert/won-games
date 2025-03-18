import { ComponentProps, ReactNode } from 'react'
import * as S from './Container.styles'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}

export default Container
