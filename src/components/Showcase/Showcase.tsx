import { Container } from 'components/Container/Container.styles'
import Heading from 'components/Heading/Heading'
import Highlight, { HighlightProps } from 'components/Highlight/Highlight'
import ProductSlider, { ProductSliderProps } from 'components/ProductSlider/ProductSlider'
import { ComponentProps } from 'react'
import * as S from './Showcase.styles'

export interface ShowcaseProps extends ProductSliderProps, ComponentProps<'div'> {
  title?: string
  highlight?: HighlightProps
}

const Showcase = ({ title, highlight, products, $arrowColor = 'white', ...rest }: ShowcaseProps) => {
  return (
    <S.Wrapper {...rest} data-testid='ShowcaseComponent'>
      <Container>
        {title && (
          <Heading $line='left' $lineColor='secondary'>
            {title}
          </Heading>
        )}

        {highlight && <Highlight {...highlight} />}

        {products && <ProductSlider products={products} $arrowColor={$arrowColor} />}
      </Container>
    </S.Wrapper>
  )
}

export default Showcase
