import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface ButtonProps {
  children: React.ReactNode
  asLink?: boolean
  full?: boolean
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  variant?: 'primary' | 'link'
}

export type ButtonConditionalProps = ButtonProps & (LinkProps | ComponentProps<'button'>)

const button = tv({
  base: '[&_svg]:size-[22px] cursor-pointer rounded-sm inline-flex items-center justify-center whitespace-nowrap gap-2 text-xs font-medium px-2 disabled:bg-theme-gray-500 disabled:cursor-not-allowed disabled:text-zinc-50',
  variants: {
    full: {
      true: 'w-full'
    },
    size: {
      xsmall: 'h-[22px]',
      small: 'h-[30px] text-xs',
      medium: 'h-10 text-sm px-8',
      large: 'h-[50px] text-base px-10'
    },
    variant: {
      primary:
        'text-zinc-50 [&>svg]:fill-zinc-50 bg-[linear-gradient(180deg,_#ff5f5f_0%,_#f062c0_50%)] disabled:bg-none hover:bg-[linear-gradient(180deg,_#e35565_0%,_#d958a6_50%)]',
      link: 'bg-transparent text-theme-primary transition-colors ease-in-out duration-[0.1s] disabled:bg-transparent! disabled:text-theme-gray-500!'
    }
  }
})

export const Button = ({
  size = 'medium',
  full = false,
  variant = 'primary',
  asLink = false,
  ...props
}: ButtonConditionalProps) => {
  const propsAsLink = props as LinkProps
  const propsAsButton = props as ComponentProps<'button'>
  const classNameValues = `${button({ full, size, variant })} ${propsAsButton.className || ''}`

  return asLink ? (
    <Link {...propsAsLink} className={classNameValues}>
      {props.children}
    </Link>
  ) : (
    <button {...propsAsButton} className={classNameValues}>
      {props.children}
    </button>
  )
}
