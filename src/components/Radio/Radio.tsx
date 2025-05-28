import { ComponentProps } from 'react'

type RadioValue = string | string[] | number

export interface RadioProps extends ComponentProps<'input'> {
  id: string
  name: string
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
}

export const Radio = ({ id, name, onCheck, label, labelColor = 'white', value, ...props }: RadioProps) => {
  const onChange = () => {
    onCheck && onCheck(value)
  }

  return (
    <div className='flex items-center mb-2'>
      <input type='radio' id={id} onChange={onChange} value={value} name={name} {...props} className='input-radio' />
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
