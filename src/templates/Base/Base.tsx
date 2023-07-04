import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import * as S from './Base.styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Header />
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
