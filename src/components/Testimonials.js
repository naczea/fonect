import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import React, { Component } from "react";
import googleIcon from "../img/googleIco.svg";
import ModalClient from "../components/ModalClient";
import { Data } from "../components/data";
import testimonial from "./../img/icons/testimonial.svg";
import { Slide, Zoom } from "react-reveal";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];
    this.state = {
      isModalOpen: false,
      data: [],
    };
  }

  onSelectClient = (index) => {
    const selecData = Data.filter((data) => data.id === index)[0];
    this.setState({
      isModalOpen: true,
      data: selecData,
    });
  };

  render() {
    return (
      <div id={this.props.id} className="testimonials">
        <Grid
          container
          justify="center"
          alignItems="center"
          className="testimonialHeader"
        >
          <h1 className="titleTestimonials">
            <Slide right>Sobre Nosotros</Slide>
          </h1>
          <Zoom bottom>
            <img
              src={testimonial}
              alt="testimonial"
              className="iconTestimonial"
            />
          </Zoom>
        </Grid>
        <Container>
          <Grid
            container
            justify="center"
            alignItems="center"
            className="testimonialConten"
          >
            <Carousel breakPoints={this.breakPoints}>
              {Data.map((data) => {
                return (
                  <Card
                    className="clientCard"
                    key={data.id}
                    onClick={() => this.onSelectClient(data.id)}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          className="colorAvatar"
                          alt={data.mark}
                          src={data.imgMark}
                        />
                      }
                      action={
                        <img
                          alt="google"
                          src={googleIcon}
                          width="15"
                          height="15"
                        />
                      }
                      title={data.title}
                      subheader={data.date}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="justify"
                      >
                        {data.testimonial}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Carousel>
          </Grid>
          <ModalClient
            isOpen={this.state.isModalOpen}
            isClose={() => this.setState({ isModalOpen: false })}
            data={this.state.data}
          />
        </Container>
      </div>
    );
  }
}

export default Testimonials;
