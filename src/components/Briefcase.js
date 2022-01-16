import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import ModalClient from "../components/ModalClient";
import { Data } from "../components/data";

class Briefcase extends Component {
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
      <div id={this.props.id} className="briefcase">
        <Grid
          container
          justify="center"
          alignItems="center"
          className="briefcaseHeader"
        >
          <h1 className="titleBriefcase">
              Nuestros Trabajos
          </h1>
        </Grid>
        <Container>
          <Grid
            container
            justify="center"
            alignItems="center"
            className="briefcaseConten"
          >
            <Carousel breakPoints={this.breakPoints}>
              {Data.map((data) => {
                return (
                  <Card
                    key={data.id}
                    onClick={() => this.onSelectClient(data.id)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className="cardMedia"
                        image={data.imgClient}
                        title={data.nameMark}
                        alt={data.nameMark}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {data.nameMark}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {data.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Carousel>
          </Grid>
        </Container>
        <ModalClient
          isOpen={this.state.isModalOpen}
          isClose={() => this.setState({ isModalOpen: false })}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Briefcase;
