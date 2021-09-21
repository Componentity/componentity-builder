import Data from './data'
import React, { useState } from 'react'
import FilterContext from './../components/context/filter-context'
import FilterCategories from './FilterCategories'

export default function ComponentsFilter() {
  const [filter, setFilter] = useState({ filter: '?_limit=2&_start=0', start: 0, currentPage: 1 })
  const filterValue = { filter, setFilter }

  return (
    <FilterContext.Provider value={filterValue}>
      <main className='container mx-auto'>
        <section aria-labelledby='products-heading' className='p-4 sm:p-6 lg:p-8'>
          <h2 id='products-heading' className='sr-only'>
            Products
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10'>
            <div className='lg:col-span-2'>
              <FilterCategories />
            </div>
            <div className='lg:col-span-10'>
              <div className=''>
                <Data />
              </div>
            </div>
          </div>
        </section>
      </main>
    </FilterContext.Provider>
  )
}
