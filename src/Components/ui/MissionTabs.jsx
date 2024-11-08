import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../tabs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faEye, faFlag } from '@fortawesome/free-solid-svg-icons'

const MissionTabs = () => {
    return (
        <>
            <Tabs defaultValue='Mission' className='w-[55%]'>
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <TabsList className='flex flex-col items-start bg-transparent'>
                            <TabsTrigger value='Mission' className='gap-x-4'>
                                <div className='rounded-full shadow bg-primary text-black py-4 px-6'>
                                    <FontAwesomeIcon icon={faFlag} />
                                </div>
                                Our Mission
                            </TabsTrigger>
                            <TabsTrigger value='Vision' className='gap-x-4'>
                                <div className='rounded-full shadow bg-primary text-black py-4 px-6'>
                                    <FontAwesomeIcon icon={faEye} />
                                </div>
                                Our Vision
                            </TabsTrigger>
                            <TabsTrigger value='Phiosophy' className='gap-x-4'>
                                <div className='rounded-full shadow bg-primary text-black py-4 px-6'>
                                    <FontAwesomeIcon icon={faBrain} />
                                </div>
                                Phiosophy
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="col-span-1">

                        <TabsContent value='Mission' className='tab-content'>
                            <div className="px-12 py-10 text-lg bg-white ">
                                Over more than 20 years, we’ve foste red trusted relationships across gover nment, industry and global forums. We adapt our delivery to the way your work, whether as an exter To provide consultancy for preparing of all sorts of corporate.
                            </div>
                        </TabsContent>

                        <TabsContent value='Vision' className='tab-content'>
                            <div className="px-12 py-10 text-lg bg-white ">
                                Forging relationships between multi to national corporations, governments and global NGOs begins with connections between people. Design studio founded in London and expanded our services, and become a multinational firm, offering services.
                            </div>
                        </TabsContent>

                        <TabsContent value='Phiosophy' className='tab-content'>
                            <div className="px-12 py-10 text-lg bg-white ">
                                Over more than 20 years, we’ve foste red trusted relationships across gover nment, industry and global forums. We adapt our delivery to the way your work, whether as an exter To provide consultancy for preparing of all sorts of corporate.
                            </div>
                        </TabsContent>
                    </div>
                </div>


                <style jsx>
                    {`
           @keyframes slide-up {
  0% {
    max-height: 0;
    opacity: 0;
    overflow: hidden; /* Ensure content is hidden */
  }
  100% {
    max-height: 500px; /* Adjust this value based on your content's height */
    opacity: 1;
    overflow: visible;
  }
}

.tab-content {
  animation: slide-up 0.5s ease-out forwards;
}

            `}

                </style>
            </Tabs>

            <div className="grid grid-cols-2 w-[55%] gap-x-6 mt-8">
                <div className="col-span-1">
                <h1 className='font-bold text-5xl'>Essential business<span className='text-primary'> skills.</span></h1>
                </div>

                <div className="col-span-1">
                    helmlkn
                </div>
            </div>

        </>


    )
}

export default MissionTabs
