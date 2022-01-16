import { Button, Collapse, Grid, Snackbar, TextField } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Email, WhatsApp } from "@material-ui/icons";
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import emailjs from "emailjs-com";
import { HashLink as Link } from "react-router-hash-link";

class ModalLogin extends Component {
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
            email: ""
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
        return errors;
    };
    render() {
        const errors = this.validate(
            this.state.firstname,
            this.state.lastname,
            this.state.telnum,
            this.state.email
        );
        const handleClose = (event, reason) => {
            if (reason === "clickaway") return;
            this.setState({ openAlert: !this.state.openAlert });
        };

        return (
            <Modal show={this.props.isOpen} onHide={this.props.togleModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registro de usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Antes de descargar la demo, necesitamos que registre sus datos. Esto con la finalidad de mejorar nuestro servicio y enviarle nuevas promociones. </p>
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
                            color="primary"
                            style={{ marginLeft: 10, marginRight: 10 }}
                            onClick={() => this.togleOpenMail()}
                        >
                            REGISTRARSE
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
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disableElevation
                                        component={Link}
                                        to="/demo"
                                    >
                                        ENTRAR
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
                        Usuario registrado!
                    </MuiAlert>
                </Snackbar>
            </Modal>
        );
    }
}

export default ModalLogin;
