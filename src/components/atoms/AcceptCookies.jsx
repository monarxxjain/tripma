"use client"
import React, { useRef, useState } from 'react'

const AcceptCookies = () => {
    const [isVisible, setIsVisible] = useState(true);

    const cookiePerm = useRef()
    // Function to handle the click event on the cross button
    const handleClose = () => {
        cookiePerm.current.classList.add('fade-out')
        setTimeout(() => {
            setIsVisible(false);
        }, 350);
    };
    return (
        isVisible && <div ref={cookiePerm} className='flex flex-col gap-3 py-4 px-6 rounded-lg fixed left-4 bottom-4 md:left-10 md:bottom-10 border border-[#605DEC] max-w-[280px] backdrop-blur  '>
            <div className='flex justify-between gap-6 text-purple-blue'>
                <div>By using our site, you agree to eat our cookies.</div>
                <div onClick={handleClose} className='cursor-pointer'>&#10005;</div>
            </div>
            <div className='flex gap-1 items-center'>
                <button className='px-3 py-2 bg-purple-blue rounded text-white text-sm active:scale-95 transition-all' onClick={handleClose}>Accept Cookies</button>
                <button className='px-2 text-sm text-purple-blue'>Go to settings</button>
            </div>
        </div>
    )
}

export default AcceptCookies
