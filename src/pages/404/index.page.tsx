import Container from 'components/Container/Container'
import Empty from 'components/Empty/Empty'
import Heading from 'components/Heading/Heading'
import type { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'

const NotFoundPage = () => {
  return (
    <Container>
      <Heading as='h1' $line='left' $lineColor='secondary'>
        Page not found
      </Heading>
      <Empty title='404' $description='This page could not be found.' buttonText='Go back' buttonUrl='/' imgPriority />
    </Container>
  )
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}

export default NotFoundPage
