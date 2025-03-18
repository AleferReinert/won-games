import { AddShoppingCart, Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Price, { PriceProps } from 'components/Price/Price'
import Ribbon from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Product.styles'

export interface ProductProps extends PriceProps {
  slug: string
  title: string
  developer: string
  img: string
  favorite?: boolean
  ribbonText?: string
  onFav?: () => void
}

const Product = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice = null,
  favorite = false,
  ribbonText,
  onFav
}: ProductProps) => {
  return (
    <S.Wrapper data-testid='ProductComponent'>
      {ribbonText && <Ribbon text={ribbonText} color='primary' size='small' />}

      <Link href={`/product/${slug}`} passHref>
        <S.ImageBox>
          {img ? <Image src={img} alt={title} priority={false} width='292' height='137' /> : 'Image not found'}
        </S.ImageBox>
      </Link>

      <Box $padding='xsmall'>
        <S.Content>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>

          <S.FavButton onClick={onFav}>
            {favorite ? <Favorite title='Remove from wishlist' /> : <FavoriteBorder title='Add to wishlist' />}
          </S.FavButton>

          <S.BuyBox>
            <Price price={price} promotionalPrice={promotionalPrice} />
            <Button size='xsmall' title='Add to cart'>
              <AddShoppingCart />
            </Button>
          </S.BuyBox>
        </S.Content>
      </Box>
    </S.Wrapper>
  )
}

export default Product
