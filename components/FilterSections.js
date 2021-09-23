import React from 'react'
import { useQuery } from 'react-query'
import FilterContext from './context/filter-context'
import CheckboxList from './skeleton/checkboxlist'

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str
  return str.substring(0, index) + chr + str.substring(index + 1)
}

export default function FilterSections() {
  const { filter, setFilter } = React.useContext(FilterContext)
  // console.log('FILTER: ', filter)
  const fetchSections = () =>
    fetch('https://peaceful-ridge-63546.herokuapp.com/sections').then((res) => res.json())

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    'sections',
    () => fetchSections(),
    { keepPreviousData: true }
  )

  const handleChange = (evt) => {
    const name = evt.target.name
    const value = evt.target.checked
    let newFilter = setCharAt(filter.filter, 17, 0)
    if (value && !filter.filter.includes(`&section.slug=${name}`)) {
      // add to filter
      newFilter = newFilter + `&section.slug=${name}`
    } else {
      // remove it from filter
      newFilter = newFilter.replace(`&section.slug=${name}`, '')
    }
    console.log('-----------------------')
    console.log('NEW FILTER Sections: ', newFilter)
    console.log('-----------------------')
    setFilter({ filter: newFilter, start: 0, currentPage: 1 })
  }

  return isLoading ? (
    <div className='grid grid-cols-1 gap-y-4'>
      <CheckboxList />
      <CheckboxList />
      <CheckboxList />
      <CheckboxList />
      <CheckboxList />
      <CheckboxList />
    </div>
  ) : isError ? (
    <div>Error: {error.message}</div>
  ) : (
    <form className='hidden lg:block pb-6'>
      <h3 className='sr-only'>Filter</h3>
      <div className=''>
        <h3 className='-my-3 flow-root'>
          <button
            type='button'
            className='py-3 text-left w-full text-sm text-gray-400 hover:text-gray-500'
            aria-controls='filter-section-0'
            aria-expanded='false'
          >
            <span className='font-medium text-gray-900'>Sections</span>
          </button>
        </h3>
        <div className='pt-3' id='filter-section-0'>
          <div className='space-y-4'>
            {data.map((section) => (
              <div key={section.id} className='flex items-center'>
                <input
                  name={section.slug}
                  value={section.slug}
                  type='checkbox'
                  onChange={handleChange}
                  checked={filter.filter.includes(`&section.slug=${section.slug}`)}
                  className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                />
                <label htmlFor='filter-color-0' className='ml-3 text-sm text-gray-600'>
                  {section.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  )
}
