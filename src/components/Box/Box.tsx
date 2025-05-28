import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface BoxProps extends ComponentProps<'div'> {
  children: ReactNode
  size?: 'xsmall' | 'small' | 'medium'
}

const box = tv({
  base: 'bg-zinc-50',
  variants: {
    size: {
      xsmall: 'p-4',
      small: 'p-4 md:p-6',
      medium: 'p-6 md:p-8'
    }
  }
})

export const Box = ({ children, size = 'small', ...props }: BoxProps) => {
  return <div className={`${box({ size })} ${props.className || ''}`}>{children}</div>
}
