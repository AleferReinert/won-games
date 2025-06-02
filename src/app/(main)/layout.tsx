import { Container } from 'components/Container/Container'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { fetchCompany } from 'utils/fetchCompany'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const company = await fetchCompany()

  return (
    <>
      <Container>
        <Header company={company} />
      </Container>
      <main className='flex-[1_0_auto]'>{children}</main>
      <div className='mt-10 pb-4 pt-14 bg-zinc-50 md:[clip-path:polygon(0_0,_100%_14%,_100%_100%,_0_100%)]'>
        <Container>
          <Footer company={company} />
        </Container>
      </div>
    </>
  )
}
