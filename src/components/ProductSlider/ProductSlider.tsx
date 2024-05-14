import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Product, { ProductProps } from 'components/Product/Product'
import Slider, { SliderSettings } from 'components/Slider/Slider'
import theme from 'styles/theme'
import { pxToNumber } from 'utils/tests/helpers'
import * as S from './ProductSlider.styles'

export interface ProductSliderProps {
  products: ProductProps[]
  arrowColor?: 'white' | 'black'
}

const settings: SliderSettings = {
  prevArrow: <ArrowLeft title='previous games' />,
  nextArrow: <ArrowRight title='next games' />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: pxToNumber(theme.breakpoint.large) - 1,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: pxToNumber(theme.breakpoint.medium) - 1,
      settings: {
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: pxToNumber(theme.breakpoint.small) - 1,
      settings: {
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: pxToNumber(theme.breakpoint.xsmall) - 1,
      settings: {
        slidesToShow: 1.15
      }
    }
  ]
}

const ProductSlider = ({
  products,
  arrowColor = 'white'
}: ProductSliderProps) => {
  return (
    <S.Wrapper arrowColor={arrowColor} data-testid='productSliderComponent'>
      <Slider settings={settings}>
        {products.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default ProductSlider
