import Heading from 'components/Heading'
import * as S from './styles'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color='black' lineBottom>
        {title}
      </Heading>

      <S.Description>{description}</S.Description>

      <Ribbon color='secondary'>{'$' + price}</Ribbon>

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />} fullWidth>
          Add to cart
        </Button>
        <Button icon={<FavoriteBorder />} fullWidth minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
