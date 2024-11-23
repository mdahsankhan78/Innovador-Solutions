import React, { useEffect, useState } from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../tabs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faEye, faFlag, faPlay, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Progress, Typography } from '@material-tailwind/react'
import { InView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const MissionTabs = () => {
    const [Count, setCount] = useState(false);
    const [social, setSocial] = useState(0);
    const [design, setDesign] = useState(0);
    const [web, setWeb] = useState(0);


    const startCount = (setValue, targetValue) => {
        const interval = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue < targetValue) {
                    return prevValue + 1;
                } else {
                    clearInterval(interval);
                    return targetValue;
                }
            });
        }, 1);
        return () => clearInterval(interval);
    };


    useEffect(() => {
        if (Count) {

            startCount(setSocial, 80);
            startCount(setDesign, 90);
            startCount(setWeb, 70);
        }
    }, [Count])

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-no-repeat bg-image">
                <div className="lg:col-span-2 col-span-1">
                    <Tabs defaultValue='Mission' className='relative z-10'>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 my-20 md:gap-x-[20rem] lg:gap-x-0 gap-y-6 md:gap-y-0">
                            <div className="col-span-1">
                                <TabsList className='flex flex-col items-start bg-transparent'>
                                    <TabsTrigger value='Mission' className='gap-x-4'>
                                        <div className='rounded-full shadow bg-primary text-black py-4 px-6'>
                                            <FontAwesomeIcon icon={faFlag} />
                                        </div>
                                        Our Mission
                                    </TabsTrigger>
                                    <TabsTrigger value='Vision' className='gap-x-4'>
                                        <div className='rounded-full shadow bg-primary text-black py-4 px-6'>
                                            <FontAwesomeIcon icon={faEye} />
                                        </div>
                                        Our Vision
                                    </TabsTrigger>
                                    <TabsTrigger value='Team' className='gap-x-4'>
                                        <div className='rounded-full shadow bg-primary text-black py-4 px-6'>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                        Our Team
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <div className="col-span-2 lg:col-span-1">
                                <TabsContent value='Mission' className='tab-content'>
                                    <div className="px-8 py-8 text-lg bg-white shadow-xl">To balance innovation with practicality by delivering a diverse range of software services through a firm commitment to excellence, customer satisfaction, and continuous improvement.
                                    </div>
                                </TabsContent>

                                <TabsContent value='Vision' className='tab-content'>
                                    <div className="px-8 py-8 text-lg bg-white shadow-xl">Our vision is to create intelligent systems that empower businesses and people around the globe. We aim to be a global leader in software innovation, delivering exceptional solutions that drive business success and improve lives. Our commitment to excellence, customer satisfaction, and ethical practices will guide us in building a sustainable and impactful future for our clients, employees, and communities.</div>
                                </TabsContent>

                                <TabsContent value='Team' className='tab-content'>
                                    <div className="px-8 py-8 text-lg bg-white shadow-xl">We are a team with a collective experience of over 100 years! We currently have a team of 50+ skilled professionals with diversified experience, ranging from the development and implementation of large applications like Core Banking Solutions and ERPs to SaaS, cloud computing, mobile applications, and web development.
                                    </div>
                                </TabsContent>
                            </div>
                        </div>

                        <style jsx>
                            {`
                                @keyframes slide-up {
                                    0% {
                                        max-height: 0;
                                        opacity: 0;
                                        overflow: hidden; /* Ensure content is hidden */
                                    }
                                    100% {
                                        max-height: 500px; /* Adjust this value based on your content's height */
                                        opacity: 1;
                                        overflow: visible;
                                    }
                                }

                                .tab-content {
                                    animation: slide-up 0.8s ease-out forwards;
                                }
                                .bg-image {
                                    background-image: url('/images/mission1.jpeg');
                                    
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }

                                @media (max-width: 1024px) { /* Adjust this breakpoint as needed */
                                    .bg-image {
                                        background-image: none; /* Remove background image for smaller screens */
                                    }
                                }
                            `}
                        </style>
                    </Tabs>

                    <InView
                        triggerOnce={true}  // Only trigger once when the element comes into view
                        onChange={(inView) => {
                            if (inView) {
                                setCount(true);  // Start counting when the element is in view
                            }
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 gap-x-6 relative z-10">
                            <div className="col-span-1">
                                <h1 className='font-bold text-5xl' data-aos='fade-up'>Essential business<span className='text-primary'> skills.</span></h1>
                            </div>

                            <div className="col-span-1">
                                <div className="w-full">
                                    <div className="mb-2 flex items-center justify-between gap-4">
                                        <Typography color="black" variant="h6">
                                            Social media marketing
                                        </Typography>
                                        <Typography color="black" variant="h6">
                                            {Count && (
                                                <CountUp end={80} delay={0} duration={1} />
                                            )}%
                                        </Typography>
                                    </div>
                                    <Progress className='bg-gray-300' color='orange' value={social} />
                                </div>

                                <div className="w-full my-6">
                                    <div className="mb-2 flex items-center justify-between gap-4">
                                        <Typography color="black" variant="h6">
                                            Designing & Branding
                                        </Typography>
                                        <Typography color="black" variant="h6">
                                            {Count && (
                                                <CountUp end={90} delay={0} duration={1} />
                                            )}%
                                        </Typography>
                                    </div>
                                    <Progress className='bg-gray-300' color='orange' value={design} />
                                </div>

                                <div className="w-full">
                                    <div className="mb-2 flex items-center justify-between gap-4">
                                        <Typography color="black" variant="h6">
                                            Web & App Development
                                        </Typography>
                                        <Typography color="black" variant="h6">
                                            {Count && (
                                                <CountUp end={70} delay={0} duration={1} />
                                            )}%
                                        </Typography>
                                    </div>
                                    <Progress className='bg-gray-300' color='orange' value={web} />
                                </div>
                            </div>
                        </div>
                    </InView>
                </div>
                <div className="col-span-1 hidden lg:block">

                </ div>
            </div>
        </>
    )
}

export default MissionTabs
