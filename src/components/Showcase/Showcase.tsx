import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { Highlight, HighlightProps } from 'components/Highlight/Highlight'
import { ProductSlider, ProductSliderProps } from 'components/ProductSlider/ProductSlider'
import { ComponentProps } from 'react'

export interface ShowcaseProps extends ProductSliderProps, ComponentProps<'div'> {
  title?: string
  highlight?: HighlightProps
  headingClass?: string
}

export const Showcase = ({
  title,
  highlight,
  products,
  arrowColor = 'white',
  headingClass,
  productImgPriority,
  ...rest
}: ShowcaseProps) => {
  return (
    <section {...rest} data-testid='ShowcaseComponent' className='mb-20'>
      {title && (
        <Container>
          <Heading line='left' lineColor='secondary' className={`mb-8 ${headingClass}`}>
            {title}
          </Heading>
        </Container>
      )}
      {highlight && <Highlight {...highlight} className='mb-8' />}
      {products && (
        <ProductSlider products={products} productImgPriority={productImgPriority} arrowColor={arrowColor} />
      )}
    </section>
  )
}
