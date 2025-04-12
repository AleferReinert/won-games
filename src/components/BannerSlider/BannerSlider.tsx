import Banner, { BannerProps } from 'components/Banner/Banner'
import Slider from 'components/Slider/Slider'
import type { Settings } from 'react-slick'
import theme from 'styles/theme'
import { pxToNumber } from 'utils/pxToNumber'
import * as S from './BannerSlider.styles'

export interface BannerSliderProps {
  items: BannerProps[]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  const settings: Settings = {
    dots: items.length > 1 ? true : false,
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

  return (
    <S.Wrapper data-testid='BannerSliderComponent'>
      <Slider settings={settings}>{items?.map((item) => <Banner key={item.id} {...item} />)}</Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
