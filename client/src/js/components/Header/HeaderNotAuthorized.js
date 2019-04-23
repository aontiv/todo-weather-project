import { css } from "styled-components";
import React, { Component } from "react";

const styles = {
    header: css`
        color: #fff;
        display: flex;
        padding: 0.5rem;
        align-items: flex-end;
        margin-bottom: 2.1875rem;
        background-color: ${props => props.theme.primaryD};

        @media screen and (min-width: 37.5rem) {
            width: 100%;
            padding: 1rem;
            justify-content: center;
        }

        @media screen and (min-width: 60rem) {
            margin-bottom: 5rem;
        }
    `,
    h1: css`
        font-size: 1.5625rem;
        font-family: ${props => props.theme.primaryFont};

        @media screen and (min-width: 37.5rem) {
            width: 100%;
            max-width: 37.5rem;
            font-size: 2.8125rem;
        }

        @media screen and (min-width: 60rem) {
            padding: 0 1rem;
            max-width: 60rem;
        }
    `
}

class HeaderNotAuthorized extends Component {
    render() {
        return (
            <header css={styles.header}>
                <h1 css={styles.h1}>Todo Weather</h1>
            </header>
        );
    }
}

export default HeaderNotAuthorized;
