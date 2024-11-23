import React from 'react'
import ServicesCards from './ServicesCards'
import CustomButton from '../CustomButton'

const Sticky = () => {
    return (
        // <!-- component -->
        <section>
            <div class="px-8 md:px-16">
                <div class="flex flex-col items-start lg:flex-row my-12 lg:my-24 lg:gap-x-10">
                    <div class="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-12">
                    <div className="flex space-x-4" >
                        <div className="custom-line"></div>
                        <h1 className='font-extrabold text-xl mt-2'>Services</h1> {/* Added margin-top to separate the text */}

                    </div>
                    <h1 className='font-bold text-5xl'>We provide the<span className='text-primary'> best services.</span></h1>
                    <p className='py-12 text-lg'>Consultio is a design studio founded in London and expanded our services, and become.</p>
                    <CustomButton goto={'/services'} name={'Services'} size={'w-[170px]'} bg={'black'} color={'white'} layerbg={'primary'} />
                    </div>
                    <div class="lg:w-full sticky">
                        <ServicesCards/>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default Sticky