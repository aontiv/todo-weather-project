import { css } from "styled-components";
import React, { Component } from "react";

const styles = {
    header: css`
        color: #fff;
        padding: 1rem;
        background-color: ${props => props.theme.primaryD};
    `,
    h1: `
        font-size: 1.5625rem;
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
