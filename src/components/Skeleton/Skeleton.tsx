import { ComponentProps } from 'react'

export const Skeleton = (props: ComponentProps<'div'>) => {
  return (
    <div
      data-testid='SkeletonComponent'
      className={`${props.className || ''} min-w-6 min-h-6 bg-zinc-50 animate-pulse`}
    ></div>
  )
}
