import { faBullhorn, faChartPie, faCloud, faCode, faFileCode, faHeadset, faKeyboard, faLaptopCode, faMobile, faMobileAlt, faP, faPaintBrush, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { CloudBenefit, DigitalBenefit, ITBenefit, MobileBenefit, UiBenefit, WebBenefit } from "./Benefits";
import { ArrowDown } from "lucide-react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

const Cards = () => {
    const [Benefits, setBenefits] = useState('');

    const handleBenefit = (benefit) => {
        setBenefits(benefit);
        const targetElement = document.getElementById('benefits');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                
            });
        }

    }


    return (
        <>
            <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-8 mx-4 md:mx-16 overflow-x-hidden">
                <div class="pattern-dots-md gray-light">
                    <div class="rounded bg-white shadow-xl p-8 transform translate-x-6 -translate-y-6 h-full">
                        <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-black mb-5 flex-shrink-0 p-2">
                            <FontAwesomeIcon className="text-white h-auto" icon={faPaintBrush} />

                        </div>
                        <div class="flex-grow space-y-3">
                            <h2 class=" text-xl title-font font-medium">UI / UX</h2>
                            <p class="leading-relaxed text-sm text-justify">Our UI/UX design service aims to create intuitive, user-friendly, and aesthetically pleasing interfaces that enhance user satisfaction and engagement. We focus on understanding the user’s needs and behaviors to design interfaces that are both functional and enjoyable to use.</p>
                            <Typography className="font-normal text-primary underline cursor-pointer" onClick={() => handleBenefit('ui')}>Details</Typography>
                        </div>
                    </div>
                </div>

                <div class="pattern-dots-md gray-light">
                    <div class="rounded bg-white shadow-xl p-8 transform translate-x-6 -translate-y-6 h-full">
                        <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-black mb-5 flex-shrink-0 p-2">
                             <FontAwesomeIcon className="text-white h-auto" icon={faCode} />


                        </div>
                        <div class="flex-grow space-y-3">
                            <h2 class=" text-xl title-font font-medium">Web Development</h2>
                            <p class="leading-relaxed text-sm text-justify">A website is the digital face of any business, and in this era of cutting-edge technologies, Innovador Solutions strives to provide the best web development services at budget-friendly prices to let companies have their unique and engaging digital presence. Our team of experts is dedicated to building dynamic websites using frontend and backend technologies to cope with the technical demands of the era.</p>
                            <Typography className="font-normal text-primary underline cursor-pointer" onClick={() => handleBenefit('web')}>Details</Typography>
                        </div>
                    </div>
                </div>

                <div class="pattern-dots-md gray-light">
                    <div class="rounded bg-white shadow-xl p-8 transform translate-x-6 -translate-y-6 h-full">
                        <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-black mb-5 flex-shrink-0 p-2">
                             <FontAwesomeIcon className="text-white h-auto" icon={faMobileAlt} />


                        </div>
                        <div class="flex-grow space-y-3">
                            <h2 class=" text-xl title-font font-medium">Mobile Application</h2>
                            <p class="leading-relaxed text-sm text-justify">Our Mobile App Development service aims to create high-quality, user-friendly, and innovative mobile applications for various platforms, including iOS and Android. We focus on delivering apps that meet the specific needs of our clients, providing a seamless and engaging user experience while ensuring optimal performance and scalability.</p>
                            <Typography className="font-normal text-primary underline cursor-pointer" onClick={() => handleBenefit('mobile')}>Details</Typography>
                        </div>
                    </div>
                </div>

                <div class="pattern-dots-md gray-light">
                    <div class="rounded bg-white shadow-xl p-8 transform translate-x-6 -translate-y-6 h-full">
                        <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-black mb-5 flex-shrink-0 p-2">
                             <FontAwesomeIcon className="text-white h-auto" icon={faHeadset} />


                        </div>
                        <div class="flex-grow space-y-3">
                            <h2 class=" text-xl title-font font-medium"> IT Consultation</h2>
                            <p class="leading-relaxed text-sm text-justify">Our IT Consulting service aims to help businesses leverage technology to achieve their strategic goals and overcome operational challenges. We provide expert advice, strategic planning, and practical solutions to enhance your IT infrastructure, improve efficiency, and drive innovation.</p>
                            <Typography className="font-normal text-primary underline cursor-pointer" onClick={() => handleBenefit('it')}>Details</Typography>
                        </div>
                    </div>
                </div>

                <div class="pattern-dots-md gray-light">
                    <div class="rounded bg-white shadow-xl p-8 transform translate-x-6 -translate-y-6 h-full">
                        <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-black mb-5 flex-shrink-0 p-2">
                             <FontAwesomeIcon className="text-white h-auto" icon={faCloud} />


                        </div>
                        <div class="flex-grow space-y-3">
                            <h2 class=" text-xl title-font font-medium">SaaS & Cloud Computing</h2>
                            <p class="leading-relaxed text-sm text-justify">Our SaaS (Software as a Service) & Cloud Computing service aims to provide scalable, secure, and cost-effective cloud-based solutions that enhance business agility and efficiency. We focus on leveraging the power of cloud technologies to deliver robust software applications and infrastructure services tailored to meet the diverse needs of our clients.</p>
                            <Typography className="font-normal text-primary underline cursor-pointer" onClick={() => handleBenefit('cloud')}>Details</Typography>
                        </div>
                    </div>
                </div>

                <div class="pattern-dots-md gray-light">
                    <div class="rounded bg-white shadow-xl p-8 transform translate-x-6 -translate-y-6 h-full">
                        <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary text-black mb-5 flex-shrink-0 p-2">
                             <FontAwesomeIcon className="text-white h-auto" icon={faBullhorn} />


                        </div>
                        <div class="flex-grow space-y-3">
                            <h2 class=" text-xl title-font font-medium"> Digital Marketing</h2>
                            <p class="leading-relaxed text-sm text-justify">Our Digital Marketing service aims to enhance your online presence, drive targeted traffic, and boost conversions through comprehensive and strategic digital marketing campaigns. We leverage various digital channels and data-driven techniques to create customized marketing solutions that align with your business goals and deliver measurable results.</p>
                            <Typography className="font-normal text-primary underline cursor-pointer" onClick={() => handleBenefit('digital')}>Details</Typography>
                        </div>
                    </div>
                </div>

                
            </div>


            <div id="benefits" className=" my-[15rem]">
                {Benefits === 'ui' ? (
                    <>
                        <UiBenefit />
                    </>
                ) : Benefits === 'web' ? (
                    <>
                        <WebBenefit />
                    </>
                ) : Benefits === 'mobile' ? (
                    <>
                        <MobileBenefit />
                    </>
                ) : Benefits === 'it' ? (
                    <ITBenefit />
                ) : Benefits === 'cloud' ? (
                    <CloudBenefit />
                ) : Benefits === 'digital' ? (
                    <DigitalBenefit />
                ) : (
                    <></>
                )}
            </div>
        </>

    )
}

export default Cards
