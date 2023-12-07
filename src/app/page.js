import AcceptCookies from '@/components/atoms/AcceptCookies'
import AlertComponent from '@/components/atoms/AlertComponent'
import Navbar from '@/components/molecules/common/Navbar'
import FlightDeals from '@/components/molecules/home/FlightDeals'
import HeroSection from '@/components/molecules/home/HeroSection'
import Places from '@/components/molecules/home/Places'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <AlertComponent/>
      <Navbar/>
      <HeroSection/>
      <AcceptCookies/>
      <FlightDeals/>
      <Places/>
    </>
  )
}
