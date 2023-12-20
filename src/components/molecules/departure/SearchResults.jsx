import React from 'react'
import Search from './Search'
import Filters from './Filters'
import Flights from './Flights'

const SearchResults = () => {
  return (
    <div className='px-4 sm:px-10 lg:px-24 py-14'>
      <Search />
      <Filters />

      <section className='flex justify-between gap-10 mt-12'>
        <Flights />
      </section>
    </div>
  )
}

export default SearchResults
