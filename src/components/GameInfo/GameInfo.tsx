import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Price from 'components/Price/Price'
import * as S from './GameInfo.styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper data-testid='gameInfoComponent'>
      <Heading color='black'>{title}</Heading>

      <S.Description>{description}</S.Description>

      <Price price={price} />

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />} full>
          Add to cart
        </Button>
        <Button icon={<FavoriteBorder />} full variant='link'>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
