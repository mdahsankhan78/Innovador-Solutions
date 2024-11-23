import React from 'react'
import CarouselIndustry from './Components/ui/Industries/CarouselIndustry'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div>
            <title>About Us - Innovador Solutions</title>
            <div className="relative md:-top-24 inset-0 z-0 bg-cover bg-center h-[30rem] flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg-services.jpeg)' }}>
                <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

                <div className='z-30 space-y-4'>
                    <h1 className='font-bold text-white text-5xl'>About Us</h1>
                    <p className='text-white text-lg text-center'><Link to={'/'} className='hover:text-primary transition-all'>Home</Link> - About Us</p>
                </div>

            </div>

            {/* main about section */}
            <div className="my-8 mx-4 my-32 md:my-0 md:mx-16">
                <grid className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="col-span-1">
                        <div className="flex space-x-4 items-center " data-aos='fade-up'>
                            <div className="custom-line"></div>
                            <h1 className='font-extrabold text-4xl mt-2' >Innovador
                                Solution</h1> {/* Added margin-top to separate the text */}

                        </div>

                        <p className='my-8 text-lg text-primary-foreground'>We are a mission-driven software company dedicated to shaping the future of business. We combine cutting-edge technologies with user-friendly interfaces to make everyday tasks effortless. Our passion for innovation inspires us to create transformative technology designed to empower businesses and improve lives.</p>
                        <p className='my-8 text-lg text-primary-foreground'>The company is registered with local statutory and professional bodies such as SECP, PSEB, P@SHA, and the CXO Global Forum.</p>
                        <p className='text-primary-foreground text-lg my-8 flex items-end gap-x-2'>Call to ask any question <h1 className='text-2xl text-black font-extrabold ' >+92 332 466 6823</h1></p>

                        <div className="justify-items-center grid grid-cols-2 xs:grid-cols-4 my-8 xs:space-x-6">
                            <div className="col-span-1">
                                <img src="/images/aboutprod1.jpg" className='h-20 xs:h-16' alt="" />
                            </div>
                            <div className="col-span-1">
                                <img src="/images/aboutprod2.jpg" className='h-20 xs:h-16' alt="" />
                            </div>
                            <div className="col-span-1">
                                <img src="/images/aboutprod3.jpg" className='h-20 xs:h-16' alt="" />
                            </div>
                            <div className="col-span-1">
                                <img src="/images/aboutprod4.jpg" className='h-20 xs:h-16' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <img src="/images/About2.jpg" alt="" />
                    </div>
                </grid>
            </div>

            {/* carousel section */}
            <div className="px-4 md:px-16 bg-secondary py-4">
                <CarouselIndustry />
            </div>

            {/* vision section */}
            <div className="my-16 mx-4 md:mx-16">
                <grid className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 items-center">
                    <div className="col-span-1">
                        <img src="/images/about3.jpg" alt="" />
                    </div>
                    <div className="col-span-1">
                        <div className="flex space-x-4 items-center " data-aos='fade-up'>
                            <div className="custom-line"></div>
                            <h1 className='font-extrabold text-4xl mt-2'>Our Vision</h1> {/* Added margin-top to separate the text */}

                        </div>

                        <p className='my-8 text-lg text-primary-foreground'>Our vision is to create intelligent systems that empower businesses and people around the globe. We aim to be a global leader in software innovation, delivering exceptional solutions that drive business success and improve lives.</p>
                        <p className='my-8 text-lg text-primary-foreground'>Our commitment to excellence, customer satisfaction, and ethical practices will guide us in building a sustainable and impactful future for our clients, employees, and communities.</p>
                    </div>

                </grid>
            </div>

            {/* mission section */}
            <div className="my-16 mx-4 md:mx-16">
                <grid className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 items-center">
                    <div className="col-span-1">
                        <div className="flex space-x-4 items-center " data-aos='fade-up'>
                            <div className="custom-line"></div>
                            <h1 className='font-extrabold text-4xl mt-2'>Our Mission</h1> {/* Added margin-top to separate the text */}

                        </div>

                        <p className='my-8 text-lg text-primary-foreground'>To balance innovation with practicality by delivering a diverse range of software services through a firm commitment to excellence, customer satisfaction, and continuous improvement.</p>
                    </div>
                    <div className="col-span-1">
                        <img src="/images/about4.jpg" alt="" />
                    </div>

                </grid>
            </div>

            {/* team section */}
            <div className="my-16 mx-4 md:mx-16">
                <grid className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 items-center">
                    <div className="col-span-1">
                        <img src="/images/about5.jpg" alt="" />
                    </div>
                    <div className="col-span-1">
                        <div className="flex space-x-4 items-center " data-aos='fade-up'>
                            <div className="custom-line"></div>
                            <h1 className='font-extrabold text-4xl mt-2'>Our Team</h1> {/* Added margin-top to separate the text */}

                        </div>

                        <p className='my-8 text-lg text-primary-foreground'>We are a team with a collective experience of over 100 years! We currently have a team of 50+ skilled professionals with diversified experience, ranging from the development and implementation of large applications like Core Banking Solutions and ERPs to SaaS, cloud computing, mobile applications, and web development.</p>
                    </div>

                </grid>
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

export default AboutUs