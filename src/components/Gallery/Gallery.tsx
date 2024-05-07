import Slider, { SliderSettings } from 'components/Slider/Slider'
import { useState, useEffect, useRef, SetStateAction } from 'react'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close
} from '@styled-icons/material-outlined'
import SlickSlider from 'react-slick'
import Image from 'next/image'
import * as S from './Gallery.styles'

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
  prevArrow: <ArrowLeft title='Previous' />,
  nextArrow: <ArrowRight title='Next' />
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
    <S.Wrapper data-testid='galleryComponent'>
      <Slider ref={slider} settings={thumbsSettings}>
        {items.map((item, index) => (
          <S.Thumb
            key={'thumb-' + index}
            title='Open modal'
            onMouseDown={(event: { clientX: SetStateAction<number> }) =>
              setMousePosition(event.clientX)
            }
            onMouseUp={(event: { clientX: number }) => {
              event.clientX === mousePosition &&
                (slider.current!.slickGoTo(index, true), setModal(true))
            }}
          >
            <Image src={item.src} alt={'Thumb ' + item.label} fill />
          </S.Thumb>
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
