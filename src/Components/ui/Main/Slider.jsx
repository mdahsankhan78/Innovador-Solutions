import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import Aos from "aos";
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { Autoplay, Pagination } from 'swiper/modules';
import { TextGenerateEffect } from './TextGenerateEffect';

export default function App() {
  const [effectKey, setEffectKey] = useState(0);

  useEffect(() => {
    Aos.init({ easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <Swiper
        id='Home'
        direction={'vertical'}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="mySwiper h-full shadow-2xl"
        onSlideChange={() => {
          setEffectKey(prevKey => prevKey + 1); // Update key on slide change to reset animations
        }}
      >
        <SwiperSlide>
          <div className="relative bg-[url('/images/back.jpg')] bg-cover h-screen bg-center">
            <div className="absolute h-full">
              <img
                src="/images/pixelcut-export.png"
                alt=""
                className="top-0 left-0 w-full h-full"
              />

            </div>
            <div className='flex items-center h-full pl-20'>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 1 }}
                  id='h1' className="text-2xl text-white"
                >
                  <TextGenerateEffect key={effectKey} words={'Get familiar with'} />
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 1.5 }}
                  id='h1' className="text-6xl md:text-8xl font-bold text-white"
                >
                 
                    <TextGenerateEffect key={effectKey + 1} words={"Digital Marketing"} />
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 2 }}
                  id='h1' className="text-xl font-bold text-white"
                >
                  <TextGenerateEffect key={effectKey + 2} words={"Elevate your business and transform it into a distinctive, memorable, and impactful brand."} />
                </motion.h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[url('/images/back1.jpg')] bg-cover h-screen bg-center">
            <div className="bg-black opacity-50 z-1 inset-0 absolute"></div>
            <div className="absolute h-full">
              <img
                src="/images/pixelcut-export.png"
                alt=""
                className="top-0 left-0 w-full h-full"
              />

            </div>
            <div className='flex items-center h-full pl-20'>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 1 }}
                  id='h1' className="text-2xl text-white"
                >
                  <TextGenerateEffect key={effectKey} words={'Unlocking Peak Performance'} />
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 1.5 }}
                  id='h1' className="text-6xl md:text-8xl font-bold text-white"
                >
                  <div className="flex items-center">
                    <img src="/images/osquare.png" className='h-24 z-10' alt="" />
                    <TextGenerateEffect key={effectKey + 1} words={"Square"} />
                  </div>
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 2 }}
                  id='h1' className="text-xl font-bold text-white"
                >
                  <TextGenerateEffect key={effectKey + 2} words={"Designed to streamline your workflow, and empower you to accomplish more in less time."} />
                </motion.h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-[url('/images/back2.jpg')] bg-cover h-screen bg-center">
            <div className="bg-black opacity-20 z-1 inset-0 absolute"></div>
            <div className="absolute h-full">
              <img
                src="/images/pixelcut-export.png"
                alt=""
                className="top-0 left-0 w-full h-full"
              />

            </div>
            <div className='flex items-center h-full pl-20'>
              <div>
              <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 1 }}
                  id='h1' className="text-2xl text-white"
                >
                  <TextGenerateEffect key={effectKey} words={'Explore the world of'} />
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 1.5 }}
                  id='h1' className="text-6xl md:text-8xl font-bold text-white"
                >
                  <TextGenerateEffect key={effectKey + 1} words={"Technology"} />
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}   // Initial state: fade out and slide from left
                  animate={{ opacity: 1, y: 0 }}      // Final state: fully visible and in its final position
                  transition={{ duration: 2 }}
                  id='h1' className="text-xl font-bold text-white"
                >
                  <TextGenerateEffect key={effectKey + 2} words={"Delivering tailored digital solutions to empower businesses of all kinds."} />
                </motion.h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </>
  );
}
