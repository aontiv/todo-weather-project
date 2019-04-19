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
            height: 2.75rem;
            padding: 0.625rem;
            font-size: 1.75rem;
        }
    `,
    button: css`
        width: 25%;
        color: #fff;
        font-size: 1rem;
        height: 1.9375rem;
        border-style: unset;
        border-radius: 0.3125rem;
        background-color: ${props => props.theme.secondary};

        :hover {
            cursor: pointer;
        }

        @media screen and (min-width: 37.5rem) {
            height: 2.75rem;
            font-size: 1.75rem;
        }
    `
};

class AddTodo extends Component {
    render() {
        return (
            <div css={styles.container}>
                <input css={styles.input} type="text" />
                <button css={styles.button} type="button">ADD</button>
            </div>
        );
    }
}

export default AddTodo;
