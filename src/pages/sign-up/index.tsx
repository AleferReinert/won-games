import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Alert from 'components/Alert/Alert'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { REGISTER_USER } from 'graphql/mutations/registerUser'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import * as S from 'pages/sign-up/SignUpPage.styles'
import { useState, type ReactElement } from 'react'
import Auth from 'templates/Auth/Auth'
import { formatApolloErrors } from 'utils/formatApolloErrors'
import { signUpValidation, SignUpValidationProps } from 'utils/signUpValidation'

const SignUpPage = () => {
  const [values, setValues] = useState<SignUpValidationProps>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  const [createUser, { error }] = useMutation(REGISTER_USER, {
    onError: (error) => {
      const formattedErrors = formatApolloErrors(error)
      setErrors(formattedErrors)
      setLoading(false)
    },
    onCompleted: () => {
      if (!error) {
        signIn('credentials', { email: values.email, password: values.password, callbackUrl: '/' })
      }
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const validationErrors = signUpValidation(values)

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }

    setErrors({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <S.FormWrapper>
      {errors.general && <Alert variant='error'>{errors.general}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          aria-label='Full name'
          name='username'
          placeholder='Full name'
          icon={<AccountCircle />}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          value={values.username}
          disabled={loading}
          errorMessage={errors.username}
        />
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
        <TextField
          aria-label='Confirm password'
          name='confirmPassword'
          type='password'
          placeholder='Confirm password'
          icon={<Lock />}
          onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
          value={values.confirmPassword}
          disabled={loading}
          errorMessage={errors.confirmPassword}
        />
        <Button $full size='large' type='submit' disabled={loading}>
          {loading ? 'Creating account...' : 'Sign up'}
        </Button>
        <S.FormLink>
          Already have an account?
          <Link href='/sign-in'>Sign in</Link>
        </S.FormLink>
      </form>
    </S.FormWrapper>
  )
}

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <Auth title='Sign Up'>{page}</Auth>
}

export default SignUpPage
