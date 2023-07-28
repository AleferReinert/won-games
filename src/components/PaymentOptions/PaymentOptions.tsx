import { AddShoppingCart, Add } from '@styled-icons/material-outlined'
import CreditCard, { CreditCardProps } from 'components/CreditCard/CreditCard'
import { useState } from 'react'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import Radio from 'components/Radio/Radio'
import * as S from './PaymentOptions.styles'

export type PaymentOptionsProps = {
  creditCards?: CreditCardProps[]
  handlePayment: () => void
}

const PaymentOptions = ({
  creditCards,
  handlePayment
}: PaymentOptionsProps) => {
  const [selectedCreditCard, setSelectedCreditCard] = useState(0)

  return (
    <S.Wrapper data-testid='paymentOptions'>
      <Box>
        <Heading
          size='large'
          color='black'
          line='bottom'
          lineBottomSize='small'
        >
          Payment
        </Heading>
        <S.CreditCards role='list'>
          {creditCards?.map((creditCard, index) => (
            <S.Item
              role='listitem'
              key={index}
              title={creditCard.flagName}
              onClick={() => setSelectedCreditCard(index)}
            >
              <CreditCard
                flagImg={creditCard.flagImg}
                flagName={creditCard.flagName}
                number={creditCard.number}
              />
              <S.RadioWrapper>
                <Radio
                  checked={index === selectedCreditCard}
                  id={'creditCard' + index}
                  name='creditCard'
                />
              </S.RadioWrapper>
            </S.Item>
          ))}
        </S.CreditCards>
        <S.AddCreditCard>
          <Add /> Add new credit card
        </S.AddCreditCard>
      </Box>

      <S.Buttons>
        <Button variant='link'>Continue shopping</Button>
        <Button
          icon={<AddShoppingCart />}
          disabled={creditCards === undefined || creditCards.length === 0}
          onClick={handlePayment}
        >
          Buy now
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default PaymentOptions
