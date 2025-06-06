'use client'
import { CreditCard } from 'components/CreditCard/CreditCard'
import { Price, PriceProps } from 'components/Price/Price'
import { useCart } from 'hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { MdFileDownload, MdOutlineClear } from 'react-icons/md'

export interface PaymentProps {
  creditCardBrand: string
  creditCardNumber: string
  creditCardFlag: string
  purchaseDate: string
}

export interface CartItemProps extends Pick<PriceProps, 'price'> {
  id: string
  img: string
  name: string
  downloadLink?: string
  paymentInfo?: PaymentProps
  hideRemoveFromCartButton?: boolean
}

export const CartItem = ({
  id,
  img,
  name,
  price,
  downloadLink,
  paymentInfo,
  hideRemoveFromCartButton = false
}: CartItemProps) => {
  const { removeFromCart } = useCart()
  const imgSrc = process.env.STORYBOOK ? img : img

  return (
    <li data-testid='CartItemComponent' className='cursor-default list-none border-b border-theme-gray-200'>
      <div className='bg-zinc-50 p-4 md:p-6'>
        <div
          className={`grid grid-cols-[min-content_auto] grid-rows-[auto_auto] gap-2 xs:gap-4 md:grid-rows-none md:gap-6 ${paymentInfo ? 'md:grid-cols-[min-content_1fr_1fr]' : 'md:grid-cols-[min-content_1fr]'}`}
        >
          <Image
            src={img ? imgSrc : ''}
            alt={img ? name : 'Image not found'}
            width={293}
            height={138}
            className='aspect-video max-w-[94px]'
          />
          <div className='flex justify-between gap-4'>
            <div className='overflow-hidden'>
              <div className='leading-6 mb-0.5 -translate-y-1 flex justify-between gap-2 md:justify-start'>
                <h2 className='text-base overflow-hidden text-ellipsis font-bold'>{name}</h2>
              </div>
              <Price price={price} />
            </div>
            <div className='flex gap-2 items-center'>
              {downloadLink && (
                <Link
                  href={downloadLink}
                  title='Download'
                  download
                  className='fill-theme-primary inline-flex w-6 translate-y-0.5'
                >
                  <MdFileDownload role='img' aria-hidden className='fill-theme-primary size-6' />
                </Link>
              )}
              {!hideRemoveFromCartButton && (
                <button
                  type='button'
                  onClick={() => removeFromCart(id)}
                  title='Remove from cart'
                  className='size-6 cursor-pointer'
                >
                  <MdOutlineClear role='img' aria-hidden className='fill-theme-primary size-5' />
                </button>
              )}
            </div>
          </div>

          {paymentInfo && (
            <div className='text-theme-gray-500 text-sm leading-none flex max-w-fit flex-col gap-2 mt-4 md:justify-self-end col-span-2 md:mt-0 md:col-start-3 md:text-right md:gap-0 md:justify-between'>
              <div aria-label='purchase date'>{paymentInfo.purchaseDate}</div>
              {paymentInfo.creditCardNumber ? (
                <CreditCard
                  img={paymentInfo.creditCardFlag}
                  name={paymentInfo.creditCardBrand}
                  number={paymentInfo.creditCardNumber}
                  color='gray'
                  className='md:flex-row-reverse'
                />
              ) : (
                'Free'
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
