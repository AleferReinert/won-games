'use client'
import { Alert } from 'components/Alert/Alert'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { TextField } from 'components/TextField/TextField'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useTopLoader } from 'nextjs-toploader'
import { useEffect, useState } from 'react'
import { MdOutlineLock } from 'react-icons/md'
import { resetPasswordValidation } from 'utils/validations/resetPasswordValidation'

export default function ResetPasswordPage() {
  const [values, setValues] = useState({ password: '', passwordConfirmation: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const searchParams = useSearchParams()
  const code = searchParams?.get('code') || ''
  const [passwordChanged, setPasswordChanged] = useState(false)
  const { start, done } = useTopLoader()

  useEffect(() => {
    loading ? start() : done()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const validationErrors = resetPasswordValidation(values)

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }

    setErrors({})

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, ...values })
    })

    if (!response.ok) {
      setErrors({ error: 'An error occurred' })
      setLoading(false)
    }

    const data = await response.json()

    if (data.error) {
      setErrors({ error: 'Expired link' })
      setLoading(false)
    } else {
      setPasswordChanged(true)
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }
  }

  return (
    <>
      <Heading line='left' lineColor='secondary' color='black' level='h1' className='mt-14 mb-8'>
        Reset Password
      </Heading>
      <div>
        {errors.error && (
          <Alert variant='error'>
            <p>{errors.error}</p>
          </Alert>
        )}
        {passwordChanged && (
          <Alert variant='success'>
            <p>Password changed</p>
          </Alert>
        )}

        <form onSubmit={(e) => void handleSubmit(e)}>
          {!passwordChanged && (
            <>
              <TextField
                aria-label='Password'
                name='password'
                type='password'
                placeholder='Password'
                icon={<MdOutlineLock />}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                value={values.password}
                disabled={loading}
                errorMessage={errors.password}
              />
              <TextField
                aria-label='Confirm password'
                name='passwordConfirmation'
                type='password'
                placeholder='Confirm password'
                icon={<MdOutlineLock />}
                onChange={(e) => setValues({ ...values, passwordConfirmation: e.target.value })}
                value={values.passwordConfirmation}
                disabled={loading}
                errorMessage={errors.passwordConfirmation}
              />
            </>
          )}

          <Button full size='large' type='submit' disabled={loading}>
            {passwordChanged ? 'Redirecting...' : loading ? 'Reseting...' : 'Reset password'}
          </Button>
        </form>
      </div>
    </>
  )
}
