import Base from 'templates/Base'
import * as S from './styles'

const Game = () => {
  return (
    <Base>
      <S.Cover src='/img/games/cyberpunk-1.jpg' aria-label='cover' />

      <div style={{ color: 'white', height: '100rem' }}>Game</div>
    </Base>
  )
}

export default Game
