import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Auth from 'templates/Auth/Auth'
import Button from 'components/Button/Button'
import Link from 'next/link'
import TextField from 'components/TextField/TextField'
import * as S from './SignUp.styles'

const SignUpPage: NextPageWithLayout = () => {
  return (
    <S.FormWrapper>
      <form>
        <TextField name='name' placeholder='Name' icon={<AccountCircle />} />
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
        <TextField
          name='confirm-password'
          type='password'
          placeholder='Confirm password'
          icon={<Lock />}
        />
        <Button full size='large'>
          Sign up now
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
