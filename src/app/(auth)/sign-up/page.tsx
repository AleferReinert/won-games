'use client'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { Alert } from 'components/Alert/Alert'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { TextField } from 'components/TextField/TextField'
import { REGISTER_USER } from 'graphql/mutations/registerUser'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { formatApolloErrors } from 'utils/formatApolloErrors'
import { signUpValidation, SignUpValidationProps } from 'utils/validations/signUpValidation'

export default function SignUpPage() {
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
    <>
      <Heading line='left' lineColor='secondary' color='black' level='h1' className='mt-14 mb-8'>
        Sign Up
      </Heading>
      <div>
        {errors.general && (
          <Alert variant='error'>
            <p>{errors.general}</p>
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            aria-label='Full name'
            name='username'
            placeholder='Full name'
            icon={<BiUserCircle />}
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
            icon={<MdOutlineEmail />}
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
            icon={<MdOutlineLock />}
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
            icon={<MdOutlineLock />}
            onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
            value={values.confirmPassword}
            disabled={loading}
            errorMessage={errors.confirmPassword}
          />
          <Button full size='large' type='submit' disabled={loading}>
            {loading ? 'Creating account...' : 'Sign up'}
          </Button>
          <div className='text-sm text-theme-gray-950 text-center mt-4'>
            Already have an account?
            <Link
              href='/sign-in'
              className='text-theme-secondary ml-2 transition-all border-b border-theme-secondary no-underline'
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
