import * as S from './styles'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  arrowColor?: 'black' | 'white'
}

const Showcase = ({ title, highlight, games, arrowColor }: ShowcaseProps) => {
  return (
    <S.Wrapper>
      <Container>
        {!!title && (
          <Heading lineLeft lineColor='secondary'>
            {title}
          </Heading>
        )}

        {!!highlight && <Highlight {...highlight} />}

        {!!games && <GameCardSlider items={games} arrowColor={arrowColor} />}
      </Container>
    </S.Wrapper>
  )
}

export default Showcase
