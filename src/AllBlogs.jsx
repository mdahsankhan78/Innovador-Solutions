import React from 'react'
import PreFooter from './Components/PreFooter'
import AllBlogsCards from './Components/ui/Blogs/AllBlogsCards'
import SidebarBlogs from './Components/ui/Blogs/SidebarBlogs'
import { Link } from 'react-router-dom'

const AllBlogs = () => {
    return (
        <>
            <title>Latest industry trends and update - Innovador Solutions Blog</title>
            <div className="relative md:-top-24 inset-0 z-0 bg-cover bg-center h-[30rem] flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg-services.jpeg)' }}>
                <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

                <div className='z-30 space-y-4'>
                    <h1 className='font-bold text-white text-5xl'>Blogs</h1>
                    <p className='text-white text-lg text-center'><Link to={'/'} className='hover:text-primary transition-all'>Home</Link> - Blogs</p>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-16 gap-x-8 my-32 md:my-0">
                <div className="col-span-1 lg:col-span-2 space-y-12 flex flex-col">
                    <AllBlogsCards/>
                </div>
                <div className="col-span-1">
                    <SidebarBlogs/>
                </div>
            </div>

            <PreFooter />

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
        </>
    )
}

export default AllBlogs