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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronRight, faShield, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import data
const Cards = () => {
    const content = (
        <>

            <SwiperSlide className="swiper-slide-transparent group">
                <Link to={`/blog/${1}`}>
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <img
                            src='/images/blogs01.jpg'
                            className="transition-all duration-300 filter grayscale group-hover:filter-none w-full rounded-md"
                            alt="Blog Image"
                        />
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">October 8, 2024</time>
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Mental Health | Technology</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    The Transformative Role of AI in Hospital Management
                                </a>
                            </h3>
                        </div>
                        <div class="relative mt-4 flex items-center gap-x-4">
                            <img src="/images/iqbal.jpg" alt="" class="size-10 rounded-full bg-gray-50" />
                            <div class="text-sm/6">
                                <p class="font-semibold text-gray-900">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Iqbal Y. Shaikh
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </Link>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-transparent group">
                <Link to={`/blog/${2}`}>
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <img
                            src='/images/blogs02.jpg'
                            className="transition-all duration-300 filter grayscale group-hover:filter-none w-full rounded-md"
                            alt="Blog Image"
                        />
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">August 19, 2024</time>
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Technology</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Navigating the AI Revolution: Jobs, Challenges, and Opportunities
                                </a>
                            </h3>
                        </div>
                        <div class="relative mt-4 flex items-center gap-x-4">
                            <img src="/images/iqbal.jpg" alt="" class="size-10 rounded-full bg-gray-50" />
                            <div class="text-sm/6">
                                <p class="font-semibold text-gray-900">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Iqbal Y. Shaikh
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </Link>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-transparent group">
                <Link to={`/blog/${3}`}>
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <img
                            src='/images/blogs03.jpg'
                            className="transition-all duration-300 filter grayscale group-hover:filter-none w-full rounded-md"
                            alt="Blog Image"
                        />
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">July 5, 2024</time>
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Mental Health</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy
                                </a>
                            </h3>
                        </div>
                        <div class="relative mt-4 flex items-center gap-x-4">
                            <img src="/images/aemah.jpg" alt="" class="size-10 rounded-full bg-gray-50" />
                            <div class="text-sm/6">
                                <p class="font-semibold text-gray-900">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Aemah Iqbal
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </Link>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-transparent group">
                <Link to={`/blog/${4}`}>
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <img
                            src='/images/blogs04.jpg'
                            className="transition-all duration-300 filter grayscale group-hover:filter-none w-full rounded-md"
                            alt="Blog Image"
                        />
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">July 4, 2024</time>
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Mental Health</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Can AI Become Your Therapist?
                                </a>
                            </h3>
                        </div>
                        <div class="relative mt-4 flex items-center gap-x-4">
                            <img src="/images/iqbal.jpg" alt="" class="size-10 rounded-full bg-gray-50" />
                            <div class="text-sm/6">
                                <p class="font-semibold text-gray-900">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Iqbal Y. Shaikh
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </Link>
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
                        1100: { slidesPerView: 3 },
                        1600: { slidesPerView: 4 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    id="blogsswiper"
                    className="swiperblog"
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
                    .swiperblog .swiper-pagination-bullet{
                    border-radius:20px;
                    width:10px;
                    }
                    #blogsswiper{
                    height:430px;
                    }
                    @media (min-width: 410px) and (max-width: 639px) {
                    #blogsswiper {
                        height: 500px;  /* Set height to 500px */
                    }
                    }
                `}
            </style>
        </section>
    );
};

export default Cards;
