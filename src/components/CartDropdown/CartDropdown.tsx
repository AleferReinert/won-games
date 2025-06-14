'use client'
import { CartItems } from 'components/CartItems/CartItems'
import { Dropdown } from 'components/Dropdown/Dropdown'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const CartDropdown = () => {
  const { totalQuantity } = useCart()
  const IconWithQuantity = () => {
    return (
      <div className='relative bg-transparent leading-0 w-fit'>
        <div
          aria-label='Cart items'
          className='absolute -top-[5px] -right-[5px] rounded-full text-white size-4 bg-theme-secondary leading-4 text-[10px] font-semibold text-center'
        >
          {totalQuantity}
        </div>
        <MdOutlineShoppingCart role='img' aria-hidden className='fill-zinc-50 size-6' />
      </div>
    )
  }

  return (
    <div data-testid='CartDropdownComponent'>
      <div id='desktop' className='hidden md:block'>
        <Dropdown buttonContent={<IconWithQuantity />} buttonTitle='Shopping cart'>
          <CartItems
            button
            className='w-[480px] shadow-[0_0_3px_rgba(0,0,0,0.25)] [&_ul]:max-h-[304px] [&_ul]:overflow-y-auto'
          />
        </Dropdown>
      </div>

      <div id='mobile' className='[&_svg]:fill-zinc-50 md:hidden'>
        <Link href='/cart' title='Shopping cart' aria-label='Shopping cart'>
          <IconWithQuantity />
        </Link>
      </div>
    </div>
  )
}
