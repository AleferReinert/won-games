import Container from 'components/Container/Container'
import Footer from 'components/Footer/Footer'
import Header, { HeaderProps } from 'components/Header/Header'
import * as S from './Default.styles'

export interface DefaultTemplateProps extends HeaderProps {
  children: React.ReactNode
}

const DefaultTemplate = ({ children, hideCartDropdown, hideUserDropdown }: DefaultTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Header hideCartDropdown={hideCartDropdown} hideUserDropdown={hideUserDropdown} />
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
