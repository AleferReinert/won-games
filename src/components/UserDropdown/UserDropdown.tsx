'use client'
import { Dropdown } from 'components/Dropdown/Dropdown'
import { useLogout } from 'hooks/useLogout'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { BiChevronDown, BiExit, BiHeart, BiUserCircle } from 'react-icons/bi'
import { useWishlist } from '../../hooks/useWishlist'

export const UserDropdown = () => {
  const { products } = useWishlist()
  const { data: session } = useSession()
  const { logout } = useLogout()
  const firstName = session?.user?.name?.split(' ')[0]
  const linkStyles =
    'gap-3.5 flex p-5 text-theme-gray-950 w-full transition-all duration-300 no-underline leading-5 border-b border-theme-gray-200 cursor-pointer hover:bg-black/5'

  return (
    <div data-testid='UserDropdownComponent' className='hidden leading-0 [&_button]:flex md:block'>
      <Dropdown
        buttonContent={
          <>
            <BiUserCircle aria-hidden className='size-6 -mb-[1px] fill-zinc-50' />
            <div className='mx-2.5 whitespace-nowrap'>{firstName}</div>
            <BiChevronDown aria-hidden role='img' className='size-6 -mb-[1px] fill-zinc-50' />
          </>
        }
        buttonTitle='My account'
      >
        <nav className='text-left'>
          <Link href='/account/profile' className={linkStyles}>
            <BiUserCircle aria-hidden className='size-[22px]' />
            My account
          </Link>
          <Link href='/wishlist' className={linkStyles}>
            <BiHeart aria-hidden className='size-[22px]' />
            Wishlist ({products.length})
          </Link>
          <button className={linkStyles} onClick={logout}>
            <BiExit aria-hidden className='size-[22px]' />
            Logout
          </button>
        </nav>
      </Dropdown>
    </div>
  )
}
