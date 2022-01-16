import React, { Component } from "react";
import Drawer from "../components/Drawer";
import NavPhone from "../components/NavPhone";
import Header from "../components/Header";
import Client from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Nosotros from "../components/Nosotros";
import Tooltip from "../components/Tooltip";

import { withRouter } from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <div className="headerCont">
        <Drawer className="drawer " />
        <NavPhone />
        <Header />
        <div className="divisor"></div>
        <Services id="servicios" />
        <Client id="clientes" />
        <Nosotros id="nosotros" />
        <div className="divisor"></div>
        <Contact id="contactos" />
        <Footer />
        <Tooltip />
      </div>
    );
  }
}

export default withRouter(Main);
