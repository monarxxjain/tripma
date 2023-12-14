"use client"
import { useEffect, useState } from "react";
import BookingSeat from "@/components/molecules/booking/BookingSeat";
import Plane from "@/components/molecules/booking/Plane";
import SideNav from "@/components/molecules/booking/SideNav";

export default function Home(){
    const [selectedSeat, setSelectedSeat] = useState({
        seatNo: "--",
        seatType: "",
        isSeatSelected: false
    })
    const [journey, setJourney] = useState("Departing")
    useEffect(()=>{console.log(selectedSeat)},[selectedSeat])
    return (
        <div className="2xl:flex 2xl:overflow-hidden">
            <section className="h-screen overflow-scroll hide-scroller">
                <SideNav />
                <Plane selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
            </section>
            <section className="2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-1/2 2xl:h-screen bg-white/50 backdrop-blur-md z-40 border-s border-s-[#CBD4E6] overflow-hidden">
                <BookingSeat selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} journey={journey} setJourney={setJourney} />
            </section>
        </div>
    )
}