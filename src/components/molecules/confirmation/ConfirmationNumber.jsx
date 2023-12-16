"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Cross from '@/assets/icons/cross.svg'
const ConfirmationNumber = ({confirmationNo, passangerName}) => {
    const [displaySnackbar, setDisplaySnackbar] = useState(true)
    const snackbar = useRef()
  return (
    <div className='flex flex-col gap-10'>
      {displaySnackbar && <div ref={snackbar} className='flex justify-between gap-2 items-center rounded-lg border border-[#007B65] bg-[#007b5013] text-[#007B65] py-4 px-6'>
        <p>Your flight has been booked successfully! Your confirmation number is {confirmationNo}</p>
        <Image src={Cross} className='cursor-pointer' onClick={(e)=>{
            snackbar.current.classList.add('fade-out')
            setTimeout(() => {
                setDisplaySnackbar(false);
            }, 350);
        }} />
      </div>}

      <section className='flex flex-col gap-4'>
        <h1 className='text-2xl text-[#605DEC] font-bold'>Bon voyage, {passangerName}!</h1>
        <p className='text-lg font-semibold text-[#6E7491]'>Confirmation Number: {confirmationNo}</p>
        <div className='text-lg text-[#7C8DB0]'>
            Thank you for booking your travel with Tripma! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in <a href='#' className='text-[#605DEC]'>My trips</a>.
        </div>
      </section>
    </div>
  )
}

export default ConfirmationNumber
