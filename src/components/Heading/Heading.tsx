import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

export interface HeadingProps extends ComponentProps<'h1'> {
  children: ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge'
  line?: 'left' | 'bottom'
  lineColor?: 'primary' | 'secondary'
  lineBottomSize?: 'small' | 'medium' | 'large'
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const root = tv({
  base: 'font-bold relative',
  variants: {
    color: {
      white: 'text-zinc-50',
      black: 'text-theme-gray-950'
    },
    line: {
      left: 'pl-3 border-l-[7px]',
      bottom: 'mb-8 after:absolute after:left-0 after:bottom-0 after:h-[5px] after:block!'
    },
    lineBottomSize: {
      small: 'after:w-[25px] after:h-[3px] after:-bottom-1',
      medium: 'after:w-10 after:h-1 after:-bottom-1',
      large: 'after:w-[50px] after:h-[5px] after:-bottom-2 after:hidden'
    },
    lineColor: {
      primary: 'border-l-theme-primary after:bg-theme-primary',
      secondary: 'border-l-theme-secondary after:bg-theme-secondary'
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
      xlarge: 'text-lg md:text-2xl lg:text-[28px]',
      huge: 'text-[52px]'
    }
  }
})

export const Heading = ({
  children,
  color = 'white',
  size = 'xlarge',
  line,
  lineColor = 'primary',
  lineBottomSize = 'large',
  level = 'h2',
  ...props
}: HeadingProps) => {
  const Level = level
  const rootClass = `${root({ color, line, lineBottomSize, lineColor, size })} ${props.className ?? ''}`

  return (
    <Level data-testid='HeadingComponent' className={rootClass}>
      {children}
    </Level>
  )
}
