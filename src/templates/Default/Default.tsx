import Container from 'components/Container/Container'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import * as S from './Default.styles'

export interface DefaultTemplateProps {
  children: React.ReactNode
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Header />
      </Container>
      <S.Main>{children}</S.Main>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default DefaultTemplate
