'use client'
import { Banner, BannerProps } from 'components/Banner/Banner'
import { Slider } from 'components/Slider/Slider'
import type { Settings } from 'react-slick'
import styles from './BannerSlider.module.css'

export interface BannerSliderProps {
  items: BannerProps[]
}

export const BannerSlider = ({ items }: BannerSliderProps) => {
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
        breakpoint: 1365,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  }

  return (
    <div data-testid='BannerSliderComponent' className={styles.bannerSlider}>
      <Slider settings={settings}>{items?.map((item) => <Banner key={item.id} {...item} />)}</Slider>
    </div>
  )
}
