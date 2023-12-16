import React from 'react'
import Exp1 from '@/assets/images/UniueExp/exp1.png'
import Exp2 from '@/assets/images/UniueExp/exp2.png'
import Card from '@/components/atoms/Card'
const UniqueExperiences = () => {
    const experiences = [
        {
            image: Exp1,
            heading: "Ryokan Japan",
            amount: "$439",
            description: "Enjoy views of the garden from your room"
        },
        {
            image: Exp2,
            heading: "Bessho SASA",
            amount: "$529",
            description: "Japanese ryokan with private onsen bath"
        }
    ]
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-[#6E7491]'>Find unique <span className='text-[#605DEC]'>experiences</span></h1>
        <div className='flex flex-col gap-8'>
            <p className='text-lg text-[#7C8DB0]'>
                Find events and authentic cultrual experiences available exclusively to Tripma users.
            </p>
            <div className='flex flex-col gap-8'>
                {experiences.map((exp, index)=>{
                    return(
                        <Card key={index} image={exp.image} heading={exp.heading} amount={exp.amount} description={exp.description} />
                    )
                })}
            </div>
            <button className='py-3 px-5 text-lg text-[#605DEC] border border-[#605DEC] rounded w-fit self-center hover:bg-[#5f5dec15] transition-all active:scale-95'>View all experiences</button>
        </div>
    </div>
  )
}

export default UniqueExperiences
