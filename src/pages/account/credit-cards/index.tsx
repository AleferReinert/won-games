import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import Box from 'components/Box/Box'
import CreditCard, { CreditCardProps } from 'components/CreditCard/CreditCard'
import creditCardsMock from 'components/PaymentOptions/mock'
import * as S from './credit-cards.styles'

export function getServerSideProps() {
  return {
    props: {
      creditCards: creditCardsMock
    }
  }
}

type CreditCardsPageProps = {
  creditCards: CreditCardProps[]
}

const CreditCardsPage = ({ creditCards }: CreditCardsPageProps) => {
  return (
    <Box>
      <S.CreditCards role='list'>
        {creditCards?.map((creditCard, index) => (
          <S.Item role='listitem' key={index}>
            <CreditCard
              flagImg={creditCard.flagImg}
              flagName={creditCard.flagName}
              number={creditCard.number}
            />
          </S.Item>
        ))}
      </S.CreditCards>
    </Box>
  )
}

CreditCardsPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My cards'>{page}</AccountTemplate>
}

export default CreditCardsPage
