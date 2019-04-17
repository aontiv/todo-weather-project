import React, { Component } from "react";

class HeaderAuthorized extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>LOGOUT</span>
                </div>
                <div>
                    <h1>Todo Weather</h1>
                    <span>{this.props.username}</span>
                </div>
            </div>
        );
    }
}

export default HeaderAuthorized;
