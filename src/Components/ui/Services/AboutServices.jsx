import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAward, faHandshake, faBullhorn, faPhoneVolume, faUserTie, faChalkboard, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { InView } from "react-intersection-observer";


const AboutServices = () => {
    const [startCounting, setStartCounting] = useState(false);

    return (
        <InView
            triggerOnce={true}  // Only trigger once when the element comes into view
            onChange={(inView) => {
                if (inView) {
                    setStartCounting(true);  // Start counting when the element is in view
                }
            }}
        >
            <div className='grid grid-cols-1 lg:grid-cols-5 '>
                <div className="lg:col-span-4 col-span-1 px-4 py-8 flex items-center bg-cover justify-center" style={{backgroundImage:'url(/images/counter.jpeg)'}}>
                    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 sm:gap-x-20 md:gap-x-20 lg:gap-x-8 gap-y-4 md:gap-y-0 ">
                        <div className="col-span-1 text-white">
                            <div className="flex gap-x-8 group ">
                                <div className="h-[60px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[60px] transition-all duration-500"></div>
                                </div>
                                <div className="">
                                    <div className="flex space-x-2">
                                        <FontAwesomeIcon className='text-primary h-8' icon={faUser} />
                                        <div className="font-bold text-4xl leading-none mb-2">
                                            {startCounting && (
                                                <CountUp end={330} delay={1} duration={4} />
                                            )}  

                                        </div>
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                        Active Clients
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-1 text-white">
                            <div className="flex gap-x-8 group ">
                                <div className="h-[60px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[60px] transition-all duration-500"></div>
                                </div>
                                <div className="">
                                    <div className="flex space-x-2">
                                        <FontAwesomeIcon className='text-primary h-8' icon={faUserTie} />
                                        <div className="font-bold text-4xl leading-none mb-2">
                                        {startCounting && (
                                                <CountUp end={25} delay={1} duration={4} />
                                            )}+
                                        </div>
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                        Team Advisors
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-1 text-white">
                            <div className="flex gap-x-8 group ">
                                <div className="h-[60px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[60px] transition-all duration-500"></div>
                                </div>
                                <div className="">
                                    <div className="flex space-x-2">
                                        <FontAwesomeIcon className='text-primary h-8' icon={faHandshake} />
                                        <div className="font-bold text-4xl leading-none mb-2">
                                        {startCounting && (
                                               <>
                                                <CountUp end={850} delay={1} duration={4} />+
                                               </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                        Completed project
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-1 text-white">
                            <div className="flex gap-x-8 group ">
                                <div className="h-[60px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[60px] transition-all duration-500"></div>
                                </div>
                                <div className="">
                                    <div className="flex space-x-2">
                                        <FontAwesomeIcon className='text-primary h-8' icon={faChalkboardTeacher} />
                                        <div className="font-bold text-4xl leading-none mb-2">
                                        {startCounting && (
                                                <CountUp end={10} delay={1} duration={4} />
                                            )}+
                                        </div>
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                        Glorious Years
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-span-1 flex items-center justify-center text-white  bg-primary px-8 py-8">
                    <div className="flex gap-x-8 group ">

                        <div className="">
                            <div className="flex space-x-6 text-black items-center">
                                <FontAwesomeIcon className='h-8' icon={faPhoneVolume} />
                                <div className="font-bold text-2xl leading-none mb-2">
                                    Call for help
                                </div>
                            </div>
                            <div className="text-2xl font-bold leading-none mt-4">
                            +92 332 466 6823
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </InView>
    )
}

export default AboutServices