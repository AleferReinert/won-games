import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import Link from 'next/link'
import * as S from 'pages/sign-up/sign-up.styles'
import type { ReactElement } from 'react'
import Auth from 'templates/Auth/Auth'

const SignUpPage = () => {
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
        <Button $full size='large'>
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
