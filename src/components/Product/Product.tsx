import { AddToCartButton } from 'components/AddToCartButton/AddToCartButton'
import { AddToWishlistButton } from 'components/AddToWishlistButton/AddToWishlistButton'
import { Box } from 'components/Box/Box'
import { Price, PriceProps } from 'components/Price/Price'
import { Ribbon } from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import Link from 'next/link'

export interface ProductProps extends PriceProps {
  id: string
  slug: string
  title: string
  developer: string
  cover: {
    url: string
    alternativeText: string
  }
  ribbonLabel?: string
  imgPriority?: boolean
}

export const Product = ({
  id,
  slug,
  title,
  developer,
  cover,
  price,
  promotionalPrice = null,
  ribbonLabel,
  imgPriority = false
}: ProductProps) => {
  return (
    <article data-testid='ProductComponent' className='relative grid h-full flex-col grid-rows-[auto_1fr]'>
      {ribbonLabel && <Ribbon label={ribbonLabel} color='primary' size='small' />}

      <Link href={`/game/${slug}`} passHref className='text-theme-gray-500 no-underline'>
        <div className='h-[140px] w-full italic'>
          <Image
            src={cover.url}
            alt={cover.alternativeText}
            priority={imgPriority}
            width='292'
            height='137'
            className='size-full object-cover bg-theme-gray-200 leading-[140px] text-center'
          />
        </div>
      </Link>

      <Box size='xsmall'>
        <div className='flex flex-col justify-between relative h-full'>
          <div>
            <div className='flex justify-between'>
              <h3 className='text-base leading-[22px] font-semibold text-theme-gray-950'>{title}</h3>
              <AddToWishlistButton
                id={id}
                loadingClass='border-r-theme-primary!'
                className='p-0! h-min translate-x-[1px] -translate-y-[1px] disabled:bg-transparent [&_svg]:size-6'
              />
            </div>
            <h4 className='text-xs font-semibold text-theme-500'>{developer}</h4>
          </div>
          <div className='flex justify-end mt-2 gap-1 '>
            <Price price={price} promotionalPrice={promotionalPrice} />
            <AddToCartButton id={id} size='xsmall' className='[&_svg]:size-4 [&_svg]:scale-[0.75]' />
          </div>
        </div>
      </Box>
    </article>
  )
}
