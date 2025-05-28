'use client'
import { Alert } from 'components/Alert/Alert'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { TextField } from 'components/TextField/TextField'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { forgotPasswordValidation } from 'utils/validations/forgotPasswordValidation'

export default function ForgotPasswordPage() {
  const searchParams = useSearchParams()
  const email = searchParams?.get('email') || ''
  const [values, setValues] = useState({ email: email })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setValues({ email })
  }, [email])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const validationErrors = forgotPasswordValidation(values)

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }
    setErrors({})

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: values.email })
    })

    if (!response.ok) {
      setErrors({ error: 'An error occurred' })
      setLoading(false)
    }

    const data = await response.json()

    if (!data.ok) {
      setErrors({ error: 'An error occurred' })
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <>
      <Heading line='left' lineColor='secondary' color='black' level='h1' className='mt-14 mb-8'>
        Forgot Password
      </Heading>
      {success ? (
        <Alert variant='success'>
          <p>Check your inbox! We&apos;ve sent you a reset link.</p>
        </Alert>
      ) : (
        <div>
          {errors.error && (
            <Alert variant='error'>
              <p>{errors.error}</p>
            </Alert>
          )}
          <form onSubmit={(e) => void handleSubmit(e)}>
            <TextField
              aria-label='E-mail'
              name='email'
              type='email'
              placeholder='E-mail'
              icon={<MdOutlineEmail />}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              value={values.email}
              disabled={loading}
              errorMessage={errors.email}
            />

            <Button full size='large' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send e-mail'}
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
