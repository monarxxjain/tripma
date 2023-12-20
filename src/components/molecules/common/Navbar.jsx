"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import TripmaLogo from "@/assets/icons/tripma-logo.svg"
import Hamburger from '@/assets/icons/hamburger.svg'
import CloseNav from '@/assets/icons/left-arrow-purple.svg'
import Cross from '@/assets/icons/cross-dark.svg'
import GoogleIcon from '@/assets/icons/google.svg'
import AppleIcon from '@/assets/icons/apple-black.svg'
import FacebookIcon from '@/assets/icons/facebook-blue.svg'
import TextField from '@mui/material/TextField'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [route, setRoute] = useState()
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const [displaySignUpPopup, setDisplaySignUpPopup] = useState(false)
    const [closeAnimation, setCloseAnimation] = useState("hidden")
    const [popupCloseAnimation, setPopupCloseAnimation] = useState("hidden")
    useEffect(()=>{
      setRoute(window.location.pathname)
    },[])

  return (
    <>
      <div className='flex justify-between items-center px-4 md:px-6 py-2 sticky top-0 bg-white z-20'>
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
              <button className='text-white py-3 px-5 bg-purple-blue rounded mt-[-3px] active:scale-95 transition-all' onClick={()=>{setDisplaySignUpPopup(true); setPopupCloseAnimation("fade-out")}} >Sign Up</button>
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
              <button className='text-white py-3 px-5 text-3xl text-center bg-purple-blue w-full rounded mt-[-3px] active:scale-95 transition-all'>Sign Up</button>
          </>}

          {isLoggedIn && <>
              <Link className={`text-grey-custom p-2 h-min text-3xl text-center text-hover-color ${route==="/my-trips" ? "text-purple-blue" : ""}`} href="/my-trips">My Trips</Link>
              <div className='text-grey-custom p-2 h-min text-3xl text-center text-hover-color'>Profile</div>
          </>}
        </div>
      </section>

      <section className={`fixed overflow-y-scroll hide-scroller top-0 h-screen w-full bg-white/40 z-10 flex items-center justify-center ${displaySignUpPopup ? "fade-in" : popupCloseAnimation}`}>
        <div className="bg-white rounded-xl max-w-xl top-1/2 p-10 w-fit full-shadow flex flex-col gap-2">
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center gap-2'>
              <h1 className='text-2xl font-bold text-[#6E7491]'>Sign up for Tripma</h1>
              <Image src={Cross} className='cursor-pointer' onClick={()=>{setPopupCloseAnimation("fade-out"); setDisplaySignUpPopup(false)}} />
            </div>
            <p className='text-lg text-[#7C8DB0] mb-2'>Tripma is totally free to use. Sign up using your email address or phone number below to get started.</p>
            <TextField
                label="Email or phone number"
                id="outlined-size-small"
                defaultValue=""
                size="small"
            />
            <TextField
                label="Password"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                type='password'
            />
            <div>
              <div className='flex gap-2 py-1 items-center'>
                <input type='checkbox' />
                <p className='text-[#6E7491] mb-1'>I agree to the <a className='text-[#605DEC]' href='#'>terms and conditions</a></p>
              </div>
              <div className='flex gap-2 py-1 items-center'>
                <input type='checkbox' />
                <p className='text-[#6E7491] mb-1'>Send me the latest deal alerts</p>
              </div>
            </div>
            <button className='bg-purple-blue text-white active:scale-95 transition-all py-3 px-5 rounded text-lg'>Create Account</button>
          </div>

          <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center p-2'>
                    <div className='h-[1px] w-full bg-[#CBD4E6]'></div>
                    <div className='text-[#7C8DB0]'>or</div>
                    <div className='h-[1px] w-full bg-[#CBD4E6]'></div>
                </div>
                <button className='flex justify-between items-center gap-1 px-5 py-3 w-full text-[#605DEC] border border-[#605DEC] rounded hover:bg-[#5f5dec13] transition-all active:scale-95'>
                    <Image src={GoogleIcon} />
                    <p>Sign up with Google</p>
                    <p className='invisible'>Hide</p>
                </button>
                <button className='flex justify-between items-center gap-1 px-5 py-3 w-full text-[#605DEC] border border-[#605DEC] rounded hover:bg-[#5f5dec13] transition-all active:scale-95'>
                    <Image src={AppleIcon} />
                    <p>Continue with Apple</p>
                    <p className='invisible'>Hide</p>
                </button>
                <button className='flex justify-between items-center gap-1 px-5 py-3 w-full text-[#605DEC] border border-[#605DEC] rounded hover:bg-[#5f5dec13] transition-all active:scale-95'>
                    <Image src={FacebookIcon} />
                    <p>Continue with Facebook</p>
                    <p className='invisible'>Hide</p>
                </button>
            </div>
        </div>
      </section>

    </>
  )
}

export default Navbar
