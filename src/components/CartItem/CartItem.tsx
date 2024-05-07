import { FileDownload } from '@styled-icons/material/FileDownload'
import Price from 'components/Price/Price'
import * as S from './CartItem.styles'
import Box from 'components/Box/Box'
import CreditCard from 'components/CreditCard/CreditCard'

type ConditionalPaymentProps =
  | {
      creditCardBrand?: undefined
      creditCardNumber?: undefined
      creditCardFlag?: undefined
      purchaseDate?: undefined
    }
  | {
      creditCardBrand: string
      creditCardNumber: string
      creditCardFlag: string
      purchaseDate: string
    }

export type CartItemProps = {
  img: string
  title: string
  price: number
  downloadLink?: string
} & ConditionalPaymentProps

const CartItem = ({
  img,
  title,
  price,
  downloadLink,
  creditCardNumber,
  creditCardBrand,
  creditCardFlag,
  purchaseDate
}: CartItemProps) => {
  return (
    <S.Wrapper>
      <Box>
        <S.Content>
          <S.Img src={img} alt={title} />
          <S.InfoWrapper>
            <S.TitleWrapper>
              <S.Title>{title}</S.Title>
              {!!downloadLink && (
                <S.DownloadLink href={downloadLink} title='Download' download>
                  <FileDownload />
                </S.DownloadLink>
              )}
            </S.TitleWrapper>
            <Price price={price} />
          </S.InfoWrapper>

          {!!creditCardBrand && (
            <S.PaymentInfo>
              <S.PurchaseDate aria-label='purchase date'>
                {purchaseDate}
              </S.PurchaseDate>
              <CreditCard
                flagImg={creditCardFlag}
                flagName={creditCardBrand}
                number={creditCardNumber}
                color='gray'
              />
            </S.PaymentInfo>
          )}
        </S.Content>
      </Box>
    </S.Wrapper>
  )
}

export default CartItem
