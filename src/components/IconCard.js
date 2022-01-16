import React from "react";
import { Zoom } from "react-reveal";

const IconCard = ({ title, image, description, option }) => {
  return (
    <div className="iconCard">
      <Zoom bottom>
        <img src={image} alt={description} className="img-fluid"></img>
        <h2>{title}</h2>
      </Zoom>
    </div>
  );
};

export default IconCard;
