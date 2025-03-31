import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import { REGISTER_USER } from 'graphql/mutations/registerUser'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import * as S from 'pages/sign-up/SignUpPage.styles'
import { useState, type ReactElement } from 'react'
import Auth from 'templates/Auth/Auth'
import { UsersPermissionsRegisterInput } from 'types/generated'

const SignUpPage = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { loading, error }] = useMutation(REGISTER_USER, {
    onError: (error) => console.error(error),
    onCompleted: () => {
      if (!error) {
        signIn('credentials', { email: values.email, password: values.password, callbackUrl: '/' })
      }
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createUser({ variables: { input: values } })

    if (error) {
      console.log(error)
    }
  }

  return (
    <S.FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name='username'
          placeholder='Name'
          icon={<AccountCircle />}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          value={values.username}
          required
          disabled={loading}
        />
        <TextField
          name='email'
          type='email'
          placeholder='E-mail'
          icon={<Email />}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          required
          disabled={loading}
        />
        <TextField
          name='password'
          type='password'
          placeholder='Password'
          icon={<Lock />}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          required
          disabled={loading}
        />
        <TextField
          name='confirm-password'
          type='password'
          placeholder='Confirm password'
          icon={<Lock />}
          disabled={loading}
        />
        <Button $full size='large' type='submit' disabled={loading}>
          {loading ? 'Creating account...' : 'Sign up now'}
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
