import { ReactNode } from 'react'
import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import * as S from './styles'

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container as='header'>
        <Menu />
      </Container>
      <S.Children>{children}</S.Children>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
