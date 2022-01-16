import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { ParallaxHover } from "react-parallax-hover";
import { Data } from "../components/data";
import illusClientsMarks from "./../img/illusClientsMarks.svg";
import marks from "./../img/icons/mark.svg";
import { Slide, Zoom } from "react-reveal";

class Mark extends Component {
  render() {
    return (
      <div id={this.props.id} className="marks">
        <Grid
          container
          justify="center"
          alignItems="center"
          className="marksHeader"
        >
          <h1 className="titleMarks">
            <Slide left>Trabajamos con</Slide>
          </h1>
            <img src={marks} alt="marks" className="iconMarks" />
        </Grid>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="marksConten"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              {Data.map((data) => {
                return (
                  <div key={data.id} style={{ cursor: "pointer" }}>
                    <ParallaxHover
                      width={150}
                      height={150}
                      className="parallaxHover"
                    >
                      <img
                        src={data.imgMark150}
                        alt={data.nameMark}
                        className="img-fluid"
                      />
                    </ParallaxHover>
                  </div>
                );
              })}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              container
              justify="center"
              alignItems="center"
            >
                <img
                  src={illusClientsMarks}
                  alt="illusClientsMarks"
                  className="img-fluid"
                />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Mark;
