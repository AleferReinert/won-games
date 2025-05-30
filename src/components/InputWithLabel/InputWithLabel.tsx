import { ComponentProps } from 'react'
import { FaCheck } from 'react-icons/fa'
import { tv } from 'tailwind-variants'

export interface InputWithLabelProps extends ComponentProps<'input'> {
  label: string
  type: 'checkbox' | 'radio'
}

const inputWithLabel = tv({
  slots: {
    input: `transition cursor-pointer flex items-center justify-center size-[18px]
			appearance-none border-2 border-theme-gray-800 rounded-xs relative
			checked:border-theme-primary focus-visible:border-theme-primary/40 focus-visible:outline-none`,
    icon: 'size-2 absolute left-[5px] top-[5px] z-10 transition duration-300 ease-in-out',
    label: `text-theme-gray-950 lg:text-zinc-50 leading-[18px] cursor-pointer transition pl-2 
			hover:text-theme-primary`
  },
  variants: {
    type: {
      checkbox: {
        input: 'checked:bg-theme-primary',
        icon: 'fill-white'
      },
      radio: {
        input: 'rounded-full',
        icon: 'bg-theme-primary rounded-full'
      }
    },
    checked: {
      false: {
        icon: 'scale-0'
      },
      true: {
        icon: 'scale-100'
      }
    }
  }
})

export const InputWithLabel = ({ label, type, ...props }: InputWithLabelProps) => {
  return (
    <div className='flex items-center mb-2 relative'>
      {type === 'checkbox' && <FaCheck className={inputWithLabel({ type, checked: props.checked }).icon()} />}
      {type === 'radio' && <div className={inputWithLabel({ type, checked: props.checked }).icon()} />}

      <input type={type} {...props} className={inputWithLabel({ type }).input()} />

      <label htmlFor={props.id} className={inputWithLabel().label()}>
        {label}
      </label>
    </div>
  )
}
