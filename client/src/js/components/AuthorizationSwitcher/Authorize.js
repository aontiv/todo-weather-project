import { css } from "styled-components";
import React, { Component } from "react";

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
            font-size: 1.75rem;
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
            font-size: 1.75rem;
        }

        @media screen and (min-width: 60rem) {
            width: 33%;
        }
    `,
    p: `
        color: #858585;
        font-size: 0.75rem;

        @media screen and (min-width: 37.5rem) {
            font-size: 1.25rem;
        }
    `,
    span: css`
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: transparent;
        transition: color 500ms, border-bottom-color 500ms;

        :hover {
            cursor: pointer;
            color: ${props => props.theme.primary};
            border-bottom-color: ${props => props.theme.primary};
        }
    `
};

class Authorize extends Component {
    render() {
        return (
            <div css={styles.container}>
                <input css={styles.input} type="text" placeholder="username" />
                <input css={styles.input} type="password" placeholder="password" />
                <button css={styles.button} type="button">LOGIN</button>
                <p css={styles.p}><span css={styles.span}>login</span> | <span css={styles.span}>register</span></p>
            </div>
        );
    }
}

export default Authorize;
