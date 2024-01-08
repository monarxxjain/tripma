import BookSeatNavigator from '@/components/atoms/BookSeatNavigator'
import React from 'react'
import SeatInfo from './SeatInfo'
import SubmitBooking from './SubmitBooking'

const BookingSeat = ({selectedSeat, setSelectedSeat, journey, setJourney}) => {
  const searchDetails = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("searchDetails")) : null
    const dummyBookingData = {
        from: {
            value: searchDetails.from,
            address: "California, US"
        },
        to: {
            value: searchDetails.to,
            address: "Tokyo, Japan"
        },
        departDetails: {
            date: "Feb25",
            time: "7:00AM"
        },
        arrivalDetails: {
            date: "Mar21",
            time: "12:15PM"
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
