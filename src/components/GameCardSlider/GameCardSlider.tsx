import GameCard, { GameCardProps } from 'components/GameCard/GameCard'
import Slider, { SliderSettings } from 'components/Slider/Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { pxToNumber } from 'utils/tests/helpers'
import theme from 'styles/theme'
import * as S from './GameCardSlider.styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
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

const GameCardSlider = ({
  items,
  arrowColor = 'white'
}: GameCardSliderProps) => {
  return (
    <S.Wrapper arrowColor={arrowColor} data-testid='gameCardSliderComponent'>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
