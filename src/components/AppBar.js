import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo2 from "../img/logo2.svg";
import { Collapse, List, ListItem, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Menu, ExpandLess } from "@material-ui/icons";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgAppBar: {
    backgroundColor: "#325C8A",
  },
  image: {
    marginRight: theme.spacing(2),
    maxWidth: 150,
  },
  btn: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  listUper: {
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: 12,
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

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { option } = props;
  const hash = getPathOption(props.hash);
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(hash);
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleDrawerSelect = (index) => {
    handleClickOpen();
    setIndex(index);
  };
  return (
    <div className={`appBar ${classes.root}`}>
      <AppBar position="static" className={classes.bgAppBar}>
        <Toolbar>
          <img
            src={logo2}
            alt="logo"
            className={`img-fluid ${classes.image}`}
          />
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: grey[50] }}
          >
            {option === 1 ? `Servicios` : `Clientes`}
          </Typography>
          <IconButton
            edge="end"
            style={{ color: grey[50] }}
            aria-label="Ver más"
            className={classes.btn}
            onClick={handleClickOpen}
          >
            {open ? <ExpandLess /> : <Menu />}
          </IconButton>
        </Toolbar>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {option === 1 ? (
            <List>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 5}
                onClick={() => handleDrawerSelect(5)}
                className={classes.listUper}
                component={Link}
                to="/services/tienda/#"
              >
                Tienda virtual
              </ListItem>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 6}
                onClick={() => handleDrawerSelect(6)}
                className={classes.listUper}
                component={Link}
                to="/services/portafolio/#"
              >
                Portafolio
              </ListItem>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 7}
                onClick={() => handleDrawerSelect(7)}
                className={classes.listUper}
                component={Link}
                to="/services/corporativa/#"
              >
                Web corporativa
              </ListItem>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 8}
                onClick={() => handleDrawerSelect(8)}
                className={classes.listUper}
                component={Link}
                to="/services/marketing/#"
              >
                Marketing Digital
              </ListItem>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 9}
                onClick={() => handleDrawerSelect(9)}
                className={classes.listUper}
                component={Link}
                to="/services/blog/#"
              >
                Blogs - Foros
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 10}
                onClick={() => handleDrawerSelect(10)}
                className={classes.listUper}
                component={Link}
                to="/clients#briefcase"
              >
                Portafolio
              </ListItem>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 11}
                onClick={() => handleDrawerSelect(11)}
                className={classes.listUper}
                component={Link}
                to="/clients#mark"
              >
                Marcas
              </ListItem>
              <ListItem
                button
                style={{ color: grey[50] }}
                selected={index === 12}
                onClick={() => handleDrawerSelect(12)}
                className={classes.listUper}
                component={Link}
                to="/clients#testimonials"
              >
                Testimonios
              </ListItem>
            </List>
          )}
        </Collapse>
      </AppBar>
    </div>
  );
}
