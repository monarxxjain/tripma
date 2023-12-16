"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import TripmaLogo from "@/assets/icons/tripma-logo.svg"
import Hamburger from '@/assets/icons/hamburger.svg'
import CloseNav from '@/assets/icons/left-arrow-purple.svg'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [route, setRoute] = useState()
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const [closeAnimation, setCloseAnimation] = useState("hidden")
    useEffect(()=>{
      setRoute(window.location.pathname)
    },[])

  return (
    <>
      <div className='flex justify-between items-center px-4 md:px-6 py-2 sticky top-0 bg-white z-10'>
        <div className='flex items-center'>
          <Image className='md:hidden cursor-pointer' src={Hamburger} onClick={()=>{setIsSideNavOpen(true); setCloseAnimation("slide-out"); document.body.style.overflowY="hidden"}} />
          <Image className='' src={TripmaLogo} />
        </div>
        <section className='flex gap-4 md:p-4 '>
          <Link className={`hidden md:block text-grey-custom p-2 h-min text-hover-color ${route=="/" ? "text-[#605DEC]" : ""}`} href="/">Flights</Link>
          <Link className={`hidden md:block text-grey-custom p-2 h-min text-hover-color ${route==="/hotels" ? "text-[#605DEC]" : ""}`} href="/hotels">Hotels</Link>
          <Link className={`hidden md:block text-grey-custom p-2 h-min text-hover-color ${route==="/packages" ? "text-[#605DEC]" : ""}`} href="/packages">Packages</Link>

        {!isLoggedIn && <>
              <Link className={`hidden md:block text-grey-custom p-2 h-min text-hover-color ${route==="/sign-in" ? "text-[#605DEC]" : ""}`} href="/sign-in">Sign In</Link>
              <Link className='text-white py-3 px-5 bg-purple-blue rounded mt-[-3px]' href="/sign-up">Sign Up</Link>
          </>}

          {isLoggedIn && <>
              <Link className={`hidden md:block text-grey-custom p-2 h-min text-hover-color ${route==="/my-trips" ? "text-purple-blue" : ""}`} href="/my-trips">My Trips</Link>
              <div>Sign Up</div>
          </>}
        </section>
        
      </div>
      <section className={`absolute top-0 h-screen w-full flex flex-col bg-white px-4 ${isSideNavOpen ? "slide-in" : closeAnimation} z-40`}>
        <div className='flex items-center py-2'>
          <Image className='md:hidden cursor-pointer' src={CloseNav} onClick={()=>{setIsSideNavOpen(false); document.body.style.overflowY="scroll"}} />
          <Image className='' src={TripmaLogo} />
        </div>
        <div className='flex flex-col se gap-4 justify-center self-center my-auto -translate-y-10 w-full'>
          <Link className={`text-grey-custom p-2 h-min text-3xl text-center text-hover-color ${route=="/" ? "text-[#605DEC]" : ""}`} href="/">Flights</Link>
          <Link className={`text-grey-custom p-2 h-min text-3xl text-center text-hover-color ${route==="/hotels" ? "text-[#605DEC]" : ""}`} href="/hotels">Hotels</Link>
          <Link className={`text-grey-custom p-2 h-min text-3xl text-center text-hover-color ${route==="/packages" ? "text-[#605DEC]" : ""}`} href="/packages">Packages</Link>
          {!isLoggedIn && <>
              <Link className={`text-grey-custom p-2 h-min text-3xl text-center text-hover-color ${route==="/sign-in" ? "text-[#605DEC]" : ""}`} href="/sign-in">Sign In</Link>
              <Link className='text-white py-3 px-5 text-3xl text-center bg-purple-blue w-full rounded mt-[-3px]' href="/sign-up">Sign Up</Link>
          </>}

          {isLoggedIn && <>
              <Link className={`text-grey-custom p-2 h-min text-3xl text-center text-hover-color ${route==="/my-trips" ? "text-purple-blue" : ""}`} href="/my-trips">My Trips</Link>
              <div className='text-grey-custom p-2 h-min text-3xl text-center text-hover-color'>Profile</div>
          </>}
        </div>
      </section>
    </>
  )
}

export default Navbar
