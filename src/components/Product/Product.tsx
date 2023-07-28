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

type CommomProps = {
  title: string
  developer: string
  img: string
  price: string
  favorite?: boolean
  onFav?: () => void
}

type ConditionalProps =
  | {
      promotionalPrice?: string
      ribbon?: React.ReactNode
    }
  | {
      promotionalPrice: string
      ribbon: React.ReactNode
    }

export type ProductProps = CommomProps & ConditionalProps

const Product = ({
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
      <S.ImageBox>
        <Image src={img} alt={title} unoptimized width='292' height='137' />
      </S.ImageBox>

      <Box padding='xsmall'>
        <S.Content>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>

          <S.FavButton onClick={onFav}>
            {favorite ? (
              <Favorite
                aria-label='Remove from wishlist'
                title='Remove from wishlist'
              />
            ) : (
              <FavoriteBorder
                aria-label='Add to wishlist'
                title='Add to wishlist'
              />
            )}
          </S.FavButton>

          <S.BuyBox>
            {promotionalPrice ? (
              <Price price={price} promotionalPrice={promotionalPrice} />
            ) : (
              <Price price={price} />
            )}
            <Button
              icon={<AddShoppingCart />}
              size='xsmall'
              title='Add to cart'
            />
          </S.BuyBox>
        </S.Content>
      </Box>
    </S.Wrapper>
  )
}

export default Product
