import Data from './data'
import React, { useState } from 'react'
import FilterContext from './../components/context/filter-context'
import FilterPlans from './FilterPlans'
import FilterFrameworks from './FilterFrameworks'
import FilterSections from './FilterSections'

export default function ComponentsFilter({ addonFilter = '' }) {
  const [closed, setClosed] = useState(true)

  const [filter, setFilter] = useState({
    filter: `?_limit=2&_start=0${addonFilter}`,
    start: 0,
    currentPage: 1
  })
  const filterValue = { filter, setFilter }

  return (
    <FilterContext.Provider value={filterValue}>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-y-10'>
        <div className='lg:col-span-2 flex flex-col'>
          <button
            onClick={() => setClosed(!closed)}
            className='flex justify-between items-center md:hidden px-4 py-2 shadow-sm rounded-md border-2 hover:border-indigo-600 mb-4'
          >
            <span>Filter Components</span>
            <svg
              className={` ${
                !closed && 'transform rotate-180'
              } text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div className={`${closed && 'hidden'} px-2 md:px-0 md:block`}>
            <FilterPlans />
            <FilterFrameworks />
            <FilterSections />
          </div>
        </div>
        <div className='lg:col-span-10'>
          <div className=''>
            <Data />
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  )
}
