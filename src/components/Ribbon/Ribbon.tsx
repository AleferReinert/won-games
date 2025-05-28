import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface RibbonProps extends ComponentProps<'div'> {
  label: string
  color?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

const ribbon = tv({
  base: 'inline-block text-zinc-50 font-semibold absolute z-10 after:border-transparent after:brightness-75 after:block after:absolute after:h-0 after:right-0 after:border-solid after:content-[""]',
  variants: {
    color: {
      primary: 'bg-theme-primary after:border-t-theme-primary after:border-l-theme-primary',
      secondary: 'bg-theme-secondary after:border-t-theme-secondary after:border-l-theme-secondary'
    },
    size: {
      small:
        'h-6 text-[10px] leading-6 px-7 top-[13px] -right-3 after:-bottom-1.5 after:border-y-[3px] after:border-x-[6px]',
      large:
        'h-[33px] text-sm leading-[33px] px-10 top-[50px] -right-3.5 after:-bottom-[7px] after:border-y-4 after:border-x-[7px]'
    }
  }
})

export const Ribbon = ({ label, color = 'primary', size = 'large', ...props }: RibbonProps) => {
  return (
    <div {...props} data-testid='RibbonComponent' className={ribbon({ color, size })}>
      {label}
    </div>
  )
}
