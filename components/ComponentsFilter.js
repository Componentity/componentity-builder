import Data from './data'
import React, { useState } from 'react'
import FilterContext from './../components/context/filter-context'
import FilterTypes from './FilterTypes'
import FilterFrameworks from './FilterFrameworks'
import FilterSections from './FilterSections'

export default function ComponentsFilter({ defaultFilter = '?_limit=2&_start=0' }) {
  const [filter, setFilter] = useState({ filter: defaultFilter, start: 0, currentPage: 1 })
  const filterValue = { filter, setFilter }

  return (
    <FilterContext.Provider value={filterValue}>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10'>
        <div className='lg:col-span-2'>
          <FilterTypes />
          <FilterFrameworks />
          <FilterSections />
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
