import BookSeatNavigator from '@/components/atoms/BookSeatNavigator'
import React from 'react'
import SeatInfo from './SeatInfo'
import SubmitBooking from './SubmitBooking'

const BookingSeat = () => {
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
      <BookSeatNavigator from={dummyBookingData.from} to={dummyBookingData.to} departDetails={dummyBookingData.departDetails} arrivalDetails={dummyBookingData.arrivalDetails} />
      <SeatInfo/>
      <SubmitBooking  passangerNo={1} passangerName={"Sofia Knowles"} seatNumber={"4A"} seatSelected={true} />
    </>
  )
}

export default BookingSeat
