import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../carousel"
import CustomButton from "../CustomButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export function TestimonialsCarousel() {
    return (
        <Carousel className="w-full max-w-auto">
            <CarouselContent>
                
                    <CarouselItem> 
                    <p className="text-primary text-lg my-5 space-x-2 my-8">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </p>
                        <p className="text-gray-600 text-lg my-5">
                        "Working with several word press themes and templates the last years, I can only say this is the best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design."
                        </p>
                        <div className="flex items-center space-x-6">
                        <img src="/images/test1.jpg" className="rounded-full" alt="" />
                        <div className="space-y-2">
                        <h1 className="text-xl font-bold ">Joyce Thompson</h1>
                        <p className="text-gray-400 text-md">Assistant Manager</p>
                        </div>
                        </div>

                               
                        
                    </CarouselItem>

                    

                    <CarouselItem> 
                    <p className="text-primary text-lg my-5 space-x-2 my-8">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </p>
                        <p className="text-gray-600 text-lg my-5">
                        "You deserve care that's simple, personalized and hassle free. Safe Insurance that's designed to help you thrive. Usage in merchandise, clothing, and artwork. Contrary to popular belief, Lorem Ipsum is not simple."
                        </p>
                        <div className="flex items-center space-x-6">
                        <img src="/images/test2.jpg" className="rounded-full" alt="" />
                        <div className="space-y-2">
                        <h1 className="text-xl font-bold ">Pamela Johnson</h1>
                        <p className="text-gray-400 text-md">Leadership Group</p>
                        </div>
                        </div>

                               
                        
                    </CarouselItem>

                    <CarouselItem> 
                    <p className="text-primary text-lg my-5 space-x-2 my-8">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </p>
                        <p className="text-gray-600 text-lg my-5">
                        "    "You deserve care that's simple, personalized and hassle free. Safe Insurance that's designed to help you thrive. Usage in merchandise, clothing, and artwork. Contrary to popular belief, Lorem Ipsum is not simple.""
                        </p>
                        <div className="flex items-center space-x-6">
                        <img src="/images/test3.jpg" className="rounded-full" alt="" />
                        <div className="space-y-2">
                        <h1 className="text-xl font-bold ">Ven Hunter</h1>
                        <p className="text-gray-400 text-md">Senior Director</p>
                        </div>
                        </div>

                               
                        
                    </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
