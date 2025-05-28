import Image from 'next/image'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface CreditCardProps extends ComponentProps<'div'> {
  name: string
  number: string
  img: string
  color?: 'black' | 'gray'
  direction?: 'left' | 'right'
}

const creditCard = tv({
  base: 'inline-flex gap-2 items-center',
  variants: {
    color: {
      black: 'text-theme-gray-950',
      gray: 'text-theme-500'
    },
    direction: {
      left: 'flex-row',
      right: 'flex-row-reverse'
    }
  }
})

export const CreditCard = ({ name, number, img, color = 'black', direction = 'left' }: CreditCardProps) => {
  return (
    <div data-testid='CreditCardComponent' className={creditCard({ color, direction })}>
      <Image src={img} width='36' height='22' alt={name} />
      <div aria-label='credit card number'>{number}</div>
    </div>
  )
}
