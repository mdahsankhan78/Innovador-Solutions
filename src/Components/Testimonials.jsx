import React from 'react'
import { TestimonialsCarousel } from './ui/Testimonials/TestimonialsCarousel'
import AboutCard from './ui/AboutCard'

const Testimonials = () => {
    return (
        <div className='md:mr-16 my-16'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1">
                    <div className="p-8 xs:p-16">
                        <div className="flex space-x-4" >
                            <div className="custom-line"></div>
                            <h1 className='font-extrabold text-xl mt-2'>Testimonials</h1> {/* Added margin-top to separate the text */}
                            
                        </div>
                        <h1 className='font-bold text-5xl'>Some feedbacks<span className='text-primary'> from honorable Clients</span></h1>
                        <TestimonialsCarousel/>
                    </div>
                </div>
                <div className="col-span-1">
                    <AboutCard src={'test4.png'}/>
                </div>
            </div>


            <style jsx>
                {`
          .custom-line {
            width: 40px;             /* Adjust width as needed */
            height: 5px;             /* Adjust height as needed */
            background-color: #FFC107; /* Yellow color */
            margin: 20px 0;          /* Vertical margin (top and bottom) */
            border-radius: 5px;      /* Rounded edges */
          }
        `}
            </style>
        </div>
    )
}

export default Testimonials