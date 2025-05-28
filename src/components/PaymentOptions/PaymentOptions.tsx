'use client'
import { Box } from 'components/Box/Box'
import { Button } from 'components/Button/Button'
import { CreditCard, CreditCardProps } from 'components/CreditCard/CreditCard'
import { Heading } from 'components/Heading/Heading'
import { Radio } from 'components/Radio/Radio'
import { useState } from 'react'
import { MdOutlineAdd, MdOutlineShoppingCart } from 'react-icons/md'

export interface PaymentOptionsProps {
  creditCards?: CreditCardProps[]
  handlePayment: () => void
}

export const PaymentOptions = ({ creditCards, handlePayment }: PaymentOptionsProps) => {
  const [selectedCreditCard, setSelectedCreditCard] = useState(0)

  return (
    <form data-testid='PaymentOptionsComponent' className='bg-zinc-50 max-h-min max-w-[390px]'>
      <Box>
        <Heading size='large' color='black' line='bottom' lineBottomSize='small'>
          Payment
        </Heading>
        <ul className='flex flex-col'>
          {creditCards?.map((creditCard, index) => (
            <li key={creditCard.number}>
              <label
                title={creditCard.name}
                onClick={() => setSelectedCreditCard(index)}
                className='bg-theme-gray-200 p-4 flex justify-between mb-2 ease-in-out duration-100 hover:bg-theme-gray-300'
              >
                <CreditCard img={creditCard.img} name={creditCard.name} number={creditCard.number} />
                <div className='flex justify-end col-start-3 row-start-1'>
                  <Radio checked={index === selectedCreditCard} id={'creditCard' + index} name='creditCard' />
                </div>
              </label>
            </li>
          ))}
        </ul>
        <button className='bg-theme-gray-200 p-4 text-base flex w-full'>
          <MdOutlineAdd role='img' aria-hidden className='size-6 mr-2' /> Add new credit card
        </button>
      </Box>

      <div className='bg-theme-gray-100 p-4 flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between md:p-6'>
        <Button variant='link' asLink href='/explore' className='px-0 w-full md:w-1/2'>
          Continue shopping
        </Button>
        <Button
          disabled={creditCards === undefined || creditCards.length === 0}
          onClick={handlePayment}
          className='px-0 w-full md:w-1/2'
        >
          <MdOutlineShoppingCart role='img' aria-hidden />
          Buy now
        </Button>
      </div>
    </form>
  )
}
