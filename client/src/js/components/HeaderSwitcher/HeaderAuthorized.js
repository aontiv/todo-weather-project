import { css } from "styled-components";
import React, { Component } from "react";

const styles = {
    header: css`
        color: #fff;
        padding: 0.5rem;
        margin-bottom: 2.1875rem;
        background-color: ${props => props.theme.primaryD};

        @media screen and (min-width: 37.5rem) {
            width: 100%;
            padding: 1rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
        }

        @media screen and (min-width: 60rem) {
            margin-bottom: 5rem;
        }
    `,
    a: `
        display: block;
        font-size: 0.5rem;
        text-align: right;
        margin-bottom: 1rem;

        :hover {
            cursor: pointer;
        }

        @media screen and (min-width: 37.5rem) {
            width: 100%;
            font-size: 1rem;
            padding: 0 1rem;
            max-width: 37.5rem;
        }

        @media screen and (min-width: 60rem) {
            max-width: 60rem;
        }
    `,
    container: `
        width: 100%;
        display: flex;
        max-width: 37.5rem;

        @media screen and (min-width: 37.5rem) {
            padding: 0 1rem;
        }

        @media screen and (min-width: 60rem) {
            max-width: 60rem;
        }
    `,
    h1: css`
        font-size: 1.5625rem;
        font-family: ${props => props.theme.primaryFont};

        @media screen and (min-width: 37.5rem) {
            font-size: 2.8125rem;
        }
    `,
    span: `
        flex: 1;
        display: flex;
        font-size: 0.85rem;
        align-items: flex-end;
        justify-content: flex-end;

        @media screen and (min-width: 600px) {
            font-size: 1.5625rem;
        }
    `
};

class HeaderAuthorized extends Component {
    render() {
        return (
            <header css={styles.header}>
                <a css={styles.a}>logout</a>
                <div css={styles.container}>
                    <h1 css={styles.h1}>Todo Weather</h1>
                    <span css={styles.span}>{this.props.username}</span>
                </div>
            </header>
        );
    }
}

export default HeaderAuthorized;
