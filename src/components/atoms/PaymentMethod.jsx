"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import CreditCard from '@/assets/icons/credit-card.svg'
import CreditCardWhite from '@/assets/icons/credit-card-white.svg'
import GooglePay from '@/assets/icons/google-pay.svg'
import GooglePayWhite from '@/assets/icons/google-pay-white.svg'
import ApplePay from '@/assets/icons/apple.svg'
import ApplePayWhite from '@/assets/icons/apple-white.svg'
import PayPal from '@/assets/icons/paypal.svg'
import PayPalWhite from '@/assets/icons/paypal-white.svg'
import Crypto from '@/assets/icons/crypto.svg'
import CryptoWhite from '@/assets/icons/crypto-white.svg'

const PaymentMethod = () => {
    const [activeMethod, setActiveMethod] = useState("Credit Card")
    const methods = [
        {
            icon: CreditCard,
            clickedIcon: CreditCardWhite,
            name: "Credit Card"
        },
        {
            icon: GooglePay,
            clickedIcon: GooglePayWhite,
            name: "Google Pay"
        },
        {
            icon: ApplePay,
            clickedIcon: ApplePayWhite,
            name: "Apple Pay"
        },
        {
            icon: PayPal,
            clickedIcon: PayPalWhite,
            name: "Paypal"
        },
        {
            icon: Crypto,
            clickedIcon: CryptoWhite,
            name: "Crypto"
        },
    ]
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:flex border border-[#605DEC] rounded mt-4 w-fit overflow-x-scroll hide-scroller'>
      {methods.map((method, id)=>{
        return (
            <div key={id} onClick={()=>setActiveMethod(method.name)} className={`flex items-center gap-1 py-3 px-5 cursor-pointer transition-all ${activeMethod===method.name ? "bg-purple-blue text-white rounded" : "border md:border-0"}`}>
                <Image src={ activeMethod===method.name ? method.clickedIcon : method.icon} className='' />
                <p className='text-lg whitespace-nowrap '>{method.name}</p>
            </div>
        )
      })}
    </div>
  )
}

export default PaymentMethod
