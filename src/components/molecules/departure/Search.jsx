"use client"
import InputSearch from '@/components/atoms/InputSearch'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import FromFlight from '@/assets/icons/from-flight.svg'
import ToFlight from '@/assets/icons/to-flight.svg'
import CalenderIcon from '@/assets/icons/calendar.svg'
import ProfileIcon from '@/assets/icons/profile-icon.svg'

const Search = () => {
    const fromOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const toOptions = ["SDF", "EWR", "DER", "POI", "YHB", "MNJ"]
    const searchDetails = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("searchDetails")) : null

    const [search, setSearch] = useState(searchDetails || {
      from: "",
      to: "",
      date: "",
      count: [1,0]
    })

    useEffect(()=>{console.log(search)},[search])
  return (
    <div>
      <div className='flight-search relative grid grid-cols-1 sm:grid-cols-2 gap-y-1 xl:gap-0 xl:flex'>
        <InputSearch setSearch={setSearch} icon={FromFlight} value={search.from} placeHolder="From where?" options={fromOptions} />
        <InputSearch setSearch={setSearch} icon={ToFlight} value={search.to} placeHolder="Where to?" options={toOptions} />
        <InputSearch setSearch={setSearch} icon={CalenderIcon} value={search.date} placeHolder="Depart - Return" />
        <InputSearch setSearch={setSearch} icon={ProfileIcon} value={"1 Adult"} placeHolder="1 Adult" />
        <Link href={"/departure"} onClick={()=>{localStorage.setItem("searchDetails", JSON.stringify(search))}} className='hidden xl:block bg-purple-blue h-min text-white rounded-md py-2.5 px-5 active:scale-95 transition-all'>Search</Link>
      </div>
      <div className='w-full mt-5'><Link href={"/departure"} className='w-full'><button onClick={()=>{localStorage.setItem("searchDetails", JSON.stringify(search))}} className='bg-purple-blue w-full xl:hidden text-white rounded-md py-2 px-5 active:scale-95 transition-all'>Search</button></Link></div>

    </div>
  )
}

export default Search
