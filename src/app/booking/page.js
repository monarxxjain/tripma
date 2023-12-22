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
    const [displaySignUpPopup, setDisplaySignUpPopup] = useState(false)
    const [popupCloseAnimation, setPopupCloseAnimation] = useState("hidden")

    useEffect(()=>{
        setTimeout(() => {
            setDisplaySignUpPopup(true)
        }, 1000);
    },[journey])
    
    return (
        <div className="xl:flex xl:overflow-hidden">
            <section className="xl:h-screen xl:overflow-scroll hide-scroller">
                <SideNav />
                <Plane selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
            </section>
            <section className="xl:absolute xl:right-0 xl:top-0 xl:w-1/2 xl:h-screen bg-white/50 backdrop-blur-md z-40 xl:border-s xl:border-s-[#CBD4E6] overflow-hidden">
                <BookingSeat selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} journey={journey} setJourney={setJourney} />
            </section>
            <section className={`fixed overflow-y-scroll hide-scroller top-0 h-screen w-full bg-white/40 flex items-center justify-center z-50 ${displaySignUpPopup ? "fade-in" : popupCloseAnimation}`}>
                <div className="bg-white rounded-xl max-w-xl top-1/2 p-6 mx-1.5 sm:mx-0 sm:p-10 w-fit medium-shadow flex flex-col gap-2">
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between items-center gap-2'>
                            <h1 className='text-2xl font-bold text-[#6E7491]'>Upgrade seat</h1>
                        </div>
                        <p className='text-lg text-[#7C8DB0] mb-2'>Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy.</p>
                        
                        <div className="flex gap-4 self-end">
                            <button onClick={()=>{setPopupCloseAnimation("fade-out"); setDisplaySignUpPopup(false)}} className='text-lg px-3 py-2 sm:px-5 sm:py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Cancel</button>
                            <button onClick={()=>{setPopupCloseAnimation("fade-out"); setDisplaySignUpPopup(false)}} className={`text-lg px-3 py-2 sm:px-5 sm:py-3 rounded border bg-purple-blue text-white active:scale-95 transition-transform `}>Upgrade for $199</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}