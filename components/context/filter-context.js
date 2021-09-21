import React from 'react'

// set the defaults
const FilterContext = React.createContext({
  filter: {
    filter: '?_limit=2&_start=0',
    start: 0,
    currentPage: 1
  },
  setFilter: () => {}
})

export default FilterContext
