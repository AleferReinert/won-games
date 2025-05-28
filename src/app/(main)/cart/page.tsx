'use client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CartItems } from 'components/CartItems/CartItems'
import { Empty } from 'components/Empty/Empty'
import { StripePaymentForm } from 'components/StripePaymentForm/StripePaymentForm'
import { useCart } from 'hooks/useCart'
import Link from 'next/link'
import { MdOutlineInfo } from 'react-icons/md'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CartPage() {
  const { cartProducts, loading } = useCart()
  const isCartEmpty = !loading && cartProducts.length === 0

  return (
    <div data-testid='CartPage'>
      {isCartEmpty && (
        <Empty
          title='Your cart is empty'
          description='Go back to the store and explore great games and offers.'
          imgPriority
        />
      )}

      <div className='mt-8 grid gap-8 lg:gap-4 lg:grid-cols-[1fr_min-content]'>
        {!isCartEmpty && (
          <>
            <CartItems />
            <Elements stripe={stripePromise}>
              <StripePaymentForm />
            </Elements>
          </>
        )}
      </div>

      {!isCartEmpty && (
        <p className='text-theme-gray-500 text-base mt-10'>
          <MdOutlineInfo role='img' aria-hidden className='fill-theme-primary mr-2 size-6 inline-flex' />
          Your purchase is protected by a secure WON platform connection. By purchasing from our store you accept and
          agree with our{' '}
          <Link href='/' className='text-theme-primary'>
            terms of use
          </Link>
          . After completing the purchase You have the right to a refund within a maximum of 30 days, without any
          additional cost as long as the purchased game download does not occurred after your purchase.
        </p>
      )}
    </div>
  )
}
