import React from 'react'
import { SearchInput } from '../input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../button'
import { Link } from 'react-router-dom'

const SidebarBlogs = () => {
    return (
        <>
            <div className="my-16 lg:my-0 lg:pl-16">

                {/* search section */}
                <div className="mb-8">
                    <h1 className='font-bold text-2xl'>Search</h1>
                    <div className="blog-line"></div>
                </div>
                <SearchInput />

                {/* recent posts section */}
                <div className="my-8">
                    <div className="mb-8">
                        <h1 className='font-bold text-2xl'>Recent Posts</h1>
                        <div className="blog-line"></div>
                    </div>
                    <Link to={`/blog/${1}`} className="hover:text-primary space-x-2 hover:translate-x-4 transition-all duration-500 flex items-center group">
                    <FontAwesomeIcon icon={faCircle}  className='opacity-0 group-hover:opacity-100 text-primary group-hover:block transition-all duration-500'/>                        
                    <p className='text-lg my-6'>The Transformative Role of AI in Hospital Management</p>
                    </Link><hr />

                    <Link to={`/blog/${2}`} className="hover:text-primary space-x-2 hover:translate-x-4 transition-all duration-500 flex items-center group">
                    <FontAwesomeIcon icon={faCircle}  className='opacity-0 group-hover:opacity-100 text-primary group-hover:block transition-all duration-500'/>                        
                    <p className='text-lg my-6'>Navigating the AI Revolution: Jobs, Challenges, and Opportunities</p>
                    </Link><hr />

                    <Link to={`/blog/${3}`} className="hover:text-primary space-x-2 hover:translate-x-4 transition-all duration-500 flex items-center group">
                    <FontAwesomeIcon icon={faCircle}  className='opacity-0 group-hover:opacity-100 text-primary group-hover:block transition-all duration-500'/>                        
                    <p className='text-lg my-6'>The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy</p>
                    </Link><hr />

                    <Link to={`/blog/${4}`} className="hover:text-primary space-x-2 hover:translate-x-4 transition-all duration-500 flex items-center group">
                    <FontAwesomeIcon icon={faCircle}  className='opacity-0 group-hover:opacity-100 text-primary group-hover:block transition-all duration-500'/>                        
                    <p className='text-lg my-6'>Can AI Become Your Therapist?</p>
                    </Link><hr />
                </div>

                {/* categories section */}
                <div className="my-8">
                    <div className="mb-8">
                        <h1 className='font-bold text-2xl'>Categories</h1>
                        <div className="blog-line"></div>
                    </div>

                    <div className="flex items-center text-black my-4 group">
                        <div className='flex items-center group-hover:text-primary space-x-2 group-hover:translate-x-4 transition-all duration-500'>
                            <FontAwesomeIcon icon={faChevronRight} className='h-3' />
                            <p className='text-md font-bold'>
                                Mental Health
                            </p>
                        </div>
                        <p className='bg-secondary px-4 py-2 ml-auto'>3</p>
                    </div>
                    <hr />

                    <div className="flex items-center text-black my-4 group">
                        <div className='flex items-center group-hover:text-primary space-x-2 group-hover:translate-x-4 transition-all duration-500'>
                            <FontAwesomeIcon icon={faChevronRight} className='h-3' />
                            <p className='text-md font-bold'>
                                Technology
                            </p>
                        </div>
                        <p className='bg-secondary px-4 py-2 ml-auto'>3</p>
                    </div>
                    <hr />


                </div>

                {/* news section */}
                <div className="my-8">
                    <div className="mb-8">
                        <h1 className='font-bold text-2xl'>Recent News</h1>
                        <div className="blog-line"></div>
                    </div>

                    <Link to={`/blog/${1}`} className="flex space-x-4 my-6 group">
                        <img src="/images/blogs01.jpg" className='rounded-full w-[80px] h-[80px]' alt="" />
                        <div>
                            <h1 className='text-lg font-bold group-hover:text-primary transition-all duration-500'>The Transformative Role of AI [...]</h1>
                            <p className='text-gray-500'>October 8, 2024</p>
                        </div>
                    </Link>
                    <hr />

                    <Link to={`/blog/${2}`} className="flex space-x-4 my-6 group">
                        <img src="/images/blogs02.jpg" className='rounded-full w-[80px] h-[80px]' alt="" />
                        <div>
                            <h1 className='text-lg font-bold group-hover:text-primary transition-all duration-500'>Navigating the AI Revolution: Jobs, [...]</h1>
                            <p className='text-gray-500'>August 19, 2024</p>
                        </div>
                    </Link>
                    <hr />

                    <Link to={`/blog/${3}`} className="flex space-x-4 my-6 group">
                        <img src="/images/blogs03.jpg" className='rounded-full w-[80px] h-[80px]' alt="" />
                        <div>
                            <h1 className='text-lg font-bold group-hover:text-primary transition-all duration-500'>The Ethical Implications of Using [...]</h1>
                            <p className='text-gray-500'>July 5, 2024</p>
                        </div>
                    </Link>
                    <hr />
                    <hr />

                    

                </div>

                {/* archives section */}
                <div className="my-8">
                    <div className="mb-8">
                        <h1 className='font-bold text-2xl'>Archives</h1>
                        <div className="blog-line"></div>
                    </div>

                    <div className="flex items-center text-black my-4 group">
                        <div className='flex items-center group-hover:text-primary space-x-2 group-hover:translate-x-4 transition-all duration-500'>
                            <FontAwesomeIcon icon={faChevronRight} className='h-3' />
                            <p className='text-md font-bold'>
                                October 2024
                            </p>
                        </div>
                        <p className='bg-secondary px-4 py-2 ml-auto'>1</p>
                    </div>
                    <hr />

                    <div className="flex items-center text-black my-4 group">
                        <div className='flex items-center group-hover:text-primary space-x-2 group-hover:translate-x-4 transition-all duration-500'>
                            <FontAwesomeIcon icon={faChevronRight} className='h-3' />
                            <p className='text-md font-bold'>
                                August 2024
                            </p>
                        </div>
                        <p className='bg-secondary px-4 py-2 ml-auto'>1</p>
                    </div>
                    <hr />

                    <div className="flex items-center text-black my-4 group">
                        <div className='flex items-center group-hover:text-primary space-x-2 group-hover:translate-x-4 transition-all duration-500'>
                            <FontAwesomeIcon icon={faChevronRight} className='h-3' />
                            <p className='text-md font-bold'>
                                July 2024
                            </p>
                        </div>
                        <p className='bg-secondary px-4 py-2 ml-auto'>2</p>
                    </div>
                    <hr />


                </div>

                 {/* tags section */}
                 <div className="my-8">
                    <div className="mb-8">
                        <h1 className='font-bold text-2xl'>Tags</h1>
                        <div className="blog-line"></div>
                    </div>

                    <div className="col-span-1 lg:col-span-2 flex items-center space-x-4 my-6">
                        <div className="flex-auto space-x-2 space-y-2">
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>AI</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Challenges</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Diagnosis</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Ethical</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Jobs</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Mental Health Care</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Opportunities</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Psychology</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Revolution</Button>
                            <Button className='bg-transparent shadow-none border rounded-none text-black hover:bg-primary hover:text-white transition-all duration-500'>Therapy</Button>
                            
                        </div>
                    </div>
                    <hr />


                </div>
            </div>

            <style jsx>
                {`
                .blog-line {
                    width: 40px;             /* Adjust width as needed */
                    height: 3px;             /* Adjust height as needed */
                    background-color: #F79720; /* Yellow color */
                }
                `}
            </style>
        </>
    )
}

export default SidebarBlogs