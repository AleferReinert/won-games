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
  id: string
  img: string
  name: string
  price: number
  downloadLink?: string
  paymentInfo?: PaymentProps
}

const CartItem = ({ img, name, price, downloadLink, paymentInfo }: CartItemProps) => {
  const imgSrc = process.env.STORYBOOK ? img : process.env.NEXT_PUBLIC_API_URL + img

  return (
    <S.Wrapper data-testid='CartItemComponent'>
      <Box>
        <S.Content>
          <S.Img src={imgSrc} alt={name} width={293} height={138} />
          <S.InfoWrapper>
            <S.TitleWrapper>
              <S.Title>{name}</S.Title>
              {downloadLink && (
                <S.DownloadLink href={downloadLink} title='Download' download>
                  <FileDownload title='Download' />
                </S.DownloadLink>
              )}
            </S.TitleWrapper>
            <Price price={price} />
          </S.InfoWrapper>

          {paymentInfo && (
            <S.PaymentInfo>
              <S.PurchaseDate aria-label='purchase date'>{paymentInfo.purchaseDate}</S.PurchaseDate>
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
