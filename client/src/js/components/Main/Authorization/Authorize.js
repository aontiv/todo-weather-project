import uuidv4 from "uuid/v4";
import classNames from "classnames";
import Client from "../../../Client";
import Helpers from "../../../Helpers";
import React, { Component } from "react";

import Input from "./Input";

const formStyles = validated => classNames(
    [ "p-3", "rounded", "shadow", "mb-5", "mb-sm-0", "login-form" ],
    { "was-validated": validated }
);

const errorStyles = error => classNames(
    [ "alert", "alert-danger", "text-center", "fixed-bottom", "fade" ],
    { show: error }
);

class Authorize extends Component {
    state = {
        fields: {
            username: "",
            password: ""
        },
        context: "login",
        validated: false,
        error: ""
    };

    // References for client-side form validation purposes
    usernameInput = React.createRef();
    passwordInput = React.createRef();

    handleFieldChange = evt => {
        var fields = { ...this.state.fields, [evt.target.name]: evt.target.value };
        this.setState({ fields });
    };

    handleContextChange = evt => {
        this.setState({ context: evt.target.textContent });
    };

    handleFormSubmit = evt => {
        evt.preventDefault();

        const usernameValid = this.usernameInput.current.checkValidity();
        const passwordValid = this.passwordInput.current.checkValidity();

        if (usernameValid && passwordValid) {
            if (this.state.context === "login") {
                this.handleLogin();
            }
            else {
                this.handleRegister();
            }
        }

        this.setState({ validated: true });
    };

    handleLogin = () => {
        Client.login(this.state.fields)
            .then(this.handleResponse)
    };

    handleResponse = response => {
        if (response instanceof Error) {
            this.setState({ error: response.message });
        }
        else {
            this.login(response);
        }
    };

    login = data => {
        if (data) {
            this.props.login(data);
        }
        else {
            const fields = { username: "", password: "" };
            this.setState({ fields })
        }
    };

    handleRegister = () => {
        const newUser = this.createUser();

        Client.addUser(newUser)
            .then(this.handleResponse)
    };

    createUser = () => {
        return {
            userId: uuidv4(),
            ...this.state.fields
        };
    };

    render() {
        return (
            <div className="row justify-content-center">
                <form className={formStyles(this.state.validated)} onSubmit={this.handleFormSubmit} noValidate={true}>
                    <h2 className="text-center text-muted mb-4 login-h2">{Helpers.capitalize(this.state.context)}</h2>
                    <Input
                        className="form-control text-center"
                        type="text"
                        placeholder="username"
                        value={this.state.fields.username}
                        name="username"
                        onChange={this.handleFieldChange}
                        required
                        minLength="5"
                        pattern="^\w{5}(\w|-){0,15}$"
                        reference={this.usernameInput}
                    />
                    <Input
                        className="form-control text-center"
                        type="password"
                        placeholder="password"
                        value={this.state.fields.password}
                        name="password"
                        onChange={this.handleFieldChange}
                        required
                        minLength="5"
                        pattern="^\w{5}(\w|-){0,15}$"
                        reference={this.passwordInput}
                    />
                    <button
                        className="bg-secondary text-white btn btn-block mb-1"
                        type="submit"
                    >
                        {this.state.context.toUpperCase()}
                    </button>
                    <div className="d-flex justify-content-center mb-2">
                        <button
                            className="btn btn-link p-1"
                            type="button"
                            context={this.state.context}
                            onClick={this.handleContextChange}
                        >
                            login
                        </button>
                        <button
                            className="btn btn-link p-1"
                            type="button"
                            context={this.state.context}
                            onClick={this.handleContextChange}
                        >
                            register
                        </button>
                    </div>
                    <small className="help-text text-muted">*alpha-numeric characters, underscores, and dashes</small>
                </form>
                <div className={errorStyles(this.state.error)}>
                    <span className="mx-2">{this.state.error}</span>
                </div>
            </div>
        );
    }
}

export default Authorize;
