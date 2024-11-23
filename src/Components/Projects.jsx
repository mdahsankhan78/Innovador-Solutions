import React from 'react'
import ProjectCarousel from './ui/Projects/ProjectCarousel'

const Projects = () => {
    return (
        <div className='mx-8 xs:mx-16 my-16' id='Products'>
            <div className="flex space-x-4" data-aos='fade-up'>
                
            <div className="custom-line"></div>
            <h1 className='font-extrabold text-xl mt-2' >Products</h1>   
            </div>
            <h1 className='font-bold text-5xl' data-aos='fade-up'>Products we<span className='text-primary'> developed</span></h1>


            {/* <ProjectsCarousel /> */}
            <ProjectCarousel/>


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

export default Projects