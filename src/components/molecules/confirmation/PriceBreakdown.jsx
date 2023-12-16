import React from 'react'

const PriceBreakdown = () => {
    const breakdownDetails = [
        {
            name: "Departing Flight",
            value: 251.50
        },
        {
            name: "Arriving Flight",
            value: 251.50
        },
        {
            name: "Baggage fees",
            value: 0
        },
        {
            name: "Seat upgrade (business)",
            value: 199
        },
        {
            name: "Subtotal",
            value: 702
        },
        {
            name: "Taxes (9.4%)",
            value: 6
        }
    ]

    const totalPrice = breakdownDetails[4].value + breakdownDetails[5].value
  return (
    <div className='flex flex-col gap-6'>
      <p className='text-2xl text-[#6E7491] font-semibold'>Price Breakdown</p>
      <div className='sm:w-7/12 flex flex-col gap-3'>
        {breakdownDetails.map((detail, index)=>{
            return (
                <div key={index} className='flex justify-between items-center text-[#6E7491]'>
                    <p>{detail.name}</p>
                    <p>${detail.value}</p>
                </div>
            )
        })}

        <div className='flex justify-between items-center py-3 border-y border-y-[#CBD4E6] font-semibold'>
            <p>Amount Paid</p>
            <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default PriceBreakdown
