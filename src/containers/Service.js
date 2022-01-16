import React, { Component } from "react";
import DraweRoutes from "../components/DrawerRoutes";
import NavPhoneRouter from "../components/NavPhoneRouter";
import AppBar from "../components/AppBar";
import { Services } from "../components/data";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import Tooltip2 from "../components/Tooltip2";
import SpaceResponsive from "../components/SpaceResponsive";

class Service extends Component {
  getDataPlans = () => {
    const hash = Services.filter(
      (data) => data.hash === this.props.match.params.name
    )[0];
    return hash ? hash : null;
  };
  render() {
    const hash = this.getDataPlans().hash;
    return (
      <div className="headerCont">
        <DraweRoutes option={1} hash={hash} />
        <AppBar option={1} hash={hash} />
        <NavPhoneRouter />
        <Plans
          name={this.getDataPlans().name}
          description={this.getDataPlans().description}
          tiers={this.getDataPlans().tiers}
        />
        <Footer />
        <SpaceResponsive />
        <Tooltip2 />
      </div>
    );
  }
}

export default Service;
