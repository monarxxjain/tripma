import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Card from '@/components/atoms/Card'
import Deal1 from '@/assets/images/FlightDeals/deal1.png'
import Deal2 from '@/assets/images/FlightDeals/deal2.png'
import Deal3 from '@/assets/images/FlightDeals/deal3.png'
import Deal4 from '@/assets/images/FlightDeals/deal4.png'

const FlightDeals = () => {
  return (
    <div className='px-16 py-10 flex flex-col gap-6'>
      <div className='flex justify-between text-[#6E7491] text-2xl'>
        <p className='font-bold'>Find your next adventure with these <span className='text-[#605DEC]'>flight deals</span></p>
        <Link href="/" className='flex items-center gap-1'>All <BsArrowRight/> </Link>
      </div>

      <section className='flex flex-col gap-10'>
        <div className='flex gap-10'>
            <Card type="deal" image={Deal1} heading="The Bund" city="Shanghai" amount="$598" description={"China’s most international city"} />
            <Card type="deal" image={Deal2} heading="Sydney Opera House" city="Sydney" amount="$981" description={"Take a stroll along the famous harbor"} />
            <Card type="deal" image={Deal3} heading="Kōdaiji Temple" city="Kyoto" amount="$633" description={"Step back in time in the Gion district"} />
        </div>
        <div>
            <Card type="deal" image={Deal4} heading="Tsavo East National Park" city="Kenya" amount="$1,248" description={"Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert."} />
        </div>
      </section>
    </div>
  )
}

export default FlightDeals
