import { ComponentProps, ReactNode } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <div {...rest} className={`mx-auto w-full max-w-container px-4 ${rest.className || ''}`}>
      {children}
    </div>
  )
}
