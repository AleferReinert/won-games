import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Price from 'components/Price/Price'
import * as S from './ProductHeader.styles'
import Box from 'components/Box/Box'
import theme from 'styles/theme'

export type ProductHeaderProps = {
  title: string
  description: string
  price: number
}

const ProductHeader = ({ title, description, price }: ProductHeaderProps) => {
  return (
    <S.Wrapper data-testid='productHeaderComponent'>
      <Box>
        <Heading color='black'>{title}</Heading>

        <S.Description>{description}</S.Description>

        <Price price={price} />

        <S.ButtonsWrapper>
          <Button icon={<AddShoppingCart size={24} />} full>
            Add to cart
          </Button>
          <Button
            icon={<FavoriteBorder size={24} fill={theme.colors.primary} />}
            full
            variant='link'
          >
            Wishlist
          </Button>
        </S.ButtonsWrapper>
      </Box>
    </S.Wrapper>
  )
}

export default ProductHeader
