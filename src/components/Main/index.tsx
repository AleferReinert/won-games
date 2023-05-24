import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, React, NextJS e Styled Components.'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src='/img/logo.svg'
        alt='Imagem de um átomo e React Avançado escrito ao lado'
        width='250'
        height='55'
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src='/img/hero-illustration.svg'
        alt='Desenvolvedor de frente para tela com código'
        width='300'
        height='263'
      ></S.Illustration>
    </S.Wrapper>
  )
}

export default Main
