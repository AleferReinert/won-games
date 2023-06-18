import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

export async function getStaticProps() {
  return {
    props: {
      //   wishlistGames: gamesMock,
      recommendedHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}
