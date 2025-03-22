import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import CreditCard, { CreditCardProps } from 'components/CreditCard/CreditCard'
import Heading from 'components/Heading/Heading'
import Radio from 'components/Radio/Radio'
import { useState } from 'react'
import * as S from './PaymentOptions.styles'

export type PaymentOptionsProps = {
  creditCards?: CreditCardProps[]
  handlePayment: () => void
}

const PaymentOptions = ({ creditCards, handlePayment }: PaymentOptionsProps) => {
  const [selectedCreditCard, setSelectedCreditCard] = useState(0)

  return (
    <S.Wrapper data-testid='PaymentOptionsComponent'>
      <Box>
        <Heading size='large' color='black' $line='bottom' $lineBottomSize='small'>
          Payment
        </Heading>
        <S.CreditCards>
          {creditCards?.map((creditCard, index) => (
            <S.Item key={index}>
              <S.Label title={creditCard.name} onClick={() => setSelectedCreditCard(index)}>
                <CreditCard img={creditCard.img} name={creditCard.name} number={creditCard.number} />
                <S.RadioWrapper>
                  <Radio checked={index === selectedCreditCard} id={'creditCard' + index} name='creditCard' />
                </S.RadioWrapper>
              </S.Label>
            </S.Item>
          ))}
        </S.CreditCards>
        <S.AddCreditCard>
          <Add role='img' aria-hidden /> Add new credit card
        </S.AddCreditCard>
      </Box>

      <S.Buttons>
        <Button $variant='link' asLink href='/products'>
          Continue shopping
        </Button>
        <Button disabled={creditCards === undefined || creditCards.length === 0} onClick={handlePayment}>
          <ShoppingCart role='img' aria-hidden />
          Buy now
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default PaymentOptions
