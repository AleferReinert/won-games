'use client'
import { Heading } from 'components/Heading/Heading'
import { Loading } from 'components/Loading/Loading'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'

export default function SuccessPage() {
  const { clearCart } = useCart()
  const router = useRouter()
  const [status, setStatus] = useState<'hide' | 'show' | 'loading'>('loading')

  useEffect(() => {
    const recentPurchase = localStorage.getItem('recentPurchase')
    recentPurchase ? setStatus('show') : setStatus('hide')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (status === 'hide') {
      router.replace('/')
    } else if (status === 'show') {
      clearCart()
      localStorage.removeItem('recentPurchase')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, status])

  if (status !== 'show')
    return (
      <div className='py-28'>
        <Loading animation='spinner' className='border-r-white! size-14' />
      </div>
    )

  return (
    <div className='text-center text-zinc-50 mt-10 mb-14 lg:mt-14'>
      <Heading level='h1' className='block text-2xl! lg:text-[28px]!'>
        Your purchase was successful!
      </Heading>
      <div className='my-8 grid grid-cols-[1fr_auto_1fr] items-center gap-5 lg:gap-10 sm:px-16'>
        <div className='w-full h-[1px] max-w-[320px] bg-theme-primary justify-self-end'></div>
        <div className='relative'>
          <div className='bg-theme-primary/20 animate-pulse rounded-full size-16 sm:size-18 lg:size-[88px]'></div>
          <div className='absolute inset-2 animate-none flex justify-center items-center rounded-full bg-theme-primary'>
            <FaCheck className='size-7 sm:size-9 lg:size-11' />
          </div>
        </div>
        <div className='w-full h-[1px] max-w-[320px] bg-theme-primary'></div>
      </div>
      <p>
        Wait for your payment details by email. <br />
        Your game is now available for download{' '}
        <Link className='text-theme-primary hover:underline' href='/account/orders'>
          here
        </Link>
        .
      </p>
    </div>
  )
}
