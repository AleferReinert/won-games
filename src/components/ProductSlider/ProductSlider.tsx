'use client'
import { Container } from 'components/Container/Container'
import { Product, ProductProps, ProductSkeleton } from 'components/Product/Product'
import { Slider } from 'components/Slider/Slider'
import { ComponentProps, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import type { CustomArrowProps, Settings } from 'react-slick'
import { tv } from 'tailwind-variants'
import styles from './ProductSlider.module.css'

export interface ProductSliderProps extends ComponentProps<'div'> {
  products: ProductProps[]
  arrowColor?: 'white' | 'black'
  productImgPriority?: boolean
}

export const sliderResponsiveBreakpoints = [
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
      slidesToShow: 4
    }
  }
]

const productSlider = tv({
  slots: {
    root: 'relative mb-8 mx-auto max-w-[calc(theme(--max-w-container-default)-16px)] 2xl:max-w-[calc(theme(--max-w-container-large)-16px)]',
    arrowBase: 'size-6 absolute top-1/2 cursor-pointer -translate-y-1/2 transition [&_.slick-disabled]:invisible',
    prevArrow: 'hover:-translate-x-1 -left-[27px] 3xl:-left-10',
    nextArrow: 'hover:translate-x-1 -right-[27px] 3xl:-right-10',
    slider: ''
  },
  variants: {
    arrowColor: {
      white: {
        arrowBase: 'fill-zinc-50'
      },
      black: {
        arrowBase: 'fill-theme-gray-950'
      }
    },
    loading: {
      true: {
        slider: 'opacity-0'
      },
      false: {
        slider: 'opacity-100'
      }
    }
  }
})

export const ProductSlider = ({ products, arrowColor = 'white', productImgPriority }: ProductSliderProps) => {
  const slidesToShow = 4
  const { arrowBase, root, prevArrow, nextArrow, slider } = productSlider()
  const [loading, setLoading] = useState(true)

  const ArrowLeft = ({ currentSlide, slideCount, ...rest }: CustomArrowProps) => {
    const visibility = currentSlide === 0 ? 'hidden!' : 'hidden! xl:block!'
    void currentSlide
    void slideCount
    return (
      <MdOutlineArrowBackIos
        {...rest}
        role='img'
        title='Previous games'
        aria-label='Previous games'
        className={`${arrowBase({ arrowColor })} ${prevArrow()} ${visibility}`}
      />
    )
  }
  const ArrowRight = ({ currentSlide, slideCount, ...rest }: CustomArrowProps) => {
    const visibility = currentSlide! + slidesToShow === slideCount ? 'hidden!' : 'hidden! xl:block!'
    void currentSlide
    void slideCount
    return (
      <MdOutlineArrowForwardIos
        {...rest}
        role='img'
        title='Next games'
        aria-label='Next games'
        className={`${arrowBase({ arrowColor })} ${nextArrow()} ${visibility}`}
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
    responsive: sliderResponsiveBreakpoints
  }

  return (
    <div data-testid='ProductSliderComponent' className={root()}>
      <div className={styles.productSlider}>
        {loading && (
          <Container>
            <div className='flex gap-4'>
              <ProductSkeleton />
              <ProductSkeleton className='hidden md:block' />
              <ProductSkeleton className='hidden lg:block' />
              <ProductSkeleton className='hidden xl:block' />
            </div>
          </Container>
        )}
        <div className={slider({ loading })}>
          <Slider settings={settings}>
            {products.map((item, index) => {
              const first4 = index < 4
              return (
                <Product
                  key={item.id}
                  {...item}
                  imgPriority={first4 ? productImgPriority : false}
                  setLoading={setLoading}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
