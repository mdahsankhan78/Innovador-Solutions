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
const CarouselIndustry = () => {
    const [isFlipped, setIsFlipped] = useState('');

    const handleFlip = (card) => {
        setIsFlipped(card);
    };
    const content = (
        <>
            <SwiperSlide className="swiper-slide-transparent">
                
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('one')}>
                        <img src='/images/industry1.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('two')}>
                        <img src='/images/industry2.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('three')}>
                        <img src='/images/industry3.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('four')}>
                        <img src='/images/industry4.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('five')}>
                        <img src='/images/industry5.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('six')}>
                        <img src='/images/industry6.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('seven')}>
                        <img src='/images/industry7.png' />
                    </Card>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                    <Card className="bg-white dark:bg-secondary/40 p-8 front h-[10rem] justify-items-center" onMouseEnter={() => handleFlip('eight')}>
                        <img src='/images/industry8.png' />
                    </Card>
            </SwiperSlide>
        </>
    );


    return (
        <section className="mb-12 xl:mb-32 my-8">
            <div className="mx-auto">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        500: { slidesPerView: 2 },
                        790: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                    }}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
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

export default CarouselIndustry;
