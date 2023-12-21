import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import LineChart from '@/components/atoms/Chart'
import Summary from '@/components/atoms/Summary'

const PricingDetails = ({selectedFlight}) => {
  return (
    <div className='flex flex-col'>
      {selectedFlight.departingFlight==null ? 
        <>
            <p className='text-lg text-[#6E7491]'>Price grid (flexible dates)</p>

            <div className='border border-[#E9E8FC] rounded-xl mt-4'>
                <table className='w-full text-center divide-y-[1px] text-sm text-[#6E7491]'>
                    <thead>
                        <tr className='divide-x-[1px] '>
                            <td></td>
                            <td className='py-3 text-xs font-bold text-[#52556F]'>2/12</td>
                            <td className='text-xs font-bold text-[#52556F]'>2/13</td>
                            <td className='text-xs font-bold text-[#52556F]'>2/14</td>
                            <td className='text-xs font-bold text-[#52556F]'>2/15</td>
                            <td className='text-xs font-bold text-[#52556F]'>2/16</td>
                        </tr>
                    </thead>
                    <tbody className='divide-y-[1px] '>
                        <tr className='divide-x-[1px]'>
                            <td className='text-xs py-3 font-bold text-[#52556F]'>3/7</td>
                            <td>$837</td>
                            <td>$592</td>
                            <td>$592</td>
                            <td>$1,308</td>
                            <td>$837</td>
                        </tr>
                        <tr className='divide-x-[1px]'>
                            <td className='text-xs py-3 font-bold text-[#52556F]'>3/8</td>
                            <td>$837</td>
                            <td>$592</td>
                            <td>$592</td>
                            <td>$1,308</td>
                            <td>$837</td>
                        </tr>
                        <tr className='divide-x-[1px]'>
                            <td className='text-xs py-3 font-bold text-[#52556F]'>3/9</td>
                            <td>$837</td>
                            <td>$592</td>
                            <td>$592</td>
                            <td>$1,308</td>
                            <td>$837</td>
                        </tr>
                        <tr className='divide-x-[1px]'>
                            <td className='text-xs py-3 font-bold text-[#52556F]'>3/10</td>
                            <td>$837</td>
                            <td>$592</td>
                            <td>$592</td>
                            <td>$1,308</td>
                            <td>$837</td>
                        </tr>
                        <tr className='divide-x-[1px]'>
                            <td className='text-xs py-3 font-bold text-[#52556F]'>3/11</td>
                            <td>$837</td>
                            <td>$592</td>
                            <td>$592</td>
                            <td>$1,308</td>
                            <td>$837</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className='text-lg text-[#6E7491] mt-10'>Price history</p>
            
            <LineChart />

            <p className='text-lg text-[#6E7491] mt-10'>Price Rating <span className='text-white rounded px-2 pb-1 ms-4 bg-[#5CD6C0]'>Buy soon</span></p>

            <div className='text-[#6E7491] mt-4'>
                We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.
            </div>

            <p className='text-[#A1B0CC] mt-4'>
                Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
            </p>
        </> 
        
        : 
        <motion.div
            initial={{ opacity: 0, x: "0px", y: "0px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 0, x: "0px", y: "0px" }}
            transition={{ duration: 0.4 }}
            className='flex flex-col gap-8'
        >
                <Summary flights={selectedFlight} />
                <div className='xl:self-end'>          
                    {!selectedFlight.returningFlight ? 
                        <Link href={"/"} onClick={()=>{localStorage.setItem("flights",  JSON.stringify(selectedFlight))}} className='text-lg self-end px-5 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Save and Close</Link> 
                    :
                        <Link href={"/info"} onClick={()=>{localStorage.setItem("flights", JSON.stringify(selectedFlight))}} className={`text-lg px-5 py-3 rounded border text-white bg-purple-blue active:scale-95 transition-transform`}>Passanger Information</Link>
                    }
                </div>
        </motion.div>
      }
    </div>
  )
}

export default PricingDetails
