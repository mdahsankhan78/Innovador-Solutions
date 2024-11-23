import React from 'react'
import CustomButton from './ui/CustomButton'

const PreFooter = () => {
  return (
    <div className='md:mx-[150px] mx-16 mb-16 bg-cover rounded-lg px-16 px-8 xs:px-[80px] py-16 border-b-8 border-primary mt-[150px]' style={{backgroundImage:'url(/images/counter.jpeg)'}}>
        <h1 className='text-white text-center text-3xl md:text-4xl font-bold'>Get started to make easy!</h1>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
        <CustomButton goto={'/contactus'} name={'Contact us'} bg={'black'}  border={'black'} color={'white'} size={'w-[190px]'} layerbg={'primary'}/>   
        <CustomButton goto={'/aboutus'} name={'About us'} bg={'primary'}  border={'primary'} color={'white'} size={'w-[180px]'} layerbg={'black'}/>   
        </div>
    </div>
  )
}

export default PreFooter