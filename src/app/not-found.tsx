import { Container } from 'components/Container/Container'
import { Empty } from 'components/Empty/Empty'
import { Heading } from 'components/Heading/Heading'
import MainLayout from './(main)/layout'

export default function NotFoundPage() {
  return (
    <MainLayout>
      <Container>
        <Heading level='h1' line='left' lineColor='secondary'>
          Page not found
        </Heading>
        <Empty title='404' description='This page could not be found.' buttonText='Go back' buttonUrl='/' imgPriority />
      </Container>
    </MainLayout>
  )
}
