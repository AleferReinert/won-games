'use client'
import { Button } from 'components/Button/Button'
import { useLogout } from 'hooks/useLogout'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ComponentProps, Dispatch, SetStateAction } from 'react'
import { MdOutlineClose } from 'react-icons/md'

interface MenuMobileProps extends ComponentProps<'div'> {
  menuMobile: boolean
  setMenuMobile: Dispatch<SetStateAction<boolean>>
}

export const MenuMobile = ({ menuMobile, setMenuMobile }: MenuMobileProps) => {
  const { status } = useSession()
  const { logout } = useLogout()
  const closeMenu = () => setMenuMobile(false)
  const menuLinkStyles = 'relative text-theme-gray-950 font-semibold text-xl ease-in-out duration-300 no-underline'

  return (
    <div
      aria-label='Menu mobile'
      aria-hidden={!menuMobile}
      inert={!menuMobile}
      data-testid='MenuMobileComponent'
      className={`transition-opacity ease-in-out duration-300 bg-zinc-50 fixed inset-0 overflow-hidden flex flex-col justify-between z-20 ${menuMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <button
        aria-label='Close menu'
        title='Close menu'
        onClick={() => setMenuMobile(false)}
        className='absolute top-0 right-0 p-4 leading-0 cursor-pointer'
      >
        <MdOutlineClose role='img' aria-hidden className='size-6' />
      </button>

      <nav className='flex items-center justify-center flex-col flex-1 gap-6 pt-[33px]'>
        <Link href='/' onClick={closeMenu} className={menuLinkStyles}>
          Home
        </Link>
        <Link href='/explore' onClick={closeMenu} className={menuLinkStyles}>
          Explore
        </Link>
        {status === 'authenticated' && (
          <>
            <Link href='/account/profile' onClick={closeMenu} className={menuLinkStyles}>
              My account
            </Link>
            <Link href='/wishlist' onClick={closeMenu} className={menuLinkStyles}>
              Wishlist
            </Link>
            <Link href='/' onClick={logout} className={menuLinkStyles}>
              Logout
            </Link>
          </>
        )}
      </nav>

      {status === 'unauthenticated' && (
        <div className='text-center pb-10'>
          <div>
            <Button size='large' asLink href='/sign-in' onClick={closeMenu} full className='max-w-[280px]'>
              Log in
            </Button>
          </div>
          <div className='mt-4 -mb-2 text-sm'>or</div>
          <div>
            <Button variant='link' size='large' asLink href='/sign-up' onClick={closeMenu} className='underline'>
              Sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
