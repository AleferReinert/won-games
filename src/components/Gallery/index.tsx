import Slider, { SliderSettings } from 'components/Slider'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close
} from '@styled-icons/material-outlined'
import * as S from './styles'
import SlickSlider from 'react-slick'

const commomSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand'
}

const thumbsSettings: SliderSettings = {
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

const modalSettings: SliderSettings = {
  ...commomSettings,
  initialSlide: 2,
  prevArrow: <ArrowLeft aria-label='previous image' />,
  nextArrow: <ArrowRight aria-label='next image' />
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [modal, setModal] = useState(false)
  const [mousePosition, setMousePosition] = useState(0)
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModal(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={thumbsSettings}>
        {items.map((item, index) => (
          <Image
            key={'thumb-' + index}
            role='button'
            src={item.src}
            alt={'Thumb ' + item.label}
            fill
            onMouseDown={(event) => setMousePosition(event.clientX)}
            onMouseUp={(event) => {
              event.clientX === mousePosition &&
                (slider.current!.slickGoTo(index, true), setModal(true))
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-label='modal' aria-hidden={!modal}>
        <S.CloseModal
          aria-label='Close modal'
          role='button'
          title='Close'
          onClick={() => setModal(false)}
        >
          <Close />
        </S.CloseModal>
        <S.ContentModal>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                key={'gallery-' + index}
                src={item.src}
                alt={item.label}
                fill
              />
            ))}
          </Slider>
        </S.ContentModal>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
