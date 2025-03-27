import { FavoriteBorder } from '@styled-icons/material-outlined'
import AddToCartButton from 'components/AddToCartButton/AddToCartButton'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Price from 'components/Price/Price'
import theme from 'styles/theme'
import * as S from './ProductHeader.styles'

export interface ProductHeaderProps {
  title: string
  description: string
  price: number
}

const ProductHeader = ({ title, description, price }: ProductHeaderProps) => {
  return (
    <S.Wrapper data-testid='ProductHeaderComponent'>
      <Box>
        <Heading color='black'>{title}</Heading>

        <S.Description>{description}</S.Description>

        <Price price={price} />

        <S.ButtonsWrapper>
          <AddToCartButton id='1' $full showLabel />
          <Button $full $variant='link'>
            <FavoriteBorder fill={theme.colors.primary} role='img' aria-hidden />
            Wishlist
          </Button>
        </S.ButtonsWrapper>
      </Box>
    </S.Wrapper>
  )
}

export default ProductHeader
