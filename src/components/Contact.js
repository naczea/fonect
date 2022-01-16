import { Button, Grid, Snackbar, TextField } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import illusContact from "../img/contact.svg";
import emailjs from "emailjs-com";
import Zoom from "react-reveal/Zoom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      subject: "",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
        subject: false,
        message: false,
      },
      openAlert: false,
    };
  }

  hadleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email,
      this.state.subject,
      this.state.message
    );
    let iter = 0;
    for (let erro in errors) if (errors[erro] === "") iter++;

    e.preventDefault();
    const data = {
      subject: this.state.subject,
      name: this.state.firstname + " " + this.state.lastname,
      telnum: this.state.telnum,
      email: this.state.email,
      message: this.state.message,
    };

    let val2 = false;
    for (let iter in data) {
      if (data[iter] === "") {
        val2 = true;
        break;
      }
    }

    if (iter === 6 && !val2) {
      emailjs
        .send("service_1tgc97r", "template_mtf5jh1", data, "user_nwUbTogG0jpjTWh8hXISo")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      this.setState({ openAlert: true });
      this.resetInputs();
    }
  };

  resetInputs = () => {
    this.setState({
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      subject: "",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
        subject: false,
        message: false,
      },
    });
  };

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate = (firstname, lastname, telnum, email, subject, message) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      subject: "",
      message: "",
    };
    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "El nombre de contener al menos 3 carateres";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "El nombre no puede contener más de 10 caracteres";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "El apellido debe contener al menos 3 caracteres";
    else if (this.state.touched.lastname && lastname.length > 15)
      errors.lastname = "El apellido no puede contener más de 15 caracteres";

    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (this.state.touched.email && !regEmail.test(email))
      errors.email = "Ingrese un email válido";

    const regNum = /^\d+$/;
    if (this.state.touched.telnum && !regNum.test(telnum))
      errors.telnum = "El célular debe contener solo números";
    else if (this.state.touched.telnum && telnum.length !== 10)
      errors.telnum = "El célular debe contener 10 dígitos";

    if (this.state.touched.subject && subject.length < 1)
      errors.subject = "El asunto es requerido";

    if (this.state.touched.message && message.length < 1)
      errors.message = "El mensaje es requerido";

    return errors;
  };

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email,
      this.state.subject,
      this.state.message
    );
    const handleClose = (event, reason) => {
      if (reason === "clickaway") return;
      this.setState({ openAlert: !this.state.openAlert });
    };
    return (
      <div id={this.props.id} className="contact">
        <Grid
          container
          alignContent="center"
          justify="center"
          className="contactHeader"
        >
          <h1>
            Contáctanos
          </h1>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="contactConten"
        >
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} md={6}>
              <form
                className="formContact"
                noValidate
                autoComplete="true"
                onSubmit={(e) => this.onSubmit(e)}
              >
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstname"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstname"
                      label="Nombre"
                      value={this.state.firstname}
                      onChange={(e) => this.hadleInputChange(e)}
                      onBlur={this.handleBlur("firstname")}
                      helperText={errors.firstname}
                      error={errors.firstname !== ""}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastname"
                      label="Apellido"
                      name="lastname"
                      autoComplete="family-name"
                      value={this.state.lastname}
                      onChange={(e) => this.hadleInputChange(e)}
                      onBlur={this.handleBlur("lastname")}
                      helperText={errors.lastname}
                      error={errors.lastname !== ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={(e) => this.hadleInputChange(e)}
                      onBlur={this.handleBlur("email")}
                      helperText={errors.email}
                      error={errors.email !== ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="telnum"
                      label="Celular"
                      name="telnum"
                      autoComplete="tel"
                      value={this.state.telnum}
                      onChange={(e) => this.hadleInputChange(e)}
                      onBlur={this.handleBlur("telnum")}
                      helperText={errors.telnum}
                      error={errors.telnum !== ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="subject"
                      label="Asunto"
                      name="subject"
                      value={this.state.subject}
                      onChange={(e) => this.hadleInputChange(e)}
                      onBlur={this.handleBlur("subject")}
                      helperText={errors.subject}
                      error={errors.subject !== ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="message"
                      label="Mensaje"
                      name="message"
                      multiline
                      rows={5}
                      value={this.state.message}
                      onChange={(e) => this.hadleInputChange(e)}
                      onBlur={this.handleBlur("message")}
                      helperText={errors.message}
                      error={errors.message !== ""}
                    />
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    type="submit"
                    style={{ marginTop: "15px" }}
                    className="btntime"
                  >
                    Enviar
                  </Button>
                </Grid>
              </form>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={6}
              container
              justify="center"
              alignItems="center"
              className="illusContact"
            >
              <Zoom top>
                <img
                  src={illusContact}
                  alt="illusContact"
                  className="img-fluid"
                />
              </Zoom>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
          open={this.state.openAlert}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="success"
          >
            Mensaje enviado, pronto nos pondremos en contacto contigo!
          </MuiAlert>
        </Snackbar>
      </div>
    );
  }
}

export default Contact;
