import { ArrowRight, BoxSelectIcon, LucideBoxes } from 'lucide-react'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos";

const ServicesCards = () => {
  
  useEffect(() => {
    Aos.init({ easing: 'ease-in-out' });
  }, []);
  
  return (
    <div className="mx-16 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <div className="col-span-1" data-aos='fade-up' data-aos-duration='600'>
          <div className="bg-gray-200 flex group relative transform duration-500 hover:bg-black hover:text-white "> {/* group for hover effect */}
            <div className='p-6 border-t-4 border-primary w-[50%]'>
              <img src="/images/icon (1).png" className='h-[32] p-4 bg-white' alt="" />
            </div>

            <div className="relative">
              <h1 className='font-bold text-2xl mt-6'>Logo & Branding</h1>
              <p className="text-gray-600 text-lg">
                Our purpose is to build solutions that remove
              </p>

              {/* Hidden layer beneath paragraph */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 translate-y-0 group-hover:opacity-100 group-hover:h-[80px] transition-all duration-600">
                <div className="mt-3 flex space-x-3">
                <p className='text-lg'>Read more</p> <ArrowRight className='text-primary'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1" data-aos='fade-up' data-aos-duration='800'>
          <div className="bg-gray-200 flex group relative transform duration-500 hover:bg-black hover:text-white "> {/* group for hover effect */}
            <div className='p-6 border-t-4 border-primary w-[50%]'>
              <img src="/images/icon (2).png" className='h-[32] p-4  bg-white' alt="" />
            </div>

            <div className="relative">
              <h1 className='font-bold text-2xl mt-6'>Pay-Per-Check</h1>
              <p className="text-gray-600 text-lg">
                Our purpose is to build solutions that remove
              </p>

              {/* Hidden layer beneath paragraph */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 translate-y-0 group-hover:opacity-100 group-hover:h-[80px] transition-all duration-600">
                <div className="mt-3 flex space-x-3">
                <p className='text-lg'>Read more</p> <ArrowRight className='text-primary'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1" data-aos='fade-up' data-aos-duration='1000'>
          <div className="bg-gray-200 flex group relative transform duration-500 hover:bg-black hover:text-white "> {/* group for hover effect */}
            <div className='p-6 border-t-4 border-primary w-[50%]'>
              <img src="/images/icon (3).png" className='h-[32] p-4 bg-white' alt="" />
            </div>

            <div className="relative">
              <h1 className='font-bold text-2xl mt-6'>Web Design</h1>
              <p className="text-gray-600 text-lg">
                Our purpose is to build solutions that remove
              </p>

              {/* Hidden layer beneath paragraph */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 translate-y-0 group-hover:opacity-100 group-hover:h-[80px] transition-all duration-600">
                <div className="mt-3 flex space-x-3">
                <p className='text-lg'>Read more</p> <ArrowRight className='text-primary'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1" data-aos='fade-up' data-aos-duration='1200'>
          <div className="bg-gray-200 flex group relative transform duration-500 hover:bg-black hover:text-white "> {/* group for hover effect */}
            <div className='p-6 border-t-4 border-primary w-[50%]'>
              <img src="/images/icon (4).png" className='h-26 p-4 bg-white' alt="" />
            </div>

            <div className="relative">
              <h1 className='font-bold text-2xl mt-6'>SMM</h1>
              <p className="text-gray-600 text-lg ">
                Our purpose is to build solutions that remove
              </p>

              {/* Hidden layer beneath paragraph */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 translate-y-0 group-hover:opacity-100 group-hover:h-[80px] transition-all duration-600">
                <div className="mt-3 flex space-x-3">
                <p className='text-lg'>Read more</p> <ArrowRight className='text-primary'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCards
