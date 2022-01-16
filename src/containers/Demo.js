import React, { Component } from "react";
import DraweRoutes from "../components/DrawerRoutes";
import NavPhoneRouter from "../components/NavPhoneRouter";
import AppBar from "../components/AppBar";
import MainDemo from "../components/MainDemo";
import Footer from "../components/Footer";
import Tooltip2 from "../components/Tooltip2";
import SpaceResponsive from "../components/SpaceResponsive";

class Demo extends Component {
    render() {
        return (
            <div className="headerCont">
                <DraweRoutes option={3} hash={this.props.location.hash} />
                <AppBar option={3} hash={this.props.location.hash} />
                <NavPhoneRouter />
                <MainDemo />
                <Footer />
                <SpaceResponsive />
                <Tooltip2 />
            </div>
        );
    }
}

export default Demo;
