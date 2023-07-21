import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import TextField from 'components/TextField/TextField'
import Button from 'components/Button/Button'
import Link from 'next/link'
import * as S from './FormSignUp.styles'

const FormSignUp = () => {
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

export default FormSignUp
