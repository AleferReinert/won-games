import { ArrowBackIos } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos } from '@styled-icons/material-outlined/ArrowForwardIos'
import Product, { ProductProps } from 'components/Product/Product'
import Slider from 'components/Slider/Slider'
import type { CustomArrowProps, Settings } from 'react-slick'
import theme from 'styles/theme'
import { pxToNumber } from 'utils/tests/helpers'
import * as S from './ProductSlider.styles'

export interface ProductSliderProps {
  products: ProductProps[]
  $arrowColor?: 'white' | 'black'
}

const ArrowLeft = ({ currentSlide, slideCount, ...rest }: CustomArrowProps) => {
  void currentSlide
  void slideCount
  return <ArrowBackIos {...rest} title='Previous games' role='img' aria-label='Previous games' />
}

const ArrowRight = ({ currentSlide, slideCount, ...rest }: CustomArrowProps) => {
  void currentSlide
  void slideCount
  return <ArrowForwardIos {...rest} title='Next games' role='img' aria-label='Next games' />
}

const settings: Settings = {
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
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

const ProductSlider = ({ products, $arrowColor = 'white' }: ProductSliderProps) => {
  return (
    <S.Wrapper $arrowColor={$arrowColor} data-testid='ProductSliderComponent'>
      <Slider settings={settings}>
        {products.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default ProductSlider
