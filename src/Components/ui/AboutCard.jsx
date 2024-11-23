import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"; // Assuming you have the same UI components in React
// import { Link } from "react-router-dom"; // React Router for navigation (instead of Next.js Link)
// import Image from "about1png"; // Use any image package like 'react-image' or standard <img> tag

const AboutCard = ({src}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card w-[20rem] sm:w-[30rem] h-auto">
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`/images/${src}`}
            height="100"
            width="100"
            className="h-[35rem] w-full object-cover"
            alt="thumbnail"
          />
        </CardItem> 
      </CardBody>
    </CardContainer>
  );
}
export default AboutCard