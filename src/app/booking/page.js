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
        <div className="xl:flex xl:overflow-hidden">
            <section className="xl:h-screen xl:overflow-scroll hide-scroller">
                <SideNav />
                <Plane selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
            </section>
            <section className="xl:absolute xl:right-0 xl:top-0 xl:w-1/2 xl:h-screen bg-white/50 backdrop-blur-md z-40 xl:border-s xl:border-s-[#CBD4E6] overflow-hidden">
                <BookingSeat selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} journey={journey} setJourney={setJourney} />
            </section>
        </div>
    )
}