'use client'
import { ComponentProps, useState } from 'react'

export interface CheckboxProps extends ComponentProps<'input'> {
  id: string
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelColor?: 'white' | 'black'
  value?: string | string[] | number
}

export const Checkbox = ({
  id,
  onCheck,
  isChecked = false,
  label,
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checkedStatus, setCheckedStatus] = useState(isChecked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedStatus(e.target.checked)
    onCheck?.(e.target.checked)
  }

  return (
    <div className='flex items-center mb-2'>
      <input
        type='checkbox'
        id={id}
        onChange={handleChange}
        checked={checkedStatus}
        value={value}
        {...props}
        className='input-checkbox'
      />
      {label && (
        <label
          htmlFor={id}
          className={`leading-[18px] cursor-pointer pl-2 ${labelColor === 'white' ? 'text-zinc-50' : 'text-theme-gray-950'}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
