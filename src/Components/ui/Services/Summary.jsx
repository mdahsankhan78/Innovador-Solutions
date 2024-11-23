import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export function WebSummary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-[7rem] py-[6rem] gap-y-6 md:gap-x-6 md:gap-y-0">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Benefits</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Tailored web solutions that meet specific business needs.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Enhanced user experience and engagement.

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Secure, scalable, and high-performing websites.

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Efficient and seamless integration with other systems.

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Ongoing support and maintenance for long-term success.

                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Tools & Technologies</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Front-End: HTML5, CSS3, JavaScript, React, Angular, Vue.js

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Back-End: Node.js, PHP, Python, Ruby on Rails

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />CMS: WordPress, Joomla, Drupal


                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />E-commerce: Shopify, WooCommerce, Magento


                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Databases: MySQL, PostgreSQL, MongoDB


                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Version Control: Git, GitHub, Bitbucket


                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Deployment: AWS, Azure, Google Cloud Platform

                        </li>
                    </ul>
                </div>
                <style jsx>
                    {`
            #benefitlists li {
            display: flex;
            align-items: center; 
            gap: 1rem; /* Adds space between the items, equivalent to space-y-4 (for vertical space) */
            }
            `}
                </style>
            </div>
        </>
    )
}

export function UiSummary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-[7rem] py-[6rem] gap-y-6 md:gap-x-6 md:gap-y-0">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Benefits</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Enhanced user satisfaction and engagement.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Improved usability and accessibility.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Consistent and visually appealing interface.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Increased conversion rates and customer retention.

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Streamlined development process with clear design guidelines.

                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Tools & Technologies</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Design Tools: Sketch, Figma, Adobe XD, InVision

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Prototyping Tools: Axure, Marvel, Proto.io
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Collaboration Tools: Slack, Trello, Jira
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Analytics Tools: Google Analytics, Hotjar, Crazy Egg
                        </li>

                    </ul>
                </div>
                <style jsx>
                    {`
              #benefitlists li {
              display: flex;
              align-items: center; 
              gap: 1rem; /* Adds space between the items, equivalent to space-y-4 (for vertical space) */
              }
              `}
                </style>
            </div>
        </>
    )
}

export function MobileSummary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-[7rem] py-[6rem] gap-y-6 md:gap-x-6 md:gap-y-0">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Benefits</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Custom mobile solutions tailored to specific business needs.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Enhanced user experience and engagement.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Secure, scalable, and high-performing mobile apps.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Efficient and seamless integration with other systems.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Ongoing support and maintenance for long-term success.
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Tools & Technologies</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Native Development: Swift, Objective-C, Kotlin, Java
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Cross-Platform Development: React Native, Flutter, Xamarin
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Backend: Node.js, Python, PHP, Ruby on Rails
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Databases: MySQL, PostgreSQL, MongoDB
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Cloud Services: AWS, Firebase, Azure
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Design Tools: Sketch, Figma, Adobe XD
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Version Control: Git, GitHub, Bitbucket
                        </li>
                    </ul>
                </div>
                <style jsx>
                    {`
              #benefitlists li {
              display: flex;
              align-items: center; 
              gap: 1rem; /* Adds space between the items, equivalent to space-y-4 (for vertical space) */
              }
              `}
                </style>
            </div>
        </>
    )
}

export function ITSummary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-[7rem] py-[6rem] gap-y-6 md:gap-x-6 md:gap-y-0">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Benefits</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Strategic alignment of IT with business goals. 
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Enhanced operational efficiency and productivity.  
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Improved security and compliance.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Access to expert knowledge and best practices.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Cost-effective and scalable IT solutions.
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Tools & Technologies</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />ITSM Tools: ServiceNow, BMC Remedy, Freshservice
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Project Management Tools: Microsoft Project, Jira, Trello
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Cloud Platforms: AWS, Azure, Google Cloud Platform
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Security Tools: Fortinet, Palo Alto Networks, Symantec
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Collaboration Tools: Microsoft 365, Slack, Zoom
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Monitoring Tools: Nagios, Zabbix, SolarWinds
                        </li>
                    </ul>
                </div>
                <style jsx>
                    {`
            #benefitlists li {
            display: flex;
            align-items: center; 
            gap: 1rem; /* Adds space between the items, equivalent to space-y-4 (for vertical space) */
            }
            `}
                </style>
            </div>
        </>
    )
}
export function CloudSummary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-[7rem] py-[6rem] gap-y-6 md:gap-x-6 md:gap-y-0">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Benefits</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Enhanced business agility and scalability.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Reduced IT costs and operational overhead.

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Improved security and compliance.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Faster time-to-market for new applications.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Reliable and high-performing cloud infrastructure.
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Tools & Technologies</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Cloud Platforms: AWS, Azure, Google Cloud Platform
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />DevOps Tools: Jenkins, GitLab CI, CircleCI, Docker, Kubernetes
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Infrastructure as Code: Terraform, AWS CloudFormation, Ansible
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Monitoring & Logging: Prometheus, Grafana, ELK Stack, CloudWatch

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Security: AWS IAM, Azure Security Center, Google Cloud IAM

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Backup & Recovery: AWS Backup, Azure Site Recovery, Google Cloud Backup
                        </li>
                    </ul>
                </div>
                <style jsx>
                    {`
            #benefitlists li {
            display: flex;
            align-items: center; 
            gap: 1rem; /* Adds space between the items, equivalent to space-y-4 (for vertical space) */
            }
            `}
                </style>
            </div>
        </>
    )
}

export function DigitalSummary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-[7rem] py-[6rem] gap-y-6 md:gap-x-6 md:gap-y-0">
                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Benefits</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Enhanced online visibility and brand awareness.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Increased website traffic and lead generation.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Higher conversion rates and ROI.
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Data-driven insights and strategic adjustments.    
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Comprehensive and integrated digital marketing approach.
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h1 className='font-bold text-5xl'>Tools & Technologies</h1>
                    <ul id='benefitlists' className='mt-8 space-y-4'>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />SEO Tools: Google Search Console, Ahrefs, SEMrush, Moz
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />PPC Tools: Google Ads, Bing Ads, Facebook Ads Manager

                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Social Media Tools: Hootsuite, Buffer, Sprout Social
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Email Marketing Tools: Mailchimp, Constant Contact, HubSpot
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Analytics Tools: Google Analytics, Google Data Studio, Hotjar
                        </li>
                        <li><FontAwesomeIcon className='h-8 text-primary' icon={faArrowAltCircleRight} />Content Marketing Tools: BuzzSumo, CoSchedule, Grammarly
                        </li>
                    </ul>
                </div>
                <style jsx>
                    {`
            #benefitlists li {
            display: flex;
            align-items: center; 
            gap: 1rem; /* Adds space between the items, equivalent to space-y-4 (for vertical space) */
            }
            `}
                </style>
            </div>
        </>
    )
}