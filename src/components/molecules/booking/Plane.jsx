import React from 'react'
import Image from 'next/image'
import PlaneImage from '@/assets/icons/plane.svg'
import PlaneEngine from '@/assets/icons/plane-engine.svg'
import LeftPilot from '@/assets/icons/left-pilot.svg'
import RightPilot from '@/assets/icons/right-pilot.svg'
import PlaneInnerBody from '@/assets/icons/plane-inner-body.svg'
import InfoIcon from '@/assets/icons/info-icon.svg'

const Plane = () => {
  const noOfBusinessSeatRows = 5;
  const noOfEconomySeatRows = 28;
  const rowNoAfterExitRow = [6, 14, 19, 29]

  let businessBlock = [];

  for (let index = 0; index < noOfBusinessSeatRows; index++) {
    businessBlock.push(<BusinessRow index={index}/>)
  }

  let economyBlock = [];

  for (let index = 0; index < noOfEconomySeatRows; index++) {
    let isExitRow = false;
    if(rowNoAfterExitRow.includes(noOfBusinessSeatRows+index+1)){
      isExitRow = true;
    }
    economyBlock.push(<EconomyRow index={noOfBusinessSeatRows+index} isExitRow={isExitRow}/>)
  }

  return (
    <div className='relative'>
      <Image src={PlaneImage} className='relative ms-[-25vw] z-10' />
      <Image src={PlaneEngine} className='absolute w-[9vw] top-1/2 transform -translate-y-[12vw] z-0'/>
      <Image src={PlaneEngine} className='absolute w-[9vw] top-1/2 left-1/2 transform -translate-x-[8vw] -translate-y-[12vw] z-0'/>
      <Image src={LeftPilot} className='absolute w-[3.7vw] top-[10vw] left-1/4 -translate-x-[3.9vw] z-20'/>
      <Image src={RightPilot} className='absolute w-[3.7vw] top-[10vw] left-1/4 z-20'/>
      <Image src={PlaneInnerBody} className='absolute w-[10vw] top-[13vw] left-1/4 -translate-x-[5vw] z-20'/>

      {/* Business Class */}
      <div className='absolute top-[20vw] left-1/4 -translate-x-[4.4vw] z-20'>
        <section className='bg-white rounded-lg  w-[8.8vw] p-2 '>
          {businessBlock}
        </section>
        <section className='bg-white rounded-lg w-[8.8vw] p-1 mt-4'>
          {economyBlock}
        </section>
      </div>
    </div>
  )
}

const Seat = ({variant}) => {
  return (
    <div className={`rounded ${variant=="Business" ? "businessClass" : ""} ${variant=="Economy" ? "economyClass" : ""} ${variant=="BookedBusiness" ? "bookedBusinessClass" : ""} ${variant=="BookedEconomy" ? "bookedEconomyClass" : ""}`}></div>
  )
}

const BusinessRow = ({index}) => {
  return (
    <div className='flex justify-between items-center gap-1 my-2'>
      <div className='flex gap-2'>
        <Seat variant={"Business"}/>
        <Seat variant={"BookedBusiness"}/>
      </div>
      <div className='text-[#7C8DB0] text-sm'>
        {index+1}
      </div>
      <div className='flex gap-2'>
        <Seat variant={"Business"}/>
        <Seat variant={"BookedBusiness"}/>
      </div>
    </div>
  )
}

const EconomyRow = ({index, isExitRow}) => {
  return (
    <div>
      {isExitRow && <div className='flex gap-1'>
        <Image src={InfoIcon} />
        <p className='text-xs text-[#7C8DB0]'>Exit row</p>
      </div>}
      <div className='flex justify-between items-center gap-1 my-2'>
        <div className='flex gap-1'>
          <Seat variant={"Economy"}/>
          <Seat variant={"Economy"}/>
          <Seat variant={"BookedEconomy"}/>
        </div>
        <div className='text-[#7C8DB0] text-sm text-center w-[10vw]'>
          {index+1}
        </div>
        <div className='flex gap-1'>
          <Seat variant={"Economy"}/>
          <Seat variant={"Economy"}/>
          <Seat variant={"BookedEconomy"}/>
        </div>
      </div>
    </div>
  )
}

export default Plane
