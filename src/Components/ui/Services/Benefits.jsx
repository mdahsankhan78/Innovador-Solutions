import React from 'react'
import Tags from "./Tags";
import { faBullhorn, faChartPie, faCloud, faCode, faFileCode, faHeadset, faKeyboard, faLaptopCode, faMobile, faMobileAlt, faPaintBrush, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CloudTabsServices, DigitalTabsServices, ITTabsServices, MobileTabsServices, UiTabsServices, WebTabsServices } from "./TabsServices";
import { CloudSummary, DigitalSummary, ITSummary, MobileSummary, UiSummary, WebSummary } from "./Summary";

export function WebBenefit() {
    return (

        <>
            <div className="hidden lg:block text-center mx-4 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-12">
                    <div className="col-span-1 justify-items-end md:mt-[9rem]">
                        <Tags icon={faLaptopCode} text={'Maintenance & Support'} side={'right'} />
                        <div className="mr-12">
                            <Tags icon={faMobile} text={'Database Management'} side={'right'} />
                        </div>
                        <Tags icon={faKeyboard} text={'Back-End Development'} side={'right'} />
                    </div>

                    <div className="col-span-1">
                        <div className="hover:shadow-xl justify-items-center mb-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobile} />
                            <h1 className="text-xl font-bold text-black">Custom Web Development                                </h1>
                        </div>

                        <img src="/images/service2.png" className="h-" alt="" />

                        <div className="hover:shadow-xl justify-items-center mt-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobileAlt} />
                            <h1 className="text-xl font-bold text-black">API Development and Integration</h1>
                        </div>
                    </div>

                    <div className="col-span-1 justify-items-start md:mt-[9rem]">
                        <Tags icon={faMobileAlt} text={'E-commerce Development'} />
                        <div className="ml-12">
                            <Tags icon={faFileCode} text={'Content Management Systems (CMS)'} />
                        </div>
                        <Tags icon={faChartPie} text={'Front-End Development'} />
                    </div>
                </div>


            </div>


            <div className="lg:hidden text-center mx-8 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="my-12 ">
                    <div className="justify-items-center">
                        <img src="/images/service2.png" alt="" />
                    </div>

                    <div className="">
                        <Tags icon={faLaptopCode} text={'Maintenance & Support'} />
                        <Tags icon={faMobile} text={'Database Management'} />
                        <Tags icon={faKeyboard} text={'Back-End Development'} />
                        <Tags icon={faMobile} text={'Custom Web Development'} />
                        <Tags icon={faMobileAlt} text={'API Development and Integration'} />
                        <Tags icon={faMobileAlt} text={'E-commerce Development'} />
                        <Tags icon={faFileCode} text={'Content Management Systems (CMS)'} />
                        <Tags icon={faChartPie} text={'Front-End Development'} />
                    </div>
                </div>


            </div>

            <div className="mx-4 md:mx-16">
                <h1 className="text-4xl text-black font-bold">Why should your brand MUST have the website</h1>
                <ul className="my-6 text-lg list-disc mx-5 space-y-4">
                    <li><h1 className="font-bold inline italic">Global Identity:</h1> A website can function as your online presence, which makes you accessible to a wider audience and switches you from an unknown person to a famous personality.</li>
                    <li><h1 className="font-bold inline italic">Credibility:</h1> Businesses with a website are more trustworthy than others, a web presence is effective in increasing the credibility of companies.</li>
                    <li><h1 className="font-bold inline italic">Sales And Marketing:</h1> A website is also very essential for sales and marketing purposes. It’s your space where you can promote your business fluently.</li>
                    <li><h1 className="font-bold inline italic">Networking:</h1> You can increase your professional circle by connecting with like-minded individuals, which will ultimately open more opportunities to grow.</li>
                    <li><h1 className="font-bold inline italic">Cost-effectiveness:</h1> A website can also be a cost-effective solution to reach a wider audience in minimal time, as it usually requires a one-time investment.</li>

                </ul>
            </div>


            <div className="bg-black px-6 md:px-[7rem] py-[6rem]">
                <h1 className="text-4xl text-white font-bold">We Organize Our
                    Production Process</h1>

                <WebTabsServices />

            </div>

            <WebSummary />
        </>

    )
}

export function UiBenefit() {
    return (

        <>
            <div className="hidden lg:block text-center mx-4 md:mx-16">
                <h1 className='font-bold text-5xl'>UI / UX Benefits</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-12">
                    <div className="col-span-1 justify-items-end md:mt-16">
                        <Tags icon={faLaptopCode} text={'Collaboration & Iteration'} side={'right'} />
                        <div className="mr-12">
                            <Tags icon={faMobile} text={'Responsive Design'} side={'right'} />
                        </div>
                        <Tags icon={faKeyboard} text={'Usability Testing'} side={'right'} />
                    </div>

                    <div className="col-span-1">
                        <img src="/images/service1.png" className="h-" alt="" />

                        <div className="hover:shadow-xl justify-items-center mt-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobileAlt} />
                            <h1 className="text-xl font-bold text-black">Interaction Design</h1>
                        </div>
                    </div>

                    <div className="col-span-1 justify-items-start md:mt-16">
                        <Tags icon={faShareAlt} text={'User Research & Analysis'} />
                        <div className="ml-12">
                            <Tags icon={faFileCode} text={'Wireframing & Prototyping'} />
                        </div>
                        <Tags icon={faChartPie} text={'Visual Design'} />
                    </div>
                </div>


            </div>


            <div className="lg:hidden text-center mx-8 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="my-12 ">
                    <div className="justify-items-center">
                        <img src="/images/service1.png" alt="" />
                    </div>

                    <div className="">
                        <Tags icon={faLaptopCode} text={'Collaboration & Iteration'} />
                        <Tags icon={faMobile} text={'Responsive Design'} />
                        <Tags icon={faKeyboard} text={'Usability Testing'} />
                        <Tags icon={faMobile} text={'Interaction Design'} />
                        <Tags icon={faMobileAlt} text={'User Research & Analysis'} />
                        <Tags icon={faFileCode} text={'Wireframing & Prototyping'} />
                        <Tags icon={faChartPie} text={'Visual Design'} />
                    </div>
                </div>


            </div>


            <div className="bg-black px-6 md:px-[7rem] py-[6rem]">
                <h1 className="text-4xl text-white font-bold">We Organize Our
                    Production Process</h1>

                <UiTabsServices />

            </div>

            <UiSummary />
        </>

    )
}



export function MobileBenefit() {
    return (

        <>
            <div className="hidden lg:block text-center mx-4 md:mx-16">
                <h1 className='font-bold text-5xl'>Mobile Application Benefits</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-12">
                    <div className="col-span-1 justify-items-end md:mt-[9rem]">
                        <Tags icon={faLaptopCode} text={'Maintenance & Support'} side={'right'} />
                        <div className="mr-12">
                            <Tags icon={faMobile} text={'Quality Assurance & Testing'} side={'right'} />
                        </div>
                        <Tags icon={faKeyboard} text={'Back-End Development'} side={'right'} />
                    </div>

                    <div className="col-span-1">
                        <div className="hover:shadow-xl justify-items-center mb-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobile} />
                            <h1 className="text-xl font-bold text-black">Custom Mobile App Development</h1>
                        </div>

                        <img src="/images/service3.png" className="h-" alt="" />

                        <div className="hover:shadow-xl justify-items-center mt-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobileAlt} />
                            <h1 className="text-xl font-bold text-black">
                                App Integration</h1>
                        </div>
                    </div>

                    <div className="col-span-1 justify-items-start md:mt-[9rem]">
                        <Tags icon={faMobileAlt} text={'Cross-Platform App Development'} />
                        <div className="ml-12">
                            <Tags icon={faFileCode} text={'Native App Development'} />
                        </div>
                        <Tags icon={faChartPie} text={'UI/UX Design'} />
                    </div>
                </div>


            </div>


            <div className="lg:hidden text-center mx-8 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="my-12 ">
                    <div className="justify-items-center">
                        <img src="/images/service3.png" alt="" />
                    </div>

                    <div className="">
                        <Tags icon={faLaptopCode} text={'Maintenance & Support'} />
                        <Tags icon={faMobile} text={'Quality Assurance & Testing'} />
                        <Tags icon={faKeyboard} text={'Back-End Development'} />
                        <Tags icon={faMobile} text={'Custom Mobile App Development'} />
                        <Tags icon={faMobileAlt} text={'App Integration'} />
                        <Tags icon={faMobileAlt} text={'Cross-Platform App Development'} />
                        <Tags icon={faFileCode} text={'Native App Development'} />
                        <Tags icon={faChartPie} text={'UI/UX Design'} />
                    </div>
                </div>


            </div>

            <div className="bg-black px-6 md:px-[7rem] py-[6rem]">
                <h1 className="text-4xl text-white font-bold">We Organize Our
                    Production Process</h1>

                <MobileTabsServices />

            </div>

            <MobileSummary />
        </>

    )
}

export function ITBenefit() {
    return (

        <>
            <div className="hidden lg:block text-center mx-4 md:mx-16">
                <h1 className='font-bold text-5xl'>IT Consultation Benefits</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-12">
                    <div className="col-span-1 justify-items-end md:mt-[9rem]">
                        <Tags icon={faLaptopCode} text={'Disaster Recovery & Business Continuity'} side={'right'} />
                        <div className="mr-12">
                            <Tags icon={faMobile} text={'IT Project Management'} side={'right'} />
                        </div>
                        <Tags icon={faKeyboard} text={'IT Infrastructure Optimization'} side={'right'} />
                    </div>

                    <div className="col-span-1">
                        <div className="hover:shadow-xl justify-items-center mb-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobile} />
                            <h1 className="text-xl font-bold text-black">
                                IT Strategy & Planning</h1>
                        </div>

                        <img src="/images/service4.png" className="h-" alt="" />

                        <div className="hover:shadow-xl justify-items-center mt-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobileAlt} />
                            <h1 className="text-xl font-bold text-black">

                                Cybersecurity Consulting</h1>
                        </div>
                    </div>

                    <div className="col-span-1 justify-items-start md:mt-[9rem]">
                        <Tags icon={faMobileAlt} text={'Technology Assessment & Selection'} />
                        <div className="ml-12">
                            <Tags icon={faFileCode} text={'Digital Transformation'} />
                        </div>
                        <Tags icon={faChartPie} text={'Cloud Consulting'} />
                    </div>
                </div>


            </div>


            <div className="lg:hidden text-center mx-8 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="my-12 ">
                    <div className="justify-items-center">
                        <img src="/images/service4.png" alt="" />
                    </div>

                    <div className="">
                        <Tags icon={faLaptopCode} text={'Disaster Recovery & Business Continuity'} />
                        <Tags icon={faMobile} text={'IT Project Management'} />
                        <Tags icon={faKeyboard} text={'IT Infrastructure Optimization'} />
                        <Tags icon={faMobile} text={' IT Strategy & Planning'} />
                        <Tags icon={faMobileAlt} text={'Cybersecurity Consulting'} />
                        <Tags icon={faMobileAlt} text={'Technology Assessment & Selection'} />
                        <Tags icon={faFileCode} text={'Digital Transformation'} />
                        <Tags icon={faChartPie} text={'Cloud Consulting'} />
                    </div>
                </div>


            </div>

            <div className="bg-black px-6 md:px-[7rem] py-[6rem]">
                <h1 className="text-4xl text-white font-bold">We Organize Our
                    Production Process</h1>

                <ITTabsServices />

            </div>

            <ITSummary />
        </>

    )
}

export function CloudBenefit() {
    return (

        <>
            <div className="hidden lg:block text-center mx-4 md:mx-16">
                <h1 className='font-bold text-5xl'>Cloud Computing Benefits</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-12">
                    <div className="col-span-1 justify-items-end md:mt-[9rem]">
                        <Tags icon={faLaptopCode} text={'24/7 Monitoring & Support'} side={'right'} />
                        <div className="mr-12">
                            <Tags icon={faMobile} text={'Backup & Disaster Recovery'} side={'right'} />
                        </div>
                        <Tags icon={faKeyboard} text={'Scalability & Performance Optimization'} side={'right'} />
                    </div>

                    <div className="col-span-1">
                        <div className="hover:shadow-xl justify-items-center mb-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobile} />
                            <h1 className="text-xl font-bold text-black">Custom SaaS Development</h1>
                        </div>

                        <img src="/images/service5.png" className="h-" alt="" />

                        <div className="hover:shadow-xl justify-items-center mt-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobileAlt} />
                            <h1 className="text-xl font-bold text-black">Cloud Security</h1>
                        </div>
                    </div>

                    <div className="col-span-1 justify-items-start md:mt-[9rem]">
                        <Tags icon={faMobileAlt} text={'Cloud Infrastructure Management'} />
                        <div className="ml-12">
                            <Tags icon={faFileCode} text={'Cloud Migration'} />
                        </div>
                        <Tags icon={faChartPie} text={'DevOps & Continuous Integration/Continuous Deployment (CI/CD)'} />
                    </div>
                </div>


            </div>


            <div className="lg:hidden text-center mx-8 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="my-12 ">
                    <div className="justify-items-center">
                        <img src="/images/service5.png" alt="" />
                    </div>

                    <div className="">
                        <Tags icon={faLaptopCode} text={'24/7 Monitoring & Support'} />
                        <Tags icon={faMobile} text={'Backup & Disaster Recovery'} />
                        <Tags icon={faKeyboard} text={'Scalability & Performance Optimization'} />
                        <Tags icon={faMobile} text={'Custom SaaS Development'} />
                        <Tags icon={faMobileAlt} text={'Cloud Security'} />
                        <Tags icon={faMobileAlt} text={'Cloud Infrastructure Management'} />
                        <Tags icon={faFileCode} text={'Cloud Migration'} />
                        <Tags icon={faChartPie} text={'DevOps & Continuous Integration/Continuous Deployment (CI/CD)'} />
                    </div>
                </div>


            </div>

            <div className="bg-black px-6 md:px-[7rem] py-[6rem]">
                <h1 className="text-4xl text-white font-bold">We Organize Our
                    Production Process</h1>

                <CloudTabsServices />

            </div>

            <CloudSummary />
        </>

    )
}

export function DigitalBenefit() {
    return (

        <>
            <div className="hidden lg:block text-center mx-4 md:mx-16">
                <h1 className='font-bold text-5xl'>Digital Marketing Benefits</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 my-12">
                    <div className="col-span-1 justify-items-end md:mt-16">
                        <Tags icon={faLaptopCode} text={'Conversion Rate Optimization (CRO)'} side={'right'} />
                        <div className="mr-12">
                            <Tags icon={faMobile} text={'Email Marketing'} side={'right'} />
                        </div>
                        <Tags icon={faKeyboard} text={'Content Marketing'} side={'right'} />
                    </div>

                    <div className="col-span-1">
                        <img src="/images/service6.png" className="h-" alt="" />

                        <div className="hover:shadow-xl justify-items-center mt-6 transition-all duration-500 space-y-6 p-10">
                            <FontAwesomeIcon className="h-12 text-primary" icon={faMobileAlt} />
                            <h1 className="text-xl font-bold text-black">Analytics & Reporting</h1>
                        </div>
                    </div>

                    <div className="col-span-1 justify-items-start md:mt-16">
                        <Tags icon={faShareAlt} text={'Search Engine Optimization (SEO)'} />
                        <div className="ml-12">
                            <Tags icon={faFileCode} text={'Pay-Per-Click (PPC) Advertising'} />
                        </div>
                        <Tags icon={faChartPie} text={'Social Media Marketing (SMM)'} />
                    </div>
                </div>


            </div>


            <div className="lg:hidden text-center mx-8 md:mx-16">
                <h1 className='font-bold text-5xl'>Web Development Benefits</h1>

                <div className="my-12 ">
                    <div className="justify-items-center">
                        <img src="/images/service6.png" alt="" />
                    </div>

                    <div className="">
                        <Tags icon={faLaptopCode} text={'Conversion Rate Optimization (CRO)'} />
                        <Tags icon={faMobile} text={'Email Marketing'} />
                        <Tags icon={faKeyboard} text={'Content Marketing'} />
                        <Tags icon={faMobileAlt} text={'Analytics & Reporting'} />
                        <Tags icon={faMobileAlt} text={'Search Engine Optimization (SEO)'} />
                        <Tags icon={faFileCode} text={'Pay-Per-Click (PPC) Advertising'} />
                        <Tags icon={faChartPie} text={'Social Media Marketing (SMM)'} />
                    </div>
                </div>


            </div>


            <div className="bg-black px-6 md:px-[7rem] py-[6rem]">
                <h1 className="text-4xl text-white font-bold">We Organize Our
                    Production Process</h1>

                <DigitalTabsServices />

            </div>

            <DigitalSummary />
        </>

    )
}