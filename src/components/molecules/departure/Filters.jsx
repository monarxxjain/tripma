"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Drop from '@/assets/icons/drop-down.svg'
const Filters = () => {
    const filters = [
        {
            name: "Max Price",
            options: [100,200,300]
        },
        {
            name: "Shops",
            options: [100,200,300]
        },
        {
            name: "Times",
            options: [100,200,300]
        },
        {
            name: "Airlines",
            options: [100,200,300]
        },
        {
            name: "Seat class",
            options: [100,200,300]
        },
        {
            name: "More",
            options: [100,200,300]
        },
    ]
  return (
    <div  className='custom-dropdown flex gap-4 mt-6'>
        {filters.map((filter, index)=>{
            const dropDown = useRef()
            return (
                <div key={index} className='py-2 px-3 flex justify-between rounded border border-[#CBD4E6]'>
                    <select  ref={dropDown} className='z-10 bg-transparent'>
                        <option value="">{filter.name}</option>
                        {filter.options.map((option, id)=>{
                            return (
                                <option key={id} value={option}>{option}</option>
                                )
                            })}
                    </select>
                    <Image src={Drop} onClick={()=>dropDown.current.click()} className='cursor-pointer ms-[-15px]' />
                </div>
            )
        })}
    </div>
  )
}

export default Filters
