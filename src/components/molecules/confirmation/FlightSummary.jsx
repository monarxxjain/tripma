import React from 'react'
import Image from 'next/image'
import Airline from '@/assets/images/airline.png'

const FlightSummary = () => {
    const departDetails = [
        {
            name: "Hawaiian Airlines",
            value: "16h 45m"
        },
        {
            name: "value",
            value: "7:00AM - 4:15PM"
        },
        {
            name: "2h 45m in HNL",
            value: "1 stop"
        },
        {
            name: "round trip",
            value: "$624"
        },
    ]
    const arrivalDetails = [
        {
            name: "Hawaiian Airlines",
            value: "16h 45m"
        },
        {
            name: "value",
            value: "7:00AM - 4:15PM"
        },
        {
            name: "2h 45m in HNL",
            value: "1 stop"
        },
        {
            name: "round trip",
            value: "$624"
        },
    ]
  return (
    <div className='flex flex-col gap-6'>
       <h1 className='text-2xl text-[#6E7491] font-semibold'>Flight summary</h1>
       <div className='flex flex-col gap-10'>
            {/* Departing Details */}
            <div className='flex flex-col gap-4'>
                <p className='text-lg text-[#6E7491] font-semibold'>Departing February 25th, 2021</p>
                <div className='px-4 py-1 flex items-center gap-2  border border-[#CBD4E6] rounded'>
                    <Image src={Airline} />
                    <div className='px-4 py-2 grid grid-cols-2 md:flex lg:grid lg:grid-cols-2 gap-y-3 xl:flex justify-between w-full'>
                        {departDetails.map((detail, index)=>{
                            return(
                                <div key={index} className='flex flex-col'>
                                    <p>{detail.value}</p>
                                    <p className='text-[#7C8DB0]'>{detail.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className='text-[#7C8DB0]'>Seat 9F (economy, window), 1 checked bag</p>
            </div>


            {/* Arriving Details */}
            <div className='flex flex-col gap-4'>
                <p className='text-lg text-[#6E7491] font-semibold'>Arriving March 21st, 2021</p>
                <div className='px-4 py-1 flex items-center gap-2  border border-[#CBD4E6] rounded'>
                    <Image src={Airline} />
                    <div className='px-4 py-2 grid grid-cols-2 md:flex lg:grid lg:grid-cols-2 gap-y-3 xl:flex justify-between w-full'>
                        {arrivalDetails.map((detail, index)=>{
                            return(
                                <div key={index} className='flex flex-col'>
                                    <p>{detail.value}</p>
                                    <p className='text-[#7C8DB0]'>{detail.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className='text-[#7C8DB0]'>Seat 4F (business, window), 1 checked bag</p>
            </div>
       </div>
    </div>
  )
}

export default FlightSummary
