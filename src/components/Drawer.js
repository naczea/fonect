/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import logo5 from "../img/cloud.svg";

const drawerWidth = 150;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "white",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [stateIndex, setStateIndex] = React.useState(0);
  const handleDrawerSelect = (index) => {
    setStateIndex(index);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          className="drawer"
        >
          <Grid
            item
            className={classes.toolbar}
            style={{ width: "100%", display: "flex" }}
          >
            <a href="#" alt="Inicio" className="logocont">
              <img
                src={logo5}
                alt="logo5"
                className="img-fluid logo"
                onClick={() => handleDrawerSelect(0)}
              />
            </a>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <List>
              <li>
                <a href="#servicios" className="aList">
                  <ListItem
                    button
                    selected={stateIndex === 1}
                    onClick={() => handleDrawerSelect(1)}
                  >
                    <ListItemText className="listDrawer" primary="Servicios" />
                  </ListItem>
                </a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <a href="#clientes" className="aList">
                  <ListItem
                    button
                    selected={stateIndex === 2}
                    onClick={() => handleDrawerSelect(2)}
                  >
                    <ListItemText className="listDrawer" primary="Clientes" />
                  </ListItem>
                </a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <a href="#nosotros" className="aList">
                  <ListItem
                    button
                    selected={stateIndex === 3}
                    onClick={() => handleDrawerSelect(3)}
                  >
                    <ListItemText className="listDrawer" primary="DEMO" />
                  </ListItem>
                </a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <a href="#contactos" className="aList">
                  <ListItem
                    button
                    selected={stateIndex === 4}
                    onClick={() => handleDrawerSelect(4)}
                  >
                    <ListItemText className="listDrawer" primary="Contacto" />
                  </ListItem>
                </a>
              </li>
            </List>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <IconButton color="primary" size="medium" className="nets">
              <Facebook />
            </IconButton>
            <IconButton
              color="primary"
              style={{ marginTop: "12px" }}
              size="medium"
              className="nets"
              onClick={() =>
                window.open("https://www.instagram.com/timelab_ec/", "_blank")
              }
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="primary"
              style={{ marginTop: "12px" }}
              size="medium"
              className="nets"
              onClick={() =>
                window.open(
                  "https://wa.me/593963395950?text=Hola%21+me+gustaría+ponerme+en+contacto+con+TimeLab",
                  "_blank"
                )
              }
            >
              <WhatsApp />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
