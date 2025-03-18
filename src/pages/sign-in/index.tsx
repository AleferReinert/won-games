import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import Link from 'next/link'
import * as S from 'pages/sign-in/SignInPage.styles'
import type { ReactElement } from 'react'
import Auth from 'templates/Auth/Auth'

const SignInPage = () => {
  return (
    <S.FormWrapper>
      <form>
        <TextField name='email' type='email' placeholder='E-mail' icon={<Email />} />
        <TextField name='password' type='password' placeholder='Password' icon={<Lock />} />
        <S.ForgotPassword href='/todo'>Forgot your password?</S.ForgotPassword>
        <Button $full size='large' type='submit'>
          Sign in now
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
