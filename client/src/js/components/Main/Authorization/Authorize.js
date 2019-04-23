import uuidv4 from "uuid/v4";
import { css } from "styled-components";
import React, { Component } from "react";
import { _login, _addUser } from "../../../client-api";

const styles = {
    container: `
        grid-row: 2;
        display: flex;
        grid-column: 1 / 5;
        align-items: center;
        margin-top: 3.75rem;
        flex-direction: column;
        margin-bottom: 3.75rem;

        @media screen and (min-width: 37.5rem) {
            margin-top: 7.5rem;
        }
    `,
    input: `
        width: 66%;
        font-size: 1rem;
        height: 1.9375rem;
        text-align: center;
        padding: 0.3125rem;
        border-style: unset;
        border-radius: 0.3125rem;
        margin-bottom: 0.3125rem;
        background-color: #f1f1f1;

        @media screen and (min-width: 37.5rem) {
            height: 2.75rem;
            padding: 0.625rem;
            font-size: 1.25rem;
        }

        @media screen and (min-width: 60rem) {
            width: 33%;
        }
    `,
    button: css`
        width: 66%;
        color: #fff;
        font-size: 1rem;
        height: 1.9375rem;
        border-style: unset;
        margin-bottom: 0.625rem;
        border-radius: 0.3125rem;
        transition: background-color 500ms;
        background-color: ${props => props.theme.secondary};

        :hover {
            cursor: pointer;
            background-color: ${props => props.theme.primary};
        }

        @media screen and (min-width: 37.5rem) {
            height: 2.75rem;
            padding: 0.5rem;
            font-size: 1.25rem;
        }

        @media screen and (min-width: 60rem) {
            width: 33%;
        }
    `,
    p: css`
        color: #858585;
        font-size: 0.75rem;

        @media screen and (min-width: 37.5rem) {
            font-size: 1rem;
        }
    `,
    login: css`
        border-bottom: 2px solid ${props => props.context === "login" ? props.theme.secondary : "transparent"};

        &:hover {
            cursor: pointer;
        }
    `,
    register: css`
        border-bottom: 2px solid ${props => props.context === "register" ? props.theme.secondary : "transparent"};

        &:hover {
            cursor: pointer;
        }
    `
};

class Authorize extends Component {
    state = {
        fields: {
            username: "",
            password: ""
        },
        context: "login"
    };

    handleFieldChange = evt => {
        var fields = { ...this.state.fields, [evt.target.name]: evt.target.value };
        this.setState({ fields });
    };

    handleContextChange = evt => {
        this.setState({ context: evt.target.textContent });
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.context === "login") {
            this.handleLogin();
        }
        else {
            this.handleRegister();
        }
    };

    handleLogin = () => {
        _login(this.state.fields)
            .then(this.login);
    };

    login = data => {
        if (data.status === 200) {
            this.props.login(data.body);
        }
        else {
            console.log(data.message);
        }
    };

    handleRegister = () => {
        const newUser = this.createUser();

        _addUser(newUser)
            .then(this.register)
    };

    register = data => {
        this.login(data)
    };

    createUser = () => {
        return {
            id: uuidv4(),
            ...this.state.fields
        };
    };

    render() {
        return (
            <form css={styles.container} onSubmit={this.handleFormSubmit}>
                <input
                    css={styles.input}
                    type="text"
                    placeholder="username"
                    value={this.state.fields.username}
                    name="username"
                    onChange={this.handleFieldChange}
                />
                <input
                    css={styles.input}
                    type="password"
                    placeholder="password"
                    value={this.state.fields.password}
                    name="password"
                    onChange={this.handleFieldChange}
                />
                <button
                    css={styles.button}
                    type="submit"
                >
                    {this.state.context.toUpperCase()}
                </button>
                <p css={styles.p}>
                    <span
                        css={styles.login}
                        context={this.state.context}
                        onClick={this.handleContextChange}>login</span> |&nbsp;
                    <span
                        css={styles.register}
                        context={this.state.context}
                        onClick={this.handleContextChange}>register</span>
                </p>
            </form>
        );
    }
}

export default Authorize;
