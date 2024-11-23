import React from 'react'
import CustomButton from './ui/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='px-16 py-8' style={{ backgroundImage: 'url(/images/bg-footer1.jpeg)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 md:gap-y-0">
                    <div className="col-span-1">
                        <Link to={'/'}>
                            <img src="http://innovador.solutions/wp-content/uploads/2024/06/logo.svg" alt="" />
                        </Link>
                        <p className='text-md my-4'>We are a mission-driven technology company committed to redefining the future of business. By seamlessly integrating cutting-edge technology with intuitive design, we streamline everyday tasks and boost efficiency. Our relentless passion for innovation fuels the creation of transformative solutions that not only empower businesses but also enhance the quality of life for all.</p>

                        <CustomButton goto={'/aboutus'} name={'About us'} size={'w-[170px]'} bg={'black'} color={'white'} layerbg={'primary'} />
                    </div>

                    <div className="col-span-1 mt-4 text-gray-500">
                        <h1 className='font-bold text-2xl text-black'>Official Info :</h1>

                        <p className='text-md my-4'><FontAwesomeIcon icon={faMapLocation} className='text-primary' />&nbsp; 111, Progressive Center, P.E.C.H.S Block 2 Block 6 PECHS, Karachi, Karachi City, Sindh 75400</p>
                        <p className='text-md my-4'><FontAwesomeIcon icon={faEnvelope} className='text-primary' /> &nbsp; info@innovador.solutions.com</p>
                        <p className='text-md my-4'><FontAwesomeIcon icon={faPhone} className='text-primary' /> &nbsp; +92 332 466 6823</p>

                        {/* <h1 className='font-bold text-lg text-black'>Links :</h1> */}
                        <p className='my-6 space-x-5'>
                            <a href="https://www.facebook.com/innovadors/" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} className='hover:text-primary' size="xl" />
                            </a>
                            <a href="https://pk.linkedin.com/company/innovadorsolutions" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className='hover:text-primary' size="xl" />
                            </a>
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-black text-center text-white py-3 '>
                2024 © Innovador Solutions. All rights reserved.
            </div>
        </>
    )
}

export default Footer