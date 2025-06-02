'use client'
import { Banner, BannerProps } from 'components/Banner/Banner'
import { Loading } from 'components/Loading/Loading'
import { Slider } from 'components/Slider/Slider'
import { useState } from 'react'
import type { Settings } from 'react-slick'
import styles from './BannerSlider.module.css'

export interface BannerSliderProps {
  items: BannerProps[]
}

export const BannerSlider = ({ items }: BannerSliderProps) => {
  const [loading, setLoading] = useState(true)

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
    <div className='relative aspect-video'>
      {loading && (
        <div className='absolute inset-0 bg-theme-gray-900 mx-4 z-10'>
          <Loading animation='spinner' className='border-r-white! size-14' />
        </div>
      )}
      <div
        data-testid='BannerSliderComponent'
        className={`${styles.bannerSlider} transition duration-1000 ${loading ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
      >
        <Slider settings={settings}>
          {items?.map((item) => <Banner key={item.id} {...item} setLoading={setLoading} />)}
        </Slider>
      </div>
    </div>
  )
}
