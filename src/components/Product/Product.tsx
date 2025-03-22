import { AddShoppingCart, Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Price, { PriceProps } from 'components/Price/Price'
import Ribbon from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as S from './Product.styles'

export interface ProductProps extends PriceProps {
  slug: string
  title: string
  developer: string
  img: string
  ribbonText?: string
}

const Product = ({ slug, title, developer, img, price, promotionalPrice = null, ribbonText }: ProductProps) => {
  const [favorite, setFavorite] = useState(false)

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

          <S.FavButton
            onClick={() => setFavorite(!favorite)}
            title={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {favorite ? <Favorite role='img' aria-hidden /> : <FavoriteBorder role='img' aria-hidden />}
          </S.FavButton>

          <S.BuyBox>
            <Price price={price} promotionalPrice={promotionalPrice} />
            <Button size='xsmall' title='Add to cart' aria-label='Add to cart'>
              <AddShoppingCart role='img' aria-hidden />
            </Button>
          </S.BuyBox>
        </S.Content>
      </Box>
    </S.Wrapper>
  )
}

export default Product
