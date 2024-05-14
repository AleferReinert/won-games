import { FileDownload } from '@styled-icons/material/FileDownload'
import Box from 'components/Box/Box'
import CreditCard from 'components/CreditCard/CreditCard'
import Price from 'components/Price/Price'
import * as S from './CartItem.styles'

interface PaymentProps {
  creditCardBrand: string
  creditCardNumber: string
  creditCardFlag: string
  purchaseDate: string
}

export interface CartItemProps {
  img: string
  title: string
  price: number
  downloadLink?: string
  paymentInfo?: PaymentProps
}

const CartItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: CartItemProps) => {
  return (
    <S.Wrapper>
      <Box>
        <S.Content>
          <S.Img src={img} alt={title} />
          <S.InfoWrapper>
            <S.TitleWrapper>
              <S.Title>{title}</S.Title>
              {downloadLink && (
                <S.DownloadLink href={downloadLink} title='Download' download>
                  <FileDownload />
                </S.DownloadLink>
              )}
            </S.TitleWrapper>
            <Price price={price} />
          </S.InfoWrapper>

          {paymentInfo && (
            <S.PaymentInfo>
              <S.PurchaseDate aria-label='purchase date'>
                {paymentInfo.purchaseDate}
              </S.PurchaseDate>
              <CreditCard
                img={paymentInfo.creditCardFlag}
                name={paymentInfo.creditCardBrand}
                number={paymentInfo.creditCardNumber}
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
