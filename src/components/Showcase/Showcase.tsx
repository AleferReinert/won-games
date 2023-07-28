import * as S from './Showcase.styles'
import Heading from 'components/Heading/Heading'
import Highlight, { HighlightProps } from 'components/Highlight/Highlight'
import ProductSlider from 'components/ProductSlider/ProductSlider'
import { ProductProps } from 'components/Product/Product'
import { Container } from 'components/Container/Container.styles'

type CommomProps = {
  title?: string
  arrowColor?: 'black' | 'white'
}

type ConditionalProps =
  | {
      highlight: HighlightProps
      games?: ProductProps[]
    }
  | {
      highlight?: HighlightProps
      games: ProductProps[]
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

        {!!games && <ProductSlider items={games} arrowColor={arrowColor} />}
      </Container>
    </S.Wrapper>
  )
}

export default Showcase
