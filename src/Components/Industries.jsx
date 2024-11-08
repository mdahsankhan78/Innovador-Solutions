import React from 'react'
import IndustriesCards from './ui/Industries/IndustriesCards'

const Industries = () => {
  return (
    <div className='mx-8 xs:mx-16 my-16'>
      <div>
        <div className="flex space-x-4" >
          <div className="custom-line"></div>
          <h1 className='font-extrabold text-xl mt-2'>Industries</h1> {/* Added margin-top to separate the text */}

        </div>
        <h1 className='font-bold text-5xl'>Driving success in<span className='text-primary'> diverse industries</span></h1>

      </div>

      <IndustriesCards />
      <style jsx>
        {`
          .custom-line {
            width: 40px;             /* Adjust width as needed */
            height: 5px;             /* Adjust height as needed */
            background-color: #FFC107; /* Yellow color */
            margin: 20px 0;          /* Vertical margin (top and bottom) */
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow */
            border-radius: 5px;      /* Rounded edges */
          }
        `}
      </style>
    </div>
  )
}

export default Industries