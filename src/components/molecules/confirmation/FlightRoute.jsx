"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import JourneyMap from '@/assets/images/world-map-final.svg'
import PlaneIcon from '@/assets/icons/plane-small.svg'
import LocationPoint from '@/assets/icons/location-point.svg'
import FlightPath from '@/assets/icons/flight-path.svg'

const FlightRoute = () => {
  const [searchDetails, setSearchDetails] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("searchDetails")) : null)

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl text-[#6E7491] font-semibold'>Flight Route</h1>
      <div className='relative w-fit mt-12'>
          <Image src={JourneyMap} className='bg-[#E9E8FC] rounded border border-[#CBD4E6]' />
          <Image src={LocationPoint} className='absolute top-1/3 left-[38.2%] w-[10px] translate-y-[2vw]' />
          <Image src={LocationPoint} className='absolute top-1/3 left-[69.5%] w-[10px] translate-y-[1.5vw]' />
          <Image src={FlightPath} className='absolute top-1/3 left-1/3 translate-x-7 xl:translate-x-10 lg:translate-y-2 w-[32%]' />
          <Image src={PlaneIcon} className={`absolute top-1/3 left-1/2 translate-x-5 xl:translate-x-[2vw] -translate-y-3 lg:-translate-y-1 lg:w-[5%] xl:w-[4%]`} />
          <p className='absolute top-1/3 left-[38%] translate-y-12 text-[#1513A0] font-bold'>{searchDetails?.from}</p>
          <p className='absolute top-1/3 left-[67%] translate-y-10 text-[#1513A0] font-bold'>{searchDetails?.to}</p>
        </div>
    </div>
  )
}

export default FlightRoute
