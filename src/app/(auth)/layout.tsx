import { Heading } from 'components/Heading/Heading'
import { Logo } from 'components/Logo/Logo'
import Image from 'next/image'
import { fetchCompany } from 'utils/fetchCompany'
import './../globals.css'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const company = await fetchCompany()
  const currentYear = new Date().getFullYear()

  return (
    <div className='lg:grid lg:grid-cols-[1fr_1fr]'>
      <section data-testid='bannerBlock' className='hidden relative h-full lg:block'>
        <div className='absolute inset-0 bg-theme-gray-950/85 z-10'></div>
        <Image
          src='/img/authentication-bg.jpg'
          alt=''
          aria-hidden
          fill
          data-testid='AuthBackgroundImage'
          priority
          sizes={'(max-width: 1024px) 512px, (max-width: 1280px) 640px, (max-width: 1366px) 683px, 768px'}
        />
        <div className='relative z-10 grid justify-between h-full px-14 pt-14 pb-6'>
          <Logo width={126} company={company} />
          <div>
            <Heading size='huge' className='leading-[1.1] mb-4'>
              All your favorites games in one place
            </Heading>
            <p className='text-zinc-50 font-light text-xl '>
              <strong className='text-theme-primary'>WON</strong> is the best and most complete gaming platform.
            </p>
          </div>
          <footer className='text-center text-xs text-zinc-50 self-end mt-6'>
            <p>
              {company.name} {currentYear} © All rights reserved.
            </p>
          </footer>
        </div>
      </section>
      <main className='bg-zinc-50 p-6 grid items-center min-h-screen'>
        <div className='max-w-[380px] w-full mx-auto'>
          <Logo width={200} variant='dark' company={company} className='mx-auto block' />
          {children}
        </div>
      </main>
    </div>
  )
}
