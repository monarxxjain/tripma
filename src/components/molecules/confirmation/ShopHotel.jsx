import Card from '@/components/atoms/Card'
import React from 'react'
import Hotel1 from '@/assets/images/ShopHotels/hotel1.png'
import Hotel2 from '@/assets/images/ShopHotels/hotel2.png'
import Hotel3 from '@/assets/images/ShopHotels/hotel3.png'
import Hotel4 from '@/assets/images/ShopHotels/hotel4.png'
const ShopHotel = () => {
    const hotels = [
        {
            image: Hotel1,
            heading: "Ryokan Japan",
            amount: "$439",
            description: "Enjoy views of the garden from your room"
        },
        {
            image: Hotel2,
            heading: "Bessho SASA",
            amount: "$529",
            description: "Japanese ryokan with private onsen bath"
        },
        {
            image: Hotel3,
            heading: "HOTEL THE FLAG 大阪市",
            amount: "$139",
            description: "Modern hotel in the heart of Osaka"
        },
        {
            image: Hotel4,
            heading: "9 Hours Shinjuku",
            amount: "$59",
            description: "A convenient capsule hotel at Shinjuku station"
        },
    ]
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-[#6E7491]'>Shop <span className='text-[#605DEC]'>Hotels</span></h1>
        <div className='flex flex-col gap-8'>
            <p className='text-lg text-[#7C8DB0]'>
                Tripma partners with thousands of hotels to get you the best deal. Save up to 30% when you add a hotel to your trip.
            </p>
            <div className='flex flex-col gap-8'>
                {hotels.map((hotel, index)=>{
                    return(
                        <Card key={index} image={hotel.image} heading={hotel.heading} amount={hotel.amount} description={hotel.description} />
                    )
                })}
            </div>
            <button className='py-3 px-5 text-lg text-[#605DEC] border border-[#605DEC] rounded w-fit self-center hover:bg-[#5f5dec15] transition-all active:scale-95'>Shop all hotels</button>
        </div>
    </div>
  )
}

export default ShopHotel
