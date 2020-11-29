import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
var Recaptcha = require('react-recaptcha');

const styles = {
    form: {
        textAlign: "center",
    },
    image: {
        height: "60px",
        margin: "20px auto 20px auto",
    },
    pageTitle: {
        margin: "10px auto 10px auto",
    },
    textField: {
        margin: "10px auto 10px auto",
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
    },
    progress: {
        position: 'absolute'
    }
};


class signup extends Component {

    constructor() {
        super();
        this.state = {
            fullName: "",
            location: "",
            phoneNumber: "",
            email: "",
            errors: {},
            catchaOk: false,
            
        };
        this.recaptchadLoaded = this.recaptchadLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            fullName: this.state.fullName,
            location: this.state.location,
            phoneNumber: this.state.phoneNumber
        };
        axios.post("/createUser", userData)
            .then((res) => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err.response.data);
                this.setState({
                    errors: err.response.data,
                  });
            });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    recaptchadLoaded() {
        console.log('recaptcha loaded abcd');
    }

    verifyCallback() {
        this.setState({
            catchaOk: true
        });
    }
    render() {
        const { classes } = this.props;
        const { errors,catchaOk } = this.state;
        console.log(errors);
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            id="fullName"
                            name="fullName"
                            type="text"
                            label="fullName"
                            className={classes.textField}
                            helperText={errors.fullName}
                            error={errors.fullName ? true : false}
                            value={this.state.fullName}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            id="location"
                            name="location"
                            type="text"
                            label="location"
                            className={classes.textField}
                            helperText={errors.location}
                            error={errors.location ? true : false}
                            value={this.state.location}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            id="phoneNumber"
                            name="phoneNumber"
                            type="number"
                            label="Phone Number"
                            className={classes.textField}
                            helperText={errors.phoneNumber}
                            error={errors.phoneNumber ? true : false}
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <Recaptcha
                            sitekey="6LdhT-4ZAAAAAHpTlpyS34BrzXkHsW1tATRXv3l6"
                            render="explicit"
                            onloadCallback={this.recaptchadLoaded}
                            verifyCallback={this.verifyCallback}
                        />
                        {errors.errors && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.errors}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            value="Login"
                            disabled = {!catchaOk}
                        >
                            Signup
                        </Button>
                        
                    </form>

                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(signup);
