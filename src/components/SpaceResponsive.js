import React, { Component } from "react";

class SpaceResponsive extends Component {
  render() {
    var space = 0;
    if (window.screen.width < 768) space = 55;
    return <div style={{ width: "100%", height: space }}></div>;
  }
}

export default SpaceResponsive;
