/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { HashLink as Link } from "react-router-hash-link";
import {
  BusinessCenter,
  Home,
  ImportantDevices,
  People,
  Telegram,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    zIndex: 100,
    backgroundColor: "#325C8A",
    top: "auto",
    bottom: 0,
  },
  box: {
    minWidth: 60,
    textDecoration: "unset",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={`NavPhone ${classes.root}`}
      showLabels
    >
      <BottomNavigationAction
        className={classes.box}
        label="Servicios"
        value="Servicios"
        icon={<ImportantDevices style={{ color: grey[50] }} />}
        component={Link}
        to="/services/#"
      />
      <BottomNavigationAction
        className={classes.box}
        label="Clientes"
        value="Clientes"
        icon={<BusinessCenter style={{ color: grey[50] }} />}
        component={Link}
        to="/clients/#"
      />
      <BottomNavigationAction
        className={classes.box}
        label="Inicio"
        value="Inicio"
        icon={<Home style={{ color: grey[50] }} />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        className={classes.box}
        label="Nosotros"
        value="Nosotros"
        icon={<People style={{ color: grey[50] }} />}
        component={Link}
        to="/#nosotros"
      />
      <BottomNavigationAction
        className={classes.box}
        label="Contáctanos"
        value="Contáctanos"
        icon={<Telegram style={{ color: grey[50] }} />}
        component={Link}
        to="/#contactos"
      />
    </BottomNavigation>
  );
}
