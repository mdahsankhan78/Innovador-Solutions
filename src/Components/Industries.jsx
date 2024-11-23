import React from 'react'
import Cards2 from './ui/Industries/Cards2'
import IndustryCards from './ui/Industries/IndustryCards'
import Carousel from './ui/Clients/Carousel'

const Industries = () => {
  return (
    <div className='mx-8 xs:mx-16 my-16'>
      <div>
        <div className="flex space-x-4" data-aos='fade-up'>
          <div className="custom-line"></div>
          <h1 className='font-extrabold text-xl mt-2'>Industries</h1> {/* Added margin-top to separate the text */}

        </div>
        <h1 className='font-bold text-5xl' data-aos='fade-up'>Driving success in<span className='text-primary'> diverse industries</span></h1>

      </div>

      {/* <IndustriesCards />  */}
      <IndustryCards/>
      <div className="flex items-center mt-16 space-x-4" data-aos='fade-up'>
      <div className="custom-line"></div>
      <h1 className='font-extrabold text-xl'>Our Clients</h1>
      </div>
      <h1 className='font-bold text-5xl' data-aos='fade-up'>We Value our<span className='text-primary'> Customer's Trust</span></h1>
      
      {/* <CarouselIndustry/> */}

      <Carousel/>

      <Cards2/>


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

export default Industries