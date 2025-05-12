import { Email } from '@styled-icons/material-outlined'
import Alert from 'components/Alert/Alert'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { useSearchParams } from 'next/navigation'
import * as S from 'pages/sign-in/SignInPage.styles'
import { useEffect, useState, type ReactElement } from 'react'
import AuthTemplate from 'templates/Auth/Auth'
import { forgotPasswordValidation } from 'utils/validations/forgotPasswordValidation'

const ForgotPasswordPage = () => {
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

  return success ? (
    <Alert $variant='success'>
      <p>Check your inbox! We&apos;ve sent you a reset link.</p>
    </Alert>
  ) : (
    <S.FormWrapper>
      {errors.error && (
        <Alert $variant='error'>
          <p>{errors.error}</p>
        </Alert>
      )}
      <form onSubmit={(e) => void handleSubmit(e)}>
        <TextField
          aria-label='E-mail'
          name='email'
          type='email'
          placeholder='E-mail'
          icon={<Email />}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          disabled={loading}
          $errorMessage={errors.email}
        />

        <Button $full size='large' type='submit' disabled={loading}>
          {loading ? 'Sending...' : 'Send e-mail'}
        </Button>
      </form>
    </S.FormWrapper>
  )
}

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthTemplate title='Forgot Password'>{page}</AuthTemplate>
}

export default ForgotPasswordPage
