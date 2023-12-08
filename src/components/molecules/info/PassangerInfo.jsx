"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Luggage from '@/assets/images/Luggage.svg'
import Airline from '@/assets/images/airline.png'
import TextField from '@mui/material/TextField';

const PassangerInfo = () => {
    const [checkedBags, setCheckedBags] = useState(0)

    const flights = [
        {
            name: "Hawaiian Airlines",
            flightNo: "FIG4312",
            logo: Airline,
            time: "16h 45m (+1d)",
            duration: "7:00 AM - 4:15 PM",
            wait: "2h 45m in HNL"
        },
        {
            name: "Hawaiian Airlines",
            flightNo: "FIG4312",
            logo: Airline,
            time: "16h 45m (+1d)",
            duration: "7:00 AM - 4:15 PM",
            wait: "2h 45m in HNL"
        },
    ]

  return (
    <div className='px-24 py-14 md:flex md:items-end md:justify-between'>
      <div className='text-[#7C8DB0] md:w-1/2'>
        <h3 className='text-purple-blue font-semibold text-2xl'>Passanger Information</h3>
        <p className='mt-4'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
        
        <form>
            <div className='flex flex-col gap-6'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-9'>Passenger 1 (Adult)</h4>

                <div className='flex gap-6'>
                    <TextField
                        label="First name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                    <TextField
                        label="Middle name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        label="Last name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Suffix"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <div>
                        <TextField
                            label="Date of birth"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            required
                        />
                        <p className='mt-1 text-xs'>MM/DD/YY</p>

                    </div>
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Email address"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                    <TextField
                        label="Phone number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Redress number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        label="Known traveller number*"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12'>Emergency contact information</h4>

                <div className='flex gap-2 items-center'>
                    <input type='checkbox' />
                    <label className='mb-0.5'>Same as Passenger 1</label>
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="First name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                    <TextField
                        label="Last name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Email address"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                    <TextField
                        label="Phone number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        required
                    />
                </div>
            </div>
        </form>

        <div>
            <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Bag information</h4>
            <p>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. <a href='#' className='text-purple-blue'>See the full bag policy.</a></p>
        </div>

        <div className=' flex'>
            <div className='flex-1'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Passanger 1</h4>
                <p>First Last</p>
            </div>
            <div className='flex-1'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Checked bags</h4>
                <div className='flex items-center gap-3'>
                    <div className='text-purple-blue text-3xl tracking-[-5px] me-1 -mt-1 cursor-pointer select-none' onClick={()=>{if(checkedBags!==0){
                    setCheckedBags(checkedBags-1)
                    }}}>--</div>
                    <div className='text-2xl text-[#7C8DB0]'>{checkedBags}</div>
                    <div className='text-purple-blue text-3xl cursor-pointer select-none -mt-1' onClick={()=>setCheckedBags(checkedBags+1)}>+</div>
                </div>
            </div>

        </div>

        <div className='flex gap-6 mt-20'>
            <button className='text-lg px-5 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Save and close</button>
            <button className='text-lg px-5 py-3 rounded border border-[#7C8DB0] bg-[#cbd4e64d]'>Select seats</button>
        </div>
      </div>

      <div className='md:w-1/2 flex flex-col items-end'>
            <div className='mb-28 flex flex-col gap-8'>
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
                <div className='self-end'>
                    <button className='text-lg px-5 py-3 rounded border border-[#7C8DB0] text-[#7C8DB0] bg-[#cbd4e64d]'>Select seats</button>
                </div>
            </div>
            <Image src={Luggage} alt='Luggage Dimensions' />
      </div>

    </div>
  )
}

export default PassangerInfo
