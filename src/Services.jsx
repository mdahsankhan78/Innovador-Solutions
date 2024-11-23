import React from 'react'
import Cards from './Components/ui/Services/Cards'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <title>Services - Innovador Solutions</title>
      <div className="relative md:-top-24 inset-0 z-0 bg-cover bg-center h-[30rem] flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg-services.jpeg)' }}>
        <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

        <div className='z-30 space-y-4'>
          <h1 className='font-bold text-white text-5xl'>Services</h1>
          <p className='text-white text-lg text-center'><Link to={'/'} className='hover:text-primary transition-all'>Home</Link> - Services</p>
        </div>

      </div>

      <div className="">
        <div className="flex space-x-4 mx-4 md:mx-16 my-32 md:my-0" data-aos='fade-up'>
          <div className="custom-line"></div>
          <h1 className='font-extrabold text-xl mt-2'>Services</h1> {/* Added margin-top to separate the text */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-16">
          <div className="col-span-1">
            <h1 className='font-bold text-5xl' data-aos='fade-up'>We provide the<span className='text-primary'> best services.</span></h1>

          </div>

          <div className="col-span-1 text-xl">
            <p>Easily apply to multiple jobs with one click! Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!
            </p>
          </div>
        </div>

        <Cards />
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

export default Services