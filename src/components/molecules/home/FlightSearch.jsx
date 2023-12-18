import React from 'react'
import InputSearch from '@/components/atoms/InputSearch'
import FromFlight from '@/assets/icons/from-flight.svg'
import ToFlight from '@/assets/icons/to-flight.svg'
import CalenderIcon from '@/assets/icons/calendar.svg'
import ProfileIcon from '@/assets/icons/profile-icon.svg'


const FlightSearch = () => {
    const fromOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const toOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]

  return (
    <div>
      <div className='flight-search relative grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-20 xl:px-0 gap-y-5 xl:gap-0 xl:flex justify-center pb-5 xl:pb-48'>
        <InputSearch icon={FromFlight} placeHolder="From where?" options={fromOptions} />
        <InputSearch icon={ToFlight} placeHolder="Where to?" options={toOptions} />
        <InputSearch icon={CalenderIcon} placeHolder="Depart - Return" />
        <InputSearch icon={ProfileIcon} placeHolder="1 Adult" />
        <button className='hidden xl:block bg-purple-blue h-min text-white rounded-md py-2 px-5 active:scale-95 transition-all'>Search</button>
      </div>
      <div className='px-4 sm:px-20'><button className='bg-purple-blue xl:hidden h-min w-full text-white rounded-md py-2 px-5 active:scale-95 transition-all'>Search</button></div>
    </div>
  )
}

export default FlightSearch
