"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import RightArrow from '@/assets/icons/right-arrow.svg'

const BookSeatNavigator = ({from, to, departDetails, arrivalDetails, journey, setJourney}) => {
    const [triangleTransform, setTriangleTransform] = useState(journey === 'Departing' ? 'translate-x-[22vw] md:translate-x-[11vw] xl:translate-x-[5.4vw]' : 'translate-x-[72vw] md:translate-x-[36vw] xl:translate-x-[18vw]');
    useEffect(() => {
        // Update the triangle transform when the journey changes
        setTriangleTransform(journey === 'Departing' ? 'translate-x-[22vw] md:translate-x-[11vw] xl:translate-x-[5.4vw]' : 'translate-x-[72vw] md:translate-x-[36vw] xl:translate-x-[18vw]');
      }, [journey]);
  return (
    <div className='bg-[#27273F] sticky flex flex-col md:flex-row items-center justify-between'>
      <div className='flex items-center justify-between w-full'>
        <div className='py-5 px-8 text-[#FAFAFA]'>
            <p className='text-2xl font-extrabold'>{from.value}</p>
            <p>{from.address}</p>
        </div>
        <div className='py-5'>
            <Image src={RightArrow} />
        </div>
        <div className='py-5 px-8 text-[#FAFAFA]'>
            <p className='text-2xl font-extrabold'>{to.value}</p>
            <p>{to.address}</p>
        </div>
      </div>

      <section className='flex items-center relative text-white justify-between w-full border-t border-t-[#7C8DB0] xl:border-t-0'>
        <div className={`flex flex-1 flex-col gap-1 py-6 px-[2vw] cursor-pointer xl:border-x xl:border-x-[#7C8DB0] ${journey=="Departing" ? "bg-purple-blue" : ""}`}>
            <div className='flex items-center justify-center gap-3'>
                <p>{departDetails.date}</p>
                <p className='w-[1px] h-4 bg-[#7C8DB0]'></p>
                <p>{departDetails.time}</p>
            </div>
            <div className='text-center'>Departing</div>
        </div>
        <div className={`flex flex-1 flex-col gap-1 py-6 px-[2vw] cursor-pointer ${journey=="Arriving" ? "bg-purple-blue" : ""}`}>
            <div className='flex items-center justify-center gap-3'>
                <p>{arrivalDetails.date}</p>
                <p className='w-[1px] h-4 bg-[#7C8DB0]'></p>
                <p>{arrivalDetails.time}</p>
            </div>
            <div className='text-center'>Arriving</div>
        </div>
        <div className={`absolute w-0 h-0  transition-transform duration-150
            border-l-[12px] border-l-transparent
            border-b-[13px] border-b-white
            border-r-[12px] border-r-transparent bottom-0 ${triangleTransform} `}
            // style={{ transform: triangleTransform }}
        >
        </div>
      </section>
    </div>
  )
}

export default BookSeatNavigator
