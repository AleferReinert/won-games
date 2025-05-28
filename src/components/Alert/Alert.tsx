import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

export interface AlertProps extends ComponentProps<'div'> {
  variant?: 'error' | 'success' | 'info' | 'warning'
  children: ReactNode
  size?: 'small' | 'default'
  hideBorderLeft?: boolean
}

const alert = tv({
  base: 'flex flex-col justify-center py-2 px-4 rounded-sm font-light ease-in-out duration-300 min-h-[43px] [&_ul]:mt-2 [&_ul]:pl-[18px] [&_ul]:list-disc',
  variants: {
    variant: {
      error: 'border-red-900 text-red-900 bg-red-100',
      success: 'border-green-900 text-green-900 bg-green-100',
      info: 'border-sky-900 text-sky-900 bg-sky-100',
      warning: 'border-amber-900 text-amber-900 bg-amber-100'
    },
    size: {
      small: 'text-sm',
      default: 'text-base'
    },
    hideBorderLeft: {
      true: 'border-l-0',
      false: 'border-l-4'
    }
  }
})

export const Alert = ({ variant = 'error', children, size = 'default', hideBorderLeft, ...props }: AlertProps) => {
  return (
    <div className='py-2'>
      <div role='alert' className={`${alert({ variant, size, hideBorderLeft })} ${props.className || ''}`}>
        {children}
      </div>
    </div>
  )
}
