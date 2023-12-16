import React from 'react'
import ConfirmationNumber from './ConfirmationNumber'
import FlightSummary from './FlightSummary'
import PriceBreakdown from './PriceBreakdown'
import PaymentMethod from './PaymentMethod'
import ShareItinerary from './ShareItinerary'
import FlightRoute from './FlightRoute'
import ShopHotel from './ShopHotel'
import UniqueExperiences from './UniqueExperiences'

const ConfirmationDetails = () => {
  return (
    <div className='py-16 px-4 sm:px-10 lg:px-24 flex flex-col lg:flex-row justify-between gap-10'>
        <div className='flex flex-col gap-14 lg:w-7/12'>
            <ConfirmationNumber confirmationNo={"#381029404387"} passangerName={"Sophia"} />
            <FlightSummary/>
            <PriceBreakdown />
            <PaymentMethod name={"Sophia Knowles"} last4Digits={"3456"} exp={"10/23"}/>
            <ShareItinerary />
            <FlightRoute/>
        </div>

        <div className='flex flex-col gap-16 lg:w-4/12'>
            <ShopHotel />
            <UniqueExperiences />
        </div>
    </div>
  )
}

export default ConfirmationDetails
