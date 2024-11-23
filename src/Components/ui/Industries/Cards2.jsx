import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Cards2 = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-y-4 gap-x-4">
                <Card color="gray" variant="gradient" className="w-full p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="medium"
                            color="white"
                            className="font-normal uppercase"
                        >
                            Gather Customer Requirement Specifications
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0 text-center">
                        <p>We conduct productive sessions and workshops with clients to have a crystal-clear understanding of their requirements. Effective communication leads to tailored and precise documentation (software requirement specification), exploring the core business and significant product information.
                        </p>
                    </CardBody>
                </Card>

                <Card color="gray" variant="gradient" className="w-full p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="medium"
                            color="white"
                            className="font-normal uppercase"
                        >
                           Tailored Solutions to Meet Business Objectives
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0 text-center">
                        <p>Upon finalizing the SRS, we propose tailored solutions that align with your business objectives. Our expert team crafts innovative strategies, ensuring feasibility and efficiency.
                        </p>
                    </CardBody>
                </Card>

                <Card color="gray" variant="gradient" className="w-full p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="medium"
                            color="white"
                            className="font-normal uppercase"
                        >
                            Implementing the Soltions Through a Robust Plan
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0 text-center">
                        <p>We implement solutions through a robust plan and strategy, emphasizing seamless execution and quality assurance. Our approach includes detailed timelines, resource allocation, risk management, and continuous monitoring. We ensure alignment with the SRS, delivering reliable, scalable, and efficient software that meets all specified requirements.
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Cards2