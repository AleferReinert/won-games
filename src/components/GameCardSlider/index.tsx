import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'
import GameCard, { GameCardProps } from 'components/GameCard'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

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
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
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
