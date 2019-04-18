import { css } from "styled-components";
import React, { Component } from "react";

const styles = {
    header: css`
        color: #fff;
        padding: 1rem;
        background-color: ${props => props.theme.primaryD};
    `,
    a: `
        display: block;
        font-size: 0.5rem;
        text-align: right;
        margin-bottom: 1rem;

        :hover {
            cursor: pointer;
        }
    `,
    container: `
        display: flex;
    `,
    h1: `
        font-size: 1.5625rem;
    `,
    span: `
        flex: 1;
        display: flex;
        font-size: 0.85rem;
        align-items: flex-end;
        justify-content: flex-end;
    `
};

class HeaderAuthorized extends Component {
    render() {
        return (
            <header css={styles.header}>
                <a css={styles.a}>LOGOUT</a>
                <div css={styles.container}>
                    <h1 css={styles.h1}>Todo Weather</h1>
                    <span css={styles.span}>{this.props.username}</span>
                </div>
            </header>
        );
    }
}

export default HeaderAuthorized;
