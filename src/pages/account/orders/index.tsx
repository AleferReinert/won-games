import Alert from 'components/Alert/Alert'
import Box from 'components/Box/Box'
import CartItem, { CartItemProps } from 'components/CartItem/CartItem'
import { cartItemsFullMock } from 'mocks/cartItemsFull.mock'
import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { requireAuth } from 'utils/requireAuth'
import * as S from './OrdersPage.styles'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await requireAuth(context)

  return {
    props: {
      items: cartItemsFullMock
    }
  }
}

interface OrdersPageProps {
  items?: CartItemProps[]
}

const OrdersPage = ({ items = [] }: OrdersPageProps) => {
  return items.length ? (
    <S.Wrapper>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          downloadLink={item.downloadLink}
          paymentInfo={{
            creditCardNumber: item.paymentInfo?.creditCardNumber || '',
            creditCardBrand: item.paymentInfo?.creditCardBrand || '',
            creditCardFlag: item.paymentInfo?.creditCardFlag || '',
            purchaseDate: item.paymentInfo?.purchaseDate || ''
          }}
        />
      ))}
    </S.Wrapper>
  ) : (
    <Box>
      <Alert $variant='info'>You have no orders yet.</Alert>
    </Box>
  )
}

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My orders'>{page}</AccountTemplate>
}

export default OrdersPage
