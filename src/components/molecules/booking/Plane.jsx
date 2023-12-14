"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PlaneImage from '@/assets/icons/plane.svg'
import PlaneEngine from '@/assets/icons/plane-engine.svg'
import LeftPilot from '@/assets/icons/left-pilot.svg'
import RightPilot from '@/assets/icons/right-pilot.svg'
import PlaneInnerBody from '@/assets/icons/plane-inner-body.svg'
import InfoIcon from '@/assets/icons/info-icon.svg'
import Tick from '@/assets/icons/tick.svg'

const Plane = ({selectedSeat, setSelectedSeat}) => {
  const noOfBusinessSeatRows = 5;
  const noOfEconomySeatRows = 28;
  const rowNoAfterExitRow = [6, 14, 19, 29]

  let businessBlock = [];

  for (let index = 0; index < noOfBusinessSeatRows; index++) {
    businessBlock.push(<BusinessRow key={index+1} index={index+1} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />)
  }

  let economyBlock = [];

  for (let index = 0; index < noOfEconomySeatRows; index++) {
    let isExitRow = false;
    if(rowNoAfterExitRow.includes(noOfBusinessSeatRows+index+1)){
      isExitRow = true;
    }
    economyBlock.push(<EconomyRow key={noOfBusinessSeatRows+index+1} index={noOfBusinessSeatRows+index+1} isExitRow={isExitRow}  selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat}/>)
  }

  return (
    <div className='relative py-10 xl:py-0 overflow-x-hidden '>
      <div className='flex items-center justify-center xl:justify-start'>
        <Image src={PlaneImage} className='relative overflow-x-hidden h-[1830px] min-w-[2000px] xl:min-w-[1200px] xl:h-auto xl:w-[150vw] xl:ms-[-25vw] z-10' />
      </div>
      
      <Image src={PlaneEngine} className='hidden xl:block absolute w-[9vw] top-1/2 transform -translate-y-[12vw] z-0'/>
      <Image src={PlaneEngine} className='hidden xl:block absolute w-[9vw] top-1/2 left-1/2 transform -translate-x-[8vw] -translate-y-[12vw] z-0'/>
      <Image src={LeftPilot} className='hidden xl:block absolute w-[3.7vw] top-[10vw] left-1/4 -translate-x-[3.9vw] z-20'/>
      <Image src={RightPilot} className='hidden xl:block absolute w-[3.7vw] top-[10vw] left-1/4 z-20'/>
      <Image src={PlaneInnerBody} className='hidden xl:block absolute w-[10.5vw] top-[13vw] left-1/4 -translate-x-[5.25vw] z-20'/>
      
      <Image src={PlaneEngine} className='xl:hidden absolute w-[90px] md:w-[120px] top-1/2 transform left-[10vw] lg:left-[16vw] -translate-y-[15vw] lg:-translate-y-[12vw] z-0'/>
      <Image src={PlaneEngine} className='xl:hidden absolute w-[90px] md:w-[120px] top-1/2 transform right-[10vw] lg:right-[16vw] -translate-y-[15vw] lg:-translate-y-[12vw] z-0'/>
      <div className='xl:hidden absolute z-20 flex gap-1 left-1/2 -translate-x-[60px] top-[190px]'>
        <Image src={LeftPilot} className=' w-[60px]'/>
        <Image src={RightPilot} className=' w-[60px] '/>
      </div>
      <Image src={PlaneInnerBody} className='xl:hidden absolute w-[158px] xl:w-[10.5vw] top-[230px] xl:top-[15vw] left-1/2 -translate-x-[78px] xl:-translate-x-[5.25vw] z-20'/>

      {/* Business Class */}
      <div className='absolute top-[340px] xl:top-[20vw] left-1/2 -translate-x-[70px] xl:left-1/4 xl:-translate-x-[4.6vw] z-20'>
        <section className='bg-white rounded-lg  w-[140px] xl:w-[9.2vw] p-2 '>
          {businessBlock}
        </section>
        <section className='bg-white rounded-lg w-[140px] xl:w-[9.2vw] p-1 mt-4'>
          {economyBlock}
        </section>
      </div>
    </div>
  )
}

const Seat = ({variant, column, selectedSeat, setSelectedSeat, index}) => {
  const seat = useRef()
  const [clicked, setClicked] = useState(false)
  const seatNo = `${index}${column}`

  useEffect(()=>{
    if(variant=="Business"){

      if(seat.current.classList.contains("businessClass") && selectedSeat.seatNo==seatNo){
        seat.current.classList.add("businessClassSelected")
        seat.current.classList.remove("businessClass")
      }
      else{
        seat.current.classList.remove("businessClassSelected")
        seat.current.classList.add("businessClass")
      }
    }

    else if(variant=="Economy"){
      if(seat.current.classList.contains("economyClass") && selectedSeat.seatNo==seatNo){
        seat.current.classList.add("economyClassSelected")
        seat.current.classList.remove("economyClass")
      }
      else{
        seat.current.classList.remove("economyClassSelected")
        seat.current.classList.add("economyClass")
      }
    }

  },[selectedSeat.seatNo])

  return (
    <div 
      ref={seat}
      className={`rounded flex items-center justify-center
        ${variant=="Business" ? "businessClass" : ""} 
        ${variant=="Economy" ? "economyClass" : ""} 
        ${variant=="BookedBusiness" ? "bookedBusinessClass" : ""} 
        ${variant=="BookedEconomy" ? "bookedEconomyClass" : ""}`}

        onClick={()=>{
          if(!clicked){
            setSelectedSeat((prevSelectedSeat) => ({
              ...prevSelectedSeat,
              seatNo: seatNo,
              seatType: variant,
              isSeatSelected: true
            }));
          }
          else{
            setSelectedSeat((prevSelectedSeat) => ({
              ...prevSelectedSeat,
              seatNo: "--",
              seatType: "",
              isSeatSelected: false
            }));
          }
          setClicked(!clicked)
        }}
    >
      {selectedSeat.seatNo==seatNo && <Image src={Tick}/>}
    </div>
  )
}

const BusinessRow = ({index, selectedSeat, setSelectedSeat}) => {
  return (
    <div className='flex justify-between items-center gap-1 my-2'>
      <div className='flex gap-1 xl:gap-2'>
        <Seat variant={"Business"} column={"A"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
        <Seat variant={"BookedBusiness"} column={"B"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
      </div>
      <div className='text-[#7C8DB0] text-[10px] xl:text-sm'>
        {index}
      </div>
      <div className='flex gap-1 xl:gap-2'>
        <Seat variant={"Business"} column={"C"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
        <Seat variant={"BookedBusiness"} column={"D"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
      </div>
    </div>
  )
}

const EconomyRow = ({index, isExitRow, selectedSeat, setSelectedSeat}) => {
  return (
    <div>
      {isExitRow && <div className='flex gap-1'>
        <Image src={InfoIcon} />
        <p className='text-[10px] xl:text-xs text-[#7C8DB0]'>Exit row</p>
      </div>}
      <div className='flex justify-between items-center gap-1 my-1 xl:my-2'>
        <div className='flex gap-0.5 xl:gap-1'>
          <Seat variant={"Economy"} column={"A"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
          <Seat variant={"Economy"} column={"B"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
          <Seat variant={"BookedEconomy"} column={"C"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
        </div>
        <div className='text-[#7C8DB0] text-[10px] xl:text-sm text-center xl:w-[10vw]'>
          {index}
        </div>
        <div className='flex gap-0.5 xl:gap-1'>
          <Seat variant={"Economy"} column={"D"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
          <Seat variant={"Economy"} column={"E"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
          <Seat variant={"BookedEconomy"} column={"F"} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} index={index}/>
        </div>
      </div>
    </div>
  )
}

export default Plane
