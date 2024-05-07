import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Ribbon from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import * as S from './Product.styles'
import Price from 'components/Price/Price'
import Link from 'next/link'

type ProductCommomProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  favorite?: boolean
  onFav?: () => void
}

type ConditionalProps =
  | {
      promotionalPrice?: number
      ribbon?: React.ReactNode
    }
  | {
      promotionalPrice: number
      ribbon: React.ReactNode
    }

export type ProductProps = ProductCommomProps & ConditionalProps

const Product = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  onFav
}: ProductProps) => {
  return (
    <S.Wrapper data-testid='productComponent'>
      {!!ribbon && (
        <Ribbon color='primary' size='small'>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`/product/${slug}`} passHref>
        <S.ImageBox>
          {img ? (
            <Image
              src={img}
              alt={title}
              priority={false}
              width='292'
              height='137'
            />
          ) : (
            'Image not found'
          )}
        </S.ImageBox>
      </Link>

      <Box padding='xsmall'>
        <S.Content>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>

          <S.FavButton onClick={onFav}>
            {favorite ? (
              <Favorite title='Remove from wishlist' size={24} />
            ) : (
              <FavoriteBorder title='Add to wishlist' size={24} />
            )}
          </S.FavButton>

          <S.BuyBox>
            {promotionalPrice ? (
              <Price price={price} promotionalPrice={promotionalPrice} />
            ) : (
              <Price price={price} />
            )}
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
