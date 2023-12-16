import React from 'react'
import Image from 'next/image'
import Map from '@/assets/icons/map-journey-final.svg'
const FlightRoute = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl text-[#6E7491] font-semibold'>Share your travel itinerary</h1>
      <Image src={Map} />
    </div>
  )
}

export default FlightRoute
