import BookingSeat from "@/components/molecules/booking/BookingSeat";
import Plane from "@/components/molecules/booking/Plane";
import SideNav from "@/components/molecules/booking/SideNav";

export default function Home(){
    return (
        <div className="flex overflow-hidden">
            <section className="h-screen overflow-scroll hide-scroller">
                <SideNav />
                <Plane/>
            </section>
            <section className="absolute right-0 top-0 w-1/2 h-screen bg-white/50 backdrop-blur-md z-40 border-s border-s-[#CBD4E6]">
                <BookingSeat />
            </section>
        </div>
    )
}