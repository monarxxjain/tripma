import React from 'react'
import Link from 'next/link'
const SubmitBooking = ({passangerNo, passangerName, selectedSeat, setSelectedSeat, journey, setJourney}) => {
  return (
    <div className='border-t border-t-[#CBD4E6] xl:absolute xl:bottom-0 py-4 px-6 flex flex-col sm:flex-row items-center sm:justify-around w-full gap-4 z-40 backdrop-blur-3xl'>
      <div className='flex items-center justify-between sm:justify-around gap-4 w-full'>
        <div className='p-2 flex flex-col gap-1'>
          <p className='text-sm text-[#7C8DB0]'>Passager {passangerNo}</p>
          <p className='text-lg font-semibold text-[#6E7491]'>{passangerName}</p>
        </div>
        <div className='p-2 flex flex-col gap-1'>
          <p className='text-sm text-[#7C8DB0]'>Seat number</p>
          <p className='text-lg font-semibold text-[#6E7491]'>{selectedSeat.seatNo}</p>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full sm:justify-end'>
        <button className='text-lg px-4 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Save and close</button>
        {journey=="Departing" && <button 
          onClick={() => {
            if(selectedSeat.isSeatSelected){setJourney("Arriving"); 
              setSelectedSeat((prevSelectedSeat) => ({
                ...prevSelectedSeat,
                seatNo: "--",
                seatType: "",
                isSeatSelected: false
              }));
            }
            window.scrollTo({
              top: 0,
              behavior: 'smooth' // You can also use 'auto' or 'instant'
            });
          }} 
        className={`text-lg px-5 py-3 rounded border ${selectedSeat.isSeatSelected ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d] text-[#7C8DB0] pointer-events-none"} `}>Next Flight</button>}

        {journey=="Arriving" && <Link href={"/payment"} className={`text-lg px-5 py-3 rounded border ${selectedSeat.isSeatSelected ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d] text-[#7C8DB0] pointer-events-none"} `}>Payment method</Link>}
      </div>
    </div>
  )
}

export default SubmitBooking
