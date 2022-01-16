import React, { Component } from "react";
import DraweRoutes from "../components/DrawerRoutes";
import NavPhoneRouter from "../components/NavPhoneRouter";
import AppBar from "../components/AppBar";
import HeaderServices from "../components/HeaderServices";
import MainServices from "../components/MainServices";
import Footer from "../components/Footer";
import Tooltip2 from "../components/Tooltip2";
import SpaceResponsive from "../components/SpaceResponsive";

class Services extends Component {
  render() {
    return (
      <div className="headerCont">
        <DraweRoutes option={1} hash={this.props.location.hash} />
        <AppBar option={1} hash={this.props.location.hash} />
        <NavPhoneRouter />
        <MainServices />
        <Footer />
        <SpaceResponsive />
        <Tooltip2 />
      </div>
    );
  }
}

export default Services;
