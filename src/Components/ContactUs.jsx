import { faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from "./ui/textarea"
import { Input } from "@/components/ui/input"
import React from 'react'
import CustomButton from './ui/CustomButton'

const ContactUs = () => {
    return (
        <div className='mx-8 xs:mx-16 my-32' id='Contact'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 lg:gap-y-0">
                <div className="col-span-1">

                    <div className="space-y-6">
                        <div className='flex space-x-4 items-center'>
                            <div className="p-4 border-l-4 border-primary w-20">
                                <FontAwesomeIcon icon={faEnvelope} className='text-primary h-8' />

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>Our Mailbox :</h1>
                            <p className='mt-2 text-gray-600 text-md'>info@innovador.solutions</p>  
                            </div>
                        </div>

                        <div className='flex space-x-4 items-center items-center'>
                            <div className="border-l-4 border-primary p-4">
                                <img src="/images/contact2.png" alt="" className='h-[40px] w-[60px]'/>

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>KARACHI</h1>
                            <p className='mt-2 text-gray-600 text-md'>111, Progressive Center, P.E.C.H.S Block 2 Block 6 PECHS, Karachi, Karachi City, Sindh 75400
                            +92 332 466 6823</p>  
                            </div>
                        </div>

                        <div className='flex space-x-4 items-center'>
                            <div className="p-4 border-l-4 border-primary ">
                                <img src="/images/contact3.png" alt=""  className='h-[40px] w-[60px]'/>

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>HYDERABAD</h1>
                            <p className='mt-2 text-gray-600 text-md'>Anum Center, 1st Floor, Defence Commercial Area, Defence Housing Society, Hyderabad, Sindh, Pakistan 71000
                            +92 332 466 6823</p>  
                            </div>
                        </div>

                        <div className='flex space-x-4 items-center'>
                            <div className="p-4 border-l-4 border-primary">
                                <img src="/images/contact4.png" alt="" className='h-[40px] w-[60px]'/>

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>LAHORE</h1>
                            <p className='mt-2 text-gray-600 text-md'>2nd Floor, Commercial Plaza Near Allah-U-Chowkm Khayaban-e-Firdousi, Block E Phase 1 Johar Town, Lahore, Pakistan
                            +92 332 466 6823</p>  
                            </div>
                        </div>

                        <div className='flex space-x-4 items-center'>
                            <div className="p-4 border-l-4 border-primary">
                                <img src="/images/contact5.png" alt="" className='h-[40px] w-[40px]'/>

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>CANADA</h1>
                            <p className='mt-2 text-gray-600 text-md'>3050-160 ERIN Center BLV MISSISSAUGA L5M OP5
                            +1 289 547 2576</p>  
                            </div>
                        </div>

                        <div className='flex space-x-4 items-center'>
                            <div className="p-4 border-l-4 border-primary">
                                <img src="/images/contact6.png" alt=""  className='h-[40px] w-[40px]'/>

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>USA</h1>
                            <p className='mt-2 text-gray-600 text-md'>1000 John R RD, ST 602, Troy 48083
                            +1 517 366 1928</p>  
                            </div>
                        </div>

                        <div className='flex space-x-4 items-center'>
                            <div className="p-4 border-l-4 border-primary">
                                <img src="/images/contact7.png" alt="" className='h-[40px] w-[40px]'/>

                            </div>
                            <div>
                            <h1 className='text-xl font-bold'>QATAR</h1>
                            <p className='mt-2 text-gray-600 text-md'>+97 430 074 923</p>  
                            </div>
                        </div>

                     

                        

                    </div>
                </div>

                <div className="col-span-1">


                    <div>
                        <h1 className='text-black font-bold text-4xl'>Send Message : </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-4 gap-x-4 gap-y-4">
                            <div className="col-span-1">
                                <Input placeholder='Name' />
                            </div>
                            <div className="col-span-1">
                                <Input placeholder='Email' />
                            </div>
                        </div>
                        <Textarea placeholder='Message' className='mb-8' rows='5' />
                        <CustomButton name={'Send Message'} color={'white'} bg={'black'} layerbg={'primary'} size={'w-[230px]'} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContactUs
