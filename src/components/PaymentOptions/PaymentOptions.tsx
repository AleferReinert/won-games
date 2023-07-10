import { AddShoppingCart, Add } from '@styled-icons/material-outlined'
import { useState } from 'react'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Image from 'next/image'
import Radio from 'components/Radio/Radio'
import * as S from './PaymentOptions.styles'

type CreditCardProps = {
  flag: string
  number: string
  img: string
}

type PaymentOptionsProps = {
  creditCards?: CreditCardProps[]
  handlePayment: () => void
}

const PaymentOptions = ({
  creditCards,
  handlePayment
}: PaymentOptionsProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)

  return (
    <S.Wrapper>
      <S.Content>
        <Heading
          size='large'
          color='black'
          line='bottom'
          lineBottomSize='small'
        >
          Payment
        </Heading>
        <S.CreditCards>
          {creditCards?.map((creditCard, index) => (
            <S.CreditCard key={index} title={creditCard.flag}>
              <S.ImageWrapper>
                <Image
                  src={creditCard.img}
                  width='36'
                  height='22'
                  alt={creditCard.flag}
                />
              </S.ImageWrapper>
              <S.Number>{creditCard.number}</S.Number>
              <S.RadioWrapper>
                <Radio
                  id={'creditCard' + index}
                  name='creditCard'
                  onCheck={() => setButtonDisabled(false)}
                />
              </S.RadioWrapper>
            </S.CreditCard>
          ))}
          <S.AddCreditCard as='button'>
            <Add /> Add new credit card
          </S.AddCreditCard>
        </S.CreditCards>
      </S.Content>
      <S.Footer>
        <Button variant='link'>Continue shopping</Button>
        <Button
          icon={<AddShoppingCart />}
          disabled={buttonDisabled}
          onClick={handlePayment}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
