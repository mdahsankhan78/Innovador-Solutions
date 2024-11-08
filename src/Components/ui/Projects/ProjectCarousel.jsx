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
import { Pagination } from "swiper/modules";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
// import data
const Reviews = () => {
    const [isFlipped, setIsFlipped] = useState('');

    const handleFlip = (card) => {
        setIsFlipped(card);
    };
    const content = (
        <>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'one'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('one')}>
                    <img src='/images/sidebar1.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center text-center h-full">
                        <div>
                        <h1>AASAANN</h1>
                        <p className="text-sm">AASAANN is an app specially designed for Sabzi Mandi ARTI businesses, including traders and commission agents.
                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'two'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('two')}>
                    <img src='/images/sidebar2.png' />  
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>AMS
                        </h1>
                        <p className="text-sm">A cloud-based attendance management solution for the modern workplace.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'three'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('three')}>
                    <img src='/images/sidebar3.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>EASYFEE
                        </h1>
                        <p className="text-sm">A fee management system for schools, colleges, and universities.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'four'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('four')}>
                    <img src='/images/sidebar4.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>EASYFORMS</h1>
                        <p className="text-sm">EasyForms is a user-friendly tool that allows you to create and deploy forms quickly without any programming knowledge.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'five'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('five')}>
                    <img src='/images/sidebar5.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>HR360
                        </h1>
                        <p className="text-sm">A cloud-based all-in-one HR solution.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'six'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('six')}>
                    <img src='/images/sidebar6.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>iSchool
                        </h1>
                        <p className="text-sm">Unlock a seamless learner journey from admission to alumni networking and beyond. Our complete education solution has you covered.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'seven'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('seven')}>
                    <img src='/images/sidebar7.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>iSchool for Me
                        </h1>
                        <p className="text-sm">iSchool for Me is a complete and feature-rich mobile app for all educational institutes.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'eight'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('eight')}>
                    <img src='/images/sidebar8.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>iTeam
                        </h1>
                        <p className="text-sm">The project management tool you need to plan and track work across every team.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <ReactCardFlip isFlipped={isFlipped == 'nine'} flipDirection="horizontal">
                <Card className="bg-white dark:bg-secondary/40 p-8 front h-[17rem] w-[18rem]" onMouseEnter={() => handleFlip('nine')}>
                    <img src='/images/sidebar9.png' />
                </Card>
                <Card className="bg-tertiary dark:bg-secondary/40 back h-[17rem] w-[18rem]" onMouseLeave={() => handleFlip('')}>
                    <div className="text-white bg-primary p-4 flex items-center text-center h-full">
                        <div>
                        <h1>Soul Whispers
                        </h1>
                        <p className="text-sm">Soul Whispers is a mobile app that leverages the power of AI to help you with unbiased diagnosis.

                        </p>
                        </div>
                    </div>
                </Card>
                </ReactCardFlip>
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
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
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
}`}
                    </style>
        </section>
    );
};

export default Reviews;
