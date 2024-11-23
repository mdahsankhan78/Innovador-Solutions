import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const IndustryCards = () => {

  return (
    // <!-- component -->
    <section>

      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <Card
          shadow={false}
          className="relative grid h-[35rem] w-full items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('http://innovador.solutions/wp-content/uploads/2024/10/Gaming-scaled.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-8">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Gaming & Entertainment
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Our talented team is dedicated to crafting captivating and interactive experiences that transport users into immersive worlds. Whether on mobile devices, PCs, or consoles, we strive to push the boundaries of gameplay and storytelling, ensuring that each experience resonates deeply with players and keeps them engaged.
            </Typography>
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[35rem] w-full items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('http://innovador.solutions/wp-content/uploads/2024/10/Distribution-min-scaled.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-8">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
             Retail & Distribution
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >In the ever-evolving retail landscape, we focus on developing dynamic solutions that enhance operational efficiency and elevate customer satisfaction. By integrating advanced technologies, we help businesses streamline their processes, create seamless shopping experiences, and optimize their supply chain management, ultimately driving growth and improving profitability.
            </Typography>
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[35rem] w-full items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('http://innovador.solutions/wp-content/uploads/2024/10/Education-min-scaled.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-8">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
             Education  
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Harnessing the power of technology, we are committed to transforming the educational landscape. Our solutions are designed to enrich learning experiences by making them more engaging and accessible. Additionally, we work to simplify administrative processes, enabling educators and institutions to focus on what truly matters: fostering student success and improving educational outcomes.
            </Typography>
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[35rem] w-full items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('http://innovador.solutions/wp-content/uploads/2024/10/Healthcare-min-scaled.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-8">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
             Health Care
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >In the realm of healthcare, our mission is to elevate the standard of patient care through the development of advanced solutions. We address the complexities of healthcare administration by creating tools that simplify tasks for providers, enhance communication, and ultimately improve the quality of services delivered to patients. Our focus is on fostering better health outcomes and supporting healthcare professionals in their vital work.
            </Typography>
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[35rem] w-full items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('http://innovador.solutions/wp-content/uploads/2024/10/Finance-min-scaled.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-8">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
             Business & Finance
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
             competitive environment. Our solutions are designed to streamline financial processes, enhance data security, and drive overall business effectiveness. By leveraging cutting-edge technology, we empower organizations to navigate financial challenges with confidence and achieve sustainable growth.
            </Typography>
          </CardBody>
        </Card>


        <Card
          shadow={false}
          className="relative grid h-[35rem] w-full items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('http://innovador.solutions/wp-content/uploads/2024/10/Travel-min.png')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-8">
            <Typography
              variant="h3"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
             Travel & Hospitality
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              In the travel and hospitality sector, we deliver comprehensive solutions that cater to the unique needs of hotels and travel agencies. From intuitive booking systems to sophisticated travel planning applications, our tools are designed to enhance customer experiences and facilitate seamless interactions. We aim to empower businesses to build lasting relationships with their clients, making every journey memorable and hassle-free.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default IndustryCards;
