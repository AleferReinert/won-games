import { CartItemProps } from 'components/CartItem/CartItem'
import { ORDERS } from 'graphql/queries/orders'
import { Session } from 'next-auth'
import { OrdersQuery, OrdersQueryVariables } from 'types/generated'
import { initializeApollo } from './apollo'
import { ordersMapper } from './mappers'

export async function fetchAccountOrders(session: Session): Promise<CartItemProps[]> {
  const apolloClient = initializeApollo({ token: session.jwt })
  const orders = await apolloClient.query<OrdersQuery, OrdersQueryVariables>({
    query: ORDERS,
    variables: { userEmail: session.user!.email! }
  })

  return ordersMapper(orders.data)
}
