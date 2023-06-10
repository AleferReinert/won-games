import TextField from 'components/TextField'
import * as S from './styles'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Link from 'next/link'

const FormSignIn = () => {
  return (
    <S.Wrapper>
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
        <Button fullWidth size='large'>
          Sign in now
        </Button>
        <S.SignLink>
          Don&apos;t have an account?
          <Link href='/sign-up'>Sign up</Link>
        </S.SignLink>
      </form>
    </S.Wrapper>
  )
}

export default FormSignIn
