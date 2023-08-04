import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'
import * as S from './orders.styles'
import CartItem, { CartItemProps } from 'components/CartItem/CartItem'
import Box from 'components/Box/Box'
import itemsMock from './mock'

export function getServerSideProps() {
  return {
    props: {
      items: itemsMock
    }
  }
}

type OrdersPageProps = {
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
          creditCardNumber={item.creditCardNumber!}
          creditCardBrand={item.creditCardBrand!}
          creditCardFlag={item.creditCardFlag!}
          purchaseDate={item.purchaseDate!}
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
