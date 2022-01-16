import { Button, Collapse, Grid, Snackbar, TextField } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Email, WhatsApp } from "@material-ui/icons";
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import emailjs from "emailjs-com";

class ModalPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEmail: false,
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
        message: false,
      },
      openAlert: false,
    };
  }

  togleOpenMail = () => {
    this.setState({
      openEmail: !this.state.openEmail,
    });
  };
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
      this.state.message
    );
    let iter = 0;
    for (let erro in errors) if (errors[erro] === "") iter++;
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
    e.preventDefault();
    if (iter === 5 && !val2) {
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

  validate = (firstname, lastname, telnum, email, message) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
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
      errors.telnum = "El célular debe contener 10 dígitos ej: 0912345678";

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
      this.state.message
    );
    const handleClose = (event, reason) => {
      if (reason === "clickaway") return;
      this.setState({ openAlert: !this.state.openAlert });
    };
    return (
      <Modal show={this.props.isOpen} onHide={this.props.togleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contactar Vía</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid
            container
            spacing={5}
            alignItems="center"
            justify="center"
            style={{ height: "10vh" }}
          >
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              color="primary"
              style={{ marginLeft: 10, marginRight: 10 }}
              onClick={() => this.togleOpenMail()}
            >
              Correo
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              color="primary"
              style={{ marginLeft: 10, marginRight: 10 }}
              onClick={() =>
                window.open(
                  `https://wa.me/593987635011?text=Hola%21+Me+gustaría+más+información+sobre+el+plan%3A+${this.props.plan.toUpperCase()}`,
                  "_blank"
                )
              }
            >
              Whatsapp
            </Button>
          </Grid>
          <Collapse in={this.state.openEmail} timeout="auto" unmountOnExit>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              style={{ marginTop: 20 }}
            >
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
                      value={this.props.plan.toUpperCase()}
                      onChange={(e) => this.hadleInputChange(e)}
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
                  >
                    Enviar
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Collapse>
        </Modal.Body>
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
      </Modal>
    );
  }
}

export default ModalPlans;
