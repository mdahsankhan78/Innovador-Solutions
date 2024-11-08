import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../carousel"

export function ProjectsCarousel() {
    return (
        <div className="h-full">
            <div className="bg-black mt-4 p-6 shadow-md">
                <Carousel className="w-full max-w-auto p-4">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex space-x-4"> {/* Use flex and space-x-4 for horizontal layout */}
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white">
                                        <img src="/images/sidebar1.png" className="h-[220px]" alt="Project 1" />
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white">
                                        <img src="/images/sidebar2.png" className="h-[220px]" alt="
                                        Project 2" />
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white">
                                        <img src="/images/sidebar3.png" className="h-[220px]" alt="Project 3" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                        <div className="flex space-x-4"> {/* Use flex and space-x-4 for horizontal layout */}
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white">
                                        <img src="/images/sidebar4.png" className="h-[220px]" alt="Project 1" />
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white">
                                        <img src="/images/sidebar5.png" className="h-[220px]" alt="Project 2" />
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white">
                                        <img src="/images/sidebar6.png" className="h-[220px]" alt="Project 3" />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    {/* Carousel Controls */}
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
