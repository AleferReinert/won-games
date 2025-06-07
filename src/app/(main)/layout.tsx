import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { fetchCompany } from 'utils/fetchCompany'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const company = await fetchCompany()

  return (
    <>
      <Header company={company} />
      <main className='flex-[1_0_auto] md:mt-6'>{children}</main>
      <Footer company={company} />
    </>
  )
}
