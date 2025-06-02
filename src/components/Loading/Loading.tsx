import { ComponentProps } from 'react'

export interface LoadingProps extends ComponentProps<'div'> {
  animation?: 'dots' | 'spinner'
  inline?: boolean
}

export const Loading = ({ animation = 'dots', inline, ...props }: LoadingProps) => {
  const customStyles = props.className || ''

  return (
    <div
      data-testid='LoadingComponent'
      className={`flex w-full justify-center items-center ${inline ? 'w-fit' : 'w-full h-full'}`}
    >
      {animation === 'dots' && (
        <div className='flex gap-1'>
          <div className={`${customStyles} size-2.5 rounded-full bg-white animate-[pulse_0.8s_infinite]`}></div>
          <div
            className={`${customStyles} size-2.5 rounded-full bg-white animate-[pulse_0.8s_infinite] [animation-delay:100ms]`}
          ></div>
          <div
            className={`${customStyles} size-2.5 rounded-full bg-white animate-[pulse_0.8s_infinite] [animation-delay:200ms]`}
          ></div>
        </div>
      )}

      {animation === 'spinner' && (
        <div
          className={`${customStyles} animate-spin size-10 border-[3px] rounded-full border-zinc-50/25 border-r-theme-white`}
        />
      )}
    </div>
  )
}
