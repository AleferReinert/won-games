import { Button } from 'components/Button/Button'
import Image from 'next/image'
import { ComponentProps } from 'react'

export interface HighlightProps extends ComponentProps<'div'> {
  title: string
  description: string
  buttonLabel: string
  buttonUrl: string
  background: {
    url: string
    alternativeText: string
  }
  floatImg?: {
    url: string
    alternativeText: string
  }
  alignment?: 'left' | 'right'
}

export const Highlight = ({
  title,
  description,
  buttonLabel,
  buttonUrl,
  background,
  floatImg,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <div className='lg:mx-auto lg:px-4 max-w-container'>
      <div
        data-testid='HighlightComponent'
        className={`relative flex justify-between mb-8 aspect-highlight 
					${alignment === 'right' ? 'flex-row' : 'flex-row-reverse'} 
					`}
      >
        <div className='absolute inset-0 bg-black/50 z-10'></div>
        <Image
          src={background.url}
          alt={background.alternativeText}
          aria-hidden={background.alternativeText ? false : true}
          className='absolute object-cover inset-0 h-full'
          width={1268}
          height={390}
        />
        <div className='z-10 self-end flex relative'>
          {floatImg && (
            <Image
              src={floatImg.url}
              alt={floatImg.alternativeText}
              fill
              aria-hidden={floatImg.alternativeText ? false : true}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='min-w-[100px] max-h-[230px] max-w-full h-auto! static! pt-8 mr-4 md:max-h-[320px]'
            />
          )}
        </div>
        <div
          className={`z-10 px-4 py-8 text-zinc-50 md:p-12 lg:self-end
						${alignment === 'right' ? 'text-right pl-0' : 'pr-0'} 
						${floatImg ? 'self-start' : 'self-end'} 
						`}
        >
          <div>
            <h3 className='text-lg font-semibold lg:text-[28px] text-shadow-lg/30'>{title}</h3>
            <p className='text-sm font-light mb-4 lg:mb-8 lg:text-lg text-shadow-lg/30'>{description}</p>
            <Button asLink href={buttonUrl}>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
