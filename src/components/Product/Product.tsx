import AddToCartButton from 'components/AddToCartButton/AddToCartButton'
import AddToWishlistButton from 'components/AddToWishlistButton/AddToWishlistButton'
import Box from 'components/Box/Box'
import Price, { PriceProps } from 'components/Price/Price'
import Ribbon from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import Link from 'next/link'
import theme from 'styles/theme'
import * as S from './Product.styles'

export interface ProductProps extends PriceProps {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  ribbonLabel?: string
}

const Product = ({ id, slug, title, developer, img, price, promotionalPrice = null, ribbonLabel }: ProductProps) => {
  return (
    <S.Wrapper data-testid='ProductComponent'>
      {ribbonLabel && <Ribbon label={ribbonLabel} color='primary' size='small' />}

      <Link href={`/product/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={img ? title : 'Image not found'} priority={false} width='292' height='137' />
        </S.ImageBox>
      </Link>

      <Box $padding='xsmall'>
        <S.Content>
          <S.Info>
            <S.Title>
              <div>{title}</div>
              <AddToWishlistButton id={id} loadingColor={theme.colors.primary} />
            </S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
          <S.BuyBox>
            <Price price={price} promotionalPrice={promotionalPrice} />
            <AddToCartButton id={id} size='xsmall' />
          </S.BuyBox>
        </S.Content>
      </Box>
    </S.Wrapper>
  )
}

export default Product
