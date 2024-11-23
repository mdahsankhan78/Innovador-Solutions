import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from "./Components/ui/textarea"
import { Input } from "./Components/ui/input"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./Components/ui/tooltip"
import { Button } from "./Components/ui/button"
import React, { useState } from 'react'
import CarouselContacts from './Components/ui/Contactus/carouselContacts'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    const [msg, setMsg] = useState('');
    const [contact, setContact] = useState({ name: '', email: '' });

    const handleInput = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const handleContactUs = (e) => {
        e.preventDefault()
        if (!contact.name || !contact.email) {
            setMsg('One or more fields have an error. Please check and try again.')
        }

        else {
            setMsg('Thank you for your message. It has been sent.')
        }

    }
    return (
        <div>
            <title>Contact with Innovador Solutions - Get in Touch with Our Team</title>
            <div className="relative md:-top-24 inset-0 z-0 bg-cover bg-center h-[30rem] flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg-services.jpeg)' }}>
                <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

                <div className='z-30 space-y-4'>
                    <h1 className='font-bold text-white text-5xl'>Contact Us</h1>
                    <p className='text-white text-lg text-center'><Link to={'/'} className='hover:text-primary transition-all'>Home</Link> - Contact Us</p>
                </div>

            </div>
            <div className='mx-8 xs:mx-16 my-32 md:my-0 mt-[10rem] md:mt-0' id='Contact'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:space-x-8 gap-y-8">


                    <div className="col-span-1 flex space-x-8">
                        <div>
                            <div className="bg-primary p-4 rounded-full text-white ">
                                <FontAwesomeIcon icon={faPhone} className='h-6' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Call for help:</h1>
                            <p className='text-lg text-primary-foreground'>+92 332 466 6823</p>
                        </div>
                    </div>

                    <div className="col-span-1 flex space-x-8">
                        <div>
                            <div className="bg-primary p-4 rounded-full text-white ">
                                <FontAwesomeIcon icon={faEnvelope} className='h-6' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Mail for information:</h1>
                            <p className='text-lg text-primary-foreground'>info@innovadorsolutions.com</p>
                        </div>
                    </div>
                    <div className="col-span-1 flex space-x-8">
                        <div>
                            <div className="bg-primary p-4 rounded-full text-white ">
                                <FontAwesomeIcon icon={faMapLocation} className='h-6' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Karachi</h1>
                            <p className='text-lg text-primary-foreground'>111, Progressive Center, P.E.C.H.S Block 2 Block 6 PECHS, Karachi, Karachi City, Sindh 75400</p>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 lg:gap-y-0 my-16 items-center">
                    <div className="col-span-1">
                        <img src="/images/contactus.png" alt="" />


                    </div>

                    <div className="col-span-1">


                        <form onSubmit={handleContactUs}>
                            <div className="custom-line"  data-aos='fade-up'></div>
                            <h1 className='text-black font-bold text-4xl' data-aos='fade-up'>Ready to Get Started? </h1>
                            <p className='my-6 text-lg text-primary-foreground'>Give us a call or drop by anytime. We strive to answer all inquiries within 24 hours on business days and will be happy to address any questions you may have.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-4 gap-x-4 gap-y-4">
                                <div className="col-span-1">
                                    <Input name='name' onChange={handleInput} placeholder='Name*' />
                                </div>
                                <div className="col-span-1">
                                    <Input name='email' onChange={handleInput} type='email' placeholder='Email*' />
                                </div>
                            </div>
                            <Textarea placeholder='Message...' className='mb-8' rows='7' />
                            <Button type='submit' className='w-full text-white font-bold text-lg py-6 hover:bg-black transition-all duration-500 relative overflow-hidden group'><p className="group-hover:hidden text-white">Send Message</p>
                                <span
                                    className={`absolute inset-0 bg-black transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 `}
                                ></span>
                                <span className={`relative z-10 `}>
                                    {/* Both the name and the arrow icon in one line, visible only on hover */}
                                    <p className="hidden group-hover:flex items-center space-x-2">
                                        <span>Send Message</span>
                                        <ArrowRight />
                                    </p>
                                </span>
                            </Button>
                            <p className={`text-lg my-4 ${msg === 'Thank you for your message. It has been sent.' ? 'text-green-500' : 'text-red-500'}`}>
                                {msg}
                            </p>
                        </form>

                    </div>


                </div>

                <div className="my-16">
                    <CarouselContacts />
                </div>


            </div>


            <div className="bg-primary p-8 overflow-x-hidden">
                <div className="mb-16 text-center text-white space-y-4">
                    <h1 className='font-bold text-4xl'>Widely covering these countries</h1>
                    <p className='text-md'>We are covering four distinct and influential countries worldwide: Pakistan, United States, Canada & Qatar.</p>
                </div>

                <div className="relative" data-aos='zoom-out'>
                    <img
                        src="/images/globe.png"
                        alt="Globe"
                        className="object-contain w-full"
                    />

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://www.google.com/maps/place/160+Erin+Centre+Blvd+%233050,+Mississauga,+ON,+Canada/@43.5409202,-79.7419161,17.25z/data=!4m9!1m2!2m1!1s3050-160+ERIN+Center+BLV+MISSISSAUGA+L5M+OP5!3m5!1s0x882b420aed9f4ec5:0xfcadb4b39021b303!8m2!3d43.5409868!4d-79.7384856!15sCi0zMDUwLTE2MCBFUklOIENlbnRlciBCTFZEIE1JU1NJU1NBVUdBIEw1TSBPUDWSARBjb21wb3VuZF9zZWN0aW9u4AEA?entry=ttu" target='_blank' className="absolute" style={{ top: '20%', left: '12%' }}>

                                    <img src="/images/map4.png" className='bg-white p-1 lg:p-2 rounded-lg lg:rounded-xl h-8  lg:h-14' alt="" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>CANADA</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://www.google.com/maps/place/1000+John+R+Rd,+Troy,+MI+48083,+USA/@42.5452472,-83.1091332,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x8824c4e41bb30ced:0x9de020f970488441!2s1000+John+R+Rd,+Troy,+MI+48083,+USA!2m2!1d-83.1065583!2d42.5452433!3m5!1s0x8824c4e41bb30ced:0x9de020f970488441!8m2!3d42.5452433!4d-83.1065583!16s%2Fg%2F11bw3y3dm4?entry=ttu" target='_blank' className="absolute" style={{ top: '40%', left: '16%' }}>

                                    <img src="/images/map3.png" className='bg-white p-1 lg:p-2 rounded-lg lg:rounded-xl h-8  lg:h-14' alt="" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>USA</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="#" target='_blank' className="absolute" style={{ top: '50%', left: '55%' }}>

                                    <img src="/images/map2.png" className='bg-white p-1 lg:p-2 rounded-lg lg:rounded-xl h-8  lg:h-14' alt="" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>QATAR</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="https://www.google.com/maps/dir/Progressive+Center,+507+Shahrah-e-Faisal+Service+Rd+S,+Block+6+PECHS,+Karachi,+Karachi+City,+Sindh,+Pakistan/Aptech+Defence+Hyderabad%D8%8C+Restaurant%D8%8C+Plot+%23+16,+Anum+Center,+1st+Floor,+Defence+Commercial+Area,+Near+Mirchi+360,+Defence+Housing+Society+Defence,+Hyderabad,+Sindh+71000,+Pakistan%E2%80%AD/Aptech+Johar+Town+Lahore,+2nd+Floor,+Commercial+Plaza,+Khayaban-e-Firdousi,+near+ALLAH-U-CHOWK,+Block+E+Phase+1+Johar+Town,+Lahore,+Punjab+54782,+Pakistan/@28.1279857,65.3832589,6z/data=!3m1!4b1!4m20!4m19!1m5!1m1!1s0x3eb33ea3d7684633:0x25c7575b526e8c13!2m2!1d67.0739428!2d24.8626771!1m5!1m1!1s0x394c7091dbec9a17:0xda868aa47bcd1e33!2m2!1d68.3496631!2d25.3842389!1m5!1m1!1s0x391903e287deb3d9:0xdc2277fb90c8e155!2m2!1d74.2976088!2d31.4691402!3e0?entry=ttu" target='_blank' className="absolute" style={{ top: '42%', left: '66%' }}>

                                    <img src="/images/map1.png" className='bg-white p-1 lg:p-2 rounded-lg lg:rounded-xl h-8  lg:h-14' alt="" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>PAKISTAN</p><br />
                                <p className='text-sm'>Karachi - Hyderabad - Lahore</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
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

export default ContactUs
