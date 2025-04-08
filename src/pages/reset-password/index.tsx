import { Lock } from '@styled-icons/material-outlined'
import Alert from 'components/Alert/Alert'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import * as S from 'pages/sign-in/SignInPage.styles'
import { useState, type ReactElement } from 'react'
import AuthTemplate from 'templates/Auth/Auth'
import { resetPasswordValidation } from 'utils/resetPasswordValidation'

const ResetPasswordPage = () => {
  const [values, setValues] = useState({ password: '', passwordConfirmation: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const searchParams = useSearchParams()
  const code = searchParams ? searchParams.get('code') : ''
  const [passwordChanged, setPasswordChanged] = useState(false)

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
      signIn('credentials', { email: data.user.email, password: values.password, callbackUrl: '/' })
    }
  }

  return (
    <S.FormWrapper>
      {errors.error && <Alert $variant='error'>{errors.error}</Alert>}
      {passwordChanged && <Alert $variant='success'>Password changed</Alert>}

      <form onSubmit={(e) => void handleSubmit(e)}>
        {!passwordChanged && (
          <>
            <TextField
              aria-label='Password'
              name='password'
              type='password'
              placeholder='Password'
              icon={<Lock />}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              value={values.password}
              disabled={loading}
              $errorMessage={errors.password}
            />
            <TextField
              aria-label='Confirm password'
              name='passwordConfirmation'
              type='password'
              placeholder='Confirm password'
              icon={<Lock />}
              onChange={(e) => setValues({ ...values, passwordConfirmation: e.target.value })}
              value={values.passwordConfirmation}
              disabled={loading}
              $errorMessage={errors.passwordConfirmation}
            />
          </>
        )}

        <Button $full size='large' type='submit' disabled={loading}>
          {passwordChanged ? 'Redirecting...' : loading ? 'Reseting...' : 'Reset password'}
        </Button>
      </form>
    </S.FormWrapper>
  )
}

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthTemplate title='Reset Password'>{page}</AuthTemplate>
}

export default ResetPasswordPage
