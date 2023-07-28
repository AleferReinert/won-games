import Cart, { CartTemplateProps } from 'templates/Cart/Cart'
import highlightMock from 'components/Highlight/mock'
import productSliderMock from 'components/ProductSlider/mock'
import gameItemsMock from 'components/CartItemList/mock'
import creditCardsMock from 'components/PaymentOptions/mock'

export async function getServerSideProps() {
  return {
    props: {
      gameItems: gameItemsMock,
      total: '$530',
      creditCards: creditCardsMock,
      recommendedHighlight: highlightMock,
      recommendedGames: productSliderMock
    }
  }
}

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}
