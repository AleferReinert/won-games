import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'
import GameCard, { GameCardProps } from 'components/GameCard'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import theme from 'styles/theme'
import { BreakpointToNumber } from 'utils/tests/helpers'

export type GameCardSliderProps = {
  items: GameCardProps[]
  arrowColor?: 'white' | 'black'
}

const settings: SliderSettings = {
  prevArrow: <ArrowLeft aria-label='previous games' />,
  nextArrow: <ArrowRight aria-label='next games' />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: BreakpointToNumber(theme.breakpoint.hugeLess),
      settings: {
        arrows: false,
        slidesToShow: 4.25
      }
    },
    {
      breakpoint: BreakpointToNumber(theme.breakpoint.largeLess),
      settings: {
        arrows: false,
        slidesToShow: 3.25
      }
    },
    {
      breakpoint: BreakpointToNumber(theme.breakpoint.mediumLess),
      settings: {
        arrows: false,
        slidesToShow: 2.25
      }
    },
    {
      breakpoint: BreakpointToNumber(theme.breakpoint.smallLess),
      settings: {
        arrows: false,
        slidesToShow: 1.25
      }
    }
  ]
}

const GameCardSlider = ({
  items,
  arrowColor = 'white'
}: GameCardSliderProps) => {
  return (
    <S.Wrapper arrowColor={arrowColor}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
