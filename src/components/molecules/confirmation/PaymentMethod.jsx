import React from 'react'
import Image from 'next/image'
import Visa from '@/assets/icons/visa.svg'
const PaymentMethod = ({name, last4Digits, exp}) => {
    let dots = []

    for (let index = 0; index < 12; index++) {
        dots.push(<div className='w-1.5 h-1.5 rounded-full bg-white'></div>)
    }
  return (
    <div className='flex flex-col gap-6 w-fit'>
      <p className='text-2xl text-[#6E7491] font-semibold'>Price Breakdown</p>
      <div className='rounded-2xl px-6 py-7 pink-gradient flex flex-col gap-20'>
        <Image src={Visa} />
        <div className='flex flex-col gap-2 text-lg font-semibold text-white'>
            <p>{name}</p>
            <div className='flex items-center justify-between gap-16'>
                <div className='flex items-center gap-1'>{dots}{last4Digits}</div>
                <div>{exp}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
