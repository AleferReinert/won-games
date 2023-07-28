import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { Email, Lock } from '@styled-icons/material-outlined'
import Auth from 'templates/Auth/Auth'
import Button from 'components/Button/Button'
import Link from 'next/link'
import TextField from 'components/TextField/TextField'
import * as S from './SignIn.styles'

const SignInPage: NextPageWithLayout = () => {
  return (
    <S.FormWrapper>
      <form>
        <TextField
          name='email'
          type='email'
          placeholder='E-mail'
          icon={<Email />}
        />
        <TextField
          name='password'
          type='password'
          placeholder='Password'
          icon={<Lock />}
        />
        <S.ForgotPassword href='/link'>Forgot your password?</S.ForgotPassword>
        <Button full size='large'>
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
