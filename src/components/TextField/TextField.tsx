'use client'
import { ComponentProps, ReactNode } from 'react'

export interface TextFieldProps extends ComponentProps<'input'> {
  name: string
  label?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  errorMessage?: string
}

export const TextField = ({
  name,
  label,
  icon,
  iconPosition = 'left',
  disabled = false,
  errorMessage,
  ...props
}: TextFieldProps) => {
  return (
    <div className='mb-2'>
      {label && (
        <label
          className={`text-sm ${disabled ? 'cursor-not-allowed text-theme-gray-500' : 'cursor-pointer text-theme-gray-950'}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center bg-theme-gray-200 rounded-xs px-2 border mb-2 
					focus-within:shadow-[0_0_5px_theme(--color-theme-primary)]
					${disabled ? 'cursor-not-allowed' : ''} 
					${iconPosition === 'right' ? 'flex-row-reverse' : ''} 
					${errorMessage ? 'border-red-500' : 'border-theme-gray-200'}
				`}
      >
        {icon && (
          <span className='flex text-theme-gray-500 mx-2 [&_svg]:size-6  disabled:[&_svg]:fill-[blue]'>{icon}</span>
        )}
        <input
          type='text'
          disabled={disabled}
          autoComplete='off'
          name={name}
          id={name}
          {...props}
          className='text-theme-gray-950 text-base p-2 bg-transparent border-0 outline-0 w-full 
						placeholder:text-theme-gray-500 disabled:cursor-not-allowed 
						disabled:text-theme-gray-500 disabled:placeholder:text-theme-gray-500'
        />
      </div>
      {errorMessage && <span className='text-xs text-red-500'>{errorMessage}</span>}
    </div>
  )
}
