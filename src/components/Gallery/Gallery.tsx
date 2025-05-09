import { ArrowBackIos as ArrowLeft, ArrowForwardIos as ArrowRight, Close } from '@styled-icons/material-outlined'
import Slider from 'components/Slider/Slider'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import * as S from './Gallery.styles'

const commomSettings: Settings = {
  infinite: false,
  lazyLoad: 'ondemand'
}

const thumbsSettings: Settings = {
  ...commomSettings,
  arrows: false,
  slidesToShow: 4,
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
    }
  ]
}

const modalSettings: Settings = {
  ...commomSettings,
  initialSlide: 2,
  prevArrow: <ArrowLeft title='Previous' />,
  nextArrow: <ArrowRight title='Next' />
}

export interface GalleryImageProps {
  src: string
  label: string
}

export interface GalleryProps {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModal(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper data-testid='GalleryComponent'>
      <Slider ref={slider} settings={thumbsSettings}>
        {items.map((item, index) => (
          <S.Thumb
            key={'thumb-' + index}
            title='Open modal'
            onClick={() => {
              slider.current!.slickGoTo(index, true), setModal(true)
            }}
          >
            <Image
              src={item.src}
              alt={'Thumb ' + (item.label ? item.label : '')}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </S.Thumb>
        ))}
      </Slider>

      <S.Modal aria-label='modal' aria-hidden={!modal}>
        <S.CloseModal aria-label='Close modal' role='button' title='Close' onClick={() => setModal(false)}>
          <Close aria-hidden role='img' />
        </S.CloseModal>
        <S.ContentModal>
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
        </S.ContentModal>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
