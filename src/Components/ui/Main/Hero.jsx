import * as React from "react"
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../carousel"
import CustomButton from '../CustomButton'

export function Hero() {
    return (
        <div className="overflow-x-hidden" >
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                className="w-full h-full">
                <CarouselContent>
                    <CarouselItem>
                        <section className="relative w-full h-screen overflow-hidden">
                            {/* Background Video */}
                            <video
                                autoPlay
                                muted
                                loop
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            >
                                <source src="/images/city.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="bg-black opacity-30 z-1 inset-0 absolute"></div>

                            {/* Content */}
                            <div className="flex items-center transform text-white h-full py-6 mt-10 px-20 w-2/3">
                                <div>
                                    <h1 className="text-4xl md:text-6xl mb-4">Get Familiar with Website</h1>
                                    <h1 className="text-4xl md:text-8xl mb-4">Digital Marketing</h1>
                                    <p className="text-xl md:text-3xl mb-4">Your tagline or content goes here Lorem ipsum dolor sit amet..</p>
                                    <CustomButton name={'Services'} size={'w-[150px]'} bg={''} layerbg={'primary'} border={'white'} />
                                </div>
                            </div>
                        </section>
                    </CarouselItem>
                    <CarouselItem>
                        <section className="relative w-full h-screen overflow-hidden">
                            {/* Background Video */}
                            <video
                                autoPlay
                                muted
                                loop
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            >
                                <source src="/images/tech.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="bg-black opacity-30 z-1 inset-0 absolute"></div>
                            {/* Content */}
                            <div className="flex items-center transform text-white h-full px-20 w-2/3">
                                <div>
                                    <h1 className="text-4xl md:text-6xl mb-4">Get Familiar with Website</h1>
                                    <h1 className="text-4xl md:text-8xl mb-4">Digital Marketing</h1>
                                    <p className="text-xl md:text-3xl">Your tagline or content goes here Lorem ipsum dolor sit amet..</p>
                                </div>
                            </div>
                        </section>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
