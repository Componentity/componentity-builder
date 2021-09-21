import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import FilterContext from './../components/context/filter-context'
import ImageComponentity from './ImageComponentity'
export default function Data() {
  const { filter, setFilter } = React.useContext(FilterContext)

  const [start, setStart] = useState(0)
  const limit = 9

  const fetchProjects = (filter) =>
    fetch('https://peaceful-ridge-63546.herokuapp.com/components' + filter).then((res) =>
      res.json()
    )

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    ['projects', filter],
    () => fetchProjects(filter),
    { keepPreviousData: true }
  )

  let currentPage = start == 0 ? 1 : (start - 1) / limit + 1

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((project) => (
            <div key={project.id} className='PRODUCT group relative mb-3'>
              <div className='border-4 border-white hover: border-indigo-600 p-1 w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
                <ImageComponentity
                  alt={project.image.formats.thumbnail.name}
                  src={project.image.formats.thumbnail.url}
                />
              </div>
              <div className='mt-4 text-left'>
                <h3 className='text-sm text-gray-700 uppercase font-semibold'>
                  <p>{project.name}</p>
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='bg-white py-3 flex items-center justify-end border-t border-gray-200'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <button
              onClick={() => setStart((old) => Math.max(old - limit, 0))}
              disabled={start === 0}
              className='disabled:cursor-not-allowed relative flex items-center justify-center inline-flex items-center px-2 py-2 rounded-l-md border-2 border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Prev</span>
            </button>
            <button
              disabled={true}
              aria-current='page'
              className='disabled:cursor-not-allowed z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium'
            >
              {currentPage}
            </button>
            <button
              onClick={() => {
                if (!isPreviousData && data.hasMore) {
                  setStart((old) => old + limit)
                }
              }}
              // Disable the Next start button until we know a next start is available
              disabled={isPreviousData || !data?.hasMore}
              className='disabled:cursor-not-allowed relative inline-flex items-center px-2 py-2 rounded-r-md border-2 border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span>Next</span>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
