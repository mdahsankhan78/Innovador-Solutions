import React from 'react'
import { Blog1, Blog2, Blog3, Blog4 } from './Components/ui/Blogs/Blog'
import PreFooter from './Components/PreFooter'
import SidebarBlogs from './Components/ui/Blogs/SidebarBlogs'
import { useParams } from 'react-router-dom'

const Blogs = () => {
    const { blog } = useParams();
    return (
        <>
            <div>
                <title>{blog == 1 ? (
                    'The Transformative Role of AI in Hospital Management'
                ) : blog == 2 ? ('Navigating the AI Revolution: Jobs, Challenges, and Opportunities') : blog == 3 ? ('The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy') : blog == 4 && ('Can AI Become Your Therapist?')} - Innovador Solutions</title>
                <div className="relative md:-top-24 inset-0 z-0 bg-cover bg-center h-[30rem] flex items-center justify-center" style={{ backgroundImage: 'url(/images/bg-services.jpeg)' }}>
                    <div className="bg-black opacity-70 z-1 inset-0 absolute"></div>

                    <div className='z-30'>
                        <h1 className='font-bold text-white text-5xl text-center lg:px-40'>
                            {blog == 1 ? (
                                'The Transformative Role of AI in Hospital Management'
                            ) : blog == 2 ? ('Navigating the AI Revolution: Jobs, Challenges, and Opportunities') : blog == 3 ? ('The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy') : blog == 4 && ('Can AI Become Your Therapist?')}

                        </h1>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-16 my-32 md:my-0">
                    <div className="col-span-1 md:col-span-2">
                        {blog == 1 ? (<Blog1 />) : blog == 2 ? (<Blog2 />) : blog == 3 ? (<Blog3 />) : blog == 4 && (<Blog4 />)}
                    </div>
                    <div className="col-span-1">
                        <SidebarBlogs />
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
            </div>
        </>
    )
}

export default Blogs