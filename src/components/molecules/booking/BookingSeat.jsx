import BookSeatNavigator from '@/components/atoms/BookSeatNavigator'
import React from 'react'
import SeatInfo from './SeatInfo'
import SubmitBooking from './SubmitBooking'

const BookingSeat = ({selectedSeat, setSelectedSeat, journey, setJourney}) => {
    const dummyBookingData = {
        from: {
            value: "SFO",
            address: "California, US"
        },
        to: {
            value: "NRT",
            address: "Tokyo, Japan"
        },
        departDetails: {
            date: "Feb 25",
            time: "7:00 AM"
        },
        arrivalDetails: {
            date: "Mar 21",
            time: "12:15 PM"
        }
    }
  return (
    <>
      <BookSeatNavigator 
        from={dummyBookingData.from} 
        to={dummyBookingData.to} 
        departDetails={dummyBookingData.departDetails} 
        arrivalDetails={dummyBookingData.arrivalDetails}  
        journey={journey} 
        setJourney={setJourney} 
      />
      <SeatInfo selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
      <SubmitBooking 
        passangerNo={1} 
        passangerName={"Sofia Knowles"} 
        selectedSeat={selectedSeat} 
        setSelectedSeat={setSelectedSeat}
        journey={journey} 
        setJourney={setJourney}
      />
    </>
  )
}

export default BookingSeat
