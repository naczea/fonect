/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import VideoPlayer from "react-video-js-player";
import principal from "../img/vecthome2.svg";
import principal2 from "../img/3d/illusprincipal2.png";
import agency from "./../img/video/agency.mp4";
import poster from "./../img/video/p.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { ArrowDownward, LocationOn, Email, Phone } from "@material-ui/icons";
import logo from "../img/fonect2.svg";

class Header extends Component {

  render() {

    return (
      <div className="header">
        <div className="head__illus">
          <img src={principal} alt="ecommerce" className="img-fluid"></img>
        </div>
        <div className="head__text">
          <img
            src={logo}
            alt="fonect"
            className="img-fluid logocloud"
          />
          
              <h1>TELEFONIA IP </h1>
              <h2>EN CUALQUIER LUGAR DEL MUNDO</h2>
          
          <div className="text__video">
            <p>
              Reemplaza tu central telefónica con soluciones moderadas de movilidad y colaboración. Los usuarios de hoy en día requieren comunicarse desde cualquier dispositivo y locación de una manera interactiva. Implementa soluciones de comunicaciones unificadas incrementando la productividad y dinamismo de la empresa.  
            </p>
          </div>
          <Button
                variant="outlined"
                color="primary"
                disableElevation
                className="actions_btn"
                component={Link}
                to="/services"
              >
                <ArrowDownward
                  style={{
                    marginRight: "7px",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                />
                Leer más
              </Button>
        </div>
      </div>
    );
  }
}

export default Header;
