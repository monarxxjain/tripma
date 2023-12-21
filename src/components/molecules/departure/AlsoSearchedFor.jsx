import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Card from '@/components/atoms/Card'
import Deal1 from '@/assets/images/FlightDeals/deal1.png'
import Deal2 from '@/assets/images/FlightDeals/deal2.png'
import Deal3 from '@/assets/images/FlightDeals/deal3.png'

const FlightDeals = () => {
  return (
    <div className='py-10 flex flex-col gap-6'>
      <div className='flex justify-between gap-5 text-[#6E7491] text-2xl'>
        <p className='font-bold'>Find your next adventure with these <span className='text-[#605DEC]'>flight deals</span></p>
        <Link href="/" className='flex items-center gap-1'>All <BsArrowRight/> </Link>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            <Card type="deal" image={Deal1} heading="The Bund" city=", Shanghai" amount="$598" description={"China’s most international city"} />
            <Card type="deal" image={Deal2} heading="Sydney Opera House" city=", Sydney" amount="$981" description={"Take a stroll along the famous harbor"} />
            <Card type="deal" image={Deal3} heading="Kōdaiji Temple" city=", Kyoto" amount="$633" description={"Step back in time in the Gion district"} />
        </div>
    </div>
  )
}

export default FlightDeals
