import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { WhatsApp, Chat, ExpandLess } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { useScrollTrigger, Zoom } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  whatsApp: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(1.5),
  },
  message: {
    position: "fixed",
    display: "none",
    bottom: theme.spacing(9),
    right: theme.spacing(1.5),
  },
  upButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export default function SimpleTooltips(props) {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: props.window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <div>
      <Tooltip
        title="WhatsApp"
        onClick={() =>
          window.open(
            "https://wa.me/593987635011?text=Hola%21+me+gustaría+ponerme+en+contacto+con+FONECT",
            "_blank"
          )
        }
      >
        <Fab color="primary" className={classes.whatsApp} size="large">
          <WhatsApp style={{ color: grey[50], fontSize: 28 }} />
        </Fab>
      </Tooltip>
      <Tooltip title="Chatear">
        <Fab color="primary" className={classes.message} size="large">
          <Chat style={{ color: grey[50], fontSize: 28 }} />
        </Fab>
      </Tooltip>
      <Zoom in={trigger}>
        <Tooltip title="Subir" onClick={() => scroll.scrollToTop()}>
          <Fab color="primary" className={classes.upButton} size="large">
            <ExpandLess style={{ color: grey[50], fontSize: 28 }} />
          </Fab>
        </Tooltip>
      </Zoom>
    </div>
  );
}
