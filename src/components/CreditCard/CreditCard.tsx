import Image from 'next/image'
import * as S from './CreditCard.styles'

export interface CreditCardProps {
  name: string
  number: string
  img: string
  color?: 'black' | 'gray'
  direction?: 'left' | 'right'
}

const CreditCard = ({
  name,
  number,
  img,
  color = 'black',
  direction = 'left'
}: CreditCardProps) => {
  return (
    <S.Wrapper
      color={color}
      direction={direction}
      data-testid='CreditCardComponent'
    >
      <Image src={img} width='36' height='22' alt={name} />
      <S.Number aria-label='credit card number'>{number}</S.Number>
    </S.Wrapper>
  )
}

export default CreditCard
