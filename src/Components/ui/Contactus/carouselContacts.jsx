"use client";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../card";
// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// import './style.css';
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
// import data
const CarouselContacts = () => {
    const [isFlipped, setIsFlipped] = useState('');

    const handleFlip = (card) => {
        setIsFlipped(card);
    };
    const content = (
        <>
            <SwiperSlide className="swiper-slide-transparent">
                <div className='flex space-x-4 items-center  h-[150px] filter grayscale hover:filter-none transition-all duration-300'>
                    <div className=" p-4">
                        <img src="/images/contact2.png" alt="" className='h-[50px] w-[100px]' />

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>KARACHI</h1>
                        <p className='mt-2 text-gray-600 text-md'>111, Progressive Center, P.E.C.H.S Block 2 Block 6 PECHS, Karachi, Karachi City, Sindh 75400
                            +92 332 466 6823</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className='flex space-x-4 items-center  h-[150px] filter grayscale hover:filter-none transition-all duration-300'>
                    <div className="p-4">
                        <img src="/images/contact3.png" alt="" className='h-[50px] w-[100px]' />

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>HYDERABAD</h1>
                        <p className='mt-2 text-gray-600 text-md'>Anum Center, 1st Floor, Defence Commercial Area, Defence Housing Society, Hyderabad, Sindh, Pakistan 71000
                            +92 332 466 6823</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className='flex space-x-4 items-center   h-[150px] filter grayscale hover:filter-none transition-all duration-300'>
                    <div className="p-4">
                        <img src="/images/contact4.png" alt="" className='h-[50px] w-[100px]' />

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>LAHORE</h1>
                        <p className='mt-2 text-gray-600 text-md'>2nd Floor, Commercial Plaza Near Allah-U-Chowkm Khayaban-e-Firdousi, Block E Phase 1 Johar Town, Lahore, Pakistan
                            +92 332 466 6823</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className='flex space-x-4 items-center  h-[150px] filter grayscale hover:filter-none transition-all duration-300'>
                    <div className="p-4 ">
                        <img src="/images/contact5.png" alt="" className='h-[50px] w-[100px]' />

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>CANADA</h1>
                        <p className='mt-2 text-gray-600 text-md'>3050-160 ERIN Center BLV MISSISSAUGA L5M OP5
                            +1 289 547 2576</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className='flex space-x-4 items-center  h-[150px] filter grayscale hover:filter-none transition-all duration-300'>
                    <div className="p-4 ">
                        <img src="/images/contact6.png" alt="" className='h-[50px] w-[100px]' />

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>USA</h1>
                        <p className='mt-2 text-gray-600 text-md'>1000 John R RD, ST 602, Troy 48083
                            +1 517 366 1928</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className='flex space-x-4 items-center  h-[150px] filter grayscale hover:filter-none transition-all duration-300'>
                    <div className="p-4  ">
                        <img src="/images/contact7.png" alt="" className='h-[50px] w-[70px]' />

                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>QATAR</h1>
                        <p className='mt-2 text-gray-600 text-md'>+97 430 074 923</p>
                    </div>
                </div>
            </SwiperSlide>
        </>
    );


    return (
        <section className="mb-12 xl:mb-32 my-8">
            <div className="mx-auto">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        500: { slidesPerView: 1 },
                        790: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    pagination={false}
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
                
                `}
            </style>
        </section>
    );
};

export default CarouselContacts;
