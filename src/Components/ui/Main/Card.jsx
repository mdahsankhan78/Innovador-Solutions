import { cn } from "@/lib/utils";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

export function Card() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-8 xs:mx-16 mt-16 gap-x-6 gap-y-6 justify-items-center" data-aos='fade-in'>
                <div className="col-span-1">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-[260px] md:w-[300px] overflow-hidden relative card h-56 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4",
                                "bg-[url(/images/Services1.jpg)] bg-cover",
                                "transition-all duration-500",
                                
                            )} onClick={() => window.location.href = "#Services"}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="lg:flex items-center space-x-2">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative" id="head">
                                        Web Designing
                                    </h1>
                                    <h1 className="font-bold text-4xl md:text-6xl text-primary relative mt-auto">01</h1>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-full p-5">
                                <div className="text relative z-50">
                                    <div className="flex border-b-2 border-primary pb-2">
                                        <h1 className="font-bold text-lg md:text-2xl text-black relative">
                                            Web Designing
                                        </h1>

                                    </div>
                                    <p className="text-gray-600 mt-2">As a app web crawler expert, organizations adjust.</p>


                                    <div href="#Services" className="flex items-center justify-center mt-2 ">
                                        <div className="flex justify-center w-16 bg-primary border-b-2 py-5 rounded-full">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-[260px] md:w-[300px] overflow-hidden relative card h-56 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4   dark:border-neutral-800",
                                "bg-[url(/images/Services2.jpg)] bg-cover",
                                "transition-all duration-500"
                            )} onClick={() => window.location.href = "#Services"}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="lg:flex items-center space-x-2">
                                    <h1 className="font-bold dop-shadow-2xl text-xl md:text-2xl text-gray-50 relative" id="head">
                                        Web Development
                                    </h1>
                                    <h1 className="font-bold text-4xl md:text-6xl text-primary relative mt-auto">02</h1>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-full p-5">
                                <div className="text relative z-50">
                                    <div className="flex border-b-2 border-primary pb-2">
                                        <h1 className="font-bold text-lg md:text-2xl text-black relative">
                                            Web Development
                                        </h1>

                                    </div>
                                    <p className="text-gray-600 mt-2">As a app web crawler expert, organizations adjust.</p>

                                    <div href="#Services" className="flex items-center justify-center mt-2 ">
                                        <div className="flex justify-center w-16 bg-primary border-b-2 py-5 rounded-full">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-[260px] md:w-[300px] overflow-hidden relative card h-56 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4   dark:border-neutral-800",
                                "bg-[url(/images/Services3.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}onClick={() => window.location.href = "#Services"}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="lg:flex items-center space-x-2">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative" id="head">
                                        Mobile App Development
                                    </h1>
                                    <h1 className="font-bold text-4xl md:text-6xl text-primary relative">03</h1>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-full p-5">
                                <div className="text relative z-50">
                                    <div className="flex border-b-2 border-primary pb-2">
                                        <h1 className="font-bold text-lg md:text-2xl text-black relative">
                                        Mobile App Development
                                        </h1>

                                    </div>
                                    <p className="text-gray-600 mt-2">As a app web crawler expert, organizations adjust.</p>

                                    <div href="#Services" className="flex items-center justify-center mt-2 ">
                                        <div className="flex justify-center w-16 bg-primary border-b-2 py-5 rounded-full">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-[260px] md:w-[300px] overflow-hidden relative card h-56 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4   dark:border-neutral-800",
                                "bg-[url(/images/Services4.jpg)] bg-cover",
                                "transition-all duration-500"
                            )} onClick={() => window.location.href = "#Services"}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="lg:flex items-center space-x-2">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative" id="head">
                                        IT Consultancy
                                    </h1>
                                    <h1 className="font-bold text-4xl md:text-6xl text-primary relative">04</h1>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-full p-5">
                                <div className="text relative z-50">
                                    <div className="flex border-b-2 border-primary pb-2">
                                        <h1 className="font-bold text-lg md:text-2xl text-black relative">
                                        IT Consultancy
                                        </h1>

                                    </div>
                                    <p className="text-gray-600 mt-2">As a app web crawler expert, organizations adjust.</p>

                                    <div href="#Services" className="flex items-center justify-center mt-2 ">
                                        <div className="flex justify-center w-16 bg-primary border-b-2 py-5 rounded-full">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-[260px] md:w-[300px] overflow-hidden relative card h-56 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4",
                                "bg-[url(/images/Services5.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}
                            onClick={() => window.location.href = "#Services"}
                            >
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="lg:flex items-center space-x-2">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative" id="head">
                                        SaaS & Cloud Computing
                                    </h1>
                                    <h1 className="font-bold text-4xl md:text-6xl text-primary relative mt-auto">05</h1>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-full p-5">
                                <div className="text relative z-50">
                                    <div className="flex border-b-2 border-primary pb-2">
                                        <h1 className="font-bold text-lg md:text-2xl text-black relative">
                                        SaaS & Cloud Computing
                                        </h1>

                                    </div>
                                    <p className="text-gray-600 mt-2">As a app web crawler expert, organizations adjust.</p>

                                    <div href="#Services" className="flex items-center justify-center mt-2 ">
                                        <div className="flex justify-center w-16 bg-primary border-b-2 py-5 rounded-full">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-[260px] md:w-[300px] overflow-hidden relative card h-56 rounded-md shadow-3xl mx-auto flex flex-col justify-end p-4",
                                "bg-[url(/images/Services6.jpg)] bg-cover",
                                "transition-all duration-500"
                            )}
                            onClick={() => window.location.href = "#Services"}>
                            <div className="text relative z-50 group-hover:opacity-0 transition-all duration-500">
                                <div className="lg:flex items-center space-x-2">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative" id="head">
                                        Digital Marketing
                                    </h1>
                                    <h1 className="font-bold text-4xl md:text-6xl text-primary relative mt-auto">06</h1>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-full p-5">
                                <div className="text relative z-50">
                                    <div className="flex border-b-2 border-primary pb-2">
                                        <h1 className="font-bold text-lg md:text-2xl text-black relative">
                                        Digital Marketing
                                        </h1>

                                    </div>
                                    <p className="text-gray-600 mt-2">As a app web crawler expert, organizations adjust.</p>

                                    <div href="#Services" className="flex items-center justify-center mt-2 ">
                                        <div className="flex justify-center w-16 bg-primary border-b-2 py-5 rounded-full">
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                #head{
                text-shadow: 2px 2px 4px RGB(247 151 32)
                }
                `}
            </style>
        </>
    );
}
