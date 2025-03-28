import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import AddToCartButton from 'components/AddToCartButton/AddToCartButton'
import Box from 'components/Box/Box'
import Price, { PriceProps } from 'components/Price/Price'
import Ribbon from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as S from './Product.styles'

export interface ProductProps extends PriceProps {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  ribbonText?: string
}

const Product = ({ id, slug, title, developer, img, price, promotionalPrice = null, ribbonText }: ProductProps) => {
  const [favorite, setFavorite] = useState(false)

  return (
    <S.Wrapper data-testid='ProductComponent'>
      {ribbonText && <Ribbon text={ribbonText} color='primary' size='small' />}

      <Link href={`/product/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={img ? title : 'Image not found'} priority={false} width='292' height='137' />
        </S.ImageBox>
      </Link>

      <Box $padding='xsmall'>
        <S.Content>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>

          <S.FavButton
            onClick={() => setFavorite(!favorite)}
            title={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {favorite ? <Favorite role='img' aria-hidden /> : <FavoriteBorder role='img' aria-hidden />}
          </S.FavButton>

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
