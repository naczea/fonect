import React, { Component } from "react";
import DraweRoutes from "../components/DrawerRoutes";
import Briefcase from "../components/Briefcase";
import Mark from "../components/Mark";
import Testimonials from "../components/Testimonials";
import NavPhoneRouter from "../components/NavPhoneRouter";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Tooltip2 from "../components/Tooltip2";
import SpaceResponsive from "../components/SpaceResponsive";

class Clients extends Component {
  render() {
    return (
      <div className="headerCont">
        <DraweRoutes option={2} hash={this.props.location.hash} />
        <AppBar option={2} hash={this.props.location.hash} />
        <NavPhoneRouter />
        <Briefcase id="briefcase" />
        <Mark id="mark" />
        <Testimonials id="testimonials" />
        <Footer />
        <SpaceResponsive />
        <Tooltip2 />
      </div>
    );
  }
}

export default Clients;
