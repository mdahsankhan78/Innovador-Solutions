import React from 'react'
import ServicesCards from '../Services/ServicesCards'
import CustomButton from '../CustomButton'
import AboutServices from './AboutServices'

const StickyServices = () => {
    return (
        <section>
            <div class="px-8 md:px-16">
                <div class="grid grid-cols-1 md:grid-cols-2 items-start lg:flex-row lg:gap-x-10">
                    <div class="flex flex-col w-full sticky lg:top-36 mt-2 lg:mt-12">
                        <div className="flex space-x-4" >
                            <div className="custom-line"></div>
                            <h1 className='font-extrabold text-xl mt-2'>Services</h1> {/* Added margin-top to separate the text */}

                        </div>
                        <h1 className='font-bold text-5xl'>We provide the<span className='text-primary'> best services.</span></h1>
                        <p className='py-12 text-lg'>Consultio is a design studio founded in London and expanded our services, and become.</p>
                        <CustomButton goto={'/services'} name={'Services'} size={'w-[170px]'} bg={'black'} color={'white'} layerbg={'primary'} />
                    </div>
                    <div class="lg:w-full sticky">
                        <ServicesCards />
                    </div>
                </div>
            </div>
            <div className="mx-8 md:mx-16 my-16">
            <AboutServices />
            </div>
        </section>
    )
}

export default StickyServices