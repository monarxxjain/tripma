import React from 'react'
import InputSearch from '@/components/atoms/InputSearch'
import FromFlight from '@/assets/icons/from-flight.svg'

const FlightSearch = () => {
    const fromOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const toOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const departOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ", "EWR", "DER", "POI", "YHB", "MNJ"]
    const adultOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]

  return (
    <div className='flight-search flex justify-center pb-48'>
      <InputSearch icon={FromFlight} placeHolder="From where?" options={fromOptions} />
      <InputSearch icon={FromFlight} placeHolder="Where to?" options={toOptions} />
      <InputSearch icon={FromFlight} placeHolder="Depart - Return" />
      <InputSearch icon={FromFlight} placeHolder="1 Adult" options={adultOptions} />
      <button className='bg-purple-blue h-min text-white rounded-md py-2 px-5 active:scale-95 transition-all'>Search</button>
    </div>
  )
}

export default FlightSearch
