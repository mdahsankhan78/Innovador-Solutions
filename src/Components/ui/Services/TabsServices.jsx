import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabsServices";

export function WebTabsServices(){
    return (
        <Tabs defaultValue="discovery" className="mt-10">
            <TabsList className=''>
                <TabsTrigger value='discovery'>Discovery Phase</TabsTrigger>
                <TabsTrigger value='planning'>Planning Phase</TabsTrigger>
                <TabsTrigger value='development'>development Phase</TabsTrigger>
                <TabsTrigger value='testing'>testing and quality assurance</TabsTrigger>
                <TabsTrigger value='launch'>launch and deployment</TabsTrigger>
                <TabsTrigger value='post'>Post-launch Support</TabsTrigger>
            </TabsList>

            <TabsContent value='discovery' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Initial consultation to understand project goals and requirements.
                    </li>
                    <li>Conducting competitor analysis and market research.
                    </li>
                </ul>
            </TabsContent>

            <TabsContent value='planning' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Defining project scope and milestones.

                    </li>
                    <li>Creating wireframes and prototypes.
                    </li>
                    <li>Setting up the project timeline and budget.
                    </li>
                </ul>
            </TabsContent>
            <TabsContent value='development' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Front-end and back-end development.
                    </li>
                    <li>Implementing required functionalities and integrations.
                    </li>
                    <li>Conducting regular code reviews and testing.
                    </li>
                </ul>
            </TabsContent>
            <TabsContent value='testing' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Performing thorough testing to identify and fix bugs.
                    </li>
                    <li>Ensuring website performance and security.
                    </li>
                    <li>Conducting user acceptance testing (UAT).
                    </li>
                </ul>
            </TabsContent>
            <TabsContent value='launch' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Deploying the website to a live server.
                    </li>
                    <li>Conducting a final round of testing and optimizations.
                    </li>
                    <li>Training clients on website management and maintenance.
                    </li>
                </ul>
            </TabsContent>
            <TabsContent value='post' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Monitoring website performance and user feedback.
                    </li>
                    <li>Providing regular updates and enhancements.
                    </li>
                    <li>Offering long-term support and maintenance services.
                    </li>
                </ul>
            </TabsContent>

            <style jsx>
                {`
                #lists {
                list-style-type: none; /* Remove default bullets */
                }

                #lists li::before {
                content: '✓';          /* Unicode checkmark */
                font-size: 20px;       /* Adjust size */
                margin-right: 10px;    /* Space between checkmark and text */
                }

                `}
            </style>
        </Tabs>
    )
}

export function UiTabsServices(){
    return (
        <Tabs defaultValue="discovery" className="mt-10">
            <TabsList className=''>
                <TabsTrigger value='discovery'>Discovery Phase</TabsTrigger>
                <TabsTrigger value='design'>Design Phase</TabsTrigger>
                <TabsTrigger value='development'>Development Support</TabsTrigger>
                <TabsTrigger value='launch'>Launch & Post-Launch</TabsTrigger>
            </TabsList>

            <TabsContent value='discovery' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Initial consultation to understand project goals and requirements.
                    </li>
                    <li>Research and analysis to gather user insights and market trends.
                    </li>
                </ul>
            </TabsContent>

            <TabsContent value='design' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Research and analysis to gather user insights and market trends.</li>
                    <li>Developing the visual design and interaction elements.</li>
                    <li>Conducting usability tests and refining the design.</li>
                </ul>
            </TabsContent>
            <TabsContent value='development' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Providing detailed design specifications and assets to developers.</li>
                    <li>Collaborating with the development team to ensure accurate implementation.</li>
                    <li>Conducting design reviews and QA testing.</li>
                </ul>
            </TabsContent>
            <TabsContent value='launch' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Assisting with the launch of the product.</li>
                    <li>Monitoring user feedback and performance metrics.</li>
                    <li>Making necessary adjustments and improvements post-launch.</li>
                </ul>
            </TabsContent>

            <style jsx>
                {`
                #lists {
                list-style-type: none; /* Remove default bullets */
                }

                #lists li::before {
                content: '✓';          /* Unicode checkmark */
                font-size: 20px;       /* Adjust size */
                margin-right: 10px;    /* Space between checkmark and text */
                }

                `}
            </style>
        </Tabs>
    )
}

export function MobileTabsServices(){
    return (
        <Tabs defaultValue="discovery" className="mt-10">
            <TabsList className=''>
                <TabsTrigger value='discovery'>Discovery Phase</TabsTrigger>
                <TabsTrigger value='planning'>Planning Phase</TabsTrigger>
                <TabsTrigger value='development'>Design & Development Phase</TabsTrigger>
                <TabsTrigger value='testing'>Testing & Quality Assurance</TabsTrigger>
                <TabsTrigger value='launch'>Launch & Deployment</TabsTrigger>
                <TabsTrigger value='post'>Post-Launch Support</TabsTrigger>
            </TabsList>

            <TabsContent value='discovery' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Initial consultation to understand project goals and requirements.
                    </li>
                    <li>Conducting market research and competitor analysis.</li>
                </ul>
            </TabsContent>

            <TabsContent value='planning' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Defining project scope, milestones, and deliverables.</li>
                    <li>Creating wireframes and prototypes.</li>
                </ul>
            </TabsContent>
            <TabsContent value='development' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Developing the front-end and back-end of the app.</li>
                    <li>Implementing required features and integrations.</li>
                </ul>
            </TabsContent>
            <TabsContent value='testing' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Performing thorough testing to identify and resolve issues.</li>
                    <li>Ensuring app performance, security, and usability.</li>
                </ul>
            </TabsContent>
            <TabsContent value='launch' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Deploying the app-to-app stores (App Store, Google Play).</li>
                    <li>Conducting a final round of testing and optimizations.</li>
                    <li>Providing training on app management and maintenance.</li>
                </ul>
            </TabsContent>
            <TabsContent value='post' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Monitoring app performance and user feedback.
                    </li>
                    <li>Providing regular updates and enhancements.
                    </li>
                    <li>Offering long-term support and maintenance services.
                    </li>
                </ul>
            </TabsContent>

            <style jsx>
                {`
                #lists {
                list-style-type: none; /* Remove default bullets */
                }

                #lists li::before {
                content: '✓';          /* Unicode checkmark */
                font-size: 20px;       /* Adjust size */
                margin-right: 10px;    /* Space between checkmark and text */
                }

                `}
            </style>
        </Tabs>
    )
}

export function ITTabsServices(){
    return (
        <Tabs defaultValue="discovery" className="mt-10">
            <TabsList className=''>
                <TabsTrigger value='discovery'>Discovery Phase</TabsTrigger>
                <TabsTrigger value='planning'>Strategy Development</TabsTrigger>
                <TabsTrigger value='development'>Implementation Phase</TabsTrigger>
                <TabsTrigger value='testing'>Monitoring & Optimization</TabsTrigger>
                <TabsTrigger value='launch'>Support & Optimization</TabsTrigger>
            </TabsList>

            <TabsContent value='discovery' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Initial consultation to understand business goals and challenges.</li>
                    <li>Conducting a thorough assessment of the current IT environment.</li>
                </ul>
            </TabsContent>

            <TabsContent value='planning' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Defining IT objectives and aligning them with business goals.</li>
                    <li>Developing a customized IT strategy and roadmap.</li>
                    <li>Creating detailed project plans with timelines and budgets.</li>
                </ul>
            </TabsContent>
            <TabsContent value='development' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Executing the IT strategy and implementing recommended solutions.
                    </li>
                    <li>Ensuring smooth integration with existing systems.</li>
                    <li>Providing training and support to ensure successful adoption.</li>
                </ul>
            </TabsContent>
            <TabsContent value='testing' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Continuously monitoring IT performance and security.</li>
                    <li>Making data-driven adjustments to optimize IT operations.</li>
                    <li>Providing regular reports and insights.</li>
                </ul>
            </TabsContent>
            <TabsContent value='launch' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Offering ongoing support and maintenance services.</li>
                    <li>Ensuring the reliability and performance of IT systems.</li>
                    <li>Keeping IT infrastructure updated and secure.</li>
                </ul>
            </TabsContent>

            <style jsx>
                {`
                #lists {
                list-style-type: none; /* Remove default bullets */
                }

                #lists li::before {
                content: '✓';          /* Unicode checkmark */
                font-size: 20px;       /* Adjust size */
                margin-right: 10px;    /* Space between checkmark and text */
                }

                `}
            </style>
        </Tabs>
    )
}

export function CloudTabsServices(){
    return (
        <Tabs defaultValue="discovery" className="mt-10">
            <TabsList className=''>
                <TabsTrigger value='discovery'>Discovery Phase</TabsTrigger>
                <TabsTrigger value='planning'>Planning Phase</TabsTrigger>
                <TabsTrigger value='development'>Development & Implementation Phase</TabsTrigger>
                <TabsTrigger value='testing'>Migration &  Deployment</TabsTrigger>
                <TabsTrigger value='launch'>Monitoring & Optimization</TabsTrigger>
                <TabsTrigger value='post'>Support & Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value='discovery' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Initial consultation to understand business goals and challenges.</li>
                    <li>Conducting a thorough assessment of existing infrastructure and applications.</li>
                </ul>
            </TabsContent>

            <TabsContent value='planning' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Defining project scope, milestones, and deliverables.</li>
                    <li>Creating detailed architecture and implementation plans.</li>
                    <li>Setting up the project timeline and budget.</li>
                </ul>
            </TabsContent>
            <TabsContent value='development' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Developing custom SaaS applications or setting up cloud infrastructure.</li>
                    <li>Implementing required features, security measures, and integrations.</li>
                    <li>Conducting regular code reviews and testing.</li>
                </ul>
            </TabsContent>
            <TabsContent value='testing' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Planning and executing the migration of existing systems to the cloud.</li>
                    <li>Deploying new applications and infrastructure to live environments.</li>
                </ul>
            </TabsContent>
            <TabsContent value='launch' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Continuously monitoring performance and security.</li>
                    <li>Implementing optimizations based on real-time data and feedback.</li>
                </ul>
            </TabsContent>
            <TabsContent value='post' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Offering ongoing support and maintenance services.</li>
                    <li>Ensuring the reliability and availability of cloud solutions.</li>
                </ul>
            </TabsContent>

            <style jsx>
                {`
                #lists {
                list-style-type: none; /* Remove default bullets */
                }

                #lists li::before {
                content: '✓';          /* Unicode checkmark */
                font-size: 20px;       /* Adjust size */
                margin-right: 10px;    /* Space between checkmark and text */
                }

                `}
            </style>
        </Tabs>
    )
}

export function DigitalTabsServices(){
    return (
        <Tabs defaultValue="discovery" className="mt-10">
            <TabsList className=''>
                <TabsTrigger value='discovery'>Discovery Phase</TabsTrigger>
                <TabsTrigger value='planning'>Strategy Phase</TabsTrigger>
                <TabsTrigger value='development'>Implementation Phase</TabsTrigger>
                <TabsTrigger value='testing'>Monitoring & Optimization</TabsTrigger>
                <TabsTrigger value='launch'>Reporting & Analysis</TabsTrigger>
                <TabsTrigger value='post'>Support & Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value='discovery' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Initial consultation to understand business goals and target audience.</li>
                    <li>Conducting a comprehensive digital marketing audit.</li>
                </ul>
            </TabsContent>

            <TabsContent value='planning' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Defining marketing objectives and KPIs.</li>
                    <li>Developing a customized digital marketing strategy.</li>
                    <li>Creating a detailed plan with timelines and budgets. </li>
                </ul>
            </TabsContent>
            <TabsContent value='development' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Executing the digital marketing plan across chosen channels.</li>
                    <li>Creating and optimizing content, ads, and campaigns.</li>
                </ul>
            </TabsContent>
            <TabsContent value='testing' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Continuously monitoring campaign performance.</li>
                    <li>Analyzing data and making data-driven adjustments.</li>
                </ul>
            </TabsContent>
            <TabsContent value='launch' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Providing regular performance reports.</li>
                    <li>Offering insights and recommendations based on data analysis.</li>
                    <li>Refining strategies to improve results.</li>
                </ul>
            </TabsContent>
            <TabsContent value='post' className='mt-[18rem] xs:mt-[8rem] lg:mt-[7rem]'>
                <ul id='lists'>
                    <li>Providing ongoing support and campaign management.</li>
                    <li>Adjusting strategies based on market trends and feedback.</li>
                </ul>
            </TabsContent>

            <style jsx>
                {`
                #lists {
                list-style-type: none; /* Remove default bullets */
                }

                #lists li::before {
                content: '✓';          /* Unicode checkmark */
                font-size: 20px;       /* Adjust size */
                margin-right: 10px;    /* Space between checkmark and text */
                }

                `}
            </style>
        </Tabs>
    )
}
