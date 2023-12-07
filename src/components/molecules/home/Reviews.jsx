import React from 'react'
import Image from 'next/image'
import Review1 from '@/assets/images/Reviews/review1.svg'
import Review2 from '@/assets/images/Reviews/review2.svg'
import Review3 from '@/assets/images/Reviews/review3.svg'

import FilledStar from '@/assets/icons/filled-star.svg'
import OutlinedStar from '@/assets/icons/outlined-star.svg'

const Reviews = () => {
    const reviews = [
        {
            image: Review1,
            name: "Yifei Chen",
            address: "Seoul, South Korea",
            date: "April 2019",
            rating: 5,
            content: "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more..."
        },
        {
            image: Review2,
            name: "Kaori Yamaguchi",
            address: "Honolulu, Hawaii",
            date: "February 2017",
            rating: 4,
            content: "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and read more..."
        },
        {
            image: Review3,
            name: "Anthony Lewis",
            address: "Berlin, Germany",
            date: "April 2019",
            rating: 5,
            content: "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for read more..."
        },
    ]
  return (
    <div className='p-16 flex flex-col gap-6'>
      <div className='text-2xl font-bold text-[#6E7491] mx-auto'>What <span className='text-purple-blue'>Tripma</span> users are saying</div>

      <section className='grid grid-cols-3 gap-10 justify-between'>
        {reviews.map((review, id)=>{
            const filledStars = [];
            const outlinedStars = [];

            // Use a for loop to push the repeated components into an array
            for (let i = 0; i < review.rating; i++) {
              filledStars.push(<Image src={FilledStar} alt='filled-star' key={i} />);
            }
            for (let i = 0; i < 5 - review.rating; i++) {
              outlinedStars.push(<Image src={OutlinedStar} alt='outlined-star' key={i} />);
            }

            return(
                <div key={id} className='flex gap-4 p-4 items-start'>
                    <Image src={review.image} alt="Review 1" />
                    <div>
                        <div className='text-[#6E7491] font-medium'>{review.name}</div>
                        <div className='text-[#6E7491]'>
                            {review.address} | {review.date}
                        </div>
                        <div className='flex'>
                            {filledStars}
                            {outlinedStars}
                        </div>
                        <div className='mt-3 line-clamp-6'>{review.content}</div>
                    </div>
                </div>
            )
        })}
      </section>
    </div>
  )
}

export default Reviews
