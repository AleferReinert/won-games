'use client'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'

interface DropdownProps {
  buttonTitle: string
  buttonContent: ReactNode
  children: ReactNode
}

const dropdown = tv({
  variants: {
    state: {
      open: 'opacity-100 pointer-events-auto translate-y-0',
      close: 'opacity-0 pointer-events-none -translate-y-1.5'
    }
  }
})

export const Dropdown = ({ buttonContent, buttonTitle, children }: DropdownProps) => {
  const [state, setState] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setState(false)
  }, [pathname])

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') setState(false)
    }
    if (state) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [state])

  return (
    <div className='flex relative'>
      <button
        title={buttonTitle}
        aria-label={buttonTitle}
        onClick={() => setState(!state)}
        className={`text-zinc-50 font-medium text-base bg-transparent relative cursor-pointer rounded-sm
				${state ? 'z-40' : ''}
				`}
      >
        {buttonContent}
      </button>
      <div
        aria-hidden={!state}
        className={`${dropdown({ state: state ? 'open' : 'close' })} absolute top-full -right-[9px] mt-4 text-base ease-in-out duration-300 w-max z-40`}
      >
        <div className='border-[10px] border-transparent border-b-theme-white absolute -top-5 right-[10px] '></div>
        <div className='rounded-sm overflow-hidden bg-zinc-50'>{children}</div>
      </div>
      <div
        data-testid='DropdownOverlay'
        aria-hidden={!state}
        onClick={() => setState(false)}
        className={`${dropdown({ state: state ? 'open' : 'close' })} fixed inset-0 z-30 cursor-default! ease-in-out duration-300 bg-black/50`}
      />
    </div>
  )
}
