import React from 'react'
import Image from "next/image"
import Link from "next/link"
import TripmaLogo from "@/assets/icons/tripma-logo.svg"
import AppStore from '@/assets/icons/footer-app-store.svg'
import PlayStore from '@/assets/icons/footer-play-store.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Facebook from '@/assets/icons/facebook.svg'

const Footer = () => {
  return (
    <div className='py-4'>
      <Image className='md:hidden px-5 w-max mb-4' src={TripmaLogo} />
      <div className='px-8 lg:px-20 xl:px-32 md:pt-16 pb-6 grid grid-cols-2 sm:flex justify-between gap-8 items-start text-[#6E7491]'>
        <Image className='hidden md:block' src={TripmaLogo} />
        <div className="flex flex-col gap-2">
            <div className='font-semibold text-lg'>About</div>

            <p>About Tripma</p>
            <p>How it works</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Forum</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className='font-semibold text-lg'>Partner with us</div>

            <p>Partnership programs</p>
            <p>Affiliate program</p>
            <p>Connectivity partners</p>
            <p>Promotions and events</p>
            <p>Integrations</p>
            <p>Community</p>
            <p>Loyalty program</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className='font-semibold text-lg'>Support</div>

            <p>Help Center</p>
            <p>Contact us</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
            <p>Trust and safety</p>
            <p>Accessibility</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className='font-semibold text-lg'>Get the app</div>

            <p>Tripma for Android</p>
            <p>Tripma for iOS</p>
            <p>Mobile site</p>
            <Image src={AppStore} className='mt-2' />
            <Image src={PlayStore} className='mt-2' />
        </div>
      </div>
      <div className='px-8 lg:px-20 xl:px-32 py-3 pt-8 border-t border-t-[#CBD4E6] flex flex-wrap gap-x-10 justify-center sm:justify-between items-center text-[#7C8DB0]'>
        <div className='flex gap-5'>
            <a href='#'><Image src={Twitter} /></a>
            <a href='#'><Image src={Instagram} /></a>
            <a href='#'><Image src={Facebook} /></a>
        </div>
        <div>© 2020 Tripma incorporated</div>
      </div>
    </div>
  )
}

export default Footer
