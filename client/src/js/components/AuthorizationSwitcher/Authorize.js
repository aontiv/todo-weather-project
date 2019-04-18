import React, { Component } from "react";

class Authorize extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <input type="password" />
                <button type="button">LOGIN</button>
                <span>LOGIN / REGISTER</span>
            </div>
        );
    }
}

export default Authorize;
