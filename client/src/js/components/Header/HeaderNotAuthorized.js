import { css } from "styled-components";
import React, { Component } from "react";

class HeaderNotAuthorized extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1 className="navbar-h1 text-white">Todo Weather</h1>
            </nav>
        );
    }
}

export default HeaderNotAuthorized;
