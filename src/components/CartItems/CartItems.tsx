'use client'
import { Button } from 'components/Button/Button'
import { CartItem } from 'components/CartItem/CartItem'
import { Empty } from 'components/Empty/Empty'
import { Skeleton } from 'components/Skeleton/Skeleton'
import { useCart } from 'hooks/useCart'
import { ComponentProps } from 'react'
import { formatPrice } from 'utils/formatPrice'

export interface CartItemsProps extends ComponentProps<'div'> {
  button?: boolean
}

export const CartItems = ({ button = false, ...props }: CartItemsProps) => {
  const { cartProducts, totalPrice, loading } = useCart()

  return (
    <div
      aria-label='cart list'
      data-testid='CartItemsComponent'
      className={`bg-zinc-50 flex flex-col items-center justify-center max-h-min [&>*]:w-full
				${props.className || ''}`}
    >
      {loading ? (
        <div>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className='p-4 md:p-6 flex gap-6'>
              <Skeleton className='w-[94px] h-[53px] bg-black/20! rounded-sm' />
              <div>
                <Skeleton className='w-28 h-5 bg-black/20! mb-1 rounded-sm' />
                <Skeleton className='w-16 h-[22px] bg-black/20! rounded-sm' />
              </div>
            </div>
          ))}
          <div className='p-4 md:p-6 bg-theme-gray-200 flex justify-between items-center'>
            <Skeleton className='w-20 h-10 bg-black/20! mb-1 rounded-sm' />
            <Skeleton className='w-[135px] h-10 bg-black/20! rounded-sm' />
          </div>
        </div>
      ) : cartProducts.length ? (
        <>
          <ul>
            {cartProducts.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </ul>
          <div className='flex justify-between items-center p-4 text-xl font-medium bg-theme-gray-200 md:p-6'>
            {!button && 'Total:'}
            <div aria-label='total price' className='text-theme-primary font-semibold'>
              {formatPrice(totalPrice)}
            </div>
            {button && (
              <Button asLink href='/cart'>
                Buy it now
              </Button>
            )}
          </div>
        </>
      ) : (
        <Empty
          title='Your cart is empty'
          description='Go back to the store and explore great games and offers.'
          invertedColors
          small
          imgPriority
        />
      )}
    </div>
  )
}
