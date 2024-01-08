"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import  HawaiianAirline from '@/assets/images/Airlines/Hawaiian.png'
import  JapanAirline from '@/assets/images/Airlines/Japan.png'
import  DeltaAirline from '@/assets/images/Airlines/Delta.png'
import JourneyMap from '@/assets/images/world-map.svg'
import PricingDetails from './PricingDetails';

const Flights = () => {
  const flights = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("flights")) : null
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
    
  ]


  const [selectedFlights, setSelectedFlights] = useState(flights || {
    departingFlight: null,
    returningFlight: null
  })
  console.log(selectedFlights)

  useEffect(()=>{
    console.log(selectedFlights)
  },[selectedFlights])

  return (
    <section className='flex flex-col lg:flex-row justify-between gap-10 mt-12'>
      <div className='lg:w-8/12 flex flex-col'>
        <p className='text-lg text-[#6E7491] ps-1'>Choose a <span className='text-[#605DEC] fade-in'>{journey}</span> flight</p>

        <section className='p-4 mt-4 max-h-[525px] overflow-y-scroll rounded-xl border border-[#CBD4E6] hide-scroller'>
          {selectedFlights.departingFlight==null && departingFlights.map((flight, index)=>{
            return(
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "500px", y: "0px" }}
                animate={{ opacity: 1, x: "0", y: "0px" }}
                exit={{ opacity: 0, x: "0px", y: "0px" }}
                transition={{ duration: 0.5+(0.09*index) }}
              >
                <Flight tripType={journey} flight={flight} selectedFlight={selectedFlights} setSelectedFlights={setSelectedFlights} setJourney={setJourney} />
              </motion.div>
            )
          })}
          {selectedFlights.departingFlight!=null && returningFlights.map((flight, index)=>{
            return(
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "500px", y: "0px" }}
                animate={{ opacity: 1, x: "0", y: "0px" }}
                exit={{ opacity: 0, x: "0px", y: "0px" }}
                transition={{ duration: 0.5+(0.09*index) }}
              >
                <Flight tripType={journey} flight={flight} selectedFlight={selectedFlights} setSelectedFlights={setSelectedFlights} />
              </motion.div>
            )
          })}
        </section>

        <button className='text-lg self-end px-5 py-3 mt-6 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Show all flights</button>
        
        <div></
        <Image src={JourneyMap} className='w-full mt-12 bg-[#E9E8FC] rounded border border-[#CBD4E6]' />
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
