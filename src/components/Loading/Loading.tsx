import Image from 'next/image'
import dotsIcon from './../../../public/img/dots.svg'
import * as S from './Loading.styles'

export const Loading = () => {
  return (
    <S.Wrapper>
      <Image src={dotsIcon.src} alt='Carregando' width={dotsIcon.width} height={dotsIcon.height} />
    </S.Wrapper>
  )
}
