import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        className="mySwiper"
        onSlideChange={() => {
          Aos.refresh();
          setEffectKey(prevKey => prevKey + 1);
        }}
      >
        <SwiperSlide>
          <div
          
            className="absolute inset-0 z-0 bg-cover bg-center h-screen bg-black bg-opacity-80"
            style={{
              backgroundImage: 'url(/images/back.jpg)'
            }}
          >
            <div className="bg-primary w-[10%] h-[280px] xs:h-[250px] mt-[150px] ml-8 xs:ml-16 p-4">
              <h1 className="text-2xl absolute text-white">
                <TextGenerateEffect key={effectKey} words={'Get familiar with'} />
              </h1>
              <h1 className="text-4xl md:text-8xl font-bold absolute text-white top-[230px] md:top-[200px]">
                <TextGenerateEffect key={effectKey + 1} words={"Digital Marketing"} />
              </h1>
              <h1 className="text-xl font-bold absolute text-white top-[290px] md:top-[330px]">
                <TextGenerateEffect key={effectKey + 2} words={"Elevate your business and transform it into a distinctive, memorable, and impactful brand."} />
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
          
            className="absolute inset-0 z-0 bg-cover bg-center h-screen bg-black bg-opacity-80"
            style={{
              backgroundImage: 'url(/images/back1.jpg)'
            }}
          >
            <div className="bg-primary w-[10%] h-[280px] xs:h-[250px] mt-[150px] ml-8 xs:ml-16 p-4">
              <h1 className="text-2xl absolute text-black">
                <TextGenerateEffect key={effectKey} words={'Unlocking Peak Performance'} />
              </h1>
              <h1 className="text-4xl md:text-8xl font-bold absolute text-black top-[230px] md:top-[200px]">
                <TextGenerateEffect key={effectKey + 1} words={"O Square"} />
              </h1>
              <h1 className="text-xl font-bold absolute text-black top-[290px] md:top-[330px]">
                <TextGenerateEffect key={effectKey + 2} words={"Designed to streamline your workflow, and empower you to accomplish more in less time."} />
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0 z-0 bg-cover bg-center h-screen bg-black bg-opacity-80" style={{ backgroundImage: 'url(/images/back2.jpg)'}}>
            <div className='bg-primary w-[10%] h-[280px] xs:h-[250px] mt-[150px] mx-6 xs:ml-16 p-4'>
              <h1 className='text-2xl absolute text-black'><TextGenerateEffect key={effectKey + 6} words={'Explore the world of'} /></h1>
              <h1 className='text-4xl md:text-8xl font-bold absolute text-black top-[230px] md:top-[200px]'><TextGenerateEffect key={effectKey + 7} words={"Technology"} /></h1>
              <h1 className='text-xl font-bold absolute text-black top-[290px] md:top-[330px]'><TextGenerateEffect key={effectKey + 8} words={"Delivering tailored digital solutions to empower businesses of all kinds."} /></h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>
        {`
                h1 {
                text-shadow: 2px 2px 4px RGB(247 151 32)
                }
                
          `}

      </style>
    </>
  );
}
