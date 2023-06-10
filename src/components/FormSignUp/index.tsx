import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Link from 'next/link'

const FormSignUp = () => {
  return (
    <FormWrapper>
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
        <Button fullWidth size='large'>
          Sign up now
        </Button>
        <FormLink>
          Already have an account?
          <Link href='/sign-in'>Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
