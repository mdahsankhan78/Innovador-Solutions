import React from 'react'
import { Card } from '../card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faComment, faComments, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../button'
import { Link } from 'react-router-dom'

const AllBlogsCards = () => {
    return (
        <>
            <Link to={`/blog/${1}`}>
                <Card className="card shadow-lg border rounded-md grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="col-span-1 relative overflow-hidden">
                        <img
                            src="/images/blogs01.jpg"
                            className="h-full w-full rounded-l-md transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:translate-x-4"
                        />
                    </div>
                    <div className="col-span-1 absolute left-4 top-4 flex flex-col">
                        <Button className="bg-primary font-bold shadow-xl text-white text-xl rounded-none">
                            08
                        </Button>
                        <Button className="bg-black shadow-xl text-white text-md rounded-none">
                            Oct 24
                        </Button>
                    </div>
                    <div className="p-6">
                        <h1 className="font-bold text-2xl sm:hidden md:block lg:hidden blogcard:block transition-all duration-500 hover:text-primary-foreground">
                            The Transformative Role of AI in Hospital Management
                        </h1>
                        <h1 className="font-bold text-2xl hidden sm:block md:hidden lg:block blogcard:hidden transition-all duration-500 hover:text-primary-foreground">
                            The Transformative Role of AI in [...]
                        </h1>
                        <div className="flex items-center space-x-2 text-md text-gray-600 my-2">
                            <FontAwesomeIcon icon={faUser} />
                            <p>Iqbal Y. Shaikh</p>
                            <FontAwesomeIcon icon={faComments} />
                            <p>Comments : 0</p>
                        </div>
                        <p className="my-4 text-primary-foreground sm:hidden md:block lg:hidden blogcard:block">
                            In recent years, artificial intelligence (AI) has emerged as a groundbreaking force in various industries, [...]
                        </p>
                        <p className="my-4 text-primary-foreground sm:block md:hidden hidden lg:block blogcard:hidden">
                            In recent years, artificial intelligence (AI) has emerged [...]
                        </p>

                        <div className="my-4 flex items-center space-x-2 hover:text-primary transition-all duration-500">
                            <FontAwesomeIcon className="h-3" icon={faChevronRight} />
                            <p className="font-bold underline">Read More</p>
                        </div>
                    </div>
                </Card>
            </Link>

            <Link to={`/blog/${2}`}>
            <Card className="card shadow-lg border rounded-md grid grid-cols-1 md:grid-cols-2 relative">
                <div className="relative overflow-hidden">
                    <img
                        src="/images/blogs02.jpg"
                        className="h-full w-full rounded-l-md transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:translate-x-4"
                    />
                </div>
                <div className="absolute left-4 top-4 flex flex-col">
                    <Button className="bg-primary font-bold shadow-xl text-white text-xl rounded-none">
                        19
                    </Button>
                    <Button className="bg-black shadow-xl text-white text-md rounded-none">
                        August 24
                    </Button>
                </div>
                <div className="p-6">
                    <h1 className="font-bold text-2xl sm:hidden md:block lg:hidden blogcard:block transition-all duration-500 hover:text-primary-foreground">
                        Navigating the AI Revolution: Jobs, Challenges, and Opportunities
                    </h1>
                    <h1 className="font-bold text-2xl hidden sm:block md:hidden lg:block blogcard:hidden transition-all duration-500 hover:text-primary-foreground">
                        Navigating the AI Revolution: Jobs [...]
                    </h1>
                    <div className="flex items-center space-x-2 text-md text-gray-600 my-2">
                        <FontAwesomeIcon icon={faUser} />
                        <p>Iqbal Y. Shaikh</p>
                        <FontAwesomeIcon icon={faComments} />
                        <p>Comments : 0</p>
                    </div>
                    <p className="my-4 text-primary-foreground sm:hidden md:block lg:hidden blogcard:block">
                        Artificial intelligence has transformed industries, revolutionizing how we work, communicate, and live. As we embrace  [...]
                    </p>
                    <p className="my-4 text-primary-foreground sm:block md:hidden hidden lg:block blogcard:hidden">
                        Artificial intelligence has transformed industries, [...]
                    </p>

                    <div className="my-4 flex items-center space-x-2 hover:text-primary transition-all duration-500">
                        <FontAwesomeIcon className="h-3" icon={faChevronRight} />
                        <p className="font-bold underline">Read More</p>
                    </div>
                </div>
            </Card>
            </Link>

            <Link to={`/blog/${3}`}>
            <Card className="card shadow-lg border rounded-md grid grid-cols-1 md:grid-cols-2 relative">
                <div className="relative overflow-hidden">
                    <img
                        src="/images/blogs03.jpg"
                        className="h-full w-full rounded-l-md transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:translate-x-4"
                    />
                </div>
                <div className="absolute left-4 top-4 flex flex-col">
                    <Button className="bg-primary font-bold shadow-xl text-white text-xl rounded-none">
                        05
                    </Button>
                    <Button className="bg-black shadow-xl text-white text-md rounded-none">
                        July 24
                    </Button>
                </div>
                <div className="p-6">
                    <h1 className="font-bold text-2xl sm:hidden md:block lg:hidden blogcard:block transition-all duration-500 hover:text-primary-foreground">
                        The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy
                    </h1>
                    <h1 className="font-bold text-2xl hidden sm:block md:hidden lg:block blogcard:hidden transition-all duration-500 hover:text-primary-foreground">
                        The Ethical Implications of Using AI [...]
                    </h1>
                    <div className="flex items-center space-x-2 text-md text-gray-600 my-2">
                        <FontAwesomeIcon icon={faUser} />
                        <p>Aemah Iqbal</p>
                        <FontAwesomeIcon icon={faComments} />
                        <p>Comments : 2</p>
                    </div>
                    <p className="my-4 text-primary-foreground sm:hidden md:block lg:hidden blogcard:block">
                        Introduction In recent years, artificial intelligence (AI) advancements have begun to revolutionize various fields, [...]
                    </p>
                    <p className="my-4 text-primary-foreground sm:block md:hidden hidden lg:block blogcard:hidden">
                        Introduction In recent years, artificial intelligence (AI) [...]
                    </p>

                    <div className="my-4 flex items-center space-x-2 hover:text-primary transition-all duration-500">
                        <FontAwesomeIcon className="h-3" icon={faChevronRight} />
                        <p className="font-bold underline">Read More</p>
                    </div>
                </div>
            </Card>
            </Link>

            <Link to={`/blog/${4}`}>
            <Card className="card shadow-lg border rounded-md grid grid-cols-1 md:grid-cols-2 relative">
                <div className="relative overflow-hidden">
                    <img
                        src="/images/blogs04.jpg"
                        className="h-full w-full rounded-l-md transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:translate-x-4"
                    />
                </div>
                <div className="absolute left-4 top-4 flex flex-col">
                    <Button className="bg-primary font-bold shadow-xl text-white text-xl rounded-none">
                        04
                    </Button>
                    <Button className="bg-black shadow-xl text-white text-md rounded-none">
                        July 24
                    </Button>
                </div>
                <div className="p-6">
                    <h1 className="font-bold text-2xl sm:hidden md:block lg:hidden blogcard:block transition-all duration-500 hover:text-primary-foreground">
                        Can AI Become Your Therapist?
                    </h1>
                    <h1 className="font-bold text-2xl hidden sm:block md:hidden lg:block blogcard:hidden transition-all duration-500 hover:text-primary-foreground">
                        Can AI Become Your Therapist?
                    </h1>
                    <div className="flex items-center space-x-2 text-md text-gray-600 my-2">
                        <FontAwesomeIcon icon={faUser} />
                        <p>Iqbal Y. Shaikh</p>
                        <FontAwesomeIcon icon={faComments} />
                        <p>Comments : 0</p>
                    </div>
                    <p className="my-4 text-primary-foreground sm:hidden md:block lg:hidden blogcard:block">
                        In recent years, advancements in artificial intelligence (AI) have begun to revolutionize various fields,[...]
                    </p>
                    <p className="my-4 text-primary-foreground sm:block md:hidden hidden lg:block blogcard:hidden">
                        In recent years, advancements in artificial intelligence (AI) [...]
                    </p>

                    <div className="my-4 flex items-center space-x-2 hover:text-primary transition-all duration-500">
                        <FontAwesomeIcon className="h-3" icon={faChevronRight} />
                        <p className="font-bold underline">Read More</p>
                    </div>
                </div>
            </Card>
            </Link>

        </>
    )
}

export default AllBlogsCards