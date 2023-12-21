"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import InputSearch from '@/components/atoms/InputSearch'
import FromFlight from '@/assets/icons/from-flight.svg'
import ToFlight from '@/assets/icons/to-flight.svg'
import CalenderIcon from '@/assets/icons/calendar.svg'
import ProfileIcon from '@/assets/icons/profile-icon.svg'


const FlightSearch = () => {
    const fromOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const toOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const [search, setSearch] = useState({
      from: "",
      to: "",
      date: "",
      count: [1,0]
    })

    useEffect(()=>{console.log(search)},[search])
  return (
    <div>
      <div className='flight-search relative grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-20 xl:px-0 gap-y-5 xl:gap-0 xl:flex justify-center pb-5 xl:pb-48'>
        <InputSearch setSearch={setSearch} icon={FromFlight} placeHolder="From where?" options={fromOptions} />
        <InputSearch setSearch={setSearch} icon={ToFlight} placeHolder="Where to?" options={toOptions} />
        <InputSearch setSearch={setSearch} icon={CalenderIcon} placeHolder="Depart - Return" />
        <InputSearch setSearch={setSearch} icon={ProfileIcon} placeHolder="1 Adult" />
        <Link href={"/departure"} onClick={()=>{localStorage.setItem("searchDetails", JSON.stringify(search))}} className='hidden xl:block bg-purple-blue h-min text-white rounded-md py-2 px-5 active:scale-95 transition-all'>Search</Link>
      </div>
      <div className='px-4 sm:px-20'><Link href={"/departure"} onClick={()=>{localStorage.setItem("searchDetails", JSON.stringify(search))}} className='bg-purple-blue xl:hidden h-min w-full text-white rounded-md py-2 px-5 active:scale-95 transition-all'>Search</Link></div>
    </div>
  )
}

export default FlightSearch
