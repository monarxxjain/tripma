import React from 'react'
import Image from 'next/image'

const Card = ({type, image, heading, city, amount, description}) => {
  return (
    <div className='rounded-xl shadow-md'>
      <Image src={image} className='rounded-t-xl w-full' />
      <div className='py-4 px-6 flex flex-col'>
        <div className='flex justify-between items-center text-[#6E7491] font-semibold'>
            <p>{heading}, <span className={`${type=="deal" ? "text-purple-blue" : "text-[#22C3A6]"}`}>{city}</span></p>
            <p>{amount}</p>
        </div>
        <div className='text-[#7C8DB0]'>
            {description}
        </div>
      </div>
    </div>
  )
}

export default Card
