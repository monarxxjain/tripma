import React from 'react'
import Image from 'next/image'
const Summary = ({flights}) => {
  return (
    <div className='flex flex-col self-end'>
                    <div className='rounded-xl border border-[#E9E8FC] p-4 '>
                        {flights.map((flight, id)=>{
                            return(
                                <div key={id} className={`p-2 ${id!==0 ? "border-t border-t-[#E9E8FC] pt-4" : ""} flex justify-between items-start `}>
                                    <div className='flex gap-2 items-start'>
                                        <div>
                                            <Image src={flight.logo} alt='airline Logo' />
                                        </div>
                                        <div>
                                            <p>{flight.name}</p>
                                            <p className='text-[#7C8DB0] mt-1'>{flight.flightNo}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end gap-1'>
                                        <div>{flight.time}</div>
                                        <div>{flight.duration}</div>
                                        <div className='text-[#7C8DB0]'>{flight.wait}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='p-4 flex flex-col gap-2 font-semibold ms-28'>
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
