import { css } from "styled-components";
import React, { Component } from "react";

const styles = {
    container: `
        grid-row: 2;
        grid-column: 1 / 5;
        margin-top: 2.1875rem;
        margin-bottom: 1.875rem;

        @media screen and (min-width: 37.5rem) {
            margin-top: 5rem;
        }

        @media screen and (min-width: 60rem) {
            grid-column: 2 / 4;
            margin-bottom: 5rem;
        }
    `,
    input: `
        width: 75%;
        font-size: 1rem;
        height: 1.9375rem;
        padding: 0.3125rem;
        border-style: unset;
        border-radius: 0.3125rem;
        background-color: #f1f1f1;

        @media screen and (min-width: 37.5rem) {
            height: 2.5rem;
            padding: 0.625rem;
            font-size: 1.25rem;
        }
    `,
    button: css`
        width: 25%;
        color: #fff;
        font-size: 1rem;
        height: 1.9375rem;
        border-style: unset;
        border-radius: 0.3125rem;
        background-color: ${props => props.theme.SECONDARY};

        :hover {
            cursor: pointer;
        }

        @media screen and (min-width: 37.5rem) {
            height: 2.5rem;
            font-size: 1.25rem;
        }
    `
};

class AddTodo extends Component {
    state = {
        fields: {
            text: ""
        }
    };

    handleTextChange = evt => {
        const text = evt.target.value;
        this.setState({ fields: { text }});
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        this.props.addTodo(this.state.fields.text);
        this.setState({ fields: { text: "" } });
    };

    render() {
        return (
            <form css={styles.container} onSubmit={this.handleFormSubmit}>
                <input
                    css={styles.input}
                    type="text"
                    value={this.state.fields.text}
                    onChange={this.handleTextChange}
                />
                <button
                    css={styles.button}
                    type="submit"
                >
                    ADD
                </button>
            </form>
        );
    }
}

export default AddTodo;
