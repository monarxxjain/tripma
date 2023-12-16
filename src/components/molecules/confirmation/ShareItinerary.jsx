"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
const ShareItinerary = () => {
  const [emailInputs, setEmailInputs] = useState([
    <TextField
      label="Email address"
      id="outlined-size-small"
      defaultValue=""
      size="small"
    />
  ]);

  const addTextField = () => {
    const newTextField = (
      <TextField
        label="New Email"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        key={emailInputs.length} // Make sure to assign a unique key to each component
      />
    );

    setEmailInputs([...emailInputs, newTextField]);
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl text-[#6E7491] font-semibold'>Share your travel itinerary</h1>
      <div className='flex flex-col gap-6'>
        <p className='text-lg text-[#7C8DB0]'>You can email your itinerary to anyone by entering their email address here.</p>

        <div className='sm:w-1/2 flex flex-col gap-6'>
          {emailInputs}
          <div className='flex gap-4 items-center'>
            <button className='py-3 px-5 bg-purple-blue text-white hover:shadow-xl active:scale-95 transition-all rounded'>Email itinerary</button>
            <button className='py-3 px-5 text-[#605DEC] border-white hover:border-[#605DEC] hover:border rounded active:bg-[#5f5dec2c] transition-all' onClick={()=>addTextField()}>Add another</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareItinerary
