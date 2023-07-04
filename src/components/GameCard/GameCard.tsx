import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Ribbon from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import * as S from './GameCard.styles'

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

export type GameCardProps = CommomProps & ConditionalProps

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  onFav
}: GameCardProps) => {
  return (
    <S.Wrapper data-testid='gameCardComponent'>
      {!!ribbon && (
        <Ribbon color='primary' size='small'>
          {ribbon}
        </Ribbon>
      )}
      <S.ImageBox>
        <Image src={img} alt={title} unoptimized width='292' height='137' />
      </S.ImageBox>

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
          {!!promotionalPrice && (
            <>
              <S.Price isPromotional aria-label='price'>
                {price}
              </S.Price>
              <S.Price aria-label='promotional price'>
                {promotionalPrice}
              </S.Price>
            </>
          )}
          {!promotionalPrice && <S.Price aria-label='price'>{price}</S.Price>}
          <Button
            icon={<AddShoppingCart />}
            size='xsmall'
            title='Add to cart'
          />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
