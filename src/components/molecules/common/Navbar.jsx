"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import TripmaLogo from "@/assets/icons/tripma-logo.svg"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [route, setRoute] = useState()

    useEffect(()=>{
      setRoute(window.location.pathname)
    },[])

  return (
    <div className='flex justify-between items-center px-6 py-2 sticky top-0 bg-white z-10'>
      <Image className='' src={TripmaLogo} />
      <section className='flex gap-4 p-4 '>
        <Link className={`text-grey-custom p-2 h-min text-hover-color ${route=="/" ? "text-[#605DEC]" : ""}`} href="/">Flights</Link>
        <Link className={`text-grey-custom p-2 h-min text-hover-color ${route==="/hotels" ? "text-[#605DEC]" : ""}`} href="/hotels">Hotels</Link>
        <Link className={`text-grey-custom p-2 h-min text-hover-color ${route==="/packages" ? "text-[#605DEC]" : ""}`} href="/packages">Packages</Link>

       {!isLoggedIn && <>
            <Link className={`text-grey-custom p-2 h-min text-hover-color ${route==="/sign-in" ? "text-[#605DEC]" : ""}`} href="/sign-in">Sign In</Link>
            <Link className='text-white py-3 px-5 bg-purple-blue rounded mt-[-3px]' href="/sign-up">Sign Up</Link>
        </>}

        {isLoggedIn && <>
            <Link className={`text-grey-custom p-2 h-min text-hover-color ${route==="/my-trips" ? "text-purple-blue" : ""}`} href="/my-trips">My Trips</Link>
            <div>Sign Up</div>
        </>}
      </section>
    </div>
  )
}

export default Navbar
