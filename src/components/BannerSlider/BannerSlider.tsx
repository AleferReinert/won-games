import Banner, { BannerProps } from 'components/Banner/Banner'
import Slider, { SliderSettings } from 'components/Slider/Slider'
import theme from 'styles/theme'
import { pxToNumber } from 'utils/tests/helpers'
import * as S from './BannerSlider.styles'

export interface BannerSliderProps {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: pxToNumber(theme.breakpoint.large) - 1,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper data-testid='bannerSliderComponent'>
      <Slider settings={settings}>
        {items &&
          items.map((item, index) => (
            <Banner key={index} {...item} ribbonColor='secondary' />
          ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
