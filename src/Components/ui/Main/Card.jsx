import { cn } from "@/lib/utils";
import { faBullhorn, faCloud, faCode, faHeadset, faMobileAlt, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowDown } from "lucide-react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function ServicesCards1() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-8 xs:mx-8 sm:gap-x-6 gap-y-6 justify-items-center " >
                <Card className="mt-6  w-full bg-[url(/images/Services1.jpg)] bg-cover text-white">
                    <div class="absolute rounded-xl inset-0 bg-black/50"></div>
                    <CardBody className="z-10">
                        <FontAwesomeIcon className="text-primary h-12 mb-4" icon={faPaintBrush} />
                        <Typography variant="h5" className="mb-2">
                        UI / UX
                        </Typography>
                       <div className="flex ">
                       <Typography>
                        Crafting intuitive, cross-device web experiences.
                        </Typography>
                        <span className="text-4xl font-bold text-primary ml-auto">01</span>
                       </div>
                    </CardBody>
                    <CardFooter className="pt-0 z-10">
                        <a href="#Services" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-primary" // Set color to primary
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Button>

                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-full bg-[url(/images/Services2.jpg)] bg-cover text-white">
                    <div class="absolute rounded-xl inset-0 bg-black/50"></div>
                    <CardBody className="z-10">
                        <FontAwesomeIcon className="text-primary h-12 mb-4" icon={faCode} />
                        <Typography variant="h5" className="mb-2">
                        Web Development
                        </Typography>
                       <div className="flex ">
                       <Typography>
                       Building advanced, full-stack business applications.
                        </Typography>
                        <span className="text-4xl font-bold text-primary ml-auto">02</span>
                       </div>
                    </CardBody>
                    <CardFooter className="pt-0 z-10">
                        <a href="#Services" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-primary" // Set color to primary
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Button>

                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-full bg-[url(/images/Services3.jpg)] bg-cover text-white">
                    <div class="absolute rounded-xl inset-0 bg-black/50"></div>
                    <CardBody className="z-10">
                        <FontAwesomeIcon className="text-primary h-12 mb-4" icon={faMobileAlt} />
                        <Typography variant="h5" className="mb-2">
                        Mobile App Development
                        </Typography>
                       <div className="flex ">
                       <Typography>
                       Developing mobile apps for efficiency.
                        </Typography>
                        <span className="text-4xl font-bold text-primary ml-auto">03</span>
                       </div>
                    </CardBody>
                    <CardFooter className="pt-0 z-10">
                        <a href="#Services" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-primary" // Set color to primary
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Button>

                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-full bg-[url(/images/Services4.jpg)] bg-cover text-white">
                    <div class="absolute rounded-xl inset-0 bg-black/50"></div>
                    <CardBody className="z-10">
                        <FontAwesomeIcon className="text-primary h-12 mb-4" icon={faHeadset} />
                        <Typography variant="h5" className="mb-2">
                        IT Consultancy
                        </Typography>
                       <div className="flex ">
                       <Typography>
                       Driving results through IT expertise.
                        </Typography>
                        <span className="text-4xl font-bold text-primary ml-auto">04</span>
                       </div>
                    </CardBody>
                    <CardFooter className="pt-0 z-10">
                        <a href="#Services" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-primary" // Set color to primary
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Button>

                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-full bg-[url(/images/Services5.jpg)] bg-cover text-white">
                    <div class="absolute rounded-xl inset-0 bg-black/50"></div>
                    <CardBody className="z-10">
                        <FontAwesomeIcon className="text-primary h-12 mb-4" icon={faCloud} />
                        <Typography variant="h5" className="mb-2">
                        SaaS & Cloud Computing
                        </Typography>
                       <div className="flex ">
                       <Typography>
                       Affordable, scalable solutions without hardware.
                        </Typography>
                        <span className="text-4xl font-bold text-primary ml-auto">05</span>
                       </div>
                    </CardBody>
                    <CardFooter className="pt-0 z-10">
                        <a href="#Services" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-primary" // Set color to primary
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Button>

                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 w-full bg-[url(/images/Services6.jpg)] bg-cover text-white">
                    <div class="absolute rounded-xl inset-0 bg-black/50"></div>
                    <CardBody className="z-10">
                        <FontAwesomeIcon className="text-primary h-12 mb-4" icon={faBullhorn} />
                        <Typography variant="h5" className="mb-2">
                        Digital Marketing
                        </Typography>
                       <div className="flex ">
                       <Typography>
                       Broadening reach with digital techniques.
                        </Typography>
                        <span className="text-4xl font-bold text-primary ml-auto">06</span>
                       </div>
                    </CardBody>
                    <CardFooter className="pt-0 z-10">
                        <a href="#Services" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-primary" // Set color to primary
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Button>

                        </a>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
