import ReactDOM from "react-dom";
import React, { Fragment } from "react";

import App from "./components/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
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

    p {
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;

ReactDOM.render(
    <Fragment>
        <GlobalStyles />
        <App />
    </Fragment>,
    document.getElementById("root")
);
