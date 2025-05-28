'use client'
import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { useLogout } from 'hooks/useLogout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineExitToApp, MdOutlineFormatListBulleted } from 'react-icons/md'
import { tv } from 'tailwind-variants'

interface AccountLayoutProps {
  children: ReactNode
}

export const layout = tv({
  slots: {
    nav: 'flex text-center border-b border-theme-primary lg:flex-col lg:text-left lg:border-b-0 lg:items-stretch',
    link: `
      flex items-center gap-2 justify-center text-lg p-4 no-underline transition-all ease-in-out duration-300 cursor-pointer
      flex-[1] [&_svg]:size-6 lg:justify-start lg:flex-none
      lg:not-[:last-child]:border-b lg:not-[:last-child]:border-theme-gray-200
    `,
    label: 'hidden md:inline-flex'
  },
  variants: {
    active: {
      true: {
        link: '[&_svg]:fill-zinc-50 text-zinc-50 bg-theme-primary hover:bg-theme-primary/95'
      },
      false: {
        link: '[&_svg]:fill-theme-gray-950 bg-zinc-50 text-theme-gray-950 hover:bg-zinc-50/95'
      }
    }
  }
})

export default function AccountLayout({ children }: AccountLayoutProps) {
  const { logout } = useLogout()
  const { nav, link, label } = layout()
  const pathname = usePathname()
  const pageTitle =
    pathname === '/account/profile' ? 'My profile' : pathname === '/account/orders' ? 'My orders' : 'My account'

  return (
    <>
      <Container>
        <Heading level='h1' line='left' lineColor='secondary'>
          My account
        </Heading>

        <div className='mt-8 lg:grid lg:gap-6 lg:grid-cols-[300px_auto] xl:gap-10 3xl:gap-14'>
          <nav className={nav()}>
            <Link href='/account/profile' className={link({ active: pageTitle === 'My profile' })}>
              <BiUserCircle aria-hidden role='img' />
              <span className={label()}>My profile</span>
            </Link>
            <Link href='/account/orders' className={link({ active: pageTitle === 'My orders' })}>
              <MdOutlineFormatListBulleted aria-hidden role='img' />
              <span className={label()}>My orders</span>
            </Link>
            <button className={`${link({ active: false })} text-left`} onClick={logout}>
              <MdOutlineExitToApp aria-hidden role='img' />
              <span className={label()}>Logout</span>
            </button>
          </nav>
          <div>
            <div className='pt-4 bg-zinc-50'>
              <div className='px-4 md:px-6 '>
                <Heading color='black' line='bottom' size='large' className='mb-2! hidden lg:block'>
                  {pageTitle}
                </Heading>
              </div>
              <div className='p-4 lg:p-6 lg:pt-4'>{children}</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
