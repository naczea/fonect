import {
  Button,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { HashLink as Link } from "react-router-hash-link";
import googleIcon from "../img/googleIco.svg";
import { Data } from "../components/data";

class Clients extends Component {
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
  }
  render() {

    return (
      <div id={this.props.id} className="clients">
        <div className="clientsbox">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} className="clientsHeader">
            <h1>Nuestros Clientes</h1>
          </Grid>
          <Grid
            item
            xs={12}
            className="clientContent"
            container
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              className="clientContentCarousel"
              container
              justify="center"
              alignItems="center"
            >
              {Data.map((data) => {
                return data.id <= 3 ? (
                  <Grid item xs={12} sm={4} key={data.id}>
                    <Card className="clientCard" key={data.id}>
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
                  </Grid>
                ) : null;
              })}
              <Carousel breakPoints={this.breakPoints} className="carousel">
                {Data.map((data) => {
                  return (
                    <Card key={data.id}>
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
            <Grid
              item
              xs={12}
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="clientContentButtons"
            >
            </Grid>
          </Grid>
        </Grid>
        </div>
      </div>
    );
  }
}

export default Clients;
