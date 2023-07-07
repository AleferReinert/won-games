import { FileDownload } from '@styled-icons/material/FileDownload'
import Price from 'components/Price/Price'
import * as S from './GameItem.styles'

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

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
}

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  creditCardNumber,
  creditCardBrand,
  creditCardFlag,
  purchaseDate
}: GameItemProps & ConditionalPaymentProps) => {
  return (
    <S.Wrapper>
      <S.Img src={img} alt={title} />
      <div>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink href={downloadLink} title='Download' download>
              <FileDownload />
            </S.DownloadLink>
          )}
        </S.Title>
        <Price price={price} />
      </div>

      {!!creditCardBrand && (
        <S.PaymentInfo>
          <S.PurchaseDate aria-label='purchase date'>
            {purchaseDate}
          </S.PurchaseDate>
          <S.CreditCard>
            <S.CreditCardNumber aria-label='credit card number'>
              {creditCardNumber}
            </S.CreditCardNumber>
            <S.CreditCardFlag src={creditCardFlag} alt={creditCardBrand} />
          </S.CreditCard>
        </S.PaymentInfo>
      )}
    </S.Wrapper>
  )
}

export default GameItem
