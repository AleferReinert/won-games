import * as S from './Price.styles'

export type PriceProps = {
  price: string
  promotionalPrice?: string
  size?: 'small' | 'large'
}

const Price = ({ price, promotionalPrice, size = 'small' }: PriceProps) => {
  return (
    <S.Wrapper size={size}>
      {!!promotionalPrice && (
        <S.OldPrice aria-label='price'>{price}</S.OldPrice>
      )}
      <S.Price aria-label={promotionalPrice ? 'promotional price' : 'price'}>
        {promotionalPrice ? promotionalPrice : price}
      </S.Price>
    </S.Wrapper>
  )
}

export default Price
