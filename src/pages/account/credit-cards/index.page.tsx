import Alert from 'components/Alert/Alert'
import Box from 'components/Box/Box'
import CreditCard, { CreditCardProps } from 'components/CreditCard/CreditCard'
import { creditCardsMock } from 'mocks/creditCards.mock'
import type { GetServerSidePropsContext } from 'next'
import * as S from 'pages/account/credit-cards/CreditCardsPage.styles'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { requireAuth } from 'utils/requireAuth'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await requireAuth(context)

  return {
    props: {
      creditCards: creditCardsMock
    }
  }
}

interface CreditCardsPageProps {
  creditCards: CreditCardProps[]
}

const CreditCardsPage = ({ creditCards }: CreditCardsPageProps) => {
  return (
    <Box>
      {creditCards?.length ? (
        <S.CreditCards>
          {creditCards?.map((creditCard) => (
            <S.Item key={creditCard.number}>
              <CreditCard img={creditCard.img} name={creditCard.name} number={creditCard.number} />
            </S.Item>
          ))}
        </S.CreditCards>
      ) : (
        <Alert $variant='info'>
          <p>You don&apos;t have any credit cards yet.</p>
        </Alert>
      )}
    </Box>
  )
}

CreditCardsPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My cards'>{page}</AccountTemplate>
}

export default CreditCardsPage
