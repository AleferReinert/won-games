'use client'
import { sliderResponsiveBreakpoints } from 'components/ProductSlider/ProductSlider'
import { Slider } from 'components/Slider/Slider'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdOutlineClose } from 'react-icons/md'
import SlickSlider, { Settings } from 'react-slick'
import styles from './Gallery.module.css'

const commomSettings: Settings = {
  infinite: false,
  lazyLoad: 'ondemand'
}

const thumbsSettings: Settings = {
  ...commomSettings,
  arrows: false,
  slidesToShow: 4,
  responsive: sliderResponsiveBreakpoints
}

const modalSettings: Settings = {
  ...commomSettings,
  initialSlide: 2,
  prevArrow: <MdOutlineArrowBackIos title='Previous' />,
  nextArrow: <MdOutlineArrowForwardIos title='Next' />
}

export interface GalleryImageProps {
  src: string
  label: string
}

export interface GalleryProps {
  items: GalleryImageProps[]
}

export const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider | null>(null)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModal(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <div data-testid='GalleryComponent' className={styles.gallery}>
      <Slider ref={slider} settings={thumbsSettings}>
        {items.map((item, index) => (
          <button
            key={'thumb-' + index}
            title='Open modal'
            onClick={() => {
              slider.current!.slickGoTo(index, true), setModal(true)
            }}
            className='relative hover:brightness-110 cursor-pointer h-full transition ease-in-out hover:scale-95'
          >
            <Image
              src={item.src}
              alt={'Thumb ' + (item.label ? item.label : '')}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </button>
        ))}
      </Slider>

      <div
        aria-label='modal'
        aria-hidden={!modal}
        onClick={() => setModal(false)}
        className={`${styles.modal} fixed inset-0 bg-black/85 transition-opacity ease-in-out duration-300 flex justify-center items-center z-40 p-6`}
      >
        <button
          aria-label='Close modal'
          title='Close'
          onClick={(e) => {
            e.stopPropagation()
            setModal(false)
          }}
          className='absolute top-0 right-0 p-2 text-right text-zinc-50 z-30 cursor-pointer transition hover:scale-90'
        >
          <MdOutlineClose aria-hidden role='img' className='size-6 fill-zinc-50' />
        </button>
        <div onClick={(e) => e.stopPropagation()} className='aspect-video max-w-4/5 max-h-full 3xl:max-w-container'>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                key={'gallery-' + index}
                src={item.src}
                alt={item.label ? item.label : ''}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
