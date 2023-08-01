import Image from 'next/image'
import * as S from './CreditCard.styles'

export type CreditCardProps = {
  flagName: string
  flagImg: string
  number: string
  color?: 'black' | 'gray'
  direction?: 'left' | 'right'
}

const CreditCard = ({
  flagName,
  flagImg,
  number,
  color = 'black',
  direction = 'left'
}: CreditCardProps) => {
  return (
    <S.Wrapper color={color} direction={direction}>
      <Image src={flagImg} width='36' height='22' alt={flagName} />
      <S.Number>{number}</S.Number>
    </S.Wrapper>
  )
}

export default CreditCard
