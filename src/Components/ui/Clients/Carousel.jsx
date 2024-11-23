import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../card';
import { Autoplay, Pagination } from "swiper/modules";
const Carousel = () => {
    const content = (
        <>
            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry1.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Aptech learning</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>Innovador Solutions effectively met our web application requirements with their innovative approach and ability to handle complex workflows. Even after implementation, they are successfully maintaining the system’s performance, ensuring smooth and efficient operations and 99.99% u-time.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry2.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Alpha College Of IT</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>We came up with some specific requirements that everybody failed to fulfill, but these talented individuals made all that possible by dealing with the special functionalities and unusual features smartly.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry3.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Bano Qabil</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>We were working on very big data and were stuck sorting out the things. The team did it for us by analyzing our needs and providing us with a fruitful website and an easy-to-access mobile application.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry4.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Bay View</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>As one of the leading school systems with multiple campuses, we wanted something more innovative than a normal School Management System with integrated Learning Management System and mobile application. Innovador solutions presented iSchool, which is a comprehensive system that not only catered to our basic needs but also topped it with enhanced features.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry5.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Columbia Information Technology</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>We have had the most complex and unconventional requirements for managing our students invoices and collection. We also required various complex reports and dash-boards as B.I tool for the management. Dynamic team of Innovador Solutions delivered the system in a record time with 100% implementation support including huge data migration.   </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry6.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Knowledge Zone</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>We reached them for a website and some other services of graphic design; we are glad with the collaboration, as they delivered us the most engaging graphics.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry7.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Minerva</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>We needed a well-developed website with integrated CRM to manage the customers information and processing for further actions. With innovative development techniques by Innovador Solutions we have a great web-site integrated with light-weighted CRM system. </p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-transparent">
                {/* <div class="absolute inset-x-4 transform shadow-xl transform translate-y-2"></div> */}
                <div className="shadow-xl p-8 gap-y-10">
                    <div className="flex space-x-8 items-center" >
                        <img src="/images/industry8.png" alt="" />

                        <div>
                            <h1 className='text-xl text-black font-bold'>Tech Skills</h1>
                            <p className='text-primary-foreground text-lg'>Client</p>
                        </div>
                    </div>
                    <p className='text-primary-foreground text-lg'>We were against the clock, and then we found them. Unquestionably, their skills are go-to solutions for businesses desiring to grow digitally.</p>
                </div>
            </SwiperSlide>
            
        </>
    );


    return (
        <div className="mb-12 xl:mb-32 my-8">
            <div className="mx-auto overflow-x-hidden">
                <Swiper
                    data-aos='slide-left'
                    data-aos-duration='1000'
                    slidesPerView={1}
                    breakpoints={{
                        800: { slidesPerView: 2 },
                    }}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    pagination={false}
                    id='clientsswiper'
                >
                    {content}
                </Swiper>
            </div>
            <style>
                {`
                .swiper-slide-transparent {
                    background-color: transparent !important;  /* Ensure the slide's background is transparent */
                    border: none !important;  /* Ensure no borders around the slide */
                    padding: 0 !important;    /* Remove any padding inside the slide */
                }
                    #clientsswiper{
                        height:400px;
                        }
                
                `}
            </style>
        </div>
    );
}

export default Carousel