import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Card from '@/components/atoms/Card'
import Deal1 from '@/assets/images/PlacesToStay/place1.png'
import Deal2 from '@/assets/images/PlacesToStay/place2.png'
import Deal3 from '@/assets/images/PlacesToStay/place3.png'

const Places = () => {
  return (
    <div className='px-16 py-10 flex flex-col gap-6'>
      <div className='flex justify-between text-[#6E7491] text-2xl'>
        <p className='font-bold'>Explore unique <span className='text-[#22C3A6]'>places to stay</span></p>
        <Link href="/" className='flex items-center gap-1'>All <BsArrowRight/> </Link>
      </div>

      <section className='flex flex-col gap-10'>
        <div className='flex gap-10'>
            <Card type="place" image={Deal1} heading="The Bund" city="Shanghai" description={"China’s most international city"} />
            <Card type="place" image={Deal2} heading="Sydney Opera House" city="Sydney" description={"Take a stroll along the famous harbor"} />
            <Card type="place" image={Deal3} heading="Kōdaiji Temple" city="Kyoto" description={"Step back in time in the Gion district"} />
        </div>
      </section>

        <button className='bg-purple-blue text-white px-5 py-3 mx-auto rounded my-10'>Explore more stays</button>
    </div>
  )
}

export default Places
