import React from 'react'
import { useQuery } from 'react-query'
import FilterContext from './../components/context/filter-context'

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str
  return str.substring(0, index) + chr + str.substring(index + 1)
}

export default function FilterCategories() {
  const { filter, setFilter } = React.useContext(FilterContext)
  // console.log('FILTER: ', filter)
  const fetchCategories = () =>
    fetch('https://peaceful-ridge-63546.herokuapp.com/categories').then((res) => res.json())

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    'categories',
    () => fetchCategories(),
    { keepPreviousData: true }
  )

  let checkedCats = filter.filter.split('&categories.slug=')
  checkedCats.shift()

  const handleChange = (evt) => {
    const name = evt.target.name
    const value = evt.target.checked
    let newFilter = setCharAt(filter.filter, 17, 0)
    if (value && !checkedCats.includes(name)) {
      // add to filter
      newFilter = newFilter + `&categories.slug=${name}`
    } else {
      // remove it from filter
      newFilter = newFilter.replace(`&categories.slug=${name}`, '')
    }
    console.log('-----------------------')
    console.log('NEW FILTER: ', newFilter)
    console.log('-----------------------')
    setFilter({ filter: newFilter, start: 0, currentPage: 1 })
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error: {error.message}</div>
  ) : (
    <form className='hidden lg:block sticky top-0'>
      <h3 className='sr-only'>Filter Categories</h3>
      <div className=''>
        <h3 className='-my-3 flow-root'>
          <button
            type='button'
            className='py-3 bg-white text-left w-full text-sm text-gray-400 hover:text-gray-500'
            aria-controls='filter-section-0'
            aria-expanded='false'
          >
            <span className='uppercase font-medium text-gray-900'>Filter Categories</span>
          </button>
        </h3>
        <div className='pt-3' id='filter-section-0'>
          <div className='space-y-4'>
            {data.map((category) => (
              <div key={category.id} className='flex items-center'>
                <input
                  name={category.slug}
                  value={category.slug}
                  type='checkbox'
                  onChange={handleChange}
                  checked={checkedCats.includes(category.slug)}
                  className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                />
                <label htmlFor='filter-color-0' className='ml-3 text-sm text-gray-600'>
                  {category.category_name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  )
}
