import React from 'react'
import Search from './Search'
import Filters from './Filters'
import Flights from './Flights'
import PlacesToStay from './PlacesToStay'
import AlsoSearchedFor from './AlsoSearchedFor'

const SearchResults = () => {
  return (
    <div className='px-4 sm:px-10 xl:px-24 py-14'>
      <Search />
      <Filters />

      <Flights />

      <PlacesToStay />
      <AlsoSearchedFor />
    </div>
  )
}

export default SearchResults
