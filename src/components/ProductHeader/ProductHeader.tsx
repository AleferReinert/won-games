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
  promotionalPrice?: number
}

const ProductHeader = ({ id, title, description, price, promotionalPrice }: ProductHeaderProps) => {
  return (
    <S.Wrapper data-testid='ProductHeaderComponent'>
      <Box>
        <S.Header>
          <Price price={price} promotionalPrice={promotionalPrice} size='medium' />
          <Heading color='black' as='h1'>
            {title}
          </Heading>
        </S.Header>

        <S.Description>{description}</S.Description>

        <S.ButtonsWrapper>
          <AddToWishlistButton id={id} $full showLabel />
          <AddToCartButton id={id} $full showLabel />
        </S.ButtonsWrapper>
      </Box>
    </S.Wrapper>
  )
}

export default ProductHeader
