import { ComponentProps } from 'react'

export const Skeleton = (props: ComponentProps<'div'>) => {
  return (
    <div
      data-testid='SkeletonComponent'
      className={`${props.className || ''} min-w-2 min-h-2 bg-zinc-50 animate-pulse`}
    ></div>
  )
}
