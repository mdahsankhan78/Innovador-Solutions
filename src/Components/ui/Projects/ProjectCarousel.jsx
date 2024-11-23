// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// import './style.css';
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// import data
const Reviews = () => {
    const content = (
        <>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('one')}>
                    <img src='/images/sidebar1.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('two')}>
                    <img src='/images/sidebar2.png' />  
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('three')}>
                    <img src='/images/sidebar3.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('four')}>
                    <img src='/images/sidebar4.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('five')}>
                    <img src='/images/sidebar5.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('six')}>
                    <img src='/images/sidebar6.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('seven')}>
                    <img src='/images/sidebar7.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('eight')}>
                    <img src='/images/sidebar8.png' />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-transparent">
                <div className="bg-white dark:bg-secondary/40 p-8 h-[12rem] w-[12rem]" onMouseEnter={() => handleFlip('nine')}>
                    <img src='/images/sidebar9.png' />
                </div>
            </SwiperSlide>
        </>
    );


    return (
        <section className="">
            <div className="mx-auto">
                <Swiper
                className="productswiper"
                    slidesPerView={2}
                    breakpoints={{
                        400: {slidesPerView: 2 },
                        600: { slidesPerView: 3 },
                        740: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                        1400: { slidesPerView: 8 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                    }}
                    id='productsswiper'
                >
                    {content}
                </Swiper>
            </div>
                    <style>
                        {`
                        .swiper-slide-transparent {
                            background-color: transparent !important; 
                            border: none;
                            padding: 0;
                        }
                    
                        #productsswiper{
                        height:230px;
                        }

                        `}
                    </style>
        </section>
    );
};

export default Reviews;
