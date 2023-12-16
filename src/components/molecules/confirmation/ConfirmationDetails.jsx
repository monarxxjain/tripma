import React from 'react'
import ConfirmationNumber from './ConfirmationNumber'
import FlightSummary from './FlightSummary'
import PriceBreakdown from './PriceBreakdown'
import PaymentMethod from './PaymentMethod'
import ShareItinerary from './ShareItinerary'
import FlightRoute from './FlightRoute'

const ConfirmationDetails = () => {
  return (
    <div className='py-16 px-24 flex justify-between gap-10'>
        <div className='flex flex-col gap-14 w-7/12'>
            <ConfirmationNumber confirmationNo={"#381029404387"} passangerName={"Sophia"} />
            <FlightSummary/>
            <PriceBreakdown />
            <PaymentMethod name={"Sophia Knowles"} last4Digits={"3456"} exp={"10/23"}/>
            <ShareItinerary />
            <FlightRoute/>
        </div>
    </div>
  )
}

export default ConfirmationDetails
