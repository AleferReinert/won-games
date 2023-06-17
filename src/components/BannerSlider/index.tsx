import Banner, { BannerProps } from 'components/Banner'
import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import { BreakpointToNumber } from 'utils/tests/helpers'
import theme from 'styles/theme'

export type BannerSliderProps = {
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
      breakpoint: BreakpointToNumber(theme.breakpoint.largeLess),
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <Banner key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
