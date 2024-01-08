"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import  HawaiianAirline from '@/assets/images/Airlines/Hawaiian.png'
import  JapanAirline from '@/assets/images/Airlines/Japan.png'
import  DeltaAirline from '@/assets/images/Airlines/Delta.png'
import JourneyMap from '@/assets/images/world-map.svg'
import PlaneIcon from '@/assets/icons/plane-small.svg'
import LocationPoint from '@/assets/icons/location-point.svg'
import FlightPath from '@/assets/icons/flight-path.svg'
import PricingDetails from './PricingDetails';

const Flights = () => {
  const flights = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("flights")) : null
  const searchDetails = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("searchDetails")) : null
  const [journey, setJourney] = useState(flights?.departingFlight ? "arriving" : "departing")
  const departingFlights = [
    {
      id: 0,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 1,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 2,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 3,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 4,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 5,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 6,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 7,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 8,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 9,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 10,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 11,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 12,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 13,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 14,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 15,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 16,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 17,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    
  ]
  const returningFlights = [
    {
      id: 0,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 1,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 2,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 3,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 4,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 5,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 6,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 7,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 8,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 9,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 10,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 11,
      icon: HawaiianAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 12,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 13,
      icon: JapanAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 14,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 15,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 16,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    {
      id: 17,
      icon: DeltaAirline,
      details: {        
        airline: "Hawaiian Airlines",
        duration: "16h 45m",
        timing: "7:00AM - 4:15PM",
        waiting: "2h 45m in HNL",
        stops: "1 stop",
        tripType: "round trip",
        price: "$624"
      }
    },
    
  ]
  const bottomScroller = useRef()
  const [flightCount, setFlightCount] = useState(7)

  const [selectedFlights, setSelectedFlights] = useState(flights || {
    departingFlight: null,
    returningFlight: null
  })
  console.log(selectedFlights)

  const fetchMoreFlights = () => {
    setFlightCount(flightCount+6);  
    setTimeout(() => {
      bottomScroller.current.scrollBy({ top: 1000, behavior: 'smooth' });
    }, 20)
  }

  useEffect(()=>{
    console.log(selectedFlights)
  },[selectedFlights])

  return (
    <section className='flex flex-col lg:flex-row justify-between gap-10 mt-12'>
      <div className='lg:w-8/12 flex flex-col'>
        <p className='text-lg text-[#6E7491] ps-1'>Choose a <span className='text-[#605DEC] fade-in'>{journey}</span> flight</p>

        <section className='p-4 mt-4 max-h-[525px] overflow-y-scroll scroll-smooth rounded-xl border border-[#CBD4E6] hide-scroller' ref={bottomScroller} >
          {selectedFlights.departingFlight==null && departingFlights.map((flight, index)=>{
            if(index < flightCount)
            return(
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "500px", y: "0px" }}
                animate={{ opacity: 1, x: "0", y: "0px" }}
                exit={{ opacity: 0, x: "0px", y: "0px" }}
                transition={{ duration: 0.8+(0.09*index) }}
              >
                <Flight tripType={journey} flight={flight} selectedFlight={selectedFlights} setSelectedFlights={setSelectedFlights} setJourney={setJourney} />
              </motion.div>
            )
          })}
          {selectedFlights.departingFlight!=null && returningFlights.map((flight, index)=>{
            if(index < flightCount) return(
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "500px", y: "0px" }}
                animate={{ opacity: 1, x: "0", y: "0px" }}
                exit={{ opacity: 0, x: "0px", y: "0px" }}
                transition={{ duration: 0.8+(0.09*index) }}
              >
                <Flight tripType={journey} flight={flight} selectedFlight={selectedFlights} setSelectedFlights={setSelectedFlights} />
              </motion.div>
            )
          })}
          <p className='text-[1px] invisible'>k</p>
        </section>

        <button onClick={()=>{fetchMoreFlights()}} className='text-lg self-end px-5 py-3 mt-6 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Show all flights</button>
        
        <div className='relative w-fit mt-12'>
          <Image src={JourneyMap} className=' bg-[#E9E8FC] rounded border border-[#CBD4E6]' />
          <Image src={LocationPoint} className='absolute top-1/2 left-[33.2%] w-[5px] translate-y-[1vw]' />
          <Image src={LocationPoint} className='absolute top-1/2 left-[60.5%] w-[5px] translate-y-1' />
          <Image src={FlightPath} className='absolute top-1/2 left-1/3 -translate-y-2 translate-x-1 w-[27%]' />
          <Image src={PlaneIcon} className={`absolute top-1/2 left-1/2 -translate-x-[2vw] -translate-y-5 ${journey=="departing" ? "rotate-180" : ""}`} />
          <p className='absolute top-1/2 left-[33.5%] translate-y-4 text-xs text-[#1513A0] font-bold'>{searchDetails.from}</p>
          <p className='absolute top-1/2 text-xs left-[57%] translate-y-2 text-[#1513A0] font-bold'>{searchDetails.to}</p>
        </div>
      </div>

      <div className='lg:w-4/12 mb-10'>
        <PricingDetails selectedFlight={selectedFlights} />
      </div>
    </section>
  )
}

const Flight = ({tripType, flight, selectedFlight, setSelectedFlights, setJourney}) => {
  const handleClick = () => {
    tripType==="departing" ? setSelectedFlights((prev)=>({...prev, departingFlight: flight})) 
                           : setSelectedFlights((prev)=>({...prev, returningFlight: flight})); 
    tripType==="departing" ? setJourney("returning"): null;

  }
  return(
    <div className=' border-b border-b-[#CBD4E6] select-none'>
      <div onClick={()=>handleClick()} className={`${selectedFlight.returningFlight?.id === flight.id  ? "border border-[#605DEC] bg-[#F6F6FE]" : ""} px-4 my-1 flex items-center gap-2 rounded w-full hover:bg-[#F6F6FE] cursor-pointer transition-all active:scale-[98%] active:border active:border-[#605DEC]`}>
          <Image src={flight.icon} />
          <div className='px-4 py-2 grid grid-cols-2 md:flex lg:grid lg:grid-cols-2 gap-y-3 xl:flex w-full justify-between'>

            <div className='flex flex-col'>
                <p>{flight.details.duration}</p>
                <p className='text-[#7C8DB0]'>{flight.details.airline}</p>
            </div>
            <div className='flex flex-col'>
                <p>{flight.details.timing}</p>
            </div>
            <div className='flex flex-col'>
                <p>{flight.details.stops}</p>
                <p className='text-[#7C8DB0]'>{flight.details.waiting}</p>
            </div>
            <div className='flex flex-col'>
                <p>{flight.details.price}</p>
                <p className='text-[#7C8DB0]'>{flight.details.tripType}</p>
            </div>
                  
          </div>
      </div>
    </div>
  )
}

export default Flights
