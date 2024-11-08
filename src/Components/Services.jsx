import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos";
import { CardsServices } from './ui/Services/CardsServices';
import AboutServices from './ui/Services/AboutServices';

const Services = () => {
    useEffect(() => {
        Aos.init({ easing: 'ease-in-out' });
    }, []);

    return (
        <div className='mx-8 xs:mx-16 my-16' id='Services' data-aos='fade-up' data-aos-duration='800'>
            <div className="flex space-x-4" >
                <div className="custom-line"></div>
                <h1 className='font-extrabold text-xl mt-2'>Services</h1> {/* Added margin-top to separate the text */}

            </div>
            <h1 className='font-bold text-5xl'>We provide the<span className='text-primary'> best services.</span></h1>

            <CardsServices />
            <AboutServices/>

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

export default Services