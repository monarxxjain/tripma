import React from 'react'

const SubmitBooking = ({passangerNo, passangerName, seatNumber, seatSelected}) => {
  return (
    <div className='border-t border-t-[#CBD4E6] absolute bottom-0 py-4 px-6 flex items-center justify-around w-full gap-4'>
      <div className='p-2 flex flex-col gap-1'>
        <p className='text-sm text-[#7C8DB0]'>Passager {passangerNo}</p>
        <p className='text-lg font-semibold text-[#6E7491]'>{passangerName}</p>
      </div>
      <div className='p-2 flex flex-col gap-1'>
        <p className='text-sm text-[#7C8DB0]'>Seat number</p>
        <p className='text-lg font-semibold text-[#6E7491]'>{seatNumber}</p>
      </div>
      <div className='flex items-center gap-4'>
        <button className='text-lg px-5 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Save and close</button>
        <button className={`text-lg px-5 py-3 rounded border ${seatSelected ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d]"} `}>Next Flight</button>
      </div>
    </div>
  )
}

export default SubmitBooking
