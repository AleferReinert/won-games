'use client'
import { Heading } from 'components/Heading/Heading'
import { Loading } from 'components/Loading/Loading'
import { useCart } from 'hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
