import { ReactNode } from 'react'

export interface ProductDetailsItemProps {
  title: string
  children: ReactNode
}

export const ProductDetailsItem = ({ title, children }: ProductDetailsItemProps) => {
  return (
    <dl>
      <dt className='text-theme-gray-500 text-sm font-normal'>{title}</dt>
      <dd className='text-zinc-50 text-base'>{children}</dd>
    </dl>
  )
}
