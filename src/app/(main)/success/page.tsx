'use client'
import { Heading } from 'components/Heading/Heading'
import { useCart } from 'hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function SuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='text-center text-zinc-50 mb-14'>
      <Heading level='h1' className='block'>
        Your purchase was successful!
      </Heading>
      <Image src='/img/success-checked.svg' width={100} height={100} alt='' aria-hidden className='my-8 inline' />
      <p>
        Save your payment details by email. <br />
        Your game is now available for download{' '}
        <Link className='text-theme-primary hover:underline' href='/account/orders'>
          here
        </Link>
        .
      </p>
    </div>
  )
}
