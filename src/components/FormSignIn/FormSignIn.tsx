import { Email, Lock } from '@styled-icons/material-outlined'
import TextField from 'components/TextField/TextField'
import Link from 'next/link'
import Button from 'components/Button/Button'
import * as S from './FormSignIn.styles'

const FormSignIn = () => {
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

export default FormSignIn
