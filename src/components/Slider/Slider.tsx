import { ReactNode, Ref } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import styles from './Slider.module.css'

export interface SliderProps {
  children: ReactNode
  settings: Settings
  ref?: Ref<SlickSlider>
}

export function Slider({ children, settings, ref }: SliderProps) {
  {
    return (
      <div className={styles.slider}>
        <SlickSlider ref={ref} {...settings}>
          {children}
        </SlickSlider>
      </div>
    )
  }
}
