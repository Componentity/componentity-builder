import React from 'react'
import Link from 'next/link'
import { useQuery } from 'react-query'
import AnnouncementContext from './../components/context/announcement-context'

export default function Announcement() {
  const { announcement, setAnnouncement } = React.useContext(AnnouncementContext)

  const fetchAnnouncements = () =>
    fetch('https://peaceful-ridge-63546.herokuapp.com/announcements').then((res) => res.json())

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    'announcements',
    () => fetchAnnouncements(),
    {
      keepPreviousData: true
    }
  )
  if (isLoading) {
    return <span></span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  console.log('Annoucement: ', announcement)

  return (
    announcement &&
    data.map((announcement) => (
      <div key={announcement.id} className='bg-indigo-600'>
        <div className='max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-indigo-800'>
                <svg
                  className='h-6 w-6 text-white'
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
                    d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                  />
                </svg>
              </span>
              <p className='ml-3 font-medium text-white truncate'>
                <span className='block md:inline'>{announcement.title}</span>
              </p>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <Link href={announcement.link}>
                <a className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'>
                  Learn more
                </a>
              </Link>
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                onClick={() => setAnnouncement(!announcement)}
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
              >
                <span className='sr-only'>Dismiss</span>

                <svg
                  className='h-6 w-6 text-white'
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
      </div>
    ))
  )
}
