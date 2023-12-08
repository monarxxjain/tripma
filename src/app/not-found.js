"use client"

import AlertComponent from "@/components/atoms/AlertComponent"
import Footer from "@/components/molecules/common/Footer"
import Navbar from "@/components/molecules/common/Navbar"

export default function Home(){
    return(
        <>
            <AlertComponent/>
            <Navbar/>
            <div className="bg-[url('/images/hero-world.png')] py-44 flex flex-col gap-20 h-[80vh]">
                <section className="bg-[url('/images/gradient-bg.png')] flex gap-6 inset-0 bg-cover bg-center bg-no-repeat bg-clip-text text-transparent text-7xl font-bold  max-w-xl mx-auto pb-5">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className="text-9xl">404</div>
                    <div>Page not found</div>
                </section>
            </div>
            <Footer/>
        </>
    )
}