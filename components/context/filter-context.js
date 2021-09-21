import React from 'react'

// set the defaults
const FilterContext = React.createContext({
  filter: '?_limit=10&_start=0',
  setFilter: () => {}
})

export default FilterContext
