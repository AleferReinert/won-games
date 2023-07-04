import SlickSlider, { Settings } from 'react-slick'
import { forwardRef, ReactNode } from 'react'
import * as S from './Slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export default forwardRef(Slider)
