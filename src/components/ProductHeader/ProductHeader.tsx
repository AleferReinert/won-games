import AddToCartButton from 'components/AddToCartButton/AddToCartButton'
import AddToWishlistButton from 'components/AddToWishlistButton/AddToWishlistButton'
import Box from 'components/Box/Box'
import Heading from 'components/Heading/Heading'
import Price from 'components/Price/Price'
import * as S from './ProductHeader.styles'

export interface ProductHeaderProps {
  id: string
  title: string
  description: string
  price: number
}

const ProductHeader = ({ id, title, description, price }: ProductHeaderProps) => {
  return (
    <S.Wrapper data-testid='ProductHeaderComponent'>
      <Box>
        <Heading color='black' as='h1'>
          {title}
        </Heading>

        <S.Description>{description}</S.Description>

        <Price price={price} />

        <S.ButtonsWrapper>
          <AddToWishlistButton id={id} showLabel />
          <AddToCartButton id={id} $full showLabel />
        </S.ButtonsWrapper>
      </Box>
    </S.Wrapper>
  )
}

export default ProductHeader
