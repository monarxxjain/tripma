import React from 'react'
import Search from './Search'
import Filters from './Filters'
import Flights from './Flights'

const SearchResults = () => {
  return (
    <div className='px-4 sm:px-10 lg:px-24 py-14'>
      <Search />
      <Filters />

      <Flights />
    </div>
  )
}

export default SearchResults
