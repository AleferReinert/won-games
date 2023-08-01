import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import * as S from './Default.styles'

export type DefaultTemplateProps = {
  children: React.ReactNode
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
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

export default DefaultTemplate
