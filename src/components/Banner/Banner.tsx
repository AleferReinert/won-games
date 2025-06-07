import { Button } from 'components/Button/Button'
import { Ribbon, RibbonProps } from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

export interface BannerProps {
  id: string
  img: {
    url: string
    alternativeText: string
  }
  title?: string
  description?: string
  buttonLabel?: string
  buttonUrl?: string
  ribbon?: RibbonProps
  setLoading?: Dispatch<SetStateAction<boolean>>
}

export const Banner = ({
  img,
  title,
  description,
  buttonLabel = 'Buy now',
  buttonUrl,
  ribbon,
  setLoading
}: BannerProps) => {
  const caption = title || description || buttonUrl

  return (
    <div className='relative md:[box-shadow:0_0.4rem_0.5rem_rgba(0,0,0,0.2)]'>
      {ribbon?.label && (
        <Ribbon
          label={ribbon.label}
          size={ribbon.size}
          color={ribbon.color}
          className='max-md:right-0 max-md:top-5 max-md:after:hidden md:'
        />
      )}
      <div className='w-full relative aspect-video'>
        <Image
          priority
          src={img.url}
          alt={img.alternativeText || 'Decorative image'}
          onLoad={setLoading ? () => setLoading(false) : undefined}
          fill
        />
      </div>
      {caption && (
        <div className='w-full p-6 flex flex-col justify-end bg-[black]/50 sm:bg-transparent sm:from-black to-transparent bg-linear-to-t md:p-10 absolute bottom-0 left-0 top-0 sm:top-1/3'>
          <div>
            {title && <h2 className='text-lg font-semibold text-zinc-50 md:text-[28px]'>{title}</h2>}
            {description && (
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className='text-zinc-50 text-sm font-normal [&_strong]:text-theme-primary [&_strong]:font-semibold md:text-lg'
              />
            )}
            {buttonUrl && (
              <>
                <Button asLink href={buttonUrl} className='mt-4 md:hidden!'>
                  {buttonLabel}
                </Button>
                <Button asLink href={buttonUrl} size='large' className='mt-4 hidden! md:inline-flex!'>
                  {buttonLabel}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
