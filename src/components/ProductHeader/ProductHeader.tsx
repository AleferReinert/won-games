import { AddToCartButton } from 'components/AddToCartButton/AddToCartButton'
import { AddToWishlistButton } from 'components/AddToWishlistButton/AddToWishlistButton'
import { Box } from 'components/Box/Box'
import { Heading } from 'components/Heading/Heading'
import { Price } from 'components/Price/Price'

export interface ProductHeaderProps {
  id: string
  title: string
  description: string
  price: number
  promotionalPrice?: number
}

export const ProductHeader = ({ id, title, description, price, promotionalPrice }: ProductHeaderProps) => {
  return (
    <div data-testid='ProductHeaderComponent' className='relative'>
      <Box>
        <div>
          <Price
            price={price}
            promotionalPrice={promotionalPrice}
            size='medium'
            className='ml-2 translate-x-[26px] float-right z-10	relative md:hidden'
          />
          <Price
            price={price}
            promotionalPrice={promotionalPrice}
            size='large'
            className='hidden ml-4 float-right z-10	relative p-0 mr-0 md:flex'
          />
          <Heading color='black' level='h1' className='text-xl mb-4 leading-[33px] md:text-[28px]'>
            {title}
          </Heading>
        </div>

        <p className='text-theme-gray-800 text-sm mb-6 md:text-lg md:max-w-[800px]'>{description}</p>

        <div className='flex flex-col gap-y-2 md:flex-row md:justify-end md:gap-x-2'>
          <AddToWishlistButton id={id} full showLabel loadingClass='border-r-theme-500!' className='md:min-w-auto' />
          <AddToCartButton id={id} full showLabel className='md:min-w-auto' />
        </div>
      </Box>
    </div>
  )
}
