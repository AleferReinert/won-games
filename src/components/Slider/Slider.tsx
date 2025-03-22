import { forwardRef, ReactNode } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import * as S from './Slider.styles'

export interface SliderProps {
  children: ReactNode
  settings: Settings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = ({ children, settings }, ref) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export default forwardRef(Slider)
