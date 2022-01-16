/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import {
  ExpandLess,
  ExpandMore,
  Facebook,
  Instagram,
  WhatsApp,
} from "@material-ui/icons";
import { Collapse, IconButton } from "@material-ui/core";
import logo5 from "../img/cloud.svg";
import { HashLink as Link } from "react-router-hash-link";

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
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const getPathOption = (hash) => {
  switch (hash) {
    case "tienda":
      return 5;
    case "portafolio":
      return 6;
    case "corporativa":
      return 7;
    case "marketing":
      return 8;
    case "blog":
      return 9;
    case "#briefcase":
      return 10;
    case "#mark":
      return 11;
    case "#testimonials":
      return 12;
    default:
      return 0;
  }
};

export default function PermanentDrawerLeft(props) {
  var { option, hash } = props;
  const opServices = option === 1 ? true : false;
  const opClients = option === 2 ? true : false;
  option = hash ? getPathOption(hash) : option;
  const classes = useStyles();
  const [stateIndex, setStateIndex] = React.useState(option);
  const [openClients, setOpenClients] = React.useState(opClients);
  const [openServices, setOpenServices] = React.useState(opServices);
  const [openSocial, setOpenSocial] = React.useState(!openServices);
  const handleDrawerSelect = (index) => {
    setStateIndex(index);
    if (index === 1) {
      setOpenServices((prevOpenServices) => !prevOpenServices);
      setOpenSocial((prevSocial) => !prevSocial);
    } else if (index === 2)
      setOpenClients((prevOpenClients) => !prevOpenClients);
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
            <a href="/" alt="Inicio" className="logocont">
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
                <ListItem
                  button
                  selected={stateIndex === 1}
                  onClick={() => handleDrawerSelect(1)}
                  component={Link}
                  to="/services/#"
                >
                  <ListItemText className="listDrawer" primary="Servicios" />
                  {openServices ? (
                    <ExpandLess style={{ color: "#ffff" }} />
                  ) : (
                    <ExpandMore style={{ color: "#ffff" }} />
                  )}
                </ListItem>
              </li>
              <Collapse
                component="li"
                in={openServices}
                timeout="auto"
                unmountOnExit
              >
                <List disablePadding>
                  <ListItem
                    button
                    selected={stateIndex === 5}
                    onClick={() => handleDrawerSelect(5)}
                    component={Link}
                    to="/services/tienda/#"
                  >
                    <ListItemText
                      className={`listDrawer ${classes.nested}`}
                      primary="Telefonía IP"
                    />
                  </ListItem>
                </List>
              </Collapse>
              <li>
                <div className="divider" />
              </li>
              <Collapse
                component="li"
                in={openClients}
                timeout="auto"
                unmountOnExit
              >
                <List disablePadding>
                  <li>
                    <ListItem
                      button
                      selected={stateIndex === 10}
                      onClick={() => handleDrawerSelect(10)}
                      component={Link}
                      to="/clients#briefcase"
                    >
                      <ListItemText
                        className={`listDrawer ${classes.nested}`}
                        primary="Portafolio"
                      />
                    </ListItem>
                  </li>
                  <li>
                    <ListItem
                      button
                      selected={stateIndex === 11}
                      onClick={() => handleDrawerSelect(11)}
                      component={Link}
                      to="/clients#mark"
                    >
                      <ListItemText
                        className={`listDrawer ${classes.nested}`}
                        primary="Marcas"
                      />
                    </ListItem>
                  </li>
                  <li>
                    <ListItem
                      button
                      selected={stateIndex === 12}
                      onClick={() => handleDrawerSelect(12)}
                      component={Link}
                      to="/clients#testimonials"
                    >
                      <ListItemText
                        className={`listDrawer ${classes.nested}`}
                        primary="Testimonios"
                      />
                    </ListItem>
                  </li>
                </List>
              </Collapse>
              <li>
                <div className="divider" />
              </li>
              <li>
                <ListItem
                  button
                  selected={stateIndex === 3}
                  component={Link}
                  to="/#nosotros"
                >
                  <ListItemText className="listDrawer" primary="DEMO" />
                </ListItem>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <ListItem
                  button
                  selected={stateIndex === 4}
                  component={Link}
                  to="/#contactos"
                >
                  <ListItemText className="listDrawer" primary="Contacto" />
                </ListItem>
              </li>
            </List>
          </Grid>
          <Collapse in={openSocial} timeout="auto" unmountOnExit>
            <Grid
              item
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <IconButton
                color="primary"
                style={{ backgroundColor: "#e1ebf6" }}
                size="medium"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="primary"
                style={{ backgroundColor: "#e1ebf6", marginTop: "5px" }}
                size="medium"
                onClick={() =>
                  window.open("https://www.instagram.com/timelab_ec/", "_blank")
                }
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="primary"
                style={{ backgroundColor: "#e1ebf6", marginTop: "5px" }}
                size="medium"
                onClick={() =>
                  window.open(
                    "https://wa.me/59398765011?text=Hola%21+me+gustaría+ponerme+en+contacto+con+FONTEC",
                    "_blank"
                  )
                }
              >
                <WhatsApp />
              </IconButton>
            </Grid>
          </Collapse>
        </Grid>
      </Drawer>
    </div>
  );
}
