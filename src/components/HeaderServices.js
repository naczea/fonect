import React, { Component } from "react";
import IconCard from "./IconCard";
import { Icon } from "../components/data";

class HeaderServices extends Component {
  render() {
    return (
      <div className="HeaderServices">
        <div className="titleServices">
          <h1>Nuestros Servicios</h1>
        </div>
        <div className="iconsServices">
          {Icon.map((icon, i) => {
            return (
              <IconCard
                key={icon.title}
                title={icon.title}
                image={icon.image}
                description={icon.title}
                option={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HeaderServices;
