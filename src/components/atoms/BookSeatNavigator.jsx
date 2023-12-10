"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import RightArrow from '@/assets/icons/right-arrow.svg'

const BookSeatNavigator = ({from, to, departDetails, arrivalDetails}) => {
    const [state, setState] = useState("Departing")
    const [triangleTransform, setTriangleTransform] = useState(state === 'Departing' ? 'translateX(5.7vw)' : 'translateX(20vw)');
    useEffect(() => {
        // Update the triangle transform when the state changes
        setTriangleTransform(state === 'Departing' ? 'translateX(5.7vw)' : 'translateX(20vw)');
      }, [state]);
  return (
    <div className='bg-[#27273F] flex items-center justify-between'>
      <div className='flex items-center'>
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

      <section className='flex items-center relative text-white'>
        <div className={`flex flex-col gap-1 py-6 px-12 cursor-pointer border-x border-x-[#7C8DB0] ${state=="Departing" ? "bg-purple-blue" : ""}`} onClick={()=>setState("Departing")}>
            <div className='flex items-center gap-3'>
                <p>{departDetails.date}</p>
                <p className='w-[1px] h-4 bg-[#7C8DB0]'></p>
                <p>{departDetails.time}</p>
            </div>
            <div>Departing</div>
        </div>
        <div className={`flex flex-col gap-1 py-6 px-12 cursor-pointer ${state=="Arriving" ? "bg-purple-blue" : ""}`} onClick={()=>setState("Arriving")}>
            <div className='flex items-center gap-3'>
                <p>{arrivalDetails.date}</p>
                <p className='w-[1px] h-4 bg-[#7C8DB0]'></p>
                <p>{arrivalDetails.time}</p>
            </div>
            <div>Arriving</div>
        </div>
        <div className={`absolute w-0 h-0  transition-transform duration-75
            border-l-[12px] border-l-transparent
            border-b-[13px] border-b-white
            border-r-[12px] border-r-transparent bottom-0`}
            style={{ transform: triangleTransform }}
        >
        </div>
      </section>
    </div>
  )
}

export default BookSeatNavigator
