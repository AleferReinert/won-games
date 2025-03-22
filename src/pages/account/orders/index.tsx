import Box from 'components/Box/Box'
import CartItem, { CartItemProps } from 'components/CartItem/CartItem'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import { cartItemsFullMock } from '../../../mocks/cartItemsFull.mock'
import * as S from './OrdersPage.styles'

export function getServerSideProps() {
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
      {items.map((item, index) => (
        <CartItem
          key={index}
          img={item.img}
          title={item.title}
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
      <S.WithoutOrdersMessage>You have no orders yet.</S.WithoutOrdersMessage>
    </Box>
  )
}

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My orders'>{page}</AccountTemplate>
}

export default OrdersPage
