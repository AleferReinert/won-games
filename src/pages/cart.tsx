import Cart, { CartTemplateProps } from 'templates/Cart/Cart'
import highlightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'
import gameItemsMock from 'components/CartList/mock'
import creditCardsMock from 'components/PaymentOptions/mock'

export async function getServerSideProps() {
  return {
    props: {
      gameItems: gameItemsMock,
      total: '$530',
      creditCards: creditCardsMock,
      recommendedHighlight: highlightMock,
      recommendedGames: gameCardSliderMock
    }
  }
}

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}
