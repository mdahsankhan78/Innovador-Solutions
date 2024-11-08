import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils";
import ReactCardFlip from 'react-card-flip';
import 'aos/dist/aos.css';
import Aos from "aos";

const IndustriesCards = () => {
    useEffect(() => {
      Aos.init({ easing: 'ease-in-out' });
    }, []);
    
    const [isFlipped, setIsFlipped] = useState('');

    const handleFlip = (card) => {
        setIsFlipped(card);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-x-5 gap-y-5">  
            <div className="col-span-1">
                <ReactCardFlip isFlipped={isFlipped == 'one'} flipDirection="horizontal">
                    <div className="max-w-auto w-full card front" onMouseEnter={() => handleFlip('one')}>
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(http://innovador.solutions/wp-content/uploads/2024/10/Gaming-scaled.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="text-center">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                                        Gaming & Entertainment
                                    </h1>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex items-center text-center max-w-auto w-full card back bg-primary p-6 h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl " onMouseLeave={() => handleFlip('')}>

                        <p className='text-white text-lg'>Our talented team is dedicated to crafting captivating and interactive experiences that transport users into immersive worlds. Whether on mobile devices, PCs, or consoles, we strive to push the boundaries of gameplay and storytelling, ensuring that each experience resonates deeply with players and keeps them engaged.</p>


                    </div>
                </ReactCardFlip>
            </div>

            <div className="col-span-1">
                <ReactCardFlip isFlipped={isFlipped == 'two'} flipDirection="horizontal">
                    <div className="max-w-auto w-full card front" onMouseEnter={() => handleFlip('two')}>
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(http://innovador.solutions/wp-content/uploads/2024/10/Distribution-min-scaled.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="text-center">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                                        Reatail & Distribution
                                    </h1>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex items-center text-center max-w-auto w-full card back bg-primary p-6 h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl " onMouseLeave={() => handleFlip('')}>

                        <p className='text-white text-lg'>In the ever-evolving retail landscape, we focus on developing dynamic solutions that enhance operational efficiency and elevate customer satisfaction. By integrating advanced technologies, we help businesses streamline their processes, create seamless shopping experiences, and optimize their supply chain management, ultimately driving growth and improving profitability.

                        </p>


                    </div>
                </ReactCardFlip>
            </div>
            <div className="col-span-1">
                <ReactCardFlip isFlipped={isFlipped == 'three'} flipDirection="horizontal">
                    <div className="max-w-auto w-full card front" onMouseEnter={() => handleFlip('three')}>
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(http://innovador.solutions/wp-content/uploads/2024/10/Education-min-scaled.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="text-center">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                                        Education
                                    </h1>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex items-center text-center max-w-auto w-full card back bg-primary p-6 h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl " onMouseLeave={() => handleFlip('')}>

                        <p className='text-white text-lg'>Harnessing the power of technology, we are committed to transforming the educational landscape. Our solutions are designed to enrich learning experiences by making them more engaging and accessible. Additionally, we work to simplify administrative processes, enabling educators and institutions to focus on what truly matters: fostering student success and improving educational outcomes.</p>


                    </div>
                </ReactCardFlip>
            </div>
            <div className="col-span-1">
                <ReactCardFlip isFlipped={isFlipped == 'four'} flipDirection="horizontal">
                    <div className="max-w-auto w-full card front" onMouseEnter={() => handleFlip('four')}>
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(http://innovador.solutions/wp-content/uploads/2024/10/Healthcare-min-scaled.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="text-center">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                                        Health Care
                                    </h1>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex items-center text-center max-w-auto w-full card back bg-primary p-6 h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl " onMouseLeave={() => handleFlip('')}>

                        <p className='text-white text-lg'>In the realm of healthcare, our mission is to elevate the standard of patient care through the development of advanced solutions. We address the complexities of healthcare administration by creating tools that simplify tasks for providers, enhance communication, and ultimately improve the quality of services delivered to patients. Our focus is on fostering better health outcomes and supporting healthcare professionals in their vital work.</p>


                    </div>
                </ReactCardFlip>
            </div>
            <div className="col-span-1">
                <ReactCardFlip isFlipped={isFlipped == 'five'} flipDirection="horizontal">
                    <div className="max-w-auto w-full card front" onMouseEnter={() => handleFlip('five')}>
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(http://innovador.solutions/wp-content/uploads/2024/10/Finance-min-scaled.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="text-center">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                                        Business & Finance
                                    </h1>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex items-center text-center max-w-auto w-full card back bg-primary p-6 h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl " onMouseLeave={() => handleFlip('')}>

                        <p className='text-white text-lg'>We understand the critical nature of financial operations in today’s competitive environment. Our solutions are designed to streamline financial processes, enhance data security, and drive overall business effectiveness. By leveraging cutting-edge technology, we empower organizations to navigate financial challenges with confidence and achieve sustainable growth.</p>


                    </div>
                </ReactCardFlip>
            </div>
            <div className="col-span-1">
                <ReactCardFlip isFlipped={isFlipped == 'six'} flipDirection="horizontal">
                    <div className="max-w-auto w-full card front" onMouseEnter={() => handleFlip('six')}>
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(http://innovador.solutions/wp-content/uploads/2024/10/Travel-min.png)] bg-cover",
                                "transition-all duration-500"
                            )}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="text-center">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">
                                        Travel & Hospitality
                                    </h1>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex items-center text-center max-w-auto w-full card back bg-primary p-6 h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-80 rounded-md shadow-3xl " onMouseLeave={() => handleFlip('')}>

                        <p className='text-white text-lg'>In the travel and hospitality sector, we deliver comprehensive solutions that cater to the unique needs of hotels and travel agencies. From intuitive booking systems to sophisticated travel planning applications, our tools are designed to enhance customer experiences and facilitate seamless interactions. We aim to empower businesses to build lasting relationships with their clients, making every journey memorable and hassle-free.</p>


                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default IndustriesCards