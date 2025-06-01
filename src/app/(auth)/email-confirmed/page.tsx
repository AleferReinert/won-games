'use client'
import { Alert } from 'components/Alert/Alert'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { setStorageItem } from 'utils/localStorage'

export default function EmailConfirmedPage() {
  setStorageItem('cartProducts', [])

  return (
    <>
      <Heading line='left' lineColor='secondary' color='black' level='h1' className='mt-14 mb-8'>
        Thank&apos;s for register
      </Heading>
      <Alert variant='success'>
        <p>Your e-mail has been confirmed.</p>
      </Alert>
      <Button asLink href='/sign-in' full size='large' className='mt-8'>
        Sign in
      </Button>
    </>
  )
}
