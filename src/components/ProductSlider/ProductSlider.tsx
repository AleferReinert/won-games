'use client'
import { Product, ProductProps } from 'components/Product/Product'
import { Slider } from 'components/Slider/Slider'
import { ComponentProps } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import type { CustomArrowProps, Settings } from 'react-slick'
import styles from './ProductSlider.module.css'

export interface ProductSliderProps extends ComponentProps<'div'> {
  products: ProductProps[]
  arrowColor?: 'white' | 'black'
}

export const ProductSlider = ({ products, arrowColor = 'white' }: ProductSliderProps) => {
  const slidesToShow = 4
  const svgFill = arrowColor === 'white' ? 'fill-zinc-50' : 'fill-theme-gray-950'
  const svgStyles = 'size-6 absolute top-1/2 cursor-pointer -translate-y-1/2  [&_.slick-disabled]:invisible'

  const ArrowLeft = ({ currentSlide, slideCount, ...rest }: CustomArrowProps) => {
    void currentSlide
    void slideCount
    return (
      <MdOutlineArrowBackIos
        {...rest}
        role='img'
        title='Previous games'
        aria-label='Previous games'
        className={`${svgFill} ${svgStyles} -left-[27px] 3xl:-left-10 ${currentSlide === 0 ? 'hidden!' : 'hidden! xl:block!'}`}
      />
    )
  }
  const ArrowRight = ({ currentSlide, slideCount, ...rest }: CustomArrowProps) => {
    void currentSlide
    void slideCount
    return (
      <MdOutlineArrowForwardIos
        {...rest}
        role='img'
        title='Next games'
        aria-label='Next games'
        className={`${svgFill} ${svgStyles} -right-[27px] 3xl:-right-10 ${currentSlide! + slidesToShow === slideCount ? 'hidden!' : 'hidden! xl:block!'}`}
      />
    )
  }
  const settings: Settings = {
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    slidesToShow,
    infinite: false,
    lazyLoad: 'ondemand',
    beforeChange: () => {
      const active = document.activeElement as HTMLElement
      if (active && typeof active.blur === 'function') active.blur() // To fix bug: prevent keyboard mobile on drag
    },
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.15
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.15
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.15
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.15
        }
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          slidesToShow: 3.15
        }
      },
      {
        breakpoint: 1365,
        settings: {
          arrows: false,
          slidesToShow: 4.15
        }
      },
      {
        breakpoint: 1366,
        settings: {
          arrows: false,
          slidesToShow: 4.15
        }
      }
    ]
  }

  return (
    <div
      data-testid='ProductSliderComponent'
      className='relative mb-8 mx-auto max-w-[calc(theme(--max-w-container-default)-16px)] 2xl:max-w-[calc(theme(--max-w-container-large)-16px)]'
    >
      <div className={styles.productSlider}>
        <Slider settings={settings}>
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
