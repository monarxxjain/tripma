import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Card from '@/components/atoms/Card'
import Place4 from '@/assets/images/PlacesToStay/place4.png'
import Place5 from '@/assets/images/PlacesToStay/place5.png'
import Place6 from '@/assets/images/PlacesToStay/place6.png'

const PlacesToStay = () => {
  return (
    <div className='py-10 flex flex-col gap-6'>
      <div className='flex justify-between gap-5 text-[#6E7491] text-2xl'>
        <p className='font-bold'>Find <span className='text-[#605DEC]'>places to stay</span> in Japan</p>
        <Link href="/" className='flex items-center gap-1'>All <BsArrowRight/> </Link>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            <Card type="deal" image={Place4} city="Hotel Kaneyamaen and Bessho SASA" description={"Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner."} />
            <Card type="deal" image={Place5} city="HOTEL THE FLAG 大阪市" description={"Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street."} />
            <Card type="deal" image={Place6} city="9 Hours Shinjuku" description={"Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!"} />
        </div>
    </div>
  )
}

export default PlacesToStay
