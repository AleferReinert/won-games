import * as S from './Showcase.styles'
import Heading from 'components/Heading/Heading'
import Highlight, { HighlightProps } from 'components/Highlight/Highlight'
import GameCardSlider from 'components/GameCardSlider/GameCardSlider'
import { GameCardProps } from 'components/GameCard/GameCard'
import { Container } from 'components/Container/Container.styles'

type CommomProps = {
  title?: string
  arrowColor?: 'black' | 'white'
}

type ConditionalProps =
  | {
      highlight: HighlightProps
      games?: GameCardProps[]
    }
  | {
      highlight?: HighlightProps
      games: GameCardProps[]
    }

export type ShowcaseProps = CommomProps & ConditionalProps

const Showcase = ({
  title,
  highlight,
  games,
  arrowColor = 'white'
}: ShowcaseProps) => {
  return (
    <S.Wrapper data-testid='showcaseComponent'>
      <Container>
        {!!title && (
          <Heading line='left' lineColor='secondary'>
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
