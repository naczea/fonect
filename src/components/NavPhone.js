/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  BusinessCenter,
  ImportantDevices,
  People,
  Telegram,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import logo6 from "../img/logo6.svg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    zIndex: 100,
    backgroundColor: "#325C8A",
    height: "9.5vh",
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
    >
      <BottomNavigationAction
        label="Servicios"
        value="Servicios"
        icon={
          <a href="#servicios">
            <ImportantDevices style={{ color: grey[50], fontSize: 30 }} />
          </a>
        }
      />
      <BottomNavigationAction
        label="Clientes"
        value="Clientes"
        icon={
          <a href="#clientes">
            <BusinessCenter style={{ color: grey[50], fontSize: 30 }} />
          </a>
        }
      />
      <a href="#" className="imgNavPhone">
        <img alt="logo" src={logo6} />
      </a>
      <BottomNavigationAction
        label="Nosotros"
        value="Nosotros"
        icon={
          <a href="#nosotros">
            <People style={{ color: grey[50], fontSize: 30 }} />
          </a>
        }
      />
      <BottomNavigationAction
        label="Contácto"
        value="Contácto"
        icon={
          <a href="#contactos">
            <Telegram style={{ color: grey[50], fontSize: 30 }} />
          </a>
        }
      />
    </BottomNavigation>
  );
}
