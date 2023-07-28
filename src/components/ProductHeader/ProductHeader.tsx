import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Price from 'components/Price/Price'
import * as S from './ProductHeader.styles'
import Box from 'components/Box/Box'

export type ProductHeaderProps = {
  title: string
  description: string
  price: string
}

const ProductHeader = ({ title, description, price }: ProductHeaderProps) => {
  return (
    <S.Wrapper data-testid='productHeaderComponent'>
      <Box>
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
      </Box>
    </S.Wrapper>
  )
}

export default ProductHeader
