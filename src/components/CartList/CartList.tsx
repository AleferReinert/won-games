import GameItem, { GameItemProps } from 'components/GameItem/GameItem'
import * as S from './CartList.styles'

type CartList = {
  gameItems: GameItemProps[]
  total: string
}

const CartList = ({ gameItems, total }: CartList) => {
  return (
    <>
      <S.List>
        {gameItems.map((game, index) => (
          <GameItem key={index} {...game} />
        ))}
      </S.List>
      <S.Footer>
        Total:
        <S.PriceTotal aria-label='total price'>{total}</S.PriceTotal>
      </S.Footer>
    </>
  )
}

export default CartList
