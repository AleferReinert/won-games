import Alert from 'components/Alert/Alert'
import Box from 'components/Box/Box'
import CartItem from 'components/CartItem/CartItem'
import { ORDERS } from 'graphql/queries/orders'
import type { GetServerSidePropsContext } from 'next'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'
import { requireAuth } from 'utils/requireAuth'
import * as S from './OrdersPage.styles'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await requireAuth(context)
  if (!session) return { props: {} }

  const apolloClient = initializeApollo({ session })
  const {
    data: { orders }
  } = await apolloClient.query<Pick<Query, 'orders'>>({
    query: ORDERS,
    // @ts-expect-error todo: fix
    variables: { identifier: session.id },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      orders
    }
  }
}

interface OrdersPageProps {
  orders: Query['orders']
}

const OrdersPage = ({ orders }: OrdersPageProps) => {
  const ordersItems = ordersMapper(orders)

  return ordersItems.length ? (
    <S.Wrapper>
      {ordersItems.map((item) => (
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
      <Alert $variant='info'>You have no orders yet.</Alert>
    </Box>
  )
}

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My orders'>{page}</AccountTemplate>
}

export default OrdersPage
