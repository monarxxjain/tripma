import InputSearch from '@/components/atoms/InputSearch'
import React from 'react'
import FromFlight from '@/assets/icons/from-flight.svg'
import ToFlight from '@/assets/icons/to-flight.svg'
import CalenderIcon from '@/assets/icons/calendar.svg'
import ProfileIcon from '@/assets/icons/profile-icon.svg'

const Search = () => {
    const fromOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const toOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
  return (
    <div>
      <div className='flight-search items-center relative xl:flex w-min'>
        <InputSearch icon={FromFlight} value={"SDF"} placeHolder="From where?" options={fromOptions} />
        <InputSearch icon={ToFlight} value={"POI"} placeHolder="Where to?" options={toOptions} />
        <InputSearch icon={CalenderIcon} value={"23Dec - 29Dec"} placeHolder="Depart - Return" />
        <InputSearch icon={ProfileIcon} value={"1 Adult"} placeHolder="1 Adult" />
        <button className='hidden xl:block bg-purple-blue h-min text-white rounded-md py-2.5 px-5 active:scale-95 transition-all'>Search</button>
      </div>
    </div>
  )
}

export default Search
