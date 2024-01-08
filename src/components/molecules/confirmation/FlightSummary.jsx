"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const FlightSummary = () => {
    const [flights, setFlights] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("flights")) : null)
    const departDetails = flights?.departingFlight
    const arrivalDetails = flights?.returningFlight

  return (
    <div className='flex flex-col gap-6'>
       <h1 className='text-2xl text-[#6E7491] font-semibold'>Flight summary</h1>
       <div className='flex flex-col gap-10'>
            {/* Departing Details */}
            <div className='flex flex-col gap-4'>
                <p className='text-lg text-[#6E7491] font-semibold'>Departing February 21st, 2021</p>
                <div className={`px-4 my-1 flex items-center gap-2  border border-[#CBD4E6] rounded w-full hover:bg-[#F6F6FE] cursor-pointer transition-all`}>
                    <Image src={departDetails?.icon} />
                    <div className='px-4 py-2 grid grid-cols-2 md:flex lg:grid lg:grid-cols-2 gap-y-3 xl:flex w-full justify-between'>

                        <div className='flex flex-col'>
                            <p>{departDetails?.details?.duration}</p>
                            <p className='text-[#7C8DB0]'>{departDetails?.details?.airline}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{departDetails?.details?.timing}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{departDetails?.details?.stops}</p>
                            <p className='text-[#7C8DB0]'>{departDetails?.details?.waiting}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{departDetails?.details?.price}</p>
                            <p className='text-[#7C8DB0]'>{departDetails?.details?.tripType}</p>
                        </div>
                            
                    </div>
                </div>
                <p className='text-[#7C8DB0]'>Seat 4F (business, window), 1 checked bag</p>
            </div>

            {/* Arriving Details */}
            <div className='flex flex-col gap-4'>
                <p className='text-lg text-[#6E7491] font-semibold'>Arriving March 21st, 2021</p>
                <div className={`px-4 my-1 flex items-center gap-2  border border-[#CBD4E6] rounded w-full hover:bg-[#F6F6FE] cursor-pointer transition-all`}>
                    <Image src={arrivalDetails?.icon} />
                    <div className='px-4 py-2 grid grid-cols-2 md:flex lg:grid lg:grid-cols-2 gap-y-3 xl:flex w-full justify-between'>

                        <div className='flex flex-col'>
                            <p>{arrivalDetails?.details?.duration}</p>
                            <p className='text-[#7C8DB0]'>{arrivalDetails?.details?.airline}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{arrivalDetails?.details?.timing}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{arrivalDetails?.details?.stops}</p>
                            <p className='text-[#7C8DB0]'>{arrivalDetails?.details?.waiting}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{arrivalDetails?.details?.price}</p>
                            <p className='text-[#7C8DB0]'>{arrivalDetails?.details?.tripType}</p>
                        </div>
                            
                    </div>
                </div>
                <p className='text-[#7C8DB0]'>Seat 4F (business, window), 1 checked bag</p>
            </div>
       </div>
    </div>
  )
}

export default FlightSummary
