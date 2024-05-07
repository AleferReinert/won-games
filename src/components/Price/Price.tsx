import * as S from './Price.styles'

export type PriceProps = {
  price: number
  promotionalPrice?: number
  size?: 'small' | 'large'
}

const Price = ({ price, promotionalPrice, size = 'small' }: PriceProps) => {
  function formatPrice(price: number) {
    if (price === 0) {
      return 'Free'
    }

    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'usd'
    }).format(price)
  }

  return (
    <S.Wrapper size={size}>
      {!!promotionalPrice && (
        <S.OldPrice aria-label='price'>{formatPrice(price)}</S.OldPrice>
      )}
      <S.Price aria-label={promotionalPrice ? 'promotional price' : 'price'}>
        {formatPrice(promotionalPrice ? promotionalPrice : price)}
      </S.Price>
    </S.Wrapper>
  )
}

export default Price
