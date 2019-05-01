import uuidv4 from "uuid/v4";
import classNames from "classnames";
import Client from "../../../Client";
import Helpers from "../../../Helpers";
import React, { Component, Fragment } from "react";

import Input from "./Input";

const formStyles = validated => classNames(
    [ "col-md-6", "col-xl-4", "shadow", "p-2", "mb-4" ],
    { "was-validated": validated }
);

const errorStyles = error => classNames(
    [ "col-md-6", "col-xl-4", "alert", "alert-danger", "text-center","fade" ],
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
        evt.preventDefault();
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
            <div className="row flex-column align-items-center">
                <form className={formStyles(this.state.validated)} onSubmit={this.handleFormSubmit} noValidate={true}>
                    <header className="bg-primary p-1 mb-4 rounded">
                        <h2 className="text-center text-white">{Helpers.capitalize(this.state.context)}</h2>
                    </header>
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
                        margin={1}
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
                        margin={0}
                    />
                    <button
                        className="bg-secondary text-white btn btn-block"
                        type="submit"
                    >
                        {this.state.context.toUpperCase()}
                    </button>
                </form>
                <div className="mb-5">
                    <a
                        href=""
                        className="px-1"
                        onClick={this.handleContextChange}
                    >
                        login
                    </a>
                    <span className="text-primary">|</span>
                    <a
                        href=""
                        className="px-1"
                        onClick={this.handleContextChange}
                    >
                        register
                    </a>
                </div>
                <div className={errorStyles(this.state.error)}>{this.state.error}</div>
            </div>
        );
    }
}

export default Authorize;
