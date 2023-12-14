"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Luggage from '@/assets/images/Luggage.svg'
import Airline from '@/assets/images/airline.png'
import TextField from '@mui/material/TextField'
import Summary from '@/components/atoms/Summary'
import PaymentMethod from '@/components/atoms/PaymentMethod'

const PaymentDetails = () => {
    const [paymentAllowance, setPaymentAllowance] = useState(false)
    const [methodDetails, setMethodDetails] = useState({
        nameOncard: "",
        cardNumber: "",
        expDate: "",
        ccv: "",
        isBillingAddressSame: "",

        emailOrPhone: "",
        password: ""

    })

    useEffect(()=>{
        console.log(methodDetails)
        if(methodDetails.nameOncard!='' && methodDetails.cardNumber!='' && methodDetails.expDate!='' && methodDetails.ccv!='' && methodDetails.isBillingAddressSame!='') {
            setPaymentAllowance(true)
        }
        else{
          setPaymentAllowance(false)
        }
    },[methodDetails])

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
    <div className='px-24 py-14 md:flex md:justify-between'>
      <div className='text-[#7C8DB0] md:w-1/2'>
        <h3 className='text-purple-blue font-semibold text-2xl'>Payment Method</h3>
        <p className='mt-4'>Select a payment method below. Tripma processes your payment securely with end-to-end encryption.</p>
        
        <PaymentMethod />

        <form>
            <div className='flex flex-col gap-6 w-9/12'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-9'>Credit card details</h4>

                <div className='flex gap-2 items-center'>
                    <input type='checkbox' onChange={(e)=>{setMethodDetails(prevState=>({...prevState, isBillingAddressSame: e.target.checked}))}} />
                    <label className='mb-0.5'>Billing address is same as Passenger 1 </label>
                </div>

                <TextField
                    label="Name on card"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    onChange={(e)=>{setMethodDetails(prevState=>({...prevState, nameOncard: e.target.value}))}}
                    required
                />
                <TextField
                    label="Card number"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    onChange={(e)=>{setMethodDetails(prevState=>({...prevState, cardNumber: e.target.value}))}}
                    required
                />
                
                <div className='flex gap-6 w-full justify-between'>
                    <div className='w-max'>
                        <TextField
                            label="Expiration date"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            onChange={(e)=>{setMethodDetails(prevState=>({...prevState, expDate: e.target.value}))}}
                            required
                        />
                        <p className='mt-1 text-xs'>MM/YY</p>
                    </div>
                    <TextField
                        label="CCV"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        onChange={(e)=>{setMethodDetails(prevState=>({...prevState, ccv: e.target.value}))}}
                        required
                    />
                </div>
            </div>

        </form>

        <div className='flex flex-col gap-6'>
            <h4 className='text-[#6E7491] font-semibold text-lg mt-12'>Create an account</h4>
            <p>Tripma is free to use as a guest, but if you create an account today, you can save and view flights, manage your trips, earn rewards, and more.</p>
            

            <div className='flex flex-col gap-6 w-9/12'>
                <div className='flex gap-2 items-center'>
                    <input type='checkbox'/>
                    <label className='mb-0.5'>Save card and create account for later</label>
                </div>
                <TextField
                    label="Email address or phone number"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    value={methodDetails.emergencyFirstName}
                    onChange={(e)=>{setMethodDetails(prevState=>({...prevState, emailOrPhone: e.target.value}))}}
                />
                    
                <TextField
                    label="Password"
                    type='password'
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    value={methodDetails.emergencyEmail}
                    onChange={(e)=>{setMethodDetails(prevState=>({...prevState, password: e.target.value}))}}
                />
            </div>

        </div>

        <div>
            <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Cancellation policy</h4>
            <p>This flight has a flexible cancellation policy. If you cancel or change your flight up to 30 days before the departure date, you are eligible for a free refund. All flights booked on Tripma are backed by our satisfaction guarantee, however cancellation policies vary by airline. See the <a href='#' className='text-purple-blue'>full cancellation policy</a> for this flight.</p>
        </div>

        <div className='flex gap-6 mt-20'>
            <Link href={"/booking"} className='text-lg px-5 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Back to seat select</Link>
            <button className={`text-lg px-5 py-3 rounded border ${paymentAllowance ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d]"} `}>Confirm and pay</button>
        </div>
      </div>

      <div className='md:w-1/2 flex flex-col mt-32'>
            <div className='mb-28 flex flex-col gap-8'>
                <Summary flights={flights}/>
                <div className='self-end'>          
                    <button className={`text-lg px-5 py-3 rounded border text-[#7C8DB0] ${paymentAllowance ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d]"} `}>Confirm and pay</button>
                </div>
            </div>
      </div>

    </div>
  )
}

export default PaymentDetails
