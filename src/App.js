import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Main from "./containers/Main";
import Services from "./containers/Services";
import Clients from "./containers/Clients";
import Service from "./containers/Service";
import Demo from "./containers/Demo";
import "./App.scss";

const myColors = createMuiTheme({
  palette: {
    primary: {
      main: "#5437e2",
    },
    secondary: {
      main: "#FDBF14",
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={myColors}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services/:name" component={Service} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/demo" component={Demo} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
