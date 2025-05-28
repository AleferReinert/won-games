import { Alert } from 'components/Alert/Alert'
import { CartItem } from 'components/CartItem/CartItem'
import { Metadata } from 'next'
import { Session } from 'next-auth'
import { fetchAccountOrders } from 'utils/fetchAccountOrders'
import { requireAuth } from 'utils/requireAuth'

export const metadata: Metadata = {
  title: 'Orders'
}

export default async function OrdersPage(session?: Session) {
  const { serverSession } = await requireAuth(session)
  const orders = await fetchAccountOrders(serverSession)

  return orders.length ? (
    <ul className='-mt-2 -mx-4 -mb-4 lg:-mb-6 lg:-mx-6'>
      {orders.map((item) => (
        <CartItem
          hideRemoveFromCartButton
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
    </ul>
  ) : (
    <Alert variant='info'>
      <p>You have no orders yet.</p>
    </Alert>
  )
}
