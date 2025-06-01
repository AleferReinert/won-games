import { Alert } from 'components/Alert/Alert'
import { Heading } from 'components/Heading/Heading'

export default function ConfirmYourEmailPage() {
  return (
    <>
      <Heading line='left' lineColor='secondary' color='black' level='h1' className='mt-14 mb-8'>
        Almost there
      </Heading>
      <Alert variant='success'>
        <p>Please confirm your email address using the link we just sent to your e-mail.</p>
      </Alert>
    </>
  )
}
