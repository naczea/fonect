import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Modal from "react-bootstrap/Modal";

export default function SpringModal(props) {
  const { data } = props;
  return (
    <Modal
      show={props.isOpen}
      onHide={props.isClose}
      centered
      size="lg"
      style={{ zIndex: 1200 }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <p>{data.description}</p>
            <Grid
              item
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <img
                src={data.imgMark}
                alt="imgMark"
                className="img-fluid"
                width="100"
                height="100"
              />
              <p style={{ marginLeft: "15px" }}>{data.nameMark}</p>
            </Grid>
            <p>{data.testimonial}</p>
            <p style={{ opacity: 0.8 }}>{data.date}</p>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Calificación</Typography>
              <Rating name="read-only" value={data.calification} readOnly />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={data.imgClient} alt="imgClient" className="img-fluid" />
          </Grid>
        </Grid>
      </Modal.Body>
    </Modal>
  );
}
