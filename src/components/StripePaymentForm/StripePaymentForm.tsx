'use client'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { Alert } from 'components/Alert/Alert'
import { Box } from 'components/Box/Box'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { Loading } from 'components/Loading/Loading'
import { Skeleton } from 'components/Skeleton/Skeleton'
import { useCart } from 'hooks/useCart'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const StripePaymentForm = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const { cartProducts, loading: cartLoading } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const [clientSecret, setClientSecret] = useState('')
  const [allProductsFree, setAllProductsFree] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    if (cartProducts.length) {
      const createPaymentIntentUrl = process.env.NEXT_PUBLIC_API_URL + '/api/orders/create-payment-intent'
      fetch(createPaymentIntentUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.jwt}`
        },
        body: JSON.stringify({ cart: cartProducts.map((product) => ({ id: product.id })) })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error.message)
            return
          } else if (data.freeProducts) {
            setAllProductsFree(true)
            setButtonDisabled(false)
            return
          } else {
            setAllProductsFree(false)
            setClientSecret(data.client_secret)
          }
        })
    }
  }, [cartProducts, session?.jwt])

  const handleChange = (event: StripeCardElementChangeEvent) => {
    setError(event?.error?.message ?? null)
    setButtonDisabled(!event?.complete)
  }

  function getTotalInCents() {
    const total = cartProducts.reduce((acc, product) => {
      return acc + product.price
    }, 0)
    const total_in_cents = Math.round(total * 100)
    return total_in_cents
  }

  async function createOrder(paymentIntent?: PaymentIntent) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.jwt}`
      },
      body: JSON.stringify({
        user: session?.id,
        total_in_cents: getTotalInCents(),
        paymentIntentId: paymentIntent?.id ?? null,
        paymentMethod: paymentIntent?.payment_method ?? null,
        cart: cartProducts.map((product) => ({ id: product.id }))
      })
    })
    router.push('/success')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setButtonDisabled(true)

    if (allProductsFree) {
      createOrder()
    }

    if (!stripe || !elements) {
      return
    }

    if (!allProductsFree) {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!
        }
      })
      if (error) {
        setError(error.message ?? 'An error occurred')
      } else {
        setError(null)
        createOrder(paymentIntent)
      }
    }
    setLoading(false)
  }

  return (
    <form
      data-testid='PaymentOptionsComponent'
      onSubmit={(e) => void handleSubmit(e)}
      className='bg-zinc-50 lg:max-w-[390px] h-fit'
    >
      <Box>
        {cartLoading || allProductsFree == null ? (
          <Skeleton className='w-[83px] h-[28px] bg-black/20! rounded-sm mb-6' />
        ) : (
          <Heading size='large' color='black' line='bottom' lineBottomSize='small' className='mb-6!'>
            Payment
          </Heading>
        )}

        {cartLoading || allProductsFree == null ? (
          <div className='py-2'>
            <Skeleton className='lg:min-w-[342px] h-[43px] bg-black/20! rounded-sm' />
          </div>
        ) : (
          <>
            {allProductsFree ? (
              <Alert variant='success'>
                <p>No payment required.</p>
              </Alert>
            ) : (
              <Alert variant='info' size='small'>
                <p>
                  <strong>Atenção!</strong>
                </p>
                <ul>
                  <li>Este site é apenas uma demonstração</li>
                  <li>Não serão realizadas transações reais</li>
                  <li>Os pagamentos são apenas simulados</li>
                  <li>Não use um cartão de crédito real</li>
                </ul>
              </Alert>
            )}
          </>
        )}

        {allProductsFree != null && !allProductsFree && (
          <div className='bg-theme-gray-200 rounded-xs p-4 border border-theme-gray-200 text-theme-gray-950 text-base focus-within:shadow-[0_0_5px_theme(--color-theme-primary)]'>
            <CardElement options={{ hidePostalCode: true, disableLink: true }} onChange={handleChange} />
          </div>
        )}
        {error && (
          <Alert variant='error' size='small' hideBorderLeft>
            <p>{error}</p>
          </Alert>
        )}
      </Box>

      <div className='bg-theme-gray-100 p-4 flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between md:p-6'>
        {cartLoading ? (
          <div className='flex gap-4 w-full'>
            <Skeleton className='w-1/2 h-10 bg-black/20! rounded-sm' />
            <Skeleton className='w-1/2 h-10 bg-black/20! rounded-sm' />
          </div>
        ) : (
          <>
            <Button variant='link' asLink href='/explore' className='w-full whitespace-nowrap px-0 md:w-1/2'>
              Continue shopping
            </Button>
            <Button type='submit' disabled={buttonDisabled} className='w-full whitespace-nowrap px-0 md:w-1/2'>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <MdOutlineShoppingCart role='img' aria-hidden />
                  {allProductsFree ? 'Get for free' : 'Buy now'}
                </>
              )}
            </Button>
          </>
        )}
      </div>
    </form>
  )
}
