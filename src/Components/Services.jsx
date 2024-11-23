import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos";
import AboutServices from './ui/Services/AboutServices';
import CustomButton from './ui/CustomButton';
import ServicesCards from './ui/Services/ServicesCards';
import Sticky from './ui/Services/Sticky';

const Services = () => {
    useEffect(() => {
        Aos.init({ easing: 'ease-in-out' });
    }, []);

    return (
        <div id='Services'>
            <Sticky/>
            <div className="mx-8 md:mx-16 ">
            <AboutServices />
            </div>  
            
        </div>
    )
}

export default Services
