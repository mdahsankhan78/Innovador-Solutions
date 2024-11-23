import { faEnvelope, faGlobe, faMapLocation, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import React, { useState } from 'react'
import CustomButton from './ui/CustomButton'
import AboutCard from './ui/AboutCard'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

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
        <div className='mx-8 xs:mx-16 my-32 mt-[10rem] md:mt-0' id='Contact'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center">

                <div className="col-span-1">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-x-10">
                        <div className='col-span-1'>
                            <div class="relative group w-20">
                                {/* <!-- Yellow tilted div --> */}
                                <div class="absolute inset-1 transform bg-primary transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                                {/* <!-- Black container with content --> */}
                                <div class="relative z-10 flex items-center  bg-black text-white">
                                    <div className="h-8 border-l-4 border-primary"></div>
                                    <div class="flex items-center justify-center">
                                        <FontAwesomeIcon icon={faMapLocation} className="text-primary h-8 p-4" />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Address text --> */}
                            <p class="mt-2 text-gray-700">
                                111, Progressive Center, P.E.C.H.S Block 2<br />
                                Block 6 PECHS, Karachi,
                            </p>

                        </div>

                        <div className='col-span-1'>
                            <div class="relative group w-20">
                                {/* <!-- Yellow tilted div --> */}
                                <div class="absolute inset-1 transform bg-primary transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                                {/* <!-- Black container with content --> */}
                                <div class="relative z-10 flex items-center  bg-black text-white">
                                    <div className="h-8 border-l-4 border-primary"></div>
                                    <div class="flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="text-primary h-8 p-4" />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Address text --> */}
                            <p class="mt-2 text-gray-700">
                                +92 332 466 6823
                            </p>

                        </div>

                        <div className='col-span-1'>
                            <div class="relative group w-20">
                                {/* <!-- Yellow tilted div --> */}
                                <div class="absolute inset-1 transform bg-primary transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                                {/* <!-- Black container with content --> */}
                                <div class="relative z-10 flex items-center  bg-black text-white">
                                    <div className="h-8 border-l-4 border-primary"></div>
                                    <div class="flex items-center justify-center">
                                        <FontAwesomeIcon icon={faGlobe} className="text-primary h-8 p-4" />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Address text --> */}
                            <p class="mt-2 text-gray-700">
                                info@innovadorsolutions.com
                            </p>

                        </div>

                    </div>


                    <form onSubmit={handleContactUs}>
                        <h1 className='text-black font-bold text-4xl my-8'>Send Message : </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-4 gap-x-4 gap-y-4">
                            <div className="col-span-1">
                                <Input name='name' onChange={handleInput} placeholder='Name' />
                            </div>
                            <div className="col-span-1">
                                <Input name='email' onChange={handleInput} type='email' placeholder='Email' />
                            </div>
                        </div>
                        <Textarea placeholder='Message' className='mb-8' rows='5' />
                        <Button type='submit' className='w-full text-white font-bold text-lg py-6 hover:bg-black transition-all duration-500 relative overflow-hidden group'><p className="group-hover:hidden text-white">Send Message</p>
                            <span
                                className={`absolute inset-0 bg-black transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 `}
                            ></span>
                            <span className={`relative z-10`}>
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

                
                <div className="col-span-1 hidden lg:block">
                    <img src="/images/contact (1).jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default ContactUs
