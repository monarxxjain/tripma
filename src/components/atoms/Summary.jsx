import React from 'react'
import Image from 'next/image'
const Summary = ({flights}) => {
  return (
    <div className='flex flex-col  mt-11'>
        <div className='rounded-xl border border-[#E9E8FC] p-4 '>
            {/* Departure Flight */}
            <div className={`p-2 flex justify-between items-start `}>
                <div className='flex gap-2 items-start'>
                    <div>
                        <Image src={flights.departingFlight.icon} alt='airline Logo' />
                    </div>
                    <div>
                        <p>{flights.departingFlight.details?.airline}</p>
                        <p className='text-[#7C8DB0] mt-1'>{flights.departingFlight.details?.flightNo}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end gap-1'>
                    <div>{flights.departingFlight.details?.duration}</div>
                    <div>{flights.departingFlight.details?.timing}</div>
                    <div className='text-[#7C8DB0]'>{flights.departingFlight.details?.waiting}</div>
                </div>
            </div>
            
            {/* Return Flight */}
            {flights.returningFlight && <div className={`p-2 border-t border-t-[#E9E8FC] pt-4 flex justify-between items-start `}>
                <div className='flex gap-2 items-start'>
                    <div>
                        <Image src={flights.returningFlight.icon} alt='airline Logo' />
                    </div>
                    <div>
                        <p>{flights.returningFlight.details?.airline}</p>
                        <p className='text-[#7C8DB0] mt-1'>{flights.returningFlight.details?.flightNo}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end gap-1'>
                    <div>{flights.returningFlight.details?.duration}</div>
                    <div>{flights.returningFlight.details?.timing}</div>
                    <div className='text-[#7C8DB0]'>{flights.returningFlight.details?.waiting}</div>
                </div>
            </div>}
        </div>
        <div className='p-4 flex flex-col gap-2 font-semibold xl:ms-28'>
            <div className='flex justify-between items-center'>
                <div>Subtotal</div>
                <div>$503</div>
            </div>
            <div className='flex justify-between items-center'>
                <div>Taxes and Fees</div>
                <div>$121</div>
            </div>
            <div className='flex justify-between items-center'>
                <div>Total</div>
                <div>$624</div>
            </div>
        </div>
    </div>
  )
}

export default Summary
