import React from 'react'
import Image from 'next/image'
import EconomySeats from '@/assets/images/economySeats.svg'
import BusinessSeats from '@/assets/images/businessSeats.svg'
import GreenTick from '@/assets/icons/green-tick.svg'

const SeatInfo = ({selectedSeat, setSelectedSeat}) => {
    const economyFeatures = [
        "Built-in entertainment system",
        "Complimentary snacks and drinks",
        "One free carry-on and personal item"
    ]

    const businessFeatures = [
        "Extended leg room",
        "First two checked bags free",
        "Priority boarding",
        "Personalized service",
        "Enhanced food and drink service",
        "Seats that recline 40% more than economy",
        "Extended leg room",
        "First two checked bags free",
        "Priority boarding",
        "Personalized service",
        "Enhanced food and drink service",
        "Seats that recline 40% more than economy",
    ]
  return (
    <div className='flex flex-col md:flex-row py-2 px-4'>
        {/* Economy Class */}
        <section className='px-2 py-8 flex flex-col items-center gap-4 flex-1 xl:max-h-[77vh] overflow-y-scroll hide-scroller'>
            <div className='flex md:hidden gap-4 self-start'>
                <p className='text-lg text-[#6E7491] font-semibold'>Economy</p>
                {selectedSeat.seatType=="Economy" && <div className='purple-gradient text-white rounded font-semibold flex items-center justify-center px-[6px]'>Selected</div>}
            </div>
            <Image alt='Economy' src={EconomySeats} />
            <div className='flex flex-col gap-4 px-3 md:ps-10 self-start'>
                <div className='hidden md:flex gap-4'>
                    <p className='text-lg text-[#6E7491] font-semibold'>Economy</p>
                    {selectedSeat.seatType=="Economy" && <div className='purple-gradient text-white rounded font-semibold flex items-center justify-center px-[6px]'>Selected</div>}
                </div>
                <div className='text-sm text-[#7C8DB0]'>
                    Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service
                </div>

                <div className='bg-purple-blue opacity-50 w-8 h-1'></div>
                
                <div className='flex flex-col gap-4'>
                    {economyFeatures.map((feature, id)=>{
                        return (
                            <div key={id} className='flex items-center gap-4'>
                                <div className='bg-purple-blue h-3 w-3 rounded-full'></div>
                                <div className='text-[#6E7491] text-sm'>{feature}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        
        <div className='md:hidden w-[70vw] self-center my-10 h-[1px] bg-[#6e749186] '></div>

        {/* Business Class */}
        <section className='px-2 py-8 flex flex-col items-center gap-4 flex-1 xl:max-h-[70vh] overflow-y-scroll hide-scroller'>
            <div className='md:hidden flex gap-4 self-start'>
                <p className='text-lg text-[#6E7491] font-semibold'>Business</p>
                {selectedSeat.seatType=="Business" && <div className='green-gradient text-white rounded font-semibold flex items-center justify-center px-[6px]'>Selected</div>}
            </div>
            <Image alt='Business' src={BusinessSeats} />
            <div className='flex flex-col gap-4 px-3 md:ps-10 self-start'>
                <div className='hidden md:flex gap-4'>
                    <p className='text-lg text-[#6E7491] font-semibold'>Business</p>
                    {selectedSeat.seatType=="Business" && <div className='green-gradient text-white rounded font-semibold flex items-center justify-center px-[6px]'>Selected</div>}
                </div>
                <div className='text-sm text-[#7C8DB0]'>
                    Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service
                </div>

                <div className='bg-[#5CD6C0] opacity-50 w-8 h-1'></div>

                <div className='flex flex-col gap-4'>
                    {businessFeatures.map((feature, id)=>{
                        return (
                            <div key={id} className='flex items-center gap-4'>
                                <Image src={GreenTick} />
                                <div className='text-[#6E7491] text-sm'>{feature}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default SeatInfo
