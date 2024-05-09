import { Container } from 'components/Container/Container.styles'
import Heading from 'components/Heading/Heading'
import Highlight, { HighlightProps } from 'components/Highlight/Highlight'
import { ProductProps } from 'components/Product/Product'
import ProductSlider from 'components/ProductSlider/ProductSlider'
import * as S from './Showcase.styles'

interface ShowcaseProps {
  title?: string
  arrowColor?: 'black' | 'white'
  games?: ProductProps[]
  highlight?: HighlightProps
}

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

        {highlight && <Highlight {...highlight} />}

        {games && <ProductSlider items={games} arrowColor={arrowColor} />}
      </Container>
    </S.Wrapper>
  )
}

export default Showcase
