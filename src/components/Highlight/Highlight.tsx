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
        className={`relative flex h-[230px] justify-between mb-8 md:h-[320px] ${alignment === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <Image
          src={background.url}
          alt={background.alternativeText}
          aria-hidden={background.alternativeText ? false : true}
          fill
        />
        <div className='z-10 self-end flex relative'>
          {floatImg && (
            <Image
              src={floatImg.url}
              alt={floatImg.alternativeText}
              fill
              aria-hidden={floatImg.alternativeText ? false : true}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='min-w-[100px] max-h-[230px] max-w-full h-auto! static! md:max-h-[320px]'
            />
          )}
        </div>
        <div
          className={`z-10 p-4 text-zinc-50 self-start md:p-10 md:self-end ${alignment === 'right' ? 'text-right pl-0' : 'pr-0'}`}
        >
          <h3 className='text-lg font-semibold md:text-[28px]'>{title}</h3>
          <p className='text-sm font-light mb-4 md:mb-8 md:text-lg'>{description}</p>
          <Button asLink href={buttonUrl}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
