import React from 'react'
import FlightSearch from './FlightSearch'

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-world.png')] py-24 flex flex-col gap-20">
      <section className="bg-[url('/images/gradient-bg.png')] inset-0 bg-cover bg-center bg-no-repeat bg-clip-text text-transparent text-7xl font-bold text-center max-w-xl mx-auto pb-5">
        It's more than just a trip
      </section>

      <section>
        <FlightSearch/>
      </section>
    </div>
  )
}

export default HeroSection
