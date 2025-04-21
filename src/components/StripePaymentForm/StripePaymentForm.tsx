import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ShoppingCart } from '@styled-icons/material-outlined'
import Alert from 'components/Alert/Alert'
import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Heading from 'components/Heading/Heading'
import { Loading } from 'components/Loading/Loading'
import { useCart } from 'hooks/useCart'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './StripePaymentForm.styles'

const StripePaymentForm = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const { cartProducts } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const [clientSecret, setClientSecret] = useState('')
  const [allProductsFree, setAllProductsFree] = useState(false)
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
          // @ts-expect-error todo: fix
          Authorization: `Bearer ${session.jwt}`
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
    // @ts-expect-error todo: fix
  }, [cartProducts, session.jwt])

  const handleChange = (event: StripeCardElementChangeEvent) => {
    setError(event?.error?.message ?? null)
    setButtonDisabled(!event?.complete)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setButtonDisabled(true)

    if (!stripe || !elements) {
      return
    }

    if (allProductsFree) {
      router.push('/success')
    } else {
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!
        }
      })
      if (error) {
        setError(error.message ?? 'An error occurred')
      } else {
        setError(null)
        router.push('/success')
      }
    }
    setLoading(false)
  }

  return (
    <S.Wrapper data-testid='PaymentOptionsComponent' onSubmit={(e) => void handleSubmit(e)}>
      <Box>
        <Heading size='large' color='black' $line='bottom' $lineBottomSize='small'>
          Payment
        </Heading>
        {allProductsFree ? (
          <Alert $variant='success'>No payment required.</Alert>
        ) : (
          <S.CardWrapper>
            <CardElement options={{ hidePostalCode: true, disableLink: true }} onChange={handleChange} />
          </S.CardWrapper>
        )}
        {error && (
          <Alert $variant='error' $size='small' $hideBorderLeft>
            {error}
          </Alert>
        )}
      </Box>

      <S.Buttons>
        <Button $variant='link' asLink href='/products'>
          Continue shopping
        </Button>
        <Button type='submit' disabled={buttonDisabled}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <ShoppingCart role='img' aria-hidden />
              {allProductsFree ? 'Get for free' : 'Buy now'}
            </>
          )}
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default StripePaymentForm
