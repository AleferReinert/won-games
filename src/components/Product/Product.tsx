import { AddToCartButton } from 'components/AddToCartButton/AddToCartButton'
import { AddToWishlistButton } from 'components/AddToWishlistButton/AddToWishlistButton'
import { Price, PriceProps } from 'components/Price/Price'
import { Ribbon } from 'components/Ribbon/Ribbon'
import { Skeleton } from 'components/Skeleton/Skeleton'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useRef } from 'react'

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
  setLoading?: Dispatch<SetStateAction<boolean>>
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
  imgPriority = false,
  setLoading
}: ProductProps) => {
  const isDragging = useRef(false)

  return (
    <article data-testid='ProductComponent' className='relative grid h-full flex-col grid-rows-[auto_1fr]'>
      {ribbonLabel && <Ribbon label={ribbonLabel} color='primary' size='small' />}

      <Link
        href={`/game/${slug}`}
        className='text-theme-gray-500 no-underline'
        onMouseDown={() => (isDragging.current = false)}
        onMouseMove={() => (isDragging.current = true)}
        onClick={(e) => {
          if (isDragging.current) {
            e.preventDefault()
          }
        }}
      >
        <div className='h-[140px] w-full italic'>
          <Image
            src={cover.url}
            alt={cover.alternativeText}
            priority={imgPriority}
            width='292'
            height='137'
            onLoad={setLoading ? () => setLoading(false) : undefined}
            className='size-full object-cover bg-theme-gray-200 leading-[140px] text-center'
            sizes='(max-width: 320px) 288px, (max-width: 640px) 292px, (max-width: 768px) 356px, (max-width: 1024px) 308px, (max-width: 1280px) 278px, (max-width: 1536px) 305px, 305px'
          />
        </div>
      </Link>

      <div className='bg-zinc-50 p-4'>
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
            <h4 className='text-xs font-semibold text-theme-gray-700'>{developer}</h4>
          </div>
          <div className='flex justify-end mt-4 gap-1 leading-0'>
            <Price price={price} promotionalPrice={promotionalPrice} />
            <AddToCartButton id={id} price={price} size='xsmall' className='[&_svg]:size-4 [&_svg]:scale-[0.75]' />
          </div>
        </div>
      </div>
    </article>
  )
}

interface ProductSkeletonProps {
  className?: string
}

export const ProductSkeleton = ({ className }: ProductSkeletonProps) => {
  return (
    <div className={`w-full h-[235px] bg-zinc-50 ${className || ''}`}>
      <Skeleton className='bg-black/20! rounded-sm h-[140px]' />
      <div className='p-4'>
        <Skeleton className='bg-black/20! rounded-sm w-8/12 h-[20px] mb-0.5' />
        <Skeleton className='bg-black/20! rounded-sm w-3/12 h-[16px]' />
        <div className='flex justify-end pt-2 gap-1'>
          <Skeleton className='bg-black/20! rounded-sm w-[60px] h-[22px]' />
          <Skeleton className='bg-black/20! rounded-sm w-[38px] h-[22px]' />
        </div>
      </div>
    </div>
  )
}
