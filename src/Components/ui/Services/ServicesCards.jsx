import { ArrowRight, BoxSelectIcon, LucideBoxes } from 'lucide-react'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBullhorn, faCloud, faHeadset, faLaptopCode, faMobileAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServicesCards = () => {

  useEffect(() => {
    Aos.init({ easing: 'ease-in-out' });
  }, []);

  return (
    // <!-- component -->
    <section class=" bg-blue-500ray-50">
      <div class="block relative bg-opacity-50" >


        <div class="relative h-full pb-20 md:pb-10 sm:max-w-full lg:max-w-screen-xl">
          <div class=" max-w-7xl relative">
            <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-2 lg:mt-16">

              <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                <div
                  class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative space-y-2">

                  <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faPaintBrush} />
                  <h3 class="text-lg font-semibold text-black">UI / UX
                  </h3>
                  <p class="text-base text-gray-600">Crafting intuitive, cross-device web experiences.</p>
                  <Link to={'/services'} className="flex items-center space-x-2">
                  <p>Read more </p><FontAwesomeIcon className='text-primary' icon={faArrowRight}/>
                  </Link>
                </div>
              </div>

              <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                <div
                  class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative space-y-2">

                  <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faLaptopCode} />
                  <h3 class="text-lg font-semibold text-black">Web Development
                  </h3>
                  <p class="text-base text-gray-600"> Building advanced, full-stack business applications.</p>
                  <Link to={'/services'} className="flex items-center space-x-2">
                  <p>Read more </p><FontAwesomeIcon className='text-primary' icon={faArrowRight}/>
                  </Link>
                </div>
              </div>

              <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                <div
                  class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative space-y-2">

                  <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faMobileAlt} />
                  <h3 class="text-lg font-semibold text-black">Mobile App Development
                  </h3>
                  <p class="text-base text-gray-600">Developing mobile apps for efficiency.</p>
                  <Link to={'/services'} className="flex items-center space-x-2">
                  <p>Read more </p><FontAwesomeIcon className='text-primary' icon={faArrowRight}/>
                  </Link>
                </div>
              </div>

              <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                <div
                  class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative space-y-2">

                  <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faHeadset} />
                  <h3 class="text-lg font-semibold text-black">IT Consultancy
                  </h3>
                  <p class="text-base text-gray-600"> Driving results through IT expertise.</p>
                  <Link to={'/services'} className="flex items-center space-x-2">
                  <p>Read more </p><FontAwesomeIcon className='text-primary' icon={faArrowRight}/>
                  </Link>
                </div>
              </div>

              <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                <div
                  class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative space-y-2">

                  <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faCloud} />
                  <h3 class="text-lg font-semibold text-black">SaaS & Cloud Computing
                  </h3>
                  <p class="text-base text-gray-600">Affordable, scalable solutions without hardware.</p>
                  <Link to={'/services'} className="flex items-center space-x-2">
                  <p>Read more </p><FontAwesomeIcon className='text-primary' icon={faArrowRight}/>
                  </Link>
                </div>
              </div>

              <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                <div
                  class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative space-y-2">

                  <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faBullhorn} />
                  <h3 class="text-lg font-semibold text-black">Digital Marketing
                  </h3>
                  <p class="text-base text-gray-600">Broadening reach with digital techniques.</p>
                  <Link to={'/services'} className="flex items-center space-x-2">
                  <p>Read more </p><FontAwesomeIcon className='text-primary' icon={faArrowRight}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCards
