import React from 'react'

const PricingDetails = ({selectedFlight}) => {
  return (
    <div className='flex flex-col'>
      {selectedFlight.departingFlight==null && 
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
        </>
      }
    </div>
  )
}

export default PricingDetails
