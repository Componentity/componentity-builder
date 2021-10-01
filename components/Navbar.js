import { useState } from 'react'
import Link from 'next/link'
import CheckboxList from './skeleton/checkboxlist'
import { useQuery } from 'react-query'
import ImageComponentity from './ImageComponentity'
export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false)
  const [open, setOpen] = useState(false)
  function toggle() {
    setIsShowing(!isShowing)
  }

  function toggleOpen() {
    setOpen(!open)
    console.log('OPEN: ', open)
  }

  const fetchNavs = () =>
    fetch('https://peaceful-ridge-63546.herokuapp.com/header').then((res) => res.json())

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    'navbar',
    () => fetchNavs(),
    {
      keepPreviousData: true
    }
  )
  if (isLoading) {
    return (
      <div className='bg-gray-100 py-4'>
        <div className='max-w-screen-xl px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 gap-8 mx-auto'>
          <CheckboxList />
          <div className='flex flex-col gap-y-2'>
            <CheckboxList />
            <CheckboxList />
          </div>
          <div className='hidden md:flex flex-col gap-y-2'>
            <CheckboxList />
            <CheckboxList />
          </div>
          <div className='hidden md:flex flex-col gap-y-2'>
            <CheckboxList />
            <CheckboxList />
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='block flex items-center justify-center bg-gray-700 text-red-600 font-semibold'>
        Error: {error.message}
      </div>
    )
  }

  console.log('DATA: ', data)

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href={'/'}>
              <a>
                <span className='sr-only'>Componentity</span>
                <ImageComponentity
                  src={data.Logo.formats.thumbnail.url}
                  alt='COMPONENTITY LOGO'
                  classes='w-52 h-10'
                />
              </a>
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {data.navlinks.map((link) => {
                  return (
                    <Link key={link.id} href={link.href}>
                      <a
                        className='bg-gray-900 text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
                        aria-current='page'
                      >
                        {link.title}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-3 relative'>
              <button
                onClick={() => toggle()}
                type='button'
                className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                id='user-menu-button'
                aria-expanded='false'
                aria-haspopup='true'
              >
                <span className='sr-only'>Open user menu</span>
                <img
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </button>
              {isShowing && <UserMenu />}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => toggleOpen()}
              type='button'
              className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className='md:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {data.navlinks.map((link) => {
              return (
                <Link key={link.id} href={link.href}>
                  <a
                    className='bg-gray-900 hover:bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium'
                    aria-current='page'
                  >
                    {link.title}
                  </a>
                </Link>
              )
            })}
          </div>
          <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='flex items-center px-5'>
              <div className='flex-shrink-0'>
                <img
                  className='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </div>
              <div className='ml-3'>
                <div className='text-base font-medium leading-none text-white'>Tom Cook</div>
                <div className='text-sm font-medium leading-none text-gray-400'>
                  tom@example.com
                </div>
              </div>
              <button
                type='button'
                className='ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
            </div>
            <div className='mt-3 px-2 space-y-1'>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
              >
                Your Profile
              </a>

              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
              >
                Settings
              </a>

              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const UserMenu = () => {
  return (
    <div
      className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
      role='menu'
      aria-orientation='vertical'
      aria-labelledby='user-menu-button'
    >
      <a
        href='#'
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
        role='menuitem'
        id='user-menu-item-0'
      >
        Your Profile
      </a>

      <a
        href='#'
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
        role='menuitem'
        id='user-menu-item-1'
      >
        Settings
      </a>

      <a
        href='#'
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
        role='menuitem'
        id='user-menu-item-2'
      >
        Sign out
      </a>
    </div>
  )
}
