import ReactDOM from "react-dom";
import React, { Fragment } from "react";

import App from "./components/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        color: #858585;
        box-sizing: border-box;
        letter-spacing: 0.03125rem;
        font-family: "Montserrat", sans-serif;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    p {
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    input {
        color: #858585;
    }
`;

ReactDOM.render(
    <Fragment>
        <GlobalStyles />
        <App />
    </Fragment>,
    document.getElementById("root")
);
