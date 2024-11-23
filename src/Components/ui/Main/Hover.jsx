import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card"; // Assuming you have the same UI components in React

const Hover = ({ src }) => {
  return (
    <CardContainer
      className="inter-var"
      style={{
        backgroundImage: `url(/images/${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </CardContainer>
  );
};

export default Hover;
