import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Products = () => {
    const [isFlipped, setIsFlipped] = useState('');

    const handleFlip = (prod) => {
        setIsFlipped(prod);
    }
    return (
        <div>
            <title>Products - Innovador Solutions</title>
            <div className="relative md:-top-24 inset-0 z-0 bg-cover bg-center h-[30rem] flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg-services.jpeg)' }}>
                <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

                <div className='z-30 space-y-4'>
                    <h1 className='font-bold text-white text-5xl'>Products</h1>
                    <p className='text-white text-lg text-center'><Link to={'/'} className='hover:text-primary transition-all'>Home</Link> - Products</p>
                </div>

            </div>
            <div className="mx-4 md:mx-16 my-32 md:my-0">
                <div className="flex space-x-4"  data-aos='fade-up'>
                    <div className="custom-line"></div>
                    <h1 className='font-extrabold text-xl mt-2'>Products</h1> {/* Added margin-top to separate the text */}
                </div>
                <h1 className='font-bold text-5xl' data-aos='fade-up'>Products we<span className='text-primary'> developed</span></h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-6 ">
                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar1.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            AASAANN
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            AASAANN is an app specially designed for Sabzi Mandi ARTI businesses, including traders and commission agents.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar2.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            AMS
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            A cloud-based attendance management solution for the modern workplace.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar3.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            EASYFEE
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            A fee management system for schools, colleges, and universities.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar4.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            EASYFORMS
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            EasyForms is a user-friendly tool that allows you to create and deploy forms quickly without any programming knowledge.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar5.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            HR360
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            A cloud-based all-in-one HR solution.
                            </Typography>
                        </CardBody>
                        
                    </Card>
                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar6.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            iSchool
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            Unlock a seamless learner journey from admission to alumni networking and beyond. Our complete education solution has you covered.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar7.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            iSchool for Me
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            iSchool for Me is a complete and feature-rich mobile app for all educational institutes.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar8.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            iTeam
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            The project management tool you need to plan and track work across every team.
                            </Typography>
                        </CardBody>
                        
                    </Card>

                    <Card className="w-full" data-aos='fade-up'>
                        <CardHeader floated={false} className="h-40 justify-items-center shadow-none">
                            <img src="/images/sidebar9.png" className='h-[10rem]' alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                            Soul Whispers
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                            Soul Whispers is a mobile app that leverages the power of AI to help you with unbiased diagnosis.
                            </Typography>
                        </CardBody>
                        
                    </Card>
                </div>

            </div>
            <style jsx>
                {`
                .custom-line {
                    width: 40px;             /* Adjust width as needed */
                    height: 5px;             /* Adjust height as needed */
                    background-color: #FFC107; /* Yellow color */
                    margin: 20px 0;          /* Vertical margin (top and bottom) */
                    border-radius: 5px;      /* Rounded edges */
                }
                `}
            </style>
        </div>
    )
}

export default Products