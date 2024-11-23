import React from 'react'
import Cards from './ui/Blogs/Cards'

const Blogs = () => {
    return (
        <div className='mx-4 md:mx-16'>
            <div className="flex space-x-4" data-aos='fade-up'>
                <div className="custom-line"></div>
                <h1 className='font-extrabold text-xl mt-2'>Blogs</h1> {/* Added margin-top to separate the text */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl' data-aos='fade-up'   >Learn more from our<span className='text-primary'> latest news</span></h1>

                </div>

                <div className="col-span-1 text-xl">
                    <p>Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates.
                    </p>
                </div>
            </div>

            <Cards />

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

export default Blogs