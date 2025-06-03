'use client'
export const dynamic = 'force-dynamic'
import { Alert } from 'components/Alert/Alert'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { TextField } from 'components/TextField/TextField'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useTopLoader } from 'nextjs-toploader'
import { useEffect, useState } from 'react'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { signInValidation } from 'utils/validations/signInValidation'

export default function SignInPage() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const { start, done } = useTopLoader()

  useEffect(() => {
    loading ? start() : done()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const validationErrors = signInValidation(values)

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }

    setErrors({})

    signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl
    })
      .then((result) => {
        if (result?.error) {
          setErrors({ credentials: result.error })
          return
        } else if (result?.url) {
          window.location.href = result.url
        }
      })
      .catch((error) => console.error('catch error: ', error))
      .then(() => setLoading(false))
  }

  return (
    <>
      <Heading line='left' lineColor='secondary' color='black' level='h1' className='mt-14 mb-8'>
        Sign In
      </Heading>
      <div>
        {errors.credentials && (
          <Alert variant='error'>
            <p>{errors.credentials}</p>
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
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
          <Link href='/forgot-password' className='text-xs text-theme-gray-950 text-right mb-8 block no-underline'>
            Forgot your password?
          </Link>

          <Button full size='large' type='submit' disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
          <div className='text-sm text-theme-gray-950 text-center mt-4'>
            Don&apos;t have an account?
            <Link
              href='/sign-up'
              className='text-theme-secondary font-medium ml-2 transition-all border-b border-theme-secondary no-underline'
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
