'use client'
import { Button } from 'components/Button/Button'
import { CartDropdown } from 'components/CartDropdown/CartDropdown'
import { Logo } from 'components/Logo/Logo'
import { MenuMobile } from 'components/MenuMobile/MenuMobile'
import { Skeleton } from 'components/Skeleton/Skeleton'
import { UserDropdown } from 'components/UserDropdown/UserDropdown'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { RiMenu2Fill } from 'react-icons/ri'
import { CompanyProps } from 'utils/fetchCompany'

export interface HeaderProps {
  hideCartDropdown?: boolean
  hideUserDropdown?: boolean
  company: CompanyProps
}

export const Header = ({ hideCartDropdown = false, hideUserDropdown = false, company }: HeaderProps) => {
  const [menuMobile, setMenuMobile] = useState(false)
  const { status } = useSession()
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  useEffect(() => setShowSearch(false), [pathname])

  function handleShowSearch() {
    if (!showSearch) {
      searchInputRef.current ? (searchInputRef.current.value = '') : ''
      searchInputRef.current?.focus()
    }
    setShowSearch(!showSearch)
  }

  function searchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (searchInputRef.current?.value) {
      const currentParams = new URLSearchParams(window.location.search)
      currentParams.set('search', searchInputRef.current.value)
      router.push(`/explore?${currentParams.toString()}`)
    }
    searchInputRef.current?.blur()
    setShowSearch(false)
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' }
  ]

  return (
    <header className='flex items-center py-6 justify-between relative z-20 '>
      <button
        onClick={() => setMenuMobile(true)}
        title='Open menu'
        aria-label='Open menu'
        className='md:hidden cursor-pointer'
      >
        <RiMenu2Fill role='img' aria-hidden className='size-6 fill-zinc-50' />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 transition ease-in-out md:hidden 
				${showSearch ? 'opacity-0 scale-0' : 'opacity-100 scale-100	'}`}
      >
        <Logo width={58} variant='icon' company={company} />
      </div>

      <div className='hidden md:block'>
        <Logo width={110} company={company} />
      </div>

      <nav className='ml-6 flex max-md:hidden'>
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='group relative text-base mt-[3px] mx-6 no-underline text-center text-zinc-50'
          >
            <div className='absolute -bottom-[3px] h-[3px] bg-theme-primary group-hover:animate-grow-from-center'></div>
            {item.label}
          </Link>
        ))}
      </nav>

      <nav className='flex justify-end items-center w-full [&>*]:ml-4'>
        <div className='flex gap-4 w-full items-center justify-end'>
          <form onSubmit={searchSubmit} className='w-full flex justify-end'>
            <input
              ref={searchInputRef}
              type='search'
              placeholder='Search games...'
              autoFocus
              className={`bg-transparent z-20 border-0 border-b border-zinc-50 h-[33px] focus:outline-none
					text-zinc-50 transition-all ease-in-out duration-300 text-base placeholder:text-zinc-50 
					${showSearch ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
            />
          </form>
          <button title='Search' aria-label='Search' onClick={handleShowSearch} className='cursor-pointer'>
            <MdOutlineSearch role='img' aria-hidden className='size-6 fill-zinc-50' />
          </button>
        </div>

        {!hideCartDropdown && <CartDropdown />}

        {status === 'loading' && <Skeleton className='w-[57px] h-[30px] rounded-sm' />}
        {status === 'authenticated' && !hideUserDropdown && <UserDropdown />}
        {status === 'unauthenticated' && (
          <Button size='small' href={`/sign-in?callbackUrl=${pathname}`} asLink className='hidden! md:inline-flex!'>
            Sign in
          </Button>
        )}
      </nav>

      <MenuMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
    </header>
  )
}
