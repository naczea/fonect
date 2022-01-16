/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import portafolio2 from "../img/icons2.svg";
import ecommerce from "../img/icons.svg";
import marketing from "../img/icons3.svg";
import { Grid, Button } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <div className="services" id={this.props.id}>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className="serviceIllus">
            <h1>
              Servicios
            </h1>
          </div>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          className="serviceSlider"
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            sm={4}
            xs={12}
            className="p-5 serviceCont"
            data-aos="fade-up-right"
            data-aos-duration="900"
          >
            <Fade left>
              <img
                src={ecommerce}
                alt="ecommerce"
                className="img-fluid imgService"
                onClick={() => window.location.assign("/services/tienda")}
              />
              <h2>Central IP en la nube</h2>
              <p>
              Podrás integrar, simplificar y organizar la telefonía de tu empresa utilizando Internet gracias a una serie de funcionalidades. Esta central se encuentra en la nube, por lo que no ocupa ni requiere espacio en las instalaciones de cada cliente.
              </p>
              </Fade>
          </Grid>
          
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            sm={4}
            xs={12}
            className="p-5 serviceCont"
            data-aos="fade-up-right"
            data-aos-duration="900"
          >
            <Fade left>
              <img
                src={portafolio2}
                alt="portafolio web"
                className="img-fluid  imgService"
                onClick={() => window.location.assign("/services/portafolio")}
              ></img>
              <h2>Home Office</h2>
              <p>
              El trabajo remoto es una nueva modalidad que permite cumplir tus funciones profesionales desde tu propia casa, contando con el equipo técnico necesario para ello y estando en comunicación directa y permanente con tu empresa.
              </p>
              </Fade>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            sm={4}
            xs={12}
            className="p-5 serviceCont"
            data-aos="fade-up-right"
            data-aos-duration="900"
          >
            <Fade left>
              <img
                src={marketing}
                alt="Marketing digital"
                className="img-fluid  imgService"
                onClick={() => window.location.assign("/services/marketing")}
              ></img>
              <h2>Servicio de consultoría</h2>
              <p>
              Te asesoramos sin costo en el planeamiento y la configuración de la Central Telefónica en la Nube para optimizar y eficientizar la atención telefónica.
              </p>
              </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="serviceButton"
        >
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            component={Link}
            to="/services/#"
            className="btntime"
          >
            Conoce más
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Header;
