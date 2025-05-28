'use client'
import { Container } from 'components/Container/Container'
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
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          arrows: false,
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1.15
        }
      }
    ]
  }

  return (
    <div data-testid='ProductSliderComponent' className='relative'>
      <div className={styles.productSlider}>
        <Container>
          <Slider settings={settings}>
            {products.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Slider>
        </Container>
      </div>
    </div>
  )
}
