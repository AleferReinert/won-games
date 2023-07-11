import GameItem, { GameItemProps } from 'components/GameItem/GameItem'
import * as S from './CartList.styles'

export type CartListProps = {
  gameItems: GameItemProps[]
  total: string
}

const CartList = ({ gameItems, total }: CartListProps) => {
  return (
    <S.Wrapper aria-label='cart list'>
      <S.List>
        {gameItems.map((game, index) => (
          <GameItem key={index} {...game} />
        ))}
      </S.List>
      <S.Footer>
        Total:
        <S.PriceTotal aria-label='total price'>{total}</S.PriceTotal>
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartList
