import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { formatPrice } from 'utils/formatPrice'

export interface PriceProps extends ComponentProps<'div'> {
  price: number
  promotionalPrice?: number | null
  size?: 'small' | 'medium' | 'large'
}

const style = tv({
  slots: {
    root: 'flex font-semibold',
    oldPrice: 'line-through text-theme-gray-500',
    currentPrice: 'text-zinc-50 bg-theme-secondary rounded-sm'
  },
  variants: {
    size: {
      small: {
        root: 'gap-2',
        oldPrice: 'text-sm h-[22px] leading-[22px]',
        currentPrice: 'text-sm h-[22px] leading-[22px] px-2'
      },
      medium: {
        root: 'gap-4',
        oldPrice: 'text-base h-[33px] leading-[33px]',
        currentPrice: 'text-base h-[33px] leading-[33px] px-4'
      },
      large: {
        root: 'gap-6',
        oldPrice: 'text-xl h-[38px] leading-[38px]',
        currentPrice: 'text-xl h-[38px] leading-[38px] px-8'
      }
    }
  }
})

export const Price = ({ price, promotionalPrice, size = 'small', ...props }: PriceProps) => {
  const { root, oldPrice, currentPrice } = style({ size })

  return (
    typeof price === 'number' && (
      <div {...props} data-testid='PriceComponent' className={`${root()} ${props.className || ''}`}>
        {promotionalPrice && (
          <div aria-label='Price' className={oldPrice()}>
            {formatPrice(price)}
          </div>
        )}
        <div aria-label={promotionalPrice ? 'Promotional price' : 'Price'} className={currentPrice()}>
          {formatPrice(promotionalPrice || price)}
        </div>
      </div>
    )
  )
}
