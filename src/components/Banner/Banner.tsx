import { Button } from 'components/Button/Button'
import { Ribbon, RibbonProps } from 'components/Ribbon/Ribbon'
import Image from 'next/image'

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
}

export const Banner = ({ img, title, description, buttonLabel = 'Buy now', buttonUrl, ribbon }: BannerProps) => {
  const caption = title || description || buttonUrl

  return (
    <div className='relative md:[box-shadow:0_0.4rem_0.5rem_rgba(0,0,0,0.2)] mx-auto 1xl:mx-4'>
      {ribbon?.label && (
        <Ribbon
          label={ribbon.label}
          size={ribbon.size}
          color={ribbon.color}
          className='max-md:right-0 max-md:top-5 max-md:after:hidden md:'
        />
      )}

      <div className='w-full h-[230px] relative lg:h-[580px]'>
        <Image priority src={img.url} alt={img.alternativeText || 'Decorative image'} fill />
      </div>

      {caption && (
        <div className='w-full p-6 bg-[black]/35 md:bg-[black]/70 md:rounded-b-sm md:rounded-r-sm md:p-10 absolute bottom-0 left-0'>
          {title && <h2 className='text-lg font-semibold text-zinc-50 md:text-[28px]'>{title}</h2>}
          {description && (
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className='text-zinc-50 text-sm font-normal [&_strong]:text-theme-primary [&_strong]:font-semibold md:text-lg'
            />
          )}
          {buttonUrl && (
            <>
              <Button asLink href={buttonUrl} className='mt-4 md:hidden'>
                {buttonLabel}
              </Button>
              <Button asLink href={buttonUrl} size='large' className='mt-4 hidden md:inline-flex'>
                {buttonLabel}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
