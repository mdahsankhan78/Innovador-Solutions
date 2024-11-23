import React, { useEffect } from 'react';
import AboutCard from './ui/AboutCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Separator } from "./ui/separator"
const About = () => {
  return (
    <div className='mt-5 mx-8 xs:mx-16' id='About'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <div className="col-span-1">
          <AboutCard src={'ABOUT (1).jpg'}/>
        </div>

        <div className="col-span-1 lg:mt-[110px]">
          <div className="flex space-x-4" data-aos='fade-up'>
          <div className="custom-line"></div> 
          <h1 className='font-extrabold text-xl mt-2'>About us</h1> {/* Added margin-top to separate the text */}
          </div>
          <h1 className='font-bold text-5xl' data-aos='fade-up'>We always provide <span className='text-primary'>best features to Clients</span></h1>
                <div className="col-span-2 mt-12">
                <p className='text-gray-600 text-lg'>We are a leading software company dedicated to providing the best digital solutions to businesses. We have been serving a number of clients globally since 2022. We dispense the demanding services resulting in the transformation of companies into businesses to make them a prominent mark in the digital world, and we make it all possible with the back of our skilled professionals. Our registration with SECP, PSEB, P@SHA, CXO Global Forum, and other professional bodies makes us the chosen ones.</p>
                </div>
                <Separator className='my-4'/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0">
                  <div className="col-span-1 flex space-x-6 items-center">
                  <Separator orientation='vertical' className='hidden mr-8'/>
                    <FontAwesomeIcon className='text-primary h-10' icon={faUserCog}/>
                    <h1 className='text-2xl font-bold'>Expert team member</h1>
                  </div>
                  <div className="col-span-1 flex space-x-6 items-center">
                  <Separator orientation='vertical' className='hidden md:block mr-8'/>
                  <FontAwesomeIcon className='text-primary h-12' icon={faBullseye}/>
                  <h1 className='text-2xl font-bold'>Marketing facilities</h1>
                  </div>

                </div>

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
  );
};

export default About;
