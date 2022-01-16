import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Grid, Button } from "@material-ui/core";
import portafolio from "./../img/portafolio.svg";
import webcorp from "./../img/webcorp.svg";
import blogs from "./../img/blogs.svg";
class MainServices extends Component {
  render() {
    return (
      <div className="MainServices">
        <div className="titleMain">
          <h1>Te ayudamos a crecer en el mundo digital</h1>
        </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            className="contMain"
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              sm={4}
              className="textIllus"
            >
              <img
                src={webcorp}
                alt="Tienda virtual"
                className="img-fluid headerIllus1"
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              sm={4}
              className="textMain"
            >
              <h2>Telefonía IP</h2>
              <p>
              Podrás integrar, simplificar y organizar la telefonía de tu empresa utilizando Internet gracias a una serie de funcionalidades. Esta central se encuentra en la nube, por lo que no ocupa ni requiere espacio en las instalaciones de cada cliente.
              </p>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/services/tienda/#"
                className="btntime"
              >
                Nuestros planes
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            className="contMain"
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              sm={4}
              className="textIllus"
            >
              <img
                src={blogs}
                alt="Portafolio Web"
                className="img-fluid headerIllus1"
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              sm={4}
              className="textMain"
            >
              <h2>Home Office</h2>
              <p>
              El trabajo remoto es una nueva modalidad que permite cumplir tus funciones profesionales desde tu propia casa, contando con el equipo técnico necesario para ello y estando en comunicación directa y permanente con tu empresa.
              </p>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/services/portafolio/#"
                className="btntime"
                disabled
              >
                Nuestros planes
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            className="contMain"
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              sm={4}
              className="textIllus"
            >
              <img
                src={portafolio}
                alt="Web corporativa"
                className="img-fluid headerIllus1"
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              sm={4}
              className="textMain"
            >
              <h2>Consultoría</h2>
              <p>
              Te asesoramos sin costo en el planeamiento y la configuración de la Central Telefónica en la Nube para optimizar y eficientizar la atención telefónica.
              </p>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/services/corporativa/#"
                className="btntime"
                disabled
              >
                Nuestros planes
              </Button>
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default MainServices;
