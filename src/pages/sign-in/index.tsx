import { Email, Lock } from '@styled-icons/material-outlined'
import Alert from 'components/Alert/Alert'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from 'pages/sign-in/SignInPage.styles'
import { useState, type ReactElement } from 'react'
import Auth from 'templates/Auth/Auth'
import { signInValidation } from 'utils/signInValidation'

const SignInPage = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const { push, query } = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const validationErrors = signInValidation(values)

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }

    setErrors({})

    signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: typeof query.callbackUrl === 'string' ? query.callbackUrl : '/'
    })
      .then((result) => {
        if (result?.error) {
          setErrors({ credentials: result.error })
          return
        } else if (result?.url) {
          return push(result.url)
        }
      })
      .catch((error) => console.error('catch error: ', error))
      .then(() => setLoading(false))
  }

  return (
    <S.FormWrapper>
      {errors.credentials && <Alert variant='error'>{errors.credentials}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          aria-label='E-mail'
          name='email'
          type='email'
          placeholder='E-mail'
          icon={<Email />}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          disabled={loading}
          errorMessage={errors.email}
        />
        <TextField
          aria-label='Password'
          name='password'
          type='password'
          placeholder='Password'
          icon={<Lock />}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          disabled={loading}
          errorMessage={errors.password}
        />
        <S.ForgotPassword href='/todo'>Forgot your password?</S.ForgotPassword>

        <Button $full size='large' type='submit' disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
        <S.FormLink>
          Don&apos;t have an account?
          <Link href='/sign-up'>Sign up</Link>
        </S.FormLink>
      </form>
    </S.FormWrapper>
  )
}

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <Auth title='Sign In'>{page}</Auth>
}

export default SignInPage
