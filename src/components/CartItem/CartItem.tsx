import { Clear, FileDownload } from '@styled-icons/material'
import Box from 'components/Box/Box'
import CreditCard from 'components/CreditCard/CreditCard'
import Price from 'components/Price/Price'
import { useCart } from 'hooks/useCart'
import * as S from './CartItem.styles'

export interface PaymentProps {
  creditCardBrand: string
  creditCardNumber: string
  creditCardFlag: string
  purchaseDate: string
}

export interface CartItemProps {
  id: string
  img: string
  name: string
  price: number
  downloadLink?: string
  paymentInfo?: PaymentProps
  removeFromCartButton?: boolean
}

const CartItem = ({ id, img, name, price, downloadLink, paymentInfo, removeFromCartButton = true }: CartItemProps) => {
  const { removeFromCart } = useCart()
  const imgSrc = process.env.STORYBOOK ? img : img

  return (
    <S.Wrapper data-testid='CartItemComponent'>
      <Box>
        <S.Content paymentInfo={paymentInfo}>
          <S.Img src={img ? imgSrc : ''} alt={img ? name : 'Image not found'} width={293} height={138} />
          <S.Group>
            <S.InfoWrapper>
              <S.TitleWrapper>
                <S.Title>{name}</S.Title>
              </S.TitleWrapper>
              <Price price={price} />
            </S.InfoWrapper>
            <S.ButtonGroup>
              {downloadLink && (
                <S.DownloadLink href={downloadLink} title='Download' download>
                  <FileDownload role='img' aria-hidden width={24} height={24} />
                </S.DownloadLink>
              )}
              {removeFromCartButton && (
                <S.ButtonRemove type='button' onClick={() => removeFromCart(id)} title='Remove from cart'>
                  <Clear role='img' aria-hidden width={20} height={20} />
                </S.ButtonRemove>
              )}
            </S.ButtonGroup>
          </S.Group>

          {paymentInfo && (
            <S.PaymentInfo>
              <S.PurchaseDate aria-label='purchase date'>{paymentInfo.purchaseDate}</S.PurchaseDate>
              {price > 0 ? (
                <CreditCard
                  img={paymentInfo.creditCardFlag}
                  name={paymentInfo.creditCardBrand}
                  number={paymentInfo.creditCardNumber}
                  color='gray'
                />
              ) : (
                'Free'
              )}
            </S.PaymentInfo>
          )}
        </S.Content>
      </Box>
    </S.Wrapper>
  )
}

export default CartItem
