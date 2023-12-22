"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Luggage from '@/assets/images/Luggage.svg'
import Airline from '@/assets/images/airline.png'
import TextField from '@mui/material/TextField'
import Summary from '@/components/atoms/Summary'

const PassangerInfo = () => {
    const searchDetails = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("searchDetails")) : null
    const adultCount = Number(searchDetails?.count.slice(0,1))
    const childCount = Number(searchDetails?.count.slice(11,12))
    const totalPassangers = adultCount + childCount
    const [checkedBags, setCheckedBags] = useState(0)
    const [seatSelectActive, setSeatSelectActive] = useState(false)
    const [passInfo, setPassInfo] = useState({
        firstName: "",
        middleName: "",
        lastName: "",

        suffix: "",
        dob: "",

        email: "",
        phoneNo: "",

        redressNo: "",
        knownTravellerNo: "",

        emergencyFirstName: "",
        emergencyLastName: "",
        emergencyEmail: "",
        emergencyPhoneNo: "",


        bags: ""
        
    })

    useEffect(()=>{
        console.log(passInfo)
      if(passInfo.firstName!='' && passInfo.lastName!='' && passInfo.dob!='' && passInfo.email!='' && passInfo.phoneNo!='' && passInfo.knownTravellerNo!='' && passInfo.emergencyFirstName!='' && passInfo.emergencyLastName!='' && passInfo.emergencyEmail!='' && passInfo.emergencyPhoneNo!='') {
        setSeatSelectActive(true)
      }
    },[passInfo])

    const flights = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("flights")) : null

  return (
    <div className='px-4 sm:px-10 lg:px-24 py-14 gap-16 flex flex-col-reverse md:flex-row md:items-end md:justify-between'>
      <div className='text-[#7C8DB0] md:w-1/2'>
        <h3 className='text-purple-blue font-semibold text-2xl'>Passenger Information</h3>
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
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, firstName: e.target.value}))}}
                        required
                    />
                    <TextField
                        label="Middle name"
                        id="outlined-size-small"
                        defaultValue=""
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, middleName: e.target.value}))}}
                        size="small"
                    />
                    <TextField
                        label="Last name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, lastName: e.target.value}))}}
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Suffix"
                        id="outlined-size-small"
                        defaultValue=""
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, suffix: e.target.value}))}}
                        size="small"
                    />
                    <div>
                        <TextField
                            label="Date of birth"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            onChange={(e)=>{setPassInfo(prevState=>({...prevState, dob: e.target.value}))}}
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
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, email: e.target.value}))}}
                        required
                    />
                    <TextField
                        label="Phone number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, phoneNo: e.target.value}))}}
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Redress number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, redressNo: e.target.value}))}}
                    />
                    <TextField
                        label="Known traveller number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, knownTravellerNo: e.target.value}))}}
                        required
                    />
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12'>Emergency contact information</h4>

                <div className='flex gap-2 items-center'>
                    <input type='checkbox' onChange={(e)=>{
                        if(e.target.checked){
                            setPassInfo(prevState=>({...prevState, emergencyFirstName: passInfo.firstName, emergencyLastName: passInfo.lastName, emergencyEmail: passInfo.email, emergencyPhoneNo: passInfo.phoneNo}))
                        }
                        else{
                            setPassInfo(prevState=>({...prevState, emergencyFirstName: '', emergencyLastName: '', emergencyEmail: '', emergencyPhoneNo: ''}))
                        }
                    }} />
                    <label className='mb-0.5'>Same as Passenger 1</label>
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="First name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyFirstName}
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, emergencyFirstName: e.target.value}))}}
                        required
                    />
                    <TextField
                        label="Last name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyLastName}
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, emergencyLastName: e.target.value}))}}
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Email address"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyEmail}
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, emergencyEmail: e.target.value}))}}
                        required
                    />
                    <TextField
                        label="Phone number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyPhoneNo}
                        onChange={(e)=>{setPassInfo(prevState=>({...prevState, emergencyPhoneNo: e.target.value}))}}
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
                        setCheckedBags(checkedBags-1);
                        setPassInfo(prevState=>({...prevState, bags: checkedBags-1}))
                    }}}>--</div>
                    <div className='text-2xl text-[#7C8DB0]'>{checkedBags}</div>
                    <div className='text-purple-blue text-3xl cursor-pointer select-none -mt-1' onClick={()=>{setCheckedBags(checkedBags+1); setPassInfo(prevState=>({...prevState, bags: checkedBags+1}))}}>+</div>
                </div>
            </div>

        </div>

        <div className='flex gap-6 mt-10 md:mt-20'>
            <button className='text-lg px-5 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Save and close</button>
            <Link href={"/booking"} className={`text-lg px-5 py-3 rounded border ${seatSelectActive ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d]"} `}>Select seats</Link>
        </div>
      </div>

      <div className='md:w-1/2 flex flex-col md:items-end'>
            <div className='mb-10 md:mb-28 flex flex-col gap-8 w-full'>
                <div className='xl:self-end'>
                    <Summary flights={flights}/>
                </div>
                <div className='self-end'>          
                    <Link href={"/booking"} className={`text-lg px-5 py-3 rounded border text-[#7C8DB0] ${seatSelectActive ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d]"} `}>Select seats</Link>
                </div>
            </div>
            <Image src={Luggage} alt='Luggage Dimensions' />
      </div>

    </div>
  )
}

export default PassangerInfo
