import { formatPrice } from 'utils/formatPrice'
import * as S from './Price.styles'

export interface PriceProps {
  price: number
  promotionalPrice?: number | null
  size?: 'small' | 'large'
}

const Price = ({ price, promotionalPrice, size = 'small' }: PriceProps) => {
  return (
    <S.Wrapper size={size} data-testid='PriceComponent'>
      {promotionalPrice && <S.OldPrice aria-label='Price'>{formatPrice(price)}</S.OldPrice>}
      {promotionalPrice ? (
        <S.Price aria-label='Promotional price'>{formatPrice(promotionalPrice)}</S.Price>
      ) : (
        <S.Price aria-label='Price'>{formatPrice(price)}</S.Price>
      )}
    </S.Wrapper>
  )
}

export default Price
