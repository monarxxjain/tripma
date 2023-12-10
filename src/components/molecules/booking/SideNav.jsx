import React from 'react'
import Image from 'next/image'
import Hamburger from '@/assets/icons/hamburger.svg'
import TripmaLogo from '@/assets/icons/tripma-logo.svg'
const SideNav = () => {
  return (
    <div className='flex ps-6 py-5 gap-3 sticky top-0 z-30'>
      <Image src={Hamburger} alt='Open Nav' className='cursor-pointer'/>
      <Image src={TripmaLogo} alt='Tripma'/>
    </div>
  )
}

export default SideNav
