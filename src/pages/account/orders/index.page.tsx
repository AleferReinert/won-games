import Alert from 'components/Alert/Alert'
import Box from 'components/Box/Box'
import CartItem, { CartItemProps } from 'components/CartItem/CartItem'
import { ORDERS } from 'graphql/queries/orders'
import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { OrdersQuery, OrdersQueryVariables } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'
import { requireAuth } from 'utils/requireAuth'
import * as S from './OrdersPage.styles'

export interface OrdersPageProps {
  orders: CartItemProps[]
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  if (!session || !session.id) return { props: {} }

  const apolloClient = initializeApollo({ token: session.jwt })
  const orders = await apolloClient.query<OrdersQuery, OrdersQueryVariables>({
    query: ORDERS,
    variables: { identifier: session.id },
    fetchPolicy: 'no-cache'
  })
  const props: OrdersPageProps = {
    orders: ordersMapper(orders.data)
  }

  return { props }
}

const OrdersPage = ({ orders }: OrdersPageProps) => {
  return orders.length ? (
    <S.Wrapper>
      {orders.map((item) => (
        <CartItem
          removeFromCartButton={false}
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
      <Alert $variant='info'>
        <p>You have no orders yet.</p>
      </Alert>
    </Box>
  )
}

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My orders'>{page}</AccountTemplate>
}

export default OrdersPage
