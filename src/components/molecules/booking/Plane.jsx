import React from 'react'
import Image from 'next/image'
import PlaneImage from '@/assets/icons/plane.svg'
import PlaneEngine from '@/assets/icons/plane-engine.svg'

const Plane = () => {
  return (
    <div className='relative'>
      <Image src={PlaneImage} className='w-[4000px] ms-[-400px]' />
      {/* <Image src={PlaneEngine} className='absolute'/> */}
    </div>
  )
}

export default Plane
