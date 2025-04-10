import Banner, { BannerProps } from 'components/Banner/Banner'
import Slider from 'components/Slider/Slider'
import type { Settings } from 'react-slick'
import theme from 'styles/theme'
import { pxToNumber } from 'utils/pxToNumber'
import * as S from './BannerSlider.styles'

export interface BannerSliderProps {
  items: BannerProps[]
}

const settings: Settings = {
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
    <S.Wrapper data-testid='BannerSliderComponent'>
      <Slider settings={settings}>{items && items.map((item) => <Banner key={item.id} {...item} />)}</Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
