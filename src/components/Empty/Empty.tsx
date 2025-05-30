import { Button } from 'components/Button/Button'
import Image from 'next/image'

export interface EmptyProps {
  title: string
  description: string
  invertedColors?: boolean
  small?: boolean
  buttonText?: string
  buttonUrl?: string
  imgPriority?: boolean
}

export const Empty = ({
  title,
  description,
  buttonText,
  buttonUrl,
  invertedColors = false,
  small = false,
  imgPriority = false
}: EmptyProps) => {
  return (
    <div data-testid='EmptyComponent' className={`text-center p-8 ${invertedColors ? 'bg-zinc-50' : ''}`}>
      <div className='mb-6'>
        <Image
          src='/img/empty.svg'
          alt='Decorative image'
          width={small ? 140 : 340}
          height={small ? 72 : 176}
          aria-hidden
          priority={imgPriority}
          className='inline'
        />
      </div>
      <h2 className={`text-theme-primary font-bold ${small ? 'text-lg' : 'text-xl lg:text-[28px]'}`}>{title}</h2>
      <div className='space-y-6'>
        <p className={`text-sm font-light lg:text-base ${invertedColors ? 'text-theme-gray-950' : 'text-zinc-50'}`}>
          {description}
        </p>

        {buttonUrl && (
          <Button asLink href={buttonUrl}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  )
}
