import React, { Component } from "react";
import { Grid, Zoom } from "@material-ui/core";
import team from "../img/nosotros.svg";
import Zoom2 from "react-reveal/Zoom";
import { Button } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { CloudDownload } from "@material-ui/icons";
import ModalLogin from './ModalLogin';

//const [open, ]
export default function Nosotros () {

    const [openModal, setOpenModal] = React.useState(false);

    const openForm = () => {
      setOpenModal((prev) => !prev);
    }
    
    return (
      <div className="nosotros" id="nosotros">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          style={{ height: "100vh" }}
          className="nosCont"
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
            sm={7}
            className="nosIllus"
          >
            <Zoom2>
              <img src={team} alt="workteam" className="img-fluid"></img>
            </Zoom2>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
            sm={5}
            className="nosText"
          >
              <h1 id="h1nosotros">Prueba nuestra demo</h1>
              <p>
                En FONECT queremos ganarnos tu confianza. Por ende, te ofrecemos una prueba totalmente GRATIS de nuestro servicio de telefonía IP. Pulsando el botón de abajo podrás descargar nuestra demo y comprobar la calidad de nuestras llamadas.  
              </p>
              <Button
                variant="outlined"
                color="primary"
                disableElevation
                className="btntime"
                onClick={() => openForm()}
              >
                <CloudDownload
                  style={{
                    marginRight: "7px",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                />
                probar
              </Button>
          </Grid>
        </Grid>
        <ModalLogin isOpen={openModal}/>
      </div>
    );
  }
